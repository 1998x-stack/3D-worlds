#!/usr/bin/env node
/** P2 real cross-origin browser test against local Python SQLite API. */
import { spawn } from 'node:child_process';
import { createServer } from 'vite';
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const API='http://127.0.0.1:8071', FRONTEND='http://127.0.0.1:5174';
const expected=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8')).assets.length;
process.env.VITE_CATALOG_API_URL=API;
const server=spawn('python3',['services/search_api.py'],{
  env:{...process.env,THREED_WORLDS_HOST:'127.0.0.1',THREED_WORLDS_PORT:'8071',
       THREED_WORLDS_ALLOWED_ORIGINS:FRONTEND},stdio:['ignore','pipe','pipe']
});
let vite=null,browser=null;
async function ready(){
 for(let attempt=0;attempt<50;attempt++){
  try { const response=await fetch(API+'/healthz'); if(response.ok)return; }
  catch{}
  await new Promise(resolve=>setTimeout(resolve,100));
 }
 throw Error('P2 API did not respond');
}
try{
 await ready();
 vite=await createServer({base:'/',server:{host:'127.0.0.1',port:5174,strictPort:true}});
 await vite.listen();
 browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader-webgl','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(FRONTEND+'/',{waitUntil:'networkidle',timeout:45000});
 await page.waitForFunction(()=>document.querySelectorAll('.asset-card').length===24,null,{timeout:12000});
 for(let target=48;target<=expected+24;target+=24){
   if(await page.locator('.asset-card').count()===expected)break;
   await page.locator('#load-more').click();
   await page.waitForFunction(limit=>document.querySelectorAll('.asset-card').length===limit,
     Math.min(expected,target),{timeout:12000});
 }
 if(await page.locator('.asset-card').count()!==expected)throw Error('Missing remote catalog pages');
 await page.locator('#asset-search').fill('仙人掌');
 await page.waitForFunction(() => [...document.querySelectorAll('.asset-card')].some(card => card.dataset.id === 'print-commerce.geo-cactus-planter.001'), null, {timeout:12000});
 if(errors.length)throw Error('P2 remote browser errors: '+errors.join('; '));
 console.log('P2 REMOTE GALLERY OK: 24-item cursor pages,',expected,'assets and Chinese search');
}finally{
 await browser?.close();
 await vite?.close();
 server.kill('SIGTERM');
}
