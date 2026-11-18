#!/usr/bin/env node
/** Release-time immutable asset index. Hashes REAL generated binaries/previews.
 * No entries represent manufacturing or assembly-fit certification.
 */
import {readFile,mkdir,writeFile,rename} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=fileURLToPath(new URL('../',import.meta.url));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
export function checkReleaseContracts(catalog,index,shards){
 const all=catalog.assets||[],variants=index.entries||[];
 if(!all.length||index.count!==variants.length||index.count!==all.length)
  throw Error('Release must cover all catalog assets and LOD index entries');
 if(shards.total_assets!==all.length ||
    shards.shards.reduce((n,x)=>n+x.count,0)!==all.length)
  throw Error('Static shard projection is missing release assets');
 const ids=new Set(all.map(a=>a.id)),entries=new Set(variants.map(v=>v.asset_id));
 if(ids.size!==all.length||entries.size!==variants.length)
  throw Error('Duplicate asset ID or index entry');
 for(const asset of all){
  if(!entries.has(asset.id))throw Error('Missing optimized source asset: '+asset.id);
  const item=variants.find(v=>v.asset_id===asset.id);
  if(item.slug!==asset.slug||item.variants.length!==3 ||
     item.variants.some((v,i)=>v.level!==i||!v.sha256))
   throw Error('Invalid LOD mapping: '+asset.id);
 }
 return {assets:all.length,lod_variants:variants.length*3,shards:shards.shards.length};
}
export async function buildReleaseIndex(output=resolve(ROOT,'public/release/manifest.json')){
 const catalogBytes=await readFile(resolve(ROOT,'catalog/models.json'));
 const catalog=JSON.parse(catalogBytes);
 const index=JSON.parse(await readFile(resolve(ROOT,'public/generated/index.json')));
 const shards=JSON.parse(await readFile(resolve(ROOT,'public/catalog/index.json')));
 const summary=checkReleaseContracts(catalog,index,shards);
 const variants=new Map(index.entries.map(x=>[x.asset_id,x]));
 const assets=[];
 for(const asset of catalog.assets){
  const previews={};
  for(const format of ['webp','avif']){
   const path='public/thumbs/'+asset.slug+'.'+format;
   const bytes=await readFile(resolve(ROOT,path));
   previews[format]={path,sha256:sha(bytes),bytes:bytes.length};
  }
  const lods=[];
  for(const v of variants.get(asset.id).variants){
   const bytes=await readFile(resolve(ROOT,v.path));
   if(bytes.length!==v.bytes||sha(bytes)!==v.sha256)
    throw Error('Binaries changed since optimized artifact audit: '+v.path);
   lods.push({level:v.level,path:v.path,sha256:v.sha256,bytes:v.bytes,triangles:v.triangles});
  }
  assets.push({id:asset.id,slug:asset.slug,source_path:asset.source_path,license:asset.license,
   previews,lods,manufacturing_status:'not_certified',physical_testing:'not_performed'});
 }
 const payload={schema_version:'1.0.0',release_source_sha256:sha(catalogBytes),
  source_revision:process.env.GITHUB_SHA||'local',asset_count:assets.length,
  lod_count:summary.lod_variants,static_shard_count:summary.shards,
  evidence_scope:'rendered_and_immutable_files_only_not_manufacturing_certification',assets};
 await mkdir(dirname(output),{recursive:true});
 const temp=output+'.tmp-'+process.pid;
 await writeFile(temp,JSON.stringify(payload,null,2)+'\n');
 await rename(temp,output);
 console.log('RELEASE INDEX PASS:',summary,'source',payload.release_source_sha256);
 return payload;
}
if(process.argv[1]?.endsWith('/release_index.mjs')){
 buildReleaseIndex().catch(e=>{console.error(e.message);process.exitCode=1;});
}
