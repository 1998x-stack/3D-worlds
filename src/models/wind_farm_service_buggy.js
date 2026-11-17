import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Wind Farm Service Buggy / 风电场巡检越野车. */
export const assetMeta = {
  "id": "vehicles.wind-farm-service-buggy.001",
  "slug": "wind-farm-service-buggy",
  "title": "Wind Farm Service Buggy",
  "title_zh": "风电场巡检越野车",
  "summary": "Rugged electric maintenance buggy with roof rack, inspection cases and safety lights",
  "category": "vehicles",
  "tags": [
    "wind",
    "farm",
    "service",
    "buggy",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.05,
    2.35,
    3.85
  ],
  "generator": "createWindFarmServiceBuggy",
  "source_path": "src/models/wind_farm_service_buggy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/wind-farm-service-buggy.webp",
  "accent": "#6e9ca5"
};
export function createWindFarmServiceBuggy() { return buildRecipe({
  "title": "Wind Farm Service Buggy",
  "dimensions": [
    2.05,
    2.35,
    3.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "electric-buggy-platform",
      "p": [
        0,
        0.65,
        0
      ],
      "s": [
        1.74,
        0.49,
        2.85
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "buggy-operator-cab",
      "p": [
        0,
        1.28,
        0.56
      ],
      "s": [
        1.57,
        1.27,
        1.26
      ],
      "c": 7249061
    },
    {
      "t": "box",
      "n": "wind-farm-utility-roof",
      "p": [
        0,
        2.09,
        0.57
      ],
      "s": [
        1.6,
        0.12,
        1.34
      ],
      "c": 13284199
    },
    {
      "t": "cylinder",
      "n": "all-terrain-wheel--1--1.11",
      "p": [
        -0.9,
        0.33,
        -1.11
      ],
      "s": [
        0.55,
        0.19,
        0.55
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "all-terrain-wheel--1-1.05",
      "p": [
        -0.9,
        0.33,
        1.05
      ],
      "s": [
        0.55,
        0.19,
        0.55
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "all-terrain-wheel-1--1.11",
      "p": [
        0.9,
        0.33,
        -1.11
      ],
      "s": [
        0.55,
        0.19,
        0.55
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "all-terrain-wheel-1-1.05",
      "p": [
        0.9,
        0.33,
        1.05
      ],
      "s": [
        0.55,
        0.19,
        0.55
      ],
      "c": 2372676,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "transparent-windshield-side--1",
      "p": [
        -0.82,
        1.51,
        0.74
      ],
      "s": [
        0.03,
        0.64,
        0.65
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "utility-storage-case--1",
      "p": [
        -0.55,
        1.02,
        -1.02
      ],
      "s": [
        0.51,
        0.4,
        0.55
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "transparent-windshield-side-1",
      "p": [
        0.82,
        1.51,
        0.74
      ],
      "s": [
        0.03,
        0.64,
        0.65
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "utility-storage-case-1",
      "p": [
        0.55,
        1.02,
        -1.02
      ],
      "s": [
        0.51,
        0.4,
        0.55
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "front-inspection-lightbar",
      "p": [
        0,
        1.99,
        1.25
      ],
      "s": [
        0.81,
        0.09,
        0.14
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "roof-rack-crossbar-0",
      "p": [
        -0.59,
        2.22,
        -0.44
      ],
      "s": [
        0.04,
        0.06,
        0.7
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "roof-rack-crossbar-1",
      "p": [
        -0.29,
        2.22,
        -0.44
      ],
      "s": [
        0.04,
        0.06,
        0.7
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "roof-rack-crossbar-2",
      "p": [
        0.010000000000000009,
        2.22,
        -0.44
      ],
      "s": [
        0.04,
        0.06,
        0.7
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "roof-rack-crossbar-3",
      "p": [
        0.30999999999999994,
        2.22,
        -0.44
      ],
      "s": [
        0.04,
        0.06,
        0.7
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "roof-rack-crossbar-4",
      "p": [
        0.61,
        2.22,
        -0.44
      ],
      "s": [
        0.04,
        0.06,
        0.7
      ],
      "c": 4086126
    }
  ]
}); }
