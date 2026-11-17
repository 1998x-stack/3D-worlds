// SPDX-License-Identifier: MIT
// Tabletop Dice Tray | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 141 x 106 x 82.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 141; d = 106; h = 82;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="tabletop-dice-tray",family="gaming",variant=3,w=w,d=d,h=h,label=label);
