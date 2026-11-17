import { buildRecipe } from './recipe_engine.js';
/** Decorative Stone Column: individually authored procedural geometry. */
export const assetMeta = {
  "id": "architecture.decorative-stone-column.001",
  "slug": "decorative-stone-column",
  "title": "Decorative Stone Column",
  "title_zh": "模块化石柱",
  "summary": "Stacked decorative stone column with fluted shaft, capital, and chamfered foot.",
  "category": "architecture",
  "tags": [
    "column",
    "stone",
    "building",
    "architecture"
  ],
  "dimensions_m": [
    0.64,
    2.73,
    0.63
  ],
  "generator": "createDecorativeStoneColumn",
  "source_path": "src/models/decorative_stone_column.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/decorative-stone-column.webp"
};
export function createDecorativeStoneColumn() {
 return buildRecipe({
  "title": "Decorative Stone Column",
  "dimensions": [
    0.64,
    2.73,
    0.63
  ],
  "parts": [
    {
      "t": "box",
      "n": "plinth",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        0.64,
        0.26,
        0.63
      ],
      "c": 12236973
    },
    {
      "t": "box",
      "n": "foot-block",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.51,
        0.18,
        0.5
      ],
      "c": 13222833
    },
    {
      "t": "cylinder",
      "n": "main-shaft",
      "p": [
        0,
        1.45,
        0
      ],
      "s": [
        0.42,
        2.06,
        0.42
      ],
      "c": 13025462
    },
    {
      "t": "rod",
      "n": "flute-0",
      "from": [
        0.195,
        0.45,
        0
      ],
      "to": [
        0.195,
        2.46,
        0
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-1",
      "from": [
        0.15775831390311476,
        0.45,
        0.11461812419703227
      ],
      "to": [
        0.15775831390311476,
        2.46,
        0.11461812419703227
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-2",
      "from": [
        0.06025831390311476,
        0.45,
        0.18545602067755496
      ],
      "to": [
        0.06025831390311476,
        2.46,
        0.18545602067755496
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-3",
      "from": [
        -0.06025831390311474,
        0.45,
        0.18545602067755496
      ],
      "to": [
        -0.06025831390311474,
        2.46,
        0.18545602067755496
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-4",
      "from": [
        -0.15775831390311473,
        0.45,
        0.11461812419703228
      ],
      "to": [
        -0.15775831390311473,
        2.46,
        0.11461812419703228
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-5",
      "from": [
        -0.195,
        0.45,
        2.3880612583373387e-17
      ],
      "to": [
        -0.195,
        2.46,
        2.3880612583373387e-17
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-6",
      "from": [
        -0.1577583139031148,
        0.45,
        -0.11461812419703224
      ],
      "to": [
        -0.1577583139031148,
        2.46,
        -0.11461812419703224
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-7",
      "from": [
        -0.06025831390311478,
        0.45,
        -0.18545602067755496
      ],
      "to": [
        -0.06025831390311478,
        2.46,
        -0.18545602067755496
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-8",
      "from": [
        0.06025831390311471,
        0.45,
        -0.18545602067755496
      ],
      "to": [
        0.06025831390311471,
        2.46,
        -0.18545602067755496
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "rod",
      "n": "flute-9",
      "from": [
        0.15775831390311473,
        0.45,
        -0.11461812419703231
      ],
      "to": [
        0.15775831390311473,
        2.46,
        -0.11461812419703231
      ],
      "r": 0.013,
      "c": 10722965
    },
    {
      "t": "cylinder",
      "n": "necking",
      "p": [
        0,
        2.5,
        0
      ],
      "s": [
        0.51,
        0.14,
        0.51
      ],
      "c": 11907235
    },
    {
      "t": "box",
      "n": "capital",
      "p": [
        0,
        2.62,
        0
      ],
      "s": [
        0.6,
        0.19,
        0.59
      ],
      "c": 12959925
    },
    {
      "t": "box",
      "n": "top-abacus",
      "p": [
        0,
        2.71,
        0
      ],
      "s": [
        0.64,
        0.05,
        0.63
      ],
      "c": 14734527
    },
    {
      "t": "sphere",
      "n": "capital-boss-0-0",
      "p": [
        -0.23,
        2.64,
        -0.23
      ],
      "s": [
        0.045,
        0.06,
        0.045
      ],
      "c": 9539206
    },
    {
      "t": "sphere",
      "n": "capital-boss-0-1",
      "p": [
        -0.23,
        2.64,
        0.23
      ],
      "s": [
        0.045,
        0.06,
        0.045
      ],
      "c": 9539206
    },
    {
      "t": "sphere",
      "n": "capital-boss-1-0",
      "p": [
        0.23,
        2.64,
        -0.23
      ],
      "s": [
        0.045,
        0.06,
        0.045
      ],
      "c": 9539206
    },
    {
      "t": "sphere",
      "n": "capital-boss-1-1",
      "p": [
        0.23,
        2.64,
        0.23
      ],
      "s": [
        0.045,
        0.06,
        0.045
      ],
      "c": 9539206
    }
  ]
});
}
