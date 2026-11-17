// SPDX-License-Identifier: MIT
// Arc Earring Display | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 112 x 82 x 99.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 112; d = 82; h = 99;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="arc-earring-display",family="jewelry",variant=1,w=w,d=d,h=h,label=label);
