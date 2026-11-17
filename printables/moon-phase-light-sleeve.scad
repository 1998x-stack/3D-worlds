// SPDX-License-Identifier: MIT
// Moon Phase Light Sleeve | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 84;
depth_mm = 84;
height_mm = 108;
refined_form(slug="moon-phase-light-sleeve", family="lantern", variant=1, w=width_mm, d=depth_mm, h=height_mm);
