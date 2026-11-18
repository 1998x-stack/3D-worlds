import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as THREE from 'three';
import {validateAssembly,assertValidAssembly} from '../src/assembly/schema.js';
import {forwardKinematics} from '../src/assembly/kinematics.js';
import {detectCollisions,auditMotionPath} from '../src/assembly/collision.js';
const fixture=JSON.parse(readFileSync(new URL('../examples/assembly/six-wheel-rover.json',import.meta.url),'utf8'));
const clone=()=>structuredClone(fixture);
test('six-wheel rover assembly graph is connected and deterministic',()=>{
 const c=validateAssembly(fixture);
 assert.equal(c.ok,true,c.errors.join('; '));
 assert.equal(c.part_count,7);assert.equal(c.joint_count,6);
 const world=forwardKinematics(fixture);
 assert.equal(Object.keys(world.part_poses).length,7);
 assert.ok(Math.abs(world.part_poses['wheel-left-front'].position_m[1]-.35)<1e-9);
 assert.equal(detectCollisions(fixture,world).collision_count,0);
});
test('rejects missing components, cycles and nonunit joint axes',()=>{
 const missing=clone();missing.joints[0].child='missing';
 assert.equal(validateAssembly(missing).ok,false);
 const invalid=clone();invalid.joints[0].axis=[.3,0,0];
 assert.equal(validateAssembly(invalid).ok,false);
 const loop=clone();loop.joints[0].parent='wheel-right-rear';
 assert.equal(validateAssembly(loop).ok,false);
});
test('revolute, prismatic and fixed kinematics enforce declared limits',()=>{
 const q=forwardKinematics(fixture,{'axle-left-front':Math.PI/2});
 const before=forwardKinematics(fixture);
 assert.deepEqual(q.part_poses['wheel-left-front'].position_m,before.part_poses['wheel-left-front'].position_m);
 assert.notDeepEqual(q.part_poses['wheel-left-front'].quaternion_xyzw,before.part_poses['wheel-left-front'].quaternion_xyzw);
 assert.throws(()=>forwardKinematics(fixture,{'axle-left-front':100}),/limits/);
 const slide=clone();slide.joints[0].type='prismatic';slide.joints[0].axis=[0,1,0];slide.joints[0].limits=[-.5,.5];
 const beforeSlide=forwardKinematics(slide),afterSlide=forwardKinematics(slide,{'axle-left-front':.2});
 assert.ok(Math.abs(afterSlide.part_poses['wheel-left-front'].position_m[1]-
  beforeSlide.part_poses['wheel-left-front'].position_m[1]-.2)<1e-8);
 const fixed=clone();fixed.joints[0].type='fixed';
 assertValidAssembly(fixed);
 assert.throws(()=>forwardKinematics(fixed,{'axle-left-front':.1}),/Fixed/);
});
test('nonadjacent oriented boxes collide; motion audit preserves proof limitations',()=>{
 const overlapping=clone();
 overlapping.joints[1].parent_frame.position_m=
  [...overlapping.joints[0].parent_frame.position_m];
 const hits=detectCollisions(overlapping);
 assert.ok(hits.collision_count>0);
 const path=auditMotionPath(fixture,[{}, {'axle-left-front':Math.PI/2}],{samplesPerSegment:9});
 assert.equal(path.samples_checked,10);
 assert.ok(path.status.endsWith('_not_proof')||path.collision_samples>0);
 assert.ok(path.limitations.some(x=>x.includes('discrete')));
});
