// SPDX-License-Identifier: MIT
// Paintbrush Workshop Rack | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 136;
depth_mm = 93;
height_mm = 80;
refined_form(slug="paintbrush-workshop-rack", family="organizer", variant=3, w=width_mm, d=depth_mm, h=height_mm);
