import * as THREE from 'three';
import { box, mat } from './primitives.js';
/** Open laptop, grounded at its own desk surface. */
export function createLaptop(){
 const g=new THREE.Group();g.name='Minimal Laptop';
 const body=mat(0x9fa9ac,.36,.62),key=mat(0x29343d),display=mat(0x284a60,.21);
 box(g,'keyboard-case',[.35,.023,.25],[0,.022,.045],body);
 box(g,'keyboard-recess',[.31,.004,.135],[0,.036,.001],key);
 for(let row=0;row<3;row++)for(let col=0;col<10;col++){
   box(g,'key-'+row+'-'+col,[.022,.004,.027],[-.132+col*.029,.040,-.04+row*.039],body);
 }
 box(g,'trackpad',[.096,.003,.05],[0,.036,.119],mat(0x78868d));
 const lid=new THREE.Group();lid.name='display-hinge';lid.position.set(0,.032,-.077);lid.rotation.x=-.12;
 box(lid,'screen-case',[.35,.23,.015],[0,.118,0],body);
 box(lid,'screen-panel',[.325,.205,.002],[0,.12,.01],display);
 box(lid,'screen-accent',[.18,.021,.003],[0,.18,.014],mat(0x68a6a7));
 g.add(lid);
 return g;
}
