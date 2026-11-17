import { buildRecipe } from './recipe_engine.js';
/** Kinetic Balance Sculpture — editable original scene geometry. */
export const assetMeta = {
  "id": "decor.kinetic-balance-sculpture.001",
  "slug": "kinetic-balance-sculpture",
  "title": "Kinetic Balance Sculpture",
  "title_zh": "动感平衡艺术雕塑",
  "summary": "Kinetic desktop mobile with counterweighted rods, fins and stone pedestal",
  "category": "decor",
  "tags": [
    "kinetic",
    "sculpture",
    "balance"
  ],
  "dimensions_m": [
    1.25,
    1.65,
    0.87
  ],
  "generator": "createKineticBalanceSculpture",
  "source_path": "src/models/kinetic_balance_sculpture.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/kinetic-balance-sculpture.webp"
};
export function createKineticBalanceSculpture() { return buildRecipe({
  "title": "Kinetic Balance Sculpture",
  "dimensions": [
    1.25,
    1.65,
    0.87
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "stone-base",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        0.67,
        0.2,
        0.61
      ],
      "c": 11183003
    },
    {
      "t": "rod",
      "n": "central-upright",
      "from": [
        0,
        0.19,
        0
      ],
      "to": [
        0,
        1.5,
        0
      ],
      "r": 0.035,
      "c": 3556171
    },
    {
      "t": "rod",
      "n": "lower-arm",
      "from": [
        -0.48,
        0.75,
        0
      ],
      "to": [
        0.45,
        0.75,
        0
      ],
      "r": 0.025,
      "c": 12756075
    },
    {
      "t": "rod",
      "n": "upper-arm",
      "from": [
        -0.35,
        1.23,
        0.05
      ],
      "to": [
        0.39,
        1.23,
        -0.04
      ],
      "r": 0.025,
      "c": 3556171
    },
    {
      "t": "rod",
      "n": "tip-balancer",
      "from": [
        -0.52,
        0.39,
        0.1
      ],
      "to": [
        0.52,
        0.39,
        -0.1
      ],
      "r": 0.019,
      "c": 9544354
    },
    {
      "t": "sphere",
      "n": "lower-weight-0",
      "p": [
        -0.45,
        0.71,
        0
      ],
      "s": [
        0.15,
        0.13,
        0.15
      ],
      "c": 12756075
    },
    {
      "t": "sphere",
      "n": "lower-weight-1",
      "p": [
        0.45,
        0.71,
        0
      ],
      "s": [
        0.19,
        0.13,
        0.15
      ],
      "c": 8954538
    },
    {
      "t": "sphere",
      "n": "upper-weight-0",
      "p": [
        -0.34,
        1.21,
        0.05
      ],
      "s": [
        0.18,
        0.11,
        0.14
      ],
      "c": 8689538
    },
    {
      "t": "sphere",
      "n": "upper-weight-1",
      "p": [
        0.37,
        1.21,
        0
      ],
      "s": [
        0.12,
        0.11,
        0.14
      ],
      "c": 12350821
    },
    {
      "t": "rod",
      "n": "suspension-0",
      "from": [
        -0.35,
        0.74,
        -0.02
      ],
      "to": [
        -0.35,
        0.5,
        -0.02
      ],
      "r": 0.009,
      "c": 9544354
    },
    {
      "t": "rod",
      "n": "suspension-1",
      "from": [
        -0.10999999999999999,
        0.74,
        -0.02
      ],
      "to": [
        -0.10999999999999999,
        0.5,
        -0.02
      ],
      "r": 0.009,
      "c": 9544354
    },
    {
      "t": "rod",
      "n": "suspension-2",
      "from": [
        0.13,
        0.74,
        -0.02
      ],
      "to": [
        0.13,
        0.5,
        -0.02
      ],
      "r": 0.009,
      "c": 9544354
    },
    {
      "t": "rod",
      "n": "suspension-3",
      "from": [
        0.37,
        0.74,
        -0.02
      ],
      "to": [
        0.37,
        0.5,
        -0.02
      ],
      "r": 0.009,
      "c": 9544354
    },
    {
      "t": "cone",
      "n": "fin-0",
      "p": [
        -0.35,
        0.43,
        -0.02
      ],
      "s": [
        0.13,
        0.19,
        0.1
      ],
      "c": 8756388,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "fin-1",
      "p": [
        -0.10999999999999999,
        0.43,
        -0.02
      ],
      "s": [
        0.13,
        0.19,
        0.1
      ],
      "c": 11838340,
      "rot": [
        0,
        0.52,
        0
      ]
    },
    {
      "t": "cone",
      "n": "fin-2",
      "p": [
        0.13,
        0.43,
        -0.02
      ],
      "s": [
        0.13,
        0.19,
        0.1
      ],
      "c": 9286822,
      "rot": [
        0,
        1.04,
        0
      ]
    },
    {
      "t": "cone",
      "n": "fin-3",
      "p": [
        0.37,
        0.43,
        -0.02
      ],
      "s": [
        0.13,
        0.19,
        0.1
      ],
      "c": 12095104,
      "rot": [
        0,
        1.56,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "central-bearing",
      "p": [
        0,
        1.26,
        0
      ],
      "s": [
        0.085,
        0.08,
        0.085
      ],
      "c": 9544354
    },
    {
      "t": "box",
      "n": "designer-plaque",
      "p": [
        0,
        0.1,
        0.312
      ],
      "s": [
        0.28,
        0.063,
        0.018
      ],
      "c": 12756075
    }
  ]
}); }
