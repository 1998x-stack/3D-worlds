import { buildRecipe } from './recipe_engine.js';
/** Laser Distance Meter: original source-editable mesh scene. */
export const assetMeta = {
  "id": "tools.laser-distance-meter.001",
  "slug": "laser-distance-meter",
  "title": "Laser Distance Meter",
  "title_zh": "激光测距仪",
  "summary": "Compact handheld digital range finder with laser port, numeric display and keypad",
  "category": "tools",
  "tags": [
    "laser",
    "distance",
    "measuring"
  ],
  "dimensions_m": [
    0.19,
    0.33,
    0.14
  ],
  "generator": "createLaserDistanceMeter",
  "source_path": "src/models/laser_distance_meter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/laser-distance-meter.webp"
};
export function createLaserDistanceMeter() { return buildRecipe({
  "title": "Laser Distance Meter",
  "dimensions": [
    0.19,
    0.33,
    0.14
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.56,
        0.15,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "rangefinder-body",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        0.18,
        0.32,
        0.13
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "rangefinder-screen",
      "p": [
        0,
        0.23,
        0.073
      ],
      "s": [
        0.137,
        0.107,
        0.012
      ],
      "c": 6657707
    },
    {
      "t": "cylinder",
      "n": "laser-aperture",
      "p": [
        0,
        0.34,
        0.022
      ],
      "s": [
        0.067,
        0.025,
        0.067
      ],
      "c": 12284766,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "numeric-key-0",
      "p": [
        -0.05,
        0.17,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "numeric-key-1",
      "p": [
        0,
        0.17,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "numeric-key-2",
      "p": [
        0.05,
        0.17,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "numeric-key-3",
      "p": [
        -0.05,
        0.135,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "numeric-key-4",
      "p": [
        0,
        0.135,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "numeric-key-5",
      "p": [
        0.05,
        0.135,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "numeric-key-6",
      "p": [
        -0.05,
        0.1,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "numeric-key-7",
      "p": [
        0,
        0.1,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "numeric-key-8",
      "p": [
        0.05,
        0.1,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "numeric-key-9",
      "p": [
        -0.05,
        0.065,
        0.075
      ],
      "s": [
        0.037,
        0.027,
        0.012
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "battery-cover",
      "p": [
        0,
        0.11,
        -0.067
      ],
      "s": [
        0.14,
        0.12,
        0.012
      ],
      "c": 9872548
    }
  ]
}); }
