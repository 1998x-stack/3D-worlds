import { buildRecipe } from './recipe_engine.js';
/** Paramedic Mannequin / 急救医护人员原型: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "characters.paramedic-mannequin.001",
  "slug": "paramedic-mannequin",
  "title": "Paramedic Mannequin",
  "title_zh": "急救医护人员原型",
  "summary": "Unrigged paramedic wearing reflective uniform, medical satchel and portable radio",
  "category": "characters",
  "tags": [
    "paramedic",
    "rescue",
    "character"
  ],
  "dimensions_m": [
    0.99,
    1.91,
    0.74
  ],
  "generator": "createParamedicMannequin",
  "source_path": "src/models/paramedic_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/paramedic-mannequin.webp"
};
export function createParamedicMannequin() { return buildRecipe({
  "title": "Paramedic Mannequin",
  "dimensions": [
    0.99,
    1.91,
    0.74
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "uniform-torso",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        0.58,
        0.76,
        0.42
      ],
      "c": 5343622
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.69,
        0
      ],
      "s": [
        0.34,
        0.31,
        0.31
      ],
      "c": 12951431
    },
    {
      "t": "cylinder",
      "n": "cap",
      "p": [
        0,
        1.85,
        0
      ],
      "s": [
        0.4,
        0.12,
        0.4
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "visor",
      "p": [
        0,
        1.81,
        0.29
      ],
      "s": [
        0.39,
        0.027,
        0.12
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "rescue-sleeve-0",
      "from": [
        -0.34,
        1.41,
        0
      ],
      "to": [
        -0.41,
        0.91,
        0.025
      ],
      "r": 0.112,
      "c": 5343622
    },
    {
      "t": "sphere",
      "n": "glove-0",
      "p": [
        -0.43,
        0.86,
        0.03
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 14997179
    },
    {
      "t": "rod",
      "n": "uniform-leg-0",
      "from": [
        -0.18,
        0.86,
        0
      ],
      "to": [
        -0.21,
        0.2,
        0
      ],
      "r": 0.147,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "work-boot-0",
      "p": [
        -0.21,
        0.11,
        0.12
      ],
      "s": [
        0.26,
        0.22,
        0.33
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "sleeve-reflector-0",
      "p": [
        -0.4,
        1.07,
        0.06
      ],
      "s": [
        0.18,
        0.05,
        0.2
      ],
      "c": 15328729
    },
    {
      "t": "rod",
      "n": "rescue-sleeve-1",
      "from": [
        0.34,
        1.41,
        0
      ],
      "to": [
        0.41,
        0.91,
        0.025
      ],
      "r": 0.112,
      "c": 5343622
    },
    {
      "t": "sphere",
      "n": "glove-1",
      "p": [
        0.43,
        0.86,
        0.03
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 14997179
    },
    {
      "t": "rod",
      "n": "uniform-leg-1",
      "from": [
        0.18,
        0.86,
        0
      ],
      "to": [
        0.21,
        0.2,
        0
      ],
      "r": 0.147,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.21,
        0.11,
        0.12
      ],
      "s": [
        0.26,
        0.22,
        0.33
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "sleeve-reflector-1",
      "p": [
        0.4,
        1.07,
        0.06
      ],
      "s": [
        0.18,
        0.05,
        0.2
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "jacket-reflector-0",
      "p": [
        0,
        1.36,
        0.235
      ],
      "s": [
        0.49,
        0.038,
        0.015
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "jacket-reflector-1",
      "p": [
        0,
        1.1800000000000002,
        0.235
      ],
      "s": [
        0.49,
        0.038,
        0.015
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "jacket-reflector-2",
      "p": [
        0,
        1,
        0.235
      ],
      "s": [
        0.49,
        0.038,
        0.015
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "medical-bag",
      "p": [
        0.44,
        0.83,
        0.16
      ],
      "s": [
        0.29,
        0.35,
        0.22
      ],
      "c": 12084313
    },
    {
      "t": "box",
      "n": "medical-emblem",
      "p": [
        0.44,
        0.83,
        0.285
      ],
      "s": [
        0.14,
        0.05,
        0.011
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "radio",
      "p": [
        -0.18,
        1.38,
        0.21
      ],
      "s": [
        0.12,
        0.15,
        0.055
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "radio-aerial",
      "from": [
        -0.18,
        1.45,
        0.21
      ],
      "to": [
        -0.18,
        1.61,
        0.21
      ],
      "r": 0.009,
      "c": 3490120
    }
  ]
}); }
