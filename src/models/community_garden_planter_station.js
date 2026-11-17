import { buildRecipe } from './recipe_engine.js';
/** Community Garden Planter Station: original source-editable mesh scene. */
export const assetMeta = {
  "id": "urban.community-garden-planter-station.001",
  "slug": "community-garden-planter-station",
  "title": "Community Garden Planter Station",
  "title_zh": "社区共享种植花箱站",
  "summary": "Shared neighborhood planting station with tiered planters, watering tank and labels",
  "category": "urban",
  "tags": [
    "community",
    "garden",
    "planter"
  ],
  "dimensions_m": [
    2.09,
    1.43,
    1.23
  ],
  "generator": "createCommunityGardenPlanterStation",
  "source_path": "src/models/community_garden_planter_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/community-garden-planter-station.webp"
};
export function createCommunityGardenPlanterStation() { return buildRecipe({
  "title": "Community Garden Planter Station",
  "dimensions": [
    2.09,
    1.43,
    1.23
  ],
  "parts": [
    {
      "t": "box",
      "n": "wooden-main-planter",
      "p": [
        0,
        0.39,
        0
      ],
      "s": [
        2.03,
        0.67,
        1.18
      ],
      "c": 9794130
    },
    {
      "t": "box",
      "n": "upper-soil",
      "p": [
        0,
        0.74,
        0
      ],
      "s": [
        1.87,
        0.05,
        1.03
      ],
      "c": 8415826
    },
    {
      "t": "rod",
      "n": "garden-stem-0",
      "from": [
        -0.77,
        0.74,
        -0.37
      ],
      "to": [
        -0.77,
        0.94,
        -0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-0",
      "p": [
        -0.77,
        0.95,
        -0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 8431477
    },
    {
      "t": "rod",
      "n": "garden-stem-1",
      "from": [
        -0.26,
        0.74,
        -0.37
      ],
      "to": [
        -0.26,
        1.04,
        -0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-1",
      "p": [
        -0.26,
        1.05,
        -0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 5473887
    },
    {
      "t": "rod",
      "n": "garden-stem-2",
      "from": [
        0.25,
        0.74,
        -0.37
      ],
      "to": [
        0.25,
        1.14,
        -0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-2",
      "p": [
        0.25,
        1.15,
        -0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 8431477
    },
    {
      "t": "rod",
      "n": "garden-stem-3",
      "from": [
        0.76,
        0.74,
        -0.37
      ],
      "to": [
        0.76,
        0.94,
        -0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-3",
      "p": [
        0.76,
        0.95,
        -0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 5473887
    },
    {
      "t": "rod",
      "n": "garden-stem-4",
      "from": [
        -0.77,
        0.74,
        0
      ],
      "to": [
        -0.77,
        1.04,
        0
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-4",
      "p": [
        -0.77,
        1.05,
        0
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 8431477
    },
    {
      "t": "rod",
      "n": "garden-stem-5",
      "from": [
        -0.26,
        0.74,
        0
      ],
      "to": [
        -0.26,
        1.14,
        0
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-5",
      "p": [
        -0.26,
        1.15,
        0
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 5473887
    },
    {
      "t": "rod",
      "n": "garden-stem-6",
      "from": [
        0.25,
        0.74,
        0
      ],
      "to": [
        0.25,
        0.94,
        0
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-6",
      "p": [
        0.25,
        0.95,
        0
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 8431477
    },
    {
      "t": "rod",
      "n": "garden-stem-7",
      "from": [
        0.76,
        0.74,
        0
      ],
      "to": [
        0.76,
        1.04,
        0
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-7",
      "p": [
        0.76,
        1.05,
        0
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 5473887
    },
    {
      "t": "rod",
      "n": "garden-stem-8",
      "from": [
        -0.77,
        0.74,
        0.37
      ],
      "to": [
        -0.77,
        1.14,
        0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-8",
      "p": [
        -0.77,
        1.15,
        0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 8431477
    },
    {
      "t": "rod",
      "n": "garden-stem-9",
      "from": [
        -0.26,
        0.74,
        0.37
      ],
      "to": [
        -0.26,
        0.94,
        0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-9",
      "p": [
        -0.26,
        0.95,
        0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 5473887
    },
    {
      "t": "rod",
      "n": "garden-stem-10",
      "from": [
        0.25,
        0.74,
        0.37
      ],
      "to": [
        0.25,
        1.04,
        0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-10",
      "p": [
        0.25,
        1.05,
        0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 8431477
    },
    {
      "t": "rod",
      "n": "garden-stem-11",
      "from": [
        0.76,
        0.74,
        0.37
      ],
      "to": [
        0.76,
        1.14,
        0.37
      ],
      "r": 0.016,
      "c": 7050619
    },
    {
      "t": "sphere",
      "n": "garden-leaf-11",
      "p": [
        0.76,
        1.15,
        0.37
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 5473887
    },
    {
      "t": "box",
      "n": "irrigation-reservoir",
      "p": [
        0.78,
        1.1,
        -0.39
      ],
      "s": [
        0.37,
        0.56,
        0.38
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "irrigation-spout",
      "from": [
        0.63,
        1.02,
        -0.38
      ],
      "to": [
        0.3,
        1.03,
        -0.26
      ],
      "r": 0.028,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "plant-label-0",
      "p": [
        -0.76,
        0.75,
        0.59
      ],
      "s": [
        0.22,
        0.14,
        0.024
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "plant-label-1",
      "p": [
        -0.38,
        0.75,
        0.59
      ],
      "s": [
        0.22,
        0.14,
        0.024
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "plant-label-2",
      "p": [
        0,
        0.75,
        0.59
      ],
      "s": [
        0.22,
        0.14,
        0.024
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "plant-label-3",
      "p": [
        0.3800000000000001,
        0.75,
        0.59
      ],
      "s": [
        0.22,
        0.14,
        0.024
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "plant-label-4",
      "p": [
        0.76,
        0.75,
        0.59
      ],
      "s": [
        0.22,
        0.14,
        0.024
      ],
      "c": 15197661
    }
  ]
}); }
