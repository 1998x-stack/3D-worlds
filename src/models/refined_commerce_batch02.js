// SPDX-License-Identifier: MIT
// Batch 02: purpose-built, inspectable Three.js previews for 20 existing overseas SKUs.
// All coordinates below are stylized mm / Y-up; OpenSCAD remains CAD authority.
import * as THREE from 'three';
export const REFINED_COMMERCE_BATCH02_SLUGS = Object.freeze([
  'geometric-star-lightbox','forest-shadow-lantern','minimal-arch-nightlight',
  'cloud-whale-totem','sleepy-owl-guardian','alpine-cabin-miniature',
  'retro-station-platform','craft-spool-organizer','watch-display-cradle',
  'miniature-tiered-riser','universal-controller-cradle','tabletop-dice-tray',
  'boardgame-token-sorter','arc-earring-display','ring-cone-tower',
  'geo-cactus-planter','custom-desk-nameplate','house-number-plaque',
  'celestial-guild-medallion','alchemist-costume-brooch'
]);
const selection = new Set(REFINED_COMMERCE_BATCH02_SLUGS);
const RAD = Math.PI / 180;
export function buildRefinedCommerceBatch02(spec){
  if(!selection.has(spec.slug)) return null;
  const root = new THREE.Group();root.name = spec.title+' · detail batch 02';
  const mats = {
    shell:new THREE.MeshStandardMaterial({color:spec.accent,roughness:.47,metalness:.06,side:THREE.DoubleSide}),
    shadow:new THREE.MeshStandardMaterial({color:0x2e3b4a,roughness:.68,metalness:.08}),
    trim:new THREE.MeshStandardMaterial({color:0xd8c7a7,roughness:.39,metalness:.31}),
    matte:new THREE.MeshStandardMaterial({color:0x778c8a,roughness:.73,metalness:.04}),
    bright:new THREE.MeshStandardMaterial({color:0xf3e1b8,roughness:.53,metalness:.03}),
    dark:new THREE.MeshStandardMaterial({color:0x405065,roughness:.58,metalness:.04}),
  };
  function add(name,geo,x,y,z,tone='shell'){
    const o=new THREE.Mesh(geo,mats[tone]);o.name=name;o.position.set(x,y,z);
    o.castShadow=true;o.receiveShadow=true;root.add(o);return o;
  }
  const box=(n,w,h,d,x,y,z,t='shell')=>add(n,new THREE.BoxGeometry(w,h,d),x,y,z,t);
  const cy=(n,r,h,x,y,z,t='shell',segments=40)=>add(n,new THREE.CylinderGeometry(r,r,h,segments),x,y,z,t);
  function tapered(n,rb,rt,h,x,y,z,t='shell',segments=40){return add(n,new THREE.CylinderGeometry(rt,rb,h,segments),x,y,z,t);}
  function ball(n,r,x,y,z,t='shell',scale=[1,1,1]){const o=add(n,new THREE.SphereGeometry(r,24,16),x,y,z,t);o.scale.set(...scale);return o;}
  const tor=(n,r,tube,x,y,z,t='trim')=>{const o=add(n,new THREE.TorusGeometry(r,tube,9,56),x,y,z,t);o.rotation.x=Math.PI/2;return o;};
  function rod(n,a,b,r=2.3,t='trim'){
    const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b),delta=B.clone().sub(A);
    const o=add(n,new THREE.CylinderGeometry(r,r,delta.length(),12),0,0,0,t);
    o.position.copy(A.clone().add(B).multiplyScalar(.5));
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return o;
  }
  function wallRing(n,r,h,y,t='shell',inside=3.2){
    const shape=new THREE.Shape();shape.absarc(0,0,r,0,2*Math.PI,false);
    const cut=new THREE.Path();cut.absarc(0,0,r-inside,0,2*Math.PI,true);shape.holes.push(cut);
    const geo=new THREE.ExtrudeGeometry(shape,{depth:h,bevelEnabled:false,curveSegments:64});geo.rotateX(-Math.PI/2);
    return add(n,geo,0,y,0,t);
  }
  function panel(n,w,h,thick,x,y,z,t='shell',holes=[]){
    const shape=new THREE.Shape();shape.moveTo(-w/2,-h/2);shape.lineTo(w/2,-h/2);
    shape.lineTo(w/2,h/2);shape.lineTo(-w/2,h/2);shape.closePath();
    for(const hole of holes){
      const cut=new THREE.Path();
      if(hole.type==='star'){
        for(let j=0;j<10;j++){
          const a=j*Math.PI/5-Math.PI/2,r=j%2?hole.r*.47:hole.r;
          const px=hole.x+Math.cos(a)*r,py=hole.y+Math.sin(a)*r;
          if(j===0)cut.moveTo(px,py);else cut.lineTo(px,py);
        }cut.closePath();
      }else if(hole.type==='tree'){
        cut.moveTo(hole.x-3,hole.y-5);cut.lineTo(hole.x,hole.y+8);
        cut.lineTo(hole.x+3,hole.y-5);cut.lineTo(hole.x+1.2,hole.y-5);
        cut.lineTo(hole.x+1.2,hole.y-8);cut.lineTo(hole.x-1.2,hole.y-8);cut.closePath();
      }else cut.absarc(hole.x,hole.y,hole.r,0,2*Math.PI,true);
      shape.holes.push(cut);
    }
    return add(n,new THREE.ExtrudeGeometry(shape,{depth:thick,bevelEnabled:false,curveSegments:20}),x,y,z,t);
  }
  function sleeve(kind){
    const forest=kind==='forest';const r=forest?44:43;const h=forest?120:116;
    const count=12,step=2*Math.PI/count;
    for(let i=0;i<count;i++){
      const a=i*step,w=2*Math.PI*r/count-.8;
      const holes=forest?[{type:'tree',x:0,y:-18},{type:'tree',x:0,y:19}]:
        [{type:'star',x:0,y:-22,r:5.7},{type:'star',x:0,y:16,r:5.7}];
      const o=panel((forest?'fir':'star')+'-cutout-wall-'+i,w,h-11,2.7,r*Math.sin(a),h/2,r*Math.cos(a),'shell',holes);
      o.rotation.y=a;
      if(i%3===0)rod('vertical-shell-edge-'+i,[r*Math.sin(a),5,r*Math.cos(a)],[r*Math.sin(a),h-5,r*Math.cos(a)],1.6,'trim');
    }
    wallRing('machined-base-ring',r+2.5,4,0,'dark',5);
    wallRing('open-top-band',r+2.5,4,h-4,'trim',5);
    tor('middle-reinforcement',r+1,.8,0,h/2,0,'shadow');
    for(let i=0;i<8;i++){const a=i*Math.PI/4;ball('rim-stud-'+i,1.7,(r+1)*Math.sin(a),h-3,(r+1)*Math.cos(a),'bright');}
  }
  switch(spec.slug){
  case 'geometric-star-lightbox':sleeve('star');break;
  case 'forest-shadow-lantern':sleeve('forest');break;
  case 'minimal-arch-nightlight':{
    for(const [s,z] of [[-1,-42],[1,42]]){
      for(let i=0;i<15;i++){
        const a=Math.PI*i/14,x=42*Math.cos(a),y=76+42*Math.sin(a);
        if(i)rod('arched-tunnel-facade-'+s+'-'+i,[42*Math.cos(Math.PI*(i-1)/14),76+42*Math.sin(Math.PI*(i-1)/14),z],[x,y,z],5,'shell');
      }
      for(const x of [-42,42])box('arch-pier-'+s+'-'+x,9,77,8,x,38.5,z,'shell');
      box('arch-foot-tie-'+s,95,7,11,0,3,z,'trim');
    }
    for(let x of [-42,42])for(let y of [5,63])box('lateral-open-tunnel-rail-'+x+'-'+y,8,8,96,x,y,0,'dark');
    break;
  }
  case 'cloud-whale-totem':{
    cy('oval-display-socle',40,7,0,3.5,0,'dark');
    tapered('stone-cloud-support',15,11,56,0,35,0,'matte',20);
    ball('whale-main-body',24,0,79,0,'shell',[1.55,.75,.82]);
    ball('whale-forehead',20,-22,81,0,'bright',[1,.78,.8]);
    for(let s of [-1,1]){
      const fluke=ball('split-tail-fin-'+s,12,37,96,s*12,'trim',[.5,.22,.9]);fluke.rotation.z=s*15*RAD;
      ball('pectoral-fin-'+s,11,9,69,s*18,'shell',[1.1,.26,.6]);
      ball('bright-eye-'+s,2.1,-27,86,s*15,'dark');
      rod('crest-line-'+s,[-6,98,s*4],[-6,112,s*5],1.5,'trim');
    }
    rod('whale-spout',[-4,102,0],[-4,121,0],2.6,'bright');ball('spout-crown',3.8,-4,121,0,'bright');
    for(let i=0;i<4;i++)ball('foam-relief-'+i,3,Math.sin(i)*12,22,Math.cos(i)*10,'bright');
    break;
  }
  case 'sleepy-owl-guardian':{
    cy('owl-plinth',41,7,0,3.5,0,'dark');
    ball('owl-chest',35,0,47,0,'shell',[.73,1.12,.68]);
    ball('owl-head',33,0,89,0,'bright',[1,.87,.89]);
    for(let s of [-1,1]){
      tapered('ear-tuft-'+s,10,1,30,s*23,113,0,'shell',20);
      const wing=ball('layered-wing-'+s,25,s*28,52,0,'matte',[.38,.83,.65]);wing.rotation.z=s*12*RAD;
      ball('closed-eye-'+s,8,s*13,90,26,'dark',[1,.20,.5]);
      rod('sleeping-eyelid-'+s,[s*8,90,29],[s*19,88,29],1.3,'trim');
      ball('talon-'+s,7,s*19,11,15,'trim',[1,.65,.85]);
      for(let j=0;j<3;j++)ball('wing-feather-'+s+'-'+j,4,s*37,36+j*11,12,'shell',[.5,1.8,.7]);
    }
    tapered('owl-beak',7,0.8,10,0,76,30,'trim',3);
    break;
  }
  case 'alpine-cabin-miniature':{
    box('scenic-tile',136,5,93,0,2.5,0,'dark');
    box('timber-chalet-walls',84,49,56,0,29.5,0,'shell');
    for(let s of [-1,1]){
      const roof=box('gable-roof-half-'+s,56,4,65,s*24,64,0,'matte');roof.rotation.z=s*27*RAD;
      box('framed-window-'+s,16,16,3,s*30,36,29,'bright');
      for(let j=0;j<3;j++)box('window-slatted-shutter-'+s+'-'+j,14,1.3,1.8,s*30,31+j*5,32,'shadow');
      tapered('pine-tree-'+s,8,0,29,s*55,20,-30,'matte',7);
    }
    box('front-lodge-door',17,32,3,0,22,30,'dark');
    box('roof-ridge-capping',5,4,66,0,77,0,'trim');
    box('cabin-brick-chimney',10,20,10,28,63,12,'dark');
    for(let i=0;i<7;i++)box('foreground-board-'+i,5,1.5,10,-54+i*18,6,35,'trim');
    break;
  }
  case 'retro-station-platform':{
    box('station-ground-tile',142,5,99,0,2.5,0,'dark');
    box('raised-boarding-platform',134,10,37,0,10,-18,'matte');
    box('overhead-canopy',135,8,57,0,83,-17,'shell');
    for(let s of [-1,1]){
      box('canopy-tall-pillar-'+s,5,70,5,s*57,45,-19,'dark');
      rod('roof-knee-brace-'+s,[s*57,66,-19],[s*36,79,-19],2.5,'trim');
      box('vertical-ticket-sign-'+s,14,7,1.7,s*45,71,-46,'bright');
    }
    box('station-wooden-bench',56,5,16,0,25,-15,'trim');
    for(let x of [-20,20])box('bench-support-'+x,5,15,8,x,16,-15,'dark');
    for(let x=-56;x<=56;x+=14)box('railway-sleeper-'+x,9,3,26,x,7,34,'trim');
    box('tactile-platform-edge',128,1.5,2,0,16,-39,'bright');
    break;
  }
  case 'craft-spool-organizer':{
    box('spool-organizer-foot',139,6,96,0,3,0,'dark');
    for(let i=0;i<8;i++){
      const x=-51+(i%4)*34,z=i<4?-23:23;
      tapered('spool-tapered-peg-'+i,5.4,3.6,75,x,44,z,'shell',18);
      cy('spool-base-collar-'+i,8.6,3.7,x,8,z,'trim');
      cy('peg-cap-'+i,3.8,3,x,82.5,z,'bright',20);
    }
    box('rear-label-wall',127,18,6,0,15,43,'matte');
    for(let j=0;j<5;j++)box('classification-tick-'+j,2.2,6,1.4,-44+j*22,17,47,'bright');
    break;
  }
  case 'watch-display-cradle':{
    box('stable-watch-footprint',113,7,103,0,3.5,0,'dark');
    for(let x of [-34,34]){
      rod('saddle-strut-'+x,[x,9,-12],[x,71,11],6,'shell');
      box('strap-rest-'+x,14,6,29,x,9,-19,'trim');
      cy('endcap-'+x,6,6,x,73,12,'bright');
      for(let j=0;j<3;j++)box('contact-pad-'+x+'-'+j,11,1.4,6,x,17+j*12,26,'shadow');
    }
    const cushion=cy('watch-strap-cushion',14,73,0,71,12,'matte');cushion.rotation.z=Math.PI/2;
    ball('crown-relief',5,0,85,12,'bright',[1.4,.8,.7]);
    box('trailing-strap-hanger',78,4,8,0,13,-33,'shell');
    break;
  }
  case 'miniature-tiered-riser':{
    box('wide-display-foundation',119,6,109,0,3,0,'dark');
    for(let i=0;i<3;i++){
      const width=109-i*15,depth=98-i*20,z=21+i*30;
      box('riser-stage-'+i,width,5,depth,0,z,-i*9,'shell');
      for(let s of [-1,1]){
        box('stage-support-'+i+'-'+s,6,z-3,8,s*(width/2-9),z/2+2,-i*9,'matte');
        box('stage-edge-inlay-'+i+'-'+s,2,3,depth-9,s*(width/2-4),z+3,-i*9,'trim');
      }
    }
    box('raised-back-nameband',79,23,7,0,85,11,'trim');
    for(let i=0;i<6;i++)box('nameband-flute-'+i,2,8,2,-29+i*12,84,16,'dark');
    break;
  }
  case 'universal-controller-cradle':{
    box('controller-footprint',135,7,100,0,3.5,0,'dark');
    for(let s of [-1,1]){
      rod('controller-raked-rail-'+s,[s*45,10,-26],[s*45,67,20],6.7,'shell');
      rod('controller-front-stop-'+s,[s*45,8,-27],[s*45,30,-34],6.4,'shell');
      ball('nonslip-top-'+s,6,s*45,68,20,'matte');
      box('protective-rest-'+s,15,4,18,s*45,13,-30,'trim');
      for(let j=0;j<3;j++)box('ribbed-grip-'+s+'-'+j,11,1.5,4,s*45,19+j*6,-34,'bright');
    }
    box('cross-member',100,14,7,0,14,30,'matte');
    break;
  }
  case 'tabletop-dice-tray':{
    box('dice-catching-floor',141,5,106,0,2.5,0,'dark');
    for(let z of [-51,51])box('rounded-long-tray-wall-'+z,141,22,4,0,16,z,'shell');
    for(let x of [-69,69])box('rounded-short-tray-wall-'+x,4,22,98,x,16,0,'shell');
    const tx=51,tz=32;
    wallRing('corner-dice-tower',16,55,27,'shell',4);
    root.children.at(-1).position.set(tx,27,tz);
    for(let i=0;i<3;i++){
      const flap=box('drop-baffle-'+i,26,3,8,tx,36+i*16,tz,'matte');flap.rotation.y=(i%2?23:-23)*RAD;
    }
    tor('dice-tower-crown',16,2,tx,81,tz,'trim');
    for(let i=0;i<9;i++)box('felt-tray-trace-'+i,3,1,3,-48+i*12,5,-21,'bright');
    break;
  }
  case 'boardgame-token-sorter':{
    box('token-sorter-base',144,5,109,0,2.5,0,'dark');
    for(let z of [-52,52])box('outer-side-wall-'+z,144,35,5,0,23,z,'shell');
    for(let x of [-70,70])box('end-wall-'+x,4,35,104,x,23,0,'shell');
    for(let x of [-23.5,23.5])box('three-column-divider-'+x,3,33,103,x,22,0,'matte');
    box('two-row-divider',139,33,3,0,22,0,'matte');
    for(let i=0;i<6;i++)box('compartment-mat-'+i,35,.8,42,-47+(i%3)*47,5,-25+Math.floor(i/3)*50,'shadow');
    for(let z of [-37,37])rod('integral-handle-upright-'+z,[0,36,z],[0,79,z],4.4,'trim');
    rod('integral-carry-bridge',[0,79,-37],[0,79,37],5,'trim');
    ball('handle-crown',6.5,0,80,0,'bright');
    break;
  }
  case 'arc-earring-display':{
    box('stable-earring-plinth',112,6,82,0,3,0,'dark');
    let old=null;
    for(let i=0;i<=20;i++){
      const x=-44+i*4.4,y=14+81*(1-(x/44)**2),now=[x,y,0];
      if(old)rod('earring-arch-segment-'+i,old,now,4.2,'shell');old=now;
    }
    for(let i=0;i<10;i++){
      const x=-35+i*70/9,y=14+81*(1-(x/44)**2);
      const loop=tor('hook-guide-'+i,2.6,.55,x,y-3,0,'trim');loop.rotation.x=0;
    }
    for(let x of [-44,44])rod('weight-bearing-pier-'+x,[x,4,0],[x,20,0],4,'matte');
    for(let i=0;i<6;i++)ball('anti-slip-stud-'+i,2,-50+i*20,7,31,'bright');
    break;
  }
  case 'ring-cone-tower':{
    cy('round-elliptical-foot',42,7,0,3.5,0,'dark');
    for(let i=0;i<5;i++){
      const a=(i-1)*Math.PI/2,x=i?35*Math.cos(a):0,z=i?24*Math.sin(a):0,hh=i?55+i*5:96;
      tapered('graduated-ring-spire-'+i,i?9:12,2.3,hh,x,7+hh/2,z,i%2?'shell':'matte',40);
      cy('spindle-neck-base-'+i,12,3,x,8,z,'trim');
      for(let j=0;j<2;j++)tor('ring-size-guide-'+i+'-'+j,i?6:9,.85,x,16+j*6,z,'bright');
    }
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;ball('perimeter-bead-'+i,2.4,32*Math.cos(a),7,29*Math.sin(a),'bright');
    }
    break;
  }
  case 'geo-cactus-planter':{
    add('open-faceted-outer-wall',new THREE.CylinderGeometry(53,43,99,12,1,true),0,50.5,0,'shell');
    add('visible-inner-pot-wall',new THREE.CylinderGeometry(49,39,99,12,1,true),0,50.5,0,'shadow');
    wallRing('visible-drainage-floor',43,3.5,0,'dark',4.2);
    wallRing('reinforced-faceted-lip',53.5,4,100,'trim',5);
    for(let i=0;i<12;i++){
      const a=i*Math.PI/6;rod('facet-ridge-'+i,[45*Math.cos(a),5,45*Math.sin(a)],[53*Math.cos(a),98,53*Math.sin(a)],1.0,'matte');
    }
    for(let i=0;i<3;i++)tor('drain-indicator-'+i,3,.6,(i-1)*22,4,0,'dark');
    break;
  }
  case 'custom-desk-nameplate':{
    box('personalized-plaque',135,7,67,0,3.5,0,'shell');
    for(let s of [-1,1]){
      tor('mount-recess-'+s,2.5,.7,s*57,7,0,'dark');
      box('perimeter-stripe-'+s,2,1,56,s*62,7,0,'trim');
    }
    const glyphs={
      C:[[[-5,4],[-3,6],[3,6],[5,4]],[[-5,4],[-5,-4]],[[-5,-4],[-3,-6],[3,-6],[5,-4]]],
      U:[[[-5,6],[-5,-4],[-3,-6],[3,-6],[5,-4],[5,6]]],
      S:[[[5,4],[3,6],[-3,6],[-5,3],[-3,0],[3,0],[5,-3],[3,-6],[-3,-6],[-5,-4]]],
      T:[[[-5,6],[5,6]],[[0,6],[0,-6]]],
      O:[[[-3,6],[3,6],[5,3],[5,-3],[3,-6],[-3,-6],[-5,-3],[-5,3],[-3,6]]],
      M:[[[-5,-6],[-5,6],[0,0],[5,6],[5,-6]]]
    };
    for(const [i,letter] of [...'CUSTOM'].entries()){
      for(const [j,stroke] of glyphs[letter].entries()) for(let k=1;k<stroke.length;k++){
        const a=stroke[k-1],b=stroke[k],x=-40+i*16;
        rod('nameplate-letter-'+i+'-'+j+'-'+k,[x+a[0],8.4,a[1]],
            [x+b[0],8.4,b[1]],1.35,'bright');
      }
      box('label-underline-'+i,13,.7,1.5,-40+i*16,7.5,15,'dark');
    }
    box('lower-inlay-border',115,.8,1,0,7.2,-28,'trim');
    break;
  }
  case 'house-number-plaque':{
    box('faceted-number-plate',145,9,71,0,4.5,0,'shell');
    for(let z of [-30,30])box('parallel-metal-line-'+z,130,2,2,0,9,z,'trim');
    for(let s of [-1,1])tor('screw-seat-'+s,3.3,.7,s*63,9,0,'dark');
    box('digit-one-vertical',6,3,29,-29,10.5,0,'bright');
    tor('zero-outline',14,2.3,-1,11.0,0,'bright');
    for(let z of [-13,13]){tor('eight-loop-'+z,7.5,2.1,29,11,z,'bright');}
    for(let i=0;i<8;i++)ball('number-plate-rivet-'+i,1.4,-50+i*14,10,32,'dark');
    break;
  }
  case 'celestial-guild-medallion':{
    cy('dodecagon-token-disk',37.5,5,0,2.5,0,'dark',12);
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;
      rod('eightpoint-ray-'+i,[4*Math.cos(a),7,4*Math.sin(a)],[25*Math.cos(a),7,25*Math.sin(a)],2.4,'bright');
      ball('bead-inlaid-'+i,2.3,30*Math.cos(a),6,30*Math.sin(a),'trim');
    }
    cy('astral-center',10,2,0,7,0,'shell',8);
    tor('coin-edge-bezel',33.5,1.5,0,5,0,'trim');
    tor('threaded-strap-hole-visual',3.4,1.0,0,7,28,'dark');
    break;
  }
  case 'alchemist-costume-brooch':{
    cy('original-twelve-sided-crest',42,6,0,3,0,'dark',12);
    cy('sixfold-etched-seal',29,3.5,0,7.5,0,'shell',6);
    for(let i=0;i<6;i++){
      const a=i*Math.PI/3;rod('engraved-spoke-'+i,[9*Math.cos(a),9,9*Math.sin(a)],[29*Math.cos(a),9,29*Math.sin(a)],2.1,'trim');
      ball('alchemy-corner-stud-'+i,2.8,34*Math.cos(a),7.1,34*Math.sin(a),'bright');
    }
    box('flask-neck-relief',8,2.5,23,0,11,0,'bright');
    const flask=ball('flask-bowl-relief',8,0,11,-8,'bright',[1,.33,.85]);
    tor('lace-eyelet-recess',3.1,.8,0,8,33,'shadow');
    break;
  }
  default:throw new Error('Unregistered batch 02 refinement: '+spec.slug);
  }
  // Preserve the published model's canonical meter dimensions / local floor.
  const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3());
  if(![size.x,size.y,size.z].every(v=>Number.isFinite(v)&&v>0)) throw Error('Invalid preview envelope: '+spec.slug);
  root.scale.set(spec.dimensions_m[0]/size.x,spec.dimensions_m[1]/size.y,spec.dimensions_m[2]/size.z);
  root.position.set(-(bounds.min.x+bounds.max.x)*root.scale.x/2,-bounds.min.y*root.scale.y,
                    -(bounds.min.z+bounds.max.z)*root.scale.z/2);
  root.userData={cadSource:spec.cad_path,refinedBatch:'02',manufacturingStatus:'unverified',
    geometrySource:'visual_approximation_not_manufacturing_mesh'};
  return root;
}
