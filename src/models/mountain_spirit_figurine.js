import { buildCommerceModel } from './print_commerce_engine.js';
/** Mountain Spirit Figurine — original design, CAD source in printables/mountain-spirit-figurine.scad */
export const assetMeta = {
  "id": "print-commerce.mountain-spirit-figurine.001",
  "slug": "mountain-spirit-figurine",
  "title": "Mountain Spirit Figurine",
  "title_zh": "山灵原创雕像",
  "dimensions_m": [
    0.104,
    0.141,
    0.092
  ],
  "source_path": "src/models/mountain_spirit_figurine.js",
  "generator": "createMountainSpiritFigurine",
  "collection": "v1.3",
  "commerce_family": "figurine",
  "variant": 5,
  "cad_path": "printables/mountain-spirit-figurine.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/mountain-spirit-figurine.webp"
};
export function createMountainSpiritFigurine() { return buildCommerceModel(assetMeta); }
