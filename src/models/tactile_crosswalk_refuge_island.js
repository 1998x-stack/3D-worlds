import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Tactile Crosswalk Refuge Island / 触觉过街安全岛. */
export const assetMeta = {
  "id": "urban.tactile-crosswalk-refuge-island.001",
  "slug": "tactile-crosswalk-refuge-island",
  "title": "Tactile Crosswalk Refuge Island",
  "title_zh": "触觉过街安全岛",
  "summary": "Pedestrian refuge island with warning tactile tiles, low bollards and beacon",
  "category": "urban",
  "tags": [
    "tactile",
    "crosswalk",
    "refuge",
    "island",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.3,
    1.6,
    1.8
  ],
  "generator": "createTactileCrosswalkRefugeIsland",
  "source_path": "src/models/tactile_crosswalk_refuge_island.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/tactile-crosswalk-refuge-island.webp",
  "accent": "#394c5a"
};
export function createTactileCrosswalkRefugeIsland() { return buildRecipe({
  "title": "Tactile Crosswalk Refuge Island",
  "dimensions": [
    3.3,
    1.6,
    1.8
  ],
  "parts": [
    {
      "t": "box",
      "n": "raised-pedestrian-refuge-island",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        3.08,
        0.29,
        1.53
      ],
      "c": 6913937
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-0",
      "p": [
        -1.37,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-1",
      "p": [
        -1.1400000000000001,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-2",
      "p": [
        -0.9100000000000001,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-3",
      "p": [
        -0.68,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-4",
      "p": [
        -0.45000000000000007,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-5",
      "p": [
        -0.21999999999999997,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-6",
      "p": [
        0.010000000000000009,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-7",
      "p": [
        0.24,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-8",
      "p": [
        0.47,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-9",
      "p": [
        0.7000000000000002,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-10",
      "p": [
        0.9300000000000002,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-11",
      "p": [
        1.1600000000000001,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "tactile-warning-tile-12",
      "p": [
        1.3900000000000001,
        0.328,
        0.27
      ],
      "s": [
        0.2,
        0.022,
        0.31
      ],
      "c": 3755098
    },
    {
      "t": "cylinder",
      "n": "low-refuge-bollard-0",
      "p": [
        -1.2,
        0.5,
        -0.64
      ],
      "s": [
        0.13,
        0.79,
        0.13
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "reflective-bollard-mark-0",
      "p": [
        -1.2,
        0.74,
        -0.59
      ],
      "s": [
        0.09,
        0.13,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "cylinder",
      "n": "low-refuge-bollard-1",
      "p": [
        -0.74,
        0.5,
        -0.64
      ],
      "s": [
        0.13,
        0.79,
        0.13
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "reflective-bollard-mark-1",
      "p": [
        -0.74,
        0.74,
        -0.59
      ],
      "s": [
        0.09,
        0.13,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "cylinder",
      "n": "low-refuge-bollard-2",
      "p": [
        -0.2799999999999999,
        0.5,
        -0.64
      ],
      "s": [
        0.13,
        0.79,
        0.13
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "reflective-bollard-mark-2",
      "p": [
        -0.2799999999999999,
        0.74,
        -0.59
      ],
      "s": [
        0.09,
        0.13,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "cylinder",
      "n": "low-refuge-bollard-3",
      "p": [
        0.18000000000000016,
        0.5,
        -0.64
      ],
      "s": [
        0.13,
        0.79,
        0.13
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "reflective-bollard-mark-3",
      "p": [
        0.18000000000000016,
        0.74,
        -0.59
      ],
      "s": [
        0.09,
        0.13,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "cylinder",
      "n": "low-refuge-bollard-4",
      "p": [
        0.6400000000000001,
        0.5,
        -0.64
      ],
      "s": [
        0.13,
        0.79,
        0.13
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "reflective-bollard-mark-4",
      "p": [
        0.6400000000000001,
        0.74,
        -0.59
      ],
      "s": [
        0.09,
        0.13,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "cylinder",
      "n": "low-refuge-bollard-5",
      "p": [
        1.1000000000000003,
        0.5,
        -0.64
      ],
      "s": [
        0.13,
        0.79,
        0.13
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "reflective-bollard-mark-5",
      "p": [
        1.1000000000000003,
        0.74,
        -0.59
      ],
      "s": [
        0.09,
        0.13,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "rod",
      "n": "pedestrian-warning-pole",
      "from": [
        0,
        0.3,
        -0.56
      ],
      "to": [
        0,
        1.66,
        -0.56
      ],
      "r": 0.046,
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "flashing-crosswalk-beacon",
      "p": [
        0,
        1.69,
        -0.56
      ],
      "s": [
        0.19,
        0.17,
        0.19
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "lane-direction-arrow",
      "p": [
        0,
        0.33,
        -0.03
      ],
      "s": [
        0.44,
        0.023,
        0.25
      ],
      "c": 3755098
    }
  ]
}); }
