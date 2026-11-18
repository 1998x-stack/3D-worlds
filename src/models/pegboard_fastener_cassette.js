import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Pegboard Fastener Cassette scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "tools.pegboard-fastener-cassette.001",
  "slug": "pegboard-fastener-cassette",
  "title": "Pegboard Fastener Cassette",
  "title_zh": "洞洞板紧固件抽屉盒",
  "summary": "Pegboard-compatible-looking carrier with visible cell matrix, three cassettes and label pockets",
  "category": "tools",
  "tags": [
    "pegboard",
    "fastener",
    "cassette",
    "tools",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createPegboardFastenerCassette",
  "source_path": "src/models/pegboard_fastener_cassette.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.23,
    0.23,
    0.17
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/pegboard-fastener-cassette.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createPegboardFastenerCassette() { return buildV15MarketModel(assetMeta); }
