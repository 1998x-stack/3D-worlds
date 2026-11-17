import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { buildPrintPlan, validatePrintPolicy } from '../src/print-planner.js';
const policy=JSON.parse(readFileSync(new URL('../catalog/print_policy.json',import.meta.url),'utf8'));
const catalog=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8'));
test('print policy covers all 14 catalog categories',()=>{
  assert.equal(validatePrintPolicy(policy),true);
  assert.equal(new Set(catalog.assets.map(x=>x.category)).size,14);
  for(const cat of new Set(catalog.assets.map(x=>x.category)))assert.ok(policy.categories[cat]);
});
test('printer fit honors print Z-up with only in-plane turn',()=>{
  const demo={category:'furniture',dimensions_m:[.2,.8,.1]};
  const v=buildPrintPlan(demo,{longestMm:120,printerId:'fdm-220'},policy);
  assert.deepEqual(v.size_mm,[30,15,120]);
  assert.equal(v.bed_fit_estimate,true);
  assert.equal(v.priority,'P0');
  assert.equal(v.status,'not_audited');
  assert.equal(v.manufacturing_certified,false);
  const beyond=buildPrintPlan(demo,{longestMm:400,printerId:'fdm-220'},policy);
  assert.equal(beyond.bed_fit_estimate,false);
});
test('in-plane bed rotation can make an otherwise oversized footprint fit',()=>{
  const obj={category:'urban',dimensions_m:[.18,.05,.25]};
  const v=buildPrintPlan(obj,{longestMm:250,printerId:'resin-192'},policy);
  assert.equal(v.bed_fit_estimate,false);
  const obj2={category:'urban',dimensions_m:[.105,.05,.19]};
  const fit=buildPrintPlan(obj2,{longestMm:190,printerId:'resin-192'},policy);
  assert.equal(fit.bed_fit_estimate,true);
  assert.equal(fit.rotate_xy_estimate,true);
});
test('rejects invalid sizes and profiles without a false pass',()=>{
  const sample={category:'tools',dimensions_m:[1,1,1]};
  assert.throws(()=>buildPrintPlan(sample,{longestMm:NaN},policy));
  assert.throws(()=>buildPrintPlan(sample,{printerId:'unknown'},policy));
  assert.throws(()=>buildPrintPlan({category:'tools',dimensions_m:[0,1,1]}, {},policy));
});
