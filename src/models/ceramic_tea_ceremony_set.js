import { buildRecipe } from './recipe_engine.js';
/** Ceramic Tea Ceremony Set: original authored procedural geometry. */
export const assetMeta = {
  "id": "decor.ceramic-tea-ceremony-set.001",
  "slug": "ceramic-tea-ceremony-set",
  "title": "Ceramic Tea Ceremony Set",
  "title_zh": "陶瓷茶道摆件",
  "summary": "Minimalist tea ritual tray with pot, five cups, bamboo scoop and ornaments",
  "category": "decor",
  "tags": [
    "ceramic",
    "tea",
    "ceremony"
  ],
  "dimensions_m": [
    0.95,
    0.42,
    0.66
  ],
  "generator": "createCeramicTeaCeremonySet",
  "source_path": "src/models/ceramic_tea_ceremony_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/ceramic-tea-ceremony-set.webp"
};
export function createCeramicTeaCeremonySet() { return buildRecipe({
  "title": "Ceramic Tea Ceremony Set",
  "dimensions": [
    0.95,
    0.42,
    0.66
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
      "n": "bamboo-tray",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.92,
        0.11,
        0.63
      ],
      "c": 9924945
    },
    {
      "t": "cylinder",
      "n": "teapot-body",
      "p": [
        -0.19,
        0.23,
        0
      ],
      "s": [
        0.29,
        0.25,
        0.28
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "teapot-lid",
      "p": [
        -0.19,
        0.36,
        0
      ],
      "s": [
        0.18,
        0.045,
        0.18
      ],
      "c": 13149548
    },
    {
      "t": "rod",
      "n": "spout",
      "from": [
        -0.06,
        0.26,
        0
      ],
      "to": [
        0.1,
        0.33,
        0.07
      ],
      "r": 0.026,
      "c": 15262938
    },
    {
      "t": "torus",
      "n": "teapot-handle",
      "p": [
        -0.38,
        0.27,
        0
      ],
      "s": [
        0.39,
        0.39,
        0.39
      ],
      "c": 10069413,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "tea-cup-0",
      "p": [
        0.09,
        0.16,
        -0.21
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "tea-surface-0",
      "p": [
        0.09,
        0.23,
        -0.21
      ],
      "s": [
        0.09,
        0.009,
        0.09
      ],
      "c": 9332302
    },
    {
      "t": "cylinder",
      "n": "tea-cup-1",
      "p": [
        0.26,
        0.16,
        -0.21
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "tea-surface-1",
      "p": [
        0.26,
        0.23,
        -0.21
      ],
      "s": [
        0.09,
        0.009,
        0.09
      ],
      "c": 9332302
    },
    {
      "t": "cylinder",
      "n": "tea-cup-2",
      "p": [
        0.43000000000000005,
        0.16,
        -0.21
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "tea-surface-2",
      "p": [
        0.43000000000000005,
        0.23,
        -0.21
      ],
      "s": [
        0.09,
        0.009,
        0.09
      ],
      "c": 9332302
    },
    {
      "t": "cylinder",
      "n": "tea-cup-3",
      "p": [
        0.09,
        0.16,
        0.15
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "tea-surface-3",
      "p": [
        0.09,
        0.23,
        0.15
      ],
      "s": [
        0.09,
        0.009,
        0.09
      ],
      "c": 9332302
    },
    {
      "t": "cylinder",
      "n": "tea-cup-4",
      "p": [
        0.26,
        0.16,
        0.15
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "tea-surface-4",
      "p": [
        0.26,
        0.23,
        0.15
      ],
      "s": [
        0.09,
        0.009,
        0.09
      ],
      "c": 9332302
    },
    {
      "t": "rod",
      "n": "bamboo-tea-scoop",
      "from": [
        -0.41,
        0.13,
        -0.2
      ],
      "to": [
        -0.04,
        0.13,
        -0.3
      ],
      "r": 0.016,
      "c": 9924945
    }
  ]
}); }
