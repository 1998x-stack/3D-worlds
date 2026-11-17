import { buildCommerceModel } from './print_commerce_engine.js';
/** Modular Jewelry Plinth — original design, CAD source in printables/modular-jewelry-plinth.scad */
export const assetMeta = {
  "id": "print-commerce.modular-jewelry-plinth.001",
  "slug": "modular-jewelry-plinth",
  "title": "Modular Jewelry Plinth",
  "title_zh": "模块化珠宝陈列台",
  "dimensions_m": [
    0.124,
    0.115,
    0.094
  ],
  "source_path": "src/models/modular_jewelry_plinth.js",
  "generator": "createModularJewelryPlinth",
  "collection": "v1.3",
  "commerce_family": "jewelry",
  "variant": 5,
  "cad_path": "printables/modular-jewelry-plinth.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/modular-jewelry-plinth.webp"
};
export function createModularJewelryPlinth() { return buildCommerceModel(assetMeta); }
