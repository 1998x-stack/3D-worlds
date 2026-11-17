// SPDX-License-Identifier: MIT
// Craft Spool Organizer | 3D Worlds overseas batch 02 | original, unverified CAD.
// Millimeters; Z-up; fixed published envelope W x D x H = 139 x 96 x 84.
// Retain previous v1.3 family/variant metadata for compatible exporter validation.
use <lib/commerce_forms.scad>
use <lib/refined_batch02_forms.scad>
w = 139; d = 96; h = 84;
// Edit label below where applicable. Do not assume lettering / openings fit every input.
label = "CUSTOM";
refined_batch02_form(slug="craft-spool-organizer",family="organizer",variant=4,w=w,d=d,h=h,label=label);
