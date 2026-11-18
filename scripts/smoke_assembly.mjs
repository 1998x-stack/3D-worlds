#!/usr/bin/env node
/** Real browser assembly Lab smoke against built multi-page Vite assets. */
import {preview} from 'vite';
import {chromium} from 'playwright';
let server,browser;
try{
 server=await preview({preview:{host:'127.0.0.1',port:4182,strictPort:true}});
 browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader-webgl','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1350,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4182/3D-worlds/assembly.html',{waitUntil:'networkidle'});
 await page.locator('#assembly-part-list button[data-part]').first().waitFor();
 if(await page.locator('#assembly-part-list button[data-part]').count()!==7)throw Error('Expected seven editable components');
 if(await page.locator('#assembly-joints input[type=range]').count()!==6)throw Error('Expected six rotatable joints');
 await page.locator('#assembly-prev').click();
 if(!(await page.locator('#assembly-step-label').innerText()).includes('3/4'))throw Error('Assembly step failed');
 await page.locator('#assembly-explode').fill('0.45');
 if(!(await page.locator('#explode-value').innerText()).includes('0.45'))throw Error('Exploded view failed');
 await page.locator('#assembly-check').click();
 if(!(await page.locator('#assembly-status').innerText()).includes('代理盒体检测'))throw Error('Collision report missing');
 await page.locator('#assembly-reset').click();
 if(!(await page.locator('#assembly-step-label').innerText()).includes('4/4'))throw Error('Reset failed');
 const pixels=await page.locator('#assembly-canvas').evaluate(c=>[c.width,c.height]);
 if(pixels.some(x=>x<=0))throw Error('3D inspector canvas size missing');
 if(errors.length)throw Error('Lab runtime errors: '+errors.join(' | '));
 console.log('ASSEMBLY LAB BROWSER PASS: 7 parts, 6 joints, steps, explode, restore, proxy collision label');
}finally{
 await browser?.close();
 await new Promise(resolve=>server?.httpServer?.close(resolve)??resolve());
}
