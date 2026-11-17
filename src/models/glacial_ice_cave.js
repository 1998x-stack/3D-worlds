import { buildRecipe } from './recipe_engine.js';
/** Glacial Ice Cave: source-backed custom geometry. */
export const assetMeta = {
  "id": "nature.glacial-ice-cave.001",
  "slug": "glacial-ice-cave",
  "title": "Glacial Ice Cave",
  "title_zh": "冰川蓝冰洞穴",
  "summary": "Arched translucent-looking glacier cavern with icicles and frozen pool",
  "category": "nature",
  "tags": [
    "glacier",
    "cave",
    "ice"
  ],
  "dimensions_m": [
    2.95,
    2.17,
    2.68
  ],
  "generator": "createGlacialIceCave",
  "source_path": "src/models/glacial_ice_cave.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/glacial-ice-cave.webp"
};
export function createGlacialIceCave() { return buildRecipe({
  "title": "Glacial Ice Cave",
  "dimensions": [
    2.95,
    2.17,
    2.68
  ],
  "parts": [
    {
      "t": "box",
      "n": "landscape-base",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2.65,
        0.21,
        2.15
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "ice-ceiling",
      "p": [
        0,
        1.9,
        0
      ],
      "s": [
        2.3,
        0.23,
        1.9
      ],
      "c": 10340820
    },
    {
      "t": "sphere",
      "n": "frozen-pool",
      "p": [
        0,
        0.24,
        0
      ],
      "s": [
        1.7,
        0.035,
        0.98
      ],
      "c": 6790322
    },
    {
      "t": "sphere",
      "n": "ice-wall--0.95",
      "p": [
        -0.95,
        1.01,
        0
      ],
      "s": [
        0.58,
        1.8,
        1.43
      ],
      "c": 8633032
    },
    {
      "t": "sphere",
      "n": "ice-wall-0.95",
      "p": [
        0.95,
        1.01,
        0
      ],
      "s": [
        0.58,
        1.8,
        1.43
      ],
      "c": 8633032
    },
    {
      "t": "cone",
      "n": "stalactite-0",
      "p": [
        -1.03,
        1.75,
        0.62
      ],
      "s": [
        0.09,
        0.23,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-1",
      "p": [
        -0.9,
        1.79,
        0.62
      ],
      "s": [
        0.09,
        0.28,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-2",
      "p": [
        -0.77,
        1.83,
        0.62
      ],
      "s": [
        0.09,
        0.33,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-3",
      "p": [
        -0.64,
        1.87,
        0.62
      ],
      "s": [
        0.09,
        0.23,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-4",
      "p": [
        -0.51,
        1.75,
        0.62
      ],
      "s": [
        0.09,
        0.28,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-5",
      "p": [
        -0.38,
        1.79,
        0.62
      ],
      "s": [
        0.09,
        0.33,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-6",
      "p": [
        -0.25,
        1.83,
        0.62
      ],
      "s": [
        0.09,
        0.23,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-7",
      "p": [
        -0.12,
        1.87,
        0.62
      ],
      "s": [
        0.09,
        0.28,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-8",
      "p": [
        0.010000000000000009,
        1.75,
        0.62
      ],
      "s": [
        0.09,
        0.33,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-9",
      "p": [
        0.1399999999999999,
        1.79,
        0.62
      ],
      "s": [
        0.09,
        0.23,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-10",
      "p": [
        0.27,
        1.83,
        0.62
      ],
      "s": [
        0.09,
        0.28,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-11",
      "p": [
        0.40000000000000013,
        1.87,
        0.62
      ],
      "s": [
        0.09,
        0.33,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-12",
      "p": [
        0.53,
        1.75,
        0.62
      ],
      "s": [
        0.09,
        0.23,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-13",
      "p": [
        0.6599999999999999,
        1.79,
        0.62
      ],
      "s": [
        0.09,
        0.28,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-14",
      "p": [
        0.79,
        1.83,
        0.62
      ],
      "s": [
        0.09,
        0.33,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    },
    {
      "t": "cone",
      "n": "stalactite-15",
      "p": [
        0.9200000000000002,
        1.87,
        0.62
      ],
      "s": [
        0.09,
        0.23,
        0.09
      ],
      "c": 14936037,
      "rot": [
        3.141592653589793,
        0,
        0
      ]
    }
  ]
}); }
