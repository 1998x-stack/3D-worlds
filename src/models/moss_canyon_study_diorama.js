import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Moss Canyon Study Diorama scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "nature.moss-canyon-study-diorama.001",
  "slug": "moss-canyon-study-diorama",
  "title": "Moss Canyon Study Diorama",
  "title_zh": "苔藓峡谷地貌微景观",
  "summary": "Layered terrain strata, moss mats, stream bed and pebble trail in a miniature study",
  "category": "nature",
  "tags": [
    "moss",
    "canyon",
    "study",
    "diorama",
    "nature",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createMossCanyonStudyDiorama",
  "source_path": "src/models/moss_canyon_study_diorama.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.28,
    0.15,
    0.22
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/moss-canyon-study-diorama.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createMossCanyonStudyDiorama() { return buildV15MarketModel(assetMeta); }
