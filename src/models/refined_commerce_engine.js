// SPDX-License-Identifier: MIT
// Distinct, dimensioned gallery representations of the first ten overseas CAD SKUs.
// These surface-preview meshes are NOT the CSG manufacturing source / printable STL.
import * as THREE from 'three';

export const REFINED_COMMERCE_SLUGS = Object.freeze([
  'moon-phase-light-sleeve', 'aurora-wave-lantern',
  'modular-pencil-caddy', 'cable-sort-desk-hub', 'paintbrush-workshop-rack',
  'studio-tool-bin', 'trading-card-display', 'handheld-console-stand',
  'ribbed-succulent-pot', 'propagation-vial-holder',
]);
const active = new Set(REFINED_COMMERCE_SLUGS);
const RAD = Math.PI / 180;

export function buildRefinedCommerceModel(spec) {
  if (!active.has(spec.slug)) return null;
  const root = new THREE.Group();
  root.name = spec.title + ' · refined CAD concept';
  const color = new THREE.Color(spec.accent);
  const materials = {
    body: new THREE.MeshStandardMaterial({color, metalness:.08, roughness:.48}),
    edge: new THREE.MeshStandardMaterial({color:0xd8d2bd, metalness:.35, roughness:.36}),
    dark: new THREE.MeshStandardMaterial({color:0x354455, metalness:.18, roughness:.48}),
    recess: new THREE.MeshStandardMaterial({color:0x273b45, metalness:.02, roughness:.82}),
    bright: new THREE.MeshStandardMaterial({color:0xf5e2b9, metalness:.03, roughness:.55}),
    green: new THREE.MeshStandardMaterial({color:0x719a89, metalness:.02, roughness:.67}),
  };
  function mesh(name, geometry, x=0,y=0,z=0,tone='body') {
    const object = new THREE.Mesh(geometry,materials[tone]);
    object.name=name;object.position.set(x,y,z);
    object.castShadow=true;object.receiveShadow=true;root.add(object);
    return object;
  }
  const box=(name,w,h,d,x,y,z,tone='body')=>mesh(name,new THREE.BoxGeometry(w,h,d),x,y,z,tone);
  const cylinder=(name,r,h,x,y,z,tone='body',sides=48)=>mesh(name,new THREE.CylinderGeometry(r,r,h,sides),x,y,z,tone);
  const torus=(name,r,t,x,y,z,tone='edge')=>{
    const o=mesh(name,new THREE.TorusGeometry(r,t,8,72),x,y,z,tone);o.rotation.x=Math.PI/2;return o;
  };
  function pipe(name,outer,inner,height,x,y,z,tone='body',segments=64) {
    const shape=new THREE.Shape();shape.absarc(0,0,outer,0,Math.PI*2,false);
    const hole=new THREE.Path();hole.absarc(0,0,inner,0,Math.PI*2,true);shape.holes.push(hole);
    const geo=new THREE.ExtrudeGeometry(shape,{depth:height,steps:1,bevelEnabled:false,curveSegments:segments});
    geo.rotateX(-Math.PI/2);
    return mesh(name,geo,x,y,z,tone);
  }
  function drilledPlate(name,w,d,thickness,holes,y,tone='body') {
    const shape=new THREE.Shape();shape.moveTo(-w/2,-d/2);shape.lineTo(w/2,-d/2);
    shape.lineTo(w/2,d/2);shape.lineTo(-w/2,d/2);shape.closePath();
    holes.forEach(([x,z,r])=>{const hole=new THREE.Path();hole.absarc(x,z,r,0,Math.PI*2,true);shape.holes.push(hole);});
    const geo=new THREE.ExtrudeGeometry(shape,{depth:thickness,bevelEnabled:false,curveSegments:40});
    geo.rotateX(-Math.PI/2);return mesh(name,geo,0,y,0,tone);
  }
  function rod(name,a,b,r,tone='dark') {
    const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),direction=end.clone().sub(start);
    const o=mesh(name,new THREE.CylinderGeometry(r,r,direction.length(),16),0,0,0,tone);
    o.position.copy(start.add(end).multiplyScalar(.5));
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());return o;
  }
  function dot(name,r,x,y,z,tone='edge') {return mesh(name,new THREE.SphereGeometry(r,12,10),x,y,z,tone);}
  function tubeCurve(name,positions,radius,tone='edge') {
    const curve=new THREE.CatmullRomCurve3(positions.map(p=>new THREE.Vector3(...p)));
    return mesh(name,new THREE.TubeGeometry(curve,100,radius,7,false),0,0,0,tone);
  }
  switch(spec.slug) {
  case 'moon-phase-light-sleeve': {
    const R=40,H=108,panels=12,step=2*Math.PI/panels;
    // Twelve perforated, tangent shell panels give actual visible openings.
    for(let i=0;i<panels;i++) {
      const shape=new THREE.Shape();const w=21.1;
      shape.moveTo(-w/2,5);shape.lineTo(w/2,5);shape.lineTo(w/2,H-5);
      shape.lineTo(-w/2,H-5);shape.closePath();
      for(const [k,y] of [23,50,77].entries()) {
        const hole=new THREE.Path();hole.absarc(0,y,4.8-(k%2)*.3,0,2*Math.PI,true);shape.holes.push(hole);
      }
      const g=new THREE.ExtrudeGeometry(shape,{depth:3.2,bevelEnabled:false,curveSegments:28});
      const a=i*step;const o=mesh('moon-cutout-panel-'+i,g,R*Math.sin(a),0,R*Math.cos(a),'body');o.rotation.y=a;
      for(let k=0;k<3;k++) {
        const y=23+27*k;const phase=(i+k)%3;
        // Tiny inlaid phase marker, separate from the physically open aperture.
        dot('moon-phase-inlay-'+i+'-'+k,1.8,R*Math.sin(a),y+6.8,R*Math.cos(a),'bright');
      }
    }
    for(const [i,y] of [2.6,106.4].entries()) pipe('machined-rim-'+i,42,37.3,2.4,0,y-1.2,0,i?'edge':'dark');
    for(let i=0;i<8;i++){const a=i*Math.PI/4;dot('star-pin-'+i,1.5,40*Math.sin(a),13,40*Math.cos(a),'bright');}
    break;
  }
  case 'aurora-wave-lantern': {
    pipe('open-aurora-cylinder',40.8,37.4,109.3,0,0,0);
    for(let i=0;i<8;i++) {
      const a=i*Math.PI/4;
      const points=[];
      for(let j=0;j<=35;j++){const y=5+j*2.88,theta=a+j*145*RAD/35;
        points.push([41*Math.sin(theta),y,41*Math.cos(theta)]);}
      tubeCurve('helical-aurora-rib-'+i,points,1.9,i%2?'edge':'bright');
    }
    for(let i=0;i<3;i++)torus('vent-band-'+i,40.1,.8,0,24+i*29,0,'dark');
    for(const [i,y] of [2,109].entries()) pipe('stability-rim-'+i,43.5,37.5,3,0,y,0,i?'edge':'dark');
    break;
  }
  case 'modular-pencil-caddy': {
    box('solid-footprint',130,4.2,87,0,2.1,0,'dark');
    for(let i=0;i<3;i++) {
      const x=-39+i*39;
      pipe('pencil-chamber-wall-'+i,20.8,17.5,67.8,x,4.2,0);
      torus('pencil-chamber-lip-'+i,19.2,1.15,x,71.1,0,'edge');
      cylinder('inside-floor-'+i,17.5,.7,x,4.3,0,'recess');
      for(let j=0;j<3;j++) box('chamber-scallop-'+i+'-'+j,2.1,11,1.3,
         x+17*Math.sin(j*2.094),63,17*Math.cos(j*2.094),'edge');
    }
    for(let i=0;i<4;i++)box('base-stitch-'+i,4.2,2,69,-57+i*38,5,-0,'body');
    break;
  }
  case 'cable-sort-desk-hub': {
    box('desktop-foot',133,8,90,0,4,0,'dark');
    box('rear-cable-comb-spine',125,49,13,0,32.5,33,'body');
    for(let i=0;i<6;i++) {
      const x=-60+i*24;
      box('separated-comb-finger-'+i,9,22,13,x,65,33,i%2?'edge':'body');
      cylinder('rounded-finger-top-'+i,4.5,13,x,76,33,i%2?'edge':'body').rotation.x=Math.PI/2;
    }
    for(let i=0;i<5;i++){
      const x=-48+i*24;
      const radius=3.8+(i%3)*.8;
      const z=-26;
      torus('cable-channel-seat-'+i,radius+.9,.9,x,48,33,'recess');
      box('front-cable-gate-'+i,5.4,13,28,x,14,z,'edge');
    }
    for(let i=0;i<8;i++)box('anti-slip-rib-'+i,8,.7,45,-52+i*15,8,-4,'body');
    break;
  }
  case 'paintbrush-workshop-rack': {
    box('catch-base',136,6,93,0,3,0,'dark');
    const holes=[];
    for(let ix=0;ix<4;ix++)for(let iz=0;iz<2;iz++)holes.push([-39+26*ix,-17+34*iz,[3.5,4.6,5.8,6.5][ix]]);
    drilledPlate('drilled-upper-brush-template',128,85,8,holes,72,'body');
    for(let ix of [-1,1])for(let iz of [-1,1]) {
      const x=ix*56,z=iz*34.5;
      cylinder('structural-post-'+ix+'-'+iz,5.4,67,x,39.3,z,'edge');
      cylinder('post-collar-'+ix+'-'+iz,7.2,3,x,69,z,'dark');
    }
    for(let i=0;i<3;i++)box('brush-drip-channel-'+i,3,2,72,-36+i*36,7,0,'edge');
    for(const [i,[x,z,r]] of holes.entries()) torus('bore-bevel-'+i,r+.8,.65,x,79.2,z,'edge');
    break;
  }
  case 'studio-tool-bin': {
    box('bin-footprint',142,4.5,99,0,2.25,0,'dark');
    for(let z of [-47.2,47.2])box('long-rim-'+z,142,83.5,3.5,0,46.25,z);
    for(let x of [-69.2,69.2])box('short-rim-'+x,3.5,83.5,92,x,46.25,0);
    for(let x of [-23.7,23.7])box('vertical-partition-'+x,3.5,79.5,92,x,44.25,0,'edge');
    box('cross-partition',135,79.5,3.5,0,44.25,0,'edge');
    box('front-engraving-rail',123,7,1.6,0,74,-49.1,'dark');
    for(let i=0;i<6;i++){
      const x=(i%3-1)*47,z=(Math.floor(i/3)-.5)*47;
      box('bin-mat-'+i,38,.45,38,x,4.8,z,'recess');
      box('compartment-id-notch-'+i,10,2,.8,x,80,-49.4,'bright');
    }
    break;
  }
  case 'trading-card-display': {
    box('easel-plinth',116,7,106,0,3.5,0,'dark');
    const panel=box('angled-card-backrest',88,87,5,0,49.5,23,'body');panel.rotation.x=-14*RAD;
    const lip=box('card-capture-lip',100,14,8,0,14,-35,'edge');
    box('non-slip-card-shelf',93,1.8,19,0,8.3,-22,'recess');
    for(let x of [-39,39]){
      const side=box('side-strengthening-spine-'+x,2.8,78,7,x,49,24,'edge');side.rotation.x=-14*RAD;
      cylinder('front-foot-stud-'+x,4,2,x,8,-43,'bright');
    }
    for(let i=0;i<7;i++)box('satin-plinth-groove-'+i,1.4,.5,7,-40+i*13,7,41,'edge');
    break;
  }
  case 'handheld-console-stand': {
    box('charging-footprint',147,7.5,112,0,3.75,0,'dark');
    box('charging-port-visual',20,1,12,0,7,-26,'recess');
    for(let x of [-51.5,51.5]) {
      const back=box('ergonomic-leaning-rail-'+x,12,86.5,8,x,48.3,19,'body');back.rotation.x=-20*RAD;
      box('device-rest-'+x,18,17,12,x,15,-37,'edge');
      box('soft-contact-pad-'+x,13,3,12,x,25,-36,'recess');
      rod('triangular-gusset-'+x,[x,8,26],[x,37,35],4.2,'dark');
      for(let j=0;j<3;j++)box('tread-'+x+'-'+j,10,.8,4,x,23+j*8,-34,'bright');
    }
    box('rear-spacer-bar',105,7,7,0,12,41,'edge');
    break;
  }
  case 'ribbed-succulent-pot': {
    pipe('hollow-ceramic-wall',50.8,47.3,95,0,5,0);
    pipe('drained-base-annulus',47,4.2,5,0,0,0,'dark');
    pipe('rolled-mouth-lip',53.5,47.2,5,0,95,0,'edge');
    for(let i=0;i<24;i++){
      const a=i*2*Math.PI/24;
      cylinder('fluted-ridge-'+i,2.2,89,49.9*Math.sin(a),49,49.9*Math.cos(a),i%3?'body':'edge',16);
    }
    for(let i=0;i<4;i++){const a=i*Math.PI/2;
      torus('drain-foot-seal-'+i,3.3,.6,16*Math.sin(a),.5,16*Math.cos(a),'dark');}
    break;
  }
  case 'propagation-vial-holder': {
    box('stable-drip-base',113,7,113,0,3.5,0,'dark');
    const holes=[[0,0,8.6],[-27,0,8.6],[27,0,8.6],[0,-27,8.6],[0,27,8.6]];
    drilledPlate('five-aperture-vial-bridge',105,105,9,holes,99,'body');
    for(let x of [-42.5,42.5])for(let z of [-42.5,42.5]){
      cylinder('cantilever-pillar-'+x+'-'+z,6,92,x,53,z,'edge');
      cylinder('pillar-join-'+x+'-'+z,8,3,x,99,z,'dark');
    }
    for(let i=0;i<5;i++){
      const [x,z,r]=holes[i];
      pipe('vial-seating-ring-'+i,11.8,r,3.3,x,97,z,'edge');
      cylinder('vial-drip-recess-'+i,7.2,.45,x,7.2,z,'recess');
    }
    break;
  }
  default: throw new Error('Unknown refined asset '+spec.slug);
  }
  // Preserve the existing canonical x/y/z size and floor-origin contract.
  const bounds=new THREE.Box3().setFromObject(root);
  const size=bounds.getSize(new THREE.Vector3());
  if (size.x<=0||size.y<=0||size.z<=0) throw new Error('Degenerate refined preview: '+spec.slug);
  const [w,h,d]=spec.dimensions_m;
  root.scale.set(w/size.x,h/size.y,d/size.z);
  root.position.set(-.5*(bounds.min.x+bounds.max.x)*root.scale.x,
                     -bounds.min.y*root.scale.y,
                     -.5*(bounds.min.z+bounds.max.z)*root.scale.z);
  root.userData={cadSource:spec.cad_path,refinedBatch:'01',manufacturingStatus:'unverified'};
  return root;
}
