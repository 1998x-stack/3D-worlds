import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "architecture.construction-scaffolding-bay.001",
  "slug": "construction-scaffolding-bay",
  "title": "Construction Scaffolding Bay",
  "title_zh": "建筑施工脚手架单元",
  "summary": "Reusable scaffolding module with crossbraces, two work decks and guard rails",
  "category": "architecture",
  "tags": [
    "scaffold",
    "worksite",
    "modular"
  ],
  "dimensions_m": [
    2.43,
    3.02,
    1.34
  ],
  "generator": "createConstructionScaffoldingBay",
  "source_path": "src/models/construction_scaffolding_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/construction-scaffolding-bay.webp"
};
export function createConstructionScaffoldingBay() { return buildRecipe({
  "title": "Construction Scaffolding Bay",
  "dimensions": [
    2.43,
    3.02,
    1.34
  ],
  "parts": [
    {
      "t": "rod",
      "n": "standard-0-0",
      "from": [
        -1.12,
        0.08,
        -0.58
      ],
      "to": [
        -1.12,
        3,
        -0.58
      ],
      "r": 0.036,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "standard-0-1",
      "from": [
        -1.12,
        0.08,
        0.58
      ],
      "to": [
        -1.12,
        3,
        0.58
      ],
      "r": 0.036,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "standard-1-0",
      "from": [
        1.12,
        0.08,
        -0.58
      ],
      "to": [
        1.12,
        3,
        -0.58
      ],
      "r": 0.036,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "standard-1-1",
      "from": [
        1.12,
        0.08,
        0.58
      ],
      "to": [
        1.12,
        3,
        0.58
      ],
      "r": 0.036,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "front-ledger-0",
      "from": [
        -1.12,
        0.18,
        0.58
      ],
      "to": [
        1.12,
        0.18,
        0.58
      ],
      "r": 0.033,
      "c": 3555399
    },
    {
      "t": "rod",
      "n": "rear-ledger-0",
      "from": [
        -1.12,
        0.18,
        -0.58
      ],
      "to": [
        1.12,
        0.18,
        -0.58
      ],
      "r": 0.033,
      "c": 3555399
    },
    {
      "t": "rod",
      "n": "front-ledger-1",
      "from": [
        -1.12,
        1.42,
        0.58
      ],
      "to": [
        1.12,
        1.42,
        0.58
      ],
      "r": 0.033,
      "c": 3555399
    },
    {
      "t": "rod",
      "n": "rear-ledger-1",
      "from": [
        -1.12,
        1.42,
        -0.58
      ],
      "to": [
        1.12,
        1.42,
        -0.58
      ],
      "r": 0.033,
      "c": 3555399
    },
    {
      "t": "rod",
      "n": "front-ledger-2",
      "from": [
        -1.12,
        2.66,
        0.58
      ],
      "to": [
        1.12,
        2.66,
        0.58
      ],
      "r": 0.033,
      "c": 3555399
    },
    {
      "t": "rod",
      "n": "rear-ledger-2",
      "from": [
        -1.12,
        2.66,
        -0.58
      ],
      "to": [
        1.12,
        2.66,
        -0.58
      ],
      "r": 0.033,
      "c": 3555399
    },
    {
      "t": "box",
      "n": "deck-low",
      "p": [
        0,
        1.32,
        0
      ],
      "s": [
        2.34,
        0.06,
        1.2
      ],
      "c": 9857863
    },
    {
      "t": "box",
      "n": "deck-high",
      "p": [
        0,
        2.56,
        0
      ],
      "s": [
        2.34,
        0.06,
        1.2
      ],
      "c": 9857863
    },
    {
      "t": "rod",
      "n": "crossbrace-a",
      "from": [
        -1.12,
        0.1,
        0.58
      ],
      "to": [
        1.12,
        2.57,
        0.58
      ],
      "r": 0.027,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "crossbrace-b",
      "from": [
        1.12,
        0.1,
        -0.58
      ],
      "to": [
        -1.12,
        2.57,
        -0.58
      ],
      "r": 0.027,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "guardrail",
      "from": [
        -1.12,
        2.99,
        0.58
      ],
      "to": [
        1.12,
        2.99,
        0.58
      ],
      "r": 0.031,
      "c": 3555399
    },
    {
      "t": "box",
      "n": "ground-base-0",
      "p": [
        -1.12,
        0.035,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.17
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "ground-base-1",
      "p": [
        1.12,
        0.035,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.17
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "deck-slat-0",
      "p": [
        -0.87,
        1.37,
        0
      ],
      "s": [
        0.065,
        0.022,
        1.12
      ],
      "c": 11837571
    },
    {
      "t": "box",
      "n": "deck-slat-1",
      "p": [
        -0.44,
        1.37,
        0
      ],
      "s": [
        0.065,
        0.022,
        1.12
      ],
      "c": 11837571
    },
    {
      "t": "box",
      "n": "deck-slat-2",
      "p": [
        -0.010000000000000009,
        1.37,
        0
      ],
      "s": [
        0.065,
        0.022,
        1.12
      ],
      "c": 11837571
    },
    {
      "t": "box",
      "n": "deck-slat-3",
      "p": [
        0.42000000000000004,
        1.37,
        0
      ],
      "s": [
        0.065,
        0.022,
        1.12
      ],
      "c": 11837571
    },
    {
      "t": "box",
      "n": "deck-slat-4",
      "p": [
        0.85,
        1.37,
        0
      ],
      "s": [
        0.065,
        0.022,
        1.12
      ],
      "c": 11837571
    }
  ]
}); }
