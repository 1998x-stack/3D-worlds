import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Faceted Shadow Lantern scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "decor.faceted-shadow-lantern.001",
  "slug": "faceted-shadow-lantern",
  "title": "Faceted Shadow Lantern",
  "title_zh": "棱面光影灯笼",
  "summary": "Geometric lantern with convergent ribs, diffuser and facet details; decorative non-electrical scene",
  "category": "decor",
  "tags": [
    "faceted",
    "shadow",
    "lantern",
    "decor",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createFacetedShadowLantern",
  "source_path": "src/models/faceted_shadow_lantern.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.2,
    0.28,
    0.2
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/faceted-shadow-lantern.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createFacetedShadowLantern() { return buildV15MarketModel(assetMeta); }
