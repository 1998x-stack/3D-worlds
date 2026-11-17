import { buildCommerceModel } from './print_commerce_engine.js';
/** Alpine Cabin Miniature — original design, CAD source in printables/alpine-cabin-miniature.scad */
export const assetMeta = {
  "id": "print-commerce.alpine-cabin-miniature.001",
  "slug": "alpine-cabin-miniature",
  "title": "Alpine Cabin Miniature",
  "title_zh": "高山木屋微缩场景",
  "dimensions_m": [
    0.136,
    0.079,
    0.093
  ],
  "source_path": "src/models/alpine_cabin_miniature.js",
  "generator": "createAlpineCabinMiniature",
  "collection": "v1.3",
  "commerce_family": "scenery",
  "variant": 3,
  "cad_path": "printables/alpine-cabin-miniature.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/alpine-cabin-miniature.webp"
};
export function createAlpineCabinMiniature() { return buildCommerceModel(assetMeta); }
