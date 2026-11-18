import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Tea Sachet Gravity Ladder scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "kitchen.tea-sachet-gravity-ladder.001",
  "slug": "tea-sachet-gravity-ladder",
  "title": "Tea Sachet Gravity Ladder",
  "title_zh": "茶包重力阶梯整理架",
  "summary": "Five tilted tier magazines with labelled sachet fronts and retrieval tray; not food-contact approved",
  "category": "kitchen",
  "tags": [
    "tea",
    "sachet",
    "gravity",
    "ladder",
    "kitchen",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createTeaSachetGravityLadder",
  "source_path": "src/models/tea_sachet_gravity_ladder.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.25,
    0.3,
    0.16
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/tea-sachet-gravity-ladder.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createTeaSachetGravityLadder() { return buildV15MarketModel(assetMeta); }
