import { buildRecipe } from './recipe_engine.js';
/** Winter River Ice Shelf / 冬季河冰断面: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "nature.winter-river-ice-shelf.001",
  "slug": "winter-river-ice-shelf",
  "title": "Winter River Ice Shelf",
  "title_zh": "冬季河冰断面",
  "summary": "Frozen river edge with layered blue ice, snow drifts and exposed cold water",
  "category": "nature",
  "tags": [
    "winter",
    "river",
    "ice",
    "shelf",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.85,
    0.94,
    2.4
  ],
  "generator": "createWinterRiverIceShelf",
  "source_path": "src/models/winter_river_ice_shelf.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/winter-river-ice-shelf.webp",
  "accent": "#6994b0"
};
export function createWinterRiverIceShelf() { return buildRecipe({
  "title": "Winter River Ice Shelf",
  "dimensions": [
    2.85,
    0.94,
    2.4
  ],
  "parts": [
    {
      "t": "box",
      "n": "icy-river-bank",
      "p": [
        0,
        0.19,
        -0.42
      ],
      "s": [
        2.55,
        0.36,
        1.35
      ],
      "c": 13745299
    },
    {
      "t": "box",
      "n": "cold-river-channel",
      "p": [
        0,
        0.09,
        0.7
      ],
      "s": [
        2.62,
        0.09,
        0.9
      ],
      "c": 7184309
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-0",
      "p": [
        -1.05,
        0.29,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 7969386,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-1",
      "p": [
        -0.74,
        0.38,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 6919344,
      "rot": [
        0,
        0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-2",
      "p": [
        -0.43000000000000005,
        0.47,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 7969386,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-3",
      "p": [
        -0.1200000000000001,
        0.29,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 6919344,
      "rot": [
        0,
        0.33,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-4",
      "p": [
        0.18999999999999995,
        0.38,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 7969386,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-5",
      "p": [
        0.5,
        0.47,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 6919344,
      "rot": [
        0,
        0.11,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-6",
      "p": [
        0.8099999999999998,
        0.29,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 7969386,
      "rot": [
        0,
        0.22,
        0
      ]
    },
    {
      "t": "box",
      "n": "fractured-ice-slab-7",
      "p": [
        1.1199999999999999,
        0.38,
        0.1
      ],
      "s": [
        0.31,
        0.16,
        0.75
      ],
      "c": 6919344,
      "rot": [
        0,
        0.33,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "snow-drift-0",
      "p": [
        -1.05,
        0.45,
        -0.52
      ],
      "s": [
        0.27,
        0.16,
        0.34
      ],
      "c": 13745299
    },
    {
      "t": "sphere",
      "n": "snow-drift-1",
      "p": [
        -0.6200000000000001,
        0.45,
        -0.52
      ],
      "s": [
        0.27,
        0.16,
        0.34
      ],
      "c": 13745299
    },
    {
      "t": "sphere",
      "n": "snow-drift-2",
      "p": [
        -0.19000000000000006,
        0.45,
        -0.52
      ],
      "s": [
        0.27,
        0.16,
        0.34
      ],
      "c": 13745299
    },
    {
      "t": "sphere",
      "n": "snow-drift-3",
      "p": [
        0.24,
        0.45,
        -0.52
      ],
      "s": [
        0.27,
        0.16,
        0.34
      ],
      "c": 13745299
    },
    {
      "t": "sphere",
      "n": "snow-drift-4",
      "p": [
        0.6699999999999999,
        0.45,
        -0.52
      ],
      "s": [
        0.27,
        0.16,
        0.34
      ],
      "c": 13745299
    },
    {
      "t": "sphere",
      "n": "snow-drift-5",
      "p": [
        1.0999999999999999,
        0.45,
        -0.52
      ],
      "s": [
        0.27,
        0.16,
        0.34
      ],
      "c": 13745299
    }
  ]
}); }
