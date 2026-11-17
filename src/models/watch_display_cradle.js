import { buildCommerceModel } from './print_commerce_engine.js';
/** Watch Display Cradle — original design, CAD source in printables/watch-display-cradle.scad */
export const assetMeta = {
  "id": "print-commerce.watch-display-cradle.001",
  "slug": "watch-display-cradle",
  "title": "Watch Display Cradle",
  "title_zh": "手表陈列托架",
  "dimensions_m": [
    0.113,
    0.089,
    0.103
  ],
  "source_path": "src/models/watch_display_cradle.js",
  "generator": "createWatchDisplayCradle",
  "collection": "v1.3",
  "commerce_family": "display",
  "variant": 2,
  "cad_path": "printables/watch-display-cradle.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/watch-display-cradle.webp"
};
export function createWatchDisplayCradle() { return buildCommerceModel(assetMeta); }
