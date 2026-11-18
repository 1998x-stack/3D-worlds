// SPDX-License-Identifier: MIT
// Label-front parts bin — original modular open bin, mm/Z-up.
// CAD prototype ONLY. No assumed compatibility with brand-specific grids.
$fn=48;
outer_width=124;
outer_depth=84;
outer_height=36;
outer_radius=5;
wall=2.8;
floor_thickness=3.2;
divider_count=2;
divider_spacing=33;

assert(wall >= 2.4 && floor_thickness >= 2.4);
assert(outer_width > 3*divider_spacing && outer_height > floor_thickness+12);

module round_prism(width, depth, height, radius) {
  linear_extrude(height=height)
    offset(r=radius)
      square([width-2*radius, depth-2*radius], center=true);
}

union() {
  difference() {
    round_prism(outer_width, outer_depth, outer_height, outer_radius);
    translate([0,0,floor_thickness])
      round_prism(outer_width-2*wall, outer_depth-2*wall,
                   outer_height, max(1,outer_radius-wall));
    // Recess on the front, but preserve 1.5+ mm of front-facing shell.
    translate([-26,-outer_depth/2-.1,15])
      cube([52,1.1,11]);
  }
  // Dividers overlap inner perimeter and bottom to form ONE connected solid.
  for (ix=[-1,1])
    translate([ix*divider_spacing/2-wall/2, -outer_depth/2+wall-.25,
               floor_thickness-.35])
      cube([wall,outer_depth-2*wall+.5,outer_height-floor_thickness-.8]);
  // Raised exterior shelf-stop along the rear (inside the footprint).
  translate([-outer_width/2+wall, outer_depth/2-wall-1, outer_height-2.7])
    cube([outer_width-2*wall, 1.5, 2.7]);
}
