import { buildRecipe } from './recipe_engine.js';
/** Marine Biologist Mannequin / 海洋生物学家人物原型: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "characters.marine-biologist-mannequin.001",
  "slug": "marine-biologist-mannequin",
  "title": "Marine Biologist Mannequin",
  "title_zh": "海洋生物学家人物原型",
  "summary": "Unrigged ocean scientist with sample vial, field tablet and flotation vest",
  "category": "characters",
  "tags": [
    "marine",
    "biologist",
    "mannequin",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.04,
    1.92,
    0.8
  ],
  "generator": "createMarineBiologistMannequin",
  "source_path": "src/models/marine_biologist_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/marine-biologist-mannequin.webp",
  "accent": "#35445b"
};
export function createMarineBiologistMannequin() { return buildRecipe({
  "title": "Marine Biologist Mannequin",
  "dimensions": [
    1.04,
    1.92,
    0.8
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
      "n": "orange-flotation-panel",
      "p": [
        0,
        1.29,
        0.191
      ],
      "s": [
        0.4,
        0.4,
        0.05
      ],
      "c": 15311948
    },
    {
      "t": "box",
      "n": "field-tablet",
      "p": [
        0.46,
        0.97,
        0.32
      ],
      "s": [
        0.34,
        0.24,
        0.04
      ],
      "c": 3490907
    },
    {
      "t": "cylinder",
      "n": "sample-vial",
      "p": [
        -0.47,
        0.87,
        0.3
      ],
      "s": [
        0.11,
        0.25,
        0.11
      ],
      "c": 8240073
    },
    {
      "t": "cylinder",
      "n": "vial-cap",
      "p": [
        -0.47,
        1.02,
        0.3
      ],
      "s": [
        0.12,
        0.045,
        0.12
      ],
      "c": 15317624
    },
    {
      "t": "box",
      "n": "pocket-loop-0",
      "p": [
        -0.14,
        1.44,
        0.206
      ],
      "s": [
        0.04,
        0.06,
        0.02
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "pocket-loop-1",
      "p": [
        0,
        1.44,
        0.206
      ],
      "s": [
        0.04,
        0.06,
        0.02
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "pocket-loop-2",
      "p": [
        0.14,
        1.44,
        0.206
      ],
      "s": [
        0.04,
        0.06,
        0.02
      ],
      "c": 3490907
    }
  ]
}); }
