import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import world from '../examples/assembly/six-wheel-rover.json';
import plan from '../examples/assembly/rover-steps.json';
import {assertValidAssembly} from './assembly/schema.js';
import {forwardKinematics} from './assembly/kinematics.js';
import {detectCollisions} from './assembly/collision.js';
import {validateAssemblySteps} from './assembly/steps.js';
import './assembly-demo.css';

assertValidAssembly(world);
const stepAudit=validateAssemblySteps(world,plan.steps);
if(!stepAudit.ok)throw new Error('Invalid rover installation plan: '+stepAudit.errors.join('; '));
const el=document.getElementById('assembly-app');
const esc=t=>String(t).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
el.innerHTML=`
<header class="lab-header">
 <strong>◈ 3D WORLDS · ASSEMBLY LAB</strong>
 <nav><a href="./">返回模型库</a><a href="https://github.com/1998x-stack/3D-worlds" rel="noopener noreferrer">Source</a></nav>
</header>
<main class="lab-main">
 <section class="lab-panel" aria-label="机械零件树">
  <h2>六轮探测车 · 零件树</h2>
  <p class="lab-caption">7 个刚体 / 6 个转动关节。点击零件选择或切换可见性。模型采用盒体代理几何，不是完整汽车 CAD。</p>
  <div id="assembly-part-list"></div>
  <div class="lab-control">
   <label for="assembly-explode">爆炸视图距离 <span id="explode-value">0.00 m</span></label>
   <input type="range" id="assembly-explode" min="0" max="1" step="0.05" value="0">
  </div>
  <div class="lab-actions">
   <button type="button" class="lab-btn" id="assembly-reset">恢复全部</button>
   <button type="button" class="lab-btn" id="assembly-check">检查代理碰撞</button>
  </div>
  <p id="assembly-status" role="status" aria-live="polite"></p>
 </section>
 <section class="lab-viewport" aria-label="交互式三维机械装配画布">
   <canvas id="assembly-canvas" aria-label="可旋转的六轮车三维模型"></canvas>
   <div class="lab-overlay"><strong>Interactive Assembly v1</strong>
   <p>鼠标拖拽旋转 · 滚轮缩放 · 点击零件选中。选中名称：<span id="selected-part">chassis</span></p></div>
 </section>
 <section class="lab-panel lab-right">
  <h2>装配步骤</h2>
  <p class="lab-caption">次序经零件连接图审核；不证明真实装配路径无干涉。</p>
  <div class="lab-control">
   <strong id="assembly-step-label"></strong>
   <div class="lab-actions">
    <button type="button" class="lab-btn" id="assembly-prev">上一步</button>
    <button type="button" class="lab-btn" id="assembly-next">下一步</button>
   </div>
  </div>
  <h2>关节参数</h2>
  <div id="assembly-joints"></div>
  <p class="lab-note">验证边界：仅树形正向运动学、盒体代理碰撞与离散采样；未测量真实机械装配干涉、材料应力、载荷、强度或实体公差。</p>
 </section>
</main>
<footer class="lab-footer">Assembly Schema v1.0.0 · meters/Y-up · source editable · no manufacturing or collision-path certification</footer>`;

const canvas=document.getElementById('assembly-canvas');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(43,1,.02,100);
camera.position.set(2.8,2.4,3.1);
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
scene.add(new THREE.HemisphereLight(0xe8f5ff,0x637282,2.1));
const key=new THREE.DirectionalLight(0xffe5bd,3.4);
key.position.set(2,4,3);scene.add(key);
const grid=new THREE.GridHelper(4.5,22,0x5c8791,0x335360);
grid.position.y=-.009;scene.add(grid);
const controls=new OrbitControls(camera,canvas);
controls.target.set(0,.43,0);
controls.enableDamping=true;
controls.dampingFactor=.075;
controls.minDistance=1.1;controls.maxDistance=10;
controls.update();

const groups=new Map(),meshes=[];
const originals=new Map();
for(const part of world.parts){
 const group=new THREE.Group();
 group.name=part.id;
 group.matrixAutoUpdate=false;
 const color=part.id===world.root_part?0xc4ad89:(part.id.includes('left')?0x6da4ac:0x8eabb4);
 originals.set(part.id,color);
 for(const collider of part.colliders){
  const geometry=new THREE.BoxGeometry(...collider.size_m);
  const material=new THREE.MeshStandardMaterial({color,roughness:.48,metalness:.3});
  const mesh=new THREE.Mesh(geometry,material);
  mesh.position.set(...collider.center_m);
  mesh.userData.partId=part.id;
  mesh.name=part.id+' / '+collider.id;
  mesh.castShadow=true;mesh.receiveShadow=true;
  group.add(mesh);meshes.push(mesh);
 }
 groups.set(part.id,group);
 scene.add(group);
}
const list=document.getElementById('assembly-part-list');
const jointList=document.getElementById('assembly-joints');
const status=document.getElementById('assembly-status');
const visible=new Set(world.parts.map(p=>p.id));
const jointValues=Object.fromEntries(world.joints.map(j=>[j.id,j.default??0]));
let selected=world.root_part,stepIndex=plan.steps.length-1,explosion=0;
function paint(){
 for(const mesh of meshes)mesh.material.color.setHex(
  mesh.userData.partId===selected?0xe6b56c:originals.get(mesh.userData.partId));
 document.getElementById('selected-part').textContent=selected;
}
function drawParts(){
 list.innerHTML=world.parts.map(part=>`<div class="lab-part">
 <button type="button" data-part="${esc(part.id)}" aria-pressed="${selected===part.id}">${esc(part.name||part.id)}</button>
 <input type="checkbox" data-visible="${esc(part.id)}" aria-label="显示 ${esc(part.name||part.id)}" ${visible.has(part.id)?'checked':''}>
 </div>`).join('');
 paint();
}
function drawJoints(){
 jointList.innerHTML=world.joints.filter(j=>j.type!=='fixed').map(j=>`
 <div class="lab-control">
 <label for="joint-${esc(j.id)}">${esc(j.id)} <span data-joint-label="${esc(j.id)}">${jointValues[j.id].toFixed(2)} rad</span></label>
 <input type="range" id="joint-${esc(j.id)}" data-joint="${esc(j.id)}"
 min="${j.limits[0]}" max="${j.limits[1]}" step="0.05" value="${jointValues[j.id]}">
 </div>`).join('');
}
function refresh(){
 const poses=forwardKinematics(world,jointValues);
 const center=new THREE.Vector3(...poses.part_poses[world.root_part].position_m);
 for(const part of world.parts){
  const pose=poses.part_poses[part.id];
  const matrix=new THREE.Matrix4().fromArray(pose.world_matrix);
  if(part.id!==world.root_part && explosion>0){
   const delta=new THREE.Vector3(...pose.position_m).sub(center);
   if(delta.lengthSq()<1e-9)delta.set(0,1,0);
   delta.normalize().multiplyScalar(explosion);
   matrix.premultiply(new THREE.Matrix4().makeTranslation(delta.x,delta.y,delta.z));
  }
  const group=groups.get(part.id);
  group.matrix.copy(matrix);
  group.visible=visible.has(part.id);
  group.matrixWorldNeedsUpdate=true;
  group.updateMatrixWorld(true);
 }
 drawParts();
 document.getElementById('explode-value').textContent=explosion.toFixed(2)+' m';
 document.getElementById('assembly-step-label').textContent=plan.steps[stepIndex].label+
  '（'+(stepIndex+1)+'/'+plan.steps.length+'）';
 document.getElementById('assembly-prev').disabled=stepIndex===0;
 document.getElementById('assembly-next').disabled=stepIndex===plan.steps.length-1;
}
function applyStep(i){
 stepIndex=Math.max(0,Math.min(i,plan.steps.length-1));
 visible.clear();
 for(const part of plan.steps[stepIndex].part_ids)visible.add(part);
 refresh();
 status.textContent='装配步骤已切换。仅验证组件次序与父子连接关系。';
}
list.addEventListener('click',event=>{
 const button=event.target.closest('button[data-part]');
 if(!button)return;
 selected=button.dataset.part;refresh();
});
list.addEventListener('change',event=>{
 if(!event.target.matches('input[data-visible]'))return;
 const part=event.target.dataset.visible;
 if(event.target.checked)visible.add(part);else visible.delete(part);
 refresh();
});
jointList.addEventListener('input',event=>{
 if(!event.target.matches('input[data-joint]'))return;
 const id=event.target.dataset.joint;
 jointValues[id]=Number(event.target.value);
 jointList.querySelector('[data-joint-label="'+id+'"]').textContent=jointValues[id].toFixed(2)+' rad';
 refresh();
});
document.getElementById('assembly-explode').addEventListener('input',event=>{
 explosion=Number(event.target.value);refresh();
});
document.getElementById('assembly-prev').addEventListener('click',()=>applyStep(stepIndex-1));
document.getElementById('assembly-next').addEventListener('click',()=>applyStep(stepIndex+1));
document.getElementById('assembly-reset').addEventListener('click',()=>{
 visible.clear();for(const p of world.parts)visible.add(p.id);
 for(const j of world.joints)jointValues[j.id]=j.default??0;
 selected=world.root_part;stepIndex=plan.steps.length-1;explosion=0;
 document.getElementById('assembly-explode').value='0';drawJoints();refresh();
 status.textContent='已恢复 7 个组件及默认关节状态。';
});
document.getElementById('assembly-check').addEventListener('click',()=>{
 const result=detectCollisions(world,jointValues);
 status.textContent='代理盒体检测：'+result.collision_count+
  ' 组碰撞（粗筛 '+result.broadphase_pairs+' 组）。仅验证当前关节状态与代理几何。';
});
const ray=new THREE.Raycaster(),mouse=new THREE.Vector2();
canvas.addEventListener('click',event=>{
 const rect=canvas.getBoundingClientRect();
 mouse.x=(event.clientX-rect.left)/rect.width*2-1;
 mouse.y=-(event.clientY-rect.top)/rect.height*2+1;
 ray.setFromCamera(mouse,camera);
 const hits=ray.intersectObjects(meshes.filter(m=>m.parent.visible),false);
 if(hits.length){selected=hits[0].object.userData.partId;refresh();}
});
const observer=new ResizeObserver(()=>{
 const width=Math.max(1,canvas.clientWidth),height=Math.max(1,canvas.clientHeight);
 renderer.setSize(width,height,false);
 camera.aspect=width/height;camera.updateProjectionMatrix();
});
observer.observe(canvas);
let frame=0;
function animate(){
 frame=requestAnimationFrame(animate);
 if(document.hidden)return;
 controls.update();renderer.render(scene,camera);
}
drawJoints();refresh();animate();
window.addEventListener('pagehide',()=>{
 cancelAnimationFrame(frame);observer.disconnect();controls.dispose();
 for(const m of meshes){m.geometry.dispose();m.material.dispose();}
 renderer.dispose();
},{once:true});
