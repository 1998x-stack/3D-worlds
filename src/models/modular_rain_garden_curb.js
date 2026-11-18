import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Modular Rain Garden Curb scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "urban.modular-rain-garden-curb.001",
  "slug": "modular-rain-garden-curb",
  "title": "Modular Rain Garden Curb",
  "title_zh": "模块化雨水花园路缘",
  "summary": "Water-management curb diorama with permeable inlets, planted grasses and blue drainage channel",
  "category": "urban",
  "tags": [
    "modular",
    "rain",
    "garden",
    "curb",
    "urban",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createModularRainGardenCurb",
  "source_path": "src/models/modular_rain_garden_curb.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.31,
    0.12,
    0.19
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/modular-rain-garden-curb.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createModularRainGardenCurb() { return buildV15MarketModel(assetMeta); }
