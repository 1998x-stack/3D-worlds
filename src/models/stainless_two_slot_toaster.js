import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "kitchen.stainless-two-slot-toaster.001",
  "slug": "stainless-two-slot-toaster",
  "title": "Stainless Two Slot Toaster",
  "title_zh": "双槽不锈钢烤面包机",
  "summary": "Compact countertop toaster with extended bread and shade control",
  "category": "kitchen",
  "tags": [
    "toaster",
    "breakfast",
    "appliance"
  ],
  "dimensions_m": [
    0.35,
    0.27,
    0.24
  ],
  "generator": "createStainlessTwoSlotToaster",
  "source_path": "src/models/stainless_two_slot_toaster.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/stainless-two-slot-toaster.webp"
};
export function createStainlessTwoSlotToaster() { return buildRecipe({
  "title": "Stainless Two Slot Toaster",
  "dimensions": [
    0.35,
    0.27,
    0.24
  ],
  "parts": [
    {
      "t": "box",
      "n": "housing",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.34,
        0.24,
        0.23
      ],
      "c": 9872292
    },
    {
      "t": "box",
      "n": "cap",
      "p": [
        0,
        0.245,
        0
      ],
      "s": [
        0.35,
        0.025,
        0.24
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "bread-slot-0",
      "p": [
        -0.09,
        0.26,
        0
      ],
      "s": [
        0.07,
        0.01,
        0.18
      ],
      "c": 1449252
    },
    {
      "t": "box",
      "n": "bread-slot-1",
      "p": [
        0.09,
        0.26,
        0
      ],
      "s": [
        0.07,
        0.01,
        0.18
      ],
      "c": 1449252
    },
    {
      "t": "box",
      "n": "bread-0",
      "p": [
        -0.09,
        0.31,
        0
      ],
      "s": [
        0.063,
        0.15,
        0.15
      ],
      "c": 13476981
    },
    {
      "t": "box",
      "n": "bread-1",
      "p": [
        0.09,
        0.31,
        0
      ],
      "s": [
        0.063,
        0.15,
        0.15
      ],
      "c": 13476981
    },
    {
      "t": "box",
      "n": "lever",
      "p": [
        0.18,
        0.16,
        0.05
      ],
      "s": [
        0.05,
        0.08,
        0.029
      ],
      "c": 3358791
    },
    {
      "t": "cylinder",
      "n": "browning-knob",
      "p": [
        0.175,
        0.11,
        -0.04
      ],
      "s": [
        0.05,
        0.027,
        0.05
      ],
      "c": 3358791,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "crumb-drawer",
      "p": [
        0,
        0.04,
        0.126
      ],
      "s": [
        0.27,
        0.05,
        0.02
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "foot-0",
      "p": [
        -0.12,
        0.02,
        -0.08
      ],
      "s": [
        0.07,
        0.04,
        0.06
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "foot-1",
      "p": [
        0.12,
        0.02,
        -0.08
      ],
      "s": [
        0.07,
        0.04,
        0.06
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "vent-0",
      "p": [
        -0.12,
        0.13,
        -0.12
      ],
      "s": [
        0.025,
        0.11,
        0.008
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "vent-1",
      "p": [
        -0.04999999999999999,
        0.13,
        -0.12
      ],
      "s": [
        0.025,
        0.11,
        0.008
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "vent-2",
      "p": [
        0.020000000000000018,
        0.13,
        -0.12
      ],
      "s": [
        0.025,
        0.11,
        0.008
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "vent-3",
      "p": [
        0.09000000000000002,
        0.13,
        -0.12
      ],
      "s": [
        0.025,
        0.11,
        0.008
      ],
      "c": 3358791
    }
  ]
}); }
