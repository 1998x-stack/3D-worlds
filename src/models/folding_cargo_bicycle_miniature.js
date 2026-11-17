import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Folding Cargo Bicycle Miniature / 折叠式货运自行车模型. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "vehicles.folding-cargo-bicycle-miniature.001",
  "slug": "folding-cargo-bicycle-miniature",
  "title": "Folding Cargo Bicycle Miniature",
  "title_zh": "折叠式货运自行车模型",
  "summary": "Nonfunctional folding bicycle scale miniature with front cargo basket and spoked wheels",
  "category": "vehicles",
  "tags": [
    "folding",
    "cargo",
    "bicycle",
    "miniature",
    "vehicles",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.46,
    0.27,
    0.16
  ],
  "generator": "createFoldingCargoBicycleMiniature",
  "source_path": "src/models/folding_cargo_bicycle_miniature.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/folding-cargo-bicycle-miniature.webp",
  "accent": "#df8468"
};
export function createFoldingCargoBicycleMiniature() { return buildRecipe({
  "title": "Folding Cargo Bicycle Miniature",
  "dimensions": [
    0.46,
    0.27,
    0.16
  ],
  "parts": [
    {
      "t": "torus",
      "n": "wheel-rim-0",
      "p": [
        0,
        0.58,
        -1.22
      ],
      "s": [
        1.24,
        1.24,
        0.33
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-0",
      "p": [
        0,
        0.58,
        -1.22
      ],
      "s": [
        0.2,
        0.2,
        0.2
      ],
      "c": 7177108,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "spoke-0-0",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.58,
        -0.7
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-0-1",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        -0.96
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-0-2",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        -1.48
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-0-3",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.5800000000000001,
        -1.74
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-0-4",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.12966679003209197,
        -1.4800000000000002
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-0-5",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.12966679003209186,
        -0.96
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "torus",
      "n": "wheel-rim-1",
      "p": [
        0,
        0.58,
        1.22
      ],
      "s": [
        1.24,
        1.24,
        0.33
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1",
      "p": [
        0,
        0.58,
        1.22
      ],
      "s": [
        0.2,
        0.2,
        0.2
      ],
      "c": 7177108,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "spoke-1-0",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.58,
        1.74
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-1-1",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        1.48
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-1-2",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        0.9600000000000001
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-1-3",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.5800000000000001,
        0.7
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-1-4",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.12966679003209197,
        0.9599999999999997
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "spoke-1-5",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.12966679003209186,
        1.48
      ],
      "r": 0.023,
      "c": 7177108
    },
    {
      "t": "rod",
      "n": "frame-low",
      "from": [
        0,
        0.6,
        -1.22
      ],
      "to": [
        0,
        0.76,
        0
      ],
      "r": 0.08,
      "c": 7915949
    },
    {
      "t": "rod",
      "n": "frame-high",
      "from": [
        0,
        0.76,
        0
      ],
      "to": [
        0,
        1.31,
        -0.38
      ],
      "r": 0.08,
      "c": 7915949
    },
    {
      "t": "rod",
      "n": "seat-tube",
      "from": [
        0,
        1.31,
        -0.38
      ],
      "to": [
        0,
        0.6,
        -1.22
      ],
      "r": 0.06,
      "c": 7915949
    },
    {
      "t": "rod",
      "n": "front-fork",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        1.57,
        0.94
      ],
      "r": 0.065,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        1.53,
        -0.44
      ],
      "s": [
        0.42,
        0.1,
        0.56
      ],
      "c": 3229017
    },
    {
      "t": "rod",
      "n": "handlebar",
      "from": [
        -0.41,
        1.7,
        0.95
      ],
      "to": [
        0.41,
        1.7,
        0.95
      ],
      "r": 0.065,
      "c": 3229017
    },
    {
      "t": "box",
      "n": "cargo-basket",
      "p": [
        0,
        1.03,
        0.46
      ],
      "s": [
        0.88,
        0.47,
        0.65
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "basket-slat-0",
      "p": [
        -0.35,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "basket-slat-1",
      "p": [
        -0.11999999999999997,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "basket-slat-2",
      "p": [
        0.11000000000000004,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "basket-slat-3",
      "p": [
        0.3400000000000001,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325
    }
  ]
}); }
