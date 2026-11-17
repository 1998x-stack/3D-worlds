import { buildCommerceModel } from './print_commerce_engine.js';
/** Alchemist Costume Brooch — original design, CAD source in printables/alchemist-costume-brooch.scad */
export const assetMeta = {
  "id": "print-commerce.alchemist-costume-brooch.001",
  "slug": "alchemist-costume-brooch",
  "title": "Alchemist Costume Brooch",
  "title_zh": "炼金师服装胸针",
  "dimensions_m": [
    0.084,
    0.012,
    0.084
  ],
  "source_path": "src/models/alchemist_costume_brooch.js",
  "generator": "createAlchemistCostumeBrooch",
  "collection": "v1.2",
  "commerce_family": "cosplay",
  "variant": 4,
  "cad_path": "printables/alchemist-costume-brooch.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/alchemist-costume-brooch.webp"
};
export function createAlchemistCostumeBrooch() { return buildCommerceModel(assetMeta); }
