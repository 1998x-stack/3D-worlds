import { buildCommerceModel } from './print_commerce_engine.js';
/** Ribbed Succulent Pot — original design, CAD source in printables/ribbed-succulent-pot.scad */
export const assetMeta = {
  "id": "print-commerce.ribbed-succulent-pot.001",
  "slug": "ribbed-succulent-pot",
  "title": "Ribbed Succulent Pot",
  "title_zh": "竖纹多肉盆",
  "dimensions_m": [
    0.107,
    0.1,
    0.107
  ],
  "source_path": "src/models/ribbed_succulent_pot.js",
  "generator": "createRibbedSucculentPot",
  "collection": "v1.2",
  "commerce_family": "planter",
  "variant": 1,
  "cad_path": "printables/ribbed-succulent-pot.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/ribbed-succulent-pot.webp"
};
export function createRibbedSucculentPot() { return buildCommerceModel(assetMeta); }
