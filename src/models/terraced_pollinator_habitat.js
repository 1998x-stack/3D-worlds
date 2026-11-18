import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Terraced Pollinator Habitat scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "nature.terraced-pollinator-habitat.001",
  "slug": "terraced-pollinator-habitat",
  "title": "Terraced Pollinator Habitat",
  "title_zh": "分层传粉昆虫栖息地",
  "summary": "Tiered pollinator diorama with genuine-looking nesting tunnels and stalk/flower clusters",
  "category": "nature",
  "tags": [
    "terraced",
    "pollinator",
    "habitat",
    "nature",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createTerracedPollinatorHabitat",
  "source_path": "src/models/terraced_pollinator_habitat.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.34,
    0.16,
    0.22
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/terraced-pollinator-habitat.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createTerracedPollinatorHabitat() { return buildV15MarketModel(assetMeta); }
