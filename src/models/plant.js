import * as THREE from 'three';
import { cylinder, sphere, limb, mat } from './primitives.js';
/** Indoor potted plant with stem and six distinct leaves. */
export function createPlant(){
 const g=new THREE.Group();g.name='Monstera Pot';
 const ceramic=mat(0xbb856b),soil=mat(0x574537),stems=mat(0x4a7456);
 const greens=[mat(0x518a61),mat(0x72a079)];
 cylinder(g,'pot-body',.22,.17,.33,[0,.165,0],ceramic,24);
 cylinder(g,'pot-rim',.23,.23,.025,[0,.335,0],ceramic,24);
 cylinder(g,'soil',.193,.193,.018,[0,.351,0],soil,24);
 const leaves=[
  [-.22,.72,.02,-.25,.82,.07],[.23,.73,-.04,.26,.86,-.09],
  [-.12,.88,-.22,-.16,1.0,-.25],[.15,.89,.17,.19,1.0,.20],
  [.03,.69,.25,.04,.75,.28],[-.03,.75,-.23,-.03,.79,-.28]
 ];
 leaves.forEach((p,i)=>{
   limb(g,'stem-'+i,[0,.36,0],p.slice(0,3),.017,stems);
   const leaf=sphere(g,'leaf-'+i,[.16,.08,.12],p.slice(3,6),greens[i%2]);
   leaf.rotation.z=p[0]>0?-.4:.4;
 });
 return g;
}
