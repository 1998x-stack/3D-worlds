import { buildRecipe } from './recipe_engine.js';

/**
 * V1.5 original market-inspired visual geometry, meters and +Y up.
 * Independent authored layouts (rather than scaling one generic silhouette).
 * Scene meshes are not manufacturing CAD and are NOT printable certification.
 */
const ink=0x283746, shell=0x456477, light=0xece7d6, mint=0x79b8a3,
  orange=0xeb9663, brass=0xc79d56, blue=0x81bfe3, violet=0x9884b8,
  rubber=0x2b3036, glass=0xb9e2e0;
export const V15_KEYS = Object.freeze([
  'monitor-cantilever-bridge','hinged-craft-workstation',
  'dual-razor-drain-dock','refill-cartridge-wall-shelf',
  'pocket-repair-automaton','seed-courier-explorer',
  'terraced-pollinator-habitat','moss-canyon-study-diorama',
  'field-repair-cargo-trike','aerodynamic-survey-buggy',
  'split-keyboard-cable-nest','solder-tip-indexing-station','cable-reel-matrix',
  'faceted-shadow-lantern','tessellated-relief-mosaic',
  'tea-sachet-gravity-ladder','coffee-filter-drying-mast',
  'kinetic-facade-study-panel','rainscreen-breeze-block',
  'modular-rain-garden-curb','micro-mobility-parking-beacon',
  'thread-gauge-swatch-rack','pegboard-fastener-cassette','angled-hex-key-rail',
  'climbing-hold-route-diorama','cycling-medal-display-track',
  'lunar-specimen-vault','bioluminescent-sonar-buoy',
  'camera-battery-organizer','label-front-parts-bin'
]);
export function buildV15MarketModel(meta) {
  if (!V15_KEYS.includes(meta.slug)) throw new Error('Unknown V1.5 design: '+meta.slug);
  const parts=[]; let seq=0;
  const add=(t,n,p,s,c=shell,finish='matte',extra={})=>{
    parts.push({t,n:n+'-'+seq++,p,s,c,finish,...extra});
  };
  const B=(n,x,y,z,w,h,d,c=shell,finish='matte',rot)=>add('box',n,[x,y,z],[w,h,d],c,finish,rot?{rot}: {});
  const C=(n,x,y,z,w,h,d,c=shell,finish='matte',rot)=>add('cylinder',n,[x,y,z],[w,h,d],c,finish,rot?{rot}:{});
  const H=(n,x,y,z,w,h,d,c=shell)=>add('hex',n,[x,y,z],[w,h,d],c);
  const S=(n,x,y,z,w,h,d,c=light,finish='matte')=>add('sphere',n,[x,y,z],[w,h,d],c,finish);
  const T=(n,x,y,z,w,h,d,c=brass)=>add('torus',n,[x,y,z],[w,h,d],c,'metal');
  const R=(n,a,b,r=.035,c=brass,finish='metal')=>{parts.push({t:'rod',n:n+'-'+seq++,from:a,to:b,r,c,finish});};
  const A=(n,x,y,z,diam=.6,start=0,sweep=Math.PI,c=brass,rot=[0,0,0])=>
    add('arc',n,[x,y,z],[diam,diam,.4],c,'metal',{start,sweep,rot});
  const deck=(w=1.85,d=1.45,y=.09,c=ink)=>B('single-piece-plinth',0,y,0,w,y*2,d,c);
  const feet=(x=.78,z=.57)=>{for(const sx of [-1,1])for(const sz of [-1,1])
    C('non-slip-foot',sx*x,.025,sz*z,.22,.05,.22,rubber,'rubber');};
  const rivets=(xs,z,y,c=brass)=>{for(const x of xs) C('retaining-fastener',x,y,z,.07,.035,.07,c,'metal');};
  const slots=(n,xs,z,y)=>xs.forEach((x,i)=>B(n+'-slot-inset',x,y,z,.08,.015,.32,i%2?ink:mint,'rubber'));
  const scaffold=(width=.85,height=1.3)=>{for(const x of [-width,width]){R('vertical-tube',[x,.19,-.5],[x,height,-.5],.045);R('stabilizing-guy',[x,.22,.48],[x,height,-.5],.035,shell);}};
  const panelGrid=(rows,cols,z,lowY,dx,dy)=>{for(let i=0;i<rows;i++)for(let j=0;j<cols;j++){
    C('open-cell-bezel', (j-(cols-1)/2)*dx,lowY+i*dy,z,.15,.028,.15,ink,'anodized',[Math.PI/2,0,0]);
    C('cell-indicator', (j-(cols-1)/2)*dx,lowY+i*dy,z+.018,.055,.022,.055, i%2?mint:orange,'glow',[Math.PI/2,0,0]);
  }};
  const wheel=(x,z,rad=.35)=>{C('tyre',x,rad+.11,z,rad*2,.14,rad*2,rubber,'rubber',[Math.PI/2,0,0]);
    C('hub-disc',x,rad+.11,z,rad*.9,.17,rad*.9,brass,'metal',[Math.PI/2,0,0]);
    for(let i=0;i<8;i++){const a=i*Math.PI/4;
      R('wheel-spoke',[x,rad+.11,z],[x+Math.cos(a)*rad*.77,rad+.11+Math.sin(a)*rad*.77,z+.09],.013,light);}
  };
  const teeth=(count,range,y,z,color=light)=>{for(let i=0;i<count;i++){
    const x=(i-(count-1)/2)*range/(count-1);
    B('indexed-graduation',x,y,z,.035,i%5===0?.14:.07,.024,color);
  }};
  const label=(x,y,z,w=.3)=>B('recessed-label-zone',x,y,z,w,.07,.03,light,'ceramic');
  switch(meta.slug){
    case 'monitor-cantilever-bridge':
      deck(2,.8);feet(.82,.31);
      for(const x of [-.79,.79]){B('structural-side-web',x,.52,0,.17,.87,.62,shell);
        B('gusset',x,.26,-.26,.23,.3,.13,brass);}
      B('monitor-platform',0,.98,0,1.92,.14,.83,light,'ceramic');
      B('under-shelf-cable-lane',0,.67,-.23,1.47,.12,.17,ink);
      for(let i=0;i<9;i++)B('ventilation-rib',-.71+i*.18,1.064,0,.052,.02,.65,mint);
      B('phone-landing-ramp',.53,.21,.22,.64,.1,.39,orange);
      rivets([-.72,-.36,0,.36,.72],.38,1.06);break;
    case 'hinged-craft-workstation':
      deck(1.95,1.48);feet();
      for(const x of [-.78,.78]){R('folding-leg',[x,.18,-.56],[x,1.2,-.42],.065);
        C('hinge-knuckle',x,.78,-.45,.24,.19,.24,brass);}
      B('fold-away-panel',0,1.22,-.45,1.71,.14,.91,light,'wood',[-.42,0,0]);
      for(let i=0;i<9;i++)B('cutting-mat-registration',-.72+i*.18,1.38,-.16,.026,.024,.42,mint);
      for(let i=0;i<6;i++)C('tool-aperture-ring',-.58+i*.23,.22,.41,.12,.07,.12,ink);
      B('flip-tray',0,.25,.62,1.32,.09,.27,orange);break;
    case 'dual-razor-drain-dock':
      deck(1.7,1.18,.075);feet(.68,.43);
      for(const x of [-.46,.46]){B('razor-guide-rail',x,.34,0,.11,.55,.76,light);
        B('blade-shield',x,.58,-.23,.52,.13,.19,ink);
        B('handle-channel',x,.16,.2,.23,.11,.65,shell);}
      for(let i=0;i<9;i++)B('drainage-air-gap',-.7+i*.18,.105,.55,.07,.025,.28,mint);
      B('drip-egress',0,.11,.73,.86,.07,.18,blue);rivets([-.6,0,.6],-.43,.17);break;
    case 'refill-cartridge-wall-shelf':
      B('slotted-back-plate',0,.92,-.6,1.84,1.77,.17,ink);
      for(let i=0;i<3;i++){const x=-.55+i*.55;
        B('replaceable-bin-shell',x,.63,-.05,.46,.77,.65,shell);
        B('visible-bin-window',x,.66,.29,.31,.36,.04,glass,'glass');
        B('retaining-bottom-lip',x,.3,.29,.48,.1,.14,orange);label(x,1.04,.32);}
      for(let i=0;i<8;i++)C('mounting-screw-rim',(-.7+(i%4)*.47),.26+Math.floor(i/4)*1.36,-.48,.11,.08,.11,brass);
      B('shelf-rail',0,.19,.39,1.64,.13,.25,light);break;
    case 'pocket-repair-automaton':
      deck(1.35,1.1,.07);B('chassis',0,.75,0,.78,.89,.55,blue);
      S('helmet-shell',0,1.47,0,.46,.37,.42,light);B('face-screen',0,1.47,.37,.61,.26,.07,ink);
      for(const x of [-.21,.21]){S('optical-eye',x,1.49,.42,.075,.075,.02,mint,'glow');
        R('manipulator',[x*1.8,.93,0],[x*2.7,.62,.13],.075,brass);
        H('tool-claw',x*2.8,.5,.2,.18,.2,.18,orange);
        R('leg',[x,.35,0],[x*1.3,.14,0],.11,ink);}
      B('repair-panel',0,.82,.29,.5,.3,.06,orange);panelGrid(2,3,.335,.75,.13,.11);break;
    case 'seed-courier-explorer':
      deck(1.3,1.0,.07);B('explorer-body',0,.66,0,.6,.68,.44,light);
      S('visor-helmet',0,1.26,.04,.43,.35,.37,blue,'glass');
      for(const x of [-.27,.27]){R('arm',[x,.89,0],[x*1.85,.57,.22],.095,shell);
        C('boot',x,.2,.08,.27,.29,.31,ink);}
      B('seed-backpack',0,.69,-.39,.61,.6,.22,mint);
      for(let i=0;i<5;i++)C('seed-capsule',-.23+i*.115,.89,-.52,.13,.27,.13,brass);
      R('survey-pole',[.57,.45,.28],[.65,1.55,.28],.04,brass);S('pole-sensor',.65,1.58,.28,.12,.12,.12,orange,'glow');break;
    case 'terraced-pollinator-habitat':
      deck(1.95,1.55,.08);for(let i=0;i<4;i++){
        const y=.26+i*.29;B('habitat-terrace',0,y,-.48+i*.28,1.7-i*.26,.19,.43,mint);
        for(let j=0;j<5-i;j++) C('bee-tunnel',-.55+j*.26,y+.06,-.19+i*.28,.11,.15,.11,ink);}
      for(let i=0;i<9;i++){const x=-.76+i*.18;R('seeded-stalk',[x,.18,.5],[x,.52+(i%3)*.14,.57],.025,brass);
        S('flower-head',x,.54+(i%3)*.14,.57,.075,.055,.075,i%2?orange:light);}
      break;
    case 'moss-canyon-study-diorama':
      deck(1.94,1.5,.08);for(let i=0;i<6;i++){const x=-.79+i*.31;
        B('layered-stone-wall',x,.35+Math.abs(i-2.5)*.12,-.3,.28,.49+Math.abs(i-2.5)*.22,.71,shell);
        S('moss-cushion',x,.68+Math.abs(i-2.5)*.12,-.13,.2,.06,.25,mint);}
      for(let i=0;i<10;i++)S('river-pebble',-.85+i*.19,.2,.43+(i%3)*.09,.08,.05,.11,light);
      B('water-course',0,.15,.39,1.77,.02,.23,blue,'glass');break;
    case 'field-repair-cargo-trike':
      deck(2.2,1.2,.06);wheel(-.72,-.52,.29);wheel(.68,-.52,.29);wheel(.68,.48,.29);
      R('frame-spine',[-.7,.49,-.49],[.65,.51,-.49],.08,brass);
      R('steering-neck',[-.7,.5,-.52],[-.58,1.18,-.46],.06,ink);
      B('cargo-basket',.31,.78,.03,1.01,.44,.67,orange);
      for(let i=0;i<5;i++)B('basket-rib',-.06+i*.18,1.04,.03,.035,.22,.58,light);
      B('service-tool-roll',.28,1.14,.02,.78,.14,.4,shell);break;
    case 'aerodynamic-survey-buggy':
      deck(2.1,1.19,.06);
      for(const x of [-.71,.71])for(const z of [-.43,.43])wheel(x,z,.24);
      B('streamlined-hull',0,.72,0,1.48,.37,.71,light);B('nose-cone',.78,.63,0,.26,.19,.51,orange);
      B('solar-deck',-.2,.97,0,.83,.07,.61,ink);
      for(let i=0;i<5;i++)B('solar-trace',-.52+i*.16,1.011,0,.018,.015,.55,blue);
      R('survey-mast',[.15,.96,0],[.15,1.57,0],.045,brass);S('lidar-head',.15,1.61,0,.17,.13,.17,mint,'glass');break;
    case 'split-keyboard-cable-nest':
      deck(1.96,1.32,.09);feet();
      for(const s of [-1,1]){B('split-keyboard-shell',s*.48,.29,.04,.86,.2,.76,shell,'matte',[0,s*.13,0]);
        for(let i=0;i<4;i++)for(let j=0;j<5;j++)
          B('keycap',s*.48+(j-2)*.15,.421,-.25+i*.16,.115,.07,.115,i===0?orange:light,'ceramic');
        B('wrist-rest',s*.48,.16,.53,.82,.1,.19,ink,'rubber');}
      R('central-usb-cable',[0,.25,-.38],[0,.38,-.66],.045,brass);break;
    case 'solder-tip-indexing-station':
      deck(1.92,1.28,.085);feet();for(let i=0;i<10;i++){
        const x=-.76+i*.17;C('insulated-tip-bore',x,.28,-.09,.14,.19,.14,ink);
        C('metal-tip-head',x,.42,-.09,.07,.16,.07,brass,'metal');
        label(x,.21,.31,.12);}
      B('hot-tool-isolation-fence',0,.52,-.54,1.61,.38,.09,orange);
      for(let i=0;i<6;i++)B('warning-rib',-.63+i*.25,.55,-.48,.12,.035,.045,light);break;
    case 'cable-reel-matrix':
      deck(1.93,1.43,.085);feet();
      for(let i=0;i<3;i++)for(let j=0;j<2;j++){
        const x=-.57+i*.57,z=-.31+j*.56;
        C('spool-hub',x,.36,z,.31,.32,.31,shell);
        C('spool-top-flange',x,.54,z,.45,.08,.45,ink);
        C('reel-axis-indicator',x,.59,z,.1,.025,.1,i%2?mint:orange);
        T('coiled-cord',x,.58,z,.48,.48,.1,brass);}
      B('wire-entry-comb',0,.2,.62,1.62,.17,.09,orange);break;
    case 'faceted-shadow-lantern':
      deck(1.48,1.48,.08);for(let i=0;i<10;i++){const a=i*Math.PI/5;
        R('faceted-rib',[Math.cos(a)*.67,.14,Math.sin(a)*.67],
          [Math.cos(a+.23)*.3,1.45,Math.sin(a+.23)*.3],.045,i%2?brass:light);}
      C('lower-ten-sided-band',0,.19,0,1.42,.13,1.42,ink);
      C('top-crown',0,1.45,0,.72,.13,.72,brass);
      S('diffuser',0,.79,0,.36,.51,.36,glass,'glass');for(let i=0;i<7;i++){
        C('shadow-aperture-gem',Math.cos(i)*.43,.52+i*.09,Math.sin(i)*.43,.1,.08,.1,mint);}
      break;
    case 'tessellated-relief-mosaic':
      B('modular-wall-ground',0,.19,0,1.98,.25,1.42,ink);for(let i=0;i<5;i++)for(let j=0;j<4;j++){
        const x=-.78+i*.39,z=-.53+j*.35;
        H('faceted-tile',x,.41,z,.36,.15,.32,(i+j)%3===0?mint:(i+j)%3===1?brass:light);
        C('inset-mosaic-pip',x,.5,z,.11,.025,.11,ink);}
      rivets([-.92,.92],.64,.4);break;
    case 'tea-sachet-gravity-ladder':
      deck(1.6,1.25,.065);scaffold(.67,1.37);for(let i=0;i<5;i++){
        B('angled-sachet-magazine',0,.31+i*.23,-.1+i*.025,1.12,.11,.46,shell,'matte',[-.13,0,0]);
        for(let j=0;j<3;j++)B('sachet-label',-.37+j*.37,.36+i*.23,.19,.27,.065,.025,i%2?mint:orange);}
      B('pull-access-tray',0,.17,.48,1.15,.12,.32,light);break;
    case 'coffee-filter-drying-mast':
      deck(1.6,1.32,.09);C('central-mast',0,.77,-.14,.19,1.25,.19,brass,'metal');
      for(let i=0;i<5;i++){const y=.42+i*.24;
        R('cantilevered-drying-arm',[0,y,-.14],[i%2?.68:-.68,y,.24],.047,brass);
        B('drip-saucer',i%2?.68:-.68,y-.11,.24,.38,.045,.31,light);}
      for(let i=0;i<7;i++)B('filter-spacing-slat',-.59+i*.19,.16,.49,.045,.08,.21,mint);
      B('catch-tray',0,.12,.47,1.28,.08,.34,ink);break;
    case 'kinetic-facade-study-panel':
      B('structural-backframe',0,.85,-.23,1.86,1.67,.12,ink);for(let i=0;i<4;i++)for(let j=0;j<5;j++){
        const x=-.65+j*.33,y=.31+i*.33;
        B('rotating-facade-fin',x,y,.05,.27,.26,.045,(i+j)%2?mint:light,'anodized',[0,(j%3-1)*.35,0]);
        C('pivot-axle',x,y,.095,.06,.1,.06,brass);}
      for(const x of [-.89,.89])R('perimeter-brace',[x,.08,-.23],[x,1.67,-.23],.05,brass);break;
    case 'rainscreen-breeze-block':
      B('base-sill',0,.11,0,1.95,.22,.72,ink);for(let i=0;i<4;i++)for(let j=0;j<5;j++){
        const x=-.72+j*.36,y=.4+i*.35;
        H('breathable-hex-frame',x,y,0,.31,.17,.3,light);
        B('diagonal-shading-fin',x,y,.23,.27,.045,.09,(i+j)%2?mint:orange,'matte',[0,0,.55]);}
      B('header-beam',0,1.86,0,1.95,.16,.72,ink);break;
    case 'modular-rain-garden-curb':
      deck(1.98,1.33,.065);for(let i=0;i<5;i++){const x=-.78+i*.39;
        B('curb-block',x,.29,-.48,.36,.37,.36,light);
        B('permeable-sieve',x,.15,-.08,.31,.04,.32,shell);
        for(let j=0;j<3;j++)R('grass-blade',[x+(j-1)*.08,.23,.39],
          [x+(j-1)*.11,.61+(j%2)*.12,.38],.021,mint);}
      B('stormwater-path',0,.12,.6,1.8,.035,.21,blue,'glass');break;
    case 'micro-mobility-parking-beacon':
      deck(1.9,1.18,.08);for(let i=0;i<3;i++){
        const x=-.6+i*.6;R('parking-arch-left',[x-.18,.19,.26],[x-.18,.72,.26],.06,brass);
        R('parking-arch-right',[x+.18,.19,.26],[x+.18,.72,.26],.06,brass);
        R('parking-lock-crossbar',[x-.18,.72,.26],[x+.18,.72,.26],.06,brass);
        B('bay-number',x,.16,.61,.3,.045,.12,mint);}
      B('beacon-post',.77,.81,-.4,.2,1.36,.2,ink);
      S('status-lamp',.77,1.55,-.4,.17,.16,.17,orange,'glow');panelGrid(2,2,-.21,.88,.15,.18);break;
    case 'thread-gauge-swatch-rack':
      deck(1.98,1.23,.085);feet();for(let i=0;i<12;i++){const x=-.81+i*.145;
        B('thread-profile-coupon',x,.45,-.07,.11,.49,.29,i%3?light:brass);
        for(let j=0;j<4;j++)B('pitch-tooth',x,.28+j*.10,.1,.12,.04,.06,ink);}
      B('reference-scale-strip',0,.18,.49,1.71,.13,.2,shell);teeth(12,1.65,.27,.6,orange);break;
    case 'pegboard-fastener-cassette':
      B('pegboard-carrier',0,.95,-.48,1.93,1.74,.13,ink);panelGrid(4,6,-.35,.33,.28,.35);
      for(let i=0;i<3;i++){const x=-.57+i*.57;
        B('cassette-drawer',x,.54,.23,.48,.43,.48,shell);
        B('front-grip',x,.54,.49,.28,.09,.09,brass);label(x,.76,.49);}
      B('top-rail',0,1.83,-.35,1.91,.17,.24,light);break;
    case 'angled-hex-key-rail':
      deck(1.89,1.18,.09);feet();
      for(let i=0;i<9;i++){const x=-.73+i*.18;
        H('key-guide-collar',x,.36,-.13,.15,.18,.15,ink);
        R('hex-key-long-leg',[x,.38,-.13],[x,.54+(i%5)*.12,-.13],.033,brass);
        R('hex-key-bent-tip',[x,.54+(i%5)*.12,-.13],[x+.11,.54+(i%5)*.12,-.13],.033,brass);}
      B('size-index-rail',0,.21,.35,1.64,.11,.19,orange);teeth(9,1.45,.3,.45);break;
    case 'climbing-hold-route-diorama':
      deck(1.7,1.34,.08);B('tilted-bouldering-panel',0,.98,-.24,1.46,1.63,.2,shell,'matte',[-.12,0,0]);
      for(let i=0;i<5;i++)for(let j=0;j<4;j++){const x=-.55+j*.36,y=.39+i*.27;
        S('sculpted-hold',x,y,-.04+(j%2)*.04,.14,.065,.13,(i+j)%3?orange:mint);
        C('mounting-bolt',x,y,-.005,.046,.04,.046,ink,'metal',[Math.PI/2,0,0]);}
      B('landing-mat',0,.13,.58,1.6,.13,.41,light);break;
    case 'cycling-medal-display-track':
      deck(1.78,1.21,.09);B('slanted-display-back',0,.91,-.36,1.6,1.39,.14,shell,'wood',[-.11,0,0]);
      for(let i=0;i<5;i++){const x=-.61+i*.3;
        C('hanger-button',x,1.22,-.20,.1,.08,.1,brass);
        R('medal-ribbon-left',[x,1.2,-.18],[x-.11,.76,-.03],.026,i%2?orange:mint);
        R('medal-ribbon-right',[x,1.2,-.18],[x+.11,.76,-.03],.026,i%2?orange:mint);
        C('original-medallion',x,.71,-.02,.22,.06,.22,brass,'metal',[Math.PI/2,0,0]);}
      B('name-engraving-surface',0,.27,.48,1.39,.09,.12,light);break;
    case 'lunar-specimen-vault':
      deck(1.88,1.38,.08);for(let i=0;i<3;i++){const x=-.54+i*.54;
        C('cryovial-pedestal',x,.29,0,.37,.34,.37,ink);
        C('sealed-specimen-cylinder',x,.82,0,.25,.72,.25,glass,'glass');
        C('thermal-ring',x,.64,0,.39,.07,.39,orange);
        S('alien-botanical-sample',x,.87,0,.1,.24,.1,mint,'glow');}
      B('specimen-bulkhead',0,1.3,-.38,1.65,.25,.2,shell);
      panelGrid(2,5,.46,.32,.28,.16);break;
    case 'bioluminescent-sonar-buoy':
      deck(1.83,1.38,.07);C('pressure-rated-looking-housing',0,.77,0,1.14,.99,1.14,shell);
      C('central-light-diffuser',0,1.22,0,.73,.24,.73,glass,'glass');
      for(let i=0;i<8;i++){const a=i*Math.PI/4;
        R('sonar-stabilizer',[Math.cos(a)*.5,.46,Math.sin(a)*.5],
          [Math.cos(a)*.82,.22,Math.sin(a)*.82],.053,brass);
        S('bioluminescent-status',Math.cos(a)*.64,.71,Math.sin(a)*.64,.10,.08,.1,mint,'glow');}
      R('antenna',[0,1.27,0],[0,1.76,0],.055,ink);
      S('antenna-tip',0,1.81,0,.12,.12,.12,orange,'glow');break;
    case 'camera-battery-organizer':
      deck(1.75,1.3,.09);feet();for(let i=0;i<3;i++)for(let j=0;j<2;j++){
        const x=-.51+i*.51,z=-.26+j*.45;
        B('camera-battery-pocket',x,.31,z,.39,.33,.33,ink);
        B('removable-looking-spacer',x,.5,z,.31,.055,.21,shell);
        C('polarity-marker',x-.13,.54,z-.10,.05,.03,.05,i%2?mint:orange);
      }
      B('front-label-bank',0,.24,.6,1.48,.09,.15,light);slots('vent',[-.58,-.35,-.12,.12,.35,.58],-.59,.2);break;
    case 'label-front-parts-bin':
      deck(1.89,1.38,.07);feet();for(let i=0;i<3;i++){const x=-.55+i*.55;
        B('modular-bin-chassis',x,.44,-.11,.5,.66,.65,shell);
        B('front-lip',x,.22,.26,.51,.13,.16,orange);
        label(x,.5,.29,.37);
        for(let j=0;j<3;j++)B('divider-edge',x+(j-1)*.13,.66,-.13,.055,.17,.5,light);
      }B('dovetail-guide-representation',0,.13,.61,1.72,.09,.1,brass);break;
    default: throw new Error('Unmodeled V1.5 design '+meta.slug);
  }
  // Every asset has distinct authored main components and secondary finishes.
  const root=buildRecipe({title:meta.title,dimensions:meta.dimensions_m,parts});
  root.userData={assetId:meta.id,sourceKind:'original-procedural',
    geometryRevision:'1.5.0',manufacturingStatus:'visual-only',
    cadPath:meta.cad_path||null,designKey:meta.slug,authoredPartCount:parts.length};
  return root;
}