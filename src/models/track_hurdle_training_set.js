import { buildRecipe } from './recipe_engine.js';
/** Track Hurdle Training Set — original authored procedural scene component. */
export const assetMeta = {
  "id": "sports.track-hurdle-training-set.001",
  "slug": "track-hurdle-training-set",
  "title": "Track Hurdle Training Set",
  "title_zh": "田径跨栏训练组合",
  "summary": "Three adjustable track hurdles with striped crossbars, stabilizer supports and numbered height marks",
  "category": "sports",
  "tags": [
    "hurdles",
    "track",
    "training"
  ],
  "dimensions_m": [
    2.54,
    1.19,
    0.75
  ],
  "generator": "createTrackHurdleTrainingSet",
  "source_path": "src/models/track_hurdle_training_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/track-hurdle-training-set.webp"
};
export function createTrackHurdleTrainingSet() { return buildRecipe({
  "title": "Track Hurdle Training Set",
  "dimensions": [
    2.54,
    1.19,
    0.75
  ],
  "parts": [
    {
      "t": "rod",
      "n": "vertical-rail-0-0",
      "from": [
        -1.07,
        0.12,
        0
      ],
      "to": [
        -1.07,
        1.12,
        0
      ],
      "r": 0.031,
      "c": 9150371
    },
    {
      "t": "rod",
      "n": "vertical-rail-0-1",
      "from": [
        -0.55,
        0.12,
        0
      ],
      "to": [
        -0.55,
        1.12,
        0
      ],
      "r": 0.031,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "crossbar-0",
      "p": [
        -0.81,
        0.99,
        0
      ],
      "s": [
        0.64,
        0.075,
        0.07
      ],
      "c": 14870239
    },
    {
      "t": "box",
      "n": "bar-stripe-0-0",
      "p": [
        -1.03,
        0.99,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-0-1",
      "p": [
        -0.88,
        0.99,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-0-2",
      "p": [
        -0.73,
        0.99,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-0-3",
      "p": [
        -0.5800000000000001,
        0.99,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "stabilizer-foot-0-0",
      "p": [
        -1.07,
        0.075,
        -0.09
      ],
      "s": [
        0.1,
        0.15,
        0.51
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "stabilizer-foot-0-1",
      "p": [
        -0.55,
        0.075,
        -0.09
      ],
      "s": [
        0.1,
        0.15,
        0.51
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "height-indicator-0",
      "p": [
        -0.54,
        0.8,
        0.047
      ],
      "s": [
        0.026,
        0.18,
        0.014
      ],
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "vertical-rail-1-0",
      "from": [
        -0.26,
        0.12,
        0.1
      ],
      "to": [
        -0.26,
        1.12,
        0.1
      ],
      "r": 0.031,
      "c": 9150371
    },
    {
      "t": "rod",
      "n": "vertical-rail-1-1",
      "from": [
        0.26,
        0.12,
        0.1
      ],
      "to": [
        0.26,
        1.12,
        0.1
      ],
      "r": 0.031,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "crossbar-1",
      "p": [
        0,
        0.87,
        0.1
      ],
      "s": [
        0.64,
        0.075,
        0.07
      ],
      "c": 14870239
    },
    {
      "t": "box",
      "n": "bar-stripe-1-0",
      "p": [
        -0.22,
        0.87,
        0.14400000000000002
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-1-1",
      "p": [
        -0.07,
        0.87,
        0.14400000000000002
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-1-2",
      "p": [
        0.07999999999999999,
        0.87,
        0.14400000000000002
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-1-3",
      "p": [
        0.22999999999999995,
        0.87,
        0.14400000000000002
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "stabilizer-foot-1-0",
      "p": [
        -0.26,
        0.075,
        0.010000000000000009
      ],
      "s": [
        0.1,
        0.15,
        0.51
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "stabilizer-foot-1-1",
      "p": [
        0.26,
        0.075,
        0.010000000000000009
      ],
      "s": [
        0.1,
        0.15,
        0.51
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "height-indicator-1",
      "p": [
        0.27,
        0.8,
        0.14700000000000002
      ],
      "s": [
        0.026,
        0.18,
        0.014
      ],
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "vertical-rail-2-0",
      "from": [
        0.55,
        0.12,
        0
      ],
      "to": [
        0.55,
        1.12,
        0
      ],
      "r": 0.031,
      "c": 9150371
    },
    {
      "t": "rod",
      "n": "vertical-rail-2-1",
      "from": [
        1.07,
        0.12,
        0
      ],
      "to": [
        1.07,
        1.12,
        0
      ],
      "r": 0.031,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "crossbar-2",
      "p": [
        0.81,
        0.75,
        0
      ],
      "s": [
        0.64,
        0.075,
        0.07
      ],
      "c": 14870239
    },
    {
      "t": "box",
      "n": "bar-stripe-2-0",
      "p": [
        0.5900000000000001,
        0.75,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-2-1",
      "p": [
        0.7400000000000001,
        0.75,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-2-2",
      "p": [
        0.8900000000000001,
        0.75,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "bar-stripe-2-3",
      "p": [
        1.04,
        0.75,
        0.044
      ],
      "s": [
        0.063,
        0.064,
        0.014
      ],
      "c": 12547432
    },
    {
      "t": "box",
      "n": "stabilizer-foot-2-0",
      "p": [
        0.55,
        0.075,
        -0.09
      ],
      "s": [
        0.1,
        0.15,
        0.51
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "stabilizer-foot-2-1",
      "p": [
        1.07,
        0.075,
        -0.09
      ],
      "s": [
        0.1,
        0.15,
        0.51
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "height-indicator-2",
      "p": [
        1.08,
        0.8,
        0.047
      ],
      "s": [
        0.026,
        0.18,
        0.014
      ],
      "c": 12822380
    },
    {
      "t": "box",
      "n": "lane-start-marker",
      "p": [
        0,
        0.033,
        0.3
      ],
      "s": [
        2.46,
        0.065,
        0.13
      ],
      "c": 14870239
    },
    {
      "t": "box",
      "n": "lane-hash-0",
      "p": [
        -1.08,
        0.016,
        -0.32
      ],
      "s": [
        0.022,
        0.031,
        0.19
      ],
      "c": 9150371
    },
    {
      "t": "box",
      "n": "lane-hash-1",
      "p": [
        -0.54,
        0.016,
        -0.32
      ],
      "s": [
        0.022,
        0.031,
        0.19
      ],
      "c": 9150371
    },
    {
      "t": "box",
      "n": "lane-hash-2",
      "p": [
        0,
        0.016,
        -0.32
      ],
      "s": [
        0.022,
        0.031,
        0.19
      ],
      "c": 9150371
    },
    {
      "t": "box",
      "n": "lane-hash-3",
      "p": [
        0.54,
        0.016,
        -0.32
      ],
      "s": [
        0.022,
        0.031,
        0.19
      ],
      "c": 9150371
    },
    {
      "t": "box",
      "n": "lane-hash-4",
      "p": [
        1.08,
        0.016,
        -0.32
      ],
      "s": [
        0.022,
        0.031,
        0.19
      ],
      "c": 9150371
    }
  ]
}); }
