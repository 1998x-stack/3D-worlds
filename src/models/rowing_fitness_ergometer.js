import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "sports.rowing-fitness-ergometer.001",
  "slug": "rowing-fitness-ergometer",
  "title": "Rowing Fitness Ergometer",
  "title_zh": "室内划船训练器",
  "summary": "Indoor rowing machine with track, sliding seat, flywheel, pedals and pull handle",
  "category": "sports",
  "tags": [
    "rowing",
    "ergometer",
    "fitness"
  ],
  "dimensions_m": [
    0.67,
    1.13,
    2.13
  ],
  "generator": "createRowingFitnessErgometer",
  "source_path": "src/models/rowing_fitness_ergometer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/rowing-fitness-ergometer.webp"
};
export function createRowingFitnessErgometer() { return buildRecipe({
  "title": "Rowing Fitness Ergometer",
  "dimensions": [
    0.67,
    1.13,
    2.13
  ],
  "parts": [
    {
      "t": "box",
      "n": "seat-slide-rail",
      "p": [
        0,
        0.32,
        0
      ],
      "s": [
        0.11,
        0.085,
        1.88
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        0.49,
        -0.54
      ],
      "s": [
        0.38,
        0.09,
        0.26
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "rear-floor-foot",
      "p": [
        0,
        0.1,
        -0.86
      ],
      "s": [
        0.65,
        0.12,
        0.18
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "front-floor-foot",
      "p": [
        0,
        0.11,
        0.83
      ],
      "s": [
        0.65,
        0.15,
        0.18
      ],
      "c": 3490634
    },
    {
      "t": "cylinder",
      "n": "flywheel-housing",
      "p": [
        0,
        0.78,
        0.81
      ],
      "s": [
        0.59,
        0.15,
        0.59
      ],
      "c": 7309972,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "flywheel-ring",
      "p": [
        0,
        0.78,
        0.893
      ],
      "s": [
        0.42,
        0.07,
        0.42
      ],
      "c": 3490634,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "foot-rest-0",
      "p": [
        -0.14,
        0.4,
        0.32
      ],
      "s": [
        0.17,
        0.2,
        0.3
      ],
      "c": 9596753,
      "rot": [
        0.3,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "foot-rest-1",
      "p": [
        0.14,
        0.4,
        0.32
      ],
      "s": [
        0.17,
        0.2,
        0.3
      ],
      "c": 9596753,
      "rot": [
        0.3,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "pull-cable",
      "from": [
        0,
        0.78,
        0.82
      ],
      "to": [
        0,
        0.74,
        -0.18
      ],
      "r": 0.016,
      "c": 3490634
    },
    {
      "t": "rod",
      "n": "pull-handle",
      "from": [
        -0.23,
        0.74,
        -0.18
      ],
      "to": [
        0.23,
        0.74,
        -0.18
      ],
      "r": 0.028,
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "front-neck",
      "from": [
        0,
        0.61,
        0.82
      ],
      "to": [
        0,
        1.08,
        0.55
      ],
      "r": 0.033,
      "c": 9741221
    },
    {
      "t": "box",
      "n": "workout-monitor",
      "p": [
        0,
        1.09,
        0.49
      ],
      "s": [
        0.3,
        0.19,
        0.055
      ],
      "c": 5540513
    },
    {
      "t": "box",
      "n": "floor-pad-0",
      "p": [
        -0.28,
        0.05,
        -0.86
      ],
      "s": [
        0.12,
        0.1,
        0.14
      ],
      "c": 6589557
    },
    {
      "t": "box",
      "n": "floor-pad-1",
      "p": [
        0.28,
        0.05,
        -0.86
      ],
      "s": [
        0.12,
        0.1,
        0.14
      ],
      "c": 6589557
    }
  ]
}); }
