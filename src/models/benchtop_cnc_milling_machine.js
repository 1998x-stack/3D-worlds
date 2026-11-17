import { buildRecipe } from './recipe_engine.js';
/** Benchtop CNC Milling Machine / 台式数控铣床: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "tools.benchtop-cnc-milling-machine.001",
  "slug": "benchtop-cnc-milling-machine",
  "title": "Benchtop CNC Milling Machine",
  "title_zh": "台式数控铣床",
  "summary": "Enclosed benchtop CNC mill with spindle, vise, transparent door and control screen",
  "category": "tools",
  "tags": [
    "benchtop",
    "cnc",
    "milling",
    "machine",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.18,
    1.48,
    1.05
  ],
  "generator": "createBenchtopCncMillingMachine",
  "source_path": "src/models/benchtop_cnc_milling_machine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/benchtop-cnc-milling-machine.webp",
  "accent": "#778a91"
};
export function createBenchtopCncMillingMachine() { return buildRecipe({
  "title": "Benchtop CNC Milling Machine",
  "dimensions": [
    1.18,
    1.48,
    1.05
  ],
  "parts": [
    {
      "t": "box",
      "n": "mill-machine-base",
      "p": [
        0,
        0.29,
        0
      ],
      "s": [
        0.99,
        0.54,
        0.82
      ],
      "c": 7834257
    },
    {
      "t": "box",
      "n": "milling-enclosure",
      "p": [
        0,
        0.95,
        -0.08
      ],
      "s": [
        0.94,
        0.86,
        0.68
      ],
      "c": 2636877
    },
    {
      "t": "box",
      "n": "clear-door",
      "p": [
        0,
        0.93,
        0.29
      ],
      "s": [
        0.7,
        0.66,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "cylinder",
      "n": "spindle-motor",
      "p": [
        0,
        1.14,
        -0.09
      ],
      "s": [
        0.24,
        0.48,
        0.24
      ],
      "c": 15842648
    },
    {
      "t": "cone",
      "n": "milling-bit",
      "p": [
        0,
        0.75,
        -0.09
      ],
      "s": [
        0.07,
        0.22,
        0.07
      ],
      "c": 2636877,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "vise-table",
      "p": [
        0,
        0.49,
        0.05
      ],
      "s": [
        0.63,
        0.12,
        0.42
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "linear-guide-0",
      "p": [
        -0.28,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "linear-guide-1",
      "p": [
        -0.19000000000000003,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "linear-guide-2",
      "p": [
        -0.10000000000000003,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "linear-guide-3",
      "p": [
        -0.010000000000000009,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "linear-guide-4",
      "p": [
        0.07999999999999996,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "linear-guide-5",
      "p": [
        0.16999999999999993,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "linear-guide-6",
      "p": [
        0.26,
        0.55,
        0.05
      ],
      "s": [
        0.03,
        0.02,
        0.39
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "machine-keypad",
      "p": [
        0.57,
        0.91,
        0.08
      ],
      "s": [
        0.19,
        0.38,
        0.25
      ],
      "c": 15842648
    },
    {
      "t": "sphere",
      "n": "status-button-0",
      "p": [
        0.681,
        0.78,
        0.13
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 12699338
    },
    {
      "t": "sphere",
      "n": "status-button-1",
      "p": [
        0.681,
        0.8400000000000001,
        0.13
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 2636877
    },
    {
      "t": "sphere",
      "n": "status-button-2",
      "p": [
        0.681,
        0.9,
        0.13
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 12699338
    },
    {
      "t": "sphere",
      "n": "status-button-3",
      "p": [
        0.681,
        0.96,
        0.13
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 2636877
    },
    {
      "t": "sphere",
      "n": "status-button-4",
      "p": [
        0.681,
        1.02,
        0.13
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 12699338
    },
    {
      "t": "sphere",
      "n": "status-button-5",
      "p": [
        0.681,
        1.08,
        0.13
      ],
      "s": [
        0.018,
        0.018,
        0.018
      ],
      "c": 2636877
    }
  ]
}); }
