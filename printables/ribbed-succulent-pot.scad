// SPDX-License-Identifier: MIT
// Ribbed Succulent Pot | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 107;
depth_mm = 107;
height_mm = 100;
refined_form(slug="ribbed-succulent-pot", family="planter", variant=1, w=width_mm, d=depth_mm, h=height_mm);
