import { buildRecipe } from './recipe_engine.js';
/** Alpine Waterfall Cliff — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "nature.alpine-waterfall-cliff.001",
  "slug": "alpine-waterfall-cliff",
  "title": "Alpine Waterfall Cliff",
  "title_zh": "高山瀑布岩壁",
  "summary": "Rock wall with sloped terraces, suspended vertical waterfall ribbons and pool",
  "category": "nature",
  "tags": [
    "waterfall",
    "mountain",
    "water"
  ],
  "dimensions_m": [
    2.48,
    2.17,
    1.47
  ],
  "generator": "createAlpineWaterfallCliff",
  "source_path": "src/models/alpine_waterfall_cliff.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/alpine-waterfall-cliff.webp"
};
export function createAlpineWaterfallCliff() { return buildRecipe({
  "title": "Alpine Waterfall Cliff",
  "dimensions": [
    2.48,
    2.17,
    1.47
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "rear-rock-mass",
      "p": [
        0,
        1.12,
        -0.3
      ],
      "s": [
        2.28,
        1.98,
        0.93
      ],
      "c": 7830645
    },
    {
      "t": "sphere",
      "n": "rock-shelf-left",
      "p": [
        -0.82,
        0.67,
        0
      ],
      "s": [
        0.83,
        0.91,
        1.02
      ],
      "c": 9342077
    },
    {
      "t": "sphere",
      "n": "rock-shelf-right",
      "p": [
        0.74,
        0.95,
        0
      ],
      "s": [
        0.78,
        1.3,
        1.04
      ],
      "c": 8160383
    },
    {
      "t": "box",
      "n": "waterfall-top",
      "p": [
        0,
        1.77,
        0.21
      ],
      "s": [
        0.67,
        0.09,
        0.35
      ],
      "c": 5605787
    },
    {
      "t": "box",
      "n": "vertical-water-stream-0",
      "p": [
        -0.25,
        1.05,
        0.27
      ],
      "s": [
        0.07,
        1.48,
        0.065
      ],
      "c": 12114654
    },
    {
      "t": "box",
      "n": "vertical-water-stream-1",
      "p": [
        -0.15,
        1.05,
        0.27
      ],
      "s": [
        0.07,
        1.48,
        0.065
      ],
      "c": 9092813
    },
    {
      "t": "box",
      "n": "vertical-water-stream-2",
      "p": [
        -0.04999999999999999,
        1.05,
        0.27
      ],
      "s": [
        0.07,
        1.48,
        0.065
      ],
      "c": 12114654
    },
    {
      "t": "box",
      "n": "vertical-water-stream-3",
      "p": [
        0.050000000000000044,
        1.05,
        0.27
      ],
      "s": [
        0.07,
        1.48,
        0.065
      ],
      "c": 9092813
    },
    {
      "t": "box",
      "n": "vertical-water-stream-4",
      "p": [
        0.15000000000000002,
        1.05,
        0.27
      ],
      "s": [
        0.07,
        1.48,
        0.065
      ],
      "c": 12114654
    },
    {
      "t": "box",
      "n": "vertical-water-stream-5",
      "p": [
        0.25,
        1.05,
        0.27
      ],
      "s": [
        0.07,
        1.48,
        0.065
      ],
      "c": 9092813
    },
    {
      "t": "sphere",
      "n": "pool-water",
      "p": [
        0,
        0.17,
        0.39
      ],
      "s": [
        1.68,
        0.08,
        0.93
      ],
      "c": 7909309
    },
    {
      "t": "sphere",
      "n": "splash-bubble-0",
      "p": [
        -0.54,
        0.3,
        0.48
      ],
      "s": [
        0.1,
        0.07,
        0.1
      ],
      "c": 15132125
    },
    {
      "t": "sphere",
      "n": "splash-bubble-1",
      "p": [
        -0.33000000000000007,
        0.3,
        0.48
      ],
      "s": [
        0.1,
        0.07,
        0.1
      ],
      "c": 15132125
    },
    {
      "t": "sphere",
      "n": "splash-bubble-2",
      "p": [
        -0.12000000000000005,
        0.3,
        0.48
      ],
      "s": [
        0.1,
        0.07,
        0.1
      ],
      "c": 15132125
    },
    {
      "t": "sphere",
      "n": "splash-bubble-3",
      "p": [
        0.08999999999999997,
        0.3,
        0.48
      ],
      "s": [
        0.1,
        0.07,
        0.1
      ],
      "c": 15132125
    },
    {
      "t": "sphere",
      "n": "splash-bubble-4",
      "p": [
        0.29999999999999993,
        0.3,
        0.48
      ],
      "s": [
        0.1,
        0.07,
        0.1
      ],
      "c": 15132125
    },
    {
      "t": "sphere",
      "n": "splash-bubble-5",
      "p": [
        0.51,
        0.3,
        0.48
      ],
      "s": [
        0.1,
        0.07,
        0.1
      ],
      "c": 15132125
    },
    {
      "t": "sphere",
      "n": "mossy-boulder-0",
      "p": [
        -0.8,
        0.26,
        0.42
      ],
      "s": [
        0.4,
        0.31,
        0.32
      ],
      "c": 7440245
    },
    {
      "t": "sphere",
      "n": "mossy-boulder-1",
      "p": [
        0.78,
        0.26,
        0.42
      ],
      "s": [
        0.4,
        0.31,
        0.32
      ],
      "c": 7046001
    }
  ]
}); }
