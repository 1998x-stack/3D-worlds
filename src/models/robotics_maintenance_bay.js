import { buildRecipe } from './recipe_engine.js';
/** Robotics Maintenance Bay / 机器人维护舱: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "scifi.robotics-maintenance-bay.001",
  "slug": "robotics-maintenance-bay",
  "title": "Robotics Maintenance Bay",
  "title_zh": "机器人维护舱",
  "summary": "Nonweapon service dock with articulated tool arms and illuminated diagnostics",
  "category": "scifi",
  "tags": [
    "robotics",
    "maintenance",
    "bay",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.15,
    3.05,
    2.6
  ],
  "generator": "createRoboticsMaintenanceBay",
  "source_path": "src/models/robotics_maintenance_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/robotics-maintenance-bay.webp",
  "accent": "#80e0c9"
};
export function createRoboticsMaintenanceBay() { return buildRecipe({
  "title": "Robotics Maintenance Bay",
  "dimensions": [
    3.15,
    3.05,
    2.6
  ],
  "parts": [
    {
      "t": "box",
      "n": "maintenance-bay-deck",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        2.8,
        0.3,
        2.12
      ],
      "c": 7244215
    },
    {
      "t": "box",
      "n": "diagnostic-back-wall",
      "p": [
        0,
        1.53,
        -0.97
      ],
      "s": [
        2.75,
        2.63,
        0.14
      ],
      "c": 8446153
    },
    {
      "t": "rod",
      "n": "service-robot-arm--1",
      "from": [
        -1.05,
        2.4,
        -0.78
      ],
      "to": [
        -0.66,
        1.75,
        -0.35
      ],
      "r": 0.078,
      "c": 3158862
    },
    {
      "t": "rod",
      "n": "articulated-elbow--1",
      "from": [
        -0.66,
        1.75,
        -0.35
      ],
      "to": [
        -0.45,
        1.13,
        0.18
      ],
      "r": 0.06,
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "joint-actuator--1",
      "p": [
        -0.66,
        1.75,
        -0.35
      ],
      "s": [
        0.13,
        0.13,
        0.13
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "tool-gripper--1",
      "p": [
        -0.45,
        1.05,
        0.18
      ],
      "s": [
        0.22,
        0.22,
        0.16
      ],
      "c": 3158862
    },
    {
      "t": "rod",
      "n": "service-robot-arm-1",
      "from": [
        1.05,
        2.4,
        -0.78
      ],
      "to": [
        0.66,
        1.75,
        -0.35
      ],
      "r": 0.078,
      "c": 3158862
    },
    {
      "t": "rod",
      "n": "articulated-elbow-1",
      "from": [
        0.66,
        1.75,
        -0.35
      ],
      "to": [
        0.45,
        1.13,
        0.18
      ],
      "r": 0.06,
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "joint-actuator-1",
      "p": [
        0.66,
        1.75,
        -0.35
      ],
      "s": [
        0.13,
        0.13,
        0.13
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "tool-gripper-1",
      "p": [
        0.45,
        1.05,
        0.18
      ],
      "s": [
        0.22,
        0.22,
        0.16
      ],
      "c": 3158862
    },
    {
      "t": "box",
      "n": "repair-lift-platform",
      "p": [
        0,
        0.59,
        0
      ],
      "s": [
        1.22,
        0.16,
        1.13
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "diagnostics-panel-0",
      "p": [
        -1.1,
        1.3,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "diagnostics-panel-1",
      "p": [
        -0.3700000000000001,
        1.3,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 3158862
    },
    {
      "t": "box",
      "n": "diagnostics-panel-2",
      "p": [
        0.3599999999999999,
        1.3,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "diagnostics-panel-3",
      "p": [
        1.0899999999999999,
        1.3,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 3158862
    },
    {
      "t": "box",
      "n": "diagnostics-panel-4",
      "p": [
        -1.1,
        1.9,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "diagnostics-panel-5",
      "p": [
        -0.3700000000000001,
        1.9,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 3158862
    },
    {
      "t": "box",
      "n": "diagnostics-panel-6",
      "p": [
        0.3599999999999999,
        1.9,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "diagnostics-panel-7",
      "p": [
        1.0899999999999999,
        1.9,
        -0.88
      ],
      "s": [
        0.4,
        0.36,
        0.025
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "service-core",
      "p": [
        0,
        1.05,
        0
      ],
      "s": [
        0.43,
        0.42,
        0.37
      ],
      "c": 3158862
    }
  ]
}); }
