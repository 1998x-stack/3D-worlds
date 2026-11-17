// Original parametric printable prototypes. Dimensions in millimeters.
// CAD is the manufacturing authority; Three.js gallery geometry is a stylized preview.
// No external copyrighted silhouettes, brands, logos or character geometry.
$fn=56;
module market_lantern(v=1) {
  r=27+v*2; h=76+v*6; wall=2.8;
  difference() {
    cylinder(r=r,h=h);
    translate([0,0,-1]) cylinder(r=r-wall,h=h+2);
    for (tier=[0:3], j=[0:7+v]) {
      a=360*j/(8+v)+tier*15;
      rotate([0,0,a])
        translate([r-1,0,17+tier*(h-33)/3])
          rotate([0,90,0]) cylinder(r=2.2+(v%3)*.5,h=10,center=true,$fn=18);
    }
  }
}
module market_figurine(v=1) {
  union() {
    cylinder(r=30,h=7);
    if(v==1) { // floating cloud-whale: broad body, forked tail, paired fins
      translate([0,0,22]) scale([1.15,.74,.69]) sphere(r=25);
      translate([24,0,22]) rotate([0,70,0]) cylinder(r1=10,r2=4,h=20);
      for(y=[-1,1])translate([40,y*8,27])scale([.55,.65,.35])sphere(r=15);
      for(y=[-1,1])translate([-4,y*15,13])scale([.55,.6,.35])sphere(r=10);
      translate([-18,-12,25])sphere(r=2.5);
    } else if(v==2) { // upright owl with heavy brows and pointed ear tufts
      translate([0,0,30])scale([.83,.75,1.30])sphere(r=23);
      for(x=[-1,1]){
        translate([x*11,-15,44])sphere(r=8);
        translate([x*11,-22,44])sphere(r=3.3);
        translate([x*16,0,54])cylinder(r1=8,r2=0,h=16);
      }
      translate([0,-22,38])rotate([0,0,180])cylinder(r1=4,r2=0,h=8);
    } else if(v==3) { // long-ear lunar fox, tapered nose
      translate([0,0,24])scale([.8,.78,1.1])sphere(r=20);
      translate([0,-3,51])sphere(r=19);
      for(x=[-1,1]){
        translate([x*12,-2,62])cylinder(r1=9,r2=0,h=23);
        translate([x*8,-19,53])sphere(r=2.3);
      }
      translate([0,-17,46])scale([.7,1.1,.48])sphere(r=11);
    } else if(v==4) { // garden robot, cylindrical body and framed face
      translate([-19,-14,7])cube([38,28,42]);
      translate([-22,-16,45])cube([44,32,26]);
      for(x=[-1,1]){
        translate([x*11,-18,60])sphere(r=4);
        translate([x*23,0,37])sphere(r=9);
        translate([x*10,0,0])cylinder(r=7,h=10);
      }
      translate([0,0,70])cylinder(r=3.3,h=13);
      translate([0,0,83])sphere(r=6);
    } else { // mountain spirit, layered rock silhouette
      cylinder(r1=29,r2=13,h=52,$fn=7);
      translate([0,0,34])cylinder(r1=18,r2=0,h=31,$fn=5);
      for(x=[-1,1]){
        translate([x*12,-12,24])scale([.34,.45,.60])sphere(r=18);
        translate([x*8,-22,40])sphere(r=3);
      }
      translate([0,-18,24])sphere(r=5);
    }
  }
}
module market_scenery(v=1) {
  union() {
    translate([-54,-33,0])cube([108,66,5]);
    if(v==1) { // industrial cargo crates and mooring bollards
      for(i=[0:2])translate([-44+i*31,-20,4.8])cube([27,38,17+(i%2)*15]);
      for(i=[0:2])translate([-42+i*31,-21,22+(i%2)*15])cube([23,40,2]);
      for(x=[-45,45])translate([x,25,4.8])cylinder(r1=5,r2=6,h=13);
    } else if(v==2) { // roadside with stylized desert cacti
      translate([-54,-3,5])cube([108,16,1.5]);
      for(x=[-30,5,38]){
        translate([x,19,4.8])cylinder(r=4,h=24);
        translate([x+6,19,16])cylinder(r=3,h=12);
        translate([x+3,19,16])rotate([90,0,0])cylinder(r=3,h=7);
      }
      translate([-45,-28,5])cube([3,10,26]);
      translate([-46,-28,29])cube([25,3,10]);
    } else if(v==3) { // alpine cabin with pitched gable
      translate([-29,-23,4.8])cube([60,45,28]);
      translate([0,0,34])rotate([0,90,0])cylinder(r=35,h=64,center=true,$fn=3);
      translate([-8,-24,5])cube([16,3,23]);
      for(x=[-19,19])translate([x,-24,23])cube([9,4,9],center=true);
      translate([37,22,5])cylinder(r=6,h=27);
    } else if(v==4) { // urban corner kiosk and street furnishings
      translate([-40,-19,5])cube([56,46,35]);
      translate([-46,-23,39])cube([68,54,5]);
      translate([-31,-23,17])cube([24,4,16]);
      translate([-8,-23,16])cube([10,4,14]);
      translate([37,20,5])cylinder(r=4,h=43);
      translate([37,20,48])sphere(r=8);
    } else { // retro railway platform with canopy
      translate([-52,-20,5])cube([104,18,7]);
      for(x=[-39,39]){
        translate([x,0,5])cube([5,5,49]);
      }
      translate([-50,-18,54])cube([100,43,5]);
      translate([-17,21,5])cube([34,8,28]);
      translate([-13,22,29])cube([26,10,3]);
    }
  }
}
module market_organizer(v=1) {
  w=104+v*5;d=69+v*3;h=32+v*3; columns=2+v%3;
  difference() {
    translate([-w/2,-d/2,0]) cube([w,d,h]);
    for(i=[0:columns-1])
      translate([-w/2+3+i*(w-6)/columns,-d/2+3,4])
        cube([(w-6)/columns-3,d-6,h+3]);
  }
}
module market_display(v=1) {
  union() {
    cylinder(r=34+v*2,h=6);
    translate([0,0,5.8]) cylinder(r1=12+v,r2=9,h=26+v*3);
    translate([0,0,30+v*3]) cylinder(r=25+v,h=5);
    for(s=[-1,1])
      translate([s*(16+v),0,34+v*3])
        cube([5,31,10],center=true);
  }
}
module market_gaming(v=1) {
  w=102+v*5;d=66+v*2; h=22+v*3;
  difference() {
    union() {
      translate([-w/2,-d/2,0]) cube([w,d,h]);
      translate([-w/2, d/2-14,h-1]) cube([w,12,15+v]);
    }
    translate([-w/2+5,-d/2+5,5]) cube([w-10,d-24,h+12]);
    for(i=[-1,0,1])
      translate([i*24,d/2-13,h+6]) rotate([90,0,0])
        cylinder(r=3.6+v*.3,h=16,$fn=22);
  }
}
module market_jewelry(v=1) {
  union() {
    translate([-40,-26,0]) cube([80,52,6]);
    for (i=[0:3+v%2]) {
      x=-29+i*58/(3+v%2);
      translate([x,0,5.8]) cylinder(r=3.2,h=42+v*5,$fn=24);
      translate([x,0,46+v*5]) sphere(r=5);
    }
    translate([-33,-5,42+v*5]) cube([66,9,6]);
    for(i=[0:4])translate([-25+i*12,0,46+v*5])
      cylinder(r1=4,r2=1.5,h=7,$fn=20);
  }
}
module market_planter(v=1) {
  union() {
    if(v==3) { // propagation tube holder: five holes through a bridge
      difference() {
        translate([-48,-24,0])cube([96,48,46]);
        for(i=[-2:2])translate([i*17,0,5])cylinder(r=6.1,h=44,$fn=32);
        translate([-44,-19,-1])cube([88,38,34]);
      }
      for(x=[-44,44])translate([x,-20,0])cube([4,40,7]);
    } else if(v==4) { // shallow oval bonsai bowl
      difference() {
        scale([1.35,.83,1])cylinder(r=38,h=27,$fn=64);
        translate([0,0,4])scale([1.35,.83,1])cylinder(r=34,h=27,$fn=64);
        translate([0,0,-1])cylinder(r=3,h=7);
      }
      for(x=[-26,26])translate([x,0,0])cylinder(r=8,h=5);
    } else if(v==5) { // herb trough with separate pockets
      difference() {
        translate([-57,-26,0])cube([114,52,56]);
        for(x=[-38,0,38])translate([x-16,-22,4])cube([32,44,55]);
        for(x=[-38,0,38])translate([x,0,-1])cylinder(r=3,h=8);
      }
    } else { // round ribbed succulent pot or faceted cactus planter
      r=v==1?35:41; h=v==1?60:70; sides=v==1?64:8;
      difference() {
        union() {
          cylinder(r=r,h=h,$fn=sides);
          if(v==1)for(i=[0:17])rotate([0,0,20*i])
            translate([r-1.1,0,2])cylinder(r=2.1,h=h-4,$fn=12);
        }
        translate([0,0,4])cylinder(r=r-3.6,h=h+3,$fn=sides);
        translate([0,0,-1])cylinder(r=3.2,h=7,$fn=24);
      }
    }
  }
}
module market_gift(v=1,label="CUSTOM") {
  union() {
    if(v==5) { // round monogram coaster (non-food-contact surface)
      cylinder(r=44,h=5,$fn=72);
      translate([0,0,4.8])linear_extrude(height=1.8)
        text("M",size=36,halign="center",valign="center");
    } else if(v==2) { // wedding place-card easel with angled plate
      translate([-50,-16,0])cube([100,32,6]);
      translate([0,0,7])rotate([18,0,0])cube([100,5,44],center=true);
      translate([0,-4,34])rotate([90-18,0,0])linear_extrude(height=1.8)
        text(label,size=13,halign="center",valign="center");
    } else if(v==3) { // house number plaque
      difference(){
        translate([-35,-44,0])cube([70,88,6]);
        for(y=[-34,34])translate([0,y,-1])cylinder(r=2.7,h=9,$fn=24);
      }
      translate([0,0,5.8])linear_extrude(height=2)text("108",size=37,halign="center",valign="center");
    } else if(v==4) { // commemorative arched plaque
      hull() {
        translate([-48,-22,0])cylinder(r=7,h=7,$fn=24);
        translate([48,-22,0])cylinder(r=7,h=7,$fn=24);
        translate([0,26,0])cylinder(r=28,h=7,$fn=48);
      }
      translate([0,0,6.7])linear_extrude(height=1.8)
        text("LOVE",size=16,halign="center",valign="center");
    } else { // personalized desk nameplate
      hull()for(x=[-54,54],y=[-21,21])translate([x,y,0])
        cylinder(r=6,h=7,$fn=24);
      translate([0,0,6.7])linear_extrude(height=2)
        text(label,size=18,halign="center",valign="center");
    }
  }
}
module market_cosplay(v=1) {
  r=28+v*2;
  difference() {
    union() {
      cylinder(r=r,h=4.5,$fn=8+v*2);
      for(i=[0:4+v])
        rotate([0,0,360*i/(5+v)])
          translate([r*.45,0,4.2]) cylinder(r=4.2,h=1.8,$fn=6);
      cylinder(r=12+v*.5,h=7,$fn=5+v);
    }
    translate([0,r*.70,-1])cylinder(r=3.3,h=10,$fn=24);
  }
}
module commercial_form(family="lantern",variant=1,label="CUSTOM") {
  if(family=="lantern")market_lantern(variant);
  else if(family=="figurine")market_figurine(variant);
  else if(family=="scenery")market_scenery(variant);
  else if(family=="organizer")market_organizer(variant);
  else if(family=="display")market_display(variant);
  else if(family=="gaming")market_gaming(variant);
  else if(family=="jewelry")market_jewelry(variant);
  else if(family=="planter")market_planter(variant);
  else if(family=="gift")market_gift(variant,label);
  else if(family=="cosplay")market_cosplay(variant);
  else assert(false,str("Unknown family: ",family));
}
