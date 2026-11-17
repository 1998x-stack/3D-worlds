import { buildRecipe } from './recipe_engine.js';
/** Acoustic Reading Pod Chair / 隔音阅读舱座椅: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "furniture.acoustic-reading-pod-chair.001",
  "slug": "acoustic-reading-pod-chair",
  "title": "Acoustic Reading Pod Chair",
  "title_zh": "隔音阅读舱座椅",
  "summary": "High-sided private reading chair with upholstered alcove, cushion and integrated reading light",
  "category": "furniture",
  "tags": [
    "reading",
    "chair",
    "privacy"
  ],
  "dimensions_m": [
    1.25,
    1.72,
    1.03
  ],
  "generator": "createAcousticReadingPodChair",
  "source_path": "src/models/acoustic_reading_pod_chair.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/acoustic-reading-pod-chair.webp"
};
export function createAcousticReadingPodChair() { return buildRecipe({
  "title": "Acoustic Reading Pod Chair",
  "dimensions": [
    1.25,
    1.72,
    1.03
  ],
  "parts": [
    {
      "t": "box",
      "n": "seat-plinth",
      "p": [
        0,
        0.25,
        0
      ],
      "s": [
        1.11,
        0.42,
        0.9
      ],
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "seat-cushion",
      "p": [
        0,
        0.55,
        0.11
      ],
      "s": [
        0.94,
        0.16,
        0.75
      ],
      "c": 11642285
    },
    {
      "t": "box",
      "n": "high-back",
      "p": [
        0,
        1.08,
        -0.34
      ],
      "s": [
        1.1,
        1.18,
        0.24
      ],
      "c": 7043985
    },
    {
      "t": "box",
      "n": "acoustic-wing-0",
      "p": [
        -0.52,
        1.08,
        -0.04
      ],
      "s": [
        0.22,
        1.2,
        0.78
      ],
      "c": 6387077
    },
    {
      "t": "box",
      "n": "acoustic-wing-1",
      "p": [
        0.52,
        1.08,
        -0.04
      ],
      "s": [
        0.22,
        1.2,
        0.78
      ],
      "c": 6387077
    },
    {
      "t": "box",
      "n": "canopy",
      "p": [
        0,
        1.68,
        -0.15
      ],
      "s": [
        1.23,
        0.09,
        0.95
      ],
      "c": 6979216
    },
    {
      "t": "sphere",
      "n": "lumbar-pillow",
      "p": [
        0,
        0.76,
        -0.2
      ],
      "s": [
        0.48,
        0.27,
        0.18
      ],
      "c": 13613487
    },
    {
      "t": "rod",
      "n": "reading-lamp-arm",
      "from": [
        0.43,
        1.43,
        -0.17
      ],
      "to": [
        0.27,
        1.34,
        0.06
      ],
      "r": 0.019,
      "c": 9741736
    },
    {
      "t": "sphere",
      "n": "reading-lamp-head",
      "p": [
        0.27,
        1.34,
        0.06
      ],
      "s": [
        0.09,
        0.06,
        0.09
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "stability-foot-0-0",
      "p": [
        -0.42,
        0.05,
        -0.32
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "stability-foot-0-1",
      "p": [
        -0.42,
        0.05,
        0.32
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "stability-foot-1-0",
      "p": [
        0.42,
        0.05,
        -0.32
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "stability-foot-1-1",
      "p": [
        0.42,
        0.05,
        0.32
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "side-pocket",
      "p": [
        0.62,
        0.81,
        0.18
      ],
      "s": [
        0.034,
        0.31,
        0.23
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "shelf-edge",
      "p": [
        0.45,
        0.6,
        0.22
      ],
      "s": [
        0.08,
        0.055,
        0.32
      ],
      "c": 9924685
    }
  ]
}); }
