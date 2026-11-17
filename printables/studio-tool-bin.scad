// SPDX-License-Identifier: MIT
// Studio Tool Bin | Refined batch 01 | OpenSCAD mm/Z-up.
// Prototype: slicer, fit, material, stability and safety remain UNVERIFIED.
use <lib/commerce_forms.scad> // v1.3 compatibility; other SKUs retain their original template.
use <lib/refined_forms.scad>
width_mm = 142;
depth_mm = 99;
height_mm = 88;
refined_form(slug="studio-tool-bin", family="organizer", variant=5, w=width_mm, d=depth_mm, h=height_mm);
