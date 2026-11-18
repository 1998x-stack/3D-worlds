/** Deterministic rigid-body tree forward kinematics (not a physics solver). */
import * as THREE from 'three';
import {assertValidAssembly} from './schema.js';
const identity={position_m:[0,0,0],quaternion_xyzw:[0,0,0,1]};
const frameMatrix=f=>new THREE.Matrix4().compose(
 new THREE.Vector3(...f.position_m),
 new THREE.Quaternion(...f.quaternion_xyzw),
 new THREE.Vector3(1,1,1)
);
function motionMatrix(j,value){
 if(j.type==='fixed')return new THREE.Matrix4();
 if(j.type==='revolute')return new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(...j.axis),value);
 return new THREE.Matrix4().makeTranslation(...j.axis.map(x=>x*value));
}
export function forwardKinematics(assembly,values={}){
 assertValidAssembly(assembly);
 const resolved={};
 for(const j of assembly.joints){
  const q=values[j.id]??j.default??0;
  if(typeof q!=='number'||!Number.isFinite(q))throw Error('Nonfinite joint value '+j.id);
  if(j.type==='fixed'&&q!==0)throw Error('Fixed joint cannot move: '+j.id);
  if(j.type!=='fixed'&&(q<j.limits[0]-1e-9||q>j.limits[1]+1e-9))
   throw Error('Joint outside limits: '+j.id);
  resolved[j.id]=q;
 }
 for(const id of Object.keys(values))if(!assembly.joints.some(j=>j.id===id))
   throw Error('Unknown joint state: '+id);
 const parts=new Map(assembly.parts.map(p=>[p.id,p]));
 const byParent=new Map();
 for(const j of assembly.joints)(byParent.get(j.parent)||byParent.set(j.parent,[]).get(j.parent)).push(j);
 const matrices=new Map([[assembly.root_part,frameMatrix(parts.get(assembly.root_part).pose||identity)]]);
 const queue=[assembly.root_part];
 for(let k=0;k<queue.length;k++){
  const parent=queue[k];
  for(const joint of byParent.get(parent)||[]){
   const m=matrices.get(parent).clone()
    .multiply(frameMatrix(joint.parent_frame))
    .multiply(motionMatrix(joint,resolved[joint.id]))
    .multiply(frameMatrix(joint.child_frame).invert());
   if(matrices.has(joint.child))throw Error('Unexpected kinematic cycle '+joint.child);
   matrices.set(joint.child,m);queue.push(joint.child);
  }
 }
 const part_poses={};
 for(const [id,m] of matrices){
  const position=new THREE.Vector3(),quaternion=new THREE.Quaternion(),scale=new THREE.Vector3();
  m.decompose(position,quaternion,scale);
  part_poses[id]={position_m:position.toArray(),quaternion_xyzw:quaternion.toArray(),
    world_matrix:m.toArray()};
 }
 return {system_id:assembly.system_id,units:'m',up_axis:'Y',joint_values:resolved,
  part_poses,solver:'tree_forward_kinematics',constraints_residual_m:0,
  limitations:['no closed loops','no forces/inertia','no joint compliance','no physical fit certification']};
}
