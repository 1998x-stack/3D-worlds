// SPDX-License-Identifier: MIT
// wedding-place-card | Overseas detail refinement batch 03 | original parametric prototype.
// Millimeters, Z-up. Published envelope W x D x H = 140 x 69 x 10.
// Keep this SKU's catalogue identity and family/variant unchanged.
use <lib/commerce_forms.scad>
use <lib/refined_batch03_v2_details.scad>
w = 140; d = 69; h = 10;
label = "TABLE";
refined_batch03_v2_form(slug="wedding-place-card",family="gift",variant=2,w=w,d=d,h=h,label=label);
