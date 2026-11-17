import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Compact Bouldering Training Board / 桌面抱石训练墙模型. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "sports.compact-bouldering-training-board.001",
  "slug": "compact-bouldering-training-board",
  "title": "Compact Bouldering Training Board",
  "title_zh": "桌面抱石训练墙模型",
  "summary": "Non-load-bearing miniature climbing wall with distinct handholds, chalk tub and safety mat",
  "category": "sports",
  "tags": [
    "compact",
    "bouldering",
    "training",
    "board",
    "sports",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.32,
    0.34,
    0.18
  ],
  "generator": "createCompactBoulderingTrainingBoard",
  "source_path": "src/models/compact_bouldering_training_board.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/compact-bouldering-training-board.webp",
  "accent": "#df8468"
};
export function createCompactBoulderingTrainingBoard() { return buildRecipe({
  "title": "Compact Bouldering Training Board",
  "dimensions": [
    0.32,
    0.34,
    0.18
  ],
  "parts": [
    {
      "t": "box",
      "n": "wall-base",
      "p": [
        0,
        1.25,
        -0.3
      ],
      "s": [
        1.9,
        2.5,
        0.2
      ],
      "c": 4084325,
      "rot": [
        0.14,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "climbing-hold-0-0",
      "p": [
        -0.69,
        0.35,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-0-0",
      "p": [
        -0.69,
        0.35,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-0-1",
      "p": [
        -0.69,
        0.95,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-0-1",
      "p": [
        -0.69,
        0.95,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-0-2",
      "p": [
        -0.69,
        1.5499999999999998,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-0-2",
      "p": [
        -0.69,
        1.5499999999999998,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-0-3",
      "p": [
        -0.69,
        2.15,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-0-3",
      "p": [
        -0.69,
        2.15,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-1-0",
      "p": [
        -0.24999999999999994,
        0.35,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-1-0",
      "p": [
        -0.24999999999999994,
        0.35,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-1-1",
      "p": [
        -0.24999999999999994,
        0.95,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-1-1",
      "p": [
        -0.24999999999999994,
        0.95,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-1-2",
      "p": [
        -0.24999999999999994,
        1.5499999999999998,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-1-2",
      "p": [
        -0.24999999999999994,
        1.5499999999999998,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-1-3",
      "p": [
        -0.24999999999999994,
        2.15,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-1-3",
      "p": [
        -0.24999999999999994,
        2.15,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-2-0",
      "p": [
        0.19000000000000006,
        0.35,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-2-0",
      "p": [
        0.19000000000000006,
        0.35,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-2-1",
      "p": [
        0.19000000000000006,
        0.95,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-2-1",
      "p": [
        0.19000000000000006,
        0.95,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-2-2",
      "p": [
        0.19000000000000006,
        1.5499999999999998,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-2-2",
      "p": [
        0.19000000000000006,
        1.5499999999999998,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-2-3",
      "p": [
        0.19000000000000006,
        2.15,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-2-3",
      "p": [
        0.19000000000000006,
        2.15,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-3-0",
      "p": [
        0.6300000000000001,
        0.35,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-3-0",
      "p": [
        0.6300000000000001,
        0.35,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-3-1",
      "p": [
        0.6300000000000001,
        0.95,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-3-1",
      "p": [
        0.6300000000000001,
        0.95,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-3-2",
      "p": [
        0.6300000000000001,
        1.5499999999999998,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-3-2",
      "p": [
        0.6300000000000001,
        1.5499999999999998,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "climbing-hold-3-3",
      "p": [
        0.6300000000000001,
        2.15,
        -0.06
      ],
      "s": [
        0.24,
        0.16,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "hold-bolt-3-3",
      "p": [
        0.6300000000000001,
        2.15,
        0.07
      ],
      "s": [
        0.06,
        0.04,
        0.06
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "safety-mat",
      "p": [
        0,
        0.08,
        0.62
      ],
      "s": [
        2.22,
        0.16,
        1.1
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "chalk-pot",
      "p": [
        0.85,
        0.3,
        0.6
      ],
      "s": [
        0.32,
        0.42,
        0.31
      ],
      "c": 15853002
    }
  ]
}); }
