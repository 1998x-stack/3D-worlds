import { buildRecipe } from './recipe_engine.js';
/** Modular Wooden Observation Deck / 模块化木制观景台: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "architecture.modular-wooden-observation-deck.001",
  "slug": "modular-wooden-observation-deck",
  "title": "Modular Wooden Observation Deck",
  "title_zh": "模块化木制观景台",
  "summary": "Timber lookout platform with raised joists, stairs and continuous safety rails",
  "category": "architecture",
  "tags": [
    "modular",
    "wooden",
    "observation",
    "deck",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.75,
    2.05,
    2.95
  ],
  "generator": "createModularWoodenObservationDeck",
  "source_path": "src/models/modular_wooden_observation_deck.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/modular-wooden-observation-deck.webp",
  "accent": "#a7cfd4"
};
export function createModularWoodenObservationDeck() { return buildRecipe({
  "title": "Modular Wooden Observation Deck",
  "dimensions": [
    3.75,
    2.05,
    2.95
  ],
  "parts": [
    {
      "t": "box",
      "n": "viewing-platform",
      "p": [
        0,
        1.35,
        0
      ],
      "s": [
        3.3,
        0.18,
        2.43
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "deck-post--1.45--0.98",
      "p": [
        -1.45,
        0.68,
        -0.98
      ],
      "s": [
        0.15,
        1.36,
        0.15
      ],
      "c": 6650245
    },
    {
      "t": "box",
      "n": "deck-post--1.45-0.98",
      "p": [
        -1.45,
        0.68,
        0.98
      ],
      "s": [
        0.15,
        1.36,
        0.15
      ],
      "c": 6650245
    },
    {
      "t": "box",
      "n": "deck-post-1.45--0.98",
      "p": [
        1.45,
        0.68,
        -0.98
      ],
      "s": [
        0.15,
        1.36,
        0.15
      ],
      "c": 6650245
    },
    {
      "t": "box",
      "n": "deck-post-1.45-0.98",
      "p": [
        1.45,
        0.68,
        0.98
      ],
      "s": [
        0.15,
        1.36,
        0.15
      ],
      "c": 6650245
    },
    {
      "t": "box",
      "n": "deck-plank-0",
      "p": [
        -1.42,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-1",
      "p": [
        -1.0699999999999998,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-2",
      "p": [
        -0.72,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-3",
      "p": [
        -0.3700000000000001,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-4",
      "p": [
        -0.020000000000000018,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-5",
      "p": [
        0.33000000000000007,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-6",
      "p": [
        0.6799999999999997,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-7",
      "p": [
        1.0299999999999998,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "deck-plank-8",
      "p": [
        1.38,
        1.46,
        0
      ],
      "s": [
        0.3,
        0.04,
        2.45
      ],
      "c": 10122588
    },
    {
      "t": "rod",
      "n": "deck-side-rail--1",
      "from": [
        -1.63,
        2.04,
        -1.05
      ],
      "to": [
        -1.63,
        2.04,
        1.05
      ],
      "r": 0.045,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster--1-0",
      "from": [
        -1.63,
        1.45,
        -0.96
      ],
      "to": [
        -1.63,
        2.05,
        -0.96
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster--1-1",
      "from": [
        -1.63,
        1.45,
        -0.31999999999999995
      ],
      "to": [
        -1.63,
        2.05,
        -0.31999999999999995
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster--1-2",
      "from": [
        -1.63,
        1.45,
        0.32000000000000006
      ],
      "to": [
        -1.63,
        2.05,
        0.32000000000000006
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster--1-3",
      "from": [
        -1.63,
        1.45,
        0.96
      ],
      "to": [
        -1.63,
        2.05,
        0.96
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-side-rail-1",
      "from": [
        1.63,
        2.04,
        -1.05
      ],
      "to": [
        1.63,
        2.04,
        1.05
      ],
      "r": 0.045,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster-1-0",
      "from": [
        1.63,
        1.45,
        -0.96
      ],
      "to": [
        1.63,
        2.05,
        -0.96
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster-1-1",
      "from": [
        1.63,
        1.45,
        -0.31999999999999995
      ],
      "to": [
        1.63,
        2.05,
        -0.31999999999999995
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster-1-2",
      "from": [
        1.63,
        1.45,
        0.32000000000000006
      ],
      "to": [
        1.63,
        2.05,
        0.32000000000000006
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "deck-baluster-1-3",
      "from": [
        1.63,
        1.45,
        0.96
      ],
      "to": [
        1.63,
        2.05,
        0.96
      ],
      "r": 0.026,
      "c": 6650245
    },
    {
      "t": "box",
      "n": "approach-stair-0",
      "p": [
        0,
        0.26,
        1.55
      ],
      "s": [
        1.2,
        0.17,
        0.3
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "approach-stair-1",
      "p": [
        0,
        0.55,
        1.78
      ],
      "s": [
        1.2,
        0.17,
        0.3
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "approach-stair-2",
      "p": [
        0,
        0.84,
        2.0100000000000002
      ],
      "s": [
        1.2,
        0.17,
        0.3
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "approach-stair-3",
      "p": [
        0,
        1.13,
        2.24
      ],
      "s": [
        1.2,
        0.17,
        0.3
      ],
      "c": 12827301
    }
  ]
}); }
