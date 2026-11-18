// V1.4.2 · Parametric FDM 1/4-inch driver-bit rack, mm/Z-up.
// This is a NEW CAD candidate distinct from the visual Three.js scene model.
// The nominal 6.35 mm size does not prove socket fit; print the coupon first.
// Author: 3D Worlds, MIT. No tool-load rating and no physical test on record.
$fn = 64;
mode = "body";                 // "body" or "coupon"
columns = 4;
rows = 4;
pitch_mm = 20;
base_width_mm = 108;
base_depth_mm = 108;
base_height_mm = 18;
corner_radius_mm = 7;
pocket_depth_mm = 12;
bit_across_flats_mm = 6.35;   // 1/4-inch nominal, real bit measurement required
socket_clearance_per_side_mm = 0.25; // nominal, not calibrated
floor_mm = base_height_mm - pocket_depth_mm;
assert(columns == 4 && rows == 4, "4x4 index layout required");
assert(pitch_mm > 2 * (bit_across_flats_mm + socket_clearance_per_side_mm),
       "socket pitch too small");
assert(floor_mm >= 3.5, "pocket floor below design minimum");
assert(base_width_mm > (columns - 1) * pitch_mm + 18 &&
       base_depth_mm > (rows - 1) * pitch_mm + 18,
       "insufficient edge margin");
assert(socket_clearance_per_side_mm >= 0 &&
       socket_clearance_per_side_mm <= 0.7,
       "uncalibrated clearance out of proposed bounds");

module rounded_base(w, d, h, r) {
  hull() {
    for (x = [-w/2 + r, w/2 - r])
      for (y = [-d/2 + r, d/2 - r])
        translate([x, y, 0]) cylinder(h = h, r = r);
  }
}

module hex_socket(af, h) {
  // Regular hexagon R = across-flats / sqrt(3), rotate for flat side.
  rotate([0,0,30]) cylinder(h = h, r = af / sqrt(3), $fn = 6);
}

module body() {
  difference() {
    rounded_base(base_width_mm, base_depth_mm,
                 base_height_mm, corner_radius_mm);
    for (i = [0:columns-1]) for (j = [0:rows-1]) {
      x = (i - (columns - 1)/2) * pitch_mm;
      y = (j - (rows - 1)/2) * pitch_mm;
      translate([x,y,base_height_mm-pocket_depth_mm])
        hex_socket(bit_across_flats_mm +
                   2 * socket_clearance_per_side_mm,
                   pocket_depth_mm + 1);
    }
    // Simple row markers: noncritical surface grooves outside sockets.
    for (j = [0:rows-1]) {
      y = (j - (rows-1)/2) * pitch_mm;
      translate([-base_width_mm/2 + 4, y - 0.65, base_height_mm - 0.8])
        cube([5,1.3,1.2]);
    }
  }
}

// Three 3.5mm-deep calibration pockets to compare measured 1/4-in bit
// fit at 0.15, 0.25, and 0.40 mm clearance PER SIDE on a given machine.
module coupon() {
  plate_w = 69;
  union() {
    translate([-plate_w/2,-12,0]) cube([plate_w,24,3]);
    for (i=[0:2]) {
      difference() {
        translate([(i-1)*22-8,-8,2.9])
          cube([16,16,7]);
        translate([(i-1)*22,0,5])
          hex_socket(bit_across_flats_mm +
                     2 * ([0.15,0.25,0.40][i]),5.5);
      }
    }
  }
}
if (mode == "coupon") coupon(); else body();
