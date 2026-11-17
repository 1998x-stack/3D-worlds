import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Emergency Eyewash Shower Station / 紧急洗眼淋浴站. */
export const assetMeta = {
  "id": "bathroom.emergency-eyewash-shower-station.001",
  "slug": "emergency-eyewash-shower-station",
  "title": "Emergency Eyewash Shower Station",
  "title_zh": "紧急洗眼淋浴站",
  "summary": "Emergency eyewash and safety shower fixture with two nozzles and pull lever",
  "category": "bathroom",
  "tags": [
    "emergency",
    "eyewash",
    "shower",
    "station",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1,
    2.55,
    0.98
  ],
  "generator": "createEmergencyEyewashShowerStation",
  "source_path": "src/models/emergency_eyewash_shower_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/emergency-eyewash-shower-station.webp",
  "accent": "#e7eef0"
};
export function createEmergencyEyewashShowerStation() { return buildRecipe({
  "title": "Emergency Eyewash Shower Station",
  "dimensions": [
    1,
    2.55,
    0.98
  ],
  "parts": [
    {
      "t": "rod",
      "n": "eyewash-emergency-riser",
      "from": [
        0,
        0.02,
        -0.25
      ],
      "to": [
        0,
        2.42,
        -0.25
      ],
      "r": 0.048,
      "c": 8232356
    },
    {
      "t": "sphere",
      "n": "eyewash-washbasin",
      "p": [
        0,
        1.1,
        0.09
      ],
      "s": [
        0.69,
        0.21,
        0.61
      ],
      "c": 15199984
    },
    {
      "t": "rod",
      "n": "eye-feed-pipe--1",
      "from": [
        -0.19,
        1.17,
        0.09
      ],
      "to": [
        -0.19,
        1.35,
        0.09
      ],
      "r": 0.027,
      "c": 8232356
    },
    {
      "t": "sphere",
      "n": "eyewash-nozzle--1",
      "p": [
        -0.19,
        1.38,
        0.09
      ],
      "s": [
        0.084,
        0.05,
        0.075
      ],
      "c": 4877181
    },
    {
      "t": "rod",
      "n": "eye-feed-pipe-1",
      "from": [
        0.19,
        1.17,
        0.09
      ],
      "to": [
        0.19,
        1.35,
        0.09
      ],
      "r": 0.027,
      "c": 8232356
    },
    {
      "t": "sphere",
      "n": "eyewash-nozzle-1",
      "p": [
        0.19,
        1.38,
        0.09
      ],
      "s": [
        0.084,
        0.05,
        0.075
      ],
      "c": 4877181
    },
    {
      "t": "rod",
      "n": "overhead-shower-arm",
      "from": [
        0,
        2.39,
        -0.25
      ],
      "to": [
        0,
        2.39,
        0.21
      ],
      "r": 0.039,
      "c": 8232356
    },
    {
      "t": "cylinder",
      "n": "shower-diffuser",
      "p": [
        0,
        2.36,
        0.21
      ],
      "s": [
        0.48,
        0.06,
        0.48
      ],
      "c": 4877181
    },
    {
      "t": "rod",
      "n": "shower-pull-handle",
      "from": [
        0.32,
        2.35,
        0.15
      ],
      "to": [
        0.32,
        1.29,
        0.15
      ],
      "r": 0.015,
      "c": 12964815
    },
    {
      "t": "torus",
      "n": "pull-ring",
      "p": [
        0.32,
        1.21,
        0.15
      ],
      "s": [
        0.32,
        0.32,
        0.32
      ],
      "c": 12964815,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "emergency-foot-pedal",
      "p": [
        0.36,
        0.08,
        0.19
      ],
      "s": [
        0.27,
        0.1,
        0.21
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "emergency-plaque",
      "p": [
        0,
        1.85,
        -0.26
      ],
      "s": [
        0.33,
        0.2,
        0.04
      ],
      "c": 12964815
    }
  ]
}); }
