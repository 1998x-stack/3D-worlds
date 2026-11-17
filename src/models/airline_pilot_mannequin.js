import { buildRecipe } from './recipe_engine.js';
/** Airline Pilot Mannequin: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "characters.airline-pilot-mannequin.001",
  "slug": "airline-pilot-mannequin",
  "title": "Airline Pilot Mannequin",
  "title_zh": "民航飞行员人物原型",
  "summary": "Unrigged airline pilot wearing peaked cap, rank bars and rolling suitcase",
  "category": "characters",
  "tags": [
    "pilot",
    "airline",
    "uniform"
  ],
  "dimensions_m": [
    1,
    1.95,
    0.73
  ],
  "generator": "createAirlinePilotMannequin",
  "source_path": "src/models/airline_pilot_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/airline-pilot-mannequin.webp"
};
export function createAirlinePilotMannequin() { return buildRecipe({
  "title": "Airline Pilot Mannequin",
  "dimensions": [
    1,
    1.95,
    0.73
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "torso",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        0.6,
        0.75,
        0.42
      ],
      "c": 4151674
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.7,
        0
      ],
      "s": [
        0.33,
        0.32,
        0.3
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.34,
        1.4,
        0
      ],
      "to": [
        -0.42,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 4151674
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.43,
        0.88,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "leg-0",
      "from": [
        -0.18,
        0.85,
        0
      ],
      "to": [
        -0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shoe-0",
      "p": [
        -0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.34
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.34,
        1.4,
        0
      ],
      "to": [
        0.42,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 4151674
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.43,
        0.88,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "leg-1",
      "from": [
        0.18,
        0.85,
        0
      ],
      "to": [
        0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.34
      ],
      "c": 3620935
    },
    {
      "t": "cylinder",
      "n": "peaked-cap",
      "p": [
        0,
        1.91,
        0
      ],
      "s": [
        0.44,
        0.14,
        0.43
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "visor",
      "p": [
        0,
        1.86,
        0.28
      ],
      "s": [
        0.36,
        0.035,
        0.18
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shirt-front",
      "p": [
        0,
        1.35,
        0.224
      ],
      "s": [
        0.23,
        0.3,
        0.016
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "neck-tie",
      "p": [
        0,
        1.33,
        0.242
      ],
      "s": [
        0.06,
        0.28,
        0.018
      ],
      "c": 12807780
    },
    {
      "t": "box",
      "n": "gold-epaulette-0",
      "p": [
        -0.3,
        1.51,
        0.1
      ],
      "s": [
        0.18,
        0.04,
        0.22
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "gold-epaulette-1",
      "p": [
        0.3,
        1.51,
        0.1
      ],
      "s": [
        0.18,
        0.04,
        0.22
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "rank-line-0",
      "p": [
        0.2,
        1.44,
        0.24
      ],
      "s": [
        0.12,
        0.017,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "rank-line-1",
      "p": [
        0.2,
        1.405,
        0.24
      ],
      "s": [
        0.12,
        0.017,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "rank-line-2",
      "p": [
        0.2,
        1.3699999999999999,
        0.24
      ],
      "s": [
        0.12,
        0.017,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "rank-line-3",
      "p": [
        0.2,
        1.335,
        0.24
      ],
      "s": [
        0.12,
        0.017,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "suitcase",
      "p": [
        0.49,
        0.41,
        0.14
      ],
      "s": [
        0.31,
        0.68,
        0.28
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "telescopic-case-handle",
      "from": [
        0.49,
        0.76,
        0.14
      ],
      "to": [
        0.49,
        1.01,
        0.14
      ],
      "r": 0.016,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "case-wheel-0",
      "p": [
        0.39,
        0.06,
        0.14
      ],
      "s": [
        0.1,
        0.046,
        0.1
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "case-wheel-1",
      "p": [
        0.59,
        0.06,
        0.14
      ],
      "s": [
        0.1,
        0.046,
        0.1
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    }
  ]
}); }
