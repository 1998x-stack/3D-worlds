import { buildCommerceModel } from './print_commerce_engine.js';
/** Bonsai Display Pot — original design, CAD source in printables/bonsai-display-pot.scad */
export const assetMeta = {
  "id": "print-commerce.bonsai-display-pot.001",
  "slug": "bonsai-display-pot",
  "title": "Bonsai Display Pot",
  "title_zh": "盆景展示盆",
  "dimensions_m": [
    0.116,
    0.112,
    0.116
  ],
  "source_path": "src/models/bonsai_display_pot.js",
  "generator": "createBonsaiDisplayPot",
  "collection": "v1.3",
  "commerce_family": "planter",
  "variant": 4,
  "cad_path": "printables/bonsai-display-pot.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/bonsai-display-pot.webp"
};
export function createBonsaiDisplayPot() { return buildCommerceModel(assetMeta); }
