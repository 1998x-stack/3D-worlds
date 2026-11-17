import { buildRecipe } from './recipe_engine.js';
/** Outdoor Calisthenics Bars / 户外街头健身架: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "sports.outdoor-calisthenics-bars.001",
  "slug": "outdoor-calisthenics-bars",
  "title": "Outdoor Calisthenics Bars",
  "title_zh": "户外街头健身架",
  "summary": "Modular outdoor exercise bars with pull-up station, dip handles and foot plates",
  "category": "sports",
  "tags": [
    "outdoor",
    "calisthenics",
    "bars",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.25,
    2.58,
    2.05
  ],
  "generator": "createOutdoorCalisthenicsBars",
  "source_path": "src/models/outdoor_calisthenics_bars.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/outdoor-calisthenics-bars.webp",
  "accent": "#62a8b2"
};
export function createOutdoorCalisthenicsBars() { return buildRecipe({
  "title": "Outdoor Calisthenics Bars",
  "dimensions": [
    3.25,
    2.58,
    2.05
  ],
  "parts": [
    {
      "t": "rod",
      "n": "calisthenics-upright--1.4",
      "from": [
        -1.4,
        0.03,
        0
      ],
      "to": [
        -1.4,
        2.32,
        0
      ],
      "r": 0.075,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "calisthenics-upright--0.4",
      "from": [
        -0.4,
        0.03,
        0
      ],
      "to": [
        -0.4,
        2.32,
        0
      ],
      "r": 0.075,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "calisthenics-upright-0.65",
      "from": [
        0.65,
        0.03,
        0
      ],
      "to": [
        0.65,
        2.32,
        0
      ],
      "r": 0.075,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "calisthenics-upright-1.42",
      "from": [
        1.42,
        0.03,
        0
      ],
      "to": [
        1.42,
        2.32,
        0
      ],
      "r": 0.075,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "high-pullup-bar",
      "from": [
        -1.45,
        2.31,
        0
      ],
      "to": [
        0.65,
        2.31,
        0
      ],
      "r": 0.051,
      "c": 6465714
    },
    {
      "t": "rod",
      "n": "low-pullup-bar",
      "from": [
        -0.4,
        1.65,
        0
      ],
      "to": [
        1.45,
        1.65,
        0
      ],
      "r": 0.05,
      "c": 6465714
    },
    {
      "t": "rod",
      "n": "parallel-dip-bar--1",
      "from": [
        -0.38,
        1.18,
        -0.7
      ],
      "to": [
        -0.38,
        1.18,
        0.75
      ],
      "r": 0.045,
      "c": 4020332
    },
    {
      "t": "rod",
      "n": "dip-support--1--0.6",
      "from": [
        -0.38,
        0.02,
        -0.6
      ],
      "to": [
        -0.38,
        1.2,
        -0.6
      ],
      "r": 0.049,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "dip-support--1-0.65",
      "from": [
        -0.38,
        0.02,
        0.65
      ],
      "to": [
        -0.38,
        1.2,
        0.65
      ],
      "r": 0.049,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "parallel-dip-bar-1",
      "from": [
        0.38,
        1.18,
        -0.7
      ],
      "to": [
        0.38,
        1.18,
        0.75
      ],
      "r": 0.045,
      "c": 4020332
    },
    {
      "t": "rod",
      "n": "dip-support-1--0.6",
      "from": [
        0.38,
        0.02,
        -0.6
      ],
      "to": [
        0.38,
        1.2,
        -0.6
      ],
      "r": 0.049,
      "c": 15707752
    },
    {
      "t": "rod",
      "n": "dip-support-1-0.65",
      "from": [
        0.38,
        0.02,
        0.65
      ],
      "to": [
        0.38,
        1.2,
        0.65
      ],
      "r": 0.049,
      "c": 15707752
    },
    {
      "t": "cylinder",
      "n": "ground-footpad-0",
      "p": [
        -1.4,
        0.06,
        0
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 15461872
    },
    {
      "t": "cylinder",
      "n": "ground-footpad-1",
      "p": [
        -0.46999999999999986,
        0.06,
        0
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 15461872
    },
    {
      "t": "cylinder",
      "n": "ground-footpad-2",
      "p": [
        0.4600000000000002,
        0.06,
        0
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 15461872
    },
    {
      "t": "cylinder",
      "n": "ground-footpad-3",
      "p": [
        1.3900000000000001,
        0.06,
        0
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 15461872
    }
  ]
}); }
