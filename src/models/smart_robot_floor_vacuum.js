import { buildRecipe } from './recipe_engine.js';
/** Smart Robot Floor Vacuum / 智能扫地清洁机器人: original authored procedural scene prop. */
export const assetMeta = {
  "id": "electronics.smart-robot-floor-vacuum.001",
  "slug": "smart-robot-floor-vacuum",
  "title": "Smart Robot Floor Vacuum",
  "title_zh": "智能扫地清洁机器人",
  "summary": "Disk robot vacuum with lidar turret, bumper, wheel housings, brush and docking marker",
  "category": "electronics",
  "tags": [
    "robot",
    "vacuum",
    "home"
  ],
  "dimensions_m": [
    0.37,
    0.21,
    0.37
  ],
  "generator": "createSmartRobotFloorVacuum",
  "source_path": "src/models/smart_robot_floor_vacuum.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/smart-robot-floor-vacuum.webp"
};
export function createSmartRobotFloorVacuum() { return buildRecipe({
  "title": "Smart Robot Floor Vacuum",
  "dimensions": [
    0.37,
    0.21,
    0.37
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "robot-body",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        0.36,
        0.18,
        0.36
      ],
      "c": 13555408
    },
    {
      "t": "cylinder",
      "n": "lidar-turret",
      "p": [
        0,
        0.2,
        -0.035
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 3753552
    },
    {
      "t": "cylinder",
      "n": "lidar-lens",
      "p": [
        0,
        0.253,
        -0.035
      ],
      "s": [
        0.077,
        0.013,
        0.077
      ],
      "c": 6523546
    },
    {
      "t": "torus",
      "n": "edge-bumper",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        0.53,
        0.53,
        0.53
      ],
      "c": 3753552,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "suction-inlet",
      "p": [
        0,
        0.025,
        0.1
      ],
      "s": [
        0.2,
        0.016,
        0.1
      ],
      "c": 3753552
    },
    {
      "t": "cylinder",
      "n": "drive-wheel-0",
      "p": [
        -0.12,
        0.045,
        -0.08
      ],
      "s": [
        0.09,
        0.034,
        0.09
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "drive-wheel-1",
      "p": [
        0.12,
        0.045,
        -0.08
      ],
      "s": [
        0.09,
        0.034,
        0.09
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "side-brush-0",
      "from": [
        0.12,
        0.034,
        0.13
      ],
      "to": [
        0.22999999999999998,
        0.034,
        0.13
      ],
      "r": 0.012,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "side-brush-1",
      "from": [
        0.12,
        0.034,
        0.13
      ],
      "to": [
        0.17500000000000002,
        0.034,
        0.22526279441628827
      ],
      "r": 0.012,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "side-brush-2",
      "from": [
        0.12,
        0.034,
        0.13
      ],
      "to": [
        0.06500000000000003,
        0.034,
        0.22526279441628827
      ],
      "r": 0.012,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "side-brush-3",
      "from": [
        0.12,
        0.034,
        0.13
      ],
      "to": [
        0.009999999999999995,
        0.034,
        0.13
      ],
      "r": 0.012,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "side-brush-4",
      "from": [
        0.12,
        0.034,
        0.13
      ],
      "to": [
        0.06499999999999995,
        0.034,
        0.03473720558371178
      ],
      "r": 0.012,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "side-brush-5",
      "from": [
        0.12,
        0.034,
        0.13
      ],
      "to": [
        0.17500000000000002,
        0.034,
        0.03473720558371175
      ],
      "r": 0.012,
      "c": 9215136
    },
    {
      "t": "sphere",
      "n": "status-light",
      "p": [
        0,
        0.19,
        0.13
      ],
      "s": [
        0.027,
        0.017,
        0.015
      ],
      "c": 7780768
    },
    {
      "t": "box",
      "n": "touch-area",
      "p": [
        0,
        0.2,
        0.075
      ],
      "s": [
        0.1,
        0.016,
        0.06
      ],
      "c": 15197659
    },
    {
      "t": "box",
      "n": "rear-charge-contacts",
      "p": [
        0,
        0.065,
        -0.181
      ],
      "s": [
        0.13,
        0.032,
        0.013
      ],
      "c": 12427115
    }
  ]
}); }
