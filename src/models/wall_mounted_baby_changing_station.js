import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Wall Mounted Baby Changing Station / 壁挂婴儿护理台. */
export const assetMeta = {
  "id": "bathroom.wall-mounted-baby-changing-station.001",
  "slug": "wall-mounted-baby-changing-station",
  "title": "Wall Mounted Baby Changing Station",
  "title_zh": "壁挂婴儿护理台",
  "summary": "Fold-down infant changing station with straps, rounded deck and accessible instruction panel",
  "category": "bathroom",
  "tags": [
    "wall",
    "mounted",
    "baby",
    "changing",
    "station",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.94,
    1.28,
    0.78
  ],
  "generator": "createWallMountedBabyChangingStation",
  "source_path": "src/models/wall_mounted_baby_changing_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/wall-mounted-baby-changing-station.webp",
  "accent": "#3c5667"
};
export function createWallMountedBabyChangingStation() { return buildRecipe({
  "title": "Wall Mounted Baby Changing Station",
  "dimensions": [
    0.94,
    1.28,
    0.78
  ],
  "parts": [
    {
      "t": "box",
      "n": "folded-wall-mount-backplate",
      "p": [
        0,
        0.65,
        -0.24
      ],
      "s": [
        0.79,
        1.21,
        0.13
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "infant-changing-deck",
      "p": [
        0,
        0.52,
        0.18
      ],
      "s": [
        0.76,
        0.12,
        0.72
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "rounded-front-guard",
      "p": [
        0,
        0.6,
        0.52
      ],
      "s": [
        0.77,
        0.13,
        0.07
      ],
      "c": 7178391
    },
    {
      "t": "rod",
      "n": "folding-bracket--1",
      "from": [
        -0.33,
        0.76,
        -0.2
      ],
      "to": [
        -0.35,
        0.44,
        0.42
      ],
      "r": 0.03,
      "c": 7178391
    },
    {
      "t": "box",
      "n": "safety-strap--1",
      "p": [
        -0.17,
        0.63,
        0.17
      ],
      "s": [
        0.07,
        0.025,
        0.61
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "corner-pad--1",
      "p": [
        -0.35,
        0.61,
        0.49
      ],
      "s": [
        0.1,
        0.05,
        0.09
      ],
      "c": 15068139
    },
    {
      "t": "rod",
      "n": "folding-bracket-1",
      "from": [
        0.33,
        0.76,
        -0.2
      ],
      "to": [
        0.35,
        0.44,
        0.42
      ],
      "r": 0.03,
      "c": 7178391
    },
    {
      "t": "box",
      "n": "safety-strap-1",
      "p": [
        0.17,
        0.63,
        0.17
      ],
      "s": [
        0.07,
        0.025,
        0.61
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "corner-pad-1",
      "p": [
        0.35,
        0.61,
        0.49
      ],
      "s": [
        0.1,
        0.05,
        0.09
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "baby-care-pictogram-panel",
      "p": [
        0,
        1.12,
        -0.15
      ],
      "s": [
        0.51,
        0.2,
        0.027
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "hygiene-wipe-dispenser",
      "p": [
        0.31,
        0.83,
        -0.12
      ],
      "s": [
        0.19,
        0.23,
        0.13
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "hinge-barrel-0",
      "p": [
        -0.26,
        0.53,
        -0.22
      ],
      "s": [
        0.07,
        0.06,
        0.08
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "hinge-barrel-1",
      "p": [
        -0.09,
        0.53,
        -0.22
      ],
      "s": [
        0.07,
        0.06,
        0.08
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "hinge-barrel-2",
      "p": [
        0.08000000000000002,
        0.53,
        -0.22
      ],
      "s": [
        0.07,
        0.06,
        0.08
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "hinge-barrel-3",
      "p": [
        0.25,
        0.53,
        -0.22
      ],
      "s": [
        0.07,
        0.06,
        0.08
      ],
      "c": 7178391
    }
  ]
}); }
