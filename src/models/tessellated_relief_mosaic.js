import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Tessellated Relief Mosaic scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "decor.tessellated-relief-mosaic.001",
  "slug": "tessellated-relief-mosaic",
  "title": "Tessellated Relief Mosaic",
  "title_zh": "密铺立体浮雕装饰墙",
  "summary": "Twenty original raised hex cells with alternating matte finishes and relief insets",
  "category": "decor",
  "tags": [
    "tessellated",
    "relief",
    "mosaic",
    "decor",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createTessellatedReliefMosaic",
  "source_path": "src/models/tessellated_relief_mosaic.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.28,
    0.05,
    0.22
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/tessellated-relief-mosaic.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createTessellatedReliefMosaic() { return buildV15MarketModel(assetMeta); }
