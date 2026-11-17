import { buildRecipe } from './recipe_engine.js';
/** Arctic Snow Groomer / 极地雪道压雪车: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "vehicles.arctic-snow-groomer.001",
  "slug": "arctic-snow-groomer",
  "title": "Arctic Snow Groomer",
  "title_zh": "极地雪道压雪车",
  "summary": "Tracked alpine snow maintenance vehicle with front plow and rear combing blade",
  "category": "vehicles",
  "tags": [
    "arctic",
    "snow",
    "groomer",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.95,
    2.85,
    4.1
  ],
  "generator": "createArcticSnowGroomer",
  "source_path": "src/models/arctic_snow_groomer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/arctic-snow-groomer.webp",
  "accent": "#273743"
};
export function createArcticSnowGroomer() { return buildRecipe({
  "title": "Arctic Snow Groomer",
  "dimensions": [
    2.95,
    2.85,
    4.1
  ],
  "parts": [
    {
      "t": "box",
      "n": "tracked-chassis",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        2.35,
        0.78,
        3.2
      ],
      "c": 4810624
    },
    {
      "t": "box",
      "n": "heated-driver-cabin",
      "p": [
        0,
        1.64,
        0.58
      ],
      "s": [
        1.55,
        1.55,
        1.3
      ],
      "c": 14721613
    },
    {
      "t": "box",
      "n": "windshield",
      "p": [
        0,
        1.9,
        1.26
      ],
      "s": [
        1.24,
        0.65,
        0.04
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "continuous-track--1",
      "p": [
        -1.13,
        0.38,
        0
      ],
      "s": [
        0.28,
        0.57,
        3.35
      ],
      "c": 13227480
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel--1-0",
      "p": [
        -1.27,
        0.37,
        -1.3
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel--1-1",
      "p": [
        -1.27,
        0.37,
        -0.78
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel--1-2",
      "p": [
        -1.27,
        0.37,
        -0.26
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel--1-3",
      "p": [
        -1.27,
        0.37,
        0.26
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel--1-4",
      "p": [
        -1.27,
        0.37,
        0.78
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel--1-5",
      "p": [
        -1.27,
        0.37,
        1.3
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "continuous-track-1",
      "p": [
        1.13,
        0.38,
        0
      ],
      "s": [
        0.28,
        0.57,
        3.35
      ],
      "c": 13227480
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel-1-0",
      "p": [
        1.27,
        0.37,
        -1.3
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel-1-1",
      "p": [
        1.27,
        0.37,
        -0.78
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel-1-2",
      "p": [
        1.27,
        0.37,
        -0.26
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel-1-3",
      "p": [
        1.27,
        0.37,
        0.26
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel-1-4",
      "p": [
        1.27,
        0.37,
        0.78
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "track-roadwheel-1-5",
      "p": [
        1.27,
        0.37,
        1.3
      ],
      "s": [
        0.27,
        0.11,
        0.27
      ],
      "c": 2570051,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "front-snow-plow",
      "p": [
        0,
        0.39,
        1.87
      ],
      "s": [
        2.65,
        0.52,
        0.2
      ],
      "c": 14721613,
      "rot": [
        0.27,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "rear-groomer-rake",
      "p": [
        0,
        0.24,
        -1.86
      ],
      "s": [
        2.23,
        0.17,
        0.4
      ],
      "c": 2570051
    },
    {
      "t": "cone",
      "n": "rake-tine-0",
      "p": [
        -0.8444444444444444,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-1",
      "p": [
        -0.6333333333333333,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-2",
      "p": [
        -0.4222222222222222,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-3",
      "p": [
        -0.2111111111111111,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-4",
      "p": [
        0,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-5",
      "p": [
        0.2111111111111111,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-6",
      "p": [
        0.4222222222222222,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-7",
      "p": [
        0.6333333333333333,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    },
    {
      "t": "cone",
      "n": "rake-tine-8",
      "p": [
        0.8444444444444444,
        0.24,
        -2.04
      ],
      "s": [
        0.08,
        0.17,
        0.08
      ],
      "c": 13227480
    }
  ]
}); }
