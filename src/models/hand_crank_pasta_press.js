import { buildRecipe } from './recipe_engine.js';
/** Hand Crank Pasta Press / 手摇压面机: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "kitchen.hand-crank-pasta-press.001",
  "slug": "hand-crank-pasta-press",
  "title": "Hand Crank Pasta Press",
  "title_zh": "手摇压面机",
  "summary": "Countertop pasta roller with steel cutters, hand crank and sheet of dough",
  "category": "kitchen",
  "tags": [
    "hand",
    "crank",
    "pasta",
    "press",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.72,
    0.62,
    0.48
  ],
  "generator": "createHandCrankPastaPress",
  "source_path": "src/models/hand_crank_pasta_press.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/hand-crank-pasta-press.webp",
  "accent": "#d8a869"
};
export function createHandCrankPastaPress() { return buildRecipe({
  "title": "Hand Crank Pasta Press",
  "dimensions": [
    0.72,
    0.62,
    0.48
  ],
  "parts": [
    {
      "t": "box",
      "n": "pasta-roller-frame",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.53,
        0.36,
        0.39
      ],
      "c": 11716041
    },
    {
      "t": "cylinder",
      "n": "steel-roller-0",
      "p": [
        -0.06,
        0.43,
        0.06
      ],
      "s": [
        0.45,
        0.09,
        0.09
      ],
      "c": 4213849,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "steel-roller-1",
      "p": [
        0.08000000000000002,
        0.43,
        0.06
      ],
      "s": [
        0.45,
        0.09,
        0.09
      ],
      "c": 4213849,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "crank-shaft",
      "from": [
        0.34,
        0.43,
        0
      ],
      "to": [
        0.58,
        0.43,
        0
      ],
      "r": 0.038,
      "c": 4213849
    },
    {
      "t": "rod",
      "n": "crank-handle",
      "from": [
        0.58,
        0.43,
        0
      ],
      "to": [
        0.58,
        0.59,
        0.13
      ],
      "r": 0.035,
      "c": 14198889
    },
    {
      "t": "box",
      "n": "pasta-dough-sheet",
      "p": [
        0,
        0.2,
        0.29
      ],
      "s": [
        0.39,
        0.018,
        0.58
      ],
      "c": 14476257,
      "rot": [
        0.18,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-0",
      "p": [
        -0.16,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-1",
      "p": [
        -0.115,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-2",
      "p": [
        -0.07,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-3",
      "p": [
        -0.024999999999999994,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-4",
      "p": [
        0.01999999999999999,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-5",
      "p": [
        0.06499999999999997,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-6",
      "p": [
        0.11000000000000001,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "cut-pasta-strip-7",
      "p": [
        0.155,
        0.08,
        0.56
      ],
      "s": [
        0.029,
        0.018,
        0.34
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "table-clamp--1",
      "p": [
        -0.22,
        0.11,
        -0.1
      ],
      "s": [
        0.08,
        0.19,
        0.13
      ],
      "c": 4213849
    },
    {
      "t": "box",
      "n": "table-clamp-1",
      "p": [
        0.22,
        0.11,
        -0.1
      ],
      "s": [
        0.08,
        0.19,
        0.13
      ],
      "c": 4213849
    }
  ]
}); }
