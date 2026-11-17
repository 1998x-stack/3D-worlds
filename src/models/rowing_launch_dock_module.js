import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Rowing Launch Dock Module / 赛艇下水浮动码头. */
export const assetMeta = {
  "id": "sports.rowing-launch-dock-module.001",
  "slug": "rowing-launch-dock-module",
  "title": "Rowing Launch Dock Module",
  "title_zh": "赛艇下水浮动码头",
  "summary": "Low-profile floating sport dock with cleats, water-facing ramp and lane marker",
  "category": "sports",
  "tags": [
    "rowing",
    "launch",
    "dock",
    "module",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.65,
    1.25,
    2.75
  ],
  "generator": "createRowingLaunchDockModule",
  "source_path": "src/models/rowing_launch_dock_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/rowing-launch-dock-module.webp",
  "accent": "#3c5870"
};
export function createRowingLaunchDockModule() { return buildRecipe({
  "title": "Rowing Launch Dock Module",
  "dimensions": [
    3.65,
    1.25,
    2.75
  ],
  "parts": [
    {
      "t": "box",
      "n": "rowing-launch-floating-deck",
      "p": [
        0,
        0.37,
        0
      ],
      "s": [
        3.24,
        0.19,
        2.16
      ],
      "c": 6134955
    },
    {
      "t": "sphere",
      "n": "buoyant-pontoon--1",
      "p": [
        -1.28,
        0.19,
        0
      ],
      "s": [
        0.41,
        0.32,
        2.3
      ],
      "c": 15385725
    },
    {
      "t": "cylinder",
      "n": "mooring-cleat--1--0.86",
      "p": [
        -1.23,
        0.5,
        -0.86
      ],
      "s": [
        0.14,
        0.08,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "cylinder",
      "n": "mooring-cleat--1-0.86",
      "p": [
        -1.23,
        0.5,
        0.86
      ],
      "s": [
        0.14,
        0.08,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "sphere",
      "n": "buoyant-pontoon-1",
      "p": [
        1.28,
        0.19,
        0
      ],
      "s": [
        0.41,
        0.32,
        2.3
      ],
      "c": 15385725
    },
    {
      "t": "cylinder",
      "n": "mooring-cleat-1--0.86",
      "p": [
        1.23,
        0.5,
        -0.86
      ],
      "s": [
        0.14,
        0.08,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "cylinder",
      "n": "mooring-cleat-1-0.86",
      "p": [
        1.23,
        0.5,
        0.86
      ],
      "s": [
        0.14,
        0.08,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "box",
      "n": "sloped-water-access-ramp",
      "p": [
        0,
        0.27,
        1.14
      ],
      "s": [
        1.47,
        0.1,
        0.66
      ],
      "c": 3954800,
      "rot": [
        0.11,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "floating-deck-plank-0",
      "p": [
        -1.44,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-1",
      "p": [
        -1.16,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-2",
      "p": [
        -0.8799999999999999,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-3",
      "p": [
        -0.5999999999999999,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-4",
      "p": [
        -0.31999999999999984,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-5",
      "p": [
        -0.039999999999999813,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-6",
      "p": [
        0.2400000000000002,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-7",
      "p": [
        0.5200000000000002,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-8",
      "p": [
        0.8000000000000003,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-9",
      "p": [
        1.0800000000000005,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "floating-deck-plank-10",
      "p": [
        1.3600000000000003,
        0.49,
        0
      ],
      "s": [
        0.25,
        0.022,
        2.05
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "sport-lane-marker-0",
      "p": [
        -1,
        0.51,
        -0.76
      ],
      "s": [
        0.32,
        0.025,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "box",
      "n": "sport-lane-marker-1",
      "p": [
        -0.32999999999999996,
        0.51,
        -0.76
      ],
      "s": [
        0.32,
        0.025,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "box",
      "n": "sport-lane-marker-2",
      "p": [
        0.3400000000000001,
        0.51,
        -0.76
      ],
      "s": [
        0.32,
        0.025,
        0.14
      ],
      "c": 14213084
    },
    {
      "t": "box",
      "n": "sport-lane-marker-3",
      "p": [
        1.0100000000000002,
        0.51,
        -0.76
      ],
      "s": [
        0.32,
        0.025,
        0.14
      ],
      "c": 14213084
    }
  ]
}); }
