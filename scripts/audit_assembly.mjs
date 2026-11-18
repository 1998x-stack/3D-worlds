#!/usr/bin/env node
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {assertValidAssembly} from '../src/assembly/schema.js';
import {forwardKinematics} from '../src/assembly/kinematics.js';
import {detectCollisions,auditMotionPath} from '../src/assembly/collision.js';
const file=resolve(process.argv[2]||'examples/assembly/six-wheel-rover.json');
const assembly=JSON.parse(await readFile(file,'utf8'));
const structural=assertValidAssembly(assembly);
const world=forwardKinematics(assembly);
const contacts=detectCollisions(assembly,world);
const keyframes=[{},Object.fromEntries(assembly.joints
  .filter(j=>j.type!=='fixed').map(j=>[j.id,j.default??0]))];
const sweep=auditMotionPath(assembly,keyframes,{samplesPerSegment:12});
const report={file,structural,kinematic_parts:Object.keys(world.part_poses).length,
  joint_values:world.joint_values,rest_proxy_collisions:contacts,
  sampled_path:sweep,manufacturing_certified:false,physically_tested:false};
console.log(JSON.stringify(report,null,2));
if(contacts.collision_count||sweep.collision_samples)process.exitCode=1;
