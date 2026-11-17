// SPDX-License-Identifier: MIT
// Trading Card Display | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 116;
depth_mm = 106;
height_mm = 93;
refined_form(slug="trading-card-display", family="display", variant=3, w=width_mm, d=depth_mm, h=height_mm);
