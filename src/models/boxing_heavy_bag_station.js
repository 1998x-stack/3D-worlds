import { buildRecipe } from './recipe_engine.js';
/** Boxing Heavy Bag Station — original authored procedural scene component. */
export const assetMeta = {
  "id": "sports.boxing-heavy-bag-station.001",
  "slug": "boxing-heavy-bag-station",
  "title": "Boxing Heavy Bag Station",
  "title_zh": "拳击沙袋训练站",
  "summary": "Standing exercise bag rig with steel top arm, chains, reinforced heavy bag and floor mat",
  "category": "sports",
  "tags": [
    "boxing",
    "bag",
    "training"
  ],
  "dimensions_m": [
    1.28,
    2.45,
    1.11
  ],
  "generator": "createBoxingHeavyBagStation",
  "source_path": "src/models/boxing_heavy_bag_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/boxing-heavy-bag-station.webp"
};
export function createBoxingHeavyBagStation() { return buildRecipe({
  "title": "Boxing Heavy Bag Station",
  "dimensions": [
    1.28,
    2.45,
    1.11
  ],
  "parts": [
    {
      "t": "box",
      "n": "weighted-foot",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        1.24,
        0.2,
        1.06
      ],
      "c": 3621708
    },
    {
      "t": "rod",
      "n": "vertical-stand",
      "from": [
        -0.44,
        0.19,
        -0.35
      ],
      "to": [
        -0.44,
        2.35,
        -0.35
      ],
      "r": 0.063,
      "c": 9150371
    },
    {
      "t": "rod",
      "n": "hanging-boom",
      "from": [
        -0.44,
        2.34,
        -0.35
      ],
      "to": [
        0.5,
        2.34,
        -0.2
      ],
      "r": 0.053,
      "c": 3621708
    },
    {
      "t": "rod",
      "n": "diagonal-gusset",
      "from": [
        -0.44,
        1.81,
        -0.35
      ],
      "to": [
        0.15,
        2.34,
        -0.27
      ],
      "r": 0.039,
      "c": 9150371
    },
    {
      "t": "rod",
      "n": "hanging-chain-upper",
      "from": [
        0.5,
        2.32,
        -0.2
      ],
      "to": [
        0.5,
        2.11,
        -0.2
      ],
      "r": 0.015,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "hanging-chain-lower",
      "from": [
        0.5,
        2.11,
        -0.2
      ],
      "to": [
        0.5,
        1.88,
        -0.2
      ],
      "r": 0.015,
      "c": 12822380
    },
    {
      "t": "cylinder",
      "n": "heavy-training-bag",
      "p": [
        0.5,
        1.17,
        -0.2
      ],
      "s": [
        0.45,
        1.4,
        0.43
      ],
      "c": 9990494
    },
    {
      "t": "cylinder",
      "n": "bag-top",
      "p": [
        0.5,
        1.83,
        -0.2
      ],
      "s": [
        0.42,
        0.09,
        0.43
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "training-bag-stripe-0",
      "p": [
        0.5,
        1.52,
        0.035
      ],
      "s": [
        0.3,
        0.046,
        0.018
      ],
      "c": 6968400
    },
    {
      "t": "box",
      "n": "training-bag-stripe-1",
      "p": [
        0.5,
        1.31,
        0.035
      ],
      "s": [
        0.3,
        0.046,
        0.018
      ],
      "c": 14008477
    },
    {
      "t": "box",
      "n": "training-bag-stripe-2",
      "p": [
        0.5,
        1.1,
        0.035
      ],
      "s": [
        0.3,
        0.046,
        0.018
      ],
      "c": 6968400
    },
    {
      "t": "box",
      "n": "training-bag-stripe-3",
      "p": [
        0.5,
        0.89,
        0.035
      ],
      "s": [
        0.3,
        0.046,
        0.018
      ],
      "c": 14008477
    },
    {
      "t": "box",
      "n": "training-bag-stripe-4",
      "p": [
        0.5,
        0.68,
        0.035
      ],
      "s": [
        0.3,
        0.046,
        0.018
      ],
      "c": 6968400
    },
    {
      "t": "rod",
      "n": "bag-loop-0",
      "from": [
        0.67,
        1.83,
        -0.2
      ],
      "to": [
        0.5,
        1.99,
        -0.2
      ],
      "r": 0.018,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "bag-loop-1",
      "from": [
        0.5,
        1.83,
        -0.04000000000000001
      ],
      "to": [
        0.5,
        1.99,
        -0.2
      ],
      "r": 0.018,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "bag-loop-2",
      "from": [
        0.32999999999999996,
        1.83,
        -0.19999999999999998
      ],
      "to": [
        0.5,
        1.99,
        -0.2
      ],
      "r": 0.018,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "bag-loop-3",
      "from": [
        0.49999999999999994,
        1.83,
        -0.36
      ],
      "to": [
        0.5,
        1.99,
        -0.2
      ],
      "r": 0.018,
      "c": 12822380
    },
    {
      "t": "box",
      "n": "padded-floor-mat",
      "p": [
        0.16,
        0.04,
        0
      ],
      "s": [
        1.23,
        0.08,
        1.09
      ],
      "c": 7768203
    },
    {
      "t": "box",
      "n": "station-instruction",
      "p": [
        -0.44,
        1.23,
        -0.28
      ],
      "s": [
        0.14,
        0.26,
        0.015
      ],
      "c": 14870239
    }
  ]
}); }
