import { buildCommerceModel } from './print_commerce_engine.js';
/** Ring Cone Tower — original design, CAD source in printables/ring-cone-tower.scad */
export const assetMeta = {
  "id": "print-commerce.ring-cone-tower.001",
  "slug": "ring-cone-tower",
  "title": "Ring Cone Tower",
  "title_zh": "戒指锥形展示座",
  "dimensions_m": [
    0.115,
    0.103,
    0.085
  ],
  "source_path": "src/models/ring_cone_tower.js",
  "generator": "createRingConeTower",
  "collection": "v1.2",
  "commerce_family": "jewelry",
  "variant": 2,
  "cad_path": "printables/ring-cone-tower.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/ring-cone-tower.webp"
};
export function createRingConeTower() { return buildCommerceModel(assetMeta); }
