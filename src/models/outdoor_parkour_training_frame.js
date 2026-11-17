import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Outdoor Parkour Training Frame / 户外跑酷训练架. */
export const assetMeta = {
  "id": "sports.outdoor-parkour-training-frame.001",
  "slug": "outdoor-parkour-training-frame",
  "title": "Outdoor Parkour Training Frame",
  "title_zh": "户外跑酷训练架",
  "summary": "Open air parkour frame combining rails, balance boxes and jump platforms",
  "category": "sports",
  "tags": [
    "outdoor",
    "parkour",
    "training",
    "frame",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.5,
    2.4,
    2.65
  ],
  "generator": "createOutdoorParkourTrainingFrame",
  "source_path": "src/models/outdoor_parkour_training_frame.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/outdoor-parkour-training-frame.webp",
  "accent": "#598fa1"
};
export function createOutdoorParkourTrainingFrame() { return buildRecipe({
  "title": "Outdoor Parkour Training Frame",
  "dimensions": [
    3.5,
    2.4,
    2.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "parkour-training-floor",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        3.19,
        0.19,
        2.37
      ],
      "c": 15379820
    },
    {
      "t": "rod",
      "n": "parkour-upright-0",
      "from": [
        -1.27,
        0.22,
        -0.73
      ],
      "to": [
        -1.27,
        2.23,
        -0.73
      ],
      "r": 0.076,
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "parkour-upright-1",
      "from": [
        -0.44000000000000006,
        0.22,
        -0.73
      ],
      "to": [
        -0.44000000000000006,
        1.73,
        -0.73
      ],
      "r": 0.076,
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "parkour-upright-2",
      "from": [
        0.3899999999999999,
        0.22,
        -0.73
      ],
      "to": [
        0.3899999999999999,
        2.23,
        -0.73
      ],
      "r": 0.076,
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "parkour-upright-3",
      "from": [
        1.2199999999999998,
        0.22,
        -0.73
      ],
      "to": [
        1.2199999999999998,
        1.73,
        -0.73
      ],
      "r": 0.076,
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "parkour-vault-crossbar-0",
      "from": [
        -1.29,
        1.16,
        -0.75
      ],
      "to": [
        1.24,
        1.16,
        -0.75
      ],
      "r": 0.052,
      "c": 14540250
    },
    {
      "t": "rod",
      "n": "parkour-vault-crossbar-1",
      "from": [
        -1.29,
        1.56,
        -0.75
      ],
      "to": [
        1.24,
        1.56,
        -0.75
      ],
      "r": 0.052,
      "c": 14540250
    },
    {
      "t": "rod",
      "n": "parkour-vault-crossbar-2",
      "from": [
        -1.29,
        1.96,
        -0.75
      ],
      "to": [
        1.24,
        1.96,
        -0.75
      ],
      "r": 0.052,
      "c": 14540250
    },
    {
      "t": "box",
      "n": "parkour-vault-block-0",
      "p": [
        -1.13,
        0.38,
        0.63
      ],
      "s": [
        0.54,
        0.5,
        0.48
      ],
      "c": 5869473
    },
    {
      "t": "box",
      "n": "parkour-vault-block-1",
      "p": [
        -0.3799999999999999,
        0.6799999999999999,
        0.63
      ],
      "s": [
        0.54,
        0.9,
        0.48
      ],
      "c": 5869473
    },
    {
      "t": "box",
      "n": "parkour-vault-block-2",
      "p": [
        0.3700000000000001,
        0.38,
        0.63
      ],
      "s": [
        0.54,
        0.5,
        0.48
      ],
      "c": 5869473
    },
    {
      "t": "box",
      "n": "parkour-vault-block-3",
      "p": [
        1.12,
        0.6799999999999999,
        0.63
      ],
      "s": [
        0.54,
        0.9,
        0.48
      ],
      "c": 5869473
    },
    {
      "t": "rod",
      "n": "balance-rail-0",
      "from": [
        -1.23,
        0.53,
        0.03
      ],
      "to": [
        1.22,
        0.53,
        0.04
      ],
      "r": 0.035,
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "balance-rail-1",
      "from": [
        -0.69,
        0.53,
        0.03
      ],
      "to": [
        1.08,
        0.53,
        0.04
      ],
      "r": 0.035,
      "c": 4020071
    },
    {
      "t": "rod",
      "n": "balance-rail-2",
      "from": [
        -0.1499999999999999,
        0.53,
        0.03
      ],
      "to": [
        0.94,
        0.53,
        0.04
      ],
      "r": 0.035,
      "c": 4020071
    }
  ]
}); }
