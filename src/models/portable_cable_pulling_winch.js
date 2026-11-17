import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Portable Cable Pulling Winch / 便携电缆牵引绞盘. */
export const assetMeta = {
  "id": "tools.portable-cable-pulling-winch.001",
  "slug": "portable-cable-pulling-winch",
  "title": "Portable Cable Pulling Winch",
  "title_zh": "便携电缆牵引绞盘",
  "summary": "Portable industrial cable winch with spool, control lever and anchoring feet",
  "category": "tools",
  "tags": [
    "portable",
    "cable",
    "pulling",
    "winch",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.12,
    0.8,
    0.85
  ],
  "generator": "createPortableCablePullingWinch",
  "source_path": "src/models/portable_cable_pulling_winch.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/portable-cable-pulling-winch.webp",
  "accent": "#dbb269"
};
export function createPortableCablePullingWinch() { return buildRecipe({
  "title": "Portable Cable Pulling Winch",
  "dimensions": [
    1.12,
    0.8,
    0.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "cable-winch-protective-frame",
      "p": [
        0,
        0.3,
        0
      ],
      "s": [
        0.92,
        0.51,
        0.64
      ],
      "c": 8361115
    },
    {
      "t": "cylinder",
      "n": "cable-winding-drum",
      "p": [
        0,
        0.54,
        0
      ],
      "s": [
        0.61,
        0.64,
        0.61
      ],
      "c": 14398057,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-0",
      "p": [
        -0.31,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-1",
      "p": [
        -0.235,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-2",
      "p": [
        -0.16,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-3",
      "p": [
        -0.08500000000000002,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-4",
      "p": [
        -0.010000000000000009,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-5",
      "p": [
        0.065,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-6",
      "p": [
        0.13999999999999996,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-7",
      "p": [
        0.21500000000000002,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "spool-cable-turn-8",
      "p": [
        0.29,
        0.54,
        0
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13226448,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "box",
      "n": "anchor-foot--1",
      "p": [
        -0.43,
        0.07,
        0
      ],
      "s": [
        0.23,
        0.14,
        0.74
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "anchor-foot-1",
      "p": [
        0.43,
        0.07,
        0
      ],
      "s": [
        0.23,
        0.14,
        0.74
      ],
      "c": 14398057
    },
    {
      "t": "rod",
      "n": "manual-winch-lever",
      "from": [
        0.37,
        0.54,
        0
      ],
      "to": [
        0.6,
        0.83,
        0.35
      ],
      "r": 0.048,
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "cable-spool-shaft",
      "p": [
        0,
        0.54,
        0
      ],
      "s": [
        0.14,
        0.87,
        0.14
      ],
      "c": 2637648,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "motor-control-box",
      "p": [
        -0.46,
        0.5,
        0.25
      ],
      "s": [
        0.22,
        0.34,
        0.25
      ],
      "c": 13226448
    }
  ]
}); }
