#!/usr/bin/env node
/** Synthetic acceptance tests for GLB parser + official validator + batch publisher. */
import assert from 'node:assert/strict';
import { writeFile,readFile,rm,access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseGlb,auditGlb } from './audit_glb.mjs';
import { ingest } from './ingest_glb.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const source=resolve(root,'ingest/staging/qa-fixture.glb');
const batchFile=resolve(root,'ingest/qa-test-batch.json');
const manifest=resolve(root,'catalog/models.json');
const oldManifest=await readFile(manifest,'utf8');
let published;
function align4(n){return Math.ceil(n/4)*4;}
function fixture(){
 const positions=Buffer.from(new Float32Array([0,0,0, 1,0,0, 0,1,0]).buffer);
 const indices=Buffer.from(new Uint16Array([0,1,2]).buffer);
 const gltf={
  asset:{version:'2.0',generator:'3D Worlds CI test fixture'},
  scene:0,scenes:[{nodes:[0]}],nodes:[{mesh:0}],
  meshes:[{primitives:[{attributes:{POSITION:0},indices:1}]}],
  buffers:[{byteLength:42}],
  bufferViews:[{buffer:0,byteOffset:0,byteLength:36,target:34962},
               {buffer:0,byteOffset:36,byteLength:6,target:34963}],
  accessors:[{bufferView:0,componentType:5126,type:'VEC3',count:3,min:[0,0,0],max:[1,1,0]},
             {bufferView:1,componentType:5123,type:'SCALAR',count:3,max:[2],min:[0]}]
 };
 const json=Buffer.from(JSON.stringify(gltf),'utf8');
 const jsonPadded=Buffer.alloc(align4(json.length),0x20);json.copy(jsonPadded);
 const bin=Buffer.alloc(44);positions.copy(bin);indices.copy(bin,36);
 const total=12+8+jsonPadded.length+8+bin.length;
 const buffer=Buffer.alloc(total);
 buffer.write('glTF',0,'ascii');buffer.writeUInt32LE(2,4);buffer.writeUInt32LE(total,8);
 buffer.writeUInt32LE(jsonPadded.length,12);buffer.writeUInt32LE(0x4e4f534a,16);
 jsonPadded.copy(buffer,20);
 const binPos=20+jsonPadded.length;buffer.writeUInt32LE(bin.length,binPos);
 buffer.writeUInt32LE(0x004e4942,binPos+4);bin.copy(buffer,binPos+8);
 return buffer;
}
try{
 const data=fixture();
 const parsed=parseGlb(data);
 assert.equal(parsed.triangles,1);
 assert.equal(parsed.vertices,3);
 assert.throws(()=>parseGlb(data.subarray(0,30)),/length mismatch/);
 await writeFile(source,data);
 const quality=await auditGlb(source,{maxWarnings:30});
 assert.equal(quality.triangles,1);
 assert.equal(quality.ok,true);
 const item={file:'qa-fixture.glb',slug:'qa-glb-fixture',category:'decor',title:'CI Triangle',
  title_zh:'测试三角形',summary:'Synthetic temporary geometry fixture',
  tags:['test','fixture'],author:'3D Worlds',license:'MIT',dimensions_m:[1,1,.01]};
 await writeFile(batchFile,JSON.stringify({version:1,assets:[item]}));
 const dry=await ingest('ingest/qa-test-batch.json',{maxWarnings:30});
 assert.equal(dry.status,'dry-run');
 assert.equal((await readFile(manifest,'utf8')),oldManifest,'dry run must not mutate catalog');
 const applied=await ingest('ingest/qa-test-batch.json',{apply:true,maxWarnings:30});
 assert.equal(applied.status,'applied');
 assert.equal(applied.entries.length,1);
 published=resolve(root,applied.entries[0].target);
 const loaded=JSON.parse(await readFile(manifest,'utf8'));
 const imported=loaded.assets.find(asset=>asset.slug==='qa-glb-fixture');
 assert.ok(imported);
 assert.equal(imported.content_sha256,createHash('sha256').update(data).digest('hex'));
 assert.equal((await readFile(published)).length,data.length);
 await assert.rejects(ingest('ingest/qa-test-batch.json',{apply:true,maxWarnings:30}),/Duplicate/);
 console.log('PASS: strict GLB parser, Khronos validation, dry run, publish, hash and duplicate detection');
}finally{
 await writeFile(manifest,oldManifest);
 await rm(source,{force:true});
 await rm(batchFile,{force:true});
 if(published)await rm(published,{force:true});
}
