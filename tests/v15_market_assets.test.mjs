// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { V15_KEYS,buildV15MarketModel } from '../src/models/v15_market_geometry.js';

const catalog=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8'));
const items=catalog.assets.filter(x=>x.collection==='v1.5');
test('30 new original assets are additive, unique and spread across all 14 categories',()=>{
  assert.equal(items.length,30);
  assert.equal(V15_KEYS.length,30);
  assert.equal(new Set(items.map(x=>x.id)).size,30);
  assert.equal(new Set(items.map(x=>x.slug)).size,30);
  assert.equal(new Set(items.map(x=>x.category)).size,14);
  assert.deepEqual(new Set(items.map(x=>x.slug)),new Set(V15_KEYS));
  assert.equal(catalog.assets.length,625);
  assert.equal(items.filter(x=>Boolean(x.cad_path)).length,2);
});
for(const item of items){
 test('distinct authored V1.5 geometry: '+item.slug,()=>{
  const object=buildV15MarketModel(item);
  assert.ok(object instanceof THREE.Group);
  assert.equal(object.userData.manufacturingStatus,'visual-only');
  assert.equal(object.userData.assetId,item.id);
  const meshes=[];const colors=new Set();
  object.traverse(node=>{if(node.isMesh){meshes.push(node);colors.add(node.material.color.getHex());}});
  assert.ok(meshes.length>=14,item.slug+' has '+meshes.length+' authored meshes');
  assert.equal(new Set(meshes.map(x=>x.name)).size,meshes.length,'named parts are unique');
  assert.ok(colors.size>=3,'at least three physical/visual finish colors');
  const b=new THREE.Box3().setFromObject(object);
  const actual=b.getSize(new THREE.Vector3()).toArray();
  item.dimensions_m.forEach((n,i)=>assert.ok(Math.abs(n-actual[i])<1e-6,'canonical bounds axis '+i));
  assert.ok(Math.abs(b.min.y)<1e-6,'zero-floor origin');
  object.traverse(node=>{node.geometry?.dispose();node.material?.dispose();});
 });
}
