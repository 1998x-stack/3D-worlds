import { buildRecipe } from './recipe_engine.js';
/** Timber Torii Gate: original authored procedural geometry. */
export const assetMeta = {
  "id": "architecture.timber-torii-gate.001",
  "slug": "timber-torii-gate",
  "title": "Timber Torii Gate",
  "title_zh": "传统木质鸟居门架",
  "summary": "Traditional wooden ceremonial gateway with twin uprights, curved top beam and plaques",
  "category": "architecture",
  "tags": [
    "torii",
    "gateway",
    "timber"
  ],
  "dimensions_m": [
    3.08,
    3.1,
    0.75
  ],
  "generator": "createTimberToriiGate",
  "source_path": "src/models/timber_torii_gate.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/timber-torii-gate.webp"
};
export function createTimberToriiGate() { return buildRecipe({
  "title": "Timber Torii Gate",
  "dimensions": [
    3.08,
    3.1,
    0.75
  ],
  "parts": [
    {
      "t": "box",
      "n": "top-arching-beam",
      "p": [
        0,
        2.96,
        0
      ],
      "s": [
        3.02,
        0.15,
        0.45
      ],
      "c": 10768448
    },
    {
      "t": "box",
      "n": "second-horizontal-beam",
      "p": [
        0,
        2.47,
        0
      ],
      "s": [
        2.64,
        0.13,
        0.34
      ],
      "c": 12018766
    },
    {
      "t": "cylinder",
      "n": "timber-upright--1.03",
      "p": [
        -1.03,
        1.43,
        0
      ],
      "s": [
        0.2,
        2.79,
        0.2
      ],
      "c": 10374975
    },
    {
      "t": "box",
      "n": "column-foundation--1.03",
      "p": [
        -1.03,
        0.13,
        0
      ],
      "s": [
        0.34,
        0.25,
        0.36
      ],
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "diagonal-support--1.03",
      "from": [
        -1.03,
        2.51,
        0
      ],
      "to": [
        -0.7828,
        2.92,
        0
      ],
      "r": 0.041,
      "c": 9924945
    },
    {
      "t": "cylinder",
      "n": "timber-upright-1.03",
      "p": [
        1.03,
        1.43,
        0
      ],
      "s": [
        0.2,
        2.79,
        0.2
      ],
      "c": 10374975
    },
    {
      "t": "box",
      "n": "column-foundation-1.03",
      "p": [
        1.03,
        0.13,
        0
      ],
      "s": [
        0.34,
        0.25,
        0.36
      ],
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "diagonal-support-1.03",
      "from": [
        1.03,
        2.51,
        0
      ],
      "to": [
        0.7828,
        2.92,
        0
      ],
      "r": 0.041,
      "c": 9924945
    },
    {
      "t": "box",
      "n": "sacred-central-plaque",
      "p": [
        0,
        2.65,
        0.22
      ],
      "s": [
        0.52,
        0.3,
        0.03
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "beam-carving-0",
      "p": [
        -1.29,
        2.98,
        0.24
      ],
      "s": [
        0.22,
        0.045,
        0.018
      ],
      "c": 13149548
    },
    {
      "t": "box",
      "n": "beam-carving-1",
      "p": [
        -0.78,
        2.98,
        0.24
      ],
      "s": [
        0.22,
        0.045,
        0.018
      ],
      "c": 13149548
    },
    {
      "t": "box",
      "n": "beam-carving-2",
      "p": [
        -0.27,
        2.98,
        0.24
      ],
      "s": [
        0.22,
        0.045,
        0.018
      ],
      "c": 13149548
    },
    {
      "t": "box",
      "n": "beam-carving-3",
      "p": [
        0.24,
        2.98,
        0.24
      ],
      "s": [
        0.22,
        0.045,
        0.018
      ],
      "c": 13149548
    },
    {
      "t": "box",
      "n": "beam-carving-4",
      "p": [
        0.75,
        2.98,
        0.24
      ],
      "s": [
        0.22,
        0.045,
        0.018
      ],
      "c": 13149548
    },
    {
      "t": "box",
      "n": "beam-carving-5",
      "p": [
        1.2599999999999998,
        2.98,
        0.24
      ],
      "s": [
        0.22,
        0.045,
        0.018
      ],
      "c": 13149548
    }
  ]
}); }
