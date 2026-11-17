import { buildRecipe } from './recipe_engine.js';
/** Badminton Court Net Set: original source-editable mesh scene. */
export const assetMeta = {
  "id": "sports.badminton-court-net-set.001",
  "slug": "badminton-court-net-set",
  "title": "Badminton Court Net Set",
  "title_zh": "羽毛球场球网组合",
  "summary": "Badminton net set with posts, tension ropes, shuttlecocks and court markings",
  "category": "sports",
  "tags": [
    "badminton",
    "net",
    "court"
  ],
  "dimensions_m": [
    3.62,
    1.6,
    0.83
  ],
  "generator": "createBadmintonCourtNetSet",
  "source_path": "src/models/badminton_court_net_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/badminton-court-net-set.webp"
};
export function createBadmintonCourtNetSet() { return buildRecipe({
  "title": "Badminton Court Net Set",
  "dimensions": [
    3.62,
    1.6,
    0.83
  ],
  "parts": [
    {
      "t": "box",
      "n": "court-marking-surface",
      "p": [
        0,
        0.04,
        0
      ],
      "s": [
        3.57,
        0.08,
        0.8
      ],
      "c": 7050619
    },
    {
      "t": "rod",
      "n": "net-post--1.71",
      "from": [
        -1.71,
        0.08,
        0
      ],
      "to": [
        -1.71,
        1.55,
        0
      ],
      "r": 0.035,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "post-foot--1.71",
      "p": [
        -1.71,
        0.07,
        0
      ],
      "s": [
        0.17,
        0.14,
        0.52
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "net-post-1.71",
      "from": [
        1.71,
        0.08,
        0
      ],
      "to": [
        1.71,
        1.55,
        0
      ],
      "r": 0.035,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "post-foot-1.71",
      "p": [
        1.71,
        0.07,
        0
      ],
      "s": [
        0.17,
        0.14,
        0.52
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "net-mesh-plane",
      "p": [
        0,
        1.01,
        0
      ],
      "s": [
        3.4,
        0.94,
        0.022
      ],
      "c": 12504528
    },
    {
      "t": "rod",
      "n": "net-header",
      "from": [
        -1.7,
        1.51,
        0
      ],
      "to": [
        1.7,
        1.51,
        0
      ],
      "r": 0.018,
      "c": 15197661
    },
    {
      "t": "box",
      "n": "vertical-net-string-0",
      "p": [
        -1.59,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-1",
      "p": [
        -1.35,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-2",
      "p": [
        -1.11,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-3",
      "p": [
        -0.8700000000000001,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-4",
      "p": [
        -0.6300000000000001,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-5",
      "p": [
        -0.3900000000000001,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-6",
      "p": [
        -0.15000000000000013,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-7",
      "p": [
        0.08999999999999986,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-8",
      "p": [
        0.32999999999999985,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-9",
      "p": [
        0.5700000000000001,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-10",
      "p": [
        0.8099999999999998,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-11",
      "p": [
        1.0499999999999996,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-12",
      "p": [
        1.2899999999999998,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-net-string-13",
      "p": [
        1.53,
        1.01,
        0.027
      ],
      "s": [
        0.01,
        0.89,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-0",
      "p": [
        0,
        0.62,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-1",
      "p": [
        0,
        0.75,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-2",
      "p": [
        0,
        0.88,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-3",
      "p": [
        0,
        1.01,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-4",
      "p": [
        0,
        1.1400000000000001,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-5",
      "p": [
        0,
        1.27,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "horizontal-net-string-6",
      "p": [
        0,
        1.4,
        0.027
      ],
      "s": [
        3.37,
        0.01,
        0.01
      ],
      "c": 3753293
    },
    {
      "t": "cone",
      "n": "shuttlecock-0",
      "p": [
        -0.85,
        0.22,
        0.26
      ],
      "s": [
        0.11,
        0.17,
        0.11
      ],
      "c": 15197661
    },
    {
      "t": "cone",
      "n": "shuttlecock-1",
      "p": [
        -0.08999999999999997,
        0.22,
        0.26
      ],
      "s": [
        0.11,
        0.17,
        0.11
      ],
      "c": 15197661
    },
    {
      "t": "cone",
      "n": "shuttlecock-2",
      "p": [
        0.67,
        0.22,
        0.26
      ],
      "s": [
        0.11,
        0.17,
        0.11
      ],
      "c": 15197661
    }
  ]
}); }
