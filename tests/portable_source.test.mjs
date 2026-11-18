import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {composePortableSource} from '../src/portable-source.js';

const root=resolve(import.meta.dirname,'..');
const cases=[
  ['chair.js','createChair'],
  ['honeycomb_desk_tidy.js','createHoneycombDeskTidy'],
  ['moon_phase_light_sleeve.js','createMoonPhaseLightSleeve'],
  ['lunar_fox_bust.js','createLunarFoxBust'],
  ['monitor_cantilever_bridge.js','createMonitorCantileverBridge'],
  ['modular_rail_desk_shelf.js','createModularRailDeskShelf']
];
test('rejects traversal and missing source', async()=>{
  await assert.rejects(composePortableSource('../evil.js', async()=>''), /filename/);
  await assert.rejects(composePortableSource('missing.js', async()=>''), /named exports/);
});
for(const [filename,generator] of cases){
 test('portable module runs from empty consumer: '+filename,async()=>{
  const source=await composePortableSource(filename,
    name=>readFile(resolve(root,'src/models',name),'utf8'),{title:filename});
  assert.equal((source.match(/import \* as THREE from 'three'/g)||[]).length,1);
  assert.ok(!/import\s+\{[^\n]+\}\s+from\s+['"]\.\//.test(source),'no unresolved local imports');
  const temp=resolve(root,'.cache','portable-tests');
  await mkdir(temp,{recursive:true});
  const path=resolve(temp,filename.replace('.js','.mjs'));
  await writeFile(path,source);
  const loaded=await import(pathToFileURL(path).href);
  assert.equal(typeof loaded[generator],'function');
  const group=loaded[generator]();
  assert.ok(group instanceof THREE.Group);
  const bounds=new THREE.Box3().setFromObject(group);
  const size=bounds.getSize(new THREE.Vector3());
  assert.ok([size.x,size.y,size.z].every(v=>Number.isFinite(v)&&v>0));
  group.traverse(node=>{node.geometry?.dispose();if(node.material){for(const m of Array.isArray(node.material)?node.material:[node.material])m.dispose();}});
 });
}
