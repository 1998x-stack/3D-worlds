import { buildRecipe } from './recipe_engine.js';
/** Museum Fossil Display: original authored procedural geometry. */
export const assetMeta = {
  "id": "decor.museum-fossil-display.001",
  "slug": "museum-fossil-display",
  "title": "Museum Fossil Display",
  "title_zh": "博物馆史前化石展台",
  "summary": "Museum mounted fossil specimen in protective case with ribcage study and labels",
  "category": "decor",
  "tags": [
    "fossil",
    "museum",
    "specimen"
  ],
  "dimensions_m": [
    1.77,
    1.74,
    0.91
  ],
  "generator": "createMuseumFossilDisplay",
  "source_path": "src/models/museum_fossil_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/museum-fossil-display.webp"
};
export function createMuseumFossilDisplay() { return buildRecipe({
  "title": "Museum Fossil Display",
  "dimensions": [
    1.77,
    1.74,
    0.91
  ],
  "parts": [
    {
      "t": "box",
      "n": "display-base",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.19,
        0.18,
        0.61
      ],
      "c": 9924945
    },
    {
      "t": "box",
      "n": "fossil-platform",
      "p": [
        0,
        0.56,
        0
      ],
      "s": [
        1.73,
        0.93,
        0.83
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "fossil-glass",
      "p": [
        0,
        1.26,
        0
      ],
      "s": [
        1.7,
        0.45,
        0.76
      ],
      "c": 9746109
    },
    {
      "t": "box",
      "n": "museum-top",
      "p": [
        0,
        1.6,
        0
      ],
      "s": [
        1.73,
        0.09,
        0.81
      ],
      "c": 3752778
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-0",
      "from": [
        -0.62,
        1.19,
        -0.2
      ],
      "to": [
        -0.62,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-1",
      "from": [
        -0.5,
        1.19,
        -0.2
      ],
      "to": [
        -0.5,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-2",
      "from": [
        -0.38,
        1.19,
        -0.2
      ],
      "to": [
        -0.38,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-3",
      "from": [
        -0.26,
        1.19,
        -0.2
      ],
      "to": [
        -0.26,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-4",
      "from": [
        -0.14,
        1.19,
        -0.2
      ],
      "to": [
        -0.14,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-5",
      "from": [
        -0.020000000000000018,
        1.19,
        -0.2
      ],
      "to": [
        -0.020000000000000018,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-6",
      "from": [
        0.09999999999999998,
        1.19,
        -0.2
      ],
      "to": [
        0.09999999999999998,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-7",
      "from": [
        0.21999999999999997,
        1.19,
        -0.2
      ],
      "to": [
        0.21999999999999997,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-8",
      "from": [
        0.33999999999999997,
        1.19,
        -0.2
      ],
      "to": [
        0.33999999999999997,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-9",
      "from": [
        0.4600000000000001,
        1.19,
        -0.2
      ],
      "to": [
        0.4600000000000001,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "curved-fossil-rib-10",
      "from": [
        0.58,
        1.19,
        -0.2
      ],
      "to": [
        0.58,
        1.43,
        0.22
      ],
      "r": 0.027,
      "c": 15262938
    },
    {
      "t": "rod",
      "n": "long-fossil-spine",
      "from": [
        -0.71,
        1.24,
        -0.17
      ],
      "to": [
        0.71,
        1.24,
        -0.17
      ],
      "r": 0.045,
      "c": 12429704
    },
    {
      "t": "sphere",
      "n": "vertebra-0",
      "p": [
        -0.55,
        1.27,
        -0.16
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 12824210
    },
    {
      "t": "sphere",
      "n": "vertebra-1",
      "p": [
        -0.28,
        1.27,
        -0.16
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 12824210
    },
    {
      "t": "sphere",
      "n": "vertebra-2",
      "p": [
        -0.010000000000000009,
        1.27,
        -0.16
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 12824210
    },
    {
      "t": "sphere",
      "n": "vertebra-3",
      "p": [
        0.26,
        1.27,
        -0.16
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 12824210
    },
    {
      "t": "sphere",
      "n": "vertebra-4",
      "p": [
        0.53,
        1.27,
        -0.16
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 12824210
    },
    {
      "t": "box",
      "n": "display-label",
      "p": [
        0,
        0.76,
        0.45
      ],
      "s": [
        0.77,
        0.26,
        0.018
      ],
      "c": 15262938
    }
  ]
}); }
