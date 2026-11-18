import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Cable Reel Matrix scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "electronics.cable-reel-matrix.001",
  "slug": "cable-reel-matrix",
  "title": "Cable Reel Matrix",
  "title_zh": "六位线缆卷轴矩阵",
  "summary": "Six-slot spool rack with individually marked reels and strain relief comb",
  "category": "electronics",
  "tags": [
    "cable",
    "reel",
    "matrix",
    "electronics",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createCableReelMatrix",
  "source_path": "src/models/cable_reel_matrix.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.25,
    0.15,
    0.21
  ],
  "accent": "#79b8a3",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/cable-reel-matrix.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createCableReelMatrix() { return buildV15MarketModel(assetMeta); }
