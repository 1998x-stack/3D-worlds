import { buildRecipe } from './recipe_engine.js';
/** Agricultural Field Tractor — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "vehicles.agricultural-field-tractor.001",
  "slug": "agricultural-field-tractor",
  "title": "Agricultural Field Tractor",
  "title_zh": "农业田间拖拉机",
  "summary": "Farm utility tractor with large rear tires, enclosed cabin, exhaust and front counterweight",
  "category": "vehicles",
  "tags": [
    "tractor",
    "farm",
    "agriculture"
  ],
  "dimensions_m": [
    1.84,
    2.31,
    3.28
  ],
  "generator": "createAgriculturalFieldTractor",
  "source_path": "src/models/agricultural_field_tractor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/agricultural-field-tractor.webp"
};
export function createAgriculturalFieldTractor() { return buildRecipe({
  "title": "Agricultural Field Tractor",
  "dimensions": [
    1.84,
    2.31,
    3.28
  ],
  "parts": [
    {
      "t": "box",
      "n": "engine-hood",
      "p": [
        0,
        1.08,
        1
      ],
      "s": [
        1.22,
        0.77,
        1.4
      ],
      "c": 6721902
    },
    {
      "t": "box",
      "n": "lower-chassis",
      "p": [
        0,
        0.65,
        0
      ],
      "s": [
        1.37,
        0.38,
        2.7
      ],
      "c": 3424584
    },
    {
      "t": "box",
      "n": "operator-cab",
      "p": [
        0,
        1.6,
        -0.6
      ],
      "s": [
        1.42,
        1.36,
        1.36
      ],
      "c": 7183263
    },
    {
      "t": "box",
      "n": "cab-windshield",
      "p": [
        0,
        1.66,
        0.09
      ],
      "s": [
        1.12,
        0.88,
        0.03
      ],
      "c": 3893116
    },
    {
      "t": "box",
      "n": "side-cab-window-0",
      "p": [
        -0.73,
        1.65,
        -0.62
      ],
      "s": [
        0.025,
        0.87,
        0.9
      ],
      "c": 4946056
    },
    {
      "t": "cylinder",
      "n": "big-rear-tyre-0",
      "p": [
        -0.78,
        0.69,
        -0.86
      ],
      "s": [
        1.35,
        0.28,
        1.35
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "rear-hub-0",
      "p": [
        -0.96,
        0.69,
        -0.86
      ],
      "s": [
        0.56,
        0.3,
        0.56
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "front-tyre-0",
      "p": [
        -0.64,
        0.49,
        1.11
      ],
      "s": [
        0.9,
        0.24,
        0.9
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "side-cab-window-1",
      "p": [
        0.73,
        1.65,
        -0.62
      ],
      "s": [
        0.025,
        0.87,
        0.9
      ],
      "c": 4946056
    },
    {
      "t": "cylinder",
      "n": "big-rear-tyre-1",
      "p": [
        0.78,
        0.69,
        -0.86
      ],
      "s": [
        1.35,
        0.28,
        1.35
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "rear-hub-1",
      "p": [
        0.96,
        0.69,
        -0.86
      ],
      "s": [
        0.56,
        0.3,
        0.56
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "front-tyre-1",
      "p": [
        0.64,
        0.49,
        1.11
      ],
      "s": [
        0.9,
        0.24,
        0.9
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "exhaust-stack",
      "p": [
        0.43,
        1.4,
        1.22
      ],
      "s": [
        0.075,
        1.26,
        0.075
      ],
      "c": 3424584
    },
    {
      "t": "box",
      "n": "front-weight",
      "p": [
        0,
        0.53,
        1.62
      ],
      "s": [
        0.82,
        0.32,
        0.19
      ],
      "c": 9414053
    },
    {
      "t": "box",
      "n": "headlamp-0",
      "p": [
        -0.39,
        1.2,
        1.73
      ],
      "s": [
        0.24,
        0.15,
        0.03
      ],
      "c": 15132125
    },
    {
      "t": "box",
      "n": "headlamp-1",
      "p": [
        0.39,
        1.2,
        1.73
      ],
      "s": [
        0.24,
        0.15,
        0.03
      ],
      "c": 15132125
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        1.06,
        -0.65
      ],
      "s": [
        0.4,
        0.13,
        0.44
      ],
      "c": 3424584
    }
  ]
}); }
