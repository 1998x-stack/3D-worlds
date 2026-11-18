import test from 'node:test';
import assert from 'node:assert/strict';
import {fingerprintAsset,loadBuildState,saveBuildState} from '../scripts/asset_fingerprints.mjs';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const asset={id:'test.fixture.001',slug:'fixture',generator:'createFixture',source_path:'src/models/fixture.js',dimensions_m:[1,2,3]};
const source=()=>({
 'src/models/fixture.js':"import { buildRecipe } from './recipe_engine.js';\nexport function createFixture(){return buildRecipe()}",
 'src/models/recipe_engine.js':'export function buildRecipe(){return {}}',
 'src/scene.js':'scene-v1','src/capture-entry.js':'capture-v1',
 'scripts/render_assets.mjs':'capture-script-v1','scripts/optimize_assets.mjs':'optimizer-v1',
 'package.json':'deps-v1'
});
test('transitive shared engine invalidates dependent output',async()=>{
 const src=source(),readSource=async p=>src[p];
 const a=await fingerprintAsset(asset,{readSource});
 src['src/models/recipe_engine.js']='changed shared recipe';
 assert.notEqual((await fingerprintAsset(asset,{readSource})).sha256,a.sha256);
});
test('LOD fingerprint tracks its optimizer, dimensions and capture runtime',async()=>{
 const src=source(),readSource=async p=>src[p];
 const before=await fingerprintAsset(asset,{readSource});
 const lod=await fingerprintAsset(asset,{stage:'lod',readSource});
 src['scripts/optimize_assets.mjs']='new-opt';
 assert.equal((await fingerprintAsset(asset,{readSource})).sha256,before.sha256);
 assert.notEqual((await fingerprintAsset(asset,{stage:'lod',readSource})).sha256,lod.sha256);
 assert.notEqual((await fingerprintAsset({...asset,dimensions_m:[2,2,3]},{readSource})).sha256,before.sha256);
});
test('rejects path traversal and atomically persists state',async()=>{
 const src=source();src['src/models/fixture.js']="import {oops} from '../unsafe.js';";
 await assert.rejects(fingerprintAsset(asset,{readSource:async p=>src[p]}),/escapes/);
 const dir=await mkdtemp(join(tmpdir(),'3dw-cache-'));
 try{
  const file=join(dir,'state.json'),state=await loadBuildState(file);
  state.capture.sample={fingerprint:'SHA'};
  await saveBuildState(state,file);
  assert.equal((await loadBuildState(file)).capture.sample.fingerprint,'SHA');
 }finally{await rm(dir,{recursive:true,force:true});}
});
