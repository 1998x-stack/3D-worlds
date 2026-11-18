import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Kinetic Facade Study Panel scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "architecture.kinetic-facade-study-panel.001",
  "slug": "kinetic-facade-study-panel",
  "title": "Kinetic Facade Study Panel",
  "title_zh": "动态立面旋片教学板",
  "summary": "Movable-looking facade fin array and pivot hubs on a structural teaching panel",
  "category": "architecture",
  "tags": [
    "kinetic",
    "facade",
    "study",
    "panel",
    "architecture",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createKineticFacadeStudyPanel",
  "source_path": "src/models/kinetic_facade_study_panel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.28,
    0.32,
    0.08
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/kinetic-facade-study-panel.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createKineticFacadeStudyPanel() { return buildV15MarketModel(assetMeta); }
