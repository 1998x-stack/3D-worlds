// SPDX-License-Identifier: MIT
// retro-cartridge-rack | Overseas detail refinement batch 03 | original parametric prototype.
// Millimeters, Z-up. Published envelope W x D x H = 138 x 103 x 78.
// Keep this SKU's catalogue identity and family/variant unchanged.
use <lib/commerce_forms.scad>
use <lib/refined_batch03_v2_details.scad>
w = 138; d = 103; h = 78;
label = "CUSTOM";
refined_batch03_v2_form(slug="retro-cartridge-rack",family="gaming",variant=2,w=w,d=d,h=h,label=label);
