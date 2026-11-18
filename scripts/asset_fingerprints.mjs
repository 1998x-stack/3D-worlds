import {createHash} from 'node:crypto';
import {readFile,writeFile,mkdir,rename} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=fileURLToPath(new URL('../',import.meta.url));
export const STATE_PATH=resolve(ROOT,'.cache/asset-build-state.json');
const IMPORT=/^[ \t]*import\s+.+?\s+from\s+['"]([^'"]+)['"]/gm;
const MODEL=/^src\/models\/[A-Za-z0-9_-]+\.js$/;
/** Compute a transitive fingerprint, including shared generator code and tool versions. */
export async function fingerprintAsset(asset,{stage='capture',readSource=path=>readFile(resolve(ROOT,path))}={}){
 if(!['capture','lod'].includes(stage)||!MODEL.test(asset?.source_path||''))throw Error('Invalid stage or source path');
 const seen=new Map(),active=new Set();
 async function visit(path){
  if(seen.has(path))return;
  if(active.has(path)||active.size+seen.size>70)throw Error('Cycle or excessive model dependencies');
  active.add(path);
  try{
   const bytes=Buffer.from(await readSource(path));
   for(const m of String(bytes).matchAll(IMPORT)){
    if(!m[1].startsWith('.'))continue;
    const next='src/models/'+m[1].replace(/^\.\//,'');
    if(!m[1].startsWith('./')||!MODEL.test(next))throw Error('Model dependency escapes directory: '+m[1]);
    await visit(next);
   }
   seen.set(path,bytes);
  }finally{active.delete(path)}
 }
 await visit(asset.source_path);
 for(const path of ['src/scene.js','src/capture-entry.js','scripts/render_assets.mjs','package.json',
    ...(stage==='lod'?['scripts/optimize_assets.mjs']:[])])
   seen.set(path,Buffer.from(await readSource(path)));
 const hash=createHash('sha256');
 hash.update('3d-worlds-asset-fingerprint-v1\0'+stage+'\0');
 hash.update(JSON.stringify({id:asset.id,slug:asset.slug,generator:asset.generator,dimensions_m:asset.dimensions_m})+'\0');
 for(const [path,bytes] of [...seen].sort(([a],[b])=>a.localeCompare(b))){
  hash.update(path+'\0');hash.update(bytes);hash.update('\0');
 }
 return {sha256:hash.digest('hex'),dependencies:[...seen.keys()].sort()};
}
export async function loadBuildState(path=STATE_PATH){
 try{
  const data=JSON.parse(await readFile(path,'utf8'));
  if(data.schema_version!=='1.0.0')throw Error('Unsupported build cache');
  return {schema_version:'1.0.0',capture:data.capture||{},lod:data.lod||{}};
 }catch(error){
  if(error.code==='ENOENT')return {schema_version:'1.0.0',capture:{},lod:{}};
  throw error;
 }
}
export async function saveBuildState(state,path=STATE_PATH){
 await mkdir(dirname(path),{recursive:true});
 const temp=path+'.tmp-'+process.pid;
 await writeFile(temp,JSON.stringify(state,null,2)+'\n');
 await rename(temp,path);
}
