import { buildRecipe } from './recipe_engine.js';
/** Mini Golf Putting Green — original authored procedural scene component. */
export const assetMeta = {
  "id": "sports.mini-golf-putting-green.001",
  "slug": "mini-golf-putting-green",
  "title": "Mini Golf Putting Green",
  "title_zh": "迷你高尔夫推杆练习场",
  "summary": "Portable putting green with synthetic turf, two ball holes, flag, golf balls and edge rail",
  "category": "sports",
  "tags": [
    "golf",
    "putting",
    "sport"
  ],
  "dimensions_m": [
    2.43,
    0.37,
    1.54
  ],
  "generator": "createMiniGolfPuttingGreen",
  "source_path": "src/models/mini_golf_putting_green.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/mini-golf-putting-green.webp"
};
export function createMiniGolfPuttingGreen() { return buildRecipe({
  "title": "Mini Golf Putting Green",
  "dimensions": [
    2.43,
    0.37,
    1.54
  ],
  "parts": [
    {
      "t": "box",
      "n": "putting-platform",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        2.42,
        0.16,
        1.52
      ],
      "c": 7244900
    },
    {
      "t": "box",
      "n": "synthetic-turf",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        2.28,
        0.045,
        1.4
      ],
      "c": 6067820
    },
    {
      "t": "box",
      "n": "edge-rail-long-0",
      "p": [
        -1.16,
        0.2,
        0
      ],
      "s": [
        0.075,
        0.18,
        1.5
      ],
      "c": 9859407
    },
    {
      "t": "box",
      "n": "edge-rail-long-1",
      "p": [
        1.16,
        0.2,
        0
      ],
      "s": [
        0.075,
        0.18,
        1.5
      ],
      "c": 9859407
    },
    {
      "t": "box",
      "n": "edge-rail-short-0",
      "p": [
        0,
        0.2,
        -0.69
      ],
      "s": [
        2.31,
        0.17,
        0.07
      ],
      "c": 9859407
    },
    {
      "t": "box",
      "n": "edge-rail-short-1",
      "p": [
        0,
        0.2,
        0.69
      ],
      "s": [
        2.31,
        0.17,
        0.07
      ],
      "c": 9859407
    },
    {
      "t": "cylinder",
      "n": "putting-cup-0",
      "p": [
        -0.7,
        0.208,
        0.13
      ],
      "s": [
        0.19,
        0.02,
        0.19
      ],
      "c": 3621708
    },
    {
      "t": "cylinder",
      "n": "putting-cup-1",
      "p": [
        0.63,
        0.208,
        0.13
      ],
      "s": [
        0.19,
        0.02,
        0.19
      ],
      "c": 3621708
    },
    {
      "t": "rod",
      "n": "flag-pole",
      "from": [
        0.63,
        0.19,
        0.13
      ],
      "to": [
        0.63,
        0.62,
        0.13
      ],
      "r": 0.016,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "flag-cloth",
      "p": [
        0.73,
        0.55,
        0.13
      ],
      "s": [
        0.22,
        0.14,
        0.018
      ],
      "c": 14264170
    },
    {
      "t": "sphere",
      "n": "golf-ball-0",
      "p": [
        -0.75,
        0.245,
        -0.31
      ],
      "s": [
        0.066,
        0.066,
        0.066
      ],
      "c": 14870239
    },
    {
      "t": "sphere",
      "n": "golf-ball-1",
      "p": [
        -0.5,
        0.245,
        -0.31
      ],
      "s": [
        0.066,
        0.066,
        0.066
      ],
      "c": 14870239
    },
    {
      "t": "sphere",
      "n": "golf-ball-2",
      "p": [
        -0.25,
        0.245,
        -0.31
      ],
      "s": [
        0.066,
        0.066,
        0.066
      ],
      "c": 14870239
    },
    {
      "t": "sphere",
      "n": "golf-ball-3",
      "p": [
        0,
        0.245,
        -0.31
      ],
      "s": [
        0.066,
        0.066,
        0.066
      ],
      "c": 14870239
    },
    {
      "t": "sphere",
      "n": "golf-ball-4",
      "p": [
        0.25,
        0.245,
        -0.31
      ],
      "s": [
        0.066,
        0.066,
        0.066
      ],
      "c": 14870239
    },
    {
      "t": "rod",
      "n": "putter-shaft",
      "from": [
        -0.83,
        0.2,
        -0.35
      ],
      "to": [
        -1.05,
        0.63,
        -0.35
      ],
      "r": 0.016,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "putter-head",
      "p": [
        -0.82,
        0.23,
        -0.35
      ],
      "s": [
        0.22,
        0.052,
        0.06
      ],
      "c": 3621708
    },
    {
      "t": "box",
      "n": "course-number",
      "p": [
        0,
        0.18,
        -0.69
      ],
      "s": [
        0.22,
        0.022,
        0.011
      ],
      "c": 14870239
    },
    {
      "t": "box",
      "n": "fairway-marker-0",
      "p": [
        -0.9,
        0.207,
        0.56
      ],
      "s": [
        0.09,
        0.018,
        0.02
      ],
      "c": 13490853
    },
    {
      "t": "box",
      "n": "fairway-marker-1",
      "p": [
        -0.55,
        0.207,
        0.56
      ],
      "s": [
        0.09,
        0.018,
        0.02
      ],
      "c": 13490853
    },
    {
      "t": "box",
      "n": "fairway-marker-2",
      "p": [
        -0.20000000000000007,
        0.207,
        0.56
      ],
      "s": [
        0.09,
        0.018,
        0.02
      ],
      "c": 13490853
    },
    {
      "t": "box",
      "n": "fairway-marker-3",
      "p": [
        0.1499999999999998,
        0.207,
        0.56
      ],
      "s": [
        0.09,
        0.018,
        0.02
      ],
      "c": 13490853
    },
    {
      "t": "box",
      "n": "fairway-marker-4",
      "p": [
        0.4999999999999999,
        0.207,
        0.56
      ],
      "s": [
        0.09,
        0.018,
        0.02
      ],
      "c": 13490853
    },
    {
      "t": "box",
      "n": "fairway-marker-5",
      "p": [
        0.85,
        0.207,
        0.56
      ],
      "s": [
        0.09,
        0.018,
        0.02
      ],
      "c": 13490853
    }
  ]
}); }
