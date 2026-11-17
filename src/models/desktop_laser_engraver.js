import { buildRecipe } from './recipe_engine.js';
/** Desktop Laser Engraver — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "electronics.desktop-laser-engraver.001",
  "slug": "desktop-laser-engraver",
  "title": "Desktop Laser Engraver",
  "title_zh": "桌面激光雕刻机",
  "summary": "Enclosed compact laser engraver with X-Y bridge, safety shroud, bed and fume tube",
  "category": "electronics",
  "tags": [
    "laser",
    "engraver",
    "fabrication"
  ],
  "dimensions_m": [
    0.63,
    0.57,
    0.6
  ],
  "generator": "createDesktopLaserEngraver",
  "source_path": "src/models/desktop_laser_engraver.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/desktop-laser-engraver.webp"
};
export function createDesktopLaserEngraver() { return buildRecipe({
  "title": "Desktop Laser Engraver",
  "dimensions": [
    0.63,
    0.57,
    0.6
  ],
  "parts": [
    {
      "t": "box",
      "n": "machine-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.62,
        0.15,
        0.6
      ],
      "c": 3424584
    },
    {
      "t": "box",
      "n": "cutting-bed",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        0.49,
        0.045,
        0.46
      ],
      "c": 9414053
    },
    {
      "t": "box",
      "n": "material-workpiece",
      "p": [
        0,
        0.22,
        0
      ],
      "s": [
        0.22,
        0.035,
        0.19
      ],
      "c": 9859148
    },
    {
      "t": "rod",
      "n": "gantry-upright-0",
      "from": [
        -0.26,
        0.16,
        -0.23
      ],
      "to": [
        -0.26,
        0.53,
        -0.23
      ],
      "r": 0.026,
      "c": 9414053
    },
    {
      "t": "box",
      "n": "rear-rail-support-0",
      "p": [
        -0.26,
        0.16,
        -0.22
      ],
      "s": [
        0.065,
        0.08,
        0.08
      ],
      "c": 3424584
    },
    {
      "t": "rod",
      "n": "gantry-upright-1",
      "from": [
        0.26,
        0.16,
        -0.23
      ],
      "to": [
        0.26,
        0.53,
        -0.23
      ],
      "r": 0.026,
      "c": 9414053
    },
    {
      "t": "box",
      "n": "rear-rail-support-1",
      "p": [
        0.26,
        0.16,
        -0.22
      ],
      "s": [
        0.065,
        0.08,
        0.08
      ],
      "c": 3424584
    },
    {
      "t": "rod",
      "n": "gantry-x-rail",
      "from": [
        -0.28,
        0.49,
        -0.18
      ],
      "to": [
        0.28,
        0.49,
        -0.18
      ],
      "r": 0.026,
      "c": 9414053
    },
    {
      "t": "box",
      "n": "laser-carriage",
      "p": [
        0,
        0.44,
        -0.16
      ],
      "s": [
        0.16,
        0.14,
        0.11
      ],
      "c": 11975848
    },
    {
      "t": "cone",
      "n": "laser-nozzle",
      "p": [
        0,
        0.32,
        -0.14
      ],
      "s": [
        0.06,
        0.12,
        0.06
      ],
      "c": 3424584,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "translucent-shroud",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.62,
        0.055,
        0.6
      ],
      "c": 7511220
    },
    {
      "t": "rod",
      "n": "exhaust-tube",
      "from": [
        0.28,
        0.4,
        -0.23
      ],
      "to": [
        0.52,
        0.49,
        -0.34
      ],
      "r": 0.046,
      "c": 3424584
    },
    {
      "t": "box",
      "n": "emergency-stop",
      "p": [
        0.28,
        0.13,
        0.23
      ],
      "s": [
        0.085,
        0.055,
        0.07
      ],
      "c": 13003862
    },
    {
      "t": "box",
      "n": "operation-screen",
      "p": [
        -0.19,
        0.14,
        0.31
      ],
      "s": [
        0.16,
        0.045,
        0.009
      ],
      "c": 5605787
    }
  ]
}); }
