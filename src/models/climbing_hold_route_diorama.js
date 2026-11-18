import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Climbing Hold Route Diorama scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "sports.climbing-hold-route-diorama.001",
  "slug": "climbing-hold-route-diorama",
  "title": "Climbing Hold Route Diorama",
  "title_zh": "攀岩线路教学微景观",
  "summary": "Twenty raised holds, individual fasteners and landing mat on miniature non-load-bearing wall",
  "category": "sports",
  "tags": [
    "climbing",
    "hold",
    "route",
    "diorama",
    "sports",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createClimbingHoldRouteDiorama",
  "source_path": "src/models/climbing_hold_route_diorama.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.28,
    0.35,
    0.17
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/climbing-hold-route-diorama.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createClimbingHoldRouteDiorama() { return buildV15MarketModel(assetMeta); }
