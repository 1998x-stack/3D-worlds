// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildRefinedCommerceModel,REFINED_COMMERCE_SLUGS} from '../src/models/refined_commerce_engine.js';
import {buildCommerceModel} from '../src/models/print_commerce_engine.js';
import {assetMeta as legacyCommerceExample} from '../src/models/cloud_whale_totem.js';
import {readFileSync} from 'node:fs';
const catalog=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8')).assets;

for (const slug of REFINED_COMMERCE_SLUGS) {
  test(`refined overseas preview: ${slug}`,()=>{
    const spec=catalog.find(item=>item.slug===slug);
    assert.ok(spec,`${slug} exists in source catalog`);
    assert.equal(spec.collection,'v1.3');
    const model=buildCommerceModel(spec);
    assert.ok(model instanceof THREE.Group);
    assert.equal(model.userData.manufacturingStatus,'unverified');
    assert.equal(model.userData.cadSource,spec.cad_path);
    const meshes=[];model.traverse(node=>{if(node.isMesh) meshes.push(node);});
    assert.ok(meshes.length>=12,`${slug} has ${meshes.length} detailed parts`);
    assert.equal(new Set(meshes.map(m=>m.name)).size,meshes.length,'unique part names');
    const bb=new THREE.Box3().setFromObject(model);
    const size=bb.getSize(new THREE.Vector3());
    for(let i=0;i<3;i++) assert.ok(Math.abs(size.getComponent(i)-spec.dimensions_m[i])<.00001,
      `canonical ${['width','height','depth'][i]} preserved`);
    assert.ok(Math.abs(bb.min.y)<.00001,'on ground plane');
    model.traverse(object=>{if(object.geometry)object.geometry.dispose();});
  });
}
test('unselected v1.3 SKU stays on established engine',()=>{
  const spec=legacyCommerceExample;
  assert.ok(spec);
  assert.equal(buildRefinedCommerceModel(spec),null);
  const model=buildCommerceModel(spec);
  assert.ok(model.children.length>=8);
});
