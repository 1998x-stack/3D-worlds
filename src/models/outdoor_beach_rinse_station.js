import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Outdoor Beach Rinse Station / 海滨冲沙淋浴站. */
export const assetMeta = {
  "id": "bathroom.outdoor-beach-rinse-station.001",
  "slug": "outdoor-beach-rinse-station",
  "title": "Outdoor Beach Rinse Station",
  "title_zh": "海滨冲沙淋浴站",
  "summary": "Coastal public rinse station with elevated nozzles, foot taps and grated drain",
  "category": "bathroom",
  "tags": [
    "outdoor",
    "beach",
    "rinse",
    "station",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.55,
    2.6,
    1.25
  ],
  "generator": "createOutdoorBeachRinseStation",
  "source_path": "src/models/outdoor_beach_rinse_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/outdoor-beach-rinse-station.webp",
  "accent": "#e5ebeb"
};
export function createOutdoorBeachRinseStation() { return buildRecipe({
  "title": "Outdoor Beach Rinse Station",
  "dimensions": [
    1.55,
    2.6,
    1.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "beach-sand-rinse-platform",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.27,
        0.18,
        0.92
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "waterproof-drainage-mat",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        1.06,
        0.035,
        0.77
      ],
      "c": 3954279
    },
    {
      "t": "rod",
      "n": "marine-shower-mast",
      "from": [
        0,
        0.22,
        -0.27
      ],
      "to": [
        0,
        2.43,
        -0.27
      ],
      "r": 0.055,
      "c": 7178391
    },
    {
      "t": "rod",
      "n": "coastal-shower-spout--1",
      "from": [
        0,
        2.31,
        -0.27
      ],
      "to": [
        -0.51,
        2.31,
        -0.13
      ],
      "r": 0.029,
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "shower-rose--1",
      "p": [
        -0.51,
        2.24,
        -0.12
      ],
      "s": [
        0.2,
        0.055,
        0.2
      ],
      "c": 11257549
    },
    {
      "t": "rod",
      "n": "sand-rinse-foot-tap--1",
      "from": [
        0,
        0.45,
        -0.27
      ],
      "to": [
        -0.38,
        0.42,
        0.19
      ],
      "r": 0.028,
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "foot-faucet--1",
      "p": [
        -0.38,
        0.4,
        0.19
      ],
      "s": [
        0.11,
        0.06,
        0.11
      ],
      "c": 3954279
    },
    {
      "t": "rod",
      "n": "coastal-shower-spout-1",
      "from": [
        0,
        2.31,
        -0.27
      ],
      "to": [
        0.51,
        2.31,
        -0.13
      ],
      "r": 0.029,
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "shower-rose-1",
      "p": [
        0.51,
        2.24,
        -0.12
      ],
      "s": [
        0.2,
        0.055,
        0.2
      ],
      "c": 11257549
    },
    {
      "t": "rod",
      "n": "sand-rinse-foot-tap-1",
      "from": [
        0,
        0.45,
        -0.27
      ],
      "to": [
        0.38,
        0.42,
        0.19
      ],
      "r": 0.028,
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "foot-faucet-1",
      "p": [
        0.38,
        0.4,
        0.19
      ],
      "s": [
        0.11,
        0.06,
        0.11
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "grate-channel-0",
      "p": [
        -0.46,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-1",
      "p": [
        -0.33,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-2",
      "p": [
        -0.2,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-3",
      "p": [
        -0.07,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-4",
      "p": [
        0.06,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-5",
      "p": [
        0.19,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-6",
      "p": [
        0.32,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "grate-channel-7",
      "p": [
        0.45,
        0.23,
        0.31
      ],
      "s": [
        0.06,
        0.01,
        0.18
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "public-rinse-instruction",
      "p": [
        0,
        1.44,
        -0.21
      ],
      "s": [
        0.4,
        0.23,
        0.03
      ],
      "c": 11257549
    }
  ]
}); }
