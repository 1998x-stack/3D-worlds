import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Rainscreen Breeze Block scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "architecture.rainscreen-breeze-block.001",
  "slug": "rainscreen-breeze-block",
  "title": "Rainscreen Breeze Block",
  "title_zh": "雨幕透风格栅砌块",
  "summary": "Twenty perforation-looking hex cells and staggered shading fins in a framed study",
  "category": "architecture",
  "tags": [
    "rainscreen",
    "breeze",
    "block",
    "architecture",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createRainscreenBreezeBlock",
  "source_path": "src/models/rainscreen_breeze_block.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.28,
    0.27,
    0.09
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/rainscreen-breeze-block.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createRainscreenBreezeBlock() { return buildV15MarketModel(assetMeta); }
