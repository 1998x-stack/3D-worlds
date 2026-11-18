// V1.5 original prototype. DIMENSIONS IN MILLIMETRES; Z is print-bed up.
// Not a mass-manufactured, slicer-approved, physically fit-tested product.
$fn=48;
outer_x=148; outer_y=92; height=28;
base=2.6; wall=2.4; cols=4; rows=2;
nominal_lip=1.0; label_height=5.0;
assert(base>=2.0 && wall>=2.0 && height>=base+8);
assert(cols>=1 && rows>=1);
inner_x=outer_x-2*wall;
inner_y=outer_y-2*wall;
cell_x=inner_x/cols;
cell_y=inner_y/rows;
// Connected compartment walls remain because each cavity is individually subtracted.
// A label tab is a decorative locator, not a compliant snap fit.
difference() {
  union() {
    cube([outer_x,outer_y,height]);
    translate([0,-2.0,0]) cube([outer_x,2.0,label_height+base]);
    translate([0,outer_y,0]) cube([outer_x,nominal_lip,height/6]);
  }
  for(c=[0:cols-1],r=[0:rows-1]) {
    translate([wall+c*cell_x+wall/2,wall+r*cell_y+wall/2,base])
      cube([cell_x-wall,cell_y-wall,height+1]);
  }
}
// Shallow index bars are separate visual reliefs but fused to the front flange.
for(c=[0:cols-1]) {
  translate([wall+c*cell_x+cell_x/2-7,-2.18,2.9])
    cube([14,0.25,1.15]);
}
