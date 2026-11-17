import { buildRecipe } from './recipe_engine.js';

/** Original authored Double Towel Hook / 双挂钩毛巾挂架; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "bathroom.double-towel-hook.001",
  "slug": "double-towel-hook",
  "title": "Double Towel Hook",
  "title_zh": "双挂钩毛巾挂架",
  "summary": "Porcelain wall plate, two metal prongs and hanging striped hand towels.",
  "category": "bathroom",
  "tags": [
    "towel",
    "hook",
    "bathroom",
    "wall"
  ],
  "dimensions_m": [
    0.39,
    0.26,
    0.24
  ],
  "generator": "createDoubleTowelHook",
  "source_path": "src/models/double_towel_hook.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/double-towel-hook.webp"
};
export function createDoubleTowelHook() {
  return buildRecipe({
  "title": "Double Towel Hook",
  "dimensions": [
    0.39,
    0.26,
    0.24
  ],
  "parts": [
    {
      "t": "box",
      "n": "porcelain-backplate",
      "p": [
        0,
        0.13,
        -0.02
      ],
      "s": [
        0.39,
        0.25,
        0.06
      ],
      "c": 15263711
    },
    {
      "t": "cylinder",
      "n": "screw-mount-0",
      "p": [
        -0.12,
        0.14,
        0.017
      ],
      "s": [
        0.06,
        0.033,
        0.06
      ],
      "c": 9213593,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "outward-hook-0",
      "from": [
        -0.12,
        0.15,
        0.018
      ],
      "to": [
        -0.12,
        0.145,
        0.16
      ],
      "r": 0.02,
      "c": 9213593
    },
    {
      "t": "rod",
      "n": "upturned-tip-0",
      "from": [
        -0.12,
        0.145,
        0.16
      ],
      "to": [
        -0.12,
        0.22,
        0.17
      ],
      "r": 0.021,
      "c": 9213593
    },
    {
      "t": "box",
      "n": "hanging-towel-0",
      "p": [
        -0.12,
        0.08,
        0.18
      ],
      "s": [
        0.15,
        0.14,
        0.023
      ],
      "c": 13217178
    },
    {
      "t": "box",
      "n": "towel-stripe-0",
      "p": [
        -0.12,
        0.051,
        0.197
      ],
      "s": [
        0.145,
        0.013,
        0.005
      ],
      "c": 11960944
    },
    {
      "t": "cylinder",
      "n": "screw-mount-1",
      "p": [
        0.12,
        0.14,
        0.017
      ],
      "s": [
        0.06,
        0.033,
        0.06
      ],
      "c": 9213593,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "outward-hook-1",
      "from": [
        0.12,
        0.15,
        0.018
      ],
      "to": [
        0.12,
        0.145,
        0.16
      ],
      "r": 0.02,
      "c": 9213593
    },
    {
      "t": "rod",
      "n": "upturned-tip-1",
      "from": [
        0.12,
        0.145,
        0.16
      ],
      "to": [
        0.12,
        0.22,
        0.17
      ],
      "r": 0.021,
      "c": 9213593
    },
    {
      "t": "box",
      "n": "hanging-towel-1",
      "p": [
        0.12,
        0.08,
        0.18
      ],
      "s": [
        0.15,
        0.14,
        0.023
      ],
      "c": 12041408
    },
    {
      "t": "box",
      "n": "towel-stripe-1",
      "p": [
        0.12,
        0.051,
        0.197
      ],
      "s": [
        0.145,
        0.013,
        0.005
      ],
      "c": 7048611
    }
  ]
});
}
