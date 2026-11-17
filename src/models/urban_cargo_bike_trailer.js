import { buildRecipe } from './recipe_engine.js';
/** Urban Cargo Bike Trailer / 城市货运自行车挂斗: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "vehicles.urban-cargo-bike-trailer.001",
  "slug": "urban-cargo-bike-trailer",
  "title": "Urban Cargo Bike Trailer",
  "title_zh": "城市货运自行车挂斗",
  "summary": "Pedal cargo bicycle with rear delivery trailer, box and spoke wheels",
  "category": "vehicles",
  "tags": [
    "urban",
    "cargo",
    "bike",
    "trailer",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.32,
    1.5,
    2.9
  ],
  "generator": "createUrbanCargoBikeTrailer",
  "source_path": "src/models/urban_cargo_bike_trailer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/urban-cargo-bike-trailer.webp",
  "accent": "#496780"
};
export function createUrbanCargoBikeTrailer() { return buildRecipe({
  "title": "Urban Cargo Bike Trailer",
  "dimensions": [
    1.32,
    1.5,
    2.9
  ],
  "parts": [
    {
      "t": "rod",
      "n": "bike-main-frame",
      "from": [
        -0.12,
        0.68,
        0.1
      ],
      "to": [
        0.18,
        1.06,
        0.72
      ],
      "r": 0.045,
      "c": 14721613
    },
    {
      "t": "rod",
      "n": "bike-top-bar",
      "from": [
        -0.12,
        0.68,
        0.1
      ],
      "to": [
        0.62,
        0.68,
        0.1
      ],
      "r": 0.045,
      "c": 14721613
    },
    {
      "t": "torus",
      "n": "cargo-bike-wheel--0.92",
      "p": [
        0,
        0.44,
        -0.92
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13227480,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "cargo-bike-wheel-0.4",
      "p": [
        0,
        0.44,
        0.4
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13227480,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "cargo-bike-wheel-1.06",
      "p": [
        0,
        0.44,
        1.06
      ],
      "s": [
        0.94,
        0.94,
        0.94
      ],
      "c": 13227480,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "box",
      "n": "delivery-hopper",
      "p": [
        0,
        1.04,
        -0.58
      ],
      "s": [
        1.1,
        0.7,
        0.88
      ],
      "c": 4810624
    },
    {
      "t": "box",
      "n": "weatherproof-lid",
      "p": [
        0,
        1.42,
        -0.58
      ],
      "s": [
        1.13,
        0.08,
        0.91
      ],
      "c": 2570051
    },
    {
      "t": "rod",
      "n": "steering-tube",
      "from": [
        0.1,
        0.7,
        0.86
      ],
      "to": [
        0.12,
        1.45,
        0.91
      ],
      "r": 0.04,
      "c": 14721613
    },
    {
      "t": "rod",
      "n": "bike-handlebar",
      "from": [
        -0.28,
        1.45,
        0.91
      ],
      "to": [
        0.39,
        1.45,
        0.91
      ],
      "r": 0.027,
      "c": 13227480
    },
    {
      "t": "box",
      "n": "trailer-side--1",
      "p": [
        -0.52,
        0.7,
        -0.58
      ],
      "s": [
        0.06,
        0.51,
        0.94
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "trailer-side-1",
      "p": [
        0.52,
        0.7,
        -0.58
      ],
      "s": [
        0.06,
        0.51,
        0.94
      ],
      "c": 2570051
    }
  ]
}); }
