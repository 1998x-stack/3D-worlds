// SPDX-License-Identifier: MIT
// Overseas print-commerce detail refinement batch 03.
// Twenty original parametric CAD forms; mm / Z-up. Geometry only, unverified for use.
$fn = 56;
b3_eps = 0.06;

module b3_rr(w,d,h,r=5) {
  hull() for (x=[-w/2+r,w/2-r], y=[-d/2+r,d/2-r])
    translate([x,y,0]) cylinder(r=r,h=h,$fn=24);
}
module b3_beam(a,b,r=3) {
  hull() { translate(a) sphere(r=r,$fn=20); translate(b) sphere(r=r,$fn=20); }
}
module b3_badge_outline(w,d,h) {
  linear_extrude(height=h) polygon([
    [-w/2,d/2],[w/2,d/2],[w/2,d/8],[w/3,-d/3],
    [0,-d/2],[-w/3,-d/3],[-w/2,d/8]
  ]);
}
module b3_star(R=8,r=3.5,n=5) {
  polygon([for(i=[0:2*n-1]) let(a=i*180/n-90, rr=i%2?r:R) [rr*cos(a),rr*sin(a)]]);
}
module b3_ring(ro,ri,h) {
  difference() { cylinder(r=ro,h=h); translate([0,0,-b3_eps]) cylinder(r=ri,h=h+2*b3_eps); }
}

module b3_lunar_fox(w=98,d=86,h=133) {
  union() {
    b3_rr(w,d,6,10);
    hull() {
      translate([0,2,28]) scale([24,18,25]) sphere(r=1,$fn=40);
      translate([0,-1,50]) scale([23,17,24]) sphere(r=1,$fn=40);
    }
    hull() {
      translate([0,-1,52]) scale([20,18,20]) sphere(r=1,$fn=36);
      translate([0,-2,73]) scale([27,22,25]) sphere(r=1,$fn=44);
    }
    translate([0,-19,68]) scale([15,12,10]) sphere(r=1,$fn=32);
    translate([0,-28,65]) scale([8,7,6]) sphere(r=1,$fn=28);
    for(s=[-1,1]) {
      translate([s*17,-2,90]) cylinder(r1=8,r2=1.2,h=43,$fn=28);
      translate([s*17,-3,89]) scale([8,5,6]) sphere(r=1,$fn=24);
      translate([s*13,-20,78]) scale([4,2,4]) sphere(r=1,$fn=20);
      translate([s*10,-23,78]) sphere(r=2.2,$fn=20);
      b3_beam([s*17,8,23],[s*28,22,36],5);
    }
    for(i=[0:5]) translate([-20+i*8,17,32+i%2*3]) sphere(r=2.4,$fn=18);
    // Low, integrated tail curl joins the haunch and base.
    b3_beam([15,12,18],[32,18,30],5);
    b3_beam([32,18,30],[25,25,43],4);
  }
}

module b3_garden_robot(w=101,d=89,h=137) {
  union() {
    b3_rr(w,d,6,9);
    for(s=[-1,1]) {
      translate([s*29,-12,5.5]) b3_rr(18,18,15,4);
      translate([s*29,-12,17]) b3_rr(20,20,5,4);
      translate([s*29,0,22]) b3_beam([0,0,0],[0,0,28],5);
      translate([s*29,0,33]) cube([17,17,18],center=true);
      translate([s*40,0,58]) rotate([0,0,s*12]) cylinder(r=5.5,h=30,center=true);
      b3_beam([s*25,0,58],[s*36,0,58],6);
      translate([s*40,0,43]) sphere(r=6,$fn=24);
    }
    translate([0,0,48]) b3_rr(54,39,45,7);
    translate([0,-20,53]) b3_rr(36,3,26,2);
    for(x=[-12,0,12]) translate([x,-22,55]) cylinder(r=2.8,h=4,center=true);
    translate([0,0,88]) b3_rr(61,48,31,8);
    translate([0,-24,92]) b3_rr(40,3,16,3);
    for(s=[-1,1]) {
      translate([s*13,-27,93]) sphere(r=4.5,$fn=20);
      translate([s*13,-27,93]) sphere(r=2.1,$fn=20);
    }
    translate([0,0,109]) cylinder(r1=3,r2=1.5,h=28,$fn=20);
    translate([0,0,137-3]) sphere(r=3,$fn=20);
    for(i=[0:3]) translate([-9+i*6,-18.5,46]) cylinder(r=1.6,h=5,$fn=16);
    translate([0,20,52]) b3_rr(35,8,14,3);
  }
}

module b3_mountain_spirit(w=104,d=92,h=141) {
  union() {
    b3_rr(w,d,6,10);
    hull() {
      translate([0,0,23]) scale([27,23,22]) sphere(r=1,$fn=36);
      translate([0,0,63]) scale([31,25,42]) sphere(r=1,$fn=44);
    }
    translate([0,-2,81]) scale([25,21,25]) sphere(r=1,$fn=40);
    for(s=[-1,1]) {
      translate([s*23,1,99]) cylinder(r1=7,r2=1,h=42,$fn=24);
      translate([s*24,-19,63]) scale([9,8,15]) sphere(r=1,$fn=24);
      b3_beam([s*12,-20,70],[s*16,-25,84],3.2);
      translate([s*15,-23,86]) sphere(r=3.2,$fn=20);
    }
    translate([0,-20,79]) scale([10,7,7]) sphere(r=1,$fn=24);
    translate([0,-27,77]) cube([5,2,2],center=true);
    for(i=[0:6]) rotate([0,0,i*51]) translate([0,18,14+i%2*4]) sphere(r=3,$fn=18);
    // Crystalline shoulder fins remain fused to the central mass.
    for(s=[-1,1]) b3_beam([s*21,9,40],[s*34,10,58],5);
  }
}

module b3_harbor_cargo(w=130,d=87,h=71) {
  union() {
    b3_rr(w,d,6,5);
    // Three ribbed cargo modules, each keyed into the quay slab.
    for(i=[0:2]) {
      x=-42+i*42;
      translate([x,-12,5.5]) b3_rr(36,43,25,2);
      for(j=[-2:2]) translate([x+j*6,-34,18]) cube([1.8,1.8,21],center=true);
      translate([x,-12,30]) b3_rr(36,43,3,1.5);
      for(y=[-29,5]) translate([x,y,31]) cylinder(r=1.7,h=3,$fn=12);
    }
    // Portal crane is a single rigid assembly, not loose floating pieces.
    for(x=[-51,51]) {
      translate([x,29,5.5]) cube([6,6,h-12],center=false);
      b3_beam([x,29,h-10],[x+(x>0?-8:8),20,h-5],3);
    }
    translate([-51,26,h-8]) cube([102,6,8],center=false);
    translate([0,26,28]) cylinder(r=2.4,h=35,$fn=18);
    translate([0,26,25]) cylinder(r1=4,r2=1.2,h=5,$fn=18);
    for(x=[-59,59]) for(y=[-34,34]) translate([x,y,5.5]) cylinder(r1=4,r2=2,h=10,$fn=16);
    translate([0,-40,7]) cube([100,2,3],center=true);
  }
}

module b3_desert_roadway(w=133,d=90,h=75) {
  union() {
    b3_rr(w,d,6,5);
    translate([0,-2,5.5]) b3_rr(w-10,27,3,2);
    for(i=[-4:4]) translate([i*13,-2,9]) cube([7,2,1.2],center=true);
    for(s=[-1,1]) {
      translate([s*36,20,11]) scale([1.3,1,0.55]) sphere(r=18,$fn=28);
      translate([s*39,20,15]) cylinder(r1=5,r2=2.8,h=25,$fn=20);
      translate([s*39,20,25]) cylinder(r=3,h=11,$fn=20);
      translate([s*39,20,31]) b3_beam([0,0,0],[s*9,0,0],2.8);
      translate([s*48,20,31]) cylinder(r=2.8,h=9,$fn=18);
    }
    // Roadside sign has a broad gusset that merges into the base.
    translate([-52,31,6]) cube([5,5,h-6],center=false);
    translate([-47.5,31,h-14]) cube([26,4,8],center=false);
    translate([-44,30.5,h-13]) cube([18,2,4],center=false);
    for(x=[-60:20:60]) translate([x,-19,6]) cube([2,2,2],center=true);
    translate([0,39,6]) b3_beam([-55,0,0],[55,0,0],2.5);
  }
}

module b3_urban_corner(w=139,d=96,h=83) {
  union() {
    b3_rr(w,d,6,5);
    translate([-36,15,5.5]) b3_rr(60,48,44,2);
    translate([-36,15,49]) b3_rr(60,48,4,2);
    for(x=[-58,-36,-14]) {
      translate([x,-10,25]) cube([12,3,20],center=true);
      translate([x,-12,25]) cube([8,1.5,15],center=true);
      translate([x,38,25]) cube([12,3,20],center=true);
    }
    translate([-36,-10,51]) cube([63,5,4],center=true);
    // Streetlight reaches the exact catalogue height and is braced at its foot.
    translate([49,20,5.5]) cylinder(r=3.2,h=h-15.5,$fn=20);
    b3_beam([49,20,h-12],[38,20,h-5],2.7);
    translate([37,20,h-4]) sphere(r=4,$fn=20);
    translate([49,20,12]) cylinder(r=6,h=4,$fn=20);
    translate([20,-30,5.5]) b3_rr(35,15,4.5,2);
    for(x=[7,18,29]) translate([x,-30,10]) cube([2,12,2],center=true);
    translate([40,-42,7]) cube([28,4,3],center=true);
    for(x=[-5:10:45]) translate([x,-43,6.5]) cube([5,2,3],center=true);
    translate([0,40,6]) cube([w-12,3,3],center=true);
  }
}

module b3_collectible_plinth(w=110,d=100,h=85) {
  union() {
    b3_rr(w,d,7,8);
    // Overlapped stepped pedestal: each tier penetrates the previous one.
    translate([0,0,6.5]) cylinder(d=58,h=44,$fn=64);
    translate([0,0,50]) cylinder(d1=58,d2=78,h=7,$fn=64);
    translate([0,0,56]) cylinder(d=84,h=7,$fn=72);
    translate([0,0,62]) cylinder(d=44,h=18,$fn=56);
    translate([0,0,h-6]) cylinder(d=68,h=6,$fn=72);
    for(i=[0:11]) rotate([0,0,i*30]) translate([29,0,24])
      cube([2.4,4.5,34],center=true);
    for(i=[0:7]) rotate([0,0,i*45]) translate([39,0,62])
      cylinder(r=2.4,h=9,$fn=16);
  }
}

module b3_eyewear_stand(w=122,d=112,h=101) {
  union() {
    b3_rr(w,d,7,9);
    for(s=[-1,1]) {
      b3_beam([s*39,0,5.5],[s*31,0,56],5);
      b3_beam([s*31,0,56],[s*18,0,75],4);
      b3_beam([s*18,0,75],[s*7,0,81],4);
      translate([s*40,-2,12]) b3_rr(16,22,6,3);
      // Temple rests are short, rounded horns behind the bridge.
      b3_beam([s*31,0,56],[s*53,26,65],3.4);
      translate([s*53,26,65]) sphere(r=3.4,$fn=18);
    }
    b3_beam([-18,0,81],[0,0,88],4);
    b3_beam([0,0,88],[18,0,81],4);
    translate([0,0,88]) b3_beam([-8,0,0],[8,0,0],4);
    for(i=[0:5]) translate([-40+i*16,-25,6.5]) cylinder(r=2,h=4,$fn=16);
    // Top bridge finial sets the 101 mm overall height.
    translate([0,0,h-4]) sphere(r=4,$fn=24);
    translate([0,0,7]) cylinder(r=2.4,h=h-7,$fn=20);
    b3_beam([0,0,88],[0,0,h-4],3.4);
  }
}

module b3_cartridge_rack(w=138,d=103,h=78) {
  union() {
    b3_rr(w,d,6,6);
    translate([0, d/2-5, 6]) b3_rr(w-8,8,h-12,2);
    for(i=[0:5]) {
      x=-51+i*20.4;
      translate([x,-(d-18)/2,5.5]) cube([3.2,d-18,h-16],center=false);
      translate([x-7,-d/2+10,6]) b3_rr(16,7,12,2);
      translate([x-7,-d/2+10,18]) cube([14,4,4],center=true);
      translate([x-7,10,8]) cube([14,2,2],center=true);
    }
    translate([0,d/2-8,h-4]) cube([w-16,6,8],center=true);
    for(i=[0:5]) translate([-50+i*20, d/2-9,h-5]) cube([10,1.5,3],center=true);
    translate([0,-d/2+3,6]) cube([w-16,4,3],center=true);
  }
}

module b3_bracelet_arch(w=118,d=88,h=107) {
  union() {
    b3_rr(w,d,6,8);
    for(s=[-1,1]) b3_beam([s*42,0,5.5],[s*42,0,17],5);
    for(i=[0:15]) {
      x=-42+i*84/15;
      z=17+(h-24)*(1-pow(x/42,2));
      if(i<15) {
        nx=-42+(i+1)*84/15;
        nz=17+(h-24)*(1-pow(nx/42,2));
        b3_beam([x,0,z],[nx,0,nz],4.2);
      }
    }
    for(i=[0:9]) {
      x=-36+i*8;
      z=17+(h-24)*(1-pow(x/42,2));
      b3_beam([x,0,z-1],[x,-7,z-8],2.2);
      translate([x,-7,z-8]) sphere(r=2.4,$fn=16);
    }
    translate([0,0,h-5]) sphere(r=4,$fn=20);
    translate([0,0,6]) cylinder(r=1.8,h=h-6,$fn=18);
    for(x=[-48,48]) translate([x,0,8]) cylinder(r=6,h=4,$fn=24);
  }
}

module b3_pendant_tray(w=121,d=91,h=111) {
  union() {
    difference() {
      b3_rr(w,d,16,6);
      for(x=[-38,0,38], y=[-25,25])
        translate([x,y,5]) b3_rr(32,34,13,3);
    }
    // Compartment separators are fused to both the tray floor and walls.
    for(x=[-19,19]) translate([x,0,8]) cube([3,d-14,14],center=true);
    translate([0,0,8]) cube([w-12,3,14],center=true);
    translate([0,d/2-8,14]) b3_rr(w-14,7,5,2);
    for(i=[0:5]) {
      x=-43+i*17.2;
      b3_beam([x,d/2-9,16],[x,d/2-9,h-10],2.8);
      translate([x,d/2-9,h-10]) sphere(r=3,$fn=18);
      translate([x,d/2-6,23]) sphere(r=2.5,$fn=16);
    }
    translate([0,d/2-9,h-8]) cube([w-20,5,5],center=true);
    translate([0,d/2-9,h-3.2]) sphere(r=3.2,$fn=20);
  }
}

module b3_modular_jewelry_plinth(w=124,d=94,h=115) {
  union() {
    b3_rr(w,d,6,7);
    translate([-35,0,5.5]) b3_rr(40,56,24,4);
    translate([0,0,5.5]) b3_rr(43,64,42,4);
    translate([36,0,5.5]) b3_rr(38,52,62,4);
    for(x=[-35,0,36]) {
      z=x< -10?30:x>10?68:48;
      translate([x,0,z-0.8]) cylinder(r=8,h=8.8,$fn=36);
      translate([x,0,z+8]) cylinder(r1=5,r2=2.2,h=14,$fn=36);
      translate([x,0,z+22]) sphere(r=2.5,$fn=16);
    }
    for(s=[-1,1]) {
      b3_beam([s*50,-24,8],[s*50,-24,34],3);
      translate([s*50,-24,34]) sphere(r=3,$fn=16);
    }
    translate([0,d/2-7,10]) cube([w-18,4,9],center=true);
    translate([0,0,6]) cylinder(r=2.8,h=h-6,$fn=20);
  }
}

module b3_bonsai_pot(w=116,d=116,h=112) {
  assert(abs(w-d)<0.01);
  difference() {
    union() {
      cylinder(d1=w-18,d2=w,h=h-4,$fn=96);
      translate([0,0,h-4]) b3_ring(w/2,w/2-5,4);
      for(i=[0:11]) rotate([0,0,i*30]) translate([w/2-4,0,4])
        cylinder(r=2.4,h=h-8,$fn=12);
      for(i=[0:3]) rotate([0,0,i*90]) translate([w/2-8,0,3]) cylinder(r=4,h=4,$fn=20);
    }
    translate([0,0,5]) cylinder(d1=w-34,d2=w-10,h=h+2,$fn=96);
    for(x=[-22,0,22],y=[-22,22]) translate([x,y,-b3_eps]) cylinder(r=3.2,h=8,$fn=24);
  }
}

module b3_herb_planter(w=119,d=119,h=116) {
  union() {
    difference() {
      b3_rr(w,d,78,8);
      translate([0,0,5]) b3_rr(w-8,d-8,80,5);
      for(x=[-25,0,25],y=[-25,25]) translate([x,y,-b3_eps]) cylinder(r=3,h=8,$fn=24);
    }
    for(x=[-26,0,26]) translate([x,-(d-12)/2,4.5]) cube([3,d-12,69],center=false);
    translate([0,d/2-8,72]) cube([w-18,4,5],center=true);
    // Integrated climbing trellis at the rear of the low planter body.
    for(x=[-42,-14,14,42]) {
      b3_beam([x,d/2-6,74],[x,d/2-6,h-5],2.8);
      translate([x,d/2-6,h-2.8]) sphere(r=2.8,$fn=20);
    }
    for(z=[88,101]) translate([0,d/2-6,z]) cube([w-24,4,3],center=true);
    for(x=[-42,-14,14,42]) translate([x,d/2-6,92]) sphere(r=2.2,$fn=16);
  }
}

module b3_wedding_place_card(w=140,d=69,h=10,label="TABLE") {
  union() {
    b3_rr(w,d,4,5);
    // Two continuous card guides form a slot; the rear support is inclined.
    translate([0,d/2-10,4]) rotate([18,0,0]) cube([w-18,5,h-4],center=true);
    translate([0,d/2-16,4]) cube([w-18,3,5],center=true);
    translate([0,d/2-7,h/2+2]) cube([w-24,4,h-4],center=true);
    translate([0,-d/2+14,4]) b3_rr(74,18,2,3);
    translate([0,-d/2+14,5.8]) linear_extrude(height=1.2)
      text(label,size=8,halign="center",valign="center",font="Liberation Sans:style=Bold");
    for(x=[-w/2+12,w/2-12]) translate([x,-d/2+5,4]) cylinder(r=2,h=2,$fn=16);
  }
}

module b3_anniversary_plaque(w=150,d=73,h=12,label="LOVE ALWAYS") {
  difference() {
    union() {
      b3_rr(w,d,8,6);
      difference() {
        translate([0,0,7.8]) b3_rr(w-6,d-6,h-7.8,5);
        translate([0,0,7.7]) b3_rr(w-12,d-12,h-7.5,3);
      }
      for(x=[-w/2+13,w/2-13],y=[-d/2+10,d/2-10])
        translate([x,y,7.5]) cylinder(r=2.4,h=4.5,$fn=20);
    }
    for(x=[-w/2+13,w/2-13]) translate([x,0,-b3_eps]) cylinder(r=2.2,h=h+2*b3_eps,$fn=20);
    translate([0,0,6.5]) linear_extrude(height=2.2)
      text(label,size=10,halign="center",valign="center",font="Liberation Sans:style=Bold");
  }
}

module b3_monogram_coaster(w=155,d=75,h=13,label="A") {
  difference() {
    union() {
      b3_rr(w,d,9,8);
      for(x=[-39,39]) translate([x,0,8.7]) b3_ring(27,23,4.3);
      translate([0,0,8.7]) cylinder(r=13,h=4.3,$fn=48);
      translate([0,0,11.9]) linear_extrude(height=1.1)
        text(label,size=18,halign="center",valign="center",font="Liberation Sans:style=Bold");
    }
    for(x=[-39,39]) translate([x,0,4]) cylinder(r=20,h=6,$fn=64);
    for(x=[-w/2+10,w/2-10]) translate([x,0,-b3_eps]) cylinder(r=2,h=h+2*b3_eps,$fn=20);
  }
}

module b3_fantasy_crest(w=78,d=78,h=10) {
  difference() {
    union() {
      b3_badge_outline(w,d,6);
      translate([0,0,5.8]) linear_extrude(height=h-5.8)
        difference() {
          offset(delta=-4) polygon([[-w/2,d/2],[w/2,d/2],[w/2,d/8],[w/3,-d/3],[0,-d/2],[-w/3,-d/3],[-w/2,d/8]]);
          offset(delta=-7) polygon([[-w/2,d/2],[w/2,d/2],[w/2,d/8],[w/3,-d/3],[0,-d/2],[-w/3,-d/3],[-w/2,d/8]]);
        }
      translate([0,0,5.8]) linear_extrude(height=h-5.8) b3_star(17,7,6);
      for(s=[-1,1]) translate([s*22,20,5.8]) cylinder(r=3,h=4.2,$fn=20);
    }
    translate([0,d/2-8,-b3_eps]) cylinder(r=3,h=h+2*b3_eps,$fn=28);
  }
}

module b3_space_insignia(w=81,d=81,h=11) {
  assert(abs(w-d)<0.01);
  difference() {
    union() {
      cylinder(d=w,h=6,$fn=96);
      translate([0,0,5.8]) b3_ring(w/2-2,w/2-5,h-5.8);
      translate([0,0,5.8]) linear_extrude(height=h-5.8) b3_star(13,5.5,8);
      // Rocket silhouette: fuselage, fins and nose are one raised assembly.
      translate([0,0,6]) cylinder(r=5.5,h=4.5,$fn=24);
      translate([0,0,10]) cylinder(r1=5.5,r2=0.8,h=1,$fn=24);
      for(s=[-1,1]) translate([s*6,0,7]) rotate([0,0,s*24]) cube([5,3,3],center=true);
      for(i=[0:3]) rotate([0,0,i*90]) translate([27,0,6]) sphere(r=2.4,$fn=18);
    }
    translate([0,d/2-7,-b3_eps]) cylinder(r=2.8,h=h+2*b3_eps,$fn=24);
  }
}

module b3_mythic_rune(w=87,d=87,h=13) {
  assert(abs(w-d)<0.01);
  union() {
    cylinder(d=w,h=7,$fn=12);
    translate([0,0,6.8]) b3_ring(w/2-2,w/2-5,h-6.8);
    translate([0,0,6.8]) b3_ring(27,24,3.5);
    // Original rune marks are raised, broad strokes rather than fragile wires.
    for(i=[0:7]) rotate([0,0,i*45]) {
      translate([31,0,7]) cube([3.2,9,4],center=true);
      translate([31,0,10]) rotate([0,0,28]) cube([3,7,3],center=true);
      translate([25,0,8]) sphere(r=2.2,$fn=16);
    }
    translate([0,0,7]) cube([5,22,6],center=true);
    translate([0,0,10]) rotate([0,0,45]) cube([5,22,3],center=true);
    translate([0,0,10]) sphere(r=3.2,$fn=20);
  }
}

// Stable slug/family/variant interface for the catalogue's existing v1.3 assets.
module refined_batch03_form(slug="",family="",variant=0,w=90,d=90,h=90,label="CUSTOM") {
  assert(w>40 && d>40 && h>8 && variant>0,"Invalid batch-03 SKU dimensions");
  if(slug=="lunar-fox-bust") b3_lunar_fox(w,d,h);
  else if(slug=="garden-robot-companion") b3_garden_robot(w,d,h);
  else if(slug=="mountain-spirit-figurine") b3_mountain_spirit(w,d,h);
  else if(slug=="harbor-cargo-diorama") b3_harbor_cargo(w,d,h);
  else if(slug=="desert-roadway-diorama") b3_desert_roadway(w,d,h);
  else if(slug=="urban-street-corner") b3_urban_corner(w,d,h);
  else if(slug=="collectible-display-plinth") b3_collectible_plinth(w,d,h);
  else if(slug=="eyewear-display-stand") b3_eyewear_stand(w,d,h);
  else if(slug=="retro-cartridge-rack") b3_cartridge_rack(w,d,h);
  else if(slug=="bracelet-display-arch") b3_bracelet_arch(w,d,h);
  else if(slug=="pendant-sorting-tray") b3_pendant_tray(w,d,h);
  else if(slug=="modular-jewelry-plinth") b3_modular_jewelry_plinth(w,d,h);
  else if(slug=="bonsai-display-pot") b3_bonsai_pot(w,d,h);
  else if(slug=="desktop-herb-planter") b3_herb_planter(w,d,h);
  else if(slug=="wedding-place-card") b3_wedding_place_card(w,d,h,label);
  else if(slug=="anniversary-message-plaque") b3_anniversary_plaque(w,d,h,label);
  else if(slug=="monogram-desk-coaster") b3_monogram_coaster(w,d,h,label);
  else if(slug=="fantasy-crest-badge") b3_fantasy_crest(w,d,h);
  else if(slug=="space-explorer-insignia") b3_space_insignia(w,d,h);
  else if(slug=="mythic-rune-emblem") b3_mythic_rune(w,d,h);
  else assert(false,str("Unknown batch-03 SKU: ",slug));
}
