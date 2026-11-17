import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Fresh Rice Noodle Station / 鲜米粉加工台. */
export const assetMeta = {
  "id": "kitchen.fresh-rice-noodle-station.001",
  "slug": "fresh-rice-noodle-station",
  "title": "Fresh Rice Noodle Station",
  "title_zh": "鲜米粉加工台",
  "summary": "Fresh noodle cooking and pressing bench with food-grade rollers and steam trays",
  "category": "kitchen",
  "tags": [
    "fresh",
    "rice",
    "noodle",
    "station",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    1.65,
    0.92
  ],
  "generator": "createFreshRiceNoodleStation",
  "source_path": "src/models/fresh_rice_noodle_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/fresh-rice-noodle-station.webp",
  "accent": "#c9ccbc"
};
export function createFreshRiceNoodleStation() { return buildRecipe({
  "title": "Fresh Rice Noodle Station",
  "dimensions": [
    1.65,
    1.65,
    0.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "rice-noodle-prep-bench",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        1.45,
        0.91,
        0.75
      ],
      "c": 13225148
    },
    {
      "t": "box",
      "n": "stainless-processing-counter",
      "p": [
        0,
        1.05,
        0
      ],
      "s": [
        1.54,
        0.12,
        0.84
      ],
      "c": 6520451
    },
    {
      "t": "cylinder",
      "n": "noodle-roller-0",
      "p": [
        -0.22,
        1.32,
        -0.1
      ],
      "s": [
        0.39,
        0.16,
        0.39
      ],
      "c": 11767394,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "noodle-roller-1",
      "p": [
        0.21,
        1.32,
        -0.1
      ],
      "s": [
        0.39,
        0.16,
        0.39
      ],
      "c": 11767394,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "noodle-press-housing",
      "p": [
        -0.11,
        1.46,
        -0.14
      ],
      "s": [
        0.8,
        0.34,
        0.5
      ],
      "c": 14136923
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-0",
      "from": [
        -0.48,
        1.18,
        0.25
      ],
      "to": [
        -0.48,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-1",
      "from": [
        -0.39,
        1.18,
        0.25
      ],
      "to": [
        -0.39,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-2",
      "from": [
        -0.3,
        1.18,
        0.25
      ],
      "to": [
        -0.3,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-3",
      "from": [
        -0.20999999999999996,
        1.18,
        0.25
      ],
      "to": [
        -0.20999999999999996,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-4",
      "from": [
        -0.12,
        1.18,
        0.25
      ],
      "to": [
        -0.12,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-5",
      "from": [
        -0.030000000000000027,
        1.18,
        0.25
      ],
      "to": [
        -0.030000000000000027,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-6",
      "from": [
        0.06000000000000005,
        1.18,
        0.25
      ],
      "to": [
        0.06000000000000005,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-7",
      "from": [
        0.15000000000000002,
        1.18,
        0.25
      ],
      "to": [
        0.15000000000000002,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-8",
      "from": [
        0.24,
        1.18,
        0.25
      ],
      "to": [
        0.24,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "rod",
      "n": "fresh-rice-noodle-strand-9",
      "from": [
        0.32999999999999996,
        1.18,
        0.25
      ],
      "to": [
        0.32999999999999996,
        0.83,
        0.43
      ],
      "r": 0.012,
      "c": 11767394
    },
    {
      "t": "cylinder",
      "n": "steam-basket-0",
      "p": [
        0.57,
        0.9,
        -0.2
      ],
      "s": [
        0.28,
        0.09,
        0.28
      ],
      "c": 6520451
    },
    {
      "t": "cylinder",
      "n": "steam-basket-1",
      "p": [
        0.57,
        0.99,
        -0.2
      ],
      "s": [
        0.28,
        0.09,
        0.28
      ],
      "c": 6520451
    },
    {
      "t": "cylinder",
      "n": "steam-basket-2",
      "p": [
        0.57,
        1.08,
        -0.2
      ],
      "s": [
        0.28,
        0.09,
        0.28
      ],
      "c": 6520451
    },
    {
      "t": "cylinder",
      "n": "steam-basket-3",
      "p": [
        0.57,
        1.17,
        -0.2
      ],
      "s": [
        0.28,
        0.09,
        0.28
      ],
      "c": 6520451
    },
    {
      "t": "box",
      "n": "safety-motor-switch",
      "p": [
        -0.64,
        1.17,
        -0.31
      ],
      "s": [
        0.13,
        0.12,
        0.07
      ],
      "c": 14136923
    }
  ]
}); }
