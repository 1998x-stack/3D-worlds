import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Autonomous Orchard Harvester / 自主果园采收车. */
export const assetMeta = {
  "id": "vehicles.autonomous-orchard-harvester.001",
  "slug": "autonomous-orchard-harvester",
  "title": "Autonomous Orchard Harvester",
  "title_zh": "自主果园采收车",
  "summary": "Fruit collecting autonomous orchard rover with robot arm, storage bins and lidar",
  "category": "vehicles",
  "tags": [
    "autonomous",
    "orchard",
    "harvester",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.55,
    3.15,
    4.05
  ],
  "generator": "createAutonomousOrchardHarvester",
  "source_path": "src/models/autonomous_orchard_harvester.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/autonomous-orchard-harvester.webp",
  "accent": "#354b5b"
};
export function createAutonomousOrchardHarvester() { return buildRecipe({
  "title": "Autonomous Orchard Harvester",
  "dimensions": [
    2.55,
    3.15,
    4.05
  ],
  "parts": [
    {
      "t": "box",
      "n": "vehicle-frame",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        1.86,
        0.75,
        3.34
      ],
      "c": 3492699
    },
    {
      "t": "box",
      "n": "vehicle-cabin",
      "p": [
        0,
        1.68,
        0.91
      ],
      "s": [
        1.7,
        1.55,
        1.42
      ],
      "c": 7580339
    },
    {
      "t": "box",
      "n": "windscreen",
      "p": [
        0,
        1.96,
        1.66
      ],
      "s": [
        1.35,
        0.68,
        0.055
      ],
      "c": 14530402
    },
    {
      "t": "cylinder",
      "n": "wheel--1--1.14",
      "p": [
        -0.99,
        0.36,
        -1.14
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel--1-1.21",
      "p": [
        -0.99,
        0.36,
        1.21
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1--1.14",
      "p": [
        0.99,
        0.36,
        -1.14
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1-1.21",
      "p": [
        0.99,
        0.36,
        1.21
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "orchard-fruit-container",
      "p": [
        0,
        1.45,
        -0.9
      ],
      "s": [
        1.72,
        0.74,
        1.26
      ],
      "c": 7580339
    },
    {
      "t": "rod",
      "n": "robot-fruit-picker-boom",
      "from": [
        0,
        1.45,
        0.63
      ],
      "to": [
        0.62,
        2.55,
        1.4
      ],
      "r": 0.105,
      "c": 14530402
    },
    {
      "t": "rod",
      "n": "gripper-forearm",
      "from": [
        0.62,
        2.55,
        1.4
      ],
      "to": [
        0.4,
        2.85,
        1.71
      ],
      "r": 0.068,
      "c": 14530402
    },
    {
      "t": "sphere",
      "n": "soft-picking-end-effector",
      "p": [
        0.4,
        2.84,
        1.72
      ],
      "s": [
        0.26,
        0.22,
        0.23
      ],
      "c": 14080733
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-0",
      "p": [
        -0.58,
        1.87,
        -1.15
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 12881226
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-1",
      "p": [
        -0.06999999999999995,
        1.87,
        -1.15
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 14530402
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-2",
      "p": [
        0.44000000000000006,
        1.87,
        -1.15
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 12881226
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-3",
      "p": [
        -0.58,
        1.87,
        -0.8499999999999999
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 14530402
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-4",
      "p": [
        -0.06999999999999995,
        1.87,
        -0.8499999999999999
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 12881226
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-5",
      "p": [
        0.44000000000000006,
        1.87,
        -0.8499999999999999
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 14530402
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-6",
      "p": [
        -0.58,
        1.87,
        -0.5499999999999999
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 12881226
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-7",
      "p": [
        -0.06999999999999995,
        1.87,
        -0.5499999999999999
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 14530402
    },
    {
      "t": "sphere",
      "n": "harvest-fruit-8",
      "p": [
        0.44000000000000006,
        1.87,
        -0.5499999999999999
      ],
      "s": [
        0.14,
        0.15,
        0.14
      ],
      "c": 12881226
    },
    {
      "t": "rod",
      "n": "navigation-mast",
      "from": [
        0,
        1.78,
        -0.57
      ],
      "to": [
        0,
        2.79,
        -0.57
      ],
      "r": 0.056,
      "c": 3492699
    },
    {
      "t": "sphere",
      "n": "stereo-sensor-pod",
      "p": [
        0,
        2.82,
        -0.57
      ],
      "s": [
        0.36,
        0.16,
        0.2
      ],
      "c": 14530402
    }
  ]
}); }
