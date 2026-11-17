import { buildRecipe } from './recipe_engine.js';
/** Airport Baggage Tug / 机场行李牵引车: original authored procedural scene prop. */
export const assetMeta = {
  "id": "vehicles.airport-baggage-tug.001",
  "slug": "airport-baggage-tug",
  "title": "Airport Baggage Tug",
  "title_zh": "机场行李牵引车",
  "summary": "Small airport tug with tow hitch, cabin, orange safety beacon and four wheels",
  "category": "vehicles",
  "tags": [
    "airport",
    "baggage",
    "tug"
  ],
  "dimensions_m": [
    1.6,
    1.79,
    2.44
  ],
  "generator": "createAirportBaggageTug",
  "source_path": "src/models/airport_baggage_tug.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/airport-baggage-tug.webp"
};
export function createAirportBaggageTug() { return buildRecipe({
  "title": "Airport Baggage Tug",
  "dimensions": [
    1.6,
    1.79,
    2.44
  ],
  "parts": [
    {
      "t": "box",
      "n": "low-chassis",
      "p": [
        0,
        0.46,
        0
      ],
      "s": [
        1.49,
        0.36,
        2.32
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "driver-cab",
      "p": [
        0,
        1.16,
        0.38
      ],
      "s": [
        1.31,
        1.17,
        1.13
      ],
      "c": 13743991
    },
    {
      "t": "box",
      "n": "windscreen",
      "p": [
        0,
        1.29,
        1.02
      ],
      "s": [
        1.06,
        0.59,
        0.04
      ],
      "c": 6458780
    },
    {
      "t": "box",
      "n": "side-window-0",
      "p": [
        -0.67,
        1.3,
        0.43
      ],
      "s": [
        0.036,
        0.52,
        0.71
      ],
      "c": 6063000
    },
    {
      "t": "cylinder",
      "n": "road-wheel-0-0",
      "p": [
        -0.72,
        0.35,
        -0.79
      ],
      "s": [
        0.62,
        0.18,
        0.62
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
      "n": "hub-0-0",
      "p": [
        -0.84,
        0.35,
        -0.79
      ],
      "s": [
        0.24,
        0.19,
        0.24
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-0-1",
      "p": [
        -0.72,
        0.35,
        0.76
      ],
      "s": [
        0.62,
        0.18,
        0.62
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
      "n": "hub-0-1",
      "p": [
        -0.84,
        0.35,
        0.76
      ],
      "s": [
        0.24,
        0.19,
        0.24
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "side-window-1",
      "p": [
        0.67,
        1.3,
        0.43
      ],
      "s": [
        0.036,
        0.52,
        0.71
      ],
      "c": 6063000
    },
    {
      "t": "cylinder",
      "n": "road-wheel-1-0",
      "p": [
        0.72,
        0.35,
        -0.79
      ],
      "s": [
        0.62,
        0.18,
        0.62
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
      "n": "hub-1-0",
      "p": [
        0.84,
        0.35,
        -0.79
      ],
      "s": [
        0.24,
        0.19,
        0.24
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "road-wheel-1-1",
      "p": [
        0.72,
        0.35,
        0.76
      ],
      "s": [
        0.62,
        0.18,
        0.62
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
      "n": "hub-1-1",
      "p": [
        0.84,
        0.35,
        0.76
      ],
      "s": [
        0.24,
        0.19,
        0.24
      ],
      "c": 9215136,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "front-bumper",
      "p": [
        0,
        0.54,
        1.2
      ],
      "s": [
        1.33,
        0.22,
        0.14
      ],
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "tow-hitch",
      "from": [
        0,
        0.38,
        -1.11
      ],
      "to": [
        0,
        0.31,
        -1.43
      ],
      "r": 0.04,
      "c": 9215136
    },
    {
      "t": "torus",
      "n": "tow-eye",
      "p": [
        0,
        0.31,
        -1.45
      ],
      "s": [
        0.23,
        0.23,
        0.23
      ],
      "c": 3753552,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "rotating-beacon",
      "p": [
        0,
        1.79,
        0.19
      ],
      "s": [
        0.15,
        0.12,
        0.15
      ],
      "c": 15052366
    },
    {
      "t": "box",
      "n": "cargo-bed",
      "p": [
        0,
        0.73,
        -0.69
      ],
      "s": [
        1.13,
        0.08,
        0.71
      ],
      "c": 9597265
    },
    {
      "t": "box",
      "n": "steering-panel",
      "p": [
        0,
        1.04,
        0.56
      ],
      "s": [
        0.36,
        0.08,
        0.27
      ],
      "c": 3753552
    }
  ]
}); }
