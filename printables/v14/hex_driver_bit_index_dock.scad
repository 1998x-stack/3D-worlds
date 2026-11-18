// V1.4.3 / CAD engineering pilot / MIT / mm / Z-up.
// A test-fit hypothesis, not proof of real 1/4-inch tool retention.
$fn=64;
mode="body"; // "body" or "coupon"
columns=4;
rows=4;
pitch_mm=20;
base_width_mm=108;
base_depth_mm=108;
base_height_mm=18;
corner_radius_mm=7;
pocket_depth_mm=12;
bit_across_flats_mm=6.35; // measure the actual bit (1/4 inch nominal)
socket_clearance_per_side_mm=0.25;
socket_mouth_chamfer_height_mm=0.8;
socket_mouth_chamfer_increase_mm=0.9; // across-flats increase at lip
coupon_gap_allowances_mm=[0.15,0.25,0.40];
coupon_pocket_depth_mm=4;
coupon_top_mm=10;

floor_mm=base_height_mm-pocket_depth_mm;
assert(columns==4 && rows==4 && pitch_mm>17,"indexed cavity grid");
assert(floor_mm>=3.5 && base_height_mm>=12,"bottom too thin");
assert(pocket_depth_mm>=bit_across_flats_mm,"pocket too shallow for pilot");
assert(base_width_mm>(columns-1)*pitch_mm+18 &&
       base_depth_mm>(rows-1)*pitch_mm+18,"insufficient edge margin");
assert(socket_clearance_per_side_mm>=0 && socket_clearance_per_side_mm<=0.7,
       "invalid assumed tool tolerance");
assert(socket_mouth_chamfer_height_mm>0 &&
       socket_mouth_chamfer_height_mm<=1.2,"unsafe chamfer parameter");
assert(coupon_top_mm-coupon_pocket_depth_mm>=4.0,
       "coupon bottom too thin");

module rounded_base(w,d,h,r) {
  hull() {
    for(x=[-w/2+r,w/2-r]) for(y=[-d/2+r,d/2-r])
      translate([x,y,0]) cylinder(h=h,r=r);
  }
}

// R = AF / sqrt(3) is exact for a regular hexagon with a 30 degree rotation.
module hex_socket(af,h) {
  rotate([0,0,30]) cylinder(h=h,r=af/sqrt(3),$fn=6);
}

module hex_entry_chamfer(af,z) {
  rotate([0,0,30])
    translate([0,0,z])
      cylinder(h=socket_mouth_chamfer_height_mm+0.05,
               r1=af/sqrt(3),
               r2=(af+socket_mouth_chamfer_increase_mm)/sqrt(3),$fn=6);
}

module body() {
  union() {
    difference() {
      rounded_base(base_width_mm,base_depth_mm,base_height_mm,corner_radius_mm);
      for(i=[0:columns-1]) for(j=[0:rows-1]) {
        x=(i-(columns-1)/2)*pitch_mm;
        y=(j-(rows-1)/2)*pitch_mm;
        af=bit_across_flats_mm+2*socket_clearance_per_side_mm;
        translate([x,y,base_height_mm-pocket_depth_mm])
          hex_socket(af,pocket_depth_mm+1);
        translate([x,y,0])
          hex_entry_chamfer(af,base_height_mm-socket_mouth_chamfer_height_mm);
      }
      // Index grooves: decoration and visual selection, NOT fit-critical.
      for(j=[0:rows-1]) {
        y=(j-(rows-1)/2)*pitch_mm;
        translate([-base_width_mm/2+4,y-0.65,base_height_mm-0.8])
          cube([5,1.3,1.2]);
      }
    }
  }
}

// Three connected coupons for measured across-flats fit, clearance PER side:
// 0.15 / 0.25 / 0.40mm. Floor = 6mm, pocket = 4mm; no fake 3.5mm claim.
module coupon() {
  plate_w=74;
  web_thickness=3;
  unit_w=17;
  union() {
    translate([-plate_w/2,-13,0]) cube([plate_w,26,web_thickness]);
    for(i=[0:2]) {
      x=(i-1)*23;
      difference() {
        translate([x-unit_w/2,-unit_w/2,web_thickness-0.1])
          cube([unit_w,unit_w,coupon_top_mm-web_thickness+0.1]);
        translate([x,0,coupon_top_mm-coupon_pocket_depth_mm])
          hex_socket(bit_across_flats_mm+2*coupon_gap_allowances_mm[i],
                     coupon_pocket_depth_mm+1);
      }
    }
  }
}
if(mode=="coupon") coupon(); else body();
