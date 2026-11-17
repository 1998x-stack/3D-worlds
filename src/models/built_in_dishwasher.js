import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "kitchen.built-in-dishwasher.001",
  "slug": "built-in-dishwasher",
  "title": "Built In Dishwasher",
  "title_zh": "嵌入式洗碗机",
  "summary": "Front-opening kitchen dishwasher with panel display and base vents",
  "category": "kitchen",
  "tags": [
    "dishwasher",
    "appliance",
    "kitchen"
  ],
  "dimensions_m": [
    0.62,
    0.87,
    0.66
  ],
  "generator": "createBuiltInDishwasher",
  "source_path": "src/models/built_in_dishwasher.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/built-in-dishwasher.webp"
};
export function createBuiltInDishwasher() { return buildRecipe({
  "title": "Built In Dishwasher",
  "dimensions": [
    0.62,
    0.87,
    0.66
  ],
  "parts": [
    {
      "t": "box",
      "n": "body",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        0.6,
        0.84,
        0.63
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "front-door",
      "p": [
        0,
        0.45,
        0.325
      ],
      "s": [
        0.6,
        0.75,
        0.024
      ],
      "c": 13094859
    },
    {
      "t": "box",
      "n": "control-strip",
      "p": [
        0,
        0.79,
        0.342
      ],
      "s": [
        0.59,
        0.12,
        0.023
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "display",
      "p": [
        0.1,
        0.79,
        0.36
      ],
      "s": [
        0.19,
        0.047,
        0.013
      ],
      "c": 6590362
    },
    {
      "t": "sphere",
      "n": "touchkey-0",
      "p": [
        -0.23,
        0.79,
        0.36
      ],
      "s": [
        0.016,
        0.016,
        0.009
      ],
      "c": 8435878
    },
    {
      "t": "sphere",
      "n": "touchkey-1",
      "p": [
        -0.14,
        0.79,
        0.36
      ],
      "s": [
        0.016,
        0.016,
        0.009
      ],
      "c": 15131609
    },
    {
      "t": "sphere",
      "n": "touchkey-2",
      "p": [
        -0.05000000000000002,
        0.79,
        0.36
      ],
      "s": [
        0.016,
        0.016,
        0.009
      ],
      "c": 15131609
    },
    {
      "t": "sphere",
      "n": "touchkey-3",
      "p": [
        0.04000000000000001,
        0.79,
        0.36
      ],
      "s": [
        0.016,
        0.016,
        0.009
      ],
      "c": 15131609
    },
    {
      "t": "sphere",
      "n": "touchkey-4",
      "p": [
        0.12999999999999998,
        0.79,
        0.36
      ],
      "s": [
        0.016,
        0.016,
        0.009
      ],
      "c": 15131609
    },
    {
      "t": "rod",
      "n": "long-handle",
      "from": [
        -0.21,
        0.68,
        0.36
      ],
      "to": [
        0.21,
        0.68,
        0.36
      ],
      "r": 0.024,
      "c": 9872549
    },
    {
      "t": "box",
      "n": "panel-seam",
      "p": [
        0,
        0.52,
        0.34
      ],
      "s": [
        0.53,
        0.012,
        0.02
      ],
      "c": 7439496
    },
    {
      "t": "box",
      "n": "logo-tab",
      "p": [
        0,
        0.22,
        0.34
      ],
      "s": [
        0.13,
        0.055,
        0.014
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "kickplate",
      "p": [
        0,
        0.065,
        0.32
      ],
      "s": [
        0.59,
        0.13,
        0.026
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "foot-0",
      "p": [
        -0.24,
        0.026,
        -0.22
      ],
      "s": [
        0.075,
        0.055,
        0.08
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "foot-1",
      "p": [
        0.24,
        0.026,
        -0.22
      ],
      "s": [
        0.075,
        0.055,
        0.08
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "vent-0",
      "p": [
        -0.2,
        0.1,
        0.338
      ],
      "s": [
        0.05,
        0.032,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "vent-1",
      "p": [
        -0.07,
        0.1,
        0.338
      ],
      "s": [
        0.05,
        0.032,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "vent-2",
      "p": [
        0.06,
        0.1,
        0.338
      ],
      "s": [
        0.05,
        0.032,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "vent-3",
      "p": [
        0.19,
        0.1,
        0.338
      ],
      "s": [
        0.05,
        0.032,
        0.012
      ],
      "c": 9872549
    }
  ]
}); }
