import { buildRecipe } from './recipe_engine.js';
/** Railway Dispatcher Mannequin: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "characters.railway-dispatcher-mannequin.001",
  "slug": "railway-dispatcher-mannequin",
  "title": "Railway Dispatcher Mannequin",
  "title_zh": "铁路调度员人物原型",
  "summary": "Unrigged railway dispatcher with signal paddle, reflective vest and radio",
  "category": "characters",
  "tags": [
    "dispatcher",
    "railway",
    "uniform"
  ],
  "dimensions_m": [
    1.04,
    1.94,
    0.76
  ],
  "generator": "createRailwayDispatcherMannequin",
  "source_path": "src/models/railway_dispatcher_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/railway-dispatcher-mannequin.webp"
};
export function createRailwayDispatcherMannequin() { return buildRecipe({
  "title": "Railway Dispatcher Mannequin",
  "dimensions": [
    1.04,
    1.94,
    0.76
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
      "c": 5405577
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
      "c": 5405577
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
      "c": 5405577
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
      "n": "dispatcher-cap",
      "p": [
        0,
        1.89,
        0
      ],
      "s": [
        0.42,
        0.14,
        0.43
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "hat-brim",
      "p": [
        0,
        1.84,
        0.29
      ],
      "s": [
        0.38,
        0.035,
        0.16
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "reflective-waistcoat",
      "p": [
        0,
        1.19,
        0.23
      ],
      "s": [
        0.45,
        0.52,
        0.026
      ],
      "c": 12690008
    },
    {
      "t": "box",
      "n": "reflective-band-0",
      "p": [
        -0.15,
        1.19,
        0.258
      ],
      "s": [
        0.048,
        0.48,
        0.012
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "reflective-band-1",
      "p": [
        0.15,
        1.19,
        0.258
      ],
      "s": [
        0.048,
        0.48,
        0.012
      ],
      "c": 15263198
    },
    {
      "t": "rod",
      "n": "signal-stick",
      "from": [
        0.47,
        0.88,
        0.13
      ],
      "to": [
        0.49,
        1.53,
        0.13
      ],
      "r": 0.022,
      "c": 9990996
    },
    {
      "t": "cylinder",
      "n": "signal-disc",
      "p": [
        0.49,
        1.61,
        0.13
      ],
      "s": [
        0.29,
        0.03,
        0.29
      ],
      "c": 12807780,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "chest-radio",
      "p": [
        -0.17,
        1.38,
        0.25
      ],
      "s": [
        0.13,
        0.15,
        0.055
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "radio-aerial",
      "from": [
        -0.17,
        1.45,
        0.25
      ],
      "to": [
        -0.17,
        1.61,
        0.25
      ],
      "r": 0.009,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "buckle",
      "p": [
        0,
        0.92,
        0.25
      ],
      "s": [
        0.13,
        0.075,
        0.022
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "uniform-button-0",
      "p": [
        0.08,
        1.36,
        0.252
      ],
      "s": [
        0.019,
        0.018,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "uniform-button-1",
      "p": [
        0.08,
        1.2400000000000002,
        0.252
      ],
      "s": [
        0.019,
        0.018,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "uniform-button-2",
      "p": [
        0.08,
        1.12,
        0.252
      ],
      "s": [
        0.019,
        0.018,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "uniform-button-3",
      "p": [
        0.08,
        1,
        0.252
      ],
      "s": [
        0.019,
        0.018,
        0.009
      ],
      "c": 13149293
    }
  ]
}); }
