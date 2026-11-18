/** Validate monotone machine-checkable assembly steps, not physical clearances. */
import {assertValidAssembly} from './schema.js';
export function validateAssemblySteps(world,steps){
 assertValidAssembly(world);
 const errors=[],ids=new Set(world.parts.map(p=>p.id));
 const parent=Object.fromEntries(world.joints.map(j=>[j.child,j.parent]));
 if(!Array.isArray(steps)||!steps.length)return{ok:false,errors:['Assembly steps must be nonempty']};
 let previous=new Set();
 for(const [index,step] of steps.entries()){
  const path='steps['+index+']';
  if(!step||typeof step.id!=='string'||typeof step.label!=='string'||!Array.isArray(step.part_ids)){
   errors.push(path+': malformed step');continue;
  }
  const current=new Set(step.part_ids);
  if(current.size!==step.part_ids.length)errors.push(path+': repeated part IDs');
  for(const p of current)if(!ids.has(p))errors.push(path+': unknown part '+p);
  if(!current.has(world.root_part))errors.push(path+': root chassis must remain installed');
  for(const p of previous)if(!current.has(p))errors.push(path+': previously installed part removed '+p);
  for(const p of current)if(p!==world.root_part&&!previous.has(p) &&
     !previous.has(parent[p]) && !step.part_ids.slice(0,step.part_ids.indexOf(p)).includes(parent[p]))
    errors.push(path+': parent must be installed first: '+p);
  previous=current;
 }
 if(previous.size!==ids.size)errors.push('Final assembly step must include every part');
 return{ok:errors.length===0,errors,steps_checked:steps.length,
  proof_scope:'semantic_order_only_no_clearance_or_manufacturing_claim'};
}
