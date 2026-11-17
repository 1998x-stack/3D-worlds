import { buildCommerceModel } from './print_commerce_engine.js';
/** Monogram Desk Coaster — original design, CAD source in printables/monogram-desk-coaster.scad */
export const assetMeta = {
  "id": "print-commerce.monogram-desk-coaster.001",
  "slug": "monogram-desk-coaster",
  "title": "Monogram Desk Coaster",
  "title_zh": "字母装饰杯垫",
  "dimensions_m": [
    0.155,
    0.013,
    0.075
  ],
  "source_path": "src/models/monogram_desk_coaster.js",
  "generator": "createMonogramDeskCoaster",
  "collection": "v1.2",
  "commerce_family": "gift",
  "variant": 5,
  "cad_path": "printables/monogram-desk-coaster.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/monogram-desk-coaster.webp"
};
export function createMonogramDeskCoaster() { return buildCommerceModel(assetMeta); }
