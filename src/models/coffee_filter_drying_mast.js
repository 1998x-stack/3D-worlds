import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Coffee Filter Drying Mast scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "kitchen.coffee-filter-drying-mast.001",
  "slug": "coffee-filter-drying-mast",
  "title": "Coffee Filter Drying Mast",
  "title_zh": "手冲滤纸沥干支架",
  "summary": "Vertical coffee accessory mast with paired drying arms, drip saucers and slatted tray",
  "category": "kitchen",
  "tags": [
    "coffee",
    "filter",
    "drying",
    "mast",
    "kitchen",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createCoffeeFilterDryingMast",
  "source_path": "src/models/coffee_filter_drying_mast.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.23,
    0.28,
    0.18
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/coffee-filter-drying-mast.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createCoffeeFilterDryingMast() { return buildV15MarketModel(assetMeta); }
