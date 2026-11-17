import { buildCommerceModel } from './print_commerce_engine.js';
/** Wedding Place Card — original design, CAD source in printables/wedding-place-card.scad */
export const assetMeta = {
  "id": "print-commerce.wedding-place-card.001",
  "slug": "wedding-place-card",
  "title": "Wedding Place Card",
  "title_zh": "婚礼席位姓名牌",
  "dimensions_m": [
    0.14,
    0.01,
    0.069
  ],
  "source_path": "src/models/wedding_place_card.js",
  "generator": "createWeddingPlaceCard",
  "collection": "v1.2",
  "commerce_family": "gift",
  "variant": 2,
  "cad_path": "printables/wedding-place-card.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/wedding-place-card.webp"
};
export function createWeddingPlaceCard() { return buildCommerceModel(assetMeta); }
