import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Dual Razor Drain Dock scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "bathroom.dual-razor-drain-dock.001",
  "slug": "dual-razor-drain-dock",
  "title": "Dual Razor Drain Dock",
  "title_zh": "双位剃须刀排水座",
  "summary": "Two-handle cradles with a sloped drainage deck and isolated blade shields",
  "category": "bathroom",
  "tags": [
    "dual",
    "razor",
    "drain",
    "dock",
    "bathroom",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createDualRazorDrainDock",
  "source_path": "src/models/dual_razor_drain_dock.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.22,
    0.12,
    0.16
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/dual-razor-drain-dock.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createDualRazorDrainDock() { return buildV15MarketModel(assetMeta); }
