import * as THREE from 'three';
import { box, sphere, cylinder, limb, mat } from './primitives.js';
/** Stone vessel sink on wood vanity; stylized plumbing fixture. */
export function createWashbasin(){
 const g=new THREE.Group();g.name='Vessel Sink Vanity';
 const wood=mat(0x795848),white=mat(0xeceae4,.22),metal=mat(0xa9b9bd,.22,.7);
 box(g,'cabinet',[.90,.73,.52],[0,.395,0],wood);
 box(g,'countertop',[.96,.058,.57],[0,.795,0],white);
 for(const x of [-.22,.22]){
   box(g,'drawer-'+x,[.40,.28,.015],[x,.57,.268],mat(0xa07459));
   box(g,'handle-'+x,[.15,.02,.025],[x,.57,.292],metal);
 }
 sphere(g,'vessel',[.33,.11,.20],[0,.88,.035],white);
 sphere(g,'basin-bottom',[.26,.013,.15],[0,.984,.035],mat(0xb3cfd1,.2));
 cylinder(g,'tap-base',.031,.031,.04,[0,.86,-.20],metal);
 limb(g,'tap-stem',[0,.88,-.20],[0,1.09,-.20],.023,metal);
 limb(g,'tap-spout',[0,1.09,-.20],[0,1.09,-.025],.021,metal);
 return g;
}
