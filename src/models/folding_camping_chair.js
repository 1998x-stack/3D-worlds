import { buildRecipe } from './recipe_engine.js';

/** Original authored Folding Camping Chair / 折叠露营椅; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "furniture.folding-camping-chair.001",
  "slug": "folding-camping-chair",
  "title": "Folding Camping Chair",
  "title_zh": "折叠露营椅",
  "summary": "Portable X-frame chair with contrasting fabric seat and arm slings.",
  "category": "furniture",
  "tags": [
    "camping",
    "chair",
    "folding",
    "outdoor"
  ],
  "dimensions_m": [
    0.74,
    0.99,
    0.73
  ],
  "generator": "createFoldingCampingChair",
  "source_path": "src/models/folding_camping_chair.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/folding-camping-chair.webp"
};
export function createFoldingCampingChair() {
  return buildRecipe({
  "title": "Folding Camping Chair",
  "dimensions": [
    0.74,
    0.99,
    0.73
  ],
  "parts": [
    {
      "t": "box",
      "n": "fabric-seat",
      "p": [
        0,
        0.49,
        0.05
      ],
      "s": [
        0.6,
        0.048,
        0.57
      ],
      "c": 6459775
    },
    {
      "t": "box",
      "n": "fabric-back",
      "p": [
        0,
        0.74,
        -0.27
      ],
      "s": [
        0.61,
        0.44,
        0.04
      ],
      "c": 5668728
    },
    {
      "t": "rod",
      "n": "diagonal-frame-front-0",
      "from": [
        -0.29,
        0.06,
        0.3
      ],
      "to": [
        -0.29,
        0.83,
        -0.25
      ],
      "r": 0.028,
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "diagonal-frame-rear-0",
      "from": [
        -0.29,
        0.08,
        -0.28
      ],
      "to": [
        -0.29,
        0.54,
        0.3
      ],
      "r": 0.027,
      "c": 3422268
    },
    {
      "t": "box",
      "n": "arm-webbing-0",
      "p": [
        -0.29,
        0.68,
        -0.02
      ],
      "s": [
        0.095,
        0.025,
        0.44
      ],
      "c": 4811873
    },
    {
      "t": "sphere",
      "n": "corner-cap-0",
      "p": [
        -0.29,
        0.49,
        0.29
      ],
      "s": [
        0.051,
        0.048,
        0.05
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "diagonal-frame-front-1",
      "from": [
        0.29,
        0.06,
        0.3
      ],
      "to": [
        0.29,
        0.83,
        -0.25
      ],
      "r": 0.028,
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "diagonal-frame-rear-1",
      "from": [
        0.29,
        0.08,
        -0.28
      ],
      "to": [
        0.29,
        0.54,
        0.3
      ],
      "r": 0.027,
      "c": 3422268
    },
    {
      "t": "box",
      "n": "arm-webbing-1",
      "p": [
        0.29,
        0.68,
        -0.02
      ],
      "s": [
        0.095,
        0.025,
        0.44
      ],
      "c": 4811873
    },
    {
      "t": "sphere",
      "n": "corner-cap-1",
      "p": [
        0.29,
        0.49,
        0.29
      ],
      "s": [
        0.051,
        0.048,
        0.05
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "cross-brace",
      "from": [
        -0.27,
        0.43,
        0
      ],
      "to": [
        0.27,
        0.43,
        0
      ],
      "r": 0.022,
      "c": 9213593
    },
    {
      "t": "box",
      "n": "cupholder",
      "p": [
        0.31,
        0.63,
        0.16
      ],
      "s": [
        0.08,
        0.05,
        0.09
      ],
      "c": 5400440
    }
  ]
});
}
