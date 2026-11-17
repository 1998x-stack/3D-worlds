import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.carpenters-hand-saw.001",
  "slug": "carpenters-hand-saw",
  "title": "Carpenter Hand Saw",
  "title_zh": "木工手锯",
  "summary": "Riveted wooden grip and traditional toothed steel hand saw.",
  "category": "tools",
  "tags": [
    "saw",
    "carpentry",
    "woodworking"
  ],
  "dimensions_m": [
    0.67,
    0.26,
    0.1
  ],
  "generator": "createCarpentersHandSaw",
  "source_path": "src/models/carpenters_hand_saw.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/carpenters-hand-saw.webp"
};
export function createCarpentersHandSaw() {
 return buildRecipe({
  "title": "Carpenter Hand Saw",
  "dimensions": [
    0.67,
    0.26,
    0.1
  ],
  "parts": [
    {
      "t": "box",
      "n": "blade",
      "p": [
        0.05,
        0.11,
        0
      ],
      "s": [
        0.55,
        0.13,
        0.042
      ],
      "c": 9018268
    },
    {
      "t": "box",
      "n": "blade-back",
      "p": [
        0.03,
        0.19,
        0
      ],
      "s": [
        0.59,
        0.025,
        0.055
      ],
      "c": 11122616
    },
    {
      "t": "box",
      "n": "timber-handle",
      "p": [
        -0.29,
        0.19,
        0
      ],
      "s": [
        0.21,
        0.22,
        0.088
      ],
      "c": 9728853
    },
    {
      "t": "box",
      "n": "handle-cutout",
      "p": [
        -0.29,
        0.18,
        0.047
      ],
      "s": [
        0.092,
        0.09,
        0.012
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "tip-guard",
      "p": [
        0.335,
        0.11,
        0
      ],
      "s": [
        0.045,
        0.13,
        0.062
      ],
      "c": 3161155
    },
    {
      "t": "cone",
      "n": "tooth-0",
      "p": [
        -0.21,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-1",
      "p": [
        -0.16699999999999998,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-2",
      "p": [
        -0.124,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-3",
      "p": [
        -0.08099999999999999,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-4",
      "p": [
        -0.038000000000000006,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-5",
      "p": [
        0.004999999999999977,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-6",
      "p": [
        0.048000000000000015,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-7",
      "p": [
        0.091,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-8",
      "p": [
        0.13399999999999998,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-9",
      "p": [
        0.17699999999999996,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cone",
      "n": "tooth-10",
      "p": [
        0.21999999999999995,
        0.034,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.038
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "cylinder",
      "n": "rivet-0",
      "p": [
        -0.36,
        0.21,
        0.057
      ],
      "s": [
        0.035,
        0.016,
        0.035
      ],
      "c": 12426080,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "rivet-1",
      "p": [
        -0.22,
        0.21,
        0.057
      ],
      "s": [
        0.035,
        0.016,
        0.035
      ],
      "c": 12426080,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
});
}
