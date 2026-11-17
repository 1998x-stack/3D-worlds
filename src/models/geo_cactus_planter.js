import { buildCommerceModel } from './print_commerce_engine.js';
/** Geo Cactus Planter — original design, CAD source in printables/geo-cactus-planter.scad */
export const assetMeta = {
  "id": "print-commerce.geo-cactus-planter.001",
  "slug": "geo-cactus-planter",
  "title": "Geo Cactus Planter",
  "title_zh": "几何仙人掌花盆",
  "dimensions_m": [
    0.11,
    0.104,
    0.11
  ],
  "source_path": "src/models/geo_cactus_planter.js",
  "generator": "createGeoCactusPlanter",
  "collection": "v1.2",
  "commerce_family": "planter",
  "variant": 2,
  "cad_path": "printables/geo-cactus-planter.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/geo-cactus-planter.webp"
};
export function createGeoCactusPlanter() { return buildCommerceModel(assetMeta); }
