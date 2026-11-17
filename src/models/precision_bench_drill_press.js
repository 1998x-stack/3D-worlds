import { buildRecipe } from './recipe_engine.js';
/** Precision Bench Drill Press: original source-editable mesh scene. */
export const assetMeta = {
  "id": "tools.precision-bench-drill-press.001",
  "slug": "precision-bench-drill-press",
  "title": "Precision Bench Drill Press",
  "title_zh": "精密台式钻床",
  "summary": "Bench drill press with vertical column, sliding worktable, drill bit and protective motor housing",
  "category": "tools",
  "tags": [
    "drill",
    "press",
    "precision"
  ],
  "dimensions_m": [
    0.71,
    1.25,
    0.77
  ],
  "generator": "createPrecisionBenchDrillPress",
  "source_path": "src/models/precision_bench_drill_press.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/precision-bench-drill-press.webp"
};
export function createPrecisionBenchDrillPress() { return buildRecipe({
  "title": "Precision Bench Drill Press",
  "dimensions": [
    0.71,
    1.25,
    0.77
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.56,
        0.15,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "cast-base",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        0.68,
        0.17,
        0.71
      ],
      "c": 9872548
    },
    {
      "t": "cylinder",
      "n": "vertical-column",
      "p": [
        0,
        0.63,
        -0.2
      ],
      "s": [
        0.1,
        1.02,
        0.1
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "sliding-table",
      "p": [
        0,
        0.53,
        0.12
      ],
      "s": [
        0.51,
        0.08,
        0.46
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "upper-motor",
      "p": [
        0,
        1.08,
        -0.1
      ],
      "s": [
        0.6,
        0.26,
        0.49
      ],
      "c": 6657707
    },
    {
      "t": "cylinder",
      "n": "spindle",
      "p": [
        0,
        0.83,
        0.15
      ],
      "s": [
        0.08,
        0.4,
        0.08
      ],
      "c": 9872548
    },
    {
      "t": "cone",
      "n": "drill-tip",
      "p": [
        0,
        0.59,
        0.15
      ],
      "s": [
        0.07,
        0.21,
        0.07
      ],
      "c": 3753293,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "motor-vent-0",
      "p": [
        -0.24,
        1.2,
        -0.1
      ],
      "s": [
        0.055,
        0.01,
        0.18
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "motor-vent-1",
      "p": [
        -0.12,
        1.2,
        -0.1
      ],
      "s": [
        0.055,
        0.01,
        0.18
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "motor-vent-2",
      "p": [
        0,
        1.2,
        -0.1
      ],
      "s": [
        0.055,
        0.01,
        0.18
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "motor-vent-3",
      "p": [
        0.12,
        1.2,
        -0.1
      ],
      "s": [
        0.055,
        0.01,
        0.18
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "motor-vent-4",
      "p": [
        0.24,
        1.2,
        -0.1
      ],
      "s": [
        0.055,
        0.01,
        0.18
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "quill-feed-handle",
      "from": [
        0.22,
        0.99,
        0.04
      ],
      "to": [
        0.47,
        0.99,
        0.04
      ],
      "r": 0.025,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "feed-knob",
      "p": [
        0.47,
        0.99,
        0.04
      ],
      "s": [
        0.048,
        0.04,
        0.04
      ],
      "c": 12952430
    }
  ]
}); }
