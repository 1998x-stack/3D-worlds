// SPDX-License-Identifier: MIT
// Handheld Console Stand | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 147;
depth_mm = 112;
height_mm = 90;
refined_form(slug="handheld-console-stand", family="gaming", variant=5, w=width_mm, d=depth_mm, h=height_mm);
