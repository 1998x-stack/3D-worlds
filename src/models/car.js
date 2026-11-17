import * as THREE from 'three';
import { box, cylinder, mat } from './primitives.js';
/** Compact electric sedan; front direction +Z, floor origin. */
export function createCar(){
 const g=new THREE.Group();g.name='City Electric Sedan';
 const paint=mat(0x5c8b98,.40,.15),glass=mat(0x294854,.25),trim=mat(0x343b42);
 const tire=mat(0x25292d,.96),rim=mat(0xb0bdc0,.28,.6);
 box(g,'chassis',[1.76,.25,3.26],[0,.48,0],trim);
 box(g,'body',[1.83,.41,3.22],[0,.69,0],paint);
 box(g,'cabin',[1.50,.49,1.56],[0,1.08,-.24],paint);
 box(g,'windscreen',[1.42,.34,.045],[0,1.12,.55],glass);
 box(g,'backscreen',[1.42,.33,.045],[0,1.12,-1.03],glass);
 for(const s of [-1,1]){
   box(g,'window-'+s,[.023,.28,1.1],[s*.76,1.11,-.25],glass);
   for(const z of [-1.08,1.08]){
      const wheel=cylinder(g,'tire-'+s+'-'+z,.32,.32,.145,[s*.9,.33,z],tire,28);
      wheel.rotation.z=Math.PI/2;
      const hub=cylinder(g,'rim-'+s+'-'+z,.14,.14,.15,[s*.9,.33,z],rim,24);
      hub.rotation.z=Math.PI/2;
   }
   box(g,'headlamp-'+s,[.28,.10,.03],[s*.58,.73,1.64],mat(0xe2e3cf));
   box(g,'rear-lamp-'+s,[.29,.08,.03],[s*.58,.74,-1.64],mat(0xb44844));
   box(g,'doorhandle-'+s,[.022,.024,.16],[s*.93,.84,-.10],trim);
 }
 return g;
}
