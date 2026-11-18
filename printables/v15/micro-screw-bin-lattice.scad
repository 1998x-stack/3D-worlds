// Original V1.5 candidate CAD. Z-up millimeters; prototype, not production certified.
$fn = 48;
outer_x = 148; outer_y = 92; height = 28;
base = 2.6; wall = 2.4; cols = 4; rows = 2;
label_recess = 0.8;
assert(base >= 2 && wall >= 2 && height > base + 8);
assert(cols > 0 && rows > 0);
inner_x = outer_x - 2*wall;
inner_y = outer_y - 2*wall;
cell_x = inner_x / cols;
cell_y = inner_y / rows;
assert(cell_x > 2*wall + 8 && cell_y > 2*wall + 8);
difference() {
  cube([outer_x,outer_y,height]);
  // Individually cut pockets leave shared compartment walls and a 2.6-mm base.
  for (c=[0:cols-1], r=[0:rows-1])
    translate([wall+c*cell_x+wall/2, wall+r*cell_y+wall/2, base])
      cube([cell_x-wall, cell_y-wall, height+1]);
  // Recessed label notches fit inside the declared 148x92x28-mm envelope.
  for (c=[0:cols-1])
    translate([wall+c*cell_x+cell_x/2-7,-0.1,3.1])
      cube([14,label_recess+0.1,1.25]);
  // Rounded rear finger scoops avoid coincident/tangent top faces.
  for (c=[0:cols-1])
    translate([wall+c*cell_x+cell_x/2,outer_y-2.0,height-5.6])
      rotate([-90,0,0]) cylinder(h=3,d=8);
}
