import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "kitchen.countertop-vacuum-sealer.001",
  "slug": "countertop-vacuum-sealer",
  "title": "Countertop Vacuum Sealer",
  "title_zh": "桌面真空食品封口机",
  "summary": "Countertop vacuum packer with transparent lid, control keys, heating seal and food bag",
  "category": "kitchen",
  "tags": [
    "vacuum",
    "sealer",
    "food-prep"
  ],
  "dimensions_m": [
    0.47,
    0.25,
    0.36
  ],
  "generator": "createCountertopVacuumSealer",
  "source_path": "src/models/countertop_vacuum_sealer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/countertop-vacuum-sealer.webp"
};
export function createCountertopVacuumSealer() { return buildRecipe({
  "title": "Countertop Vacuum Sealer",
  "dimensions": [
    0.47,
    0.25,
    0.36
  ],
  "parts": [
    {
      "t": "box",
      "n": "sealer-base",
      "p": [
        0,
        0.12,
        -0.04
      ],
      "s": [
        0.46,
        0.23,
        0.25
      ],
      "c": 14999504
    },
    {
      "t": "box",
      "n": "hinged-cover",
      "p": [
        0,
        0.24,
        -0.04
      ],
      "s": [
        0.47,
        0.04,
        0.27
      ],
      "c": 3687241
    },
    {
      "t": "box",
      "n": "transparent-top",
      "p": [
        0,
        0.259,
        -0.04
      ],
      "s": [
        0.35,
        0.01,
        0.17
      ],
      "c": 9288128
    },
    {
      "t": "box",
      "n": "heating-seal",
      "p": [
        0,
        0.14,
        0.08
      ],
      "s": [
        0.41,
        0.012,
        0.027
      ],
      "c": 11962977
    },
    {
      "t": "box",
      "n": "vacuum-chamber",
      "p": [
        0,
        0.185,
        -0.01
      ],
      "s": [
        0.38,
        0.016,
        0.12
      ],
      "c": 9609634
    },
    {
      "t": "box",
      "n": "food-pouch",
      "p": [
        0,
        0.04,
        0.2
      ],
      "s": [
        0.3,
        0.018,
        0.27
      ],
      "c": 12111312
    },
    {
      "t": "box",
      "n": "pouch-contents",
      "p": [
        0,
        0.056,
        0.21
      ],
      "s": [
        0.23,
        0.035,
        0.15
      ],
      "c": 12362363
    },
    {
      "t": "sphere",
      "n": "touch-control-0",
      "p": [
        -0.16,
        0.265,
        -0.13
      ],
      "s": [
        0.022,
        0.013,
        0.014
      ],
      "c": 7516320
    },
    {
      "t": "sphere",
      "n": "touch-control-1",
      "p": [
        -0.06,
        0.265,
        -0.13
      ],
      "s": [
        0.022,
        0.013,
        0.014
      ],
      "c": 3687241
    },
    {
      "t": "sphere",
      "n": "touch-control-2",
      "p": [
        0.04000000000000001,
        0.265,
        -0.13
      ],
      "s": [
        0.022,
        0.013,
        0.014
      ],
      "c": 3687241
    },
    {
      "t": "sphere",
      "n": "touch-control-3",
      "p": [
        0.14000000000000004,
        0.265,
        -0.13
      ],
      "s": [
        0.022,
        0.013,
        0.014
      ],
      "c": 3687241
    },
    {
      "t": "box",
      "n": "status-screen",
      "p": [
        0,
        0.261,
        -0.2
      ],
      "s": [
        0.22,
        0.013,
        0.023
      ],
      "c": 5214112
    },
    {
      "t": "box",
      "n": "rear-foot-0",
      "p": [
        -0.18,
        0.016,
        -0.1
      ],
      "s": [
        0.07,
        0.033,
        0.07
      ],
      "c": 3687241
    },
    {
      "t": "box",
      "n": "rear-foot-1",
      "p": [
        0.18,
        0.016,
        -0.1
      ],
      "s": [
        0.07,
        0.033,
        0.07
      ],
      "c": 3687241
    },
    {
      "t": "box",
      "n": "lid-release",
      "p": [
        0.24,
        0.18,
        -0.03
      ],
      "s": [
        0.025,
        0.095,
        0.08
      ],
      "c": 9609634
    }
  ]
}); }
