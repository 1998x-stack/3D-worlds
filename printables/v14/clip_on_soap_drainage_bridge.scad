// V1.4.3 / OpenSCAD engineering pilot / MIT / mm / Z-up.
// WARNING: this is a rigid open-sided lip cradle, NOT a proven snap clip.
// Target lip dimensions, material strength, and sink use are not validated.
$fn = 48;
mode = "body"; // "body" or "coupon"; override by CLI -D 'mode="coupon"'
tray_width_mm = 128;
tray_depth_mm = 85;
tray_thickness_mm = 5;
corner_radius_mm = 7;
drain_slot_width_mm = 4.8;
drain_slot_pitch_mm = 11;
drain_slot_length_mm = 58;
drain_slot_count = 9;
target_lip_thickness_mm = 14;     // placeholder: measure target physical lip
lip_clearance_mm = 0.4;          // clearance across Z, nominal total gap
clip_wall_mm = 4;
clip_width_mm = 18;
clip_height_mm = 28;
clip_reach_mm = 18;
clip_web_depth_mm = 5;
clip_joint_overlap_mm = 1.2;
coupon_gap_allowances_mm = [0.2, 0.4, 0.6];  // three total clearance tests

assert(tray_thickness_mm >= 3.6 && clip_wall_mm >= 3.2,
       "insufficient declared main-web thickness");
assert(drain_slot_pitch_mm - drain_slot_width_mm >= 3.2 &&
       drain_slot_width_mm >= 3.0, "drainage webs/holes too narrow");
assert(drain_slot_count >= 3 &&
       (drain_slot_count-1)*drain_slot_pitch_mm + drain_slot_width_mm <=
       tray_width_mm - 2 * corner_radius_mm - 4,
       "drainage slots exceed plate's straight web");
assert(target_lip_thickness_mm >= 4 && target_lip_thickness_mm <= 35,
       "target lip outside prototyping envelope");
assert(lip_clearance_mm >= 0.0 && lip_clearance_mm <= 1.5,
       "nominal test gap out of range");
assert(clip_height_mm >= 2*clip_wall_mm + target_lip_thickness_mm +
       lip_clearance_mm, "rear web does not contain clip opening");
assert(clip_web_depth_mm > clip_joint_overlap_mm &&
       clip_reach_mm >= 10, "invalid rear jaw geometry");

module rounded_plate(w, d, h, r) {
  hull() {
    for (x=[-w/2+r, w/2-r]) for (y=[-d/2+r,d/2-r])
      translate([x,y,0]) cylinder(h=h,r=r);
  }
}

module draining_tray() {
  difference() {
    rounded_plate(tray_width_mm,tray_depth_mm,tray_thickness_mm,corner_radius_mm);
    // TRUE open drainage slots right through the 5 mm main tray, not color marks.
    for (i=[0:drain_slot_count-1]) {
      x=(i-(drain_slot_count-1)/2)*drain_slot_pitch_mm;
      translate([x-drain_slot_width_mm/2,-drain_slot_length_mm/2,-1])
        cube([drain_slot_width_mm, drain_slot_length_mm,tray_thickness_mm+2]);
    }
  }
}

// Side-entry opening must be aligned with LIP THICKNESS along Z. In V1.4.2,
// the void was accidentally along Y and open toward +Z, an incorrect fit axis.
// This revised rigid C-profile opens toward the rear (+Y).
module side_entry_cradle(x, allowance_mm=lip_clearance_mm,
                         origin_y=tray_depth_mm/2-7) {
  gap_z=target_lip_thickness_mm+allowance_mm;
  lower_top=clip_wall_mm;
  upper_bottom=lower_top+gap_z;
  assert(clip_height_mm >= upper_bottom+clip_wall_mm);
  union() {
    // Full-height backstop: at the inboard end of the open-sided C profile.
    translate([x-clip_width_mm/2,origin_y,0])
      cube([clip_width_mm,clip_web_depth_mm,clip_height_mm]);
    // Two jaws that reach OUTWARDS in Y. The opening is open on +Y.
    translate([x-clip_width_mm/2,
               origin_y+clip_web_depth_mm-clip_joint_overlap_mm,0])
      cube([clip_width_mm,clip_reach_mm,clip_wall_mm]);
    translate([x-clip_width_mm/2,
               origin_y+clip_web_depth_mm-clip_joint_overlap_mm,upper_bottom])
      cube([clip_width_mm,clip_reach_mm,clip_wall_mm]);
  }
}

module body() {
  union() {
    draining_tray();
    for (x=[-42,42]) side_entry_cradle(x);
  }
}

// A single CONNECTED three-width test strip on the bed at z=0. Physical
// insertion, retention and creep ARE NOT proven by a successful STL export.
module coupon() {
  w=16;
  web=4;
  reach=13;
  origin_y=-3;
  union() {
    // Plate connects all 3 C-shaped samples so they travel as one test strip.
    translate([-41,-13,0]) cube([82,12,clip_wall_mm]);
    for (i=[0:2]) {
      x=(i-1)*28;
      gap_z=target_lip_thickness_mm+coupon_gap_allowances_mm[i];
      upper_bottom=clip_wall_mm+gap_z;
      translate([x-w/2,origin_y,0])
        cube([w,web,clip_height_mm]);
      translate([x-w/2,origin_y+web-clip_joint_overlap_mm,0])
        cube([w,reach,clip_wall_mm]);
      translate([x-w/2,origin_y+web-clip_joint_overlap_mm,upper_bottom])
        cube([w,reach,clip_wall_mm]);
    }
  }
}

if (mode=="coupon") coupon(); else body();
