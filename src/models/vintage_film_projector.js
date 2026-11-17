import { buildRecipe } from './recipe_engine.js';
/** Vintage Film Projector / 复古胶片放映机: original authored procedural scene prop. */
export const assetMeta = {
  "id": "electronics.vintage-film-projector.001",
  "slug": "vintage-film-projector",
  "title": "Vintage Film Projector",
  "title_zh": "复古胶片放映机",
  "summary": "Twin-reel analog movie projector with optical lens, feed rollers, drive housing and tripod",
  "category": "electronics",
  "tags": [
    "film",
    "projector",
    "retro"
  ],
  "dimensions_m": [
    0.61,
    0.59,
    0.56
  ],
  "generator": "createVintageFilmProjector",
  "source_path": "src/models/vintage_film_projector.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/vintage-film-projector.webp"
};
export function createVintageFilmProjector() { return buildRecipe({
  "title": "Vintage Film Projector",
  "dimensions": [
    0.61,
    0.59,
    0.56
  ],
  "parts": [
    {
      "t": "box",
      "n": "projector-housing",
      "p": [
        0,
        0.28,
        0
      ],
      "s": [
        0.49,
        0.29,
        0.42
      ],
      "c": 3753552
    },
    {
      "t": "cylinder",
      "n": "film-reel-0",
      "p": [
        -0.17,
        0.47,
        -0.03
      ],
      "s": [
        0.3,
        0.035,
        0.3
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "reel-hub-0",
      "p": [
        -0.17,
        0.47,
        -0.005
      ],
      "s": [
        0.11,
        0.04,
        0.11
      ],
      "c": 3753552,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-0-0",
      "p": [
        -0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-0-1",
      "p": [
        -0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.2566370614359172
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-0-2",
      "p": [
        -0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        2.5132741228718345
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-0-3",
      "p": [
        -0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        3.7699111843077517
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-0-4",
      "p": [
        -0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        5.026548245743669
      ]
    },
    {
      "t": "cylinder",
      "n": "film-reel-1",
      "p": [
        0.17,
        0.47,
        -0.03
      ],
      "s": [
        0.3,
        0.035,
        0.3
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "reel-hub-1",
      "p": [
        0.17,
        0.47,
        -0.005
      ],
      "s": [
        0.11,
        0.04,
        0.11
      ],
      "c": 3753552,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-1-0",
      "p": [
        0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-1-1",
      "p": [
        0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        1.2566370614359172
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-1-2",
      "p": [
        0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        2.5132741228718345
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-1-3",
      "p": [
        0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        3.7699111843077517
      ]
    },
    {
      "t": "box",
      "n": "reel-spoke-1-4",
      "p": [
        0.17,
        0.47,
        -0.006
      ],
      "s": [
        0.028,
        0.23,
        0.014
      ],
      "c": 3753552,
      "rot": [
        0,
        0,
        5.026548245743669
      ]
    },
    {
      "t": "cylinder",
      "n": "projection-lens",
      "p": [
        0,
        0.31,
        0.29
      ],
      "s": [
        0.17,
        0.24,
        0.17
      ],
      "c": 5400951,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "front-lens-glass",
      "p": [
        0,
        0.31,
        0.43
      ],
      "s": [
        0.1,
        0.09,
        0.021
      ],
      "c": 10272971
    },
    {
      "t": "rod",
      "n": "film-path-left",
      "from": [
        -0.17,
        0.47,
        -0.06
      ],
      "to": [
        -0.12,
        0.2,
        0.08
      ],
      "r": 0.012,
      "c": 12427115
    },
    {
      "t": "rod",
      "n": "film-path-right",
      "from": [
        0.17,
        0.47,
        -0.06
      ],
      "to": [
        0.12,
        0.2,
        0.08
      ],
      "r": 0.012,
      "c": 12427115
    },
    {
      "t": "box",
      "n": "vent-door",
      "p": [
        -0.25,
        0.28,
        0.03
      ],
      "s": [
        0.023,
        0.19,
        0.19
      ],
      "c": 9215136
    },
    {
      "t": "box",
      "n": "side-vent-0",
      "p": [
        -0.264,
        0.21,
        0.08
      ],
      "s": [
        0.014,
        0.011,
        0.14
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "side-vent-1",
      "p": [
        -0.264,
        0.255,
        0.08
      ],
      "s": [
        0.014,
        0.011,
        0.14
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "side-vent-2",
      "p": [
        -0.264,
        0.3,
        0.08
      ],
      "s": [
        0.014,
        0.011,
        0.14
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "side-vent-3",
      "p": [
        -0.264,
        0.345,
        0.08
      ],
      "s": [
        0.014,
        0.011,
        0.14
      ],
      "c": 3753552
    },
    {
      "t": "rod",
      "n": "tripod-column",
      "from": [
        0,
        0.17,
        0
      ],
      "to": [
        0,
        0.05,
        0
      ],
      "r": 0.035,
      "c": 9215136
    },
    {
      "t": "box",
      "n": "stand-foot-0",
      "p": [
        -0.18,
        0.03,
        -0.04
      ],
      "s": [
        0.1,
        0.06,
        0.4
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "stand-foot-1",
      "p": [
        0.18,
        0.03,
        -0.04
      ],
      "s": [
        0.1,
        0.06,
        0.4
      ],
      "c": 3753552
    }
  ]
}); }
