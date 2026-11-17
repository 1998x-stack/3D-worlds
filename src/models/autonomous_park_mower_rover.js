import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Autonomous Park Mower Rover / 公园自主割草机器人. */
export const assetMeta = {
  "id": "vehicles.autonomous-park-mower-rover.001",
  "slug": "autonomous-park-mower-rover",
  "title": "Autonomous Park Mower Rover",
  "title_zh": "公园自主割草机器人",
  "summary": "Self-driving landscape maintenance rover with deck blades guard, lidar and four turf wheels",
  "category": "vehicles",
  "tags": [
    "autonomous",
    "park",
    "mower",
    "rover",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.55,
    1.1,
    2.1
  ],
  "generator": "createAutonomousParkMowerRover",
  "source_path": "src/models/autonomous_park_mower_rover.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/autonomous-park-mower-rover.webp",
  "accent": "#cab367"
};
export function createAutonomousParkMowerRover() { return buildRecipe({
  "title": "Autonomous Park Mower Rover",
  "dimensions": [
    1.55,
    1.1,
    2.1
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "self-driving-mower-hull",
      "p": [
        0,
        0.51,
        0
      ],
      "s": [
        1.28,
        0.45,
        1.72
      ],
      "c": 7249061
    },
    {
      "t": "box",
      "n": "protected-cutting-deck",
      "p": [
        0,
        0.22,
        0.16
      ],
      "s": [
        1.39,
        0.2,
        1.14
      ],
      "c": 4086126
    },
    {
      "t": "cylinder",
      "n": "turf-wheel--1--0.54",
      "p": [
        -0.71,
        0.29,
        -0.54
      ],
      "s": [
        0.43,
        0.13,
        0.43
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "turf-wheel--1-0.54",
      "p": [
        -0.71,
        0.29,
        0.54
      ],
      "s": [
        0.43,
        0.13,
        0.43
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "turf-wheel-1--0.54",
      "p": [
        0.71,
        0.29,
        -0.54
      ],
      "s": [
        0.43,
        0.13,
        0.43
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "turf-wheel-1-0.54",
      "p": [
        0.71,
        0.29,
        0.54
      ],
      "s": [
        0.43,
        0.13,
        0.43
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "grass-cutting-spindle",
      "p": [
        0,
        0.2,
        0.22
      ],
      "s": [
        0.42,
        0.1,
        0.42
      ],
      "c": 13284199
    },
    {
      "t": "rod",
      "n": "mapping-lidar-mast",
      "from": [
        0,
        0.72,
        -0.31
      ],
      "to": [
        0,
        1.04,
        -0.31
      ],
      "r": 0.035,
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "robot-mapping-lidar",
      "p": [
        0,
        1.08,
        -0.31
      ],
      "s": [
        0.22,
        0.15,
        0.21
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "ground-detection-sensor--1",
      "p": [
        -0.52,
        0.43,
        0.75
      ],
      "s": [
        0.19,
        0.11,
        0.14
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "ground-detection-sensor-1",
      "p": [
        0.52,
        0.43,
        0.75
      ],
      "s": [
        0.19,
        0.11,
        0.14
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "mower-vent-0",
      "p": [
        -0.42,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "mower-vent-1",
      "p": [
        -0.27999999999999997,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "mower-vent-2",
      "p": [
        -0.13999999999999996,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "mower-vent-3",
      "p": [
        5.551115123125783e-17,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "mower-vent-4",
      "p": [
        0.14000000000000007,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "mower-vent-5",
      "p": [
        0.2800000000000001,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "mower-vent-6",
      "p": [
        0.4200000000000001,
        0.71,
        -0.38
      ],
      "s": [
        0.07,
        0.03,
        0.24
      ],
      "c": 4086126
    }
  ]
}); }
