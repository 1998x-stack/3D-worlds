// V1.5 original prototype in mm, Z-up. For organizer testing only.
// Not a certified pipette-drying or chemical-safe accessory.
$fn=48;
length=132; width=86; thickness=20;
floor=4; wall=2.6; nx=7; ny=3;
hole_d=10.5; pitch_x=17.2; pitch_y=22;
assert(length>=((nx-1)*pitch_x + hole_d + 2*wall));
assert(width>=((ny-1)*pitch_y + hole_d + 2*wall));
assert(thickness>floor+hole_d/2);
difference() {
  union() {
    cube([length,width,thickness]);
    translate([0,-3.0,0])cube([length,3.0,5.0]); // index lip
  }
  for(i=[0:nx-1],j=[0:ny-1]) {
    translate([(length-(nx-1)*pitch_x)/2+i*pitch_x,
      (width-(ny-1)*pitch_y)/2+j*pitch_y,floor])
      cylinder(h=thickness-floor+1,d=hole_d);
  }
  // Finger-side relief does not enter the container pockets.
  translate([length/2,-3.1,6])rotate([90,0,0])
    cylinder(h=4,d=11);
}
for(i=[0:nx-1]) {
  translate([(length-(nx-1)*pitch_x)/2+i*pitch_x-4,-3.23,2.1])
    cube([8,.28,1.3]); // raised row labels, purely indexed ticks
}
