import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateAssemblySteps} from '../src/assembly/steps.js';
const world=JSON.parse(readFileSync(new URL('../examples/assembly/six-wheel-rover.json',import.meta.url),'utf8'));
const plan=JSON.parse(readFileSync(new URL('../examples/assembly/rover-steps.json',import.meta.url),'utf8'));
test('assembly order has four valid monotonic editable phases',()=>{
 const result=validateAssemblySteps(world,plan.steps);
 assert.equal(result.ok,true,result.errors.join('; '));
 assert.equal(result.steps_checked,4);
});
test('rejected steps cannot omit parents or remove installed components',()=>{
 const reordered=structuredClone(plan.steps);
 reordered[1].part_ids=['chassis','wheel-left-front','wheel-right-front','bogus'];
 assert.equal(validateAssemblySteps(world,reordered).ok,false);
 const omitted=structuredClone(plan.steps);
 omitted[2].part_ids=['chassis','wheel-left-middle','wheel-right-middle'];
 assert.equal(validateAssemblySteps(world,omitted).ok,false);
});
