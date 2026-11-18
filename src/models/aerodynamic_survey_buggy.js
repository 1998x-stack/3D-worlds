import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Aerodynamic Survey Buggy scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "vehicles.aerodynamic-survey-buggy.001",
  "slug": "aerodynamic-survey-buggy",
  "title": "Aerodynamic Survey Buggy",
  "title_zh": "流线型环境勘测车",
  "summary": "Original surveying buggy with four spoke wheels, solar panels and sensor mast",
  "category": "vehicles",
  "tags": [
    "aerodynamic",
    "survey",
    "buggy",
    "vehicles",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createAerodynamicSurveyBuggy",
  "source_path": "src/models/aerodynamic_survey_buggy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.35,
    0.18,
    0.2
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/aerodynamic-survey-buggy.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createAerodynamicSurveyBuggy() { return buildV15MarketModel(assetMeta); }
