// SPDX-License-Identifier: MIT
// Watch Display Cradle | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 113 x 103 x 89.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 113; d = 103; h = 89;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="watch-display-cradle",family="display",variant=2,w=w,d=d,h=h,label=label);
