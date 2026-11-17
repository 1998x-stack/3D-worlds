#!/usr/bin/env node
/** P0 + P1 build-time 3D snapshot and source GLB exporter.
 * One Chromium page and one transient WebGL context per asset, sequential.
 */
import { createServer } from 'vite';
import { chromium } from 'playwright';
import sharp from 'sharp';
import { readFile,writeFile,mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT=fileURLToPath(new URL('../',import.meta.url));
const catalog=JSON.parse(await readFile(resolve(ROOT,'catalog/models.json'),'utf8'));
const models=catalog.assets.filter(item=>item.kind==='procedural');
const args=process.argv.slice(2);
const limitPos=args.indexOf('--limit');
const limit=limitPos>=0?Number(args[limitPos+1]):models.length;
if(!Number.isInteger(limit)||limit<1||limit>10000)throw Error('Invalid --limit');
const idPos=args.indexOf('--id');
const assetId=idPos>=0?args[idPos+1]:null;
if(idPos>=0 && (!assetId || assetId.startsWith('--')))throw Error('Missing --id value');
if(idPos>=0 && limitPos>=0)throw Error('Use --id or --limit, not both');
const selected=assetId?models.filter(item=>item.id===assetId):models.slice(0,limit);
if(!selected.length)throw Error('Unknown procedural asset ID: '+assetId);
const onlyImages=args.includes('--only-images');
const thumbs=resolve(ROOT,'public/thumbs');
const originals=resolve(ROOT,'.cache/raw');
await Promise.all([mkdir(thumbs,{recursive:true}),mkdir(originals,{recursive:true})]);
const server=await createServer({configFile:resolve(ROOT,'vite.config.js'),base:'/',server:{host:'127.0.0.1',port:5178,strictPort:true}});
let browser=null;
const report=[];
try{
 await server.listen();
 browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader-webgl','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:640,height:640},deviceScaleFactor:1});
 page.on('console',msg=>{if(msg.type()==='error')console.error('Browser:',msg.text());});
 await page.goto('http://127.0.0.1:5178/capture.html',{waitUntil:'networkidle',timeout:45000});
 await page.waitForFunction(()=>Boolean(window.__capture),{timeout:30000});
 for(const asset of selected){
   const out=await page.evaluate(async({id,includeGlb})=>window.__capture.render(id,{includeGlb}),{id:asset.id,includeGlb:!onlyImages});
   const png=Buffer.from(out.png,'base64');
   // Transparency flattening makes consistent matte cards in all browsers.
   const pipeline=sharp(png).flatten({background:'#f0ede6'}).resize(640,640,{fit:'contain'});
   const webp=await pipeline.clone().webp({quality:83,effort:4}).toBuffer();
   const avif=await pipeline.clone().avif({quality:57,effort:3}).toBuffer();
   await writeFile(resolve(thumbs,asset.slug+'.webp'),webp);
   await writeFile(resolve(thumbs,asset.slug+'.avif'),avif);
   let rawBytes=0;
   if(out.glb){
     const buffer=Buffer.from(out.glb,'base64');
     if(buffer.toString('ascii',0,4)!=='glTF')throw Error('Incorrect GLB header for '+asset.id);
     rawBytes=buffer.length;
     await writeFile(resolve(originals,asset.slug+'.glb'),buffer);
   }
   report.push({id:asset.id,slug:asset.slug,webp_bytes:webp.length,avif_bytes:avif.length,raw_glb_bytes:rawBytes});
   console.log('CAPTURED',asset.slug,webp.length,avif.length,rawBytes);
 }
 const reportName=assetId?'capture-report-'+selected[0].slug+'.json':'capture-report.json';
 await writeFile(resolve(thumbs,reportName),JSON.stringify({count:report.length,entries:report},null,2)+'\n');
 console.log('P0 complete:',report.length,'true 3D thumbnails in WebP + AVIF');
}finally{
 await browser?.close();
 await server.close();
}
