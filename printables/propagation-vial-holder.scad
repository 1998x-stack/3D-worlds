// SPDX-License-Identifier: MIT
// Propagation Vial Holder | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 113;
depth_mm = 113;
height_mm = 108;
refined_form(slug="propagation-vial-holder", family="planter", variant=3, w=width_mm, d=depth_mm, h=height_mm);
