import { buildCommerceModel } from './print_commerce_engine.js';
/** Miniature Tiered Riser — original design, CAD source in printables/miniature-tiered-riser.scad */
export const assetMeta = {
  "id": "print-commerce.miniature-tiered-riser.001",
  "slug": "miniature-tiered-riser",
  "title": "Miniature Tiered Riser",
  "title_zh": "三层模型展示台",
  "dimensions_m": [
    0.119,
    0.097,
    0.109
  ],
  "source_path": "src/models/miniature_tiered_riser.js",
  "generator": "createMiniatureTieredRiser",
  "collection": "v1.2",
  "commerce_family": "display",
  "variant": 4,
  "cad_path": "printables/miniature-tiered-riser.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/miniature-tiered-riser.webp"
};
export function createMiniatureTieredRiser() { return buildCommerceModel(assetMeta); }
