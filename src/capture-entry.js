/** Build-time capture entry, excluded from the shipped Gallery HTML. */
import catalog from '../catalog/models.json';
import { createScene } from './scene.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
const imports=import.meta.glob('./models/*.js');
const assets=new Map(catalog.assets.filter(item=>item.kind==='procedural').map(item=>[item.id,item]));
function base64(buffer){
 const bytes=new Uint8Array(buffer);
 let result='';
 for(let i=0;i<bytes.length;i+=16384)result+=String.fromCharCode(...bytes.subarray(i,i+16384));
 return btoa(result);
}
window.__capture={
 ids:[...assets.keys()],
 async render(id,{includeGlb=true}={}){
   const item=assets.get(id);
   if(!item)throw Error('Unknown procedural model: '+id);
   const module=await imports['./models/'+item.source_path.split('/').pop()]();
   const factory=module[item.generator];
   if(typeof factory!=='function')throw Error('Model factory missing '+id);
   // Force-disposing WebGL contexts intentionally invalidates their canvas.
   // Allocate a fresh canvas for every asset (never reuse a lost context).
   const previous=document.getElementById('capture-canvas');
   const canvas=document.createElement('canvas');
   canvas.id='capture-canvas';
   canvas.width=640;canvas.height=640;
   canvas.style.width='640px';canvas.style.height='640px';
   previous.replaceWith(canvas);
   const view=createScene(canvas,factory,{interactive:false});
   let png,glb=null;
   try{
     png=canvas.toDataURL('image/png').split(',')[1];
     if(!png||png.length<200)throw Error('Canvas screenshot is blank: '+id);
     if(includeGlb){
       const buffer=await new GLTFExporter().parseAsync(view.object,{binary:true,onlyVisible:true});
       glb=base64(buffer);
     }
   }finally{view.dispose();}
   return {id,slug:item.slug,png,glb};
 }
};
