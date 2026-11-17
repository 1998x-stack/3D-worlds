import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Pour-over Coffee Filter Tree / 手冲咖啡滤杯收纳树. Visual model only; not print-certified or a functional product. */
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
  "collection": "v1.4",
  "preview_path": "public/thumbs/pour-over-coffee-filter-tree.webp",
  "accent": "#c992a7",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      "c": 4084325,
      "finish": "ceramic"
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
      ],
      "finish": "ceramic"
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
      ],
      "finish": "metal"
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
      "c": 15001563,
      "finish": "wood"
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
      ],
      "finish": "ceramic"
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
      ],
      "finish": "metal"
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
      "c": 15001563,
      "finish": "wood"
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
      ],
      "finish": "ceramic"
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
      ],
      "finish": "metal"
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
      "c": 15001563,
      "finish": "wood"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 15776881,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-0-0",
      "from": [
        -0.92,
        0.45000000000000007,
        0.32
      ],
      "to": [
        -0.92,
        0.79,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-0-1",
      "from": [
        -0.8600000000000001,
        0.45000000000000007,
        0.32
      ],
      "to": [
        -0.8600000000000001,
        0.79,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-0-2",
      "from": [
        -0.8,
        0.45000000000000007,
        0.32
      ],
      "to": [
        -0.8,
        0.79,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-0-3",
      "from": [
        -0.74,
        0.45000000000000007,
        0.32
      ],
      "to": [
        -0.74,
        0.79,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-0-4",
      "from": [
        -0.68,
        0.45000000000000007,
        0.32
      ],
      "to": [
        -0.68,
        0.79,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "filter-hem-arc-0",
      "p": [
        -0.8,
        0.81,
        0.11
      ],
      "s": [
        0.56,
        0.13,
        0.5
      ],
      "c": 2570573,
      "finish": "metal",
      "start": 0,
      "sweep": 5.969026041820607,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "porcelain-stop-0",
      "p": [
        -0.8,
        0.8200000000000001,
        0.12
      ],
      "s": [
        0.1,
        0.1,
        0.1
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-1-0",
      "from": [
        0.68,
        0.9100000000000001,
        0.32
      ],
      "to": [
        0.68,
        1.25,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-1-1",
      "from": [
        0.74,
        0.9100000000000001,
        0.32
      ],
      "to": [
        0.74,
        1.25,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-1-2",
      "from": [
        0.8,
        0.9100000000000001,
        0.32
      ],
      "to": [
        0.8,
        1.25,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-1-3",
      "from": [
        0.8600000000000001,
        0.9100000000000001,
        0.32
      ],
      "to": [
        0.8600000000000001,
        1.25,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-1-4",
      "from": [
        0.92,
        0.9100000000000001,
        0.32
      ],
      "to": [
        0.92,
        1.25,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "filter-hem-arc-1",
      "p": [
        0.8,
        1.27,
        0.11
      ],
      "s": [
        0.56,
        0.13,
        0.5
      ],
      "c": 2570573,
      "finish": "metal",
      "start": 0,
      "sweep": 5.969026041820607,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "porcelain-stop-1",
      "p": [
        0.8,
        1.28,
        0.12
      ],
      "s": [
        0.1,
        0.1,
        0.1
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-2-0",
      "from": [
        -0.92,
        1.37,
        0.32
      ],
      "to": [
        -0.92,
        1.71,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-2-1",
      "from": [
        -0.8600000000000001,
        1.37,
        0.32
      ],
      "to": [
        -0.8600000000000001,
        1.71,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-2-2",
      "from": [
        -0.8,
        1.37,
        0.32
      ],
      "to": [
        -0.8,
        1.71,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-2-3",
      "from": [
        -0.74,
        1.37,
        0.32
      ],
      "to": [
        -0.74,
        1.71,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "fluted-ceramic-groove-2-4",
      "from": [
        -0.68,
        1.37,
        0.32
      ],
      "to": [
        -0.68,
        1.71,
        0.32
      ],
      "r": 0.017,
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "arc",
      "n": "filter-hem-arc-2",
      "p": [
        -0.8,
        1.73,
        0.11
      ],
      "s": [
        0.56,
        0.13,
        0.5
      ],
      "c": 2570573,
      "finish": "metal",
      "start": 0,
      "sweep": 5.969026041820607,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "porcelain-stop-2",
      "p": [
        -0.8,
        1.74,
        0.12
      ],
      "s": [
        0.1,
        0.1,
        0.1
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "tray-embossed-drain-0",
      "p": [
        -0.65,
        0.2,
        0.25
      ],
      "s": [
        0.045,
        0.015,
        0.46
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tray-embossed-drain-1",
      "p": [
        -0.39,
        0.2,
        0.25
      ],
      "s": [
        0.045,
        0.015,
        0.46
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tray-embossed-drain-2",
      "p": [
        -0.13,
        0.2,
        0.25
      ],
      "s": [
        0.045,
        0.015,
        0.46
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tray-embossed-drain-3",
      "p": [
        0.13,
        0.2,
        0.25
      ],
      "s": [
        0.045,
        0.015,
        0.46
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tray-embossed-drain-4",
      "p": [
        0.39,
        0.2,
        0.25
      ],
      "s": [
        0.045,
        0.015,
        0.46
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tray-embossed-drain-5",
      "p": [
        0.65,
        0.2,
        0.25
      ],
      "s": [
        0.045,
        0.015,
        0.46
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "coffee-brand-medallion",
      "p": [
        0,
        1.91,
        0
      ],
      "s": [
        0.29,
        0.05,
        0.28
      ],
      "c": 15383673,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-storage-tab",
      "p": [
        0,
        1.7,
        -0.24
      ],
      "s": [
        0.57,
        0.1,
        0.1
      ],
      "c": 9332813,
      "finish": "wood"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
