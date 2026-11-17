// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as THREE from 'three';
import {REFINED_COMMERCE_BATCH02_SLUGS,buildRefinedCommerceBatch02} from '../src/models/refined_commerce_batch02.js';
import {buildCommerceModel} from '../src/models/print_commerce_engine.js';
const all=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8')).assets;
const ids=new Set(REFINED_COMMERCE_BATCH02_SLUGS);
assert.equal(ids.size,20);
for(const slug of REFINED_COMMERCE_BATCH02_SLUGS){
 test(`v1.3 overseas detail batch 02: ${slug}`,()=>{
   const spec=all.find(asset=>asset.slug===slug);
   assert.ok(spec,'canonical catalog includes '+slug);
   assert.equal(spec.id,`print-commerce.${slug}.001`);
   const model=buildCommerceModel(spec);
   assert.ok(model instanceof THREE.Group);
   assert.equal(model.userData.refinedBatch,'02');
   assert.equal(model.userData.manufacturingStatus,'unverified');
   assert.equal(model.userData.cadSource,spec.cad_path);
   const nodes=[];model.traverse(o=>{if(o.isMesh)nodes.push(o);});
   assert.ok(nodes.length>=12,`${slug}: ${nodes.length} named construction parts`);
   assert.equal(new Set(nodes.map(n=>n.name)).size,nodes.length,'distinct part names');
   for(const part of nodes){
     assert.ok(part.geometry.attributes.position?.count>0,`${part.name} has mesh vertices`);
     assert.ok(part.material,`${part.name} has material`);
   }
   const bbox=new THREE.Box3().setFromObject(model),size=bbox.getSize(new THREE.Vector3());
   for(let i=0;i<3;i++)assert.ok(Math.abs(size.getComponent(i)-spec.dimensions_m[i])<1e-5,
     `${slug} canonical dimension ${i} mismatch`);
   assert.ok(Math.abs(bbox.min.y)<1e-5,'Y-up floor contact');
   model.traverse(part=>part.geometry?.dispose());
 });
}
test('batch 02 dispatch is limited to selected overseas models',()=>{
  assert.equal(buildRefinedCommerceBatch02(all.find(a=>a.slug==='moon-phase-light-sleeve')),null);
  assert.equal(buildRefinedCommerceBatch02(all.find(a=>a.slug==='desktop-herb-planter')),null);
});
