import { buildCommerceModel } from './print_commerce_engine.js';
/** Eyewear Display Stand — original design, CAD source in printables/eyewear-display-stand.scad */
export const assetMeta = {
  "id": "print-commerce.eyewear-display-stand.001",
  "slug": "eyewear-display-stand",
  "title": "Eyewear Display Stand",
  "title_zh": "眼镜展示托架",
  "dimensions_m": [
    0.122,
    0.101,
    0.112
  ],
  "source_path": "src/models/eyewear_display_stand.js",
  "generator": "createEyewearDisplayStand",
  "collection": "v1.3",
  "commerce_family": "display",
  "variant": 5,
  "cad_path": "printables/eyewear-display-stand.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/eyewear-display-stand.webp"
};
export function createEyewearDisplayStand() { return buildCommerceModel(assetMeta); }
