import { buildCommerceModel } from './print_commerce_engine.js';
/** Trading Card Display — original design, CAD source in printables/trading-card-display.scad */
export const assetMeta = {
  "id": "print-commerce.trading-card-display.001",
  "slug": "trading-card-display",
  "title": "Trading Card Display",
  "title_zh": "收藏卡片展示架",
  "dimensions_m": [
    0.116,
    0.093,
    0.106
  ],
  "source_path": "src/models/trading_card_display.js",
  "generator": "createTradingCardDisplay",
  "collection": "v1.3",
  "commerce_family": "display",
  "variant": 3,
  "cad_path": "printables/trading-card-display.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/trading-card-display.webp"
};
export function createTradingCardDisplay() { return buildCommerceModel(assetMeta); }
