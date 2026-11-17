import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Accessible Roll In Bathing Platform / 无障碍滚入式洗浴平台. */
export const assetMeta = {
  "id": "bathroom.accessible-roll-in-bathing-platform.001",
  "slug": "accessible-roll-in-bathing-platform",
  "title": "Accessible Roll In Bathing Platform",
  "title_zh": "无障碍滚入式洗浴平台",
  "summary": "Step-free shower deck with sloped drainage, grab rails and transfer bench",
  "category": "bathroom",
  "tags": [
    "accessible",
    "roll",
    "bathing",
    "platform",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.28,
    1.45,
    1.58
  ],
  "generator": "createAccessibleRollInBathingPlatform",
  "source_path": "src/models/accessible_roll_in_bathing_platform.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/accessible-roll-in-bathing-platform.webp",
  "accent": "#c5d3cf"
};
export function createAccessibleRollInBathingPlatform() { return buildRecipe({
  "title": "Accessible Roll In Bathing Platform",
  "dimensions": [
    2.28,
    1.45,
    1.58
  ],
  "parts": [
    {
      "t": "box",
      "n": "step-free-shower-deck",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        2,
        0.25,
        1.35
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "linear-floor-drain",
      "p": [
        0,
        0.26,
        0.59
      ],
      "s": [
        1.58,
        0.022,
        0.1
      ],
      "c": 12964815
    },
    {
      "t": "box",
      "n": "drain-grille-slot-0",
      "p": [
        -0.71,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-1",
      "p": [
        -0.5499999999999999,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-2",
      "p": [
        -0.38999999999999996,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-3",
      "p": [
        -0.22999999999999998,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-4",
      "p": [
        -0.06999999999999995,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-5",
      "p": [
        0.09000000000000008,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-6",
      "p": [
        0.25,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-7",
      "p": [
        0.41000000000000014,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-8",
      "p": [
        0.5700000000000001,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drain-grille-slot-9",
      "p": [
        0.73,
        0.276,
        0.59
      ],
      "s": [
        0.055,
        0.015,
        0.06
      ],
      "c": 8232356
    },
    {
      "t": "rod",
      "n": "support-grabrail-post--1",
      "from": [
        -0.89,
        0.29,
        -0.52
      ],
      "to": [
        -0.89,
        1.18,
        -0.52
      ],
      "r": 0.04,
      "c": 8232356
    },
    {
      "t": "rod",
      "n": "support-grabrail-cross--1",
      "from": [
        -0.89,
        1.14,
        -0.54
      ],
      "to": [
        -0.89,
        1.14,
        0.46
      ],
      "r": 0.037,
      "c": 8232356
    },
    {
      "t": "rod",
      "n": "support-grabrail-post-1",
      "from": [
        0.89,
        0.29,
        -0.52
      ],
      "to": [
        0.89,
        1.18,
        -0.52
      ],
      "r": 0.04,
      "c": 8232356
    },
    {
      "t": "rod",
      "n": "support-grabrail-cross-1",
      "from": [
        0.89,
        1.14,
        -0.54
      ],
      "to": [
        0.89,
        1.14,
        0.46
      ],
      "r": 0.037,
      "c": 8232356
    },
    {
      "t": "box",
      "n": "seated-transfer-bench",
      "p": [
        0.58,
        0.55,
        -0.31
      ],
      "s": [
        0.73,
        0.14,
        0.49
      ],
      "c": 15199984
    },
    {
      "t": "rod",
      "n": "handshower-stand",
      "from": [
        -0.86,
        0.32,
        -0.51
      ],
      "to": [
        -0.86,
        1.3,
        -0.51
      ],
      "r": 0.034,
      "c": 12964815
    },
    {
      "t": "cylinder",
      "n": "removable-handshower",
      "p": [
        -0.86,
        1.31,
        -0.41
      ],
      "s": [
        0.16,
        0.17,
        0.16
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "thermostatic-control",
      "p": [
        -0.7,
        0.94,
        -0.53
      ],
      "s": [
        0.22,
        0.18,
        0.09
      ],
      "c": 15199984
    }
  ]
}); }
