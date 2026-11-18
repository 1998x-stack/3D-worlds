// SPDX-License-Identifier: MIT
// anniversary-message-plaque | Overseas detail refinement batch 03 | original parametric prototype.
// Millimeters, Z-up. Published envelope W x D x H = 150 x 73 x 12.
// Keep this SKU's catalogue identity and family/variant unchanged.
use <lib/commerce_forms.scad>
use <lib/refined_batch03_v2_details.scad>
w = 150; d = 73; h = 12;
label = "LOVE ALWAYS";
refined_batch03_v2_form(slug="anniversary-message-plaque",family="gift",variant=4,w=w,d=d,h=h,label=label);
