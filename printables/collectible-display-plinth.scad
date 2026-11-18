// SPDX-License-Identifier: MIT
// collectible-display-plinth | Overseas detail refinement batch 03 | original parametric prototype.
// Millimeters, Z-up. Published envelope W x D x H = 110 x 100 x 85.
// Keep this SKU's catalogue identity and family/variant unchanged.
use <lib/commerce_forms.scad>
use <lib/refined_batch03_v2_details.scad>
w = 110; d = 100; h = 85;
label = "CUSTOM";
refined_batch03_v2_form(slug="collectible-display-plinth",family="display",variant=1,w=w,d=d,h=h,label=label);
