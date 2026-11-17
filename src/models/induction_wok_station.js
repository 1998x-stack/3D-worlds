import { buildRecipe } from './recipe_engine.js';
/** Induction Wok Station: original authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.induction-wok-station.001",
  "slug": "induction-wok-station",
  "title": "Induction Wok Station",
  "title_zh": "商用电磁炒锅工作站",
  "summary": "Industrial wok station with cooking ring, handled wok, splashback and control dials",
  "category": "kitchen",
  "tags": [
    "wok",
    "induction",
    "commercial"
  ],
  "dimensions_m": [
    1.03,
    1.28,
    0.86
  ],
  "generator": "createInductionWokStation",
  "source_path": "src/models/induction_wok_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/induction-wok-station.webp"
};
export function createInductionWokStation() { return buildRecipe({
  "title": "Induction Wok Station",
  "dimensions": [
    1.03,
    1.28,
    0.86
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-cabinet",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        1,
        0.76,
        0.72
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "food-service-counter",
      "p": [
        0,
        0.83,
        0
      ],
      "s": [
        1.07,
        0.12,
        0.79
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "steel-splashback",
      "p": [
        0,
        1,
        -0.31
      ],
      "s": [
        1.01,
        0.55,
        0.1
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "induction-ring",
      "p": [
        0,
        0.96,
        0.15
      ],
      "s": [
        0.58,
        0.05,
        0.57
      ],
      "c": 3752778
    },
    {
      "t": "sphere",
      "n": "wok-bowl",
      "p": [
        0,
        1.06,
        0.15
      ],
      "s": [
        0.65,
        0.31,
        0.61
      ],
      "c": 6977145
    },
    {
      "t": "rod",
      "n": "wok-handle",
      "from": [
        0.28,
        1.14,
        0.15
      ],
      "to": [
        0.69,
        1.22,
        0.15
      ],
      "r": 0.033,
      "c": 9924945
    },
    {
      "t": "cylinder",
      "n": "cooking-surface",
      "p": [
        0,
        1.18,
        0.15
      ],
      "s": [
        0.36,
        0.024,
        0.36
      ],
      "c": 10066578
    },
    {
      "t": "box",
      "n": "griddle-groove-0",
      "p": [
        -0.43,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "griddle-groove-1",
      "p": [
        -0.29,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "griddle-groove-2",
      "p": [
        -0.14999999999999997,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "griddle-groove-3",
      "p": [
        -0.009999999999999953,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "griddle-groove-4",
      "p": [
        0.13000000000000006,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "griddle-groove-5",
      "p": [
        0.2700000000000001,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "griddle-groove-6",
      "p": [
        0.4100000000000001,
        0.85,
        -0.29
      ],
      "s": [
        0.045,
        0.016,
        0.024
      ],
      "c": 3752778
    },
    {
      "t": "cylinder",
      "n": "temp-control-0",
      "p": [
        -0.31,
        0.7,
        0.39
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 13149548,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "temp-control-1",
      "p": [
        -0.1,
        0.7,
        0.39
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 13149548,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "temp-control-2",
      "p": [
        0.10999999999999999,
        0.7,
        0.39
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 13149548,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "temp-control-3",
      "p": [
        0.32,
        0.7,
        0.39
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 13149548,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
