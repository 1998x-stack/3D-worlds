import { buildRecipe } from './recipe_engine.js';
/** Hydraulic Press Shop Frame / 车间液压压力机框架: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "tools.hydraulic-press-shop-frame.001",
  "slug": "hydraulic-press-shop-frame",
  "title": "Hydraulic Press Shop Frame",
  "title_zh": "车间液压压力机框架",
  "summary": "H-frame workshop press with hydraulic ram, adjustable work bed and pressure gauge",
  "category": "tools",
  "tags": [
    "hydraulic",
    "press",
    "shop",
    "frame",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    2.1,
    1.1
  ],
  "generator": "createHydraulicPressShopFrame",
  "source_path": "src/models/hydraulic_press_shop_frame.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/hydraulic-press-shop-frame.webp",
  "accent": "#c1c6ca"
};
export function createHydraulicPressShopFrame() { return buildRecipe({
  "title": "Hydraulic Press Shop Frame",
  "dimensions": [
    1.65,
    2.1,
    1.1
  ],
  "parts": [
    {
      "t": "box",
      "n": "press-column--1",
      "p": [
        -0.62,
        1.02,
        0
      ],
      "s": [
        0.14,
        2.04,
        0.22
      ],
      "c": 7834257
    },
    {
      "t": "box",
      "n": "press-column-1",
      "p": [
        0.62,
        1.02,
        0
      ],
      "s": [
        0.14,
        2.04,
        0.22
      ],
      "c": 7834257
    },
    {
      "t": "box",
      "n": "press-crossbeam",
      "p": [
        0,
        1.98,
        0
      ],
      "s": [
        1.48,
        0.18,
        0.3
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "adjustable-work-bed",
      "p": [
        0,
        0.65,
        0
      ],
      "s": [
        1.42,
        0.18,
        0.56
      ],
      "c": 2636877
    },
    {
      "t": "cylinder",
      "n": "hydraulic-cylinder",
      "p": [
        0,
        1.58,
        0
      ],
      "s": [
        0.28,
        0.6,
        0.28
      ],
      "c": 12699338
    },
    {
      "t": "rod",
      "n": "press-ram",
      "from": [
        0,
        1.43,
        0
      ],
      "to": [
        0,
        0.86,
        0
      ],
      "r": 0.087,
      "c": 15842648
    },
    {
      "t": "cylinder",
      "n": "pressure-gauge",
      "p": [
        0.5,
        1.73,
        0.2
      ],
      "s": [
        0.24,
        0.06,
        0.24
      ],
      "c": 2636877,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "height-adjustment-hole-0",
      "p": [
        0.7,
        0.3,
        0.14
      ],
      "s": [
        0.035,
        0.07,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "height-adjustment-hole-1",
      "p": [
        0.7,
        0.56,
        0.14
      ],
      "s": [
        0.035,
        0.07,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "height-adjustment-hole-2",
      "p": [
        0.7,
        0.8200000000000001,
        0.14
      ],
      "s": [
        0.035,
        0.07,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "height-adjustment-hole-3",
      "p": [
        0.7,
        1.08,
        0.14
      ],
      "s": [
        0.035,
        0.07,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "height-adjustment-hole-4",
      "p": [
        0.7,
        1.34,
        0.14
      ],
      "s": [
        0.035,
        0.07,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "height-adjustment-hole-5",
      "p": [
        0.7,
        1.6,
        0.14
      ],
      "s": [
        0.035,
        0.07,
        0.025
      ],
      "c": 12699338
    },
    {
      "t": "box",
      "n": "floor-stabilizer--1",
      "p": [
        -0.62,
        0.08,
        0
      ],
      "s": [
        0.36,
        0.16,
        0.84
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "floor-stabilizer-1",
      "p": [
        0.62,
        0.08,
        0
      ],
      "s": [
        0.36,
        0.16,
        0.84
      ],
      "c": 15842648
    }
  ]
}); }
