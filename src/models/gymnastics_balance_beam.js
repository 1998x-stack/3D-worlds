import { buildRecipe } from './recipe_engine.js';
/** Gymnastics Balance Beam: original source-editable mesh scene. */
export const assetMeta = {
  "id": "sports.gymnastics-balance-beam.001",
  "slug": "gymnastics-balance-beam",
  "title": "Gymnastics Balance Beam",
  "title_zh": "竞技体操平衡木",
  "summary": "Gymnastics balance beam with padded top, steel supports and stabilizing pads",
  "category": "sports",
  "tags": [
    "gymnastics",
    "balance",
    "beam"
  ],
  "dimensions_m": [
    4.12,
    1.29,
    0.69
  ],
  "generator": "createGymnasticsBalanceBeam",
  "source_path": "src/models/gymnastics_balance_beam.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/gymnastics-balance-beam.webp"
};
export function createGymnasticsBalanceBeam() { return buildRecipe({
  "title": "Gymnastics Balance Beam",
  "dimensions": [
    4.12,
    1.29,
    0.69
  ],
  "parts": [
    {
      "t": "box",
      "n": "padded-beam",
      "p": [
        0,
        1.14,
        0
      ],
      "s": [
        4.05,
        0.18,
        0.22
      ],
      "c": 13084034
    },
    {
      "t": "box",
      "n": "support-upright--1.45",
      "p": [
        -1.45,
        0.59,
        0
      ],
      "s": [
        0.16,
        1.07,
        0.16
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "stabilizer-foot--1.45",
      "p": [
        -1.45,
        0.075,
        0
      ],
      "s": [
        0.61,
        0.15,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "diagonal-stay--1.45",
      "from": [
        -1.45,
        0.38,
        0
      ],
      "to": [
        -1.044,
        1.05,
        0
      ],
      "r": 0.035,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "support-upright-1.45",
      "p": [
        1.45,
        0.59,
        0
      ],
      "s": [
        0.16,
        1.07,
        0.16
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "stabilizer-foot-1.45",
      "p": [
        1.45,
        0.075,
        0
      ],
      "s": [
        0.61,
        0.15,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "diagonal-stay-1.45",
      "from": [
        1.45,
        0.38,
        0
      ],
      "to": [
        1.044,
        1.05,
        0
      ],
      "r": 0.035,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "tension-stitch-0",
      "p": [
        -1.68,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-1",
      "p": [
        -1.2,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-2",
      "p": [
        -0.72,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-3",
      "p": [
        -0.24,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-4",
      "p": [
        0.24,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-5",
      "p": [
        0.72,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-6",
      "p": [
        1.2,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "tension-stitch-7",
      "p": [
        1.68,
        1.244,
        0.116
      ],
      "s": [
        0.07,
        0.016,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "gymnastics-mat",
      "p": [
        0,
        0.035,
        0
      ],
      "s": [
        4.08,
        0.07,
        0.67
      ],
      "c": 6657707
    }
  ]
}); }
