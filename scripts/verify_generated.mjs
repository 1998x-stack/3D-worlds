#!/usr/bin/env node
/** Verify P0 raster previews and P1 LOD bundle hashes/geometry budgets. */
import { readFile,stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { NodeIO } from '@gltf-transform/core';
import { EXTMeshoptCompression } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';

const ROOT=fileURLToPath(new URL('../',import.meta.url));
const assets=JSON.parse(await readFile(resolve(ROOT,'catalog/models.json'),'utf8'))
  .assets.filter(item=>item.kind==='procedural');
const index=JSON.parse(await readFile(resolve(ROOT,'public/generated/index.json'),'utf8'));
if(index.count!==assets.length||index.entries.length!==assets.length){
  throw Error('LOD manifest count mismatch: '+index.count+' expected '+assets.length);
}
await MeshoptDecoder.ready;
const io=new NodeIO().registerExtensions([EXTMeshoptCompression])
  .registerDependencies({'meshopt.decoder':MeshoptDecoder});
let totalBytes=0,totalOriginal=0,trianglesChanged=0,checkedVariants=0;
for(const asset of assets){
 const entry=index.entries.find(x=>x.asset_id===asset.id);
 if(!entry||entry.variants.length!==3)throw Error('Missing LOD0/1/2: '+asset.id);
 const webp=await sharp(resolve(ROOT,'public/thumbs',asset.slug+'.webp')).metadata();
 const avif=await sharp(resolve(ROOT,'public/thumbs',asset.slug+'.avif')).metadata();
 if(webp.format!=='webp'||avif.format!=='heif'||webp.width!==640||avif.width!==640){
   throw Error('Invalid thumbnail encoding or dimensions: '+asset.id);
 }
 totalOriginal+=entry.original_bytes;
 let previous=Infinity;
 for(const [indexVariant,variant] of entry.variants.entries()){
   if(variant.level!==indexVariant)throw Error('LOD order mismatch: '+asset.id);
   const binary=await readFile(resolve(ROOT,variant.path));
   const hash=createHash('sha256').update(binary).digest('hex');
   if(hash!==variant.sha256||binary.length!==variant.bytes)throw Error('GLB hash or size mismatch: '+asset.id);
   if(variant.triangles>previous)throw Error('Higher-detail LOD unexpectedly has fewer triangles: '+asset.id);
   if(variant.triangles<previous&&previous!==Infinity)trianglesChanged++;
   previous=variant.triangles;
   totalBytes+=binary.length;checkedVariants++;
   // Decode representative every-tenth asset for a lightweight Meshopt load smoke test.
   if(indexVariant===0 && assets.indexOf(asset)%10===0){
     const doc=await io.readBinary(binary);
     if(doc.getRoot().listMeshes().length===0)throw Error('GLB lost meshes: '+asset.id);
   }
 }
}
const result={assets:assets.length,webp_previews:assets.length,avif_previews:assets.length,
lod_files:checkedVariants,raw_bytes:totalOriginal,lod_total_bytes:totalBytes,
lod_reductions_observed:trianglesChanged};
console.log('P0/P1 VERIFIED',JSON.stringify(result,null,2));
