import { buildCommerceModel } from './print_commerce_engine.js';
/** Fantasy Crest Badge — original design, CAD source in printables/fantasy-crest-badge.scad */
export const assetMeta = {
  "id": "print-commerce.fantasy-crest-badge.001",
  "slug": "fantasy-crest-badge",
  "title": "Fantasy Crest Badge",
  "title_zh": "奇幻原创纹章",
  "dimensions_m": [
    0.078,
    0.089,
    0.023
  ],
  "source_path": "src/models/fantasy_crest_badge.js",
  "generator": "createFantasyCrestBadge",
  "collection": "v1.2",
  "commerce_family": "cosplay",
  "variant": 2,
  "cad_path": "printables/fantasy-crest-badge.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/fantasy-crest-badge.webp"
};
export function createFantasyCrestBadge() { return buildCommerceModel(assetMeta); }
