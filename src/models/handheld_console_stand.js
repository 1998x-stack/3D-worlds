import { buildCommerceModel } from './print_commerce_engine.js';
/** Handheld Console Stand — original design, CAD source in printables/handheld-console-stand.scad */
export const assetMeta = {
  "id": "print-commerce.handheld-console-stand.001",
  "slug": "handheld-console-stand",
  "title": "Handheld Console Stand",
  "title_zh": "掌机展示支架",
  "dimensions_m": [
    0.147,
    0.09,
    0.112
  ],
  "source_path": "src/models/handheld_console_stand.js",
  "generator": "createHandheldConsoleStand",
  "collection": "v1.2",
  "commerce_family": "gaming",
  "variant": 5,
  "cad_path": "printables/handheld-console-stand.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/handheld-console-stand.webp"
};
export function createHandheldConsoleStand() { return buildCommerceModel(assetMeta); }
