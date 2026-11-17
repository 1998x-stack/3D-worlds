import * as THREE from 'three';
import { box, mat } from './primitives.js';
/** Modular bookshelf with distinct mesh parts and colored books. */
export function createBookshelf(){
 const g=new THREE.Group();g.name='Oak Studio Bookshelf';
 const oak=mat(0xa6774e),back=mat(0x73533b),colors=[0x5a8070,0xa45f4d,0x4e5975,0xd6a35c,0x90706c];
 box(g,'back',[1.14,1.95,.025],[0,1.0,-.16],back);
 for(const side of [-1,1])box(g,'vertical-'+side,[.065,1.98,.34],[side*.535,.99,0],oak);
 for(let row=0;row<5;row++){
   const y=.075+row*.47;
   box(g,'shelf-'+row,[1.14,.055,.34],[0,y,0],oak);
   if(row===4)continue;
   for(let i=0;i<7;i++){
     const h=.25+((row*3+i)%5)*.026,x=-.4+i*.13;
     box(g,'book-'+row+'-'+i,[.077+(i%3)*.009,h,.21],[x,y+.028+h/2,.035],mat(colors[(row+i)%5]));
   }
 }
 return g;
}
