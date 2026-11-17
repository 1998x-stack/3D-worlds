import { buildCommerceModel } from './print_commerce_engine.js';
/** Arc Earring Display — original design, CAD source in printables/arc-earring-display.scad */
export const assetMeta = {
  "id": "print-commerce.arc-earring-display.001",
  "slug": "arc-earring-display",
  "title": "Arc Earring Display",
  "title_zh": "拱形耳饰陈列架",
  "dimensions_m": [
    0.112,
    0.099,
    0.082
  ],
  "source_path": "src/models/arc_earring_display.js",
  "generator": "createArcEarringDisplay",
  "collection": "v1.3",
  "commerce_family": "jewelry",
  "variant": 1,
  "cad_path": "printables/arc-earring-display.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/arc-earring-display.webp"
};
export function createArcEarringDisplay() { return buildCommerceModel(assetMeta); }
