// SPDX-License-Identifier: MIT
// Camera battery organizer — original generic fit, mm/Z-up.
// CAD prototype ONLY. Measure the battery including swelling and contacts first.
// Not intended for charging, hot batteries, transport safety, or electrical protection.
$fn = 48;
outer_width = 150;
outer_depth = 96;
tray_height = 22;
corner_radius = 5;
floor_thickness = 3.2;
pocket_width = 37;
pocket_depth = 35;
pocket_radius = 3;
x_pitch = 45;
y_pitch = 43;

assert(pocket_width > 5 && pocket_depth > 5);
assert(floor_thickness >= 2.4 && tray_height > floor_thickness + 5);
assert(outer_width/2 - (x_pitch + pocket_width/2) >= 3);
assert(outer_depth/2 - (y_pitch/2 + pocket_depth/2) >= 3);

module round_prism(width, depth, height, radius) {
  linear_extrude(height=height)
    offset(r=radius)
      square([width - 2*radius, depth - 2*radius], center=true);
}

difference() {
  round_prism(outer_width, outer_depth, tray_height, corner_radius);
  // Six deep, generously spaced slots; end surfaces are NOT electrically rated.
  for (ix=[-1:1], iy=[-1,1])
    translate([ix*x_pitch, iy*y_pitch/2, floor_thickness])
      round_prism(pocket_width, pocket_depth, tray_height, pocket_radius);
  // Shallow front label recesses. Leave a positive-thickness front wall.
  for (ix=[-1:1])
    translate([ix*x_pitch, -outer_depth/2-0.1, 10])
      cube([27, 1.3, 5.5], center=false);
}
