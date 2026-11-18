import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Seed Courier Explorer scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "characters.seed-courier-explorer.001",
  "slug": "seed-courier-explorer",
  "title": "Seed Courier Explorer",
  "title_zh": "种子快递探险者",
  "summary": "Original seed-collecting explorer with sealed backpack vials and a surveying probe",
  "category": "characters",
  "tags": [
    "seed",
    "courier",
    "explorer",
    "characters",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createSeedCourierExplorer",
  "source_path": "src/models/seed_courier_explorer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.11,
    0.18,
    0.12
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/seed-courier-explorer.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createSeedCourierExplorer() { return buildV15MarketModel(assetMeta); }
