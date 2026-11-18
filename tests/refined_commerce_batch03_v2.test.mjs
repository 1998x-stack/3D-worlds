// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFileSync} from 'node:fs';
import {buildRefinedCommerceBatch03} from '../src/models/refined_commerce_batch03.js';
import {BATCH03_SECOND_PASS_SLUGS} from '../src/models/refined_commerce_batch03_v2.js';
const assets=JSON.parse(readFileSync(new URL('../catalog/models.json',import.meta.url),'utf8')).assets;
assert.equal(new Set(BATCH03_SECOND_PASS_SLUGS).size,20);
for(const slug of BATCH03_SECOND_PASS_SLUGS){
  test(`second detail pass geometry: ${slug}`,()=>{
    const spec=assets.find(x=>x.slug===slug);
    assert.ok(spec);
    const model=buildRefinedCommerceBatch03(spec);
    assert.ok(model instanceof THREE.Group);
    assert.equal(model.userData.refinedBatch,'03');
    assert.equal(model.userData.detailPass,2);
    assert.ok(model.userData.secondPassParts>=6);
    assert.equal(model.userData.manufacturingStatus,'unverified');
    const nodes=[];model.traverse(o=>{if(o.isMesh)nodes.push(o);});
    assert.ok(nodes.filter(o=>o.name.startsWith('v2-')).length>=6);
    assert.equal(new Set(nodes.map(o=>o.name)).size,nodes.length,'unique mesh names');
    for(const n of nodes){
      assert.ok(n.geometry.attributes.position?.count>0,'valid vertex buffer');
      assert.ok(n.material instanceof THREE.Material,'material assigned');
    }
    const bounds=new THREE.Box3().setFromObject(model);
    const size=bounds.getSize(new THREE.Vector3());
    for(let i=0;i<3;i++)assert.ok(Math.abs(size.getComponent(i)-spec.dimensions_m[i])<1e-5);
    assert.ok(Math.abs(bounds.min.y)<1e-5);
    model.traverse(n=>{if(n.geometry)n.geometry.dispose();if(n.material)n.material.dispose();});
  });
}
