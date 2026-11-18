import test from 'node:test';
import assert from 'node:assert/strict';
import {checkReleaseContracts} from '../scripts/release_index.mjs';
const file={asset_id:'fixture.model.001',slug:'model',variants:[0,1,2].map(level=>({level,path:'public/generated/model-lod'+level+'.glb',sha256:'abc',bytes:10}))};
const manifest={assets:[{id:file.asset_id,slug:'model',kind:'procedural'}]};
const index={count:1,entries:[file]};
const shards={total_assets:1,shards:[{path:'shard-0001.json',count:1}]};
test('release must reconcile catalog, static shard, GLB manifest',()=>{
 assert.deepEqual(checkReleaseContracts(manifest,index,shards),{assets:1,lod_variants:3,shards:1});
 assert.throws(()=>checkReleaseContracts(manifest,index,{...shards,total_assets:0}),/shard/);
 assert.throws(()=>checkReleaseContracts(manifest,{...index,count:0},shards),/cover/);
 const wrong=structuredClone(index);wrong.entries[0].slug='other';
 assert.throws(()=>checkReleaseContracts(manifest,wrong,shards),/mapping/);
});
