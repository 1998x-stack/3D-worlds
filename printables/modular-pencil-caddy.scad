// SPDX-License-Identifier: MIT
// Modular Pencil Caddy | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 130;
depth_mm = 87;
height_mm = 72;
refined_form(slug="modular-pencil-caddy", family="organizer", variant=1, w=width_mm, d=depth_mm, h=height_mm);
