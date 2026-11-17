#!/usr/bin/env node
/** P1 deterministic glTF Transform + Meshopt LOD0/1/2 bundle.
 * Builds from uncompressed GLBs captured by scripts/render_assets.mjs.
 */
import { NodeIO } from '@gltf-transform/core';
import { EXTMeshoptCompression } from '@gltf-transform/extensions';
import { prune,dedup,weld,simplify,meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier } from 'meshoptimizer';
import { readFile,writeFile,mkdir,stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT=fileURLToPath(new URL('../',import.meta.url));
const catalog=JSON.parse(await readFile(resolve(ROOT,'catalog/models.json'),'utf8'));
const all=catalog.assets.filter(asset=>asset.kind==='procedural');
const args=process.argv.slice(2);
const ix=args.indexOf('--limit');
const limit=ix<0?all.length:Number(args[ix+1]);
if(!Number.isInteger(limit)||limit<1||limit>10000)throw Error('Invalid --limit');
const assets=all.slice(0,limit);
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready]);
const io=new NodeIO().registerExtensions([EXTMeshoptCompression])
 .registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const outputDir=resolve(ROOT,'public/generated');
await mkdir(outputDir,{recursive:true});
function measure(doc){
 let triangles=0,primitives=0;
 for(const mesh of doc.getRoot().listMeshes()){
   for(const p of mesh.listPrimitives()){
     const count=p.getIndices()?.getCount()??p.getAttribute('POSITION')?.getCount()??0;
     triangles+=count/3;primitives++;
   }
 }
 return {triangles:Math.round(triangles),primitives};
}
const entries=[];
for(const asset of assets){
 const input=resolve(ROOT,'.cache/raw',asset.slug+'.glb');
 const inputBytes=(await stat(input)).size;
 const initial=await io.read(input);
 await initial.transform(dedup(),prune());
 const cleanBytes=await io.writeBinary(initial);
 const variants=[];
 for(const cfg of [{level:0,ratio:1,error:0},{level:1,ratio:.62,error:.015},{level:2,ratio:.32,error:.05}]){
   const doc=await io.readBinary(cleanBytes);
   if(cfg.level>0)await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:cfg.ratio,error:cfg.error}));
   const before=measure(doc);
   await doc.transform(meshopt({encoder:MeshoptEncoder,level:'medium'}));
   const destination=resolve(outputDir,asset.slug+'-lod'+cfg.level+'.glb');
   await io.write(destination,doc);
   const bytes=await readFile(destination);
   const hash=createHash('sha256').update(bytes).digest('hex');
   variants.push({level:cfg.level,path:'public/generated/'+asset.slug+'-lod'+cfg.level+'.glb',
     sha256:hash,bytes:bytes.length,...before,ratio_target:cfg.ratio,error_limit:cfg.error});
 }
 entries.push({asset_id:asset.id,slug:asset.slug,original_bytes:inputBytes,variants,
   lod0_delta_percent:Math.round((1-variants[0].bytes/inputBytes)*10000)/100});
 console.log('OPTIMIZED',asset.slug,variants.map(v=>v.bytes),variants.map(v=>v.triangles));
}
await writeFile(resolve(outputDir,'index.json'),JSON.stringify({
  schema_version:'1.0.0',source:'original procedural Three.js via browser GLTFExporter',
  encoder:'glTF Transform + Meshopt',count:entries.length,
  entries
},null,2)+'\n');
console.log('P1 complete:',entries.length,'assets x three LOD variants');
