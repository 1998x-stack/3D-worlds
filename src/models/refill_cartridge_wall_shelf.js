import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Refill Cartridge Wall Shelf scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "bathroom.refill-cartridge-wall-shelf.001",
  "slug": "refill-cartridge-wall-shelf",
  "title": "Refill Cartridge Wall Shelf",
  "title_zh": "替换芯壁挂收纳层架",
  "summary": "Wall panel with translucent cartridge windows, detachable-looking retention lips and labelled bays",
  "category": "bathroom",
  "tags": [
    "refill",
    "cartridge",
    "wall",
    "shelf",
    "bathroom",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createRefillCartridgeWallShelf",
  "source_path": "src/models/refill_cartridge_wall_shelf.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.26,
    0.31,
    0.18
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/refill-cartridge-wall-shelf.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createRefillCartridgeWallShelf() { return buildV15MarketModel(assetMeta); }
