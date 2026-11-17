#!/usr/bin/env node
/** Real Chromium smoke of built static Pages routes, images and 3D Inspector. */
import { preview } from 'vite';
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const registered=JSON.parse(readFileSync(new URL('../catalog/public_models.json',import.meta.url),'utf8')).assets;
const expected=registered.length;
let server, browser;
try{
 server=await preview({preview:{host:'127.0.0.1',port:4180,strictPort:true}});
 browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader-webgl','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1300,height:900}});
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
 await page.locator('#close-detail').click();
 const recent = page.locator('[data-id="vehicles.coastal-sailboat.001"]');
 if(await recent.count()!==1)throw Error('New v0.4 asset missing in gallery');
 const imgOk=await recent.locator('img').evaluate(img=>img.complete&&img.naturalWidth>0);
 if(!imgOk)throw Error('V0.4 preview image missing');
 await recent.click();
 await page.locator('.detail-modal').waitFor({state:'visible'});
 await page.locator('#close-detail').click();
 await page.locator('#asset-search').fill('仙人掌');
 // The Gallery debounces input before updating its cards.
 await page.waitForFunction(() => document.querySelectorAll('.asset-card').length === 1,
   null, {timeout:5000});
 if(errors.length)throw Error('Browser JavaScript errors: '+errors.join(' | '));
 console.log('PAGES SMOKE OK:',expected,'cards, original 3D previews, v0.4 inspector and Chinese search');
}finally{
 await browser?.close();
 await new Promise(resolve=>server?.httpServer?.close(resolve)??resolve());
}
