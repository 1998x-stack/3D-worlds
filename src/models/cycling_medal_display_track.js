import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Cycling Medal Display Track scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "sports.cycling-medal-display-track.001",
  "slug": "cycling-medal-display-track",
  "title": "Cycling Medal Display Track",
  "title_zh": "骑行奖牌展示轨道",
  "summary": "Five independent medals with hanging ribbon geometry and engraved-look name rail",
  "category": "sports",
  "tags": [
    "cycling",
    "medal",
    "display",
    "track",
    "sports",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createCyclingMedalDisplayTrack",
  "source_path": "src/models/cycling_medal_display_track.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.27,
    0.26,
    0.16
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/cycling-medal-display-track.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createCyclingMedalDisplayTrack() { return buildV15MarketModel(assetMeta); }
