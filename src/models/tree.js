import * as THREE from 'three';
import { cylinder, sphere, limb, mat } from './primitives.js';
/** Stylized deciduous tree, light low-poly outdoor asset. */
export function createTree(){
 const g=new THREE.Group();g.name='Green Canopy Tree';
 const bark=mat(0x79553d),leaf=mat(0x477a59),dark=mat(0x315f48),sun=mat(0x719961);
 cylinder(g,'trunk',.13,.21,1.34,[0,.67,0],bark,9);
 limb(g,'fork-left',[0,1.1,0],[-.42,1.79,.05],.065,bark);
 limb(g,'fork-right',[0,1.1,0],[.37,1.91,-.1],.066,bark);
 sphere(g,'crown',[.67,.78,.70],[0,1.91,0],leaf);
 sphere(g,'crown-left',[.48,.55,.49],[-.43,1.92,.12],dark);
 sphere(g,'crown-right',[.52,.58,.50],[.41,1.99,-.08],sun);
 sphere(g,'crown-top',[.40,.34,.43],[0,2.38,0],leaf);
 return g;
}
