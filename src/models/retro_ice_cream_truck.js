import { buildRecipe } from './recipe_engine.js';
/** Retro Ice Cream Truck / 复古冰淇淋售卖车: original authored procedural scene prop. */
export const assetMeta = {
  "id": "vehicles.retro-ice-cream-truck.001",
  "slug": "retro-ice-cream-truck",
  "title": "Retro Ice Cream Truck",
  "title_zh": "复古冰淇淋售卖车",
  "summary": "Pastel mobile ice cream van with service hatch, striped canopy, freezer counter and wheels",
  "category": "vehicles",
  "tags": [
    "ice-cream",
    "truck",
    "street-food"
  ],
  "dimensions_m": [
    2.13,
    2.61,
    4.02
  ],
  "generator": "createRetroIceCreamTruck",
  "source_path": "src/models/retro_ice_cream_truck.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/retro-ice-cream-truck.webp"
};
export function createRetroIceCreamTruck() { return buildRecipe({
  "title": "Retro Ice Cream Truck",
  "dimensions": [
    2.13,
    2.61,
    4.02
  ],
  "parts": [
    {
      "t": "box",
      "n": "food-truck-shell",
      "p": [
        0,
        1.36,
        -0.3
      ],
      "s": [
        2.05,
        2.2,
        2.82
      ],
      "c": 15127999
    },
    {
      "t": "box",
      "n": "driver-cab",
      "p": [
        0,
        1.15,
        1.28
      ],
      "s": [
        2.05,
        1.65,
        1.22
      ],
      "c": 9091009
    },
    {
      "t": "box",
      "n": "windshield",
      "p": [
        0,
        1.52,
        1.92
      ],
      "s": [
        1.65,
        0.67,
        0.032
      ],
      "c": 4814989
    },
    {
      "t": "box",
      "n": "roof-sign",
      "p": [
        0,
        2.53,
        -0.18
      ],
      "s": [
        1.3,
        0.2,
        0.62
      ],
      "c": 15513267
    },
    {
      "t": "cylinder",
      "n": "truck-wheel-0-0",
      "p": [
        -0.96,
        0.4,
        -1.15
      ],
      "s": [
        0.74,
        0.22,
        0.74
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-0-0",
      "p": [
        -1.08,
        0.4,
        -1.15
      ],
      "s": [
        0.32,
        0.23,
        0.32
      ],
      "c": 15197659,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "truck-wheel-0-1",
      "p": [
        -0.96,
        0.4,
        1.25
      ],
      "s": [
        0.74,
        0.22,
        0.74
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-0-1",
      "p": [
        -1.08,
        0.4,
        1.25
      ],
      "s": [
        0.32,
        0.23,
        0.32
      ],
      "c": 15197659,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "two-tone-stripe-0",
      "p": [
        -1.039,
        0.88,
        -0.42
      ],
      "s": [
        0.024,
        0.16,
        2.57
      ],
      "c": 14984619
    },
    {
      "t": "cylinder",
      "n": "truck-wheel-1-0",
      "p": [
        0.96,
        0.4,
        -1.15
      ],
      "s": [
        0.74,
        0.22,
        0.74
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1-0",
      "p": [
        1.08,
        0.4,
        -1.15
      ],
      "s": [
        0.32,
        0.23,
        0.32
      ],
      "c": 15197659,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "truck-wheel-1-1",
      "p": [
        0.96,
        0.4,
        1.25
      ],
      "s": [
        0.74,
        0.22,
        0.74
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1-1",
      "p": [
        1.08,
        0.4,
        1.25
      ],
      "s": [
        0.32,
        0.23,
        0.32
      ],
      "c": 15197659,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "two-tone-stripe-1",
      "p": [
        1.039,
        0.88,
        -0.42
      ],
      "s": [
        0.024,
        0.16,
        2.57
      ],
      "c": 14984619
    },
    {
      "t": "box",
      "n": "service-window",
      "p": [
        1.04,
        1.56,
        -0.56
      ],
      "s": [
        0.025,
        0.91,
        1.35
      ],
      "c": 6195347
    },
    {
      "t": "box",
      "n": "service-ledge",
      "p": [
        1.18,
        1.03,
        -0.57
      ],
      "s": [
        0.3,
        0.08,
        1.56
      ],
      "c": 9597265
    },
    {
      "t": "box",
      "n": "striped-awning",
      "p": [
        1.19,
        2.15,
        -0.57
      ],
      "s": [
        0.34,
        0.08,
        1.59
      ],
      "c": 14786729
    },
    {
      "t": "box",
      "n": "awning-band-0",
      "p": [
        1.35,
        2.2,
        -1.19
      ],
      "s": [
        0.31,
        0.012,
        0.13
      ],
      "c": 15197659
    },
    {
      "t": "box",
      "n": "awning-band-1",
      "p": [
        1.35,
        2.2,
        -0.8699999999999999
      ],
      "s": [
        0.31,
        0.012,
        0.13
      ],
      "c": 15197659
    },
    {
      "t": "box",
      "n": "awning-band-2",
      "p": [
        1.35,
        2.2,
        -0.5499999999999999
      ],
      "s": [
        0.31,
        0.012,
        0.13
      ],
      "c": 15197659
    },
    {
      "t": "box",
      "n": "awning-band-3",
      "p": [
        1.35,
        2.2,
        -0.22999999999999998
      ],
      "s": [
        0.31,
        0.012,
        0.13
      ],
      "c": 15197659
    },
    {
      "t": "box",
      "n": "awning-band-4",
      "p": [
        1.35,
        2.2,
        0.09000000000000008
      ],
      "s": [
        0.31,
        0.012,
        0.13
      ],
      "c": 15197659
    },
    {
      "t": "cone",
      "n": "display-icecream-0",
      "p": [
        1.16,
        1.21,
        -0.21
      ],
      "s": [
        0.16,
        0.29,
        0.17
      ],
      "c": 15714720
    },
    {
      "t": "cone",
      "n": "display-icecream-1",
      "p": [
        1.16,
        1.21,
        0.04
      ],
      "s": [
        0.16,
        0.29,
        0.17
      ],
      "c": 11916218
    },
    {
      "t": "cone",
      "n": "display-icecream-2",
      "p": [
        1.16,
        1.21,
        0.29
      ],
      "s": [
        0.16,
        0.29,
        0.17
      ],
      "c": 14791085
    },
    {
      "t": "box",
      "n": "front-grille",
      "p": [
        0,
        0.83,
        1.94
      ],
      "s": [
        1.22,
        0.27,
        0.05
      ],
      "c": 9215136
    },
    {
      "t": "sphere",
      "n": "headlight-0",
      "p": [
        -0.8,
        0.98,
        1.93
      ],
      "s": [
        0.14,
        0.1,
        0.04
      ],
      "c": 15197659
    },
    {
      "t": "sphere",
      "n": "headlight-1",
      "p": [
        0.8,
        0.98,
        1.93
      ],
      "s": [
        0.14,
        0.1,
        0.04
      ],
      "c": 15197659
    }
  ]
}); }
