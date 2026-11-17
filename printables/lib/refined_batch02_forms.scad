// SPDX-License-Identifier: MIT
// Overseas detail refinement batch 02: 20 distinct CAD profiles, millimeters / Z-up.
// Passive, original, unverified designs. No electrical, food-contact or mechanical safety claim.
$fn=56;
eps=0.06;
module rr(w,d,h,r=5){ hull() for(x=[-w/2+r,w/2-r],y=[-d/2+r,d/2-r]) translate([x,y,0]) cylinder(r=r,h=h,$fn=22); }
module annulus(ro,ri,h){ difference(){cylinder(r=ro,h=h);translate([0,0,-eps])cylinder(r=ri,h=h+eps*2);} }
module ellipse_foot(w,d,h){scale([w/d,1,1]) cylinder(d=d,h=h,$fn=84);}
module beam(a,b,r=3){hull(){translate(a)sphere(r=r,$fn=22);translate(b)sphere(r=r,$fn=22);}}
module star2d(R=7,r=3.5,n=5){polygon([for(i=[0:2*n-1])let(a=i*180/n-90,rad=i%2? r:R)[rad*cos(a),rad*sin(a)]]);}
module radial_hole(radius,z,angle,r=4){rotate([0,0,angle])translate([0,-radius,z])rotate([90,0,0])cylinder(r=r,h=15,center=true,$fn=24);}
module tree_hole(radius,z,angle){rotate([0,0,angle])translate([0,-radius,z])rotate([90,0,0])linear_extrude(height=15,center=true)polygon([[-5,-9],[0,10],[5,-9],[2,-9],[2,-12],[-2,-12],[-2,-9]]);}
module panel_with_rims(w,h,wall=3.3){union(){annulus(w/2-1.7,w/2-1.7-wall,h-2.2);for(z=[0,h-4])translate([0,0,z])annulus(w/2,w/2-wall,4);}}
module gable(width,depth,rise){rotate([90,0,0])linear_extrude(height=depth,center=true,convexity=6)polygon([[-width/2,0],[width/2,0],[0,rise]]);}
module name_panel(w,d,h,legend="CUSTOM",font_size=17){
  union(){rr(w,d,h-2,5);translate([0,0,h-2-eps])linear_extrude(height=2+eps)text(legend,size=font_size,halign="center",valign="center",font="Liberation Sans:style=Bold");}
}
module product_star_lightbox(w=90,d=90,h=116,wall=3.4){
  assert(abs(w-d)<.01 && wall>=2.8);
  difference(){panel_with_rims(w,h,wall);
    for(k=[0:2],j=[0:7])rotate([0,0,j*45+k*8])translate([0,-w/2,27+k*29])rotate([90,0,0])linear_extrude(height=15,center=true)star2d(6.3,3.1,5);
    for(a=[22.5:45:337.5])radial_hole(w/2-1,13,a,1.7);
  }
}
module product_forest_lantern(w=93,d=93,h=120,wall=3.4){
  assert(abs(w-d)<.01 && wall>=2.8);
  difference(){panel_with_rims(w,h,wall);
    for(k=[0:1],j=[0:9])tree_hole(w/2-1,32+k*44,j*36+k*18);
    for(a=[0:45:315])radial_hole(w/2-1,108,a,1.7);
  }
}
module product_arch_nightlight(w=96,d=96,h=124,wall=7){
  assert(w>=80 && d>=65 && h>=105 && wall>=6);
  union(){
    // Two arch facades and side rails: open front/back and no light electronics.
    for(y=[-d/2+6,d/2-6])translate([0,y,0])rotate([90,0,0])linear_extrude(height=12,center=true)
      translate([-w/2,0])difference(){union(){square([w, h-w/2],center=false);translate([w/2,h-w/2])circle(r=w/2,$fn=84);} 
        translate([wall,wall])union(){square([w-2*wall,h-w/2-wall],center=false);translate([w/2,h-w/2])circle(r=w/2-wall,$fn=84);} }
    // exact floor 0; rails are thick and connect front and rear arches
    for(x=[wall/2,w-wall/2])translate([x-w/2,0,4])cube([wall,d,8],center=true);
  }
}
module product_cloud_whale(w=92,d=80,h=125){
  union(){ellipse_foot(w,d,7);
    translate([0,0,7])cylinder(r1=15,r2=11,h=56,$fn=18);
    translate([0,0,78])scale([1.55,.81,.75])sphere(r=24,$fn=50);
    translate([-24,0,80])scale([1,.8,.8])sphere(r=20,$fn=36);
    for(s=[-1,1]){
      translate([25,s*12,75])rotate([0,-20,s*19])scale([.8,.38,.18])sphere(r=17,$fn=36);
      beam([34,s*10,83],[41,s*17,102],4);
    }
    translate([-8,0,98])scale([.3,.65,.65])sphere(r=14);
    translate([-26,-16,83])sphere(r=2.7);
    beam([-4,0,97],[-4,0,h-4],3.2);translate([-4,0,h-4])sphere(r=4);
  }
}
module product_sleepy_owl(w=95,d=83,h=129){
  union(){ellipse_foot(w,d,7);
    translate([0,0,46.5])scale([.73,.68,1.12])sphere(r=36,$fn=48);
    translate([0,-1,87])scale([1,.85,.85])sphere(r=34,$fn=52);
    for(s=[-1,1]){
      translate([s*23,0,99])cylinder(r1=10,r2=1,h=h-99,$fn=30);
      translate([s*28,0,52])rotate([0,s*14,0])scale([.38,.72,.85])sphere(r=26,$fn=40);
      translate([s*13,-27,89])scale([1.0,.55,.28])sphere(r=10,$fn=30);
      beam([s*11,-29,90],[s*17,-29,89],2);
      translate([s*19,-16,11.5])scale([1.0,1.2,.65])sphere(r=8,$fn=24);
    }
    translate([0,-29,77])rotate([90,0,0])cylinder(r1=6,r2=1,h=11,$fn=3);
    for(s=[-1,1])beam([s*10,-26,76],[s*15,-24,74],2.0);
  }
}
module product_alpine_cabin(w=136,d=93,h=79){
  union(){rr(w,d,5,4);
    translate([0,0,29.5])cube([84,56,49],center=true);
    translate([0,0,54])gable(105,68,h-54);
    // Entrance and raised trim overlap the chalet wall.
    translate([0,-29,21])cube([17,7,33],center=true);
    for(x=[-30,30]){
      translate([x,-29,36])cube([16,7,16],center=true);
      for(z=[29,36,43])translate([x,-33,z])cube([14,1.5,1.2],center=true);
    }
    for(y=[-28,28],x=[-40,40])translate([x,y,6])cylinder(r=4,h=8);
    translate([28,8,54])cube([9,9,17],center=true);
    for(x=[-55,55])translate([x,29,5])cylinder(r1=7,r2=0,h=26,$fn=6);
  }
}
module product_retro_station(w=142,d=99,h=87){
  union(){rr(w,d,5,4);
    translate([0,-18,5])cube([w-10,37,10],center=true);
    for(x=[-55,55])for(y=[-22,4])translate([x,y,5])cube([4,6,5],center=true);
    for(x=[-57,57]){
      translate([x,-19,45])cube([5,5,72],center=true);
      beam([x,-19,67],[x-(x>0?18:-18),-19,81],2.4);
    }
    translate([0,-17,h-4])cube([w-8,57,8],center=true);
    translate([0,-16,14])cube([56,16,5],center=true);
    for(x=[-20,20])translate([x,-16,9])cube([5,5,12],center=true);
    for(x=[-52:14:52])translate([x,33,6])cube([9,28,3],center=true);
    translate([0,-45,5])cube([w-8,2,2],center=true);
  }
}
module product_spool_organizer(w=139,d=96,h=84){
  union(){rr(w,d,6,6);
    for(y=[-23,23],x=[-51,-17,17,51]){
      translate([x,y,6])cylinder(r1=5.4,r2=3.8,h=h-8,$fn=24);
      translate([x,y,h-3])cylinder(r1=3.8,r2=2.8,h=3,$fn=12);
      translate([x,y,6])cylinder(r=9,h=3);
    }
    translate([0,d/2-5,15])cube([w-12,6,18],center=true);
    for(x=[-55:22:55])translate([x,d/2-8,15])cylinder(r=2.6,h=2,$fn=12);
  }
}
module product_watch_cradle(w=113,d=103,h=89){
  union(){rr(w,d,7,6);
    for(x=[-34,34]){
      beam([x,-12,10],[x,10,h-18],6);
      translate([x,11,h-19])rotate([0,90,0])cylinder(r=6,h=8,center=true);
      translate([x,-23,7])cube([13,28,6],center=true);
    }
    translate([0,12,h-19])rotate([0,90,0])cylinder(r=15,h=69,center=true,$fn=72);
    translate([0,12,h-19])rotate([0,90,0])cylinder(r=12,h=72,center=true,$fn=64);
    translate([0,-19,7])cube([70,8,6],center=true);
    for(x=[-43,43])translate([x,29,7])cylinder(r=3.8,h=5);
    translate([0,12,h-6])scale([1.3,.3,1])sphere(r=6);
  }
}
module product_tiered_riser(w=119,d=109,h=97){
  union(){rr(w,d,6,5);
    for(i=[0:2]){
      z=24+i*30; depth=d-17-i*20;
      translate([0,-i*9,z-5])rr(w-10-i*15,depth,5,4);
      for(x=[-(w-22-i*15)/2,(w-22-i*15)/2],y=[-depth/2+8,depth/2-8])
        translate([x,y,6])cylinder(r=5,h=z-6);
    }
    // Spine to full catalogue height; carved top rail is supported by third deck.
    translate([0,11,h-12.5])cube([w-40,7,25],center=true);
    translate([0,11,h-2])cube([w-38,7,4],center=true);
  }
}
module product_controller_cradle(w=135,d=100,h=74){
  union(){rr(w,d,7,7);
    for(s=[-1,1]){
      beam([s*45,-26,9],[s*45,19,h-9],6.5);
      beam([s*45,-27,9],[s*45,-34,30],6.5);
      translate([s*45,-34,29])sphere(r=7.5,$fn=28);
      translate([s*45,19,h-6])sphere(r=6,$fn=28);
      translate([s*45,0,7])cube([15,45,6],center=true);
    }
    translate([0,30,7])cube([101,7,14],center=true);
  }
}
module product_dice_tray(w=141,d=106,h=82,wall=4){
  union(){difference(){rr(w,d,26,9);translate([0,0,5])rr(w-2*wall,d-2*wall,24,6);}
    // Corner drop tower remains joined to tray: display-only gravity path untested.
    translate([w/2-19,d/2-19,22])difference(){cylinder(r=17,h=h-22,$fn=8);translate([0,0,4])cylinder(r=12.6,h=h-20,$fn=8);}
    for(z=[33,52,69])translate([w/2-19,d/2-19,z])rotate([0,0,z])cube([30,12,3],center=true);
    for(x=[-w/2+16,w/2-16])translate([x,-d/2+4,25])sphere(r=3.8);
    translate([0,0,5])cube([w-25,2,1],center=true);
  }
}
module product_token_sorter(w=144,d=109,h=86,wall=3.5){
  union(){difference(){rr(w,d,40,7);for(x=[-47,0,47],y=[-25,25])translate([x,y,5])rr(40,42,39,4);}
    // Integrated carry spine (not a detachable handle) raises the silhouette.
    translate([0,0,40])cube([15,85,10],center=true);
    for(y=[-37,37])beam([0,y,39],[0,y,h-6],4.5);
    beam([0,-37,h-7],[0,37,h-7],5); translate([0,0,h-7])sphere(r=7);
    for(x=[-47,0,47])translate([x,-d/2+4,40])cube([19,7,7],center=true);
  }
}
module product_arc_earrings(w=112,d=82,h=99){
  difference(){union(){rr(w,d,6,6);
    for(i=[0:19]){
      x0=-44+i*88/20; x1=-44+(i+1)*88/20;
      beam([x0,0,14+(h-22)*(1-pow(x0/44,2))],[x1,0,14+(h-22)*(1-pow(x1/44,2))],4.6);
    }
    for(x=[-44,44])beam([x,0,5],[x,0,16],4.6);
    translate([0,0,h-4.6])sphere(r=4.6);
    for(x=[-50:20:50])translate([x,31,6])cube([2,4,2],center=true);
  }
    // Real 2.8 mm earring-hook bores along the curved rail.
    for(i=[0:9]){
      x=-35+i*70/9;z=14+(h-22)*(1-pow(x/44,2));
      translate([x,0,z])rotate([90,0,0])cylinder(r=1.4,h=16,center=true,$fn=16);
    }
  }
}
module product_ring_tower(w=115,d=85,h=103){
  union(){ellipse_foot(w,d,7);
    for(i=[0:4]){
      x=i==0?0:cos(i*90)*35;y=i==0?0:sin(i*90)*24;
      height=i==0?h-7:50+i*7;
      translate([x,y,6.5])cylinder(r1=i==0?12:9,r2=2.2,h=height+0.5,$fn=48);
      translate([x,y,7])cylinder(r=13,h=3,$fn=48);
    }
    for(i=[0:7])rotate([0,0,i*45])translate([w/2-23,0,6])sphere(r=2.5);
  }
}
module product_cactus_planter(w=110,d=110,h=104,wall=3.7){
  assert(abs(w-d)<.01 && wall>=3 && h>85);
  difference(){union(){cylinder(r1=w/2-12,r2=w/2,h=h-3,$fn=12);
    translate([0,0,h-5])cylinder(r=w/2,h=5,$fn=12);}
    translate([0,0,4.5])cylinder(r1=w/2-12-wall,r2=w/2-wall,h=h+4,$fn=12);
    for(x=[-22,0,22])translate([x,0,-eps])cylinder(r=3.4,h=6,$fn=28);
  }
}
module product_nameplate(w=135,d=67,h=9,label="CUSTOM"){
  difference(){name_panel(w,d,h,label,18);
    for(x=[-w/2+9,w/2-9])translate([x,0,-eps])cylinder(r=2.1,h=h+2*eps,$fn=20);
  }
}
module product_house_number(w=145,d=71,h=11,label="108"){
  difference(){union(){rr(w,d,h-2,6);
    translate([0,0,h-2-eps])linear_extrude(height=2+eps)text(label,size=35,halign="center",valign="center",font="Liberation Sans:style=Bold");
    for(y=[-d/2+4,d/2-4])translate([0,y,h-1.9])cube([w-20,2,2],center=true);
  }for(x=[-w/2+10,w/2-10])translate([x,0,-eps])cylinder(r=2.8,h=h+2*eps,$fn=24);}
}
module product_celestial_medallion(w=75,d=75,h=9){
  assert(w==d);
  difference(){union(){cylinder(d=w,h=5,$fn=12);
    translate([0,0,5-eps])linear_extrude(height=4+eps)star2d(23,10,8);
    translate([0,0,5-eps])difference(){cylinder(r=w/2-5,h=2.4,$fn=96);translate([0,0,-eps])cylinder(r=w/2-7.2,h=2.4+2*eps,$fn=96);}
    for(a=[0:45:315])rotate([0,0,a])translate([29,0,5])cylinder(r=2,h=2.5,$fn=16);
  }
    translate([0,d/2-8,-eps])cylinder(r=3.4,h=h+2*eps,$fn=32);
  }
}
module product_alchemist_brooch(w=84,d=84,h=12){
  assert(w==d);
  difference(){union(){cylinder(d=w,h=6,$fn=12);
    translate([0,0,6-eps])linear_extrude(height=3.5+eps)star2d(29,19,6);
    translate([0,0,9-eps])linear_extrude(height=3+eps)polygon([[-9,-16],[9,-16],[5,0],[5,16],[-5,16],[-5,0]]);
    for(a=[0:60:300])rotate([0,0,a])translate([34,0,6-eps])cylinder(r=2.5,h=2.4,$fn=18);
  }translate([0,d/2-9,-eps])cylinder(r=3,h=h+2*eps,$fn=24);}
}
// Keep original v1.3 family / variant interface for compatibility with tooling.
module refined_batch02_form(slug="",family="",variant=0,w=90,d=90,h=90,label="CUSTOM"){
  assert(w>40 && d>40 && h>8 && variant>0,"Invalid SKU parameters");
  if(slug=="geometric-star-lightbox") product_star_lightbox(w,d,h);
  else if(slug=="forest-shadow-lantern") product_forest_lantern(w,d,h);
  else if(slug=="minimal-arch-nightlight") product_arch_nightlight(w,d,h);
  else if(slug=="cloud-whale-totem") product_cloud_whale(w,d,h);
  else if(slug=="sleepy-owl-guardian") product_sleepy_owl(w,d,h);
  else if(slug=="alpine-cabin-miniature") product_alpine_cabin(w,d,h);
  else if(slug=="retro-station-platform") product_retro_station(w,d,h);
  else if(slug=="craft-spool-organizer") product_spool_organizer(w,d,h);
  else if(slug=="watch-display-cradle") product_watch_cradle(w,d,h);
  else if(slug=="miniature-tiered-riser") product_tiered_riser(w,d,h);
  else if(slug=="universal-controller-cradle") product_controller_cradle(w,d,h);
  else if(slug=="tabletop-dice-tray") product_dice_tray(w,d,h);
  else if(slug=="boardgame-token-sorter") product_token_sorter(w,d,h);
  else if(slug=="arc-earring-display") product_arc_earrings(w,d,h);
  else if(slug=="ring-cone-tower") product_ring_tower(w,d,h);
  else if(slug=="geo-cactus-planter") product_cactus_planter(w,d,h);
  else if(slug=="custom-desk-nameplate") product_nameplate(w,d,h,label);
  else if(slug=="house-number-plaque") product_house_number(w,d,h,label);
  else if(slug=="celestial-guild-medallion") product_celestial_medallion(w,d,h);
  else if(slug=="alchemist-costume-brooch") product_alchemist_brooch(w,d,h);
  else assert(false,str("Unknown batch-02 SKU ",slug));
}
