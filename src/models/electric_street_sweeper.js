import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Electric Street Sweeper / 电动道路清扫车. */
export const assetMeta = {
  "id": "vehicles.electric-street-sweeper.001",
  "slug": "electric-street-sweeper",
  "title": "Electric Street Sweeper",
  "title_zh": "电动道路清扫车",
  "summary": "Battery electric street sweeper with brushes, driver cab and suction hopper",
  "category": "vehicles",
  "tags": [
    "electric",
    "street",
    "sweeper",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.25,
    2.85,
    4.7
  ],
  "generator": "createElectricStreetSweeper",
  "source_path": "src/models/electric_street_sweeper.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/electric-street-sweeper.webp",
  "accent": "#73aab3"
};
export function createElectricStreetSweeper() { return buildRecipe({
  "title": "Electric Street Sweeper",
  "dimensions": [
    2.25,
    2.85,
    4.7
  ],
  "parts": [
    {
      "t": "box",
      "n": "vehicle-frame",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        1.86,
        0.75,
        3.34
      ],
      "c": 3492699
    },
    {
      "t": "box",
      "n": "vehicle-cabin",
      "p": [
        0,
        1.68,
        0.91
      ],
      "s": [
        1.7,
        1.55,
        1.42
      ],
      "c": 7580339
    },
    {
      "t": "box",
      "n": "windscreen",
      "p": [
        0,
        1.96,
        1.66
      ],
      "s": [
        1.35,
        0.68,
        0.055
      ],
      "c": 14530402
    },
    {
      "t": "cylinder",
      "n": "wheel--1--1.14",
      "p": [
        -0.99,
        0.36,
        -1.14
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel--1-1.21",
      "p": [
        -0.99,
        0.36,
        1.21
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1--1.14",
      "p": [
        0.99,
        0.36,
        -1.14
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1-1.21",
      "p": [
        0.99,
        0.36,
        1.21
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "sweeper-waste-hopper",
      "p": [
        0,
        1.45,
        -0.83
      ],
      "s": [
        1.7,
        1.28,
        1.58
      ],
      "c": 7580339
    },
    {
      "t": "cylinder",
      "n": "street-sweep-brush--1",
      "p": [
        -1.08,
        0.19,
        0.72
      ],
      "s": [
        0.71,
        0.17,
        0.71
      ],
      "c": 14530402
    },
    {
      "t": "rod",
      "n": "brush-bristle--1-0",
      "from": [
        -1.08,
        0.16,
        0.72
      ],
      "to": [
        -1.3800000000000001,
        0.1,
        0.72
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle--1-1",
      "from": [
        -1.08,
        0.16,
        0.72
      ],
      "to": [
        -1.242090691760442,
        0.1,
        0.9471971658981321
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle--1-2",
      "from": [
        -1.08,
        0.16,
        0.72
      ],
      "to": [
        -0.9551559490358573,
        0.1,
        0.965510305242934
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle--1-3",
      "from": [
        -1.08,
        0.16,
        0.72
      ],
      "to": [
        -0.7830022510198664,
        0.1,
        0.7581024021761641
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle--1-4",
      "from": [
        -1.08,
        0.16,
        0.72
      ],
      "to": [
        -0.8839069137409165,
        0.1,
        0.5156633262668593
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle--1-5",
      "from": [
        -1.08,
        0.16,
        0.72
      ],
      "to": [
        -1.165098655638968,
        0.1,
        0.4610904458409526
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "cylinder",
      "n": "street-sweep-brush-1",
      "p": [
        1.08,
        0.19,
        0.72
      ],
      "s": [
        0.71,
        0.17,
        0.71
      ],
      "c": 14530402
    },
    {
      "t": "rod",
      "n": "brush-bristle-1-0",
      "from": [
        1.08,
        0.16,
        0.72
      ],
      "to": [
        1.3800000000000001,
        0.1,
        0.72
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle-1-1",
      "from": [
        1.08,
        0.16,
        0.72
      ],
      "to": [
        1.242090691760442,
        0.1,
        0.9471971658981321
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle-1-2",
      "from": [
        1.08,
        0.16,
        0.72
      ],
      "to": [
        0.9551559490358573,
        0.1,
        0.965510305242934
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle-1-3",
      "from": [
        1.08,
        0.16,
        0.72
      ],
      "to": [
        0.7830022510198664,
        0.1,
        0.7581024021761641
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle-1-4",
      "from": [
        1.08,
        0.16,
        0.72
      ],
      "to": [
        0.8839069137409165,
        0.1,
        0.5156633262668593
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "brush-bristle-1-5",
      "from": [
        1.08,
        0.16,
        0.72
      ],
      "to": [
        1.165098655638968,
        0.1,
        0.4610904458409526
      ],
      "r": 0.014,
      "c": 14080733
    },
    {
      "t": "box",
      "n": "debris-suction-inlet",
      "p": [
        0,
        0.18,
        1.4
      ],
      "s": [
        0.76,
        0.17,
        0.58
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "sweeper-battery-pack",
      "p": [
        0,
        2.49,
        0.71
      ],
      "s": [
        0.82,
        0.21,
        0.83
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "hopper-vent-0",
      "p": [
        -0.63,
        1.61,
        -1.68
      ],
      "s": [
        0.17,
        0.22,
        0.04
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "hopper-vent-1",
      "p": [
        -0.38,
        1.61,
        -1.68
      ],
      "s": [
        0.17,
        0.22,
        0.04
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "hopper-vent-2",
      "p": [
        -0.13,
        1.61,
        -1.68
      ],
      "s": [
        0.17,
        0.22,
        0.04
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "hopper-vent-3",
      "p": [
        0.12,
        1.61,
        -1.68
      ],
      "s": [
        0.17,
        0.22,
        0.04
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "hopper-vent-4",
      "p": [
        0.37,
        1.61,
        -1.68
      ],
      "s": [
        0.17,
        0.22,
        0.04
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "hopper-vent-5",
      "p": [
        0.62,
        1.61,
        -1.68
      ],
      "s": [
        0.17,
        0.22,
        0.04
      ],
      "c": 14080733
    }
  ]
}); }
