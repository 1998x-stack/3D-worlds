import { buildCommerceModel } from './print_commerce_engine.js';
/** Universal Controller Cradle — original design, CAD source in printables/universal-controller-cradle.scad */
export const assetMeta = {
  "id": "print-commerce.universal-controller-cradle.001",
  "slug": "universal-controller-cradle",
  "title": "Universal Controller Cradle",
  "title_zh": "通用手柄托架",
  "dimensions_m": [
    0.135,
    0.074,
    0.1
  ],
  "source_path": "src/models/universal_controller_cradle.js",
  "generator": "createUniversalControllerCradle",
  "collection": "v1.2",
  "commerce_family": "gaming",
  "variant": 1,
  "cad_path": "printables/universal-controller-cradle.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/universal-controller-cradle.webp"
};
export function createUniversalControllerCradle() { return buildCommerceModel(assetMeta); }
