import { buildRecipe } from './recipe_engine.js';
/** Cycling Timing Start Gate / 自行车计时起跑门: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "sports.cycling-timing-start-gate.001",
  "slug": "cycling-timing-start-gate",
  "title": "Cycling Timing Start Gate",
  "title_zh": "自行车计时起跑门",
  "summary": "Competition starting gate with timing sensors, display and sponsor-neutral banners",
  "category": "sports",
  "tags": [
    "cycling",
    "timing",
    "start",
    "gate",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.32,
    2.85,
    1.25
  ],
  "generator": "createCyclingTimingStartGate",
  "source_path": "src/models/cycling_timing_start_gate.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/cycling-timing-start-gate.webp",
  "accent": "#3d586c"
};
export function createCyclingTimingStartGate() { return buildRecipe({
  "title": "Cycling Timing Start Gate",
  "dimensions": [
    3.32,
    2.85,
    1.25
  ],
  "parts": [
    {
      "t": "rod",
      "n": "cycling-gate-column--1",
      "from": [
        -1.49,
        0.05,
        0
      ],
      "to": [
        -1.49,
        2.53,
        0
      ],
      "r": 0.08,
      "c": 15707752
    },
    {
      "t": "box",
      "n": "gate-finish-sensor--1",
      "p": [
        -1.45,
        1.1,
        0.14
      ],
      "s": [
        0.13,
        0.22,
        0.16
      ],
      "c": 4020332
    },
    {
      "t": "rod",
      "n": "cycling-gate-column-1",
      "from": [
        1.49,
        0.05,
        0
      ],
      "to": [
        1.49,
        2.53,
        0
      ],
      "r": 0.08,
      "c": 15707752
    },
    {
      "t": "box",
      "n": "gate-finish-sensor-1",
      "p": [
        1.45,
        1.1,
        0.14
      ],
      "s": [
        0.13,
        0.22,
        0.16
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "timing-crossbeam",
      "p": [
        0,
        2.58,
        0
      ],
      "s": [
        3.13,
        0.17,
        0.23
      ],
      "c": 6465714
    },
    {
      "t": "box",
      "n": "digital-timer",
      "p": [
        0,
        2.35,
        0.16
      ],
      "s": [
        0.92,
        0.28,
        0.04
      ],
      "c": 15461872
    },
    {
      "t": "box",
      "n": "timer-digit-0",
      "p": [
        -0.34,
        2.35,
        0.192
      ],
      "s": [
        0.05,
        0.17,
        0.009
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "timer-digit-1",
      "p": [
        -0.20500000000000002,
        2.35,
        0.192
      ],
      "s": [
        0.05,
        0.17,
        0.009
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "timer-digit-2",
      "p": [
        -0.07,
        2.35,
        0.192
      ],
      "s": [
        0.05,
        0.17,
        0.009
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "timer-digit-3",
      "p": [
        0.065,
        2.35,
        0.192
      ],
      "s": [
        0.05,
        0.17,
        0.009
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "timer-digit-4",
      "p": [
        0.2,
        2.35,
        0.192
      ],
      "s": [
        0.05,
        0.17,
        0.009
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "timer-digit-5",
      "p": [
        0.335,
        2.35,
        0.192
      ],
      "s": [
        0.05,
        0.17,
        0.009
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "floor-track-marking-0",
      "p": [
        -0.9,
        0.02,
        0.35
      ],
      "s": [
        0.06,
        0.024,
        1.02
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "floor-track-marking-1",
      "p": [
        -0.30000000000000004,
        0.02,
        0.35
      ],
      "s": [
        0.06,
        0.024,
        1.02
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "floor-track-marking-2",
      "p": [
        0.29999999999999993,
        0.02,
        0.35
      ],
      "s": [
        0.06,
        0.024,
        1.02
      ],
      "c": 4020332
    },
    {
      "t": "box",
      "n": "floor-track-marking-3",
      "p": [
        0.8999999999999998,
        0.02,
        0.35
      ],
      "s": [
        0.06,
        0.024,
        1.02
      ],
      "c": 4020332
    }
  ]
}); }
