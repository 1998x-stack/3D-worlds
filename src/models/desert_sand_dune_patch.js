import { buildRecipe } from './recipe_engine.js';
/** Desert Sand Dune Patch: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "nature.desert-sand-dune-patch.001",
  "slug": "desert-sand-dune-patch",
  "title": "Desert Sand Dune Patch",
  "title_zh": "沙漠沙丘地块",
  "summary": "Layered sand mound with wind ripples and dry shrub accents.",
  "category": "nature",
  "tags": [
    "desert",
    "sand",
    "dune",
    "terrain"
  ],
  "dimensions_m": [
    2.28,
    0.83,
    1.75
  ],
  "generator": "createDesertSandDunePatch",
  "source_path": "src/models/desert_sand_dune_patch.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/desert-sand-dune-patch.webp"
};
export function createDesertSandDunePatch() {
  return buildRecipe({
  "title": "Desert Sand Dune Patch",
  "dimensions": [
    2.28,
    0.83,
    1.75
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "main-dune",
      "p": [
        0,
        0.28,
        0
      ],
      "s": [
        1.97,
        0.56,
        1.48
      ],
      "c": 14071167
    },
    {
      "t": "sphere",
      "n": "ridge",
      "p": [
        -0.39,
        0.42,
        -0.19
      ],
      "s": [
        1.31,
        0.63,
        0.8
      ],
      "c": 14926987
    },
    {
      "t": "sphere",
      "n": "leeward-slope",
      "p": [
        0.51,
        0.23,
        0.28
      ],
      "s": [
        1.2,
        0.39,
        0.99
      ],
      "c": 13149551
    },
    {
      "t": "box",
      "n": "wind-ripple-0",
      "p": [
        -0.65,
        0.26,
        0.44
      ],
      "s": [
        0.18,
        0.013,
        0.42
      ],
      "c": 12228970,
      "rot": [
        0,
        0.24,
        0
      ]
    },
    {
      "t": "box",
      "n": "wind-ripple-1",
      "p": [
        -0.41000000000000003,
        0.31738848727196184,
        0.33999999999999997
      ],
      "s": [
        0.18,
        0.013,
        0.42
      ],
      "c": 15124109,
      "rot": [
        0,
        0.24,
        0
      ]
    },
    {
      "t": "box",
      "n": "wind-ripple-2",
      "p": [
        -0.17000000000000004,
        0.3399658882433204,
        0.24
      ],
      "s": [
        0.18,
        0.013,
        0.42
      ],
      "c": 12228970,
      "rot": [
        0,
        0.24,
        0
      ]
    },
    {
      "t": "box",
      "n": "wind-ripple-3",
      "p": [
        0.06999999999999995,
        0.3140370544440921,
        0.13999999999999996
      ],
      "s": [
        0.18,
        0.013,
        0.42
      ],
      "c": 15124109,
      "rot": [
        0,
        0.24,
        0
      ]
    },
    {
      "t": "box",
      "n": "wind-ripple-4",
      "p": [
        0.30999999999999994,
        0.2553300685257936,
        0.03999999999999998
      ],
      "s": [
        0.18,
        0.013,
        0.42
      ],
      "c": 12228970,
      "rot": [
        0,
        0.24,
        0
      ]
    },
    {
      "t": "box",
      "n": "wind-ripple-5",
      "p": [
        0.5499999999999999,
        0.19945580037536575,
        -0.06
      ],
      "s": [
        0.18,
        0.013,
        0.42
      ],
      "c": 15124109,
      "rot": [
        0,
        0.24,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dry-shrub-main-0",
      "from": [
        -0.6,
        0.31,
        -0.24
      ],
      "to": [
        -0.565,
        0.57,
        -0.2
      ],
      "r": 0.013,
      "c": 8418894
    },
    {
      "t": "rod",
      "n": "dry-shrub-side-0",
      "from": [
        -0.58,
        0.44,
        -0.22
      ],
      "to": [
        -0.44999999999999996,
        0.49,
        -0.29
      ],
      "r": 0.01,
      "c": 8418894
    },
    {
      "t": "rod",
      "n": "dry-shrub-main-1",
      "from": [
        0.76,
        0.31,
        -0.24
      ],
      "to": [
        0.795,
        0.57,
        -0.2
      ],
      "r": 0.013,
      "c": 8418894
    },
    {
      "t": "rod",
      "n": "dry-shrub-side-1",
      "from": [
        0.78,
        0.44,
        -0.22
      ],
      "to": [
        0.91,
        0.49,
        -0.29
      ],
      "r": 0.01,
      "c": 8418894
    }
  ]
});
}
