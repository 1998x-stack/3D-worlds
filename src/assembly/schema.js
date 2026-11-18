/** Assembly Schema v1 structural contracts.
 * Units: meters; right-handed +Y up; quaternion order XYZW.
 * Graph validity is not a dynamics/structural-strength certification.
 */
const ID=/^[a-z][a-z0-9-]{0,79}$/;
const JOINTS=new Set(['fixed','revolute','prismatic']);
const finite=v=>typeof v==='number'&&Number.isFinite(v);
const vec=(v,n)=>Array.isArray(v)&&v.length===n&&v.every(finite);
const near=(a,b,e=1e-5)=>Math.abs(a-b)<=e;
function frameOK(value){
 return value&&vec(value.position_m,3)&&vec(value.quaternion_xyzw,4)
  &&near(Math.hypot(...value.quaternion_xyzw),1);
}
export function validateAssembly(world){
 const errors=[];
 const fail=(where,reason)=>errors.push(where+': '+reason);
 if(!world||typeof world!=='object'||Array.isArray(world))return{ok:false,errors:['Assembly must be an object']};
 if(world.schema_version!=='1.0.0')fail('schema_version','expected 1.0.0');
 if(world.units!=='m'||world.up_axis!=='Y')fail('coordinates','expected meters/Y-up');
 if(typeof world.system_id!=='string'||!ID.test(world.system_id))fail('system_id','invalid stable identifier');
 const parts=Array.isArray(world.parts)?world.parts:[];
 const joints=Array.isArray(world.joints)?world.joints:[];
 if(!parts.length)fail('parts','at least one rigid part required');
 const partIds=new Set();
 for(const [i,part] of parts.entries()){
  const path='parts['+i+']';
  if(!part||typeof part!=='object'||!ID.test(part.id||''))fail(path,'invalid ID');
  else if(partIds.has(part.id))fail(path,'duplicate ID '+part.id);
  else partIds.add(part.id);
  if(part.pose!==undefined&&!frameOK(part.pose))fail(path+'.pose','invalid position/quaternion');
  const colliders=part.colliders;
  if(!Array.isArray(colliders)||colliders.length===0)fail(path+'.colliders','required box proxy list');
  else {
   const ids=new Set();
   for(const [k,c] of colliders.entries()){
    if(!c||!ID.test(c.id||'')||ids.has(c.id))fail(path+'.colliders['+k+']','invalid/duplicate collider ID');
    else ids.add(c.id);
    if(c?.shape!=='box'||!vec(c?.center_m,3)||!vec(c?.size_m,3)||
       !c.size_m.every(x=>x>0))
      fail(path+'.colliders['+k+']','box must have finite center and positive size in meters');
   }
  }
 }
 if(!partIds.has(world.root_part))fail('root_part','root component missing');
 const jointIds=new Set(),parentCount=new Map(),children=new Map();
 for(const [i,j] of joints.entries()){
  const path='joints['+i+']';
  if(!j||!ID.test(j.id||'')||jointIds.has(j.id))fail(path,'invalid/duplicate joint ID');
  else jointIds.add(j.id);
  if(!JOINTS.has(j?.type))fail(path+'.type','expected fixed, revolute or prismatic');
  if(!partIds.has(j?.parent)||!partIds.has(j?.child)||j.parent===j.child)
   fail(path+'.endpoints','invalid joint parent/child');
  else {
   parentCount.set(j.child,(parentCount.get(j.child)||0)+1);
   (children.get(j.parent)||children.set(j.parent,[]).get(j.parent)).push(j.child);
  }
  if(!frameOK(j?.parent_frame)||!frameOK(j?.child_frame))
   fail(path+'.frames','both local joint frames must be finite normalized rigid transforms');
  if(j?.type==='revolute'||j?.type==='prismatic'){
   if(!vec(j.axis,3)||!near(Math.hypot(...j.axis),1,1e-4))
    fail(path+'.axis','unit-length axis required');
   if(!vec(j.limits,2)||j.limits[0]>j.limits[1])
    fail(path+'.limits','valid [minimum,maximum] required');
   if(!finite(j.default)||!(vec(j.limits,2) && j.default>=j.limits[0] && j.default<=j.limits[1]))
    fail(path+'.default','finite default inside declared limits required');
  }else if(j?.type==='fixed'&&j.default!==undefined&&j.default!==0)
   fail(path+'.default','fixed joint cannot move');
 }
 if(joints.length!==Math.max(0,parts.length-1))fail('graph','connected rigid tree needs parts-1 joints');
 if(parentCount.has(world.root_part))fail('graph','root has an incoming joint');
 for(const p of partIds)if(p!==world.root_part&&parentCount.get(p)!==1)
   fail('graph','each non-root part needs exactly one parent: '+p);
 if(partIds.has(world.root_part)){
  const reached=new Set(),q=[world.root_part];
  for(let k=0;k<q.length&&k<=parts.length;k++){
   if(reached.has(q[k]))continue;
   reached.add(q[k]);q.push(...(children.get(q[k])||[]));
  }
  if(reached.size!==parts.length)fail('graph','unreachable components/cycles: '+[...partIds].filter(x=>!reached.has(x)).join(','));
 }
 for(const [i,pair] of (world.collision_exclusions||[]).entries()){
  if(!Array.isArray(pair)||pair.length!==2||pair[0]===pair[1]||!pair.every(x=>partIds.has(x)))
   fail('collision_exclusions['+i+']','must reference two distinct parts');
 }
 return{ok:errors.length===0,errors,part_count:parts.length,joint_count:joints.length,
        proof_stage:'structural_graph_only'};
}
export function assertValidAssembly(world){
 const report=validateAssembly(world);
 if(!report.ok)throw new Error('Invalid assembly: '+report.errors.join('; '));
 return report;
}
