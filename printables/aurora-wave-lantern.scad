// SPDX-License-Identifier: MIT
// Aurora Wave Lantern | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 87;
depth_mm = 87;
height_mm = 112;
refined_form(slug="aurora-wave-lantern", family="lantern", variant=2, w=width_mm, d=depth_mm, h=height_mm);
