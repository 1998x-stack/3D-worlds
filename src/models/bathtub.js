import * as THREE from 'three';
import { sphere, cylinder, mat } from './primitives.js';
/** Minimal oval tub: ceramic shell and visual water inset. */
export function createBathtub(){
 const g=new THREE.Group();g.name='Freestanding Oval Bath';
 const shell=mat(0xf1eee8,.19), water=mat(0xb7d3d7,.22),metal=mat(0x99aab2,.3,.6);
 sphere(g,'outer-ceramic-shell',[.88,.30,.43],[0,.37,0],shell);
 sphere(g,'rim',[.82,.040,.37],[0,.636,0],shell);
 sphere(g,'water',[.73,.019,.31],[0,.670,0],water);
 cylinder(g,'drain',.042,.042,.010,[0,.691,.12],metal,24);
 for(const x of [-.60,.60])sphere(g,'support-'+x,[.12,.06,.14],[x,.10,0],shell);
 return g;
}
