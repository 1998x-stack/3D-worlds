// SPDX-License-Identifier: MIT
// Custom Desk Nameplate | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 135 x 67 x 9.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 135; d = 67; h = 9;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="custom-desk-nameplate",family="gift",variant=1,w=w,d=d,h=h,label=label);
