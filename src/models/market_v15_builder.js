import { buildRecipe } from './recipe_engine.js';
/**
 * Original V1.5 visual scene compositor. Entries encode unique silhouettes and
 * semantic repeated parts; units in authored recipe space, scaled once to
 * catalog meter dimensions. NOT manufacturing CAD nor demonstrated fit.
 */
export function buildMarketV15(config) {
  const palette = { primary: parseInt(config.accent.slice(1),16), secondary:0x8ba6a8,
    contrast:0xe7b66e, frame:0x33445a, dark:0x263345, light:0xe4e6dc,
    metal:0x8b919d, wood:0x9e7b55, stone:0x888d91, ceramic:0xe8e2d8 };
  const parts=[];
  const add=(t,n,p,s,c='primary',finish='matte',rot)=>{
    if (t==='rod') {
      const a=Array.isArray(p)?p:[0,0,0], b=Array.isArray(s)?s:[0,1,0];
      const len=Math.hypot(...a.map((v,i)=>v-b[i]));
      if (!(len>1e-5)) throw Error('Degenerate rod '+n);
      parts.push({t,n,from:a,to:b,r:finish,c:palette[c]??palette.primary,finish:'metal'});
    } else {
      const v={t,n,p,s,c:palette[c]??palette.primary,finish};
      if (rot) v.rot=rot;
      parts.push(v);
    }
  };
  for (const raw of config.body) {
    if (raw[0]==='rod') add('rod',raw[1],raw[2],raw[3],raw[5],raw[4]);
    else add(...raw);
  }
  for (const pattern of config.patterns) {
    const {k,n,t,o,s,c,f='matte',rot}=pattern;
    const count=k==='grid'?pattern.nx*pattern.nz:pattern.count;
    if (!Number.isInteger(count)||count<1||count>48) throw Error('Invalid semantic part count '+n);
    for(let i=0;i<count;i++){
      let p;
      if(k==='line') p=o.map((v,axis)=>v+pattern.d[axis]*i);
      else if(k==='grid') p=o.map((v,axis)=>v+pattern.d[axis]*(axis===2?Math.floor(i/pattern.nx):axis===0?i%pattern.nx:0));
      else if(k==='radial') {const a=2*Math.PI*i/count;p=[o[0]+Math.cos(a)*pattern.r,o[1],o[2]+Math.sin(a)*pattern.r];}
      else throw Error('Unknown layout '+k);
      // Pattern rods have a documented upright stick envelope, unlike fused solid geometry.
      if(t==='rod') add('rod',n+'-'+i,[p[0],p[1]-s[1]/2,p[2]],[p[0],p[1]+s[1]/2,p[2]],c,s[0]/2);
      else add(t,n+'-'+i,p,s,c,f,rot);
    }
  }
  const unique=new Set(parts.map(p=>p.n));
  if(unique.size!==parts.length) throw Error('Duplicate part names in '+config.title);
  if(parts.length<15) throw Error('Missing authored detail systems in '+config.title);
  return buildRecipe({title:config.title,dimensions:config.dimensions,parts});
}
