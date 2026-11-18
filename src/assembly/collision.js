/** Box-proxy broad AABB and narrow oriented-box SAT intersections.
 * Valid only for the authored box proxies, not detailed GLB/CAD geometry.
 */
import * as THREE from 'three';
import {forwardKinematics} from './kinematics.js';
const AXES=[new THREE.Vector3(1,0,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,0,1)];
function proxy(c,world,id){
 const matrix=new THREE.Matrix4().fromArray(world.part_poses[id].world_matrix);
 const center=new THREE.Vector3(...c.center_m).applyMatrix4(matrix);
 const axes=AXES.map(axis=>axis.clone().transformDirection(matrix));
 const half=c.size_m.map(v=>v/2);
 const extent=AXES.map((basis,k)=>axes.reduce((sum,axis,i)=>sum+half[i]*Math.abs(axis.getComponent(k)),0));
 return {id,collider:c.id,center,axes,half,extent};
}
function bboxOverlap(a,b){
 return [0,1,2].every(k=>Math.abs(a.center.getComponent(k)-b.center.getComponent(k)) <
   a.extent[k]+b.extent[k]-1e-8);
}
function satOverlap(a,b){
 const delta=b.center.clone().sub(a.center);
 const candidates=[...a.axes,...b.axes];
 for(const u of a.axes)for(const v of b.axes)candidates.push(new THREE.Vector3().crossVectors(u,v));
 for(const axis of candidates){
  if(axis.lengthSq()<1e-12)continue;
  axis.normalize();
  const aRadius=a.axes.reduce((sum,v,k)=>sum+a.half[k]*Math.abs(v.dot(axis)),0);
  const bRadius=b.axes.reduce((sum,v,k)=>sum+b.half[k]*Math.abs(v.dot(axis)),0);
  if(Math.abs(delta.dot(axis))>=aRadius+bRadius-1e-8)return false;
 }
 return true;
}
export function detectCollisions(assembly,states={}, {excludeAdjacent=true}={}){
 const world=states.part_poses?states:forwardKinematics(assembly,states);
 const ignored=new Set();
 const pairKey=(a,b)=>[a,b].sort().join('\0');
 for(const pair of assembly.collision_exclusions||[])ignored.add(pairKey(...pair));
 if(excludeAdjacent)for(const j of assembly.joints)ignored.add(pairKey(j.parent,j.child));
 const list=assembly.parts.flatMap(p=>p.colliders.map(c=>proxy(c,world,p.id)));
 const contacts=[];let broadphase_pairs=0;
 for(let i=0;i<list.length;i++)for(let j=i+1;j<list.length;j++){
  const a=list[i],b=list[j];
  if(a.id===b.id||ignored.has(pairKey(a.id,b.id)))continue;
  if(!bboxOverlap(a,b))continue;
  broadphase_pairs++;
  if(satOverlap(a,b))contacts.push({part_a:a.id,part_b:b.id,
   collider_a:a.collider,collider_b:b.collider});
 }
 return {system_id:assembly.system_id,collisions:contacts,collision_count:contacts.length,
   broadphase_pairs,method:'AABB + oriented-box SAT',
   quality:'proxy_geometry_only',not_proven:['real mesh intersection','continuous swept path','strength']};
}
export function auditMotionPath(assembly,keyframes,{samplesPerSegment=12}={}){
 if(!Array.isArray(keyframes)||keyframes.length<2)throw Error('Need at least two joint keyframes');
 if(!Number.isInteger(samplesPerSegment)||samplesPerSegment<1||samplesPerSegment>240)
  throw Error('Invalid sample budget');
 const records=[],collisions=[];
 const defaults=Object.fromEntries(assembly.joints.map(j=>[j.id,j.default??0]));
 for(let seg=0;seg<keyframes.length-1;seg++){
  const a={...defaults,...keyframes[seg]},b={...defaults,...keyframes[seg+1]};
  for(let i=0;i<=samplesPerSegment;i++){
   if(seg>0&&i===0)continue;
   const t=i/samplesPerSegment;
   const q=Object.fromEntries(assembly.joints.map(j=>[j.id,a[j.id]+(b[j.id]-a[j.id])*t]));
   const impact=detectCollisions(assembly,q);
   records.push({segment:seg,t,collision_count:impact.collision_count});
   if(impact.collision_count)collisions.push({segment:seg,t,pairs:impact.collisions});
  }
 }
 return {system_id:assembly.system_id,samples_checked:records.length,
  collision_samples:collisions.length,collisions,
  status:collisions.length?'sampled_proxy_collision_detected':'sampled_proxy_clear_not_proof',
  limitations:['finite discrete sampling','box proxy geometry only','no self-collision deformables',
    'no continuous time-of-impact','no real-world assembly clearance']};
}
