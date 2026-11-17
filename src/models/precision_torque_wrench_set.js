import { buildRecipe } from './recipe_engine.js';
/** Precision Torque Wrench Set / 精密扭矩扳手套件: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "tools.precision-torque-wrench-set.001",
  "slug": "precision-torque-wrench-set",
  "title": "Precision Torque Wrench Set",
  "title_zh": "精密扭矩扳手套件",
  "summary": "Organized torque wrench case with calibrated handles, ratchets and socket bits",
  "category": "tools",
  "tags": [
    "precision",
    "torque",
    "wrench",
    "set",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.15,
    0.35,
    0.68
  ],
  "generator": "createPrecisionTorqueWrenchSet",
  "source_path": "src/models/precision_torque_wrench_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/precision-torque-wrench-set.webp",
  "accent": "#f1bd58"
};
export function createPrecisionTorqueWrenchSet() { return buildRecipe({
  "title": "Precision Torque Wrench Set",
  "dimensions": [
    1.15,
    0.35,
    0.68
  ],
  "parts": [
    {
      "t": "box",
      "n": "torque-case-lower",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.02,
        0.23,
        0.55
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "case-hinged-lid",
      "p": [
        0,
        0.3,
        -0.21
      ],
      "s": [
        1.04,
        0.07,
        0.24
      ],
      "c": 2636877
    },
    {
      "t": "rod",
      "n": "torque-handle-0",
      "from": [
        -0.42,
        0.29,
        -0.11
      ],
      "to": [
        0.41,
        0.29,
        -0.11
      ],
      "r": 0.037,
      "c": 7834257
    },
    {
      "t": "cylinder",
      "n": "ratchet-head-0",
      "p": [
        0.44,
        0.3,
        -0.11
      ],
      "s": [
        0.14,
        0.06,
        0.14
      ],
      "c": 12699338,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "torque-handle-1",
      "from": [
        -0.42,
        0.29,
        0.020000000000000004
      ],
      "to": [
        0.41,
        0.29,
        0.020000000000000004
      ],
      "r": 0.037,
      "c": 7834257
    },
    {
      "t": "cylinder",
      "n": "ratchet-head-1",
      "p": [
        0.44,
        0.3,
        0.020000000000000004
      ],
      "s": [
        0.14,
        0.06,
        0.14
      ],
      "c": 12699338,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "torque-handle-2",
      "from": [
        -0.42,
        0.29,
        0.15000000000000002
      ],
      "to": [
        0.41,
        0.29,
        0.15000000000000002
      ],
      "r": 0.037,
      "c": 7834257
    },
    {
      "t": "cylinder",
      "n": "ratchet-head-2",
      "p": [
        0.44,
        0.3,
        0.15000000000000002
      ],
      "s": [
        0.14,
        0.06,
        0.14
      ],
      "c": 12699338,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-0",
      "p": [
        -0.38,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-1",
      "p": [
        -0.26,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-2",
      "p": [
        -0.14,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-3",
      "p": [
        -0.020000000000000018,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-4",
      "p": [
        0.09999999999999998,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-5",
      "p": [
        0.21999999999999997,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "socket-adapter-6",
      "p": [
        0.33999999999999997,
        0.27,
        0.21
      ],
      "s": [
        0.07,
        0.13,
        0.07
      ],
      "c": 2636877
    },
    {
      "t": "box",
      "n": "case-grip",
      "p": [
        0,
        0.19,
        0.34
      ],
      "s": [
        0.32,
        0.07,
        0.08
      ],
      "c": 7834257
    }
  ]
}); }
