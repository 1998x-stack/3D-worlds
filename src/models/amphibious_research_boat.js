import { buildRecipe } from './recipe_engine.js';
/** Amphibious Research Boat: source-backed custom geometry. */
export const assetMeta = {
  "id": "vehicles.amphibious-research-boat.001",
  "slug": "amphibious-research-boat",
  "title": "Amphibious Research Boat",
  "title_zh": "两栖科考船",
  "summary": "Marine science amphibious boat with cabin, sensor mast and sample deck",
  "category": "vehicles",
  "tags": [
    "research",
    "boat",
    "amphibious"
  ],
  "dimensions_m": [
    2.21,
    2.83,
    4.13
  ],
  "generator": "createAmphibiousResearchBoat",
  "source_path": "src/models/amphibious_research_boat.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/amphibious-research-boat.webp"
};
export function createAmphibiousResearchBoat() { return buildRecipe({
  "title": "Amphibious Research Boat",
  "dimensions": [
    2.21,
    2.83,
    4.13
  ],
  "parts": [
    {
      "t": "box",
      "n": "vehicle-frame",
      "p": [
        0,
        0.66,
        0
      ],
      "s": [
        2.1,
        0.4,
        3.6
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "passenger-cab",
      "p": [
        0,
        1.55,
        0.7200000000000001
      ],
      "s": [
        1.8900000000000001,
        1.35,
        1.512
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "windshield",
      "p": [
        0,
        1.85,
        1.476
      ],
      "s": [
        1.6170000000000002,
        0.62,
        0.035
      ],
      "c": 6790322
    },
    {
      "t": "cylinder",
      "n": "tire--1-0",
      "p": [
        -1.029,
        0.41,
        -1.296
      ],
      "s": [
        0.64,
        0.23,
        0.64
      ],
      "c": 3490891,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub--1-0",
      "p": [
        -1.26,
        0.41,
        -1.296
      ],
      "s": [
        0.28,
        0.24,
        0.28
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "tire--1-1",
      "p": [
        -1.029,
        0.41,
        -0.648
      ],
      "s": [
        0.64,
        0.23,
        0.64
      ],
      "c": 3490891,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub--1-1",
      "p": [
        -1.26,
        0.41,
        -0.648
      ],
      "s": [
        0.28,
        0.24,
        0.28
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "tire--1-2",
      "p": [
        -1.029,
        0.41,
        0
      ],
      "s": [
        0.64,
        0.23,
        0.64
      ],
      "c": 3490891,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub--1-2",
      "p": [
        -1.26,
        0.41,
        0
      ],
      "s": [
        0.28,
        0.24,
        0.28
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "tire-1-0",
      "p": [
        1.029,
        0.41,
        -1.296
      ],
      "s": [
        0.64,
        0.23,
        0.64
      ],
      "c": 3490891,
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
        1.26,
        0.41,
        -1.296
      ],
      "s": [
        0.28,
        0.24,
        0.28
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "tire-1-1",
      "p": [
        1.029,
        0.41,
        -0.648
      ],
      "s": [
        0.64,
        0.23,
        0.64
      ],
      "c": 3490891,
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
        1.26,
        0.41,
        -0.648
      ],
      "s": [
        0.28,
        0.24,
        0.28
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "tire-1-2",
      "p": [
        1.029,
        0.41,
        0
      ],
      "s": [
        0.64,
        0.23,
        0.64
      ],
      "c": 3490891,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-1-2",
      "p": [
        1.26,
        0.41,
        0
      ],
      "s": [
        0.28,
        0.24,
        0.28
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "sphere",
      "n": "buoyant-hull",
      "p": [
        0,
        0.62,
        0
      ],
      "s": [
        2.1,
        1.07,
        3.8
      ],
      "c": 6790322
    },
    {
      "t": "box",
      "n": "science-deck",
      "p": [
        0,
        1.25,
        -0.8
      ],
      "s": [
        1.55,
        0.14,
        1.6
      ],
      "c": 9807013
    },
    {
      "t": "rod",
      "n": "sensor-mast",
      "from": [
        0,
        2.12,
        0.58
      ],
      "to": [
        0,
        2.72,
        0.58
      ],
      "r": 0.032,
      "c": 3490891
    },
    {
      "t": "sphere",
      "n": "radar-dome",
      "p": [
        0,
        2.72,
        0.58
      ],
      "s": [
        0.17,
        0.15,
        0.17
      ],
      "c": 6790322
    },
    {
      "t": "cylinder",
      "n": "sampling-vial-0",
      "p": [
        -0.62,
        1.52,
        -1.1
      ],
      "s": [
        0.15,
        0.26,
        0.13
      ],
      "c": 13347175
    },
    {
      "t": "cylinder",
      "n": "sampling-vial-1",
      "p": [
        -0.38,
        1.52,
        -1.1
      ],
      "s": [
        0.15,
        0.26,
        0.13
      ],
      "c": 13347175
    },
    {
      "t": "cylinder",
      "n": "sampling-vial-2",
      "p": [
        -0.14,
        1.52,
        -1.1
      ],
      "s": [
        0.15,
        0.26,
        0.13
      ],
      "c": 13347175
    },
    {
      "t": "cylinder",
      "n": "sampling-vial-3",
      "p": [
        0.09999999999999998,
        1.52,
        -1.1
      ],
      "s": [
        0.15,
        0.26,
        0.13
      ],
      "c": 13347175
    },
    {
      "t": "cylinder",
      "n": "sampling-vial-4",
      "p": [
        0.33999999999999997,
        1.52,
        -1.1
      ],
      "s": [
        0.15,
        0.26,
        0.13
      ],
      "c": 13347175
    },
    {
      "t": "cylinder",
      "n": "sampling-vial-5",
      "p": [
        0.58,
        1.52,
        -1.1
      ],
      "s": [
        0.15,
        0.26,
        0.13
      ],
      "c": 13347175
    },
    {
      "t": "rod",
      "n": "crane-upright",
      "from": [
        0.46,
        1.39,
        -1.2
      ],
      "to": [
        0.46,
        2.17,
        -1.2
      ],
      "r": 0.03,
      "c": 9807013
    },
    {
      "t": "rod",
      "n": "crane-boom",
      "from": [
        0.46,
        2.17,
        -1.2
      ],
      "to": [
        0.15,
        2.1,
        -1.8
      ],
      "r": 0.025,
      "c": 9807013
    }
  ]
}); }
