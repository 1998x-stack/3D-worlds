import { buildRecipe } from './recipe_engine.js';
/** Vintage Brass Gramophone — editable original scene geometry. */
export const assetMeta = {
  "id": "decor.vintage-brass-gramophone.001",
  "slug": "vintage-brass-gramophone",
  "title": "Vintage Brass Gramophone",
  "title_zh": "黄铜留声机",
  "summary": "Analog gramophone with brass horn, record, walnut plinth and crank",
  "category": "decor",
  "tags": [
    "gramophone",
    "vinyl",
    "vintage"
  ],
  "dimensions_m": [
    0.64,
    0.89,
    0.65
  ],
  "generator": "createVintageBrassGramophone",
  "source_path": "src/models/vintage_brass_gramophone.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/vintage-brass-gramophone.webp"
};
export function createVintageBrassGramophone() { return buildRecipe({
  "title": "Vintage Brass Gramophone",
  "dimensions": [
    0.64,
    0.89,
    0.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "cabinet",
      "p": [
        0,
        0.21,
        0
      ],
      "s": [
        0.62,
        0.41,
        0.61
      ],
      "c": 9793873
    },
    {
      "t": "box",
      "n": "turntable-top",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        0.63,
        0.07,
        0.63
      ],
      "c": 3556171
    },
    {
      "t": "cylinder",
      "n": "record",
      "p": [
        -0.05,
        0.46,
        0.06
      ],
      "s": [
        0.43,
        0.013,
        0.43
      ],
      "c": 3556171
    },
    {
      "t": "cylinder",
      "n": "label",
      "p": [
        -0.05,
        0.478,
        0.06
      ],
      "s": [
        0.1,
        0.011,
        0.1
      ],
      "c": 12482147
    },
    {
      "t": "rod",
      "n": "sound-tube",
      "from": [
        0.24,
        0.42,
        -0.23
      ],
      "to": [
        0.28,
        0.76,
        -0.18
      ],
      "r": 0.041,
      "c": 12756075
    },
    {
      "t": "rod",
      "n": "horn-neck",
      "from": [
        0.28,
        0.76,
        -0.18
      ],
      "to": [
        0.33,
        0.88,
        -0.03
      ],
      "r": 0.051,
      "c": 12756075
    },
    {
      "t": "cone",
      "n": "horn",
      "p": [
        0.34,
        0.88,
        0.09
      ],
      "s": [
        0.48,
        0.38,
        0.45
      ],
      "c": 12756075,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "horn-aperture",
      "p": [
        0.34,
        0.85,
        0.31
      ],
      "s": [
        0.4,
        0.019,
        0.4
      ],
      "c": 8415045,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "tone-arm",
      "from": [
        -0.29,
        0.52,
        -0.16
      ],
      "to": [
        -0.19,
        0.49,
        0.17
      ],
      "r": 0.016,
      "c": 9544354
    },
    {
      "t": "sphere",
      "n": "needle-head",
      "p": [
        -0.19,
        0.48,
        0.17
      ],
      "s": [
        0.038,
        0.027,
        0.035
      ],
      "c": 9544354
    },
    {
      "t": "rod",
      "n": "hand-crank",
      "from": [
        0.31,
        0.25,
        0.01
      ],
      "to": [
        0.52,
        0.25,
        0.01
      ],
      "r": 0.027,
      "c": 12756075
    },
    {
      "t": "rod",
      "n": "crank-handle",
      "from": [
        0.52,
        0.25,
        0.01
      ],
      "to": [
        0.52,
        0.14,
        0.01
      ],
      "r": 0.02,
      "c": 3556171
    },
    {
      "t": "box",
      "n": "foot-0-0",
      "p": [
        -0.24,
        0.045,
        -0.24
      ],
      "s": [
        0.1,
        0.09,
        0.1
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "foot-0-1",
      "p": [
        -0.24,
        0.045,
        0.24
      ],
      "s": [
        0.1,
        0.09,
        0.1
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "foot-1-0",
      "p": [
        0.24,
        0.045,
        -0.24
      ],
      "s": [
        0.1,
        0.09,
        0.1
      ],
      "c": 3556171
    },
    {
      "t": "box",
      "n": "foot-1-1",
      "p": [
        0.24,
        0.045,
        0.24
      ],
      "s": [
        0.1,
        0.09,
        0.1
      ],
      "c": 3556171
    }
  ]
}); }
