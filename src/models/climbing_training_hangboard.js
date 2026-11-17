import { buildRecipe } from './recipe_engine.js';
/** Climbing Training Hangboard / 攀岩训练悬挂板: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "sports.climbing-training-hangboard.001",
  "slug": "climbing-training-hangboard",
  "title": "Climbing Training Hangboard",
  "title_zh": "攀岩训练悬挂板",
  "summary": "Indoor climbing grip board with multiple hold sizes, bolts and mounting frame",
  "category": "sports",
  "tags": [
    "climbing",
    "training",
    "hangboard",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.7,
    1.42,
    0.52
  ],
  "generator": "createClimbingTrainingHangboard",
  "source_path": "src/models/climbing_training_hangboard.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/climbing-training-hangboard.webp",
  "accent": "#efae68"
};
export function createClimbingTrainingHangboard() { return buildRecipe({
  "title": "Climbing Training Hangboard",
  "dimensions": [
    1.7,
    1.42,
    0.52
  ],
  "parts": [
    {
      "t": "box",
      "n": "plywood-backboard",
      "p": [
        0,
        0.91,
        -0.12
      ],
      "s": [
        1.51,
        1.14,
        0.13
      ],
      "c": 6465714
    },
    {
      "t": "box",
      "n": "finger-pocket-0",
      "p": [
        -0.52,
        0.62,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-1",
      "p": [
        -0.26,
        0.62,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-2",
      "p": [
        0,
        0.62,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-3",
      "p": [
        0.26,
        0.62,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-4",
      "p": [
        0.52,
        0.62,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-5",
      "p": [
        -0.52,
        1.08,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-6",
      "p": [
        -0.26,
        1.08,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-7",
      "p": [
        0,
        1.08,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-8",
      "p": [
        0.26,
        1.08,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "finger-pocket-9",
      "p": [
        0.52,
        1.08,
        0.008
      ],
      "s": [
        0.17,
        0.08,
        0.045
      ],
      "c": 4020332
    },
    {
      "t": "sphere",
      "n": "climbing-hold-0",
      "p": [
        -0.52,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15707752
    },
    {
      "t": "sphere",
      "n": "climbing-hold-1",
      "p": [
        -0.375,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15461872
    },
    {
      "t": "sphere",
      "n": "climbing-hold-2",
      "p": [
        -0.23000000000000004,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15707752
    },
    {
      "t": "sphere",
      "n": "climbing-hold-3",
      "p": [
        -0.08500000000000008,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15461872
    },
    {
      "t": "sphere",
      "n": "climbing-hold-4",
      "p": [
        0.05999999999999994,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15707752
    },
    {
      "t": "sphere",
      "n": "climbing-hold-5",
      "p": [
        0.20499999999999996,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15461872
    },
    {
      "t": "sphere",
      "n": "climbing-hold-6",
      "p": [
        0.34999999999999987,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15707752
    },
    {
      "t": "sphere",
      "n": "climbing-hold-7",
      "p": [
        0.4949999999999999,
        1.28,
        0.01
      ],
      "s": [
        0.085,
        0.06,
        0.055
      ],
      "c": 15461872
    },
    {
      "t": "rod",
      "n": "mounting-bolt-column--1",
      "from": [
        -0.68,
        0.35,
        -0.2
      ],
      "to": [
        -0.68,
        1.49,
        -0.2
      ],
      "r": 0.02,
      "c": 4020332
    },
    {
      "t": "rod",
      "n": "mounting-bolt-column-1",
      "from": [
        0.68,
        0.35,
        -0.2
      ],
      "to": [
        0.68,
        1.49,
        -0.2
      ],
      "r": 0.02,
      "c": 4020332
    }
  ]
}); }
