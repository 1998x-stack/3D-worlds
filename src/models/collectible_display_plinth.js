import { buildCommerceModel } from './print_commerce_engine.js';
/** Collectible Display Plinth — original design, CAD source in printables/collectible-display-plinth.scad */
export const assetMeta = {
  "id": "print-commerce.collectible-display-plinth.001",
  "slug": "collectible-display-plinth",
  "title": "Collectible Display Plinth",
  "title_zh": "收藏品展示底座",
  "dimensions_m": [
    0.11,
    0.085,
    0.1
  ],
  "source_path": "src/models/collectible_display_plinth.js",
  "generator": "createCollectibleDisplayPlinth",
  "collection": "v1.3",
  "commerce_family": "display",
  "variant": 1,
  "cad_path": "printables/collectible-display-plinth.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/collectible-display-plinth.webp"
};
export function createCollectibleDisplayPlinth() { return buildCommerceModel(assetMeta); }
