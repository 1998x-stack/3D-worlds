import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Angled Hex Key Rail scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "tools.angled-hex-key-rail.001",
  "slug": "angled-hex-key-rail",
  "title": "Angled Hex Key Rail",
  "title_zh": "倾斜式内六角扳手分级架",
  "summary": "Nine distinct key profiles with indexing marks, formed elbows and locating collars",
  "category": "tools",
  "tags": [
    "angled",
    "hex",
    "key",
    "rail",
    "tools",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createAngledHexKeyRail",
  "source_path": "src/models/angled_hex_key_rail.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.25,
    0.13,
    0.15
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/angled-hex-key-rail.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createAngledHexKeyRail() { return buildV15MarketModel(assetMeta); }
