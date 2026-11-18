import { buildRecipe } from './recipe_engine.js';
import { buildRefinedCommerceModel } from './refined_commerce_engine.js';
import { buildRefinedCommerceBatch02 } from './refined_commerce_batch02.js';
import { buildRefinedCommerceBatch03 } from './refined_commerce_batch03.js';
// 3D gallery preview, NOT a sliced/manufacturing STL. Canonical CAD lives in printables/*.scad.
export function buildCommerceModel(spec) {
  const batch03 = buildRefinedCommerceBatch03(spec);
  if (batch03) return batch03;
  const batch02 = buildRefinedCommerceBatch02(spec);
  if (batch02) return batch02;
  const refined = buildRefinedCommerceModel(spec);
  if (refined) return refined;
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
    cy('ground-plinth',[0,.04,0],[.98,.08,.98],dark);
    if(v===1) {
      ball('whale-body',[0,.41,0],[.85,.42,.42]);
      ball('whale-head',[-.31,.47,0],[.36,.35,.35],light);
      for(let i of [-1,1]){ball('tail-fluke-'+i,[.58,.50,i*.20],[.27,.10,.13],mid);
        ball('fin-'+i,[-.1,.24,i*.28],[.20,.10,.14],a);}
      ball('eye',[-.51,.51,.24],[.04,.045,.04],dark);
    } else if(v===2) {
      ball('owl-body',[0,.49,0],[.56,.78,.50]);
      ball('owl-head',[0,1.08,0],[.46,.36,.43],light);
      for(let i of [-1,1]){cone('ear-'+i,[i*.30,1.44,0],[.22,.30,.20]);
        ball('eye-'+i,[i*.19,1.1,.39],[.11,.13,.04],dark);
        ball('wing-'+i,[i*.45,.65,0],[.13,.36,.27],mid);}
      cone('beak',[0,.99,.43],[.13,.17,.13],a);
    } else if(v===3) {
      ball('fox-body',[0,.38,0],[.46,.50,.35]);
      ball('fox-face',[0,.97,0],[.45,.38,.39],light);
      for(let i of [-1,1]){cone('fox-ear-'+i,[i*.28,1.38,0],[.24,.32,.20],a);
        ball('fox-eye-'+i,[i*.15,1,.35],[.06,.065,.04],dark);}
      cone('fox-snout',[0,.85,.41],[.20,.21,.19],mid);
      for(let i of [-1,1])cy('paw-'+i,[i*.24,.12,.25],[.17,.17,.20],a);
    } else if(v===4) {
      box('robot-torso',[0,.50,0],[.60,.68,.42],mid);
      box('robot-head',[0,1.09,0],[.75,.44,.58],a);
      for(let i of [-1,1]){ball('sensor-'+i,[i*.22,1.16,.30],[.08,.085,.06],dark);
        cy('arm-'+i,[i*.43,.59,0],[.16,.48,.17],light);
        cy('leg-'+i,[i*.20,.16,0],[.15,.23,.16],dark);}
      rod('antenna',[0,1.32,0],[0,1.58,0],.03,mid);
      ball('antenna-cap',[0,1.60,0],[.08,.08,.08],light);
    } else {
      cone('mountain-body',[0,.58,0],[.78,1.15,.76],a);
      cone('ridge',[0,1.03,0],[.52,.76,.50],mid);
      for(let i of [-1,1]){ball('stone-hand-'+i,[i*.40,.52,.11],[.16,.26,.18],light);
        ball('eye-'+i,[i*.16,.72,.35],[.06,.075,.06],dark);
        cone('rock-horn-'+i,[i*.36,1.12,0],[.16,.36,.15],dark);}
      ball('mouth',[0,.54,.39],[.10,.055,.05],dark);
    }
  } else if(f==='scenery') {
    box('tile',[0,.035,0],[1.52,.07,1.0],dark);
    if(v===1){
      for(let i=0;i<3;i++) {box('cargo-'+i,[-.49+i*.48,.24,.02],[.42,.40,.51],i%2?mid:a);
        box('cargo-stripe-'+i,[-.49+i*.48,.30,.31],[.28,.07,.015],light);}
      for(let i of [-1,1])cy('bollard-'+i,[i*.63,.20,.36],[.10,.33,.10],mid);
    }else if(v===2){
      box('road',[0,.09,0],[1.46,.045,.24],mid);
      for(let i=0;i<3;i++)cy('cactus-'+i,[-.55+i*.55,.30,.32],[.09,.44,.08],a);
      for(let i=0;i<4;i++)box('dash-'+i,[-.53+i*.35,.12,0],[.15,.007,.025],light);
      box('sign-post',[-.55,.38,-.34],[.07,.62,.06],mid);
      box('sign',[-.48,.64,-.34],[.29,.18,.04],light);
    }else if(v===3){
      box('cabin-wall',[0,.26,0],[.84,.45,.64],a);
      cone('cabin-roof',[0,.57,0],[1.13,.35,.92],mid);
      box('door',[0,.16,.33],[.20,.24,.026],dark);
      for(let i of [-1,1])box('cabin-window-'+i,[i*.29,.32,.33],[.15,.16,.025],light);
      for(let i=0;i<4;i++)cy('pine-'+i,[-.6+i*.39,.26,-.40],[.09,.40,.09],mid);
    }else if(v===4){
      box('shop',[0,.31,0],[.90,.55,.64],a);
      box('awning',[0,.62,.31],[1.05,.12,.27],mid);
      for(let i=0;i<3;i++)box('shop-window-'+i,[-.30+i*.30,.37,.33],[.20,.21,.03],light);
      cy('streetlight',[.58,.44,-.22],[.07,.78,.07],dark);
      ball('bulb',[.58,.84,-.22],[.12,.12,.12],light);
    }else{
      box('platform',[0,.12,0],[1.43,.21,.55],a);
      box('canopy',[0,.86,0],[1.38,.08,.72],mid);
      for(let i of [-1,1])box('post-'+i,[i*.57,.5,0],[.07,.71,.07],dark);
      box('bench',[0,.33,.15],[.70,.08,.20],light);
      for(let i of [-1,1])box('bench-leg-'+i,[i*.30,.23,.15],[.07,.18,.07],dark);
      box('sign',[0,.74,-.16],[.37,.12,.035],light);
    }
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
