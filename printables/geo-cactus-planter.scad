// SPDX-License-Identifier: MIT
// Geo Cactus Planter | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 110 x 110 x 104.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 110; d = 110; h = 104;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="geo-cactus-planter",family="planter",variant=2,w=w,d=d,h=h,label=label);
