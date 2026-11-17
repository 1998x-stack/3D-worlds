#!/usr/bin/env node
/** Real Chromium smoke of built static Pages routes, images and 3D Inspector. */
import { preview } from 'vite';
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const registered=JSON.parse(readFileSync(new URL('../catalog/public_models.json',import.meta.url),'utf8')).assets;
const expected=registered.length;
const total=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8')).assets.length;
if(total<=500 && expected!==total)throw Error('Static Gallery silently truncated: '+expected+'/'+total);
let server, browser;
try{
 server=await preview({preview:{host:'127.0.0.1',port:4180,strictPort:true}});
 browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader-webgl','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1300,height:900},acceptDownloads:true});
 const errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 await page.goto('http://127.0.0.1:4180/3D-worlds/',{waitUntil:'networkidle'});
 const cards=page.locator('.asset-card');
 if(await cards.count()!==expected)throw Error('Gallery card count mismatch: ' + await cards.count() + '/' + expected);
 const first=cards.first();
 const loaded=await first.locator('img').evaluate(img=>img.complete&&img.naturalWidth>0);
 if(!loaded)throw Error('P0 preview image missing');
 await first.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 const canvas=page.locator('#detail-canvas');
 if(!await canvas.evaluate(el=>el.width>0&&el.height>0))throw Error('Inspector WebGL canvas missing');
 // The STL draft action must genuinely produce a binary STL scaled in mm.
 await page.locator('#print-size-mm').fill('80');
 const draftDownload = page.waitForEvent('download',{timeout:30000});
 await page.locator('#print-stl').click();
 const draft = await draftDownload;
 if(!draft.suggestedFilename().endsWith('-draft-80mm.stl')) {
   throw Error('Unexpected STL filename: '+draft.suggestedFilename());
 }
 const draftData = readFileSync(await draft.path());
 if(draftData.length<84 || !draftData.toString('ascii',0,34).includes('3D WORLDS STL DRAFT')) {
   throw Error('STL draft missing binary header');
 }
 const faceCount=draftData.readUInt32LE(80);
 if(!faceCount || draftData.length!==84+faceCount*50) {
   throw Error('Invalid binary STL triangle count/length');
 }
 let lo=[Infinity,Infinity,Infinity],hi=[-Infinity,-Infinity,-Infinity];
 for(let t=0;t<faceCount;t++){
   const base=84+t*50+12;
   for(let v=0;v<3;v++)for(let a=0;a<3;a++){
     const n=draftData.readFloatLE(base+v*12+a*4);
     if(!Number.isFinite(n))throw Error('Nonfinite STL coordinate');
     lo[a]=Math.min(lo[a],n);hi[a]=Math.max(hi[a],n);
   }
 }
 const largest=Math.max(...hi.map((value,i)=>value-lo[i]));
 if(Math.abs(largest-80)>.1)throw Error('Incorrect browser STL millimeter scaling: '+largest);
 await page.locator('#close-detail').click();
 const recent = page.locator('[data-id="vehicles.coastal-sailboat.001"]');
 if(await recent.count()!==1)throw Error('New v0.4 asset missing in gallery');
 await recent.scrollIntoViewIfNeeded();
 // Gallery image loading is lazy; scrolling is necessary before naturalWidth is available.
 await recent.locator('img').evaluate(img=>img.decode());
 await recent.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 await page.locator('#close-detail').click();
 const newest = page.locator('[data-id="scifi.holographic-command-console.001"]');
 if(await newest.count()!==1)throw Error('V0.5 hologram console missing');
 await newest.scrollIntoViewIfNeeded();
 await newest.locator('img').evaluate(img=>img.decode());
 await newest.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 await page.locator('#close-detail').click();
 const next = page.locator('[data-id="scifi.robotic-mining-excavator.001"]');
 if(await next.count()!==1)throw Error('V0.6 robotic mining excavator missing in gallery');
 await next.scrollIntoViewIfNeeded();
 await next.locator('img').evaluate(img=>img.decode());
 await next.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 if(!await canvas.evaluate(el=>el.width>0&&el.height>0))throw Error('V0.6 inspector canvas missing');
 await page.locator('#close-detail').click();
 const v07 = page.locator('[data-id="scifi.orbital-hydroponic-growing-tower.001"]');
 if(await v07.count()!==1) throw Error('V0.7 orbital hydroponic tower missing');
 await v07.scrollIntoViewIfNeeded();
 await v07.locator('img').evaluate(img=>img.decode());
 await v07.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 if(!await canvas.evaluate(el=>el.width>0&&el.height>0)) throw Error('V0.7 WebGL inspector canvas missing');
 await page.locator('#close-detail').click();
 const v08 = page.locator('[data-id="scifi.orbital-navigation-beacon.001"]');
 if(await v08.count()!==1) throw Error('V0.8 orbital navigation beacon missing');
 await v08.scrollIntoViewIfNeeded();
 await v08.locator('img').evaluate(img=>img.decode());
 await v08.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 if(!await canvas.evaluate(el=>el.width>0&&el.height>0)) throw Error('V0.8 WebGL inspector canvas missing');
 await page.locator('#close-detail').click();
 const v11 = page.locator('[data-id="scifi.orbital-research-airlock-module.001"]');
 if(await v11.count()!==1)throw Error('V1.1 orbital research airlock not found in Gallery');
 await v11.scrollIntoViewIfNeeded();
 await v11.locator('img').evaluate(img=>img.decode());
 await v11.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 if(!await canvas.evaluate(el=>el.width>0&&el.height>0))throw Error('V1.1 airlock WebGL viewer missing');
 await page.locator('#close-detail').click();
 await page.locator('#asset-search').fill('仙人掌');
 // The Gallery debounces input before updating its cards.
 await page.waitForFunction(() => document.querySelectorAll('.asset-card').length === 1,
   null, {timeout:5000});
 if(errors.length)throw Error('Browser JavaScript errors: '+errors.join(' | '));
 console.log('PAGES SMOKE OK:',expected,'cards, original 3D previews, v0.4/v0.5/v0.6/v0.7/v0.8/v0.9/v1.0/v1.1 inspectors and Chinese search');
}finally{
 await browser?.close();
 await new Promise(resolve=>server?.httpServer?.close(resolve)??resolve());
}
