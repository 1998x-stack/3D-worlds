import { buildRecipe } from './recipe_engine.js';
/** Hydraulic Floor Jack — source-backed original low-poly prop. */
export const assetMeta = {
  "id": "tools.hydraulic-floor-jack.001",
  "slug": "hydraulic-floor-jack",
  "title": "Hydraulic Floor Jack",
  "title_zh": "液压汽车地牛千斤顶",
  "summary": "Low-profile wheeled car jack with hydraulic cylinder, lifting saddle and long pumping handle",
  "category": "tools",
  "tags": [
    "jack",
    "automotive",
    "hydraulic"
  ],
  "dimensions_m": [
    0.47,
    0.5,
    0.99
  ],
  "generator": "createHydraulicFloorJack",
  "source_path": "src/models/hydraulic_floor_jack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/hydraulic-floor-jack.webp"
};
export function createHydraulicFloorJack() { return buildRecipe({
  "title": "Hydraulic Floor Jack",
  "dimensions": [
    0.47,
    0.5,
    0.99
  ],
  "parts": [
    {
      "t": "box",
      "n": "steel-chassis",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.46,
        0.22,
        0.89
      ],
      "c": 5863817
    },
    {
      "t": "cylinder",
      "n": "caster-0-0",
      "p": [
        -0.19,
        0.075,
        -0.31
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "caster-0-1",
      "p": [
        -0.19,
        0.075,
        0.31
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "caster-1-0",
      "p": [
        0.19,
        0.075,
        -0.31
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "caster-1-1",
      "p": [
        0.19,
        0.075,
        0.31
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "lift-arm",
      "p": [
        0,
        0.24,
        0.19
      ],
      "s": [
        0.2,
        0.14,
        0.53
      ],
      "c": 9413027,
      "rot": [
        0.25,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "lifting-saddle",
      "p": [
        0,
        0.42,
        0.33
      ],
      "s": [
        0.2,
        0.05,
        0.2
      ],
      "c": 3753034
    },
    {
      "t": "cylinder",
      "n": "hydraulic-cylinder",
      "p": [
        0,
        0.19,
        -0.19
      ],
      "s": [
        0.17,
        0.31,
        0.17
      ],
      "c": 12689765,
      "rot": [
        0.65,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "pumping-lever",
      "from": [
        0,
        0.17,
        -0.37
      ],
      "to": [
        0,
        0.48,
        -0.82
      ],
      "r": 0.034,
      "c": 9413027
    },
    {
      "t": "cylinder",
      "n": "handle-grip",
      "p": [
        0,
        0.48,
        -0.82
      ],
      "s": [
        0.075,
        0.13,
        0.075
      ],
      "c": 3753034,
      "rot": [
        0.6,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pressure-release-knob",
      "p": [
        0.15,
        0.23,
        -0.24
      ],
      "s": [
        0.08,
        0.065,
        0.06
      ],
      "c": 12689765
    },
    {
      "t": "box",
      "n": "fork-tip",
      "p": [
        0,
        0.15,
        0.42
      ],
      "s": [
        0.27,
        0.09,
        0.16
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "lower-brace-0",
      "p": [
        -0.15,
        0.14,
        0.12
      ],
      "s": [
        0.045,
        0.08,
        0.68
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "lower-brace-1",
      "p": [
        0.15,
        0.14,
        0.12
      ],
      "s": [
        0.045,
        0.08,
        0.68
      ],
      "c": 3753034
    }
  ]
}); }
