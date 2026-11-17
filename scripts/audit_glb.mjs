#!/usr/bin/env node
/**
 * Offline GLB acceptance gate: structural checks + official Khronos glTF Validator.
 * This tool never executes JavaScript embedded in model metadata.
 */
import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import validator from 'gltf-validator';

export const MAX_BYTES = 16 * 1024 * 1024;
export const MAX_TRIANGLES = 100_000;
export const MAX_TEXTURES = 24;
export const MAX_MATERIALS = 80;

function fail(message) { throw new Error(message); }
export function parseGlb(bytes) {
  if (bytes.length < 20 || bytes.toString('ascii',0,4) !== 'glTF') fail('Invalid GLB magic');
  if (bytes.readUInt32LE(4)!==2) fail('Only GLB version 2 is supported');
  if (bytes.readUInt32LE(8)!==bytes.length) fail('GLB header length mismatch');
  const jsonSize=bytes.readUInt32LE(12), type=bytes.readUInt32LE(16);
  if(type!==0x4E4F534A || jsonSize%4!==0 || jsonSize<4 || jsonSize>bytes.length-20){
    fail('Missing or invalid GLB JSON chunk');
  }
  const json=JSON.parse(bytes.subarray(20,20+jsonSize).toString('utf8').trimEnd());
  if(json.asset?.version!=='2.0') fail('glTF asset.version must equal 2.0');
  let cursor=20+jsonSize;
  if(cursor<bytes.length){
    if(cursor+8>bytes.length) fail('Truncated GLB BIN header');
    const binSize=bytes.readUInt32LE(cursor),binType=bytes.readUInt32LE(cursor+4);
    if(binType!==0x004E4942 || binSize%4!==0 || cursor+8+binSize!==bytes.length){
      fail('Invalid GLB BIN chunk layout');
    }
    cursor+=8+binSize;
  }
  if(cursor!==bytes.length) fail('Unexpected trailing GLB bytes');
  if((json.buffers||[]).some(item=>item.uri!==undefined) || (json.images||[]).some(item=>item.uri!==undefined)){
    fail('External or data-URI resources are prohibited: use self-contained GLB');
  }
  const meshes=json.meshes||[];
  if(meshes.length===0) fail('Asset must have at least one mesh');
  let triangles=0,vertices=0,drawCalls=0;
  for(const mesh of meshes){
    for(const primitive of mesh.primitives||[]){
      if((primitive.mode??4)!==4) fail('Only TRIANGLES primitive mode is supported by the starter ingestion');
      const position=json.accessors?.[primitive.attributes?.POSITION];
      if(!position || !Number.isInteger(position.count) || position.count<3) fail('Missing valid POSITION accessor');
      const count=primitive.indices===undefined ? position.count : json.accessors?.[primitive.indices]?.count;
      if(!Number.isInteger(count) || count<3 || count%3!==0) fail('Invalid triangle index count');
      if(!Array.isArray(position.min)||!Array.isArray(position.max)||
         position.min.length!==3||position.max.length!==3 ||
         [...position.min,...position.max].some(n=>!Number.isFinite(n))) fail('Invalid POSITION accessor bounds');
      triangles+=count/3;vertices+=position.count;drawCalls++;
    }
  }
  if(drawCalls===0) fail('No triangle primitives');
  if(triangles>MAX_TRIANGLES) fail('Triangle budget exceeded: '+triangles);
  if((json.textures||[]).length>MAX_TEXTURES) fail('Texture budget exceeded');
  if((json.materials||[]).length>MAX_MATERIALS) fail('Material budget exceeded');
  return {json,triangles,vertices,drawCalls,meshes:meshes.length,
    materials:(json.materials||[]).length,textures:(json.textures||[]).length};
}
export async function auditGlb(file,{maxWarnings=0}={}){
  const bytes=await readFile(file);
  if(bytes.length>MAX_BYTES) fail('File exceeds 16 MiB acceptance budget');
  const stats=parseGlb(bytes);
  const report=await validator.validateBytes(new Uint8Array(bytes),{
    uri:basename(file),format:'glb',writeTimestamp:false,maxIssues:100
  });
  const issues=report.issues||{};
  const errors=issues.numErrors??0,warnings=issues.numWarnings??0;
  if(errors>0) fail('Khronos Validator found '+errors+' specification error(s): '+JSON.stringify((issues.messages||[]).slice(0,4)));
  if(warnings>maxWarnings) fail('Khronos Validator found '+warnings+' warning(s), above allowed '+maxWarnings);
  return {ok:true,bytes:bytes.length,triangles:stats.triangles,
    vertices:stats.vertices,draw_calls:stats.drawCalls,meshes:stats.meshes,
    materials:stats.materials,textures:stats.textures,
    validator_version:report.validatorVersion,
    warnings,issues:(issues.messages||[]).slice(0,40)};
}
if(process.argv[1]?.endsWith('/audit_glb.mjs')){
  const filename=process.argv[2];
  if(!filename){console.error('Usage: node scripts/audit_glb.mjs <file.glb> [max-warnings]');process.exitCode=2;}
  else auditGlb(filename,{maxWarnings:Number(process.argv[3]||0)})
    .then(r=>console.log(JSON.stringify(r,null,2)))
    .catch(e=>{console.error('GLB QUALITY GATE FAILED:',e.message);process.exitCode=1;});
}
