import { buildRecipe } from './recipe_engine.js';
/** Pen Tablet Workstation — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "electronics.pen-tablet-workstation.001",
  "slug": "pen-tablet-workstation",
  "title": "Pen Tablet Workstation",
  "title_zh": "数位屏绘画工作台",
  "summary": "Artist pen display with stand, stylus, side shortcut buttons and a drawing interface",
  "category": "electronics",
  "tags": [
    "tablet",
    "drawing",
    "studio"
  ],
  "dimensions_m": [
    0.78,
    0.56,
    0.46
  ],
  "generator": "createPenTabletWorkstation",
  "source_path": "src/models/pen_tablet_workstation.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/pen-tablet-workstation.webp"
};
export function createPenTabletWorkstation() { return buildRecipe({
  "title": "Pen Tablet Workstation",
  "dimensions": [
    0.78,
    0.56,
    0.46
  ],
  "parts": [
    {
      "t": "box",
      "n": "tablet-housing",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.76,
        0.48,
        0.09
      ],
      "c": 3424584,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "lcd-screen",
      "p": [
        0,
        0.35,
        0.075
      ],
      "s": [
        0.64,
        0.38,
        0.013
      ],
      "c": 5936036,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "art-canvas",
      "p": [
        0,
        0.34,
        0.087
      ],
      "s": [
        0.48,
        0.31,
        0.009
      ],
      "c": 14009264,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hotkey-0",
      "p": [
        -0.33,
        0.18,
        0.096
      ],
      "s": [
        0.04,
        0.026,
        0.011
      ],
      "c": 9414053,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hotkey-1",
      "p": [
        -0.33,
        0.23399999999999999,
        0.096
      ],
      "s": [
        0.04,
        0.026,
        0.011
      ],
      "c": 9414053,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hotkey-2",
      "p": [
        -0.33,
        0.288,
        0.096
      ],
      "s": [
        0.04,
        0.026,
        0.011
      ],
      "c": 9414053,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hotkey-3",
      "p": [
        -0.33,
        0.34199999999999997,
        0.096
      ],
      "s": [
        0.04,
        0.026,
        0.011
      ],
      "c": 9414053,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hotkey-4",
      "p": [
        -0.33,
        0.396,
        0.096
      ],
      "s": [
        0.04,
        0.026,
        0.011
      ],
      "c": 9414053,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hotkey-5",
      "p": [
        -0.33,
        0.45,
        0.096
      ],
      "s": [
        0.04,
        0.026,
        0.011
      ],
      "c": 9414053,
      "rot": [
        -0.4,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "stylus",
      "from": [
        0.29,
        0.17,
        0.18
      ],
      "to": [
        0.46,
        0.47,
        0.1
      ],
      "r": 0.013,
      "c": 3424584
    },
    {
      "t": "cone",
      "n": "stylus-nib",
      "p": [
        0.285,
        0.165,
        0.18
      ],
      "s": [
        0.018,
        0.044,
        0.018
      ],
      "c": 9414053,
      "rot": [
        0.9,
        0,
        -0.4
      ]
    },
    {
      "t": "box",
      "n": "tilt-kickstand",
      "p": [
        0,
        0.19,
        -0.19
      ],
      "s": [
        0.2,
        0.34,
        0.05
      ],
      "c": 9414053,
      "rot": [
        0.46,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "foot-plate",
      "p": [
        0,
        0.045,
        -0.12
      ],
      "s": [
        0.55,
        0.09,
        0.31
      ],
      "c": 3424584
    },
    {
      "t": "box",
      "n": "stand-pad-0",
      "p": [
        -0.25,
        0.04,
        -0.2
      ],
      "s": [
        0.09,
        0.07,
        0.14
      ],
      "c": 9414053
    },
    {
      "t": "box",
      "n": "stand-pad-1",
      "p": [
        0.25,
        0.04,
        -0.2
      ],
      "s": [
        0.09,
        0.07,
        0.14
      ],
      "c": 9414053
    },
    {
      "t": "box",
      "n": "usb-port",
      "p": [
        0.38,
        0.16,
        0.07
      ],
      "s": [
        0.018,
        0.042,
        0.06
      ],
      "c": 9414053
    }
  ]
}); }
