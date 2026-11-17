// SPDX-License-Identifier: MIT
// Minimal Arch Nightlight | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 96 x 96 x 124.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 96; d = 96; h = 124;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="minimal-arch-nightlight",family="lantern",variant=5,w=w,d=d,h=h,label=label);
