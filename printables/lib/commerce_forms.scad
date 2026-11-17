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
  r=18+v;
  union() {
    cylinder(r=29,h=6);
    translate([0,0,7]) scale([1,0.85,1.15]) sphere(r=r);
    translate([0,0,35]) scale([1,.91,.84]) sphere(r=r*.78);
    for (s=[-1,1]) {
      translate([s*(r*.58),0,49])
        rotate([0,s*13,0]) cylinder(r1=5+v*.4,r2=1,h=10+v*2);
      translate([s*(r*.73),-2,20]) scale([.36,.55,.67]) sphere(r=r*.75);
    }
    translate([0,-r*.62,39]) sphere(r=3.5+v*.2);
    for(s=[-1,1])translate([s*7,-r*.72,43])sphere(r=1.8);
  }
}
module market_scenery(v=1) {
  union() {
    translate([-52,-32,0]) cube([104,64,4]);
    for (i=[0:2+v%2]) {
      x=-40+i*24;
      translate([x, -14+(i%2)*12,3.8])
        cube([15+v*2,19,13+v*3]);
      translate([x+2,-13+(i%2)*12,16+v*3])
        cube([11+v*2,15,3]);
    }
    for(i=[-1,1]) {
      translate([i*42,20,3.8]) cylinder(r=5,h=12+v*4);
      translate([i*42,20,15+v*4]) sphere(r=6);
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
  r=34+v*2; h=48+v*6; w=3.2;
  difference() {
    union() {
      cylinder(r=r,h=h);
      for(i=[0:9+v])
        rotate([0,0,360*i/(10+v)])
          translate([r-.5,-1.6,2]) cube([2.2,3.2,h-4]);
    }
    translate([0,0,3.8]) cylinder(r=r-w,h=h+2);
    translate([0,0,-1]) cylinder(r=2.8,h=7,$fn=24);
  }
}
module market_gift(v=1,label="CUSTOM") {
  w=100+v*6;d=49+v*3;
  difference() {
    union() {
      hull()for(x=[-w/2+7,w/2-7],y=[-d/2+7,d/2-7])
        translate([x,y,0]) cylinder(r=7,h=6,$fn=24);
      translate([0,0,5.8]) linear_extrude(height=2.2)
        text(label,size=max(9,18-v),halign="center",valign="center",
             font="Liberation Sans:style=Bold");
    }
    if(v==3)for(x=[-w/2+10,w/2-10])
      translate([x,d/2-10,-1]) cylinder(r=2.5,h=10,$fn=24);
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
