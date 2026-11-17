import { buildRecipe } from './recipe_engine.js';
// 3D gallery preview, NOT a sliced/manufacturing STL. Canonical CAD lives in printables/*.scad.
export function buildCommerceModel(spec) {
  const v=spec.variant, f=spec.commerce_family, parts=[];
  const a=Number.parseInt(spec.accent.slice(1),16), dark=0x405369, light=0xe7dac1, mid=0x89a5a4;
  const box=(n,p,s,c=a)=>parts.push({t:'box',n,p,s,c});
  const cy=(n,p,s,c=a)=>parts.push({t:'cylinder',n,p,s,c});
  const ball=(n,p,s,c=a)=>parts.push({t:'sphere',n,p,s,c});
  const cone=(n,p,s,c=a)=>parts.push({t:'cone',n,p,s,c});
  const tor=(n,p,s,c=a)=>parts.push({t:'torus',n,p,s,c,rot:[-Math.PI/2,0,0]});
  const rod=(n,from,to,r=.035,c=dark)=>parts.push({t:'rod',n,from,to,r,c});
  if(f==='lantern') {
    cy('outer-sleeve',[0,.56,0],[.75,1.05,.75]);
    cy('top-light-aperture',[0,1.095,0],[.55,.025,.55],dark);
    cy('foot-rim',[0,.055,0],[.83,.10,.83],mid);
    for(let i=0;i<12+v;i++){const t=i*Math.PI*2/(12+v),x=Math.cos(t)*.372,z=Math.sin(t)*.372;
      ball('perforated-motif-'+i,[x,.32+(i%3)*.20,z],[.055,.07,.055],light)}
    for(let i=0;i<3;i++)tor('rim-'+i,[0,.10+i*.42,0],[.91,.07,.91],i%2?mid:dark);
  } else if(f==='figurine') {
    cy('plinth',[0,.06,0],[.95,.12,.95],dark);
    ball('body',[0,.56,0],[.34,.45,.30]);
    ball('head',[0,1.04,0],[.30,.28,.29],light);
    for(let i of [-1,1]){cone('ear-'+i,[i*.17,1.34,0],[.13,.28,.13],a);
      ball('wing-'+i,[i*.32,.62,0],[.13,.32,.20],mid);
      ball('eye-'+i,[i*.11,1.1,.26],[.035,.04,.03],dark);
      cy('foot-'+i,[i*.16,.18,.16],[.17,.11,.18],dark);}
    cone('nose',[0,.98,.29],[.12,.15,.12],a);
    tor('base-ring',[0,.1,0],[1.06,.06,1.06],mid);
  } else if(f==='scenery') {
    box('tile',[0,.035,0],[1.45,.07,.9],dark);
    for(let i=0;i<3+v%2;i++){let x=-.53+i*.32;
      box('building-'+i,[x,.19,-.08+(i%2)*.18],[.24,.29+.04*v,.27],i%2?a:mid);
      box('roof-'+i,[x,.36+.04*v,-.08+(i%2)*.18],[.29,.07,.30],light);
      box('window-'+i,[x,.20,.09+(i%2)*.18],[.10,.08,.015],dark);}
    for(let i of [-1,1]){cy('post-'+i,[i*.61,.22,.31],[.08,.40,.08],mid);
      ball('lamp-'+i,[i*.61,.44,.31],[.105,.12,.105],light);}
  } else if(f==='organizer') {
    box('base',[0,.04,0],[1.27,.08,.81],dark);
    for(let i=0;i<2;i++)box('long-wall-'+i,[0,.33,(i?1:-1)*.38],[1.27,.59,.065],a);
    for(let i=0;i<2;i++)box('side-wall-'+i,[(i?1:-1)*.61,.33,0],[.06,.59,.78],a);
    for(let i=0;i<2+v%3;i++)box('divider-'+i,[-.4+i*.8/(1+v%3),.32,0],[.05,.57,.77],mid);
    for(let i=0;i<4;i++)box('bottom-rib-'+i,[-.42+i*.28,.085,0],[.07,.035,.72],light);
  } else if(f==='display') {
    cy('round-plinth',[0,.05,0],[.96,.10,.96],dark);
    cy('column',[0,.36,0],[.32,.55,.32],mid);
    cy('display-deck',[0,.66,0],[.86,.10,.86],a);
    for(let i=0;i<6;i++) {const t=2*Math.PI*i/6;
      cy('gem-foot-'+i,[Math.sin(t)*.35,.70,Math.cos(t)*.35],[.08,.06,.08],light);}
    for(let i of [-1,1])box('retainer-'+i,[i*.35,.79,0],[.07,.17,.48],dark);
    tor('edge-ring',[0,.73,0],[.93,.07,.93],light);
  } else if(f==='gaming') {
    box('tray-bottom',[0,.04,0],[1.32,.08,.80],dark);
    for(let i of [-1,1]){box('side-wall-'+i,[i*.63,.2,0],[.07,.32,.82],a);
      box('long-wall-'+i,[0,.2,i*.385],[1.26,.32,.06],a);}
    for(let i=0;i<2+v%3;i++)box('rack-slot-'+i,[-.4+i*.78/(1+v%3),.16,0],[.045,.25,.75],mid);
    for(let i=0;i<5;i++)ball('token-'+i,[-.48+i*.23,.12,.15],[.07,.055,.07],light);
    box('backlip',[0,.37,-.33],[1.15,.1,.08],mid);
  } else if(f==='jewelry') {
    box('base',[0,.04,0],[1.10,.08,.72],dark);
    for(let i=0;i<4+v%2;i++){let x=-.43+i*.86/(3+v%2);
      cy('upright-'+i,[x,.43,0],[.06,.75,.06],mid);
      ball('finial-'+i,[x,.84,0],[.09,.09,.09],light);}
    box('rail',[0,.81,0],[.92,.09,.10],a);
    for(let i=0;i<4;i++)tor('jewel-loop-'+i,[-.35+i*.23,.76,.10],[.12,.12,.12],light);
  } else if(f==='planter') {
    cy('outer-body',[0,.46,0],[.92,.87,.92]);
    cy('dark-mouth',[0,.92,0],[.72,.025,.72],dark);
    tor('top-rim',[0,.91,0],[1.0,.10,1.0],mid);
    cy('underside',[0,.05,0],[.90,.10,.90],dark);
    for(let i=0;i<10+v;i++){let t=Math.PI*2*i/(10+v);
      rod('vertical-flute-'+i,[Math.sin(t)*.45,.12,Math.cos(t)*.45],[Math.sin(t)*.45,.85,Math.cos(t)*.45],.025,mid)}
  } else if(f==='gift') {
    box('plate',[0,.035,0],[1.38,.07,.55],dark);
    box('front-panel',[0,.09,0],[1.28,.10,.47],a);
    for(let i=0;i<5+v;i++)box('letter-block-'+i,[-.48+i*.96/(4+v),.155,0],[.11,.035,.22],light);
    for(let i of [-1,1]) {cy('rounded-end-'+i,[i*.64,.08,0],[.20,.13,.50],mid);
      ball('corner-dot-'+i,[i*.56,.165,.17],[.035,.02,.035],light);}
  } else if(f==='cosplay') {
    cy('emblem-body',[0,.06,0],[.96,.12,.96],dark);
    cy('inner-crest',[0,.12,0],[.67,.10,.67],a);
    for(let i=0;i<6+v;i++){let t=Math.PI*2*i/(6+v);
      ball('crest-bead-'+i,[Math.sin(t)*.33,.18,Math.cos(t)*.33],[.065,.045,.065],light)}
    cone('central-sigil',[0,.22,0],[.36,.12,.35],mid);
    tor('edge-bezel',[0,.15,0],[1.07,.10,1.07],light);
    cy('eyelet',[0,.13,.40],[.16,.07,.16],mid);
  } else throw Error('Unknown commerce family: '+f);
  return buildRecipe({title:spec.title,dimensions:spec.dimensions_m,parts});
}
