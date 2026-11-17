#!/usr/bin/env node
/**
 * Two-phase local ingestion: audit every incoming GLB, then atomically publish
 * its content-addressed binary and updated catalog. Default is preview only.
 *
 * Example: node scripts/ingest_glb.mjs --batch ingest/batch.example.json
 *          node scripts/ingest_glb.mjs --batch ingest/my-batch.json --apply
 */
import { readFile,writeFile,copyFile,mkdir,rename,rm,stat,realpath } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname,basename,resolve,relative,sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { auditGlb } from './audit_glb.mjs';

const ROOT=fileURLToPath(new URL('../',import.meta.url));
const STAGING=resolve(ROOT,'ingest/staging');
const MANIFEST=resolve(ROOT,'catalog/models.json');
const CAT_FILE=resolve(ROOT,'catalog/categories.json');
const OUTPUT=resolve(ROOT,'public/assets');
const ID_RE=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SPDX_RE=/^[A-Za-z0-9][A-Za-z0-9.+-]*$/;

function assert(cond,message){if(!cond)throw new Error(message);}
function under(root,path){return path.startsWith(root+sep);}
function validateEntry(item,knownCategories){
 for(const k of ['file','slug','category','title','title_zh','license','author']){
   assert(typeof item[k]==='string'&&item[k].trim().length>0,'Missing required field: '+k);
 }
 assert(ID_RE.test(item.slug),'Invalid kebab-case slug: '+item.slug);
 assert(knownCategories.has(item.category),'Unknown category: '+item.category);
 assert(SPDX_RE.test(item.license),'Invalid SPDX license');
 assert(Array.isArray(item.dimensions_m)&&item.dimensions_m.length===3
   &&item.dimensions_m.every(n=>typeof n==='number'&&Number.isFinite(n)&&n>0&&n<10000),
 'dimensions_m must be three positive finite numbers in meters');
 assert(Array.isArray(item.tags)&&item.tags.length>=1
   &&item.tags.every(tag=>typeof tag==='string'&&ID_RE.test(tag)),
 'tags must be nonempty kebab-case tokens');
 if(item.author!=='3D Worlds'){
   assert(typeof item.license_evidence_url==='string'
     &&/^https:\/\/[^ ]+$/i.test(item.license_evidence_url),
    'Third-party assets require HTTPS license_evidence_url');
 }
}
async function readTrustedFile(rel){
 assert(typeof rel==='string'&&/^[a-zA-Z0-9_.\/-]+\.glb$/.test(rel)
   &&!rel.includes('..') &&!rel.startsWith('/'),'GLB filename must be a safe relative path');
 const path=resolve(STAGING,rel);
 assert(under(STAGING,path),'GLB must stay inside ingest/staging');
 const physical=await realpath(path);
 assert(under(STAGING,physical),'Refusing symlink escaping ingest/staging');
 assert((await stat(physical)).isFile(),'Not a regular file');
 return physical;
}
async function shaFile(path){
 const data=await readFile(path);
 return createHash('sha256').update(data).digest('hex');
}
export async function ingest(batchFile,{apply=false,maxWarnings=0}={}){
 const batchPath=resolve(ROOT,batchFile);
 assert(under(ROOT,batchPath),'Batch manifest must be inside repository');
 const batch=JSON.parse(await readFile(batchPath,'utf8'));
 assert(batch.version===1&&Array.isArray(batch.assets)&&batch.assets.length>0,'Expected version 1 and nonempty assets[]');
 assert(batch.assets.length<=100,'Maximum 100 entries per batch');
 const catalogText=await readFile(MANIFEST,'utf8');
 const catalog=JSON.parse(catalogText);
 const taxonomy=JSON.parse(await readFile(CAT_FILE,'utf8'));
 const categories=new Set(taxonomy.categories.map(c=>c.id));
 const knownIds=new Set(catalog.assets.map(a=>a.id));
 const knownSlugs=new Set(catalog.assets.map(a=>a.slug));
 const knownHashes=new Map(catalog.assets.filter(a=>a.content_sha256).map(a=>[a.content_sha256,a.id]));
 const staged=[];
 for(const item of batch.assets){
   validateEntry(item,categories);
   const id=item.category+'.'+item.slug+'.001';
   assert(!knownIds.has(id)&&!knownSlugs.has(item.slug),'Duplicate id or slug: '+id);
   knownIds.add(id);knownSlugs.add(item.slug);
   const source=await readTrustedFile(item.file);
   const quality=await auditGlb(source,{maxWarnings});
   const hash=await shaFile(source);
   assert(!knownHashes.has(hash),'Duplicate binary content: '+hash+' already assigned to '+knownHashes.get(hash));
   knownHashes.set(hash,id);
   const relativePath='public/assets/'+hash.slice(0,2)+'/'+hash+'.glb';
   staged.push({source,relativePath,asset:{
     id,slug:item.slug,title:item.title,title_zh:item.title_zh,
     summary:item.summary||'',category:item.category,tags:[...new Set(item.tags)],
     kind:'glb',binary_path:relativePath,license:item.license,author:item.author,
     license_evidence_url:item.license_evidence_url||undefined,
     source_url:item.source_url||undefined,provenance_note:item.provenance_note||undefined,
     dimensions_m:item.dimensions_m,content_sha256:hash,
     file_size_bytes:quality.bytes,triangle_count:quality.triangles,vertex_count:quality.vertices,
     qa_warnings:quality.warnings,accent:item.accent||'#c8d8d7',style:item.style||'Imported GLB'
   },quality});
 }
 const report={status:apply?'applied':'dry-run',count:staged.length,
   entries:staged.map(s=>({id:s.asset.id,source:relative(ROOT,s.source),
     target:s.relativePath,sha256:s.asset.content_sha256,quality:s.quality}))};
 if(!apply)return report;
 const created=[];
 const tmpManifest=MANIFEST+'.tmp-'+process.pid;
 try{
   const current=await readFile(MANIFEST,'utf8');
   assert(current===catalogText,'Catalog changed concurrently; abort and retry');
   for(const item of staged){
     const destination=resolve(ROOT,item.relativePath);
     assert(under(OUTPUT,destination),'Output escapes asset directory');
     await mkdir(dirname(destination),{recursive:true});
     try{
       const existing=await stat(destination);
       assert(existing.isFile()&&(await shaFile(destination))===item.asset.content_sha256,
         'Destination exists with different content');
     }catch(error){
       if(error.code!=='ENOENT')throw error;
       await copyFile(item.source,destination);
       created.push(destination);
     }
   }
   catalog.assets.push(...staged.map(item=>item.asset));
   await writeFile(tmpManifest,JSON.stringify(catalog,null,2)+'\n',{flag:'wx'});
   await rename(tmpManifest,MANIFEST);
 }catch(error){
   await rm(tmpManifest,{force:true});
   await Promise.all(created.map(path=>rm(path,{force:true})));
   throw error;
 }
 return report;
}

function cliOptions(argv){
 const opt={apply:false,maxWarnings:0,batch:''};
 for(let i=0;i<argv.length;i++){
   if(argv[i]==='--batch')opt.batch=argv[++i]||'';
   else if(argv[i]==='--apply')opt.apply=true;
   else if(argv[i]==='--max-warnings')opt.maxWarnings=Number(argv[++i]);
   else throw new Error('Unknown argument: '+argv[i]);
 }
 assert(opt.batch,'Usage: node scripts/ingest_glb.mjs --batch ingest/batch.json [--apply] [--max-warnings N]');
 assert(Number.isInteger(opt.maxWarnings)&&opt.maxWarnings>=0&&opt.maxWarnings<=100,'Invalid max-warnings');
 return opt;
}
if(process.argv[1]?.endsWith('/ingest_glb.mjs')){
 try{
   const {batch,...options}=cliOptions(process.argv.slice(2));
   ingest(batch,options).then(r=>console.log(JSON.stringify(r,null,2)))
     .catch(e=>{console.error('IMPORT REJECTED:',e.message);process.exitCode=1;});
 }catch(e){console.error(e.message);process.exitCode=2;}
}
