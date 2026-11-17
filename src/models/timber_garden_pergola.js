import { buildRecipe } from './recipe_engine.js';
/** Timber Garden Pergola — editable original procedural asset. */
export const assetMeta = {
  "id": "architecture.timber-garden-pergola.001",
  "slug": "timber-garden-pergola",
  "title": "Timber Garden Pergola",
  "title_zh": "花园木质廊架",
  "summary": "Open timber garden pergola with posts, rafters and grapevine supports",
  "category": "architecture",
  "tags": [
    "pergola",
    "garden",
    "timber"
  ],
  "dimensions_m": [
    3.14,
    2.52,
    2.67
  ],
  "generator": "createTimberGardenPergola",
  "source_path": "src/models/timber_garden_pergola.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/timber-garden-pergola.webp"
};
export function createTimberGardenPergola() { return buildRecipe({
  "title": "Timber Garden Pergola",
  "dimensions": [
    3.14,
    2.52,
    2.67
  ],
  "parts": [
    {
      "t": "box",
      "n": "heavy-post-0-0",
      "p": [
        -1.4,
        1.19,
        -1.2
      ],
      "s": [
        0.19,
        2.38,
        0.18
      ],
      "c": 9792843
    },
    {
      "t": "box",
      "n": "heavy-post-0-1",
      "p": [
        -1.4,
        1.19,
        1.2
      ],
      "s": [
        0.19,
        2.38,
        0.18
      ],
      "c": 9792843
    },
    {
      "t": "box",
      "n": "heavy-post-1-0",
      "p": [
        1.4,
        1.19,
        -1.2
      ],
      "s": [
        0.19,
        2.38,
        0.18
      ],
      "c": 9792843
    },
    {
      "t": "box",
      "n": "heavy-post-1-1",
      "p": [
        1.4,
        1.19,
        1.2
      ],
      "s": [
        0.19,
        2.38,
        0.18
      ],
      "c": 9792843
    },
    {
      "t": "box",
      "n": "long-span-beam-0",
      "p": [
        0,
        2.4,
        -1.2
      ],
      "s": [
        3.1,
        0.17,
        0.19
      ],
      "c": 8610628
    },
    {
      "t": "box",
      "n": "long-span-beam-1",
      "p": [
        0,
        2.4,
        1.2
      ],
      "s": [
        3.1,
        0.17,
        0.19
      ],
      "c": 8610628
    },
    {
      "t": "box",
      "n": "roof-slat-0",
      "p": [
        -1.31,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-1",
      "p": [
        -0.98,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-2",
      "p": [
        -0.65,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-3",
      "p": [
        -0.32000000000000006,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-4",
      "p": [
        0.010000000000000009,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-5",
      "p": [
        0.3400000000000001,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-6",
      "p": [
        0.6699999999999999,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-7",
      "p": [
        1,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "box",
      "n": "roof-slat-8",
      "p": [
        1.33,
        2.5,
        0
      ],
      "s": [
        0.12,
        0.09,
        2.62
      ],
      "c": 12623222
    },
    {
      "t": "rod",
      "n": "knee-brace-0-0",
      "from": [
        -1.4,
        1.97,
        -1.18
      ],
      "to": [
        -1.0919999999999999,
        2.39,
        -1.18
      ],
      "r": 0.046,
      "c": 7952696
    },
    {
      "t": "rod",
      "n": "knee-brace-0-1",
      "from": [
        -1.4,
        1.97,
        1.18
      ],
      "to": [
        -1.0919999999999999,
        2.39,
        1.18
      ],
      "r": 0.046,
      "c": 7952696
    },
    {
      "t": "rod",
      "n": "knee-brace-1-0",
      "from": [
        1.4,
        1.97,
        -1.18
      ],
      "to": [
        1.0919999999999999,
        2.39,
        -1.18
      ],
      "r": 0.046,
      "c": 7952696
    },
    {
      "t": "rod",
      "n": "knee-brace-1-1",
      "from": [
        1.4,
        1.97,
        1.18
      ],
      "to": [
        1.0919999999999999,
        2.39,
        1.18
      ],
      "r": 0.046,
      "c": 7952696
    },
    {
      "t": "rod",
      "n": "vine-training-0",
      "from": [
        -1.23,
        1.26,
        -1.18
      ],
      "to": [
        -1.23,
        2.39,
        -1.18
      ],
      "r": 0.01,
      "c": 6919019
    },
    {
      "t": "rod",
      "n": "vine-training-1",
      "from": [
        -0.75,
        1.26,
        -1.18
      ],
      "to": [
        -0.75,
        2.39,
        -1.18
      ],
      "r": 0.01,
      "c": 6919019
    },
    {
      "t": "rod",
      "n": "vine-training-2",
      "from": [
        -0.27,
        1.26,
        -1.18
      ],
      "to": [
        -0.27,
        2.39,
        -1.18
      ],
      "r": 0.01,
      "c": 6919019
    },
    {
      "t": "rod",
      "n": "vine-training-3",
      "from": [
        0.20999999999999996,
        1.26,
        -1.18
      ],
      "to": [
        0.20999999999999996,
        2.39,
        -1.18
      ],
      "r": 0.01,
      "c": 6919019
    },
    {
      "t": "rod",
      "n": "vine-training-4",
      "from": [
        0.69,
        1.26,
        -1.18
      ],
      "to": [
        0.69,
        2.39,
        -1.18
      ],
      "r": 0.01,
      "c": 6919019
    },
    {
      "t": "rod",
      "n": "vine-training-5",
      "from": [
        1.17,
        1.26,
        -1.18
      ],
      "to": [
        1.17,
        2.39,
        -1.18
      ],
      "r": 0.01,
      "c": 6919019
    },
    {
      "t": "box",
      "n": "post-foot-0-0",
      "p": [
        -1.4,
        0.09,
        -1.2
      ],
      "s": [
        0.31,
        0.18,
        0.31
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "post-foot-0-1",
      "p": [
        -1.4,
        0.09,
        1.2
      ],
      "s": [
        0.31,
        0.18,
        0.31
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "post-foot-1-0",
      "p": [
        1.4,
        0.09,
        -1.2
      ],
      "s": [
        0.31,
        0.18,
        0.31
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "post-foot-1-1",
      "p": [
        1.4,
        0.09,
        1.2
      ],
      "s": [
        0.31,
        0.18,
        0.31
      ],
      "c": 9544355
    },
    {
      "t": "sphere",
      "n": "vine-leaf-0",
      "p": [
        -1.33,
        2.47,
        -1.13
      ],
      "s": [
        0.19,
        0.08,
        0.18
      ],
      "c": 6919019
    },
    {
      "t": "sphere",
      "n": "vine-leaf-1",
      "p": [
        -0.99,
        2.47,
        -1.13
      ],
      "s": [
        0.19,
        0.08,
        0.18
      ],
      "c": 6919019
    },
    {
      "t": "sphere",
      "n": "vine-leaf-2",
      "p": [
        -0.65,
        2.47,
        -1.13
      ],
      "s": [
        0.19,
        0.08,
        0.18
      ],
      "c": 6919019
    },
    {
      "t": "sphere",
      "n": "vine-leaf-3",
      "p": [
        -0.31000000000000005,
        2.47,
        -1.13
      ],
      "s": [
        0.19,
        0.08,
        0.18
      ],
      "c": 6919019
    }
  ]
}); }
