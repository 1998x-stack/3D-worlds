// SPDX-License-Identifier: MIT
// Batch 03: SKU-specific Three.js gallery previews for the final 20 overseas prototypes.
// Stylized visual assemblies only; dimensioned OpenSCAD is the manufacturing source.
import * as THREE from 'three';

export const REFINED_COMMERCE_BATCH03_SLUGS = Object.freeze([
  'lunar-fox-bust','garden-robot-companion','mountain-spirit-figurine',
  'harbor-cargo-diorama','desert-roadway-diorama','urban-street-corner',
  'collectible-display-plinth','eyewear-display-stand','retro-cartridge-rack',
  'bracelet-display-arch','pendant-sorting-tray','modular-jewelry-plinth',
  'bonsai-display-pot','desktop-herb-planter','wedding-place-card',
  'anniversary-message-plaque','monogram-desk-coaster','fantasy-crest-badge',
  'space-explorer-insignia','mythic-rune-emblem'
]);
const selected = new Set(REFINED_COMMERCE_BATCH03_SLUGS);
const RAD = Math.PI / 180;

export function buildRefinedCommerceBatch03(spec) {
  if (!selected.has(spec.slug)) return null;
  const root = new THREE.Group();
  root.name = spec.title + ' · detail batch 03';
  const materials = {
    shell: new THREE.MeshStandardMaterial({color:spec.accent,roughness:.48,metalness:.07}),
    trim: new THREE.MeshStandardMaterial({color:0xd8c6a6,roughness:.38,metalness:.28}),
    dark: new THREE.MeshStandardMaterial({color:0x344353,roughness:.67,metalness:.12}),
    light: new THREE.MeshStandardMaterial({color:0xf1e4c8,roughness:.56,metalness:.04}),
    green: new THREE.MeshStandardMaterial({color:0x72977d,roughness:.74,metalness:.02}),
    glass: new THREE.MeshStandardMaterial({color:0x88aeb0,roughness:.25,metalness:.12,transparent:true,opacity:.72}),
  };
  function mesh(name,geometry,x=0,y=0,z=0,tone='shell') {
    const o = new THREE.Mesh(geometry,materials[tone]);
    o.name=name;o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;root.add(o);return o;
  }
  const box=(n,w,h,d,x,y,z,t='shell')=>mesh(n,new THREE.BoxGeometry(w,h,d),x,y,z,t);
  const cylinder=(n,r,h,x,y,z,t='shell',s=36)=>mesh(n,new THREE.CylinderGeometry(r,r,h,s),x,y,z,t);
  const cone=(n,r,h,x,y,z,t='shell',s=32)=>mesh(n,new THREE.ConeGeometry(r,h,s),x,y,z,t);
  const sphere=(n,x,y,z,sx,sy,sz,t='shell')=>{
    const o=mesh(n,new THREE.SphereGeometry(1,24,16),x,y,z,t);o.scale.set(sx,sy,sz);return o;
  };
  const beam=(n,a,b,r=2.5,t='trim')=>{
    const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b),v=B.clone().sub(A);
    const o=mesh(n,new THREE.CylinderGeometry(r,r,v.length(),14),0,0,0,t);
    o.position.copy(A.add(B).multiplyScalar(.5));
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());return o;
  };
  const torus=(n,r,tube,x,y,z,t='trim')=>{
    const o=mesh(n,new THREE.TorusGeometry(r,tube,8,64),x,y,z,t);o.rotation.x=Math.PI/2;return o;
  };
  const base=(w,d,t=6,tone='dark')=>box('integral-footprint',w,t,d,0,t/2,0,tone);
  const post=(n,x,z0,z1,r=3,t='trim',y=0)=>cylinder(n,r,z1-z0,x,(z0+z1)/2,y,t);
  const star=(n,x,y,z,r=8,t='light')=>{
    const shape=new THREE.Shape();
    for(let i=0;i<10;i++){const a=(i*36-90)*RAD,rr=i%2?r*.42:r;
      const px=Math.cos(a)*rr,py=Math.sin(a)*rr;
      if(i===0)shape.moveTo(px,py);else shape.lineTo(px,py);}
    shape.closePath();
    const g=new THREE.ExtrudeGeometry(shape,{depth:2,bevelEnabled:false});
    return mesh(n,g,x,y,z,t);
  };
  switch(spec.slug) {
  case 'lunar-fox-bust': {
    base(90,78,6);
    sphere('fox-haunch',0,29,0,25,27,21);
    sphere('fox-chest',0,48,-2,23,24,18,'trim');
    sphere('fox-neck',0,62,-1,18,22,17);
    sphere('fox-face',0,79,-1,27,25,22);
    sphere('fox-muzzle',0,70,-20,14,11,11,'light');
    sphere('nose',0,70,-30,4,3,3,'dark');
    for(const s of [-1,1]){
      cone('pointed-ear-'+s,9,37,s*17,111,-1,'shell',28);
      sphere('inner-ear-'+s,s*17,105,-7,4,2,12,'trim');
      sphere('eye-'+s,s*12,81,-22,2.7,3,2,'dark');
      sphere('cheek-'+s,s*20,69,-15,7,6,7,'light');
      beam('tail-root-'+s,[s*16,28,13],[s*30,35,16],5,'trim');
    }
    for(let i=0;i<6;i++)sphere('forehead-star-'+i,-12+i*4,91,-22,1.2,1.2,1.2,'light');
    beam('tail-tip-a',[27,35,16],[23,43,12],4);
    beam('tail-tip-b',[23,43,12],[14,39,10],4);
    break;
  }
  case 'garden-robot-companion': {
    base(93,81,6);
    for(const s of [-1,1]){
      box('boot-'+s,19,15,19,s*28,13,0,'dark');
      post('lower-leg-'+s,s*28,18,38,5);
      box('upper-leg-'+s,13,19,14,s*28,45,0,'trim');
      beam('arm-'+s,[s*27,69,0],[s*43,52,0],5);
      sphere('wrist-'+s,s*43,51,0,6,6,6,'dark');
      box('garden-tool-grip-'+s,5,15,6,s*45,44,-4,'green');
    }
    box('robot-torso',52,46,38,0,63,0);
    box('chest-screen',34,24,3,0,65,-20,'dark');
    for(let i=0;i<4;i++)sphere('screen-indicator-'+i,-12+i*8,66,-22,2,2,1.5,'light');
    box('robot-head',62,31,47,0,103,0,'trim');
    box('face-panel',44,18,3,0,102,-24,'dark');
    for(const s of [-1,1])sphere('optic-'+s,s*12,103,-27,4,4,2,'light');
    post('antenna',0,119,136,2.2);
    sphere('antenna-cap',0,136,0,4,4,4,'light');
    for(let i=0;i<5;i++)box('vent-'+i,2,9,2,-16+i*8,81,-20,'dark');
    break;
  }
  case 'mountain-spirit-figurine': {
    base(96,84,6);
    cone('stone-mantle',37,67,0,42,0,'shell',8);
    sphere('spirit-face',0,86,-1,25,24,20,'trim');
    cone('central-ridge',17,33,0,110,0,'light',7);
    for(const s of [-1,1]){
      cone('crystal-horn-'+s,8,45,s*24,118,0,'dark',6);
      sphere('glowing-eye-'+s,s*11,87,-19,3,3,2,'light');
      beam('rock-shoulder-'+s,[s*20,43,0],[s*36,58,3],5);
      sphere('hand-stone-'+s,s*35,58,-7,7,10,7,'trim');
      for(let i=0;i<3;i++)beam('finger-'+s+'-'+i,[s*34,52,-10+i*4],[s*39,45,-10+i*4],1.8,'light');
    }
    sphere('mouth-shadow',0,77,-21,6,2,2,'dark');
    for(let i=0;i<8;i++)cone('crystal-shard-'+i,3,13,-28+i*8,23+(i%3)*4,22,'green',5);
    break;
  }
  case 'harbor-cargo-diorama': {
    base(124,81,6);
    box('quay-edge',116,5,8,0,8,35,'trim');
    for(let i=0;i<3;i++){
      const x=-39+i*39;
      box('cargo-container-'+i,34,24,42,x,18,-10,i%2?'green':'shell');
      for(let j=0;j<6;j++)box('container-rib-'+i+'-'+j,1.4,21,43,x-14+j*5.2,18,-10,'trim');
      box('container-door-'+i,22,19,2,x,18,-32,'dark');
      for(let j=0;j<3;j++)box('door-seam-'+i+'-'+j,1,17,1,x-6+j*6,18,-33,'trim');
    }
    for(const s of [-1,1]){
      post('gantry-leg-'+s,s*49,6,60,3,'dark',27);
      beam('gantry-brace-'+s,[s*49,54,27],[s*42,64,27],2.5);
    }
    box('gantry-crossbeam',100,7,7,0,60,27,'trim');
    post('crane-hoist',0,31,56,2,'dark',27);
    box('cargo-hook',8,5,5,0,29,27,'light');
    for(let i=0;i<4;i++)cylinder('bollard-'+i,3,9,-53+i*35,10,33,'trim',16);
    break;
  }
  case 'desert-roadway-diorama': {
    base(127,84,6,'sand');
    box('asphalt-road',117,3,25,0,8,-2,'dark');
    box('road-edge-left',117,2,2,0,10,-15,'trim');
    box('road-edge-right',117,2,2,0,10,11,'trim');
    for(let i=0;i<9;i++)box('center-dash-'+i,7,1.5,1.6,-52+i*13,10,-2,'light');
    for(const s of [-1,1]){
      sphere('dune-'+s,s*37,12,22,22,13,12,'sand');
      cylinder('cactus-trunk-'+s,4,26,s*36,25,21,'green',20);
      beam('cactus-arm-'+s,[s*36,26,21],[s*27,34,21],3,'green');
      beam('cactus-arm-tip-'+s,[s*27,34,21],[s*27,42,21],3,'green');
    }
    post('mile-marker',-49,6,65,2.8,'trim',32);
    box('mile-sign',24,9,3,-37,59,32,'light');
    for(let i=0;i<4;i++)box('sign-letter-bar-'+i,2,1,1,-43+i*4,59,30,'dark');
    for(let i=0;i<5;i++)sphere('roadside-stone-'+i,-15+i*7,10,31,2,2,2,'trim');
    break;
  }
  case 'urban-street-corner': {
    base(133,90,6);
    box('corner-building',59,47,47,-34,29,16,'shell');
    box('roof-cap',63,4,51,-34,54,16,'dark');
    for(let x of [-55,-34,-13]){
      box('shop-window-'+x,12,19,2,x,27,-8,'glass');
      box('window-sill-'+x,15,2,4,x,17,-8,'trim');
      for(let y of [-3,3])box('window-mullion-'+x+'-'+y,1.2,17,2,x+y,27,-9,'trim');
    }
    box('store-awning',67,7,16,-34,43,-11,'trim');
    for(let i=0;i<7;i++)box('awning-stripe-'+i,1.5,7,16,-64+i*10,43,-11,'light');
    post('street-lamp',48,6,77,2.8,'dark',18);
    beam('lamp-neck',[48,76,18],[38,79,18],2.5,'dark');
    sphere('lamp-globe',37,79,18,5,5,5,'light');
    box('street-bench-seat',32,3,10,20,10,-30,'trim');
    for(let s of [-1,1])post('bench-leg-'+s,20+s*12,6,10,2,'dark',-30);
    for(let i=0;i<5;i++)box('crosswalk-mark-'+i,8,1.5,3,-5+i*12,7,-40,'light');
    box('street-name-sign',20,6,2,48,56,-5,'green');
    break;
  }
  case 'collectible-display-plinth': {
    cylinder('weighted-foot',50,7,0,3.5,0,'dark',64);
    cylinder('tapered-collar',39,8,0,10.5,0,'trim',64);
    cylinder('main-pedestal',29,42,0,35,0,'shell',64);
    cylinder('flare-transition',39,7,0,59.5,0,'trim',64);
    cylinder('display-deck',43,7,0,66.5,0,'shell',64);
    cylinder('upper-neck',22,18,0,79,0,'dark',56);
    cylinder('top-display-pad',34,6,0,82,0,'trim',64);
    for(let i=0;i<12;i++){
      const a=i*Math.PI/6;
      box('column-flute-'+i,2,30,3,Math.cos(a)*30,34,Math.sin(a)*30,'light');
    }
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;
      cylinder('deck-index-'+i,2,8,Math.cos(a)*39,73,Math.sin(a)*39,'dark',16);
    }
    break;
  }
  case 'eyewear-display-stand': {
    base(114,104,7);
    for(const s of [-1,1]){
      beam('outer-upright-'+s,[s*42,7,0],[s*30,56,0],5,'shell');
      beam('inner-bridge-'+s,[s*30,56,0],[s*10,79,0],4,'trim');
      beam('temple-rest-'+s,[s*30,56,0],[s*51,68,23],3,'dark');
      sphere('temple-tip-'+s,s*51,68,23,3,3,3,'light');
      box('foot-pad-'+s,17,5,20,s*40,8,0,'dark');
      for(let i=0;i<3;i)sphere('nose-grip-'+s,s*28,58+i*3,-5,2.5,2.5,2.5,'light');
    }
    beam('bridge-left',[-10,79,0],[0,87,0],4);
    beam('bridge-right',[0,87,0],[10,79,0],4);
    beam('top-crest',[0,87,0],[0,96,0],3.5,'trim');
    sphere('bridge-finial',0,98,0,4,4,4,'light');
    for(let i=0;i<6;i++)cylinder('base-rivet-'+i,2,3,-40+i*16,8,-24,'trim',16);
    break;
  }
  case 'retro-cartridge-rack': {
    base(130,95,6);
    box('rear-retaining-wall',128,64,7,0,38,43,'dark');
    for(let i=0;i<6;i++){
      const x=-52+i*20.8;
      box('slot-divider-'+i,3,60,83,x,36,0,'trim');
      box('cartridge-shell-'+i,15,25,8,x+8,22,24,i%2?'green':'shell');
      box('cartridge-label-'+i,10,10,2,x+8,24,29,'light');
      box('slot-front-lip-'+i,15,5,9,x+8,9,-37,'dark');
      for(let j=0;j<3;j++)box('cartridge-contact-'+i+'-'+j,2,2,2,x+4+j*4,11,-31,'trim');
    }
    box('top-carry-rail',114,8,6,0,74,43,'shell');
    for(let i=0;i<6;i++)sphere('rail-fastener-'+i,-48+i*19.2,74,39,2,2,2,'light');
    break;
  }
  case 'bracelet-display-arch': {
    base(110,80,6);
    const points=[];
    for(let i=0;i<=16;i++){
      const x=-42+i*84/16;
      const y=17+76*(1-(x/42)**2);
      points.push([x,y,0]);
    }
    for(let i=0;i<16;i++)beam('continuous-display-arch-'+i,points[i],points[i+1],4.2,'shell');
    for(const s of [-1,1])beam('arch-foot-'+s,[s*42,5.5,0],[s*42,17,0],5,'dark');
    for(let i=0;i<10;i++){
      const x=-36+i*8,z=17+76*(1-(x/42)**2);
      beam('bracelet-retainer-'+i,[x,z,0],[x,z-9,-7],2.2,'trim');
      sphere('retainer-tip-'+i,x,z-9,-7,2.5,2.5,2.5,'light');
    }
    cylinder('arch-crown',3,8,0,103,0,'trim',24);
    break;
  }
  case 'pendant-sorting-tray': {
    base(113,83,8);
    for(const [x,z] of [[-38,-25],[0,-25],[38,-25],[-38,25],[0,25],[38,25]]){
      box('compartment-floor-'+x+'-'+z,31,2,30,x,9,z,'dark');
      for(const s of [-1,1])box('compartment-side-'+x+'-'+z+'-'+s,2,12,30,x+s*15,14,z,'trim');
      box('compartment-end-'+x+'-'+z,31,12,2,x,14,z+14,'trim');
    }
    box('rear-hook-rail',104,6,6,0,18,35,'dark');
    for(let i=0;i<6;i++){
      const x=-43+i*17.2;
      post('pendant-hook-'+i,x,19,100,2.6,'trim',36);
      sphere('hook-cap-'+i,x,101,36,3,3,3,'light');
      beam('hook-return-'+i,[x,83,36],[x,88,29],2,'trim');
    }
    box('upper-display-header',96,5,4,0,104,36,'shell');
    break;
  }
  case 'modular-jewelry-plinth': {
    base(116,86,6);
    box('left-low-stage',38,23,52,-35,17,0,'dark');
    box('center-mid-stage',42,42,60,0,26,0,'shell');
    box('right-high-stage',36,64,48,36,37,0,'trim');
    for(const [x,y] of [[-35,30],[0,49],[36,72]]){
      cylinder('jewel-pin-'+x,5,12,x,y,0,'dark',28);
      cone('ring-cone-'+x,4,17,x,y+14,0,'light',24);
      sphere('finial-'+x,x,y+24,0,2.5,2.5,2.5,'light');
    }
    for(let s of [-1,1]){
      beam('side-necklace-post-'+s,[s*51,7,0],[s*51,35,0],3,'shell');
      sphere('side-finial-'+s,s*51,37,0,3,3,3,'trim');
    }
    box('rear-module-rail',100,8,5,0,11,39,'dark');
    break;
  }
  case 'bonsai-display-pot': {
    cylinder('tapered-planter-body',55,103,0,51.5,0,'shell',80);
    cylinder('inner-soil-well',48,96,0,59,0,'dark',80);
    torus('rolled-pot-rim',52,3,0,103,0,'trim');
    cylinder('drainage-floor',48,5,0,4,0,'shell',80);
    for(let i=0;i<12;i++){
      const a=i*Math.PI/6;
      beam('root-flute-'+i,[Math.cos(a)*49,8,Math.sin(a)*49],[Math.cos(a)*55,89,Math.sin(a)*55],2,'trim');
    }
    for(let i=0;i<4;i++){
      const a=i*Math.PI/2;
      cylinder('drain-foot-'+i,4,4,Math.cos(a)*42,2,Math.sin(a)*42,'dark',20);
    }
    break;
  }
  case 'desktop-herb-planter': {
    base(111,111,6,'dark');
    for(const s of [-1,1]){
      box('long-planter-wall-'+s,111,70,5,0,41,s*53,'shell');
      box('side-planter-wall-'+s,5,70,101,s*53,41,0,'shell');
    }
    for(let i=0;i<3;i++)box('soil-cell-divider-'+i,3,67,101,-36+i*36,40,0,'trim');
    box('rear-trellis-header',88,5,4,0,111,50,'dark');
    for(let i=0;i<4;i++){
      const x=-42+i*28;
      post('trellis-upright-'+i,x,74,114,2.6,'green',50);
      sphere('trellis-cap-'+i,x,114,50,2.8,2.8,2.8,'light');
    }
    for(let y of [88,102])box('trellis-crossbar-'+y,88,3,3,0,y,50,'green');
    for(let i=0;i<6;i++)cylinder('drain-port-'+i,2,2,-45+i*18,4,-45,'dark',16);
    break;
  }
  case 'wedding-place-card': {
    base(132,61,4);
    box('angled-card-back',116,6,6,0,6,24,'shell');
    box('front-card-stop',116,4,5,0,4.5,22,'trim');
    box('table-label-plaque',72,2,16,0,6,-19,'dark');
    for(let i=0;i<5;i++)box('table-label-glyph-'+i,2,1,8,-15+i*7,7.5,-19,'light');
    for(let s of [-1,1]){
      beam('side-wedge-support-'+s,[s*52,4,10],[s*52,10,24],3,'trim');
      cylinder('base-fastener-'+s,2,2,s*56,3,-26,'light',16);
    }
    box('rear-slot-lip',112,3,3,0,5,29,'light');
    break;
  }
  case 'anniversary-message-plaque': {
    base(142,65,8);
    box('inset-message-field',118,2,43,0,9,0,'dark');
    for(const s of [-1,1]){
      box('frame-vertical-'+s,4,4,56,s*68,10,0,'trim');
      for(let y of [-1,1])sphere('corner-rosette-'+s+'-'+y,s*64,12,y*26,3,3,3,'light');
    }
    box('frame-top',138,4,4,0,10,29,'trim');
    box('frame-bottom',138,4,4,0,10,-29,'trim');
    for(let i=0;i<8;i++)box('message-letter-bar-'+i,-0+2,1,2,-28+i*8,11,0,'light');
    for(let s of [-1,1])cylinder('mount-hole-rim-'+s,4,2,s*62,9,0,'dark',24);
    break;
  }
  case 'monogram-desk-coaster': {
    base(147,67,9);
    for(const s of [-1,1]){
      cylinder('cup-well-ring-'+s,26,4,s*38,11,0,'trim',64);
      cylinder('cup-well-inset-'+s,20,1,s*38,9.5,0,'dark',64);
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4;
        sphere('rim-marker-'+s+'-'+i,s*38+23*Math.cos(a),12,23*Math.sin(a),1.4,1.4,1.4,'light');
      }
    }
    cylinder('monogram-medallion',13,4,0,11,0,'shell',48);
    for(let i=0;i<5;i++)box('monogram-stroke-'+i,3,1.4,15,-6+i*3,13,0,'light');
    break;
  }
  case 'fantasy-crest-badge': {
    // Layered shield plate with a broad, printable heraldic relief.
    const shield=new THREE.Shape();
    shield.moveTo(-38,35);shield.lineTo(38,35);shield.lineTo(34,-8);
    shield.lineTo(0,-39);shield.lineTo(-34,-8);shield.closePath();
    const g=new THREE.ExtrudeGeometry(shield,{depth:6,bevelEnabled:false});
    mesh('shield-base',g,0,0,0,'shell');
    box('upper-crest-band',66,2,4,0,27,6,'trim');
    star('central-heraldic-star',0,0,6,18,'light');
    for(let s of [-1,1]){
      cylinder('crest-rivet-'+s,3,4,s*25,23,6,'dark',20);
      beam('crest-laurel-'+s,[s*22,-8,7],[s*15,12,7],2.2,'green');
      for(let i=0;i<4;i++)sphere('laurel-leaf-'+s+'-'+i,s*(20-i*3),-5+i*5,7,3,2,1.5,'green');
    }
    cylinder('lanyard-eyelet',4,8,0,30,3,'dark',28);
    break;
  }
  case 'space-explorer-insignia': {
    cylinder('insignia-disc',40.5,6,0,3,0,'shell',72);
    torus('outer-orbit',34,2,0,7,0,'trim');
    torus('inner-orbit',23,1.3,0,7,0,'light');
    cylinder('rocket-body',5,4,0,9,0,'light',24);
    cone('rocket-nose',5,10,0,15,0,'trim',24);
    for(let s of [-1,1]){
      box('rocket-fin-'+s,4,6,3,s*5,8,0,'dark');
      beam('orbit-trajectory-'+s,[s*13,8,0],[s*28,8,s*5],1.7,'trim');
    }
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;
      star('navigation-star-'+i,29*Math.cos(a),7,29*Math.sin(a),3,'light');
    }
    cylinder('lanyard-aperture-rim',4,3,0,7,32,'dark',24);
    break;
  }
  case 'mythic-rune-emblem': {
    cylinder('octagonal-emblem-core',43.5,7,0,3.5,0,'shell',8);
    torus('outer-rune-border',38,2.5,0,7,0,'trim');
    torus('inner-rune-ring',25,1.8,0,8,0,'light');
    box('central-rune-stem',5,6,24,0,10,0,'light');
    beam('central-rune-arm-left',[-13,10,0],[0,18,0],2.5,'trim');
    beam('central-rune-arm-right',[0,18,0],[13,10,0],2.5,'trim');
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;
      box('outer-rune-stroke-'+i,3,4,10,32*Math.cos(a),10,32*Math.sin(a),'light');
      sphere('rune-terminal-'+i,32*Math.cos(a),12,32*Math.sin(a),2.5,2.5,2.5,'trim');
    }
    sphere('rune-heart',0,14,0,4,4,4,'dark');
    break;
  }
  default: throw new Error('Missing batch-03 preview for '+spec.slug);
  }
  const bounds=new THREE.Box3().setFromObject(root);
  const size=bounds.getSize(new THREE.Vector3());
  if(size.x<=0||size.y<=0||size.z<=0) throw new Error('Degenerate batch-03 preview '+spec.slug);
  const [w,h,d]=spec.dimensions_m;
  root.scale.set(w/size.x,h/size.y,d/size.z);
  root.position.set(-.5*(bounds.min.x+bounds.max.x)*root.scale.x,
    -bounds.min.y*root.scale.y,-.5*(bounds.min.z+bounds.max.z)*root.scale.z);
  root.userData={cadSource:spec.cad_path,refinedBatch:'03',manufacturingStatus:'unverified'};
  return root;
}
