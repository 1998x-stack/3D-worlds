// SPDX-License-Identifier: MIT
// Second-pass, SKU-specific surface/structure detailing for 20 overseas products.
// Visualization only; printable CSG lives in printables/lib/refined_batch03_v2_details.scad.
import * as THREE from 'three';

const MAT = Object.freeze({
  enamel:0xf0dbc0, slate:0x415564, brass:0xb59661,
  ceramic:0xd9b6a2, mint:0x7ea994, jade:0x497f73,
  rubber:0x2e373b, sandstone:0xcaa77e, pearl:0xf5e7d3,
});
export const BATCH03_SECOND_PASS_SLUGS = Object.freeze([
  'lunar-fox-bust','garden-robot-companion','mountain-spirit-figurine',
  'harbor-cargo-diorama','desert-roadway-diorama','urban-street-corner',
  'collectible-display-plinth','eyewear-display-stand','retro-cartridge-rack',
  'bracelet-display-arch','pendant-sorting-tray','modular-jewelry-plinth',
  'bonsai-display-pot','desktop-herb-planter','wedding-place-card',
  'anniversary-message-plaque','monogram-desk-coaster','fantasy-crest-badge',
  'space-explorer-insignia','mythic-rune-emblem',
]);
const selection=new Set(BATCH03_SECOND_PASS_SLUGS);

export function addBatch03SecondPassDetails(root,spec){
  if(!selection.has(spec.slug))return 0;
  if(!(root instanceof THREE.Group))throw new TypeError('Expected a Three.js group');
  let count=0;
  const materials=Object.fromEntries(Object.entries(MAT).map(([key,color])=>[
    key,new THREE.MeshStandardMaterial({color,metalness:key==='brass'?.65:.07,
      roughness:key==='rubber'?.86:key==='enamel'?.33:.52})]));
  function add(name,geo,x,y,z,tone='enamel'){
    const node=new THREE.Mesh(geo,materials[tone]);node.name='v2-'+name;
    node.position.set(x,y,z);node.castShadow=true;node.receiveShadow=true;
    root.add(node);count++;return node;
  }
  const box=(n,w,h,d,x,y,z,m='enamel')=>add(n,new THREE.BoxGeometry(w,h,d),x,y,z,m);
  const ball=(n,r,x,y,z,m='enamel')=>add(n,new THREE.SphereGeometry(r,14,10),x,y,z,m);
  const cyl=(n,r,h,x,y,z,m='brass')=>add(n,new THREE.CylinderGeometry(r,r,h,24),x,y,z,m);
  const ring=(n,major,minor,x,y,z,m='brass')=>{
    const o=add(n,new THREE.TorusGeometry(major,minor,8,48),x,y,z,m);o.rotation.x=Math.PI/2;return o;
  };
  const rod=(n,a,b,r=1.4,m='enamel')=>{
    const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b),dv=B.clone().sub(A);
    const o=add(n,new THREE.CylinderGeometry(r,r,dv.length(),12),0,0,0,m);
    o.position.copy(A.add(B).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dv.normalize());return o;
  };
  switch(spec.slug){
  case 'lunar-fox-bust':
    for(const s of [-1,1]){
      rod('fox-ear-inlay-'+s,[s*17,105,-5],[s*17,125,-5],1.5,'pearl');
      rod('fox-cheek-pinch-'+s,[s*9,81,-19],[s*21,78,-14],1.5,'brass');
      ball('fox-whisker-dot-'+s,2.3,s*14,70,-21,'brass');
    }
    cyl('fox-collar-crest',6,4,0,47,-18,'brass');
    ball('fox-collar-stone',3.2,0,47,-21,'jade');
    break;
  case 'garden-robot-companion':
    for(const s of [-1,1]){
      cyl('optic-glass-'+s,5,2,s*13,102,-28,'mint').rotation.x=Math.PI/2;
      ball('boot-pivot-'+s,3,s*29,20,-13,'brass');
      rod('chest-piping-'+s,[s*14,55,-22],[s*14,73,-22],1.2,'brass');
    }
    for(let i=0;i<5;i++)box('robot-eq-'+i,3,6,2,-14+i*7,64,-23,'jade');
    ring('antenna-collar',4,1,0,111,0,'brass');
    break;
  case 'mountain-spirit-figurine':
    for(const s of [-1,1]){
      rod('eyebrow-crystal-'+s,[s*8,92,-16],[s*18,98,-12],2,'pearl');
      rod('mantle-vein-'+s,[s*16,39,-20],[s*24,47,-15],2.2,'slate');
      ball('rock-cheek-gem-'+s,3.5,s*15,66,-21,'jade');
    }
    for(let i=-2;i<=2;i++)rod('stone-chisel-'+i,[i*6,32,-20],[i*7,39,-19],1.6,'brass');
    break;
  case 'harbor-cargo-diorama':
    for(let i=0;i<3;i++){
      const x=-42+i*42;
      for(let j=-2;j<=2;j++)box('container-bead-'+i+'-'+j,1.4,19,2,x+j*6,18,-35,'brass');
      box('latching-handle-'+i,6,7,2,x+11,22,-36,'slate');
    }
    ring('crane-hook-collar',5,1,0,27,26,'brass');
    break;
  case 'desert-roadway-diorama':
    for(let i=-4;i<=4;i++){
      box('road-rumble-a-'+i,7,1.5,1.4,i*13,10,11,'pearl');
      box('road-rumble-b-'+i,7,1.5,1.4,i*13,10,-15,'pearl');
    }
    for(const s of [-1,1])ball('cactus-crown-'+s,3.2,s*39,37,20,'jade');
    break;
  case 'urban-street-corner':
    for(const x of [-58,-36,-14]){
      box('shop-lintel-'+x,13,2,2.5,x,35,-11,'brass');
      box('shop-sill-'+x,13,2,2.5,x,15,-11,'brass');
    }
    for(let i=0;i<6;i++)box('paving-joint-'+i,1.6,1.4,9,-54+i*18,7,-35,'slate');
    break;
  case 'collectible-display-plinth':
    for(const y of [14,45,59])ring('machined-band-'+y,y===59?39:29,1.1,0,y,0,'brass');
    for(let i=0;i<12;i++){
      const a=i*Math.PI/6;box('fluted-crest-'+i,2.5,7,4,27*Math.sin(a),35,27*Math.cos(a),'slate');
    }
    break;
  case 'eyewear-display-stand':
    for(const s of [-1,1]){
      rod('nose-bridge-'+s,[s*17,78,-2],[s*8,90,-3],3.2,'rubber');
      rod('temple-protector-'+s,[s*31,55,0],[s*45,63,15],2.6,'rubber');
      box('heel-grip-'+s,13,2,15,s*40,7,-2,'rubber');
    }
    for(let i=-2;i<=2;i++)box('base-grip-'+i,6,1.5,5,i*13,8,-24,'slate');
    break;
  case 'retro-cartridge-rack':
    for(let i=0;i<6;i++){
      const x=-51+i*20.4;
      box('cartridge-label-'+i,11,4,2,x-7,63,43,'pearl');
      box('cartridge-stop-'+i,12,3,5,x-7,8,-42,'rubber');
    }
    box('top-moulding',112,2.3,4,0,72,46,'brass');
    break;
  case 'bracelet-display-arch':
    for(let i=0;i<12;i++){
      const x=-35+i*70/11,y=17+(107-24)*(1-(x/42)**2);
      ring('curve-clasp-'+i,3.6,.8,x,y-3,0,'brass');
    }
    for(const s of [-1,1])ring('heel-ferrule-'+s,7,1,s*42,15,0,'slate');
    break;
  case 'pendant-sorting-tray':
    for(const x of [-38,0,38])for(const z of [-25,25]){
      cyl('jewel-seat-'+x+'-'+z,6,1.5,x,6,z,'slate');
      cyl('jewel-dot-'+x+'-'+z,2.6,1.3,x,8,z,'brass');
    }
    for(let i=0;i<6;i++)ball('hook-glow-'+i,2.3,-43+i*17.2,92,36,'brass');
    break;
  case 'modular-jewelry-plinth':
    for(const x of [-35,0,36]){
      const y=x<0?x===0?48:30:68;
      ring('pedestal-foot-ring-'+x,9.4,1,x,y+4,0,'brass');
      cyl('display-finial-'+x,3.4,4,x,y+18,0,'pearl');
    }
    for(let i=-2;i<=2;i++)box('front-name-plate-'+i,9,3,2,i*19,10,43,'brass');
    break;
  case 'bonsai-display-pot':
    for(let i=0;i<12;i++){
      const a=i*Math.PI/6;
      cyl('ceramic-bead-'+i,2.6,7,52*Math.sin(a),104,52*Math.cos(a),'ceramic');
    }
    ring('raised-bowl-mouth',55,2,0,109,0,'brass');
    break;
  case 'desktop-herb-planter':
    for(const x of [-33,0,33]){
      box('herb-label-panel-'+x,25,17,3,x,32,-57,'ceramic');
      box('herb-label-rule-'+x,13,2,1,x,35,-59,'slate');
    }
    for(let i=-3;i<=3;i++)box('herb-drain-fin-'+i,2.3,11,5,i*15,15,-52,'jade');
    break;
  case 'wedding-place-card':
    for(const s of [-1,1]){
      cyl('side-wax-rosette-'+s,4,2,s*54,6,-16,'brass');
      box('table-card-gate-'+s,6,3,5,s*52,7,14,'pearl');
    }
    for(let i=-3;i<=3;i++)box('card-grip-tick-'+i,1.5,2,5,i*15,7,18,'slate');
    break;
  case 'anniversary-message-plaque':
    for(const s of [-1,1]){
      cyl('side-crest-'+s,5,2,s*52,10,0,'brass');
      for(const z of [-22,22])ball('jewel-rivet-'+s+'-'+z,2.5,s*61,9,z,'pearl');
    }
    for(let i=-3;i<=3;i++)box('bottom-groove-'+i,5,1.3,2,i*15,9,-32,'brass');
    break;
  case 'monogram-desk-coaster':
    for(const s of [-1,1]){
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4;
        ball('coaster-pearl-'+s+'-'+i,1.3,s*39+24*Math.cos(a),11,24*Math.sin(a),'brass');
      }
      ring('coaster-stamped-ring-'+s,4,1,s*65,10,0,'slate');
    }
    break;
  case 'fantasy-crest-badge':
    for(const s of [-1,1]){
      rod('laurel-rib-'+s,[s*19,6,-11],[s*11,7,-21],2,'jade');
      ball('crest-quartz-'+s,3,s*19,7,1,'pearl');
    }
    for(let i=-2;i<=2;i++)box('upper-crest-stud-'+i,3,2.5,2,i*11,8,26,'brass');
    break;
  case 'space-explorer-insignia':
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;
      ball('orbit-marker-'+i,2.8,25*Math.cos(a),8,25*Math.sin(a),'brass');
      box('trajectory-tick-'+i,3,2.5,2,31*Math.cos(a),8,31*Math.sin(a),'pearl');
    }
    ring('rocket-medallion',17,1.4,0,9,0,'slate');
    break;
  case 'mythic-rune-emblem':
    for(let i=0;i<8;i++){
      const a=i*Math.PI/4;
      ball('rune-spark-'+i,2.4,34*Math.cos(a),10,34*Math.sin(a),'brass');
      box('rune-notch-'+i,4,3,2.5,27*Math.cos(a),11,27*Math.sin(a),'pearl');
    }
    ring('inner-sigil-fillet',15,1.5,0,9,0,'brass');
    break;
  default:throw new Error('Unknown second-pass SKU: '+spec.slug);
  }
  if(count<6)throw new Error('Second-pass complexity gate failed: '+spec.slug);
  return count;
}
