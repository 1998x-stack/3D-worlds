import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Microscope Repair Workbench / 显微镜精密维修台. */
export const assetMeta = {
  "id": "tools.microscope-repair-workbench.001",
  "slug": "microscope-repair-workbench",
  "title": "Microscope Repair Workbench",
  "title_zh": "显微镜精密维修台",
  "summary": "Precision optics service bench with microscope, articulated lighting and calibration blocks",
  "category": "tools",
  "tags": [
    "microscope",
    "repair",
    "workbench",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.75,
    1.28,
    0.97
  ],
  "generator": "createMicroscopeRepairWorkbench",
  "source_path": "src/models/microscope_repair_workbench.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/microscope-repair-workbench.webp",
  "accent": "#c9d1d0"
};
export function createMicroscopeRepairWorkbench() { return buildRecipe({
  "title": "Microscope Repair Workbench",
  "dimensions": [
    1.75,
    1.28,
    0.97
  ],
  "parts": [
    {
      "t": "box",
      "n": "optics-repair-benchtop",
      "p": [
        0,
        0.75,
        0
      ],
      "s": [
        1.52,
        0.14,
        0.76
      ],
      "c": 8361115
    },
    {
      "t": "box",
      "n": "workbench-leg--0.66--0.32",
      "p": [
        -0.66,
        0.35,
        -0.32
      ],
      "s": [
        0.085,
        0.7,
        0.085
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "workbench-leg--0.66-0.32",
      "p": [
        -0.66,
        0.35,
        0.32
      ],
      "s": [
        0.085,
        0.7,
        0.085
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "workbench-leg-0.66--0.32",
      "p": [
        0.66,
        0.35,
        -0.32
      ],
      "s": [
        0.085,
        0.7,
        0.085
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "workbench-leg-0.66-0.32",
      "p": [
        0.66,
        0.35,
        0.32
      ],
      "s": [
        0.085,
        0.7,
        0.085
      ],
      "c": 14398057
    },
    {
      "t": "cylinder",
      "n": "microscope-main-stand",
      "p": [
        -0.34,
        1.02,
        -0.1
      ],
      "s": [
        0.21,
        0.46,
        0.21
      ],
      "c": 14398057
    },
    {
      "t": "cylinder",
      "n": "compound-optics-head",
      "p": [
        -0.34,
        1.28,
        -0.12
      ],
      "s": [
        0.29,
        0.32,
        0.29
      ],
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "objective-turret",
      "p": [
        -0.34,
        1.07,
        -0.05
      ],
      "s": [
        0.28,
        0.11,
        0.28
      ],
      "c": 13226448
    },
    {
      "t": "box",
      "n": "optical-calibration-chart",
      "p": [
        0.28,
        0.88,
        -0.18
      ],
      "s": [
        0.49,
        0.09,
        0.35
      ],
      "c": 13226448
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-0",
      "p": [
        0.07,
        0.937,
        -0.29
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-1",
      "p": [
        0.21000000000000002,
        0.937,
        -0.29
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-2",
      "p": [
        0.35000000000000003,
        0.937,
        -0.29
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-3",
      "p": [
        0.07,
        0.937,
        -0.16999999999999998
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-4",
      "p": [
        0.21000000000000002,
        0.937,
        -0.16999999999999998
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-5",
      "p": [
        0.35000000000000003,
        0.937,
        -0.16999999999999998
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-6",
      "p": [
        0.07,
        0.937,
        -0.04999999999999999
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-7",
      "p": [
        0.21000000000000002,
        0.937,
        -0.04999999999999999
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "calibration-grid-patch-8",
      "p": [
        0.35000000000000003,
        0.937,
        -0.04999999999999999
      ],
      "s": [
        0.09,
        0.013,
        0.07
      ],
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "task-light-articulated-arm",
      "from": [
        0.6,
        0.86,
        -0.3
      ],
      "to": [
        0.53,
        1.27,
        -0.16
      ],
      "r": 0.028,
      "c": 14398057
    },
    {
      "t": "rod",
      "n": "task-light-angled-boom",
      "from": [
        0.53,
        1.27,
        -0.16
      ],
      "to": [
        0.21,
        1.27,
        -0.05
      ],
      "r": 0.024,
      "c": 14398057
    },
    {
      "t": "cylinder",
      "n": "task-light-shade",
      "p": [
        0.21,
        1.25,
        -0.05
      ],
      "s": [
        0.22,
        0.12,
        0.22
      ],
      "c": 2637648
    }
  ]
}); }
