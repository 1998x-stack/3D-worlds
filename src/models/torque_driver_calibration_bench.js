import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Torque Driver Calibration Bench; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "tools.torque-driver-calibration-bench.001",
  "slug": "torque-driver-calibration-bench",
  "title": "Torque Driver Calibration Bench",
  "title_zh": "扭矩起子检定工作台",
  "summary": "Demonstrator torque rig with shaft, dial ticks and driver nests",
  "category": "tools",
  "tags": [
    "torque",
    "driver",
    "calibration",
    "bench",
    "tools",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.31,
    0.2,
    0.21
  ],
  "generator": "createTorqueDriverCalibrationBench",
  "source_path": "src/models/torque_driver_calibration_bench.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/torque-driver-calibration-bench.webp",
  "accent": "#587b8d",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createTorqueDriverCalibrationBench() { return buildRecipe({
  "title": "Torque Driver Calibration Bench",
  "dimensions": [
    0.31,
    0.2,
    0.21
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "fixture-bed",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.94,
        0.19,
        1.42
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "support-post--1",
      "from": [
        -0.66,
        0.28,
        -0.26
      ],
      "to": [
        -0.66,
        1.23,
        -0.26
      ],
      "r": 0.054,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "stabilizing-foot--1",
      "p": [
        -0.66,
        0.28,
        0.35
      ],
      "s": [
        0.23,
        0.14,
        0.56
      ],
      "c": 14199396,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "support-post-1",
      "from": [
        0.66,
        0.28,
        -0.26
      ],
      "to": [
        0.66,
        1.23,
        -0.26
      ],
      "r": 0.054,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "stabilizing-foot-1",
      "p": [
        0.66,
        0.28,
        0.35
      ],
      "s": [
        0.23,
        0.14,
        0.56
      ],
      "c": 14199396,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cross-bridge",
      "p": [
        0,
        1.24,
        -0.2
      ],
      "s": [
        1.45,
        0.14,
        0.37
      ],
      "c": 5798797,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "torque-beam",
      "from": [
        -0.77,
        0.86,
        0.15
      ],
      "to": [
        0.77,
        0.86,
        0.15
      ],
      "r": 0.06,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "drive-head",
      "p": [
        0,
        0.86,
        0.15
      ],
      "s": [
        0.35,
        0.16,
        0.35
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "pointer",
      "from": [
        0,
        0.86,
        0.15
      ],
      "to": [
        0.54,
        1.08,
        0.15
      ],
      "r": 0.029,
      "c": 13657955,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-0",
      "p": [
        -0.75,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-1",
      "p": [
        -0.65,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-2",
      "p": [
        -0.55,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-3",
      "p": [
        -0.45,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-4",
      "p": [
        -0.35,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-5",
      "p": [
        -0.25,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-6",
      "p": [
        -0.15,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-7",
      "p": [
        -0.05,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-8",
      "p": [
        0.05,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-9",
      "p": [
        0.15,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-10",
      "p": [
        0.25,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-11",
      "p": [
        0.35,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-12",
      "p": [
        0.45,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-13",
      "p": [
        0.55,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-14",
      "p": [
        0.65,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "reading-rule-15",
      "p": [
        0.75,
        0.53,
        0.65
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-0",
      "p": [
        -0.79,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-1",
      "p": [
        -0.616,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-2",
      "p": [
        -0.442,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-3",
      "p": [
        -0.268,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-4",
      "p": [
        -0.094,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-5",
      "p": [
        0.08,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-6",
      "p": [
        0.254,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-7",
      "p": [
        0.428,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-8",
      "p": [
        0.602,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "tool-socket-9",
      "p": [
        0.776,
        0.34,
        -0.53
      ],
      "s": [
        0.13,
        0.17,
        0.13
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "fixture-screws-0",
      "p": [
        -0.69,
        0.24,
        -0.67
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "fixture-screws-1",
      "p": [
        -0.41,
        0.24,
        -0.67
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "fixture-screws-2",
      "p": [
        -0.13,
        0.24,
        -0.67
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "fixture-screws-3",
      "p": [
        0.15,
        0.24,
        -0.67
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "fixture-screws-4",
      "p": [
        0.43,
        0.24,
        -0.67
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "fixture-screws-5",
      "p": [
        0.71,
        0.24,
        -0.67
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
