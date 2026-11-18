import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Bioluminescent Sonar Buoy scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "scifi.bioluminescent-sonar-buoy.001",
  "slug": "bioluminescent-sonar-buoy",
  "title": "Bioluminescent Sonar Buoy",
  "title_zh": "生物荧光声呐浮标",
  "summary": "Research buoy with radial stabilization arms, glow indicators and a sonar-looking sensor",
  "category": "scifi",
  "tags": [
    "bioluminescent",
    "sonar",
    "buoy",
    "scifi",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createBioluminescentSonarBuoy",
  "source_path": "src/models/bioluminescent_sonar_buoy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.31,
    0.28,
    0.24
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/bioluminescent-sonar-buoy.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createBioluminescentSonarBuoy() { return buildV15MarketModel(assetMeta); }
