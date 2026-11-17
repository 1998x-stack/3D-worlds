import { buildRecipe } from './recipe_engine.js';
/** Tilting Architect Drafting Desk / 可倾斜建筑绘图桌: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "furniture.tilting-architect-drafting-desk.001",
  "slug": "tilting-architect-drafting-desk",
  "title": "Tilting Architect Drafting Desk",
  "title_zh": "可倾斜建筑绘图桌",
  "summary": "Adjustable angled drafting desktop with angle locks, ruler tray and tubular height frame",
  "category": "furniture",
  "tags": [
    "drafting",
    "studio",
    "adjustable"
  ],
  "dimensions_m": [
    1.45,
    1.37,
    0.93
  ],
  "generator": "createTiltingArchitectDraftingDesk",
  "source_path": "src/models/tilting_architect_drafting_desk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/tilting-architect-drafting-desk.webp"
};
export function createTiltingArchitectDraftingDesk() { return buildRecipe({
  "title": "Tilting Architect Drafting Desk",
  "dimensions": [
    1.45,
    1.37,
    0.93
  ],
  "parts": [
    {
      "t": "box",
      "n": "drawing-board",
      "p": [
        0,
        1.02,
        0
      ],
      "s": [
        1.4,
        0.065,
        0.86
      ],
      "c": 9924685,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "paper-sheet",
      "p": [
        0,
        1.07,
        0.1
      ],
      "s": [
        1.13,
        0.013,
        0.6
      ],
      "c": 15328729,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "paper-clip-0",
      "p": [
        -0.55,
        1.16,
        -0.25
      ],
      "s": [
        0.12,
        0.02,
        0.07
      ],
      "c": 9741736
    },
    {
      "t": "box",
      "n": "paper-clip-1",
      "p": [
        0.55,
        1.16,
        -0.25
      ],
      "s": [
        0.12,
        0.02,
        0.07
      ],
      "c": 9741736
    },
    {
      "t": "box",
      "n": "front-pencil-ledge",
      "p": [
        0,
        0.91,
        0.43
      ],
      "s": [
        1.38,
        0.067,
        0.1
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "telescoping-pillar-0",
      "from": [
        -0.56,
        0.1,
        0
      ],
      "to": [
        -0.56,
        0.97,
        0
      ],
      "r": 0.045,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "tilt-hinge-0",
      "from": [
        -0.56,
        0.94,
        -0.24
      ],
      "to": [
        -0.56,
        1.08,
        -0.24
      ],
      "r": 0.031,
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "angle-lock-0",
      "p": [
        -0.56,
        0.89,
        -0.32
      ],
      "s": [
        0.061,
        0.054,
        0.061
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "foot-rail-0",
      "p": [
        -0.56,
        0.055,
        0
      ],
      "s": [
        0.16,
        0.11,
        0.82
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "telescoping-pillar-1",
      "from": [
        0.56,
        0.1,
        0
      ],
      "to": [
        0.56,
        0.97,
        0
      ],
      "r": 0.045,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "tilt-hinge-1",
      "from": [
        0.56,
        0.94,
        -0.24
      ],
      "to": [
        0.56,
        1.08,
        -0.24
      ],
      "r": 0.031,
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "angle-lock-1",
      "p": [
        0.56,
        0.89,
        -0.32
      ],
      "s": [
        0.061,
        0.054,
        0.061
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "foot-rail-1",
      "p": [
        0.56,
        0.055,
        0
      ],
      "s": [
        0.16,
        0.11,
        0.82
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "cross-brace",
      "from": [
        -0.57,
        0.46,
        0
      ],
      "to": [
        0.57,
        0.46,
        0
      ],
      "r": 0.03,
      "c": 9741736
    },
    {
      "t": "box",
      "n": "eraser",
      "p": [
        0.45,
        1.1,
        0.23
      ],
      "s": [
        0.12,
        0.035,
        0.07
      ],
      "c": 14796455
    },
    {
      "t": "rod",
      "n": "ruler",
      "from": [
        -0.33,
        1.11,
        0.28
      ],
      "to": [
        0.21,
        1.1,
        0.28
      ],
      "r": 0.014,
      "c": 12754796
    }
  ]
}); }
