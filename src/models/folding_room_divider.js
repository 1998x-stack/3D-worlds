import { buildRecipe } from './recipe_engine.js';
/** Folding Room Divider: individually authored procedural geometry. */
export const assetMeta = {
  "id": "decor.folding-room-divider.001",
  "slug": "folding-room-divider",
  "title": "Folding Room Divider",
  "title_zh": "折叠屏风隔断",
  "summary": "Three articulated wood lattice panels with opaque textile inserts and hinges.",
  "category": "decor",
  "tags": [
    "screen",
    "divider",
    "privacy",
    "interior"
  ],
  "dimensions_m": [
    2.29,
    1.82,
    0.52
  ],
  "generator": "createFoldingRoomDivider",
  "source_path": "src/models/folding_room_divider.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/folding-room-divider.webp"
};
export function createFoldingRoomDivider() {
 return buildRecipe({
  "title": "Folding Room Divider",
  "dimensions": [
    2.29,
    1.82,
    0.52
  ],
  "parts": [
    {
      "t": "box",
      "n": "panel-shell-0",
      "p": [
        -0.75,
        0.93,
        0.11
      ],
      "s": [
        0.72,
        1.69,
        0.07
      ],
      "c": 11042392,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "screen-infill-0",
      "p": [
        -0.75,
        0.93,
        0.155
      ],
      "s": [
        0.61,
        1.48,
        0.014
      ],
      "c": 13162188,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-0-0",
      "p": [
        -0.75,
        0.39,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-0-1",
      "p": [
        -0.75,
        0.75,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-0-2",
      "p": [
        -0.75,
        1.1099999999999999,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-0-3",
      "p": [
        -0.75,
        1.4700000000000002,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        -0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "ground-support-0-0",
      "p": [
        -0.75,
        0.035,
        -0.23
      ],
      "s": [
        0.62,
        0.07,
        0.1
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "ground-support-0-1",
      "p": [
        -0.75,
        0.035,
        0.23
      ],
      "s": [
        0.62,
        0.07,
        0.1
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "panel-shell-1",
      "p": [
        0,
        0.93,
        0
      ],
      "s": [
        0.72,
        1.69,
        0.07
      ],
      "c": 11042392,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "screen-infill-1",
      "p": [
        0,
        0.93,
        0
      ],
      "s": [
        0.61,
        1.48,
        0.014
      ],
      "c": 14799277,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-1-0",
      "p": [
        0,
        0.39,
        0
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-1-1",
      "p": [
        0,
        0.75,
        0
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-1-2",
      "p": [
        0,
        1.1099999999999999,
        0
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-1-3",
      "p": [
        0,
        1.4700000000000002,
        0
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "ground-support-1-0",
      "p": [
        0,
        0.035,
        -0.23
      ],
      "s": [
        0.62,
        0.07,
        0.1
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "ground-support-1-1",
      "p": [
        0,
        0.035,
        0.23
      ],
      "s": [
        0.62,
        0.07,
        0.1
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "panel-shell-2",
      "p": [
        0.75,
        0.93,
        0.11
      ],
      "s": [
        0.72,
        1.69,
        0.07
      ],
      "c": 11042392,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "screen-infill-2",
      "p": [
        0.75,
        0.93,
        0.155
      ],
      "s": [
        0.61,
        1.48,
        0.014
      ],
      "c": 13162188,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-2-0",
      "p": [
        0.75,
        0.39,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-2-1",
      "p": [
        0.75,
        0.75,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-2-2",
      "p": [
        0.75,
        1.1099999999999999,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "horizontal-lattice-2-3",
      "p": [
        0.75,
        1.4700000000000002,
        0.17
      ],
      "s": [
        0.68,
        0.02,
        0.02
      ],
      "c": 7759179,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "ground-support-2-0",
      "p": [
        0.75,
        0.035,
        -0.23
      ],
      "s": [
        0.62,
        0.07,
        0.1
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "ground-support-2-1",
      "p": [
        0.75,
        0.035,
        0.23
      ],
      "s": [
        0.62,
        0.07,
        0.1
      ],
      "c": 3160900
    },
    {
      "t": "sphere",
      "n": "hinge-upper-0",
      "p": [
        -0.38,
        1.48,
        0.16
      ],
      "s": [
        0.06,
        0.07,
        0.06
      ],
      "c": 8886427
    },
    {
      "t": "sphere",
      "n": "hinge-lower-0",
      "p": [
        -0.38,
        0.39,
        0.16
      ],
      "s": [
        0.06,
        0.07,
        0.06
      ],
      "c": 8886427
    },
    {
      "t": "sphere",
      "n": "hinge-upper-1",
      "p": [
        0.38,
        1.48,
        0.16
      ],
      "s": [
        0.06,
        0.07,
        0.06
      ],
      "c": 8886427
    },
    {
      "t": "sphere",
      "n": "hinge-lower-1",
      "p": [
        0.38,
        0.39,
        0.16
      ],
      "s": [
        0.06,
        0.07,
        0.06
      ],
      "c": 8886427
    }
  ]
});
}
