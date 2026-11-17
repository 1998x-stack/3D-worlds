import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Drone Calibration Test Cage / 无人机校准测试笼. */
export const assetMeta = {
  "id": "tools.drone-calibration-test-cage.001",
  "slug": "drone-calibration-test-cage",
  "title": "Drone Calibration Test Cage",
  "title_zh": "无人机校准测试笼",
  "summary": "Nonweapon drone electronics test chamber with mesh safety cage, marker grid and diagnostic table",
  "category": "tools",
  "tags": [
    "drone",
    "calibration",
    "test",
    "cage",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.18,
    2.23,
    2.08
  ],
  "generator": "createDroneCalibrationTestCage",
  "source_path": "src/models/drone_calibration_test_cage.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/drone-calibration-test-cage.webp",
  "accent": "#7f9299"
};
export function createDroneCalibrationTestCage() { return buildRecipe({
  "title": "Drone Calibration Test Cage",
  "dimensions": [
    2.18,
    2.23,
    2.08
  ],
  "parts": [
    {
      "t": "box",
      "n": "drone-calibration-test-cage-drone-test-chamber-floor",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2.02,
        0.19,
        1.85
      ],
      "c": 13543004
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-test-shield-pole--0.91--0.82",
      "from": [
        -0.91,
        0.2,
        -0.82
      ],
      "to": [
        -0.91,
        2.16,
        -0.82
      ],
      "r": 0.04,
      "c": 13751497
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-test-shield-pole--0.91-0.82",
      "from": [
        -0.91,
        0.2,
        0.82
      ],
      "to": [
        -0.91,
        2.16,
        0.82
      ],
      "r": 0.04,
      "c": 13751497
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-test-shield-pole-0.91--0.82",
      "from": [
        0.91,
        0.2,
        -0.82
      ],
      "to": [
        0.91,
        2.16,
        -0.82
      ],
      "r": 0.04,
      "c": 13751497
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-test-shield-pole-0.91-0.82",
      "from": [
        0.91,
        0.2,
        0.82
      ],
      "to": [
        0.91,
        2.16,
        0.82
      ],
      "r": 0.04,
      "c": 13751497
    },
    {
      "t": "box",
      "n": "drone-calibration-test-cage-mesh-drone-test-chamber-ceiling",
      "p": [
        0,
        2.18,
        0
      ],
      "s": [
        2.01,
        0.09,
        1.87
      ],
      "c": 13543004
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-0-0",
      "from": [
        -0.89,
        0.38,
        -0.82
      ],
      "to": [
        -0.89,
        0.38,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-0-1",
      "from": [
        -0.89,
        0.79,
        -0.82
      ],
      "to": [
        -0.89,
        0.79,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-0-2",
      "from": [
        -0.89,
        1.2,
        -0.82
      ],
      "to": [
        -0.89,
        1.2,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-0-3",
      "from": [
        -0.89,
        1.6099999999999999,
        -0.82
      ],
      "to": [
        -0.89,
        1.6099999999999999,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-1-0",
      "from": [
        -0.54,
        0.38,
        -0.82
      ],
      "to": [
        -0.54,
        0.38,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-1-1",
      "from": [
        -0.54,
        0.79,
        -0.82
      ],
      "to": [
        -0.54,
        0.79,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-1-2",
      "from": [
        -0.54,
        1.2,
        -0.82
      ],
      "to": [
        -0.54,
        1.2,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-1-3",
      "from": [
        -0.54,
        1.6099999999999999,
        -0.82
      ],
      "to": [
        -0.54,
        1.6099999999999999,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-2-0",
      "from": [
        -0.19000000000000006,
        0.38,
        -0.82
      ],
      "to": [
        -0.19000000000000006,
        0.38,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-2-1",
      "from": [
        -0.19000000000000006,
        0.79,
        -0.82
      ],
      "to": [
        -0.19000000000000006,
        0.79,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-2-2",
      "from": [
        -0.19000000000000006,
        1.2,
        -0.82
      ],
      "to": [
        -0.19000000000000006,
        1.2,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-2-3",
      "from": [
        -0.19000000000000006,
        1.6099999999999999,
        -0.82
      ],
      "to": [
        -0.19000000000000006,
        1.6099999999999999,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-3-0",
      "from": [
        0.1599999999999998,
        0.38,
        -0.82
      ],
      "to": [
        0.1599999999999998,
        0.38,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-3-1",
      "from": [
        0.1599999999999998,
        0.79,
        -0.82
      ],
      "to": [
        0.1599999999999998,
        0.79,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-3-2",
      "from": [
        0.1599999999999998,
        1.2,
        -0.82
      ],
      "to": [
        0.1599999999999998,
        1.2,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-3-3",
      "from": [
        0.1599999999999998,
        1.6099999999999999,
        -0.82
      ],
      "to": [
        0.1599999999999998,
        1.6099999999999999,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-4-0",
      "from": [
        0.5099999999999999,
        0.38,
        -0.82
      ],
      "to": [
        0.5099999999999999,
        0.38,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-4-1",
      "from": [
        0.5099999999999999,
        0.79,
        -0.82
      ],
      "to": [
        0.5099999999999999,
        0.79,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-4-2",
      "from": [
        0.5099999999999999,
        1.2,
        -0.82
      ],
      "to": [
        0.5099999999999999,
        1.2,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-4-3",
      "from": [
        0.5099999999999999,
        1.6099999999999999,
        -0.82
      ],
      "to": [
        0.5099999999999999,
        1.6099999999999999,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-5-0",
      "from": [
        0.86,
        0.38,
        -0.82
      ],
      "to": [
        0.86,
        0.38,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-5-1",
      "from": [
        0.86,
        0.79,
        -0.82
      ],
      "to": [
        0.86,
        0.79,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-5-2",
      "from": [
        0.86,
        1.2,
        -0.82
      ],
      "to": [
        0.86,
        1.2,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "drone-calibration-test-cage-drone-safety-net-strand-5-3",
      "from": [
        0.86,
        1.6099999999999999,
        -0.82
      ],
      "to": [
        0.86,
        1.6099999999999999,
        0.82
      ],
      "r": 0.009,
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "drone-calibration-test-cage-drone-turntable-calibrator",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        0.72,
        0.13,
        0.72
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "drone-calibration-test-cage-test-quadcopter-nonweapon-body",
      "p": [
        0,
        0.74,
        0
      ],
      "s": [
        0.46,
        0.14,
        0.37
      ],
      "c": 8360601
    },
    {
      "t": "cylinder",
      "n": "drone-calibration-test-cage-drone-rotor-hub-0",
      "p": [
        0.28,
        0.79,
        0
      ],
      "s": [
        0.2,
        0.06,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "drone-calibration-test-cage-drone-rotor-hub-1",
      "p": [
        1.7145055188062947e-17,
        0.79,
        0.28
      ],
      "s": [
        0.2,
        0.06,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "drone-calibration-test-cage-drone-rotor-hub-2",
      "p": [
        -0.28,
        0.79,
        3.4290110376125894e-17
      ],
      "s": [
        0.2,
        0.06,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "drone-calibration-test-cage-drone-rotor-hub-3",
      "p": [
        -5.143516556418884e-17,
        0.79,
        -0.28
      ],
      "s": [
        0.2,
        0.06,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "drone-calibration-test-cage-flight-control-lab-display",
      "p": [
        0.69,
        1.07,
        0.69
      ],
      "s": [
        0.29,
        0.3,
        0.12
      ],
      "c": 13751497
    }
  ]
}); }
