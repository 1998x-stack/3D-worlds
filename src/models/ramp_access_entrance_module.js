import { buildRecipe } from './recipe_engine.js';
/** Ramp Access Entrance Module / 无障碍坡道建筑入口: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "architecture.ramp-access-entrance-module.001",
  "slug": "ramp-access-entrance-module",
  "title": "Ramp Access Entrance Module",
  "title_zh": "无障碍坡道建筑入口",
  "summary": "Accessible building entry with gentle ramp, landings, guard rails and door",
  "category": "architecture",
  "tags": [
    "ramp",
    "access",
    "entrance",
    "module",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.8,
    1.75,
    3.15
  ],
  "generator": "createRampAccessEntranceModule",
  "source_path": "src/models/ramp_access_entrance_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/ramp-access-entrance-module.webp",
  "accent": "#657985"
};
export function createRampAccessEntranceModule() { return buildRecipe({
  "title": "Ramp Access Entrance Module",
  "dimensions": [
    3.8,
    1.75,
    3.15
  ],
  "parts": [
    {
      "t": "box",
      "n": "entry-landing",
      "p": [
        0,
        0.52,
        -1.03
      ],
      "s": [
        2.3,
        0.18,
        1.1
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "accessible-ramp",
      "p": [
        0,
        0.27,
        0.65
      ],
      "s": [
        2.32,
        0.18,
        2.13
      ],
      "c": 12827301,
      "rot": [
        -0.16,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "building-wall",
      "p": [
        0,
        1.2,
        -1.48
      ],
      "s": [
        3.2,
        1.65,
        0.2
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "entry-door",
      "p": [
        0,
        1.18,
        -1.34
      ],
      "s": [
        0.85,
        1.58,
        0.065
      ],
      "c": 6650245
    },
    {
      "t": "rod",
      "n": "handrail-upper--1",
      "from": [
        -1.21,
        0.87,
        -1
      ],
      "to": [
        -1.21,
        0.37,
        1.55
      ],
      "r": 0.034,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post--1-0",
      "from": [
        -1.21,
        0.17,
        -0.85
      ],
      "to": [
        -1.21,
        0.87,
        -0.85
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post--1-1",
      "from": [
        -1.21,
        0.17,
        -0.15000000000000002
      ],
      "to": [
        -1.21,
        0.72,
        -0.15000000000000002
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post--1-2",
      "from": [
        -1.21,
        0.17,
        0.5499999999999999
      ],
      "to": [
        -1.21,
        0.5700000000000001,
        0.5499999999999999
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post--1-3",
      "from": [
        -1.21,
        0.17,
        1.2499999999999996
      ],
      "to": [
        -1.21,
        0.42000000000000004,
        1.2499999999999996
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-upper-1",
      "from": [
        1.21,
        0.87,
        -1
      ],
      "to": [
        1.21,
        0.37,
        1.55
      ],
      "r": 0.034,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post-1-0",
      "from": [
        1.21,
        0.17,
        -0.85
      ],
      "to": [
        1.21,
        0.87,
        -0.85
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post-1-1",
      "from": [
        1.21,
        0.17,
        -0.15000000000000002
      ],
      "to": [
        1.21,
        0.72,
        -0.15000000000000002
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post-1-2",
      "from": [
        1.21,
        0.17,
        0.5499999999999999
      ],
      "to": [
        1.21,
        0.5700000000000001,
        0.5499999999999999
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "rod",
      "n": "handrail-post-1-3",
      "from": [
        1.21,
        0.17,
        1.2499999999999996
      ],
      "to": [
        1.21,
        0.42000000000000004,
        1.2499999999999996
      ],
      "r": 0.024,
      "c": 10997716
    },
    {
      "t": "box",
      "n": "tactile-entry-tiles",
      "p": [
        0,
        0.17,
        1.38
      ],
      "s": [
        0.9,
        0.016,
        0.28
      ],
      "c": 6650245
    }
  ]
}); }
