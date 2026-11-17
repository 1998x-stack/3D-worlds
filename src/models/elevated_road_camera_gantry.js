import { buildRecipe } from './recipe_engine.js';
/** Elevated Road Camera Gantry: original source-editable mesh scene. */
export const assetMeta = {
  "id": "urban.elevated-road-camera-gantry.001",
  "slug": "elevated-road-camera-gantry",
  "title": "Elevated Road Camera Gantry",
  "title_zh": "道路监控龙门架",
  "summary": "Traffic surveillance gantry with twin columns, horizontal span, camera sensors and solar panel",
  "category": "urban",
  "tags": [
    "road",
    "gantry",
    "camera"
  ],
  "dimensions_m": [
    3.54,
    3.18,
    0.76
  ],
  "generator": "createElevatedRoadCameraGantry",
  "source_path": "src/models/elevated_road_camera_gantry.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/elevated-road-camera-gantry.webp"
};
export function createElevatedRoadCameraGantry() { return buildRecipe({
  "title": "Elevated Road Camera Gantry",
  "dimensions": [
    3.54,
    3.18,
    0.76
  ],
  "parts": [
    {
      "t": "box",
      "n": "road-foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        3.45,
        0.22,
        0.73
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "tall-support--1.54",
      "from": [
        -1.54,
        0.22,
        0
      ],
      "to": [
        -1.54,
        3.05,
        0
      ],
      "r": 0.063,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "footplate--1.54",
      "p": [
        -1.54,
        0.09,
        0
      ],
      "s": [
        0.37,
        0.18,
        0.54
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "tall-support-1.54",
      "from": [
        1.54,
        0.22,
        0
      ],
      "to": [
        1.54,
        3.05,
        0
      ],
      "r": 0.063,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "footplate-1.54",
      "p": [
        1.54,
        0.09,
        0
      ],
      "s": [
        0.37,
        0.18,
        0.54
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "main-spanning-beam",
      "from": [
        -1.56,
        2.96,
        0
      ],
      "to": [
        1.56,
        2.96,
        0
      ],
      "r": 0.082,
      "c": 9872548
    },
    {
      "t": "rod",
      "n": "roof-strut-0",
      "from": [
        -1.27,
        2.95,
        0
      ],
      "to": [
        -1.27,
        2.65,
        0
      ],
      "r": 0.028,
      "c": 3753293
    },
    {
      "t": "box",
      "n": "camera-box-0",
      "p": [
        -1.27,
        2.6,
        0.15
      ],
      "s": [
        0.27,
        0.22,
        0.23
      ],
      "c": 3753293
    },
    {
      "t": "sphere",
      "n": "camera-lens-0",
      "p": [
        -1.27,
        2.6,
        0.28
      ],
      "s": [
        0.075,
        0.065,
        0.025
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "roof-strut-1",
      "from": [
        -0.62,
        2.95,
        0
      ],
      "to": [
        -0.62,
        2.65,
        0
      ],
      "r": 0.028,
      "c": 3753293
    },
    {
      "t": "box",
      "n": "camera-box-1",
      "p": [
        -0.62,
        2.6,
        0.15
      ],
      "s": [
        0.27,
        0.22,
        0.23
      ],
      "c": 3753293
    },
    {
      "t": "sphere",
      "n": "camera-lens-1",
      "p": [
        -0.62,
        2.6,
        0.28
      ],
      "s": [
        0.075,
        0.065,
        0.025
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "roof-strut-2",
      "from": [
        0.030000000000000027,
        2.95,
        0
      ],
      "to": [
        0.030000000000000027,
        2.65,
        0
      ],
      "r": 0.028,
      "c": 3753293
    },
    {
      "t": "box",
      "n": "camera-box-2",
      "p": [
        0.030000000000000027,
        2.6,
        0.15
      ],
      "s": [
        0.27,
        0.22,
        0.23
      ],
      "c": 3753293
    },
    {
      "t": "sphere",
      "n": "camera-lens-2",
      "p": [
        0.030000000000000027,
        2.6,
        0.28
      ],
      "s": [
        0.075,
        0.065,
        0.025
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "roof-strut-3",
      "from": [
        0.6800000000000002,
        2.95,
        0
      ],
      "to": [
        0.6800000000000002,
        2.65,
        0
      ],
      "r": 0.028,
      "c": 3753293
    },
    {
      "t": "box",
      "n": "camera-box-3",
      "p": [
        0.6800000000000002,
        2.6,
        0.15
      ],
      "s": [
        0.27,
        0.22,
        0.23
      ],
      "c": 3753293
    },
    {
      "t": "sphere",
      "n": "camera-lens-3",
      "p": [
        0.6800000000000002,
        2.6,
        0.28
      ],
      "s": [
        0.075,
        0.065,
        0.025
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "roof-strut-4",
      "from": [
        1.33,
        2.95,
        0
      ],
      "to": [
        1.33,
        2.65,
        0
      ],
      "r": 0.028,
      "c": 3753293
    },
    {
      "t": "box",
      "n": "camera-box-4",
      "p": [
        1.33,
        2.6,
        0.15
      ],
      "s": [
        0.27,
        0.22,
        0.23
      ],
      "c": 3753293
    },
    {
      "t": "sphere",
      "n": "camera-lens-4",
      "p": [
        1.33,
        2.6,
        0.28
      ],
      "s": [
        0.075,
        0.065,
        0.025
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "solar-panel",
      "p": [
        0,
        3.08,
        -0.24
      ],
      "s": [
        0.84,
        0.06,
        0.35
      ],
      "c": 5670299
    }
  ]
}); }
