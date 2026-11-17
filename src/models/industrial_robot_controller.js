import { buildRecipe } from './recipe_engine.js';
/** Industrial Robot Controller: source-backed custom geometry. */
export const assetMeta = {
  "id": "electronics.industrial-robot-controller.001",
  "slug": "industrial-robot-controller",
  "title": "Industrial Robot Controller",
  "title_zh": "工业机器人控制器",
  "summary": "Industrial robot teach-pendant cabinet with safety stop and thermal vents",
  "category": "electronics",
  "tags": [
    "robotics",
    "controller",
    "industrial"
  ],
  "dimensions_m": [
    0.76,
    1.35,
    0.57
  ],
  "generator": "createIndustrialRobotController",
  "source_path": "src/models/industrial_robot_controller.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/industrial-robot-controller.webp"
};
export function createIndustrialRobotController() { return buildRecipe({
  "title": "Industrial Robot Controller",
  "dimensions": [
    0.76,
    1.35,
    0.57
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-housing",
      "p": [
        0,
        0.64,
        0
      ],
      "s": [
        0.53,
        1.27,
        0.46
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "operation-display",
      "p": [
        0,
        1.13,
        0.24
      ],
      "s": [
        0.36,
        0.24,
        0.019
      ],
      "c": 6790322
    },
    {
      "t": "box",
      "n": "keypad-button-0",
      "p": [
        -0.24,
        0.86,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-1",
      "p": [
        -0.148,
        0.86,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-2",
      "p": [
        -0.055999999999999994,
        0.86,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-3",
      "p": [
        0.03600000000000003,
        0.86,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-4",
      "p": [
        0.128,
        0.86,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-5",
      "p": [
        0.21999999999999997,
        0.86,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-6",
      "p": [
        -0.24,
        0.965,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-7",
      "p": [
        -0.148,
        0.965,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-8",
      "p": [
        -0.055999999999999994,
        0.965,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-9",
      "p": [
        0.03600000000000003,
        0.965,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-10",
      "p": [
        0.128,
        0.965,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-11",
      "p": [
        0.21999999999999997,
        0.965,
        0.27
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "handheld-teach-pendant",
      "p": [
        0.4,
        0.67,
        0.2
      ],
      "s": [
        0.26,
        0.43,
        0.14
      ],
      "c": 9807013
    },
    {
      "t": "cylinder",
      "n": "red-emergency-stop",
      "p": [
        0.19,
        0.99,
        0.27
      ],
      "s": [
        0.1,
        0.05,
        0.1
      ],
      "c": 12741208,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "ventilation-slot-0",
      "p": [
        -0.31,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-1",
      "p": [
        -0.235,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-2",
      "p": [
        -0.16,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-3",
      "p": [
        -0.08500000000000002,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-4",
      "p": [
        -0.010000000000000009,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-5",
      "p": [
        0.065,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-6",
      "p": [
        0.13999999999999996,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-7",
      "p": [
        0.21500000000000002,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "ventilation-slot-8",
      "p": [
        0.29,
        0.53,
        0.25
      ],
      "s": [
        0.03,
        0.21,
        0.014
      ],
      "c": 3490891
    }
  ]
}); }
