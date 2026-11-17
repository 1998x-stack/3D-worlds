import * as THREE from 'three';
import { box, mat } from './primitives.js';
/** Low-profile queen bed with coordinated bedding. */
export function createBed(){
 const g=new THREE.Group();g.name='Coastal Queen Bed';
 const wood=mat(0x89664e),white=mat(0xf4efe6,.95),linen=mat(0xc3d4ca,.94),blue=mat(0x7593a0);
 box(g,'frame',[1.72,.22,2.06],[0,.25,.04],wood);
 box(g,'headboard',[1.72,.86,.12],[0,.49,-.99],wood);
 box(g,'headboard-panel',[1.60,.62,.065],[0,.55,-.904],linen);
 box(g,'mattress',[1.65,.23,1.92],[0,.47,.05],white);
 box(g,'duvet',[1.61,.07,1.25],[0,.626,.36],linen);
 box(g,'duvet-edge',[1.61,.025,.12],[0,.675,-.29],blue);
 for(const x of [-.74,.74]){
   for(const z of [-.83,.88])box(g,'foot-'+x+'-'+z,[.09,.15,.09],[x,.075,z],wood);
   box(g,'pillow-'+x,[.67,.11,.38],[x*.58,.66,-.65],white);
 }
 return g;
}
