import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Solder Tip Indexing Station scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "electronics.solder-tip-indexing-station.001",
  "slug": "solder-tip-indexing-station",
  "title": "Solder Tip Indexing Station",
  "title_zh": "烙铁头编号隔离收纳站",
  "summary": "Indexed soldering tip holder with a heat-warning rear fence and individual bore guides; non heat-rated scene",
  "category": "electronics",
  "tags": [
    "solder",
    "tip",
    "indexing",
    "station",
    "electronics",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createSolderTipIndexingStation",
  "source_path": "src/models/solder_tip_indexing_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.21,
    0.14,
    0.16
  ],
  "accent": "#79b8a3",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/solder-tip-indexing-station.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createSolderTipIndexingStation() { return buildV15MarketModel(assetMeta); }
