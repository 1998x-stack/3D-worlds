// Original V1.5 candidate CAD. mm, Z-up; not chemically/physically certified.
$fn = 48;
length = 132; width = 86; thickness = 20;
floor = 4; wall = 2.6; nx = 7; ny = 3;
hole_d = 10.5; pitch_x = 17.2; pitch_y = 22;
assert(length >= (nx-1)*pitch_x + hole_d + 2*wall);
assert(width >= (ny-1)*pitch_y + hole_d + 2*wall);
assert(thickness > floor + hole_d/2);
difference() {
  cube([length,width,thickness]);
  // Blind cylindrical holes: nominal floor is 4 mm, untested minimum wall elsewhere.
  for(i=[0:nx-1],j=[0:ny-1])
    translate([(length-(nx-1)*pitch_x)/2+i*pitch_x,
      (width-(ny-1)*pitch_y)/2+j*pitch_y,floor])
      cylinder(h=thickness-floor+1,d=hole_d);
  // Front side recess and engraved labels, all within 132x86x20-mm envelope.
  translate([length/2,2,11]) rotate([90,0,0]) cylinder(h=3,d=11);
  for(i=[0:nx-1])
    translate([(length-(nx-1)*pitch_x)/2+i*pitch_x-4,-0.1,2.1])
      cube([8,0.9,1.3]);
}
