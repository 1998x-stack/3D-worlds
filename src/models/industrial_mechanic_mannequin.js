import { buildRecipe } from './recipe_engine.js';
/** Industrial Mechanic Mannequin / 工业机械维修师原型: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "characters.industrial-mechanic-mannequin.001",
  "slug": "industrial-mechanic-mannequin",
  "title": "Industrial Mechanic Mannequin",
  "title_zh": "工业机械维修师原型",
  "summary": "Unrigged industrial mechanic with coveralls, safety visor, tool belt and wrench",
  "category": "characters",
  "tags": [
    "mechanic",
    "maintenance",
    "character"
  ],
  "dimensions_m": [
    1.09,
    1.92,
    0.75
  ],
  "generator": "createIndustrialMechanicMannequin",
  "source_path": "src/models/industrial_mechanic_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/industrial-mechanic-mannequin.webp"
};
export function createIndustrialMechanicMannequin() { return buildRecipe({
  "title": "Industrial Mechanic Mannequin",
  "dimensions": [
    1.09,
    1.92,
    0.75
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "coveralls",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        0.61,
        0.76,
        0.43
      ],
      "c": 5206152
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
        0.33,
        0.31
      ],
      "c": 12951681
    },
    {
      "t": "cylinder",
      "n": "helmet",
      "p": [
        0,
        1.86,
        0
      ],
      "s": [
        0.42,
        0.13,
        0.42
      ],
      "c": 13216088
    },
    {
      "t": "box",
      "n": "visor-glass",
      "p": [
        0,
        1.68,
        0.32
      ],
      "s": [
        0.44,
        0.14,
        0.035
      ],
      "c": 8236729
    },
    {
      "t": "box",
      "n": "utility-belt",
      "p": [
        0,
        0.88,
        0.02
      ],
      "s": [
        0.63,
        0.14,
        0.44
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.35,
        1.38,
        0
      ],
      "to": [
        -0.44,
        0.91,
        0
      ],
      "r": 0.113,
      "c": 5206152
    },
    {
      "t": "sphere",
      "n": "glove-0",
      "p": [
        -0.45,
        0.85,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.12
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "leg-0",
      "from": [
        -0.18,
        0.84,
        0
      ],
      "to": [
        -0.21,
        0.22,
        0
      ],
      "r": 0.147,
      "c": 5206152
    },
    {
      "t": "box",
      "n": "boot-0",
      "p": [
        -0.21,
        0.11,
        0.13
      ],
      "s": [
        0.29,
        0.22,
        0.34
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.35,
        1.38,
        0
      ],
      "to": [
        0.44,
        0.91,
        0
      ],
      "r": 0.113,
      "c": 5206152
    },
    {
      "t": "sphere",
      "n": "glove-1",
      "p": [
        0.45,
        0.85,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.12
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "leg-1",
      "from": [
        0.18,
        0.84,
        0
      ],
      "to": [
        0.21,
        0.22,
        0
      ],
      "r": 0.147,
      "c": 5206152
    },
    {
      "t": "box",
      "n": "boot-1",
      "p": [
        0.21,
        0.11,
        0.13
      ],
      "s": [
        0.29,
        0.22,
        0.34
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "pocket-left",
      "p": [
        -0.2,
        1.25,
        0.24
      ],
      "s": [
        0.15,
        0.17,
        0.015
      ],
      "c": 9741736
    },
    {
      "t": "box",
      "n": "pocket-right",
      "p": [
        0.2,
        1.25,
        0.24
      ],
      "s": [
        0.15,
        0.17,
        0.015
      ],
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "wrench-handle",
      "from": [
        0.49,
        0.87,
        0.09
      ],
      "to": [
        0.55,
        1.19,
        0.09
      ],
      "r": 0.024,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "wrench-jaw-a",
      "from": [
        0.55,
        1.19,
        0.09
      ],
      "to": [
        0.48,
        1.29,
        0.09
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "wrench-jaw-b",
      "from": [
        0.55,
        1.19,
        0.09
      ],
      "to": [
        0.63,
        1.28,
        0.09
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "box",
      "n": "tool-pouch",
      "p": [
        0.34,
        0.83,
        0.15
      ],
      "s": [
        0.19,
        0.24,
        0.16
      ],
      "c": 9924685
    }
  ]
}); }
