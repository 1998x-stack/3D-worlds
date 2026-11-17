import { buildRecipe } from './recipe_engine.js';

/** Original authored Electric Standing Desk / 电动升降办公桌; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "furniture.electric-standing-desk.001",
  "slug": "electric-standing-desk",
  "title": "Electric Standing Desk",
  "title_zh": "电动升降办公桌",
  "summary": "Dual motor lifting columns, oak worktop, crossbar and height controls.",
  "category": "furniture",
  "tags": [
    "desk",
    "office",
    "adjustable",
    "home"
  ],
  "dimensions_m": [
    1.5,
    1.22,
    0.77
  ],
  "generator": "createElectricStandingDesk",
  "source_path": "src/models/electric_standing_desk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/electric-standing-desk.webp"
};
export function createElectricStandingDesk() {
  return buildRecipe({
  "title": "Electric Standing Desk",
  "dimensions": [
    1.5,
    1.22,
    0.77
  ],
  "parts": [
    {
      "t": "box",
      "n": "worktop",
      "p": [
        0,
        1.16,
        0
      ],
      "s": [
        1.5,
        0.08,
        0.77
      ],
      "c": 10318932
    },
    {
      "t": "cylinder",
      "n": "telescoping-column-0",
      "p": [
        -0.57,
        0.6,
        0
      ],
      "s": [
        0.1,
        1.07,
        0.1
      ],
      "c": 9213593
    },
    {
      "t": "cylinder",
      "n": "upper-sleeve-0",
      "p": [
        -0.57,
        0.86,
        0
      ],
      "s": [
        0.14,
        0.57,
        0.14
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "base-foot-0",
      "p": [
        -0.57,
        0.08,
        0
      ],
      "s": [
        0.18,
        0.13,
        0.68
      ],
      "c": 9213593
    },
    {
      "t": "box",
      "n": "mounting-bracket-0",
      "p": [
        -0.57,
        1.06,
        0
      ],
      "s": [
        0.32,
        0.08,
        0.4
      ],
      "c": 3422268
    },
    {
      "t": "cylinder",
      "n": "telescoping-column-1",
      "p": [
        0.57,
        0.6,
        0
      ],
      "s": [
        0.1,
        1.07,
        0.1
      ],
      "c": 9213593
    },
    {
      "t": "cylinder",
      "n": "upper-sleeve-1",
      "p": [
        0.57,
        0.86,
        0
      ],
      "s": [
        0.14,
        0.57,
        0.14
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "base-foot-1",
      "p": [
        0.57,
        0.08,
        0
      ],
      "s": [
        0.18,
        0.13,
        0.68
      ],
      "c": 9213593
    },
    {
      "t": "box",
      "n": "mounting-bracket-1",
      "p": [
        0.57,
        1.06,
        0
      ],
      "s": [
        0.32,
        0.08,
        0.4
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "crossbeam",
      "p": [
        0,
        0.66,
        0
      ],
      "s": [
        1.2,
        0.08,
        0.08
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "controller",
      "p": [
        0.51,
        1.1,
        0.3
      ],
      "s": [
        0.24,
        0.045,
        0.12
      ],
      "c": 5400440
    },
    {
      "t": "sphere",
      "n": "control-key-0",
      "p": [
        0.43,
        1.12,
        0.34
      ],
      "s": [
        0.021,
        0.012,
        0.014
      ],
      "c": 7845315
    },
    {
      "t": "sphere",
      "n": "control-key-1",
      "p": [
        0.54,
        1.12,
        0.34
      ],
      "s": [
        0.021,
        0.012,
        0.014
      ],
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "control-key-2",
      "p": [
        0.63,
        1.12,
        0.34
      ],
      "s": [
        0.021,
        0.012,
        0.014
      ],
      "c": 15263711
    }
  ]
});
}
