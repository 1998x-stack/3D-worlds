import { buildRecipe } from './recipe_engine.js';
/** Accessible Wall Mounted Sink / 无障碍壁挂洗手盆: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "bathroom.accessible-wall-mounted-sink.001",
  "slug": "accessible-wall-mounted-sink",
  "title": "Accessible Wall Mounted Sink",
  "title_zh": "无障碍壁挂洗手盆",
  "summary": "Wheelchair-accessible wash basin with long-lever faucet and grab rails",
  "category": "bathroom",
  "tags": [
    "accessible",
    "wall",
    "mounted",
    "sink",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.9,
    1.25,
    0.76
  ],
  "generator": "createAccessibleWallMountedSink",
  "source_path": "src/models/accessible_wall_mounted_sink.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/accessible-wall-mounted-sink.webp",
  "accent": "#d7e3e5"
};
export function createAccessibleWallMountedSink() { return buildRecipe({
  "title": "Accessible Wall Mounted Sink",
  "dimensions": [
    0.9,
    1.25,
    0.76
  ],
  "parts": [
    {
      "t": "box",
      "n": "sink-backplate",
      "p": [
        0,
        0.94,
        -0.32
      ],
      "s": [
        0.8,
        0.55,
        0.08
      ],
      "c": 7309460
    },
    {
      "t": "sphere",
      "n": "ceramic-wash-basin",
      "p": [
        0,
        0.91,
        0.05
      ],
      "s": [
        0.49,
        0.14,
        0.32
      ],
      "c": 14148581
    },
    {
      "t": "cylinder",
      "n": "chrome-drain",
      "p": [
        0,
        0.91,
        0.05
      ],
      "s": [
        0.08,
        0.025,
        0.08
      ],
      "c": 3357255
    },
    {
      "t": "rod",
      "n": "extended-faucet-neck",
      "from": [
        0,
        1.24,
        -0.17
      ],
      "to": [
        0,
        1.23,
        0.05
      ],
      "r": 0.026,
      "c": 7309460
    },
    {
      "t": "rod",
      "n": "grab-rail--0.46",
      "from": [
        -0.46,
        0.75,
        -0.1
      ],
      "to": [
        -0.46,
        1.34,
        -0.1
      ],
      "r": 0.031,
      "c": 7309460
    },
    {
      "t": "rod",
      "n": "grab-bar--0.46",
      "from": [
        -0.46,
        1.06,
        -0.24
      ],
      "to": [
        -0.46,
        1.06,
        0.36
      ],
      "r": 0.028,
      "c": 7309460
    },
    {
      "t": "box",
      "n": "mounting-bracket--0.46",
      "p": [
        -0.46,
        0.83,
        -0.34
      ],
      "s": [
        0.12,
        0.24,
        0.07
      ],
      "c": 14072227
    },
    {
      "t": "rod",
      "n": "grab-rail-0.46",
      "from": [
        0.46,
        0.75,
        -0.1
      ],
      "to": [
        0.46,
        1.34,
        -0.1
      ],
      "r": 0.031,
      "c": 7309460
    },
    {
      "t": "rod",
      "n": "grab-bar-0.46",
      "from": [
        0.46,
        1.06,
        -0.24
      ],
      "to": [
        0.46,
        1.06,
        0.36
      ],
      "r": 0.028,
      "c": 7309460
    },
    {
      "t": "box",
      "n": "mounting-bracket-0.46",
      "p": [
        0.46,
        0.83,
        -0.34
      ],
      "s": [
        0.12,
        0.24,
        0.07
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "tap-marker-0",
      "p": [
        0.15,
        1.18,
        -0.2
      ],
      "s": [
        0.025,
        0.012,
        0.022
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "tap-marker-1",
      "p": [
        0.205,
        1.18,
        -0.2
      ],
      "s": [
        0.025,
        0.012,
        0.022
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "tap-marker-2",
      "p": [
        0.26,
        1.18,
        -0.2
      ],
      "s": [
        0.025,
        0.012,
        0.022
      ],
      "c": 3357255
    }
  ]
}); }
