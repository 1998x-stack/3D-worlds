import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Pocket Repair Automaton scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "characters.pocket-repair-automaton.001",
  "slug": "pocket-repair-automaton",
  "title": "Pocket Repair Automaton",
  "title_zh": "掌上维修机器人",
  "summary": "Original friendly repair bot with distinct tool claws, shoulder joints, optics and instrument face",
  "category": "characters",
  "tags": [
    "pocket",
    "repair",
    "automaton",
    "characters",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createPocketRepairAutomaton",
  "source_path": "src/models/pocket_repair_automaton.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.12,
    0.21,
    0.12
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/pocket-repair-automaton.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createPocketRepairAutomaton() { return buildV15MarketModel(assetMeta); }
