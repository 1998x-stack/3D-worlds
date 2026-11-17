#!/usr/bin/env node
/** P2 real cross-origin browser test against local Python SQLite API. */
import { spawn } from 'node:child_process';
import { createServer } from 'vite';
import { chromium } from 'playwright';
const API='http://127.0.0.1:8071', FRONTEND='http://127.0.0.1:5174';
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
 await page.locator('#load-more').click();
 await page.waitForFunction(()=>document.querySelectorAll('.asset-card').length===45,null,{timeout:12000});
 await page.locator('#asset-search').fill('仙人掌');
 await page.waitForFunction(()=>document.querySelectorAll('.asset-card').length===1,null,{timeout:12000});
 if(errors.length)throw Error('P2 remote browser errors: '+errors.join('; '));
 console.log('P2 REMOTE GALLERY OK: API categories, 24-item cursor page, load more to 45, Chinese search');
}finally{
 await browser?.close();
 await vite?.close();
 server.kill('SIGTERM');
}
