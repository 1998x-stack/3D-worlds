import { buildRecipe } from './recipe_engine.js';
/** Wildlife Photographer Mannequin / 野生动物摄影师人物原型: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "characters.wildlife-photographer-mannequin.001",
  "slug": "wildlife-photographer-mannequin",
  "title": "Wildlife Photographer Mannequin",
  "title_zh": "野生动物摄影师人物原型",
  "summary": "Unrigged field photographer wearing safari vest with telephoto camera and tripod",
  "category": "characters",
  "tags": [
    "wildlife",
    "photographer",
    "mannequin",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.1,
    1.93,
    0.85
  ],
  "generator": "createWildlifePhotographerMannequin",
  "source_path": "src/models/wildlife_photographer_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/wildlife-photographer-mannequin.webp",
  "accent": "#6c9485"
};
export function createWildlifePhotographerMannequin() { return buildRecipe({
  "title": "Wildlife Photographer Mannequin",
  "dimensions": [
    1.1,
    1.93,
    0.85
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
      "t": "cylinder",
      "n": "camera-lens",
      "p": [
        0.42,
        0.98,
        0.39
      ],
      "s": [
        0.21,
        0.37,
        0.21
      ],
      "c": 3490907,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "camera-body",
      "p": [
        0.38,
        1.02,
        0.21
      ],
      "s": [
        0.37,
        0.24,
        0.21
      ],
      "c": 15317624
    },
    {
      "t": "rod",
      "n": "camera-tripod",
      "from": [
        0.62,
        0.65,
        0.42
      ],
      "to": [
        0.7,
        0.05,
        0.5
      ],
      "r": 0.025,
      "c": 3490907
    },
    {
      "t": "rod",
      "n": "tripod-leg-left",
      "from": [
        0.7,
        0.55,
        0.5
      ],
      "to": [
        0.36,
        0.08,
        0.7
      ],
      "r": 0.018,
      "c": 3490907
    },
    {
      "t": "rod",
      "n": "tripod-leg-right",
      "from": [
        0.7,
        0.55,
        0.5
      ],
      "to": [
        0.92,
        0.08,
        0.2
      ],
      "r": 0.018,
      "c": 3490907
    },
    {
      "t": "box",
      "n": "photographer-hat",
      "p": [
        0,
        1.96,
        0
      ],
      "s": [
        0.49,
        0.06,
        0.4
      ],
      "c": 15317624
    }
  ]
}); }
