// SPDX-License-Identifier: MIT
// House Number Plaque | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 145 x 71 x 11.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 145; d = 71; h = 11;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "108";
refined_batch02_form(slug="house-number-plaque",family="gift",variant=3,w=w,d=d,h=h,label=label);
