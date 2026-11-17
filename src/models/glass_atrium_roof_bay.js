import { buildRecipe } from './recipe_engine.js';
/** Glass Atrium Roof Bay / 玻璃采光中庭屋顶模块: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "architecture.glass-atrium-roof-bay.001",
  "slug": "glass-atrium-roof-bay",
  "title": "Glass Atrium Roof Bay",
  "title_zh": "玻璃采光中庭屋顶模块",
  "summary": "Modular glazed atrium roof supported by steel frames and pitched skylight panels",
  "category": "architecture",
  "tags": [
    "glass",
    "atrium",
    "roof",
    "bay",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.75,
    2.35,
    3.15
  ],
  "generator": "createGlassAtriumRoofBay",
  "source_path": "src/models/glass_atrium_roof_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/glass-atrium-roof-bay.webp",
  "accent": "#c3baa5"
};
export function createGlassAtriumRoofBay() { return buildRecipe({
  "title": "Glass Atrium Roof Bay",
  "dimensions": [
    3.75,
    2.35,
    3.15
  ],
  "parts": [
    {
      "t": "rod",
      "n": "atrium-upright--1.5--1.15",
      "from": [
        -1.5,
        0.05,
        -1.15
      ],
      "to": [
        -1.5,
        1.9,
        -1.15
      ],
      "r": 0.075,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "atrium-upright--1.5-1.15",
      "from": [
        -1.5,
        0.05,
        1.15
      ],
      "to": [
        -1.5,
        1.9,
        1.15
      ],
      "r": 0.075,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "atrium-upright-0--1.15",
      "from": [
        0,
        0.05,
        -1.15
      ],
      "to": [
        0,
        1.9,
        -1.15
      ],
      "r": 0.075,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "atrium-upright-0-1.15",
      "from": [
        0,
        0.05,
        1.15
      ],
      "to": [
        0,
        1.9,
        1.15
      ],
      "r": 0.075,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "atrium-upright-1.5--1.15",
      "from": [
        1.5,
        0.05,
        -1.15
      ],
      "to": [
        1.5,
        1.9,
        -1.15
      ],
      "r": 0.075,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "atrium-upright-1.5-1.15",
      "from": [
        1.5,
        0.05,
        1.15
      ],
      "to": [
        1.5,
        1.9,
        1.15
      ],
      "r": 0.075,
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "skylight-rafter-left-0",
      "from": [
        -1.35,
        1.85,
        -1.2
      ],
      "to": [
        -1.35,
        2.43,
        0
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "rod",
      "n": "skylight-rafter-right-0",
      "from": [
        -1.35,
        2.43,
        0
      ],
      "to": [
        -1.35,
        1.85,
        1.2
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "box",
      "n": "skylight-glass-left-0",
      "p": [
        -1.07,
        2.14,
        -0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        0.43,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "skylight-glass-right-0",
      "p": [
        -1.07,
        2.14,
        0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        -0.43,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "skylight-rafter-left-1",
      "from": [
        -0.45000000000000007,
        1.85,
        -1.2
      ],
      "to": [
        -0.45000000000000007,
        2.43,
        0
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "rod",
      "n": "skylight-rafter-right-1",
      "from": [
        -0.45000000000000007,
        2.43,
        0
      ],
      "to": [
        -0.45000000000000007,
        1.85,
        1.2
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "box",
      "n": "skylight-glass-left-1",
      "p": [
        -0.17000000000000004,
        2.14,
        -0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        0.43,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "skylight-glass-right-1",
      "p": [
        -0.17000000000000004,
        2.14,
        0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        -0.43,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "skylight-rafter-left-2",
      "from": [
        0.44999999999999996,
        1.85,
        -1.2
      ],
      "to": [
        0.44999999999999996,
        2.43,
        0
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "rod",
      "n": "skylight-rafter-right-2",
      "from": [
        0.44999999999999996,
        2.43,
        0
      ],
      "to": [
        0.44999999999999996,
        1.85,
        1.2
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "box",
      "n": "skylight-glass-left-2",
      "p": [
        0.73,
        2.14,
        -0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        0.43,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "skylight-glass-right-2",
      "p": [
        0.73,
        2.14,
        0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        -0.43,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "skylight-rafter-left-3",
      "from": [
        1.35,
        1.85,
        -1.2
      ],
      "to": [
        1.35,
        2.43,
        0
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "rod",
      "n": "skylight-rafter-right-3",
      "from": [
        1.35,
        2.43,
        0
      ],
      "to": [
        1.35,
        1.85,
        1.2
      ],
      "r": 0.056,
      "c": 12827301
    },
    {
      "t": "box",
      "n": "skylight-glass-left-3",
      "p": [
        1.6300000000000001,
        2.14,
        -0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        0.43,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "skylight-glass-right-3",
      "p": [
        1.6300000000000001,
        2.14,
        0.6
      ],
      "s": [
        0.72,
        0.055,
        1.36
      ],
      "c": 10997716,
      "rot": [
        -0.43,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "perimeter-beam",
      "p": [
        0,
        1.82,
        -1.23
      ],
      "s": [
        3.25,
        0.11,
        0.13
      ],
      "c": 6650245
    }
  ]
}); }
