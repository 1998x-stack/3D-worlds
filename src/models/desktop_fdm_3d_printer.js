import { buildRecipe } from './recipe_engine.js';
/** Desktop FDM 3D Printer: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "electronics.desktop-fdm-3d-printer.001",
  "slug": "desktop-fdm-3d-printer",
  "title": "Desktop FDM 3D Printer",
  "title_zh": "桌面熔融沉积3D打印机",
  "summary": "Open-frame 3D printer with gantry, heated bed, printhead, filament reel and small print.",
  "category": "electronics",
  "tags": [
    "3d-printer",
    "fabrication",
    "printer",
    "electronics"
  ],
  "dimensions_m": [
    0.51,
    0.66,
    0.52
  ],
  "generator": "createDesktopFdm3dPrinter",
  "source_path": "src/models/desktop_fdm_3d_printer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/desktop-fdm-3d-printer.webp"
};
export function createDesktopFdm3dPrinter() {
  return buildRecipe({
  "title": "Desktop FDM 3D Printer",
  "dimensions": [
    0.51,
    0.66,
    0.52
  ],
  "parts": [
    {
      "t": "box",
      "n": "base-frame",
      "p": [
        0,
        0.075,
        0
      ],
      "s": [
        0.48,
        0.15,
        0.49
      ],
      "c": 3291196
    },
    {
      "t": "box",
      "n": "build-plate",
      "p": [
        0,
        0.17,
        0.04
      ],
      "s": [
        0.38,
        0.04,
        0.37
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "printed-cube",
      "p": [
        0,
        0.225,
        0.05
      ],
      "s": [
        0.095,
        0.075,
        0.095
      ],
      "c": 7253148
    },
    {
      "t": "rod",
      "n": "gantry-post-0",
      "from": [
        -0.2,
        0.12,
        -0.16
      ],
      "to": [
        -0.2,
        0.6,
        -0.16
      ],
      "r": 0.021,
      "c": 8820381
    },
    {
      "t": "box",
      "n": "gantry-foot-0",
      "p": [
        -0.2,
        0.11,
        -0.16
      ],
      "s": [
        0.065,
        0.05,
        0.09
      ],
      "c": 8820381
    },
    {
      "t": "rod",
      "n": "gantry-post-1",
      "from": [
        0.2,
        0.12,
        -0.16
      ],
      "to": [
        0.2,
        0.6,
        -0.16
      ],
      "r": 0.021,
      "c": 8820381
    },
    {
      "t": "box",
      "n": "gantry-foot-1",
      "p": [
        0.2,
        0.11,
        -0.16
      ],
      "s": [
        0.065,
        0.05,
        0.09
      ],
      "c": 8820381
    },
    {
      "t": "rod",
      "n": "top-crossbeam",
      "from": [
        -0.22,
        0.59,
        -0.16
      ],
      "to": [
        0.22,
        0.59,
        -0.16
      ],
      "r": 0.027,
      "c": 3291196
    },
    {
      "t": "rod",
      "n": "x-carriage-rail",
      "from": [
        -0.19,
        0.43,
        -0.13
      ],
      "to": [
        0.19,
        0.43,
        -0.13
      ],
      "r": 0.018,
      "c": 8820381
    },
    {
      "t": "box",
      "n": "extruder-carriage",
      "p": [
        0,
        0.43,
        -0.12
      ],
      "s": [
        0.15,
        0.12,
        0.11
      ],
      "c": 3291196
    },
    {
      "t": "cone",
      "n": "hot-end-nozzle",
      "p": [
        0,
        0.34,
        -0.08
      ],
      "s": [
        0.06,
        0.11,
        0.06
      ],
      "c": 12163940,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "filament-spool",
      "p": [
        0.16,
        0.62,
        -0.12
      ],
      "s": [
        0.21,
        0.06,
        0.21
      ],
      "c": 5671584,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "controller-screen",
      "p": [
        0,
        0.11,
        0.258
      ],
      "s": [
        0.25,
        0.065,
        0.016
      ],
      "c": 3433080
    }
  ]
});
}
