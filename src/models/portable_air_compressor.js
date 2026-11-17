import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.portable-air-compressor.001",
  "slug": "portable-air-compressor",
  "title": "Portable Air Compressor",
  "title_zh": "便携式空气压缩机",
  "summary": "Workshop air compressor with pressure tank, gauge, hose coil, motor and wheels",
  "category": "tools",
  "tags": [
    "compressor",
    "pneumatic",
    "workshop"
  ],
  "dimensions_m": [
    0.77,
    0.64,
    0.47
  ],
  "generator": "createPortableAirCompressor",
  "source_path": "src/models/portable_air_compressor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/portable-air-compressor.webp"
};
export function createPortableAirCompressor() { return buildRecipe({
  "title": "Portable Air Compressor",
  "dimensions": [
    0.77,
    0.64,
    0.47
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "compressed-air-tank",
      "p": [
        0,
        0.27,
        0
      ],
      "s": [
        0.43,
        0.66,
        0.43
      ],
      "c": 12148566,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "motor-housing",
      "p": [
        0,
        0.47,
        -0.03
      ],
      "s": [
        0.31,
        0.28,
        0.31
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "pressure-dial",
      "p": [
        0.28,
        0.47,
        0.12
      ],
      "s": [
        0.16,
        0.045,
        0.16
      ],
      "c": 15133152,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dial-needle",
      "from": [
        0.28,
        0.47,
        0.148
      ],
      "to": [
        0.34,
        0.52,
        0.149
      ],
      "r": 0.008,
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "rubber-wheel-0",
      "p": [
        -0.29,
        0.15,
        -0.15
      ],
      "s": [
        0.27,
        0.1,
        0.27
      ],
      "c": 3490634,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "rubber-wheel-1",
      "p": [
        0.29,
        0.15,
        -0.15
      ],
      "s": [
        0.27,
        0.1,
        0.27
      ],
      "c": 3490634,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "carry-handle",
      "from": [
        -0.26,
        0.64,
        0
      ],
      "to": [
        0.26,
        0.64,
        0
      ],
      "r": 0.036,
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "hose-start",
      "from": [
        0.26,
        0.36,
        0.1
      ],
      "to": [
        0.41,
        0.55,
        0.24
      ],
      "r": 0.022,
      "c": 3490634
    },
    {
      "t": "torus",
      "n": "hose-coil-0",
      "p": [
        0.37,
        0.43,
        0.24
      ],
      "s": [
        0.37,
        0.35,
        0.36
      ],
      "c": 3490634,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "hose-coil-1",
      "p": [
        0.37,
        0.43,
        0.24
      ],
      "s": [
        0.37,
        0.35,
        0.36
      ],
      "c": 3490634,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "hose-coil-2",
      "p": [
        0.37,
        0.43,
        0.24
      ],
      "s": [
        0.37,
        0.35,
        0.36
      ],
      "c": 3490634,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hose-nozzle",
      "p": [
        0.49,
        0.3,
        0.22
      ],
      "s": [
        0.16,
        0.07,
        0.08
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "tank-stand-0",
      "p": [
        -0.23,
        0.045,
        0.12
      ],
      "s": [
        0.11,
        0.09,
        0.13
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "tank-stand-1",
      "p": [
        0.23,
        0.045,
        0.12
      ],
      "s": [
        0.11,
        0.09,
        0.13
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "on-off-switch",
      "p": [
        -0.14,
        0.57,
        0.13
      ],
      "s": [
        0.1,
        0.07,
        0.024
      ],
      "c": 5540513
    }
  ]
}); }
