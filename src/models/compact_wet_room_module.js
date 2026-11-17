import { buildRecipe } from './recipe_engine.js';
/** Compact Wet Room Module / 整体防水湿区淋浴模块: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "bathroom.compact-wet-room-module.001",
  "slug": "compact-wet-room-module",
  "title": "Compact Wet Room Module",
  "title_zh": "整体防水湿区淋浴模块",
  "summary": "Walk-in wet room with grated drainage, rainfall shower and privacy panel",
  "category": "bathroom",
  "tags": [
    "compact",
    "wet",
    "room",
    "module",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.75,
    2.45,
    1.55
  ],
  "generator": "createCompactWetRoomModule",
  "source_path": "src/models/compact_wet_room_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/compact-wet-room-module.webp",
  "accent": "#6f8894"
};
export function createCompactWetRoomModule() { return buildRecipe({
  "title": "Compact Wet Room Module",
  "dimensions": [
    1.75,
    2.45,
    1.55
  ],
  "parts": [
    {
      "t": "box",
      "n": "sloped-floor",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        1.5,
        0.14,
        1.32
      ],
      "c": 14148581
    },
    {
      "t": "box",
      "n": "waterproof-back-wall",
      "p": [
        0,
        1.18,
        -0.64
      ],
      "s": [
        1.5,
        2.36,
        0.09
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "privacy-screen",
      "p": [
        0.72,
        1.12,
        0
      ],
      "s": [
        0.07,
        2.24,
        1.28
      ],
      "c": 7309460
    },
    {
      "t": "rod",
      "n": "rain-shower-pipe",
      "from": [
        0.12,
        0.7,
        -0.52
      ],
      "to": [
        0.12,
        2.13,
        -0.52
      ],
      "r": 0.027,
      "c": 7309460
    },
    {
      "t": "cylinder",
      "n": "rain-shower-head",
      "p": [
        0.12,
        2.2,
        -0.35
      ],
      "s": [
        0.35,
        0.06,
        0.35
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "linear-drain",
      "p": [
        0,
        0.15,
        0.4
      ],
      "s": [
        0.83,
        0.025,
        0.06
      ],
      "c": 7309460
    },
    {
      "t": "box",
      "n": "drain-slot-0",
      "p": [
        -0.35,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-1",
      "p": [
        -0.263,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-2",
      "p": [
        -0.176,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-3",
      "p": [
        -0.08899999999999997,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-4",
      "p": [
        -0.0020000000000000018,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-5",
      "p": [
        0.08499999999999996,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-6",
      "p": [
        0.17200000000000004,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-7",
      "p": [
        0.259,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "drain-slot-8",
      "p": [
        0.346,
        0.169,
        0.4
      ],
      "s": [
        0.03,
        0.008,
        0.055
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "wall-soap-holder",
      "p": [
        -0.42,
        1.2,
        -0.53
      ],
      "s": [
        0.33,
        0.06,
        0.16
      ],
      "c": 7309460
    }
  ]
}); }
