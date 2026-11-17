import { buildRecipe } from './recipe_engine.js';
/** Commercial Dough Mixer: original authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.commercial-dough-mixer.001",
  "slug": "commercial-dough-mixer",
  "title": "Commercial Dough Mixer",
  "title_zh": "商用立式和面搅拌机",
  "summary": "Commercial planetary dough mixer with raised bowl, mixing hooks, emergency stop and motor head",
  "category": "kitchen",
  "tags": [
    "dough",
    "mixer",
    "bakery"
  ],
  "dimensions_m": [
    0.74,
    1.25,
    0.71
  ],
  "generator": "createCommercialDoughMixer",
  "source_path": "src/models/commercial_dough_mixer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/commercial-dough-mixer.webp"
};
export function createCommercialDoughMixer() { return buildRecipe({
  "title": "Commercial Dough Mixer",
  "dimensions": [
    0.74,
    1.25,
    0.71
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-cabinet",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        1,
        0.76,
        0.72
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "food-service-counter",
      "p": [
        0,
        0.83,
        0
      ],
      "s": [
        1.07,
        0.12,
        0.79
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "bowl",
      "p": [
        0,
        0.77,
        0.16
      ],
      "s": [
        0.57,
        0.54,
        0.52
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "top-motor-head",
      "p": [
        0,
        1.18,
        -0.15
      ],
      "s": [
        0.63,
        0.3,
        0.48
      ],
      "c": 15262938
    },
    {
      "t": "cylinder",
      "n": "motor-gear",
      "p": [
        0,
        1,
        -0.13
      ],
      "s": [
        0.22,
        0.17,
        0.22
      ],
      "c": 3752778
    },
    {
      "t": "rod",
      "n": "mixing-spindle",
      "from": [
        0,
        1,
        0.1
      ],
      "to": [
        0,
        0.69,
        0.1
      ],
      "r": 0.032,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-0",
      "from": [
        0.11,
        0.74,
        0.13
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-1",
      "from": [
        0.05943325364549538,
        0.74,
        0.22256180832886863
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-2",
      "from": [
        -0.045776152020185666,
        0.74,
        0.230022716950825
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-3",
      "from": [
        -0.10889917462604899,
        0.74,
        0.1455232008865854
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-4",
      "from": [
        -0.07190079829499732,
        0.74,
        0.0467517255161279
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-5",
      "from": [
        0.031202840400954886,
        0.74,
        0.024518329787054774
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "kneading-wire-6",
      "from": [
        0.10561873153154026,
        0.74,
        0.09926429519811816
      ],
      "to": [
        0,
        0.58,
        0.1
      ],
      "r": 0.016,
      "c": 10069413
    },
    {
      "t": "box",
      "n": "speed-gear",
      "p": [
        0.34,
        1.13,
        0.05
      ],
      "s": [
        0.1,
        0.17,
        0.13
      ],
      "c": 6461102
    },
    {
      "t": "cylinder",
      "n": "emergency-stop",
      "p": [
        0.35,
        1.22,
        0.19
      ],
      "s": [
        0.09,
        0.045,
        0.09
      ],
      "c": 12348255
    }
  ]
}); }
