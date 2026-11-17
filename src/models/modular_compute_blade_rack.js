import { buildRecipe } from './recipe_engine.js';
/** Modular Compute Blade Rack / 模块化算力刀片机柜: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "electronics.modular-compute-blade-rack.001",
  "slug": "modular-compute-blade-rack",
  "title": "Modular Compute Blade Rack",
  "title_zh": "模块化算力刀片机柜",
  "summary": "High-density server rack with removable compute trays, status LEDs and fan modules",
  "category": "electronics",
  "tags": [
    "modular",
    "compute",
    "blade",
    "rack",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.85,
    2.08,
    1.03
  ],
  "generator": "createModularComputeBladeRack",
  "source_path": "src/models/modular_compute_blade_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/modular-compute-blade-rack.webp",
  "accent": "#465a6d"
};
export function createModularComputeBladeRack() { return buildRecipe({
  "title": "Modular Compute Blade Rack",
  "dimensions": [
    0.85,
    2.08,
    1.03
  ],
  "parts": [
    {
      "t": "box",
      "n": "rack-enclosure",
      "p": [
        0,
        1.01,
        0
      ],
      "s": [
        0.76,
        2,
        0.78
      ],
      "c": 4610669
    },
    {
      "t": "box",
      "n": "rack-front-panel",
      "p": [
        0,
        1.03,
        0.41
      ],
      "s": [
        0.68,
        1.84,
        0.045
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "compute-blade-0",
      "p": [
        0,
        0.26,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-0-0",
      "p": [
        -0.23,
        0.26,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-0-1",
      "p": [
        -0.16,
        0.26,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-1",
      "p": [
        0,
        0.39,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-1-0",
      "p": [
        -0.23,
        0.39,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-1-1",
      "p": [
        -0.16,
        0.39,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-2",
      "p": [
        0,
        0.52,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-2-0",
      "p": [
        -0.23,
        0.52,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-2-1",
      "p": [
        -0.16,
        0.52,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-3",
      "p": [
        0,
        0.65,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-3-0",
      "p": [
        -0.23,
        0.65,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-3-1",
      "p": [
        -0.16,
        0.65,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-4",
      "p": [
        0,
        0.78,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-4-0",
      "p": [
        -0.23,
        0.78,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-4-1",
      "p": [
        -0.16,
        0.78,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-5",
      "p": [
        0,
        0.91,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-5-0",
      "p": [
        -0.23,
        0.91,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-5-1",
      "p": [
        -0.16,
        0.91,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-6",
      "p": [
        0,
        1.04,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-6-0",
      "p": [
        -0.23,
        1.04,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-6-1",
      "p": [
        -0.16,
        1.04,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-7",
      "p": [
        0,
        1.17,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-7-0",
      "p": [
        -0.23,
        1.17,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-7-1",
      "p": [
        -0.16,
        1.17,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-8",
      "p": [
        0,
        1.3,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-8-0",
      "p": [
        -0.23,
        1.3,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-8-1",
      "p": [
        -0.16,
        1.3,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-9",
      "p": [
        0,
        1.43,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-9-0",
      "p": [
        -0.23,
        1.43,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-9-1",
      "p": [
        -0.16,
        1.43,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-10",
      "p": [
        0,
        1.56,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-10-0",
      "p": [
        -0.23,
        1.56,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-10-1",
      "p": [
        -0.16,
        1.56,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "box",
      "n": "compute-blade-11",
      "p": [
        0,
        1.6900000000000002,
        0.46
      ],
      "s": [
        0.62,
        0.095,
        0.11
      ],
      "c": 14542571
    },
    {
      "t": "sphere",
      "n": "blade-status-11-0",
      "p": [
        -0.23,
        1.6900000000000002,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 16032859
    },
    {
      "t": "sphere",
      "n": "blade-status-11-1",
      "p": [
        -0.16,
        1.6900000000000002,
        0.53
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 7527068
    },
    {
      "t": "cylinder",
      "n": "fan-module-0",
      "p": [
        -0.175,
        0.64,
        -0.43
      ],
      "s": [
        0.28,
        0.04,
        0.28
      ],
      "c": 1976370,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "fan-module-1",
      "p": [
        0.175,
        0.64,
        -0.43
      ],
      "s": [
        0.28,
        0.04,
        0.28
      ],
      "c": 1976370,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "fan-module-2",
      "p": [
        -0.175,
        1.44,
        -0.43
      ],
      "s": [
        0.28,
        0.04,
        0.28
      ],
      "c": 1976370,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "fan-module-3",
      "p": [
        0.175,
        1.44,
        -0.43
      ],
      "s": [
        0.28,
        0.04,
        0.28
      ],
      "c": 1976370,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
