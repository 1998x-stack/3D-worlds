// V1.4.2 · ORIGINAL dimensioned OpenSCAD print PROTOTYPE, units = mm, Z-up.
// Independent of the gallery's 180x60x130 mm visual mesh dimensions.
// Unverified: no physical clip fit, hygiene, UV, heat, wet durability or slicer sign-off.
// Author: 3D Worlds, MIT. Use a calibration coupon and measure the target lip.
$fn = 48;
mode = "body";              // "body" or "coupon"
tray_width_mm = 128;
tray_depth_mm = 85;
tray_thickness_mm = 5;
corner_radius_mm = 7;
drain_slot_width_mm = 4.8;
drain_slot_pitch_mm = 11;
drain_slot_length_mm = 58;
drain_slot_count = 9;
target_lip_thickness_mm = 14;  // USER MEASUREMENT REQUIRED
lip_clearance_mm = 0.4;        // uncalibrated total nominal gap allowance
clip_wall_mm = 4;
clip_width_mm = 18;
clip_height_mm = 28;
clip_extra_mm = 0.2;          // positive join allowance
assert(tray_thickness_mm >= 3.6, "tray base below design minimum");
assert(clip_wall_mm >= 3.2, "clip walls below design minimum");
assert(drain_slot_pitch_mm - drain_slot_width_mm >= 3.2,
       "drain slat too narrow");
assert(target_lip_thickness_mm > 3 && lip_clearance_mm >= 0,
       "invalid clip fit input");
assert(drain_slot_count >= 3 &&
       drain_slot_count * drain_slot_pitch_mm < tray_width_mm - 15,
       "slots consume rim");

module rounded_plate(w, d, h, r) {
  hull() {
    for (x = [-w / 2 + r, w / 2 - r])
      for (y = [-d / 2 + r, d / 2 - r])
        translate([x, y, 0]) cylinder(h = h, r = r);
  }
}

module draining_tray() {
  difference() {
    rounded_plate(tray_width_mm, tray_depth_mm,
                  tray_thickness_mm, corner_radius_mm);
    // The slots are true voids through the material, not dark thin overlays.
    for (i = [0 : drain_slot_count - 1]) {
      x = (i - (drain_slot_count - 1) / 2) * drain_slot_pitch_mm;
      translate([x - drain_slot_width_mm / 2,
                 -drain_slot_length_mm / 2, -1])
        cube([drain_slot_width_mm, drain_slot_length_mm,
              tray_thickness_mm + 2]);
    }
  }
}

module clip_at(x, extra_clearance = 0) {
  open_gap = target_lip_thickness_mm + lip_clearance_mm + extra_clearance;
  outside_depth = open_gap + 2 * clip_wall_mm;
  near_y = tray_depth_mm / 2 - 13;
  // Two printed uprights rise from the main tray.
  // The upward slot is OPEN: no hidden ceiling/support assumption.
  difference() {
    translate([x - clip_width_mm / 2, near_y, 0])
      cube([clip_width_mm, outside_depth, clip_height_mm]);
    translate([x - clip_width_mm / 2 - 1,
               near_y + clip_wall_mm,
               tray_thickness_mm + clip_extra_mm])
      cube([clip_width_mm + 2, open_gap,
            clip_height_mm - tray_thickness_mm + 2]);
  }
}

module body() {
  union() {
    draining_tray();
    for (x = [-42, 42]) clip_at(x);
  }
}

// Printed alongside the main design ONLY as a separately selected object.
// Three gap variants (0.2, 0.4, 0.6 mm extra) require real sink-lip fit tests.
module coupon() {
  for (i = [0:2]) {
    translate([i * 27 - 27, 0, 0])
    difference() {
      cube([20, target_lip_thickness_mm + lip_clearance_mm + 9, 12],
           center = true);
      translate([0, 0, 2])
        cube([22, target_lip_thickness_mm + lip_clearance_mm +
              i * 0.2, 11], center = true);
    }
  }
}
if (mode == "coupon") coupon(); else body();
