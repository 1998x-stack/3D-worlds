import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Hydraulic Pipe Bending Machine / 液压弯管机. */
export const assetMeta = {
  "id": "tools.hydraulic-pipe-bending-machine.001",
  "slug": "hydraulic-pipe-bending-machine",
  "title": "Hydraulic Pipe Bending Machine",
  "title_zh": "液压弯管机",
  "summary": "Workshop tube-bending machine with hydraulic cylinder, curved dies and pressure lever",
  "category": "tools",
  "tags": [
    "hydraulic",
    "pipe",
    "bending",
    "machine",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.9,
    1.75,
    1.3
  ],
  "generator": "createHydraulicPipeBendingMachine",
  "source_path": "src/models/hydraulic_pipe_bending_machine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/hydraulic-pipe-bending-machine.webp",
  "accent": "#c2c7c6"
};
export function createHydraulicPipeBendingMachine() { return buildRecipe({
  "title": "Hydraulic Pipe Bending Machine",
  "dimensions": [
    1.9,
    1.75,
    1.3
  ],
  "parts": [
    {
      "t": "box",
      "n": "pipe-bender-base",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        1.58,
        0.35,
        0.99
      ],
      "c": 6979987
    },
    {
      "t": "box",
      "n": "hydraulic-bender-upright--1",
      "p": [
        -0.64,
        0.89,
        0
      ],
      "s": [
        0.14,
        1.44,
        0.23
      ],
      "c": 12765126
    },
    {
      "t": "box",
      "n": "hydraulic-bender-upright-1",
      "p": [
        0.64,
        0.89,
        0
      ],
      "s": [
        0.14,
        1.44,
        0.23
      ],
      "c": 12765126
    },
    {
      "t": "cylinder",
      "n": "pipe-forming-die",
      "p": [
        0,
        1.01,
        0.11
      ],
      "s": [
        0.65,
        0.18,
        0.65
      ],
      "c": 2769748,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "hydraulic-ram",
      "p": [
        0,
        0.57,
        0
      ],
      "s": [
        0.22,
        0.81,
        0.22
      ],
      "c": 12765126
    },
    {
      "t": "rod",
      "n": "pressure-lever",
      "from": [
        0.34,
        0.6,
        0
      ],
      "to": [
        0.89,
        1.54,
        0.25
      ],
      "r": 0.053,
      "c": 14854486
    },
    {
      "t": "rod",
      "n": "formed-workpiece-pipe",
      "from": [
        -0.76,
        1.06,
        -0.26
      ],
      "to": [
        0.77,
        1.06,
        -0.26
      ],
      "r": 0.052,
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "pipe-curvature-roller-0",
      "p": [
        -0.51,
        1.18,
        0.08
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 14854486,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "pipe-curvature-roller-1",
      "p": [
        -0.32,
        1.18,
        0.08
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 14854486,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "pipe-curvature-roller-2",
      "p": [
        -0.13,
        1.18,
        0.08
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 14854486,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "pipe-curvature-roller-3",
      "p": [
        0.06000000000000005,
        1.18,
        0.08
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 14854486,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "pipe-curvature-roller-4",
      "p": [
        0.25,
        1.18,
        0.08
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 14854486,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "pipe-curvature-roller-5",
      "p": [
        0.43999999999999995,
        1.18,
        0.08
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 14854486,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pressure-control-box",
      "p": [
        0.68,
        0.58,
        0.36
      ],
      "s": [
        0.26,
        0.37,
        0.2
      ],
      "c": 14854486
    }
  ]
}); }
