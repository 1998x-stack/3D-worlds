import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Electric Harbor Tugboat / 电动港口拖轮. */
export const assetMeta = {
  "id": "vehicles.electric-harbor-tugboat.001",
  "slug": "electric-harbor-tugboat",
  "title": "Electric Harbor Tugboat",
  "title_zh": "电动港口拖轮",
  "summary": "Compact battery-electric harbor assist vessel with wheelhouse, fenders and tow bollard",
  "category": "vehicles",
  "tags": [
    "electric",
    "harbor",
    "tugboat",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.85,
    2.7,
    4.35
  ],
  "generator": "createElectricHarborTugboat",
  "source_path": "src/models/electric_harbor_tugboat.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/electric-harbor-tugboat.webp",
  "accent": "#3e596e"
};
export function createElectricHarborTugboat() { return buildRecipe({
  "title": "Electric Harbor Tugboat",
  "dimensions": [
    2.85,
    2.7,
    4.35
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "tugboat-displacement-hull",
      "p": [
        0,
        0.58,
        0
      ],
      "s": [
        2.44,
        0.73,
        3.74
      ],
      "c": 7249061
    },
    {
      "t": "box",
      "n": "wheelhouse-cabin",
      "p": [
        0,
        1.63,
        -0.29
      ],
      "s": [
        1.45,
        1.51,
        1.37
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "navigation-bridge-glass",
      "p": [
        0,
        1.94,
        0.43
      ],
      "s": [
        1.16,
        0.59,
        0.04
      ],
      "c": 4086126
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender--1-0",
      "p": [
        -1.18,
        0.65,
        -1.37
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender--1-1",
      "p": [
        -1.18,
        0.65,
        -0.6700000000000002
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender--1-2",
      "p": [
        -1.18,
        0.65,
        0.029999999999999805
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender--1-3",
      "p": [
        -1.18,
        0.65,
        0.7299999999999995
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender--1-4",
      "p": [
        -1.18,
        0.65,
        1.4299999999999997
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "battery-enclosure--1",
      "p": [
        -0.74,
        1.12,
        -0.95
      ],
      "s": [
        0.5,
        0.38,
        0.66
      ],
      "c": 4086126
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender-1-0",
      "p": [
        1.18,
        0.65,
        -1.37
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender-1-1",
      "p": [
        1.18,
        0.65,
        -0.6700000000000002
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender-1-2",
      "p": [
        1.18,
        0.65,
        0.029999999999999805
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender-1-3",
      "p": [
        1.18,
        0.65,
        0.7299999999999995
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "sphere",
      "n": "rubber-hull-fender-1-4",
      "p": [
        1.18,
        0.65,
        1.4299999999999997
      ],
      "s": [
        0.19,
        0.21,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "battery-enclosure-1",
      "p": [
        0.74,
        1.12,
        -0.95
      ],
      "s": [
        0.5,
        0.38,
        0.66
      ],
      "c": 4086126
    },
    {
      "t": "torus",
      "n": "bow-rubber-bumper",
      "p": [
        0,
        0.5,
        1.81
      ],
      "s": [
        1.4,
        0.25,
        0.36
      ],
      "c": 2372676,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "tow-bollard",
      "p": [
        0,
        1.18,
        -1.44
      ],
      "s": [
        0.2,
        0.28,
        0.2
      ],
      "c": 2372676
    },
    {
      "t": "rod",
      "n": "marine-radar-mast",
      "from": [
        0,
        2.2,
        -0.5
      ],
      "to": [
        0,
        2.64,
        -0.5
      ],
      "r": 0.038,
      "c": 4086126
    },
    {
      "t": "box",
      "n": "radar-navigation-panel",
      "p": [
        0,
        2.65,
        -0.5
      ],
      "s": [
        0.42,
        0.09,
        0.14
      ],
      "c": 13284199
    }
  ]
}); }
