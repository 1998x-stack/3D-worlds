import { buildRecipe } from './recipe_engine.js';
/** Copper Clawfoot Bathtub — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "bathroom.copper-clawfoot-bathtub.001",
  "slug": "copper-clawfoot-bathtub",
  "title": "Copper Clawfoot Bathtub",
  "title_zh": "复古铜质四足浴缸",
  "summary": "Copper freestanding bathtub with contrasting enamel interior and four ornate feet",
  "category": "bathroom",
  "tags": [
    "bathtub",
    "copper",
    "retro"
  ],
  "dimensions_m": [
    1.63,
    0.76,
    0.83
  ],
  "generator": "createCopperClawfootBathtub",
  "source_path": "src/models/copper_clawfoot_bathtub.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/copper-clawfoot-bathtub.webp"
};
export function createCopperClawfootBathtub() { return buildRecipe({
  "title": "Copper Clawfoot Bathtub",
  "dimensions": [
    1.63,
    0.76,
    0.83
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "copper-outer",
      "p": [
        0,
        0.47,
        0
      ],
      "s": [
        1.54,
        0.5,
        0.79
      ],
      "c": 11236432
    },
    {
      "t": "sphere",
      "n": "enamel-inner",
      "p": [
        0,
        0.6,
        0
      ],
      "s": [
        1.41,
        0.2,
        0.67
      ],
      "c": 14213338
    },
    {
      "t": "sphere",
      "n": "water-surface",
      "p": [
        0,
        0.66,
        0
      ],
      "s": [
        1.31,
        0.025,
        0.55
      ],
      "c": 10209484
    },
    {
      "t": "sphere",
      "n": "clawfoot-0-0",
      "p": [
        -0.61,
        0.14,
        -0.27
      ],
      "s": [
        0.16,
        0.23,
        0.13
      ],
      "c": 12755572
    },
    {
      "t": "sphere",
      "n": "clawfoot-0-1",
      "p": [
        -0.61,
        0.14,
        0.27
      ],
      "s": [
        0.16,
        0.23,
        0.13
      ],
      "c": 12755572
    },
    {
      "t": "sphere",
      "n": "clawfoot-1-0",
      "p": [
        0.61,
        0.14,
        -0.27
      ],
      "s": [
        0.16,
        0.23,
        0.13
      ],
      "c": 12755572
    },
    {
      "t": "sphere",
      "n": "clawfoot-1-1",
      "p": [
        0.61,
        0.14,
        0.27
      ],
      "s": [
        0.16,
        0.23,
        0.13
      ],
      "c": 12755572
    },
    {
      "t": "torus",
      "n": "rim-trim",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        2.1,
        0.98,
        1.23
      ],
      "c": 12755572,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "upright-tap",
      "from": [
        0.56,
        0.58,
        -0.24
      ],
      "to": [
        0.56,
        0.93,
        -0.24
      ],
      "r": 0.024,
      "c": 9149339
    },
    {
      "t": "rod",
      "n": "swan-spout",
      "from": [
        0.56,
        0.93,
        -0.24
      ],
      "to": [
        0.42,
        0.83,
        -0.11
      ],
      "r": 0.023,
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "tap-knob-0",
      "p": [
        0.4600000000000001,
        0.76,
        -0.28
      ],
      "s": [
        0.045,
        0.03,
        0.045
      ],
      "c": 8366519
    },
    {
      "t": "sphere",
      "n": "tap-knob-1",
      "p": [
        0.66,
        0.76,
        -0.28
      ],
      "s": [
        0.045,
        0.03,
        0.045
      ],
      "c": 12746096
    },
    {
      "t": "sphere",
      "n": "overflow-drain",
      "p": [
        0.66,
        0.56,
        0
      ],
      "s": [
        0.041,
        0.04,
        0.012
      ],
      "c": 9149339
    }
  ]
}); }
