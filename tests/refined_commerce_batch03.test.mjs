// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as THREE from 'three';
import {REFINED_COMMERCE_BATCH03_SLUGS,buildRefinedCommerceBatch03} from '../src/models/refined_commerce_batch03.js';
import {buildCommerceModel} from '../src/models/print_commerce_engine.js';

const catalog=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8')).assets;
assert.equal(new Set(REFINED_COMMERCE_BATCH03_SLUGS).size,20);

for(const slug of REFINED_COMMERCE_BATCH03_SLUGS){
  test(`overseas detail batch 03: ${slug}`,()=>{
    const spec=catalog.find(asset=>asset.slug===slug);
    assert.ok(spec,`catalog has ${slug}`);
    assert.equal(spec.id,`print-commerce.${slug}.001`);
    const model=buildCommerceModel(spec);
    assert.ok(model instanceof THREE.Group);
    assert.equal(model.userData.refinedBatch,'03');
    assert.equal(model.userData.manufacturingStatus,'unverified');
    assert.equal(model.userData.cadSource,spec.cad_path);
    const meshes=[];
    model.traverse(node=>{if(node.isMesh)meshes.push(node);});
    assert.ok(meshes.length>=12,`${slug} has ${meshes.length} named parts`);
    assert.equal(new Set(meshes.map(node=>node.name)).size,meshes.length);
    for(const part of meshes){
      assert.ok(part.geometry.attributes.position?.count>0,`${part.name} has vertices`);
      assert.ok(part.material,`${part.name} has material`);
    }
    const bounds=new THREE.Box3().setFromObject(model);
    const size=bounds.getSize(new THREE.Vector3());
    for(let i=0;i<3;i++){
      assert.ok(Math.abs(size.getComponent(i)-spec.dimensions_m[i])<1e-5,
        `${slug} canonical dimension ${i}`);
    }
    assert.ok(Math.abs(bounds.min.y)<1e-5,'preview rests on the ground plane');
    model.traverse(node=>node.geometry?.dispose());
  });
}
test('batch 03 dispatch is restricted to the final twenty overseas SKUs',()=>{
  assert.equal(buildRefinedCommerceBatch03(catalog.find(a=>a.slug==='moon-phase-light-sleeve')),null);
  assert.equal(buildRefinedCommerceBatch03(catalog.find(a=>a.slug==='geometric-star-lightbox')),null);
  assert.equal(buildRefinedCommerceBatch03(catalog.find(a=>a.slug==='tabletop-dice-tray')),null);
});
