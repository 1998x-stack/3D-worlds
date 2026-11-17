import { buildRecipe } from './recipe_engine.js';
/** Lidar Mapping Scanner: source-backed custom geometry. */
export const assetMeta = {
  "id": "electronics.lidar-mapping-scanner.001",
  "slug": "lidar-mapping-scanner",
  "title": "Lidar Mapping Scanner",
  "title_zh": "激光雷达三维扫描头",
  "summary": "Three-dimensional terrestrial lidar mapping scanner and tripod support",
  "category": "electronics",
  "tags": [
    "lidar",
    "scanner",
    "mapping"
  ],
  "dimensions_m": [
    0.64,
    1.18,
    0.57
  ],
  "generator": "createLidarMappingScanner",
  "source_path": "src/models/lidar_mapping_scanner.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/lidar-mapping-scanner.webp"
};
export function createLidarMappingScanner() { return buildRecipe({
  "title": "Lidar Mapping Scanner",
  "dimensions": [
    0.64,
    1.18,
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
      "t": "cylinder",
      "n": "survey-foot",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        0.51,
        0.13,
        0.49
      ],
      "c": 3490891
    },
    {
      "t": "cylinder",
      "n": "vertical-axis",
      "p": [
        0,
        0.47,
        0
      ],
      "s": [
        0.13,
        0.73,
        0.13
      ],
      "c": 9807013
    },
    {
      "t": "cylinder",
      "n": "scan-head",
      "p": [
        0,
        1.02,
        0
      ],
      "s": [
        0.43,
        0.3,
        0.42
      ],
      "c": 6790322
    },
    {
      "t": "cylinder",
      "n": "camera-lens",
      "p": [
        0,
        1.05,
        0.24
      ],
      "s": [
        0.17,
        0.05,
        0.17
      ],
      "c": 3490891,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "support-foot-0",
      "from": [
        0,
        0.27,
        0
      ],
      "to": [
        0.29,
        0.05,
        0
      ],
      "r": 0.026,
      "c": 9807013
    },
    {
      "t": "rod",
      "n": "support-foot-1",
      "from": [
        0,
        0.27,
        0
      ],
      "to": [
        1.775737858763662e-17,
        0.05,
        0.26
      ],
      "r": 0.026,
      "c": 9807013
    },
    {
      "t": "rod",
      "n": "support-foot-2",
      "from": [
        0,
        0.27,
        0
      ],
      "to": [
        -0.29,
        0.05,
        3.1840816777831187e-17
      ],
      "r": 0.026,
      "c": 9807013
    },
    {
      "t": "rod",
      "n": "support-foot-3",
      "from": [
        0,
        0.27,
        0
      ],
      "to": [
        -5.327213576290986e-17,
        0.05,
        -0.26
      ],
      "r": 0.026,
      "c": 9807013
    }
  ]
}); }
