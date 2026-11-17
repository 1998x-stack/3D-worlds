import { buildCommerceModel } from './print_commerce_engine.js';
/** Lunar Fox Bust — original design, CAD source in printables/lunar-fox-bust.scad */
export const assetMeta = {
  "id": "print-commerce.lunar-fox-bust.001",
  "slug": "lunar-fox-bust",
  "title": "Lunar Fox Bust",
  "title_zh": "月狐半身像",
  "dimensions_m": [
    0.098,
    0.133,
    0.086
  ],
  "source_path": "src/models/lunar_fox_bust.js",
  "generator": "createLunarFoxBust",
  "collection": "v1.3",
  "commerce_family": "figurine",
  "variant": 3,
  "cad_path": "printables/lunar-fox-bust.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/lunar-fox-bust.webp"
};
export function createLunarFoxBust() { return buildCommerceModel(assetMeta); }
