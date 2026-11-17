import { buildCommerceModel } from './print_commerce_engine.js';
/** Forest Shadow Lantern — original design, CAD source in printables/forest-shadow-lantern.scad */
export const assetMeta = {
  "id": "print-commerce.forest-shadow-lantern.001",
  "slug": "forest-shadow-lantern",
  "title": "Forest Shadow Lantern",
  "title_zh": "森林剪影灯罩",
  "dimensions_m": [
    0.093,
    0.12,
    0.093
  ],
  "source_path": "src/models/forest_shadow_lantern.js",
  "generator": "createForestShadowLantern",
  "collection": "v1.2",
  "commerce_family": "lantern",
  "variant": 4,
  "cad_path": "printables/forest-shadow-lantern.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/forest-shadow-lantern.webp"
};
export function createForestShadowLantern() { return buildCommerceModel(assetMeta); }
