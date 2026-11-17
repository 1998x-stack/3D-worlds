import { buildRecipe } from './recipe_engine.js';
/** Urban Gardener Mannequin / 城市园艺师人物原型: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "characters.urban-gardener-mannequin.001",
  "slug": "urban-gardener-mannequin",
  "title": "Urban Gardener Mannequin",
  "title_zh": "城市园艺师人物原型",
  "summary": "Unrigged urban gardener with apron, gloves, watering can and hand trowel",
  "category": "characters",
  "tags": [
    "urban",
    "gardener",
    "mannequin",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.05,
    1.89,
    0.76
  ],
  "generator": "createUrbanGardenerMannequin",
  "source_path": "src/models/urban_gardener_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/urban-gardener-mannequin.webp",
  "accent": "#e9ba78"
};
export function createUrbanGardenerMannequin() { return buildRecipe({
  "title": "Urban Gardener Mannequin",
  "dimensions": [
    1.05,
    1.89,
    0.76
  ],
  "parts": [
    {
      "t": "box",
      "n": "body-torso",
      "p": [
        0,
        1.18,
        0
      ],
      "s": [
        0.51,
        0.63,
        0.3
      ],
      "c": 7115909
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.77,
        0
      ],
      "s": [
        0.19,
        0.21,
        0.18
      ],
      "c": 15128263
    },
    {
      "t": "cylinder",
      "n": "neck",
      "p": [
        0,
        1.57,
        0
      ],
      "s": [
        0.11,
        0.18,
        0.11
      ],
      "c": 15128263
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.28,
        1.42,
        0
      ],
      "to": [
        -0.36,
        0.94,
        0.1
      ],
      "r": 0.083,
      "c": 7115909
    },
    {
      "t": "rod",
      "n": "lower-arm--1",
      "from": [
        -0.36,
        0.94,
        0.1
      ],
      "to": [
        -0.39,
        0.77,
        0.3
      ],
      "r": 0.06,
      "c": 15128263
    },
    {
      "t": "rod",
      "n": "thigh--1",
      "from": [
        -0.16,
        0.89,
        0
      ],
      "to": [
        -0.16,
        0.5,
        0
      ],
      "r": 0.11,
      "c": 15317624
    },
    {
      "t": "rod",
      "n": "shin--1",
      "from": [
        -0.16,
        0.5,
        0
      ],
      "to": [
        -0.19,
        0.11,
        0.07
      ],
      "r": 0.085,
      "c": 15317624
    },
    {
      "t": "box",
      "n": "shoe--1",
      "p": [
        -0.19,
        0.075,
        0.14
      ],
      "s": [
        0.2,
        0.11,
        0.36
      ],
      "c": 3490907
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.28,
        1.42,
        0
      ],
      "to": [
        0.36,
        0.94,
        0.1
      ],
      "r": 0.083,
      "c": 7115909
    },
    {
      "t": "rod",
      "n": "lower-arm-1",
      "from": [
        0.36,
        0.94,
        0.1
      ],
      "to": [
        0.39,
        0.77,
        0.3
      ],
      "r": 0.06,
      "c": 15128263
    },
    {
      "t": "rod",
      "n": "thigh-1",
      "from": [
        0.16,
        0.89,
        0
      ],
      "to": [
        0.16,
        0.5,
        0
      ],
      "r": 0.11,
      "c": 15317624
    },
    {
      "t": "rod",
      "n": "shin-1",
      "from": [
        0.16,
        0.5,
        0
      ],
      "to": [
        0.19,
        0.11,
        0.07
      ],
      "r": 0.085,
      "c": 15317624
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.19,
        0.075,
        0.14
      ],
      "s": [
        0.2,
        0.11,
        0.36
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "field-vest-badge",
      "p": [
        0.13,
        1.28,
        0.171
      ],
      "s": [
        0.16,
        0.09,
        0.022
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "vest-pocket-0",
      "p": [
        -0.17,
        1.12,
        0.18
      ],
      "s": [
        0.12,
        0.13,
        0.036
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "vest-pocket-1",
      "p": [
        0,
        1.12,
        0.18
      ],
      "s": [
        0.12,
        0.13,
        0.036
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "vest-pocket-2",
      "p": [
        0.17,
        1.12,
        0.18
      ],
      "s": [
        0.12,
        0.13,
        0.036
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "garden-apron",
      "p": [
        0,
        1.08,
        0.2
      ],
      "s": [
        0.43,
        0.52,
        0.06
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "watering-can",
      "p": [
        0.55,
        0.72,
        0.4
      ],
      "s": [
        0.26,
        0.18,
        0.2
      ],
      "c": 15317624
    },
    {
      "t": "torus",
      "n": "watering-handle",
      "p": [
        0.7,
        0.82,
        0.34
      ],
      "s": [
        0.3,
        0.3,
        0.3
      ],
      "c": 7115909
    },
    {
      "t": "rod",
      "n": "watering-spout",
      "from": [
        0.64,
        0.77,
        0.44
      ],
      "to": [
        0.89,
        0.66,
        0.6
      ],
      "r": 0.026,
      "c": 15317624
    },
    {
      "t": "box",
      "n": "gardener-trowel",
      "p": [
        -0.5,
        0.82,
        0.37
      ],
      "s": [
        0.1,
        0.36,
        0.04
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "leaf-0",
      "p": [
        0.62,
        0.65,
        0.52
      ],
      "s": [
        0.06,
        0.11,
        0.04
      ],
      "c": 7115909
    },
    {
      "t": "sphere",
      "n": "leaf-1",
      "p": [
        0.74,
        0.76,
        0.52
      ],
      "s": [
        0.06,
        0.11,
        0.04
      ],
      "c": 7115909
    },
    {
      "t": "sphere",
      "n": "leaf-2",
      "p": [
        0.86,
        0.87,
        0.52
      ],
      "s": [
        0.06,
        0.11,
        0.04
      ],
      "c": 7115909
    }
  ]
}); }
