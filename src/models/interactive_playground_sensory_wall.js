import { buildRecipe } from './recipe_engine.js';
/** Interactive Playground Sensory Wall / 儿童游乐感官互动墙: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "urban.interactive-playground-sensory-wall.001",
  "slug": "interactive-playground-sensory-wall",
  "title": "Interactive Playground Sensory Wall",
  "title_zh": "儿童游乐感官互动墙",
  "summary": "Child-safe playground activity wall with rotating wheels, shapes and tactile panels",
  "category": "urban",
  "tags": [
    "interactive",
    "playground",
    "sensory",
    "wall",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.5,
    1.85,
    0.92
  ],
  "generator": "createInteractivePlaygroundSensoryWall",
  "source_path": "src/models/interactive_playground_sensory_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/interactive-playground-sensory-wall.webp",
  "accent": "#515d64"
};
export function createInteractivePlaygroundSensoryWall() { return buildRecipe({
  "title": "Interactive Playground Sensory Wall",
  "dimensions": [
    2.5,
    1.85,
    0.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "activity-wall-panel",
      "p": [
        0,
        0.98,
        0
      ],
      "s": [
        2.25,
        1.7,
        0.12
      ],
      "c": 6981785
    },
    {
      "t": "cylinder",
      "n": "tactile-spinner-0",
      "p": [
        -0.8,
        1.3,
        0.13
      ],
      "s": [
        0.24,
        0.04,
        0.24
      ],
      "c": 15189870,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "spinner-knob-0",
      "p": [
        -0.8,
        1.3,
        0.17
      ],
      "s": [
        0.07,
        0.06,
        0.05
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "tactile-spinner-1",
      "p": [
        -0.4,
        1.3,
        0.13
      ],
      "s": [
        0.24,
        0.04,
        0.24
      ],
      "c": 8430715,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "spinner-knob-1",
      "p": [
        -0.4,
        1.3,
        0.17
      ],
      "s": [
        0.07,
        0.06,
        0.05
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "tactile-spinner-2",
      "p": [
        0,
        1.3,
        0.13
      ],
      "s": [
        0.24,
        0.04,
        0.24
      ],
      "c": 15189870,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "spinner-knob-2",
      "p": [
        0,
        1.3,
        0.17
      ],
      "s": [
        0.07,
        0.06,
        0.05
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "tactile-spinner-3",
      "p": [
        0.40000000000000013,
        1.3,
        0.13
      ],
      "s": [
        0.24,
        0.04,
        0.24
      ],
      "c": 8430715,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "spinner-knob-3",
      "p": [
        0.40000000000000013,
        1.3,
        0.17
      ],
      "s": [
        0.07,
        0.06,
        0.05
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "tactile-spinner-4",
      "p": [
        0.8,
        1.3,
        0.13
      ],
      "s": [
        0.24,
        0.04,
        0.24
      ],
      "c": 15189870,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "spinner-knob-4",
      "p": [
        0.8,
        1.3,
        0.17
      ],
      "s": [
        0.07,
        0.06,
        0.05
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "geometric-touch-tile-0",
      "p": [
        -0.74,
        0.52,
        0.14
      ],
      "s": [
        0.34,
        0.24,
        0.035
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "geometric-touch-tile-1",
      "p": [
        -0.020000000000000018,
        0.52,
        0.14
      ],
      "s": [
        0.34,
        0.24,
        0.035
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "geometric-touch-tile-2",
      "p": [
        0.7,
        0.52,
        0.14
      ],
      "s": [
        0.34,
        0.24,
        0.035
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "geometric-touch-tile-3",
      "p": [
        -0.74,
        0.8500000000000001,
        0.14
      ],
      "s": [
        0.34,
        0.24,
        0.035
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "geometric-touch-tile-4",
      "p": [
        -0.020000000000000018,
        0.8500000000000001,
        0.14
      ],
      "s": [
        0.34,
        0.24,
        0.035
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "geometric-touch-tile-5",
      "p": [
        0.7,
        0.8500000000000001,
        0.14
      ],
      "s": [
        0.34,
        0.24,
        0.035
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "anchored-wall-support--1",
      "p": [
        -1.04,
        0.22,
        -0.22
      ],
      "s": [
        0.14,
        0.44,
        0.42
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "anchored-wall-support-1",
      "p": [
        1.04,
        0.22,
        -0.22
      ],
      "s": [
        0.14,
        0.44,
        0.42
      ],
      "c": 15189870
    }
  ]
}); }
