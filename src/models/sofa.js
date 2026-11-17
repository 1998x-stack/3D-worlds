import * as THREE from 'three';
import { box, mat, sphere } from './primitives.js';
/** Two-seat sofa. Floor origin, meters. */
export function createSofa() {
  const g=new THREE.Group();g.name='Clay Linen Sofa';
  const base=mat(0x7d5144), fabric=mat(0xbe7867,0.93), soft=mat(0xd59a85,0.97), leg=mat(0x473733);
  box(g,'structural-base',[1.94,.22,.83],[0,.28,0],base);
  box(g,'backrest',[2.04,.60,.19],[0,.59,-.36],fabric);
  for(const side of [-1,1]){
    box(g,'arm-'+side,[.19,.45,.84],[side*.93,.43,.01],fabric);
    box(g,'seat-'+side,[.82,.17,.69],[side*.425,.465,.1],soft);
    box(g,'back-cushion-'+side,[.83,.41,.14],[side*.425,.68,-.255],soft);
    for(const z of [-.31,.32])box(g,'foot-'+side+'-'+z,[.075,.13,.075],[side*.79,.065,z],leg);
  }
  sphere(g,'accent-cushion',[.16,.15,.065],[-.56,.69,-.13],mat(0x718476));
  return g;
}
