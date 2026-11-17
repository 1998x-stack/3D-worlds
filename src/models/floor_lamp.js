import * as THREE from 'three';
import { cylinder, sphere, mat } from './primitives.js';
/** Flared studio lamp; non-emissive, decorative interior prop. */
export function createFloorLamp(){
 const g=new THREE.Group();g.name='Flared Floor Lamp';
 const brass=mat(0x46525a,.35,.55),shade=mat(0xdbc6a5,.94);
 cylinder(g,'weighted-base',.24,.24,.05,[0,.025,0],brass,36);
 cylinder(g,'stem',.026,.028,1.42,[0,.76,0],brass,16);
 cylinder(g,'flared-shade',.20,.33,.36,[0,1.54,0],shade,36);
 cylinder(g,'shade-trim',.33,.33,.014,[0,1.364,0],brass,36);
 cylinder(g,'top-cap',.075,.075,.025,[0,1.735,0],brass,24);
 sphere(g,'finial',[.043,.05,.043],[0,1.775,0],brass);
 return g;
}
