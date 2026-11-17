import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Pour-over Coffee Filter Tree / 手冲咖啡滤杯收纳树. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "kitchen.pour-over-coffee-filter-tree.001",
  "slug": "pour-over-coffee-filter-tree",
  "title": "Pour-over Coffee Filter Tree",
  "title_zh": "手冲咖啡滤杯收纳树",
  "summary": "Countertop stand for drippers and paper filters with staggered branches and drip-catching tray",
  "category": "kitchen",
  "tags": [
    "pour",
    "over",
    "coffee",
    "filter",
    "tree",
    "kitchen",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.27,
    0.34,
    0.21
  ],
  "generator": "createPourOverCoffeeFilterTree",
  "source_path": "src/models/pour_over_coffee_filter_tree.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/pour-over-coffee-filter-tree.webp",
  "accent": "#c992a7"
};
export function createPourOverCoffeeFilterTree() { return buildRecipe({
  "title": "Pour-over Coffee Filter Tree",
  "dimensions": [
    0.27,
    0.34,
    0.21
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "drip-tray",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        1.7,
        0.16,
        1.28
      ],
      "c": 4084325
    },
    {
      "t": "cylinder",
      "n": "center-pole",
      "p": [
        0,
        0.96,
        0
      ],
      "s": [
        0.14,
        1.78,
        0.14
      ],
      "c": 13938523
    },
    {
      "t": "rod",
      "n": "holding-arm-0",
      "from": [
        0,
        0.67,
        0
      ],
      "to": [
        -0.8,
        0.67,
        0.12
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "cone",
      "n": "dripper-cone-0",
      "p": [
        -0.8,
        0.5900000000000001,
        0.12
      ],
      "s": [
        0.52,
        0.48,
        0.52
      ],
      "c": 15853002,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "holding-ring-0",
      "p": [
        -0.8,
        0.75,
        0.12
      ],
      "s": [
        0.72,
        0.18,
        0.72
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "filter-paper-0",
      "p": [
        -0.8,
        0.79,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.26
      ],
      "c": 15001563
    },
    {
      "t": "rod",
      "n": "holding-arm-1",
      "from": [
        0,
        1.1300000000000001,
        0
      ],
      "to": [
        0.8,
        1.1300000000000001,
        0.12
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "cone",
      "n": "dripper-cone-1",
      "p": [
        0.8,
        1.05,
        0.12
      ],
      "s": [
        0.52,
        0.48,
        0.52
      ],
      "c": 10143185,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "holding-ring-1",
      "p": [
        0.8,
        1.2100000000000002,
        0.12
      ],
      "s": [
        0.72,
        0.18,
        0.72
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "filter-paper-1",
      "p": [
        0.8,
        1.25,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.26
      ],
      "c": 15001563
    },
    {
      "t": "rod",
      "n": "holding-arm-2",
      "from": [
        0,
        1.59,
        0
      ],
      "to": [
        -0.8,
        1.59,
        0.12
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "cone",
      "n": "dripper-cone-2",
      "p": [
        -0.8,
        1.51,
        0.12
      ],
      "s": [
        0.52,
        0.48,
        0.52
      ],
      "c": 15853002,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "holding-ring-2",
      "p": [
        -0.8,
        1.6700000000000002,
        0.12
      ],
      "s": [
        0.72,
        0.18,
        0.72
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "filter-paper-2",
      "p": [
        -0.8,
        1.71,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.26
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "tray-drip-groove-0",
      "p": [
        -0.55,
        0.19,
        0.27
      ],
      "s": [
        0.045,
        0.03,
        0.36
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drip-groove-1",
      "p": [
        -0.28,
        0.19,
        0.27
      ],
      "s": [
        0.045,
        0.03,
        0.36
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drip-groove-2",
      "p": [
        -0.010000000000000009,
        0.19,
        0.27
      ],
      "s": [
        0.045,
        0.03,
        0.36
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drip-groove-3",
      "p": [
        0.26,
        0.19,
        0.27
      ],
      "s": [
        0.045,
        0.03,
        0.36
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tray-drip-groove-4",
      "p": [
        0.53,
        0.19,
        0.27
      ],
      "s": [
        0.045,
        0.03,
        0.36
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "pole-cap",
      "p": [
        0,
        2,
        0
      ],
      "s": [
        0.35,
        0.17,
        0.35
      ],
      "c": 15776881
    }
  ]
}); }
