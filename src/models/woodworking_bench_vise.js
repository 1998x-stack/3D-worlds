import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.woodworking-bench-vise.001",
  "slug": "woodworking-bench-vise",
  "title": "Woodworking Bench Vise",
  "title_zh": "木工台钳",
  "summary": "Heavy bench vise with twin jaws, tightening screw, swiveling handle and mounting foot",
  "category": "tools",
  "tags": [
    "vise",
    "workbench",
    "clamp"
  ],
  "dimensions_m": [
    0.41,
    0.32,
    0.57
  ],
  "generator": "createWoodworkingBenchVise",
  "source_path": "src/models/woodworking_bench_vise.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/woodworking-bench-vise.webp"
};
export function createWoodworkingBenchVise() { return buildRecipe({
  "title": "Woodworking Bench Vise",
  "dimensions": [
    0.41,
    0.32,
    0.57
  ],
  "parts": [
    {
      "t": "box",
      "n": "cast-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.4,
        0.16,
        0.42
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "fixed-jaw",
      "p": [
        0,
        0.24,
        -0.18
      ],
      "s": [
        0.39,
        0.18,
        0.13
      ],
      "c": 6519939
    },
    {
      "t": "box",
      "n": "movable-jaw",
      "p": [
        0,
        0.24,
        0.12
      ],
      "s": [
        0.39,
        0.18,
        0.13
      ],
      "c": 9084324
    },
    {
      "t": "box",
      "n": "jaw-insert-fixed",
      "p": [
        0,
        0.25,
        -0.1
      ],
      "s": [
        0.31,
        0.12,
        0.015
      ],
      "c": 9596753
    },
    {
      "t": "box",
      "n": "jaw-insert-movable",
      "p": [
        0,
        0.25,
        0.05
      ],
      "s": [
        0.31,
        0.12,
        0.015
      ],
      "c": 9596753
    },
    {
      "t": "rod",
      "n": "threaded-screw",
      "from": [
        0,
        0.15,
        -0.01
      ],
      "to": [
        0,
        0.15,
        0.47
      ],
      "r": 0.035,
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "screw-knob",
      "p": [
        0,
        0.15,
        0.38
      ],
      "s": [
        0.11,
        0.1,
        0.11
      ],
      "c": 9741221,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "handle-crossbar",
      "from": [
        -0.18,
        0.15,
        0.49
      ],
      "to": [
        0.18,
        0.15,
        0.49
      ],
      "r": 0.03,
      "c": 3490634
    },
    {
      "t": "sphere",
      "n": "handle-end-0",
      "p": [
        -0.18,
        0.15,
        0.49
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12953197
    },
    {
      "t": "sphere",
      "n": "handle-end-1",
      "p": [
        0.18,
        0.15,
        0.49
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12953197
    },
    {
      "t": "box",
      "n": "bolt-0",
      "p": [
        -0.16,
        0.04,
        -0.14
      ],
      "s": [
        0.05,
        0.06,
        0.07
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bolt-1",
      "p": [
        0.16,
        0.04,
        -0.14
      ],
      "s": [
        0.05,
        0.06,
        0.07
      ],
      "c": 3490634
    }
  ]
}); }
