import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "sports.outdoor-table-tennis.001",
  "slug": "outdoor-table-tennis",
  "title": "Outdoor Table Tennis",
  "title_zh": "户外乒乓球台",
  "summary": "Regulation-shaped fixed public ping-pong table with center net and paddle.",
  "category": "sports",
  "tags": [
    "table-tennis",
    "ping-pong",
    "recreation",
    "sports"
  ],
  "dimensions_m": [
    2.74,
    0.91,
    1.55
  ],
  "generator": "createOutdoorTableTennis",
  "source_path": "src/models/outdoor_table_tennis.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/outdoor-table-tennis.webp"
};
export function createOutdoorTableTennis() {return buildRecipe({
  "title": "Outdoor Table Tennis",
  "dimensions": [
    2.74,
    0.91,
    1.55
  ],
  "parts": [
    {
      "t": "box",
      "n": "playing-surface",
      "p": [
        0,
        0.8,
        0
      ],
      "s": [
        2.74,
        0.06,
        1.55
      ],
      "c": 5212061
    },
    {
      "t": "box",
      "n": "centerline",
      "p": [
        0,
        0.834,
        0
      ],
      "s": [
        2.71,
        0.006,
        0.014
      ],
      "c": 15133151
    },
    {
      "t": "box",
      "n": "net",
      "p": [
        0,
        0.905,
        0
      ],
      "s": [
        0.022,
        0.17,
        1.53
      ],
      "c": 13489878
    },
    {
      "t": "rod",
      "n": "net-left-post",
      "from": [
        0,
        0.8,
        -0.76
      ],
      "to": [
        0,
        0.95,
        -0.76
      ],
      "r": 0.027,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-right-post",
      "from": [
        0,
        0.8,
        0.76
      ],
      "to": [
        0,
        0.95,
        0.76
      ],
      "r": 0.027,
      "c": 9348268
    },
    {
      "t": "box",
      "n": "leg-brace",
      "p": [
        0,
        0.28,
        0
      ],
      "s": [
        1.96,
        0.06,
        0.07
      ],
      "c": 9348268
    },
    {
      "t": "sphere",
      "n": "spare-ball",
      "p": [
        0.4,
        0.86,
        0.38
      ],
      "s": [
        0.04,
        0.04,
        0.04
      ],
      "c": 15133151
    },
    {
      "t": "box",
      "n": "side-line-0",
      "p": [
        -1.33,
        0.833,
        0
      ],
      "s": [
        0.025,
        0.009,
        1.48
      ],
      "c": 15133151
    },
    {
      "t": "box",
      "n": "side-line-1",
      "p": [
        1.33,
        0.833,
        0
      ],
      "s": [
        0.025,
        0.009,
        1.48
      ],
      "c": 15133151
    },
    {
      "t": "box",
      "n": "end-line-0",
      "p": [
        0,
        0.833,
        -0.75
      ],
      "s": [
        2.63,
        0.009,
        0.023
      ],
      "c": 15133151
    },
    {
      "t": "box",
      "n": "end-line-1",
      "p": [
        0,
        0.833,
        0.75
      ],
      "s": [
        2.63,
        0.009,
        0.023
      ],
      "c": 15133151
    },
    {
      "t": "box",
      "n": "pedestal-leg-0-0",
      "p": [
        -0.86,
        0.39,
        -0.5
      ],
      "s": [
        0.085,
        0.77,
        0.084
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "pedestal-leg-0-1",
      "p": [
        -0.86,
        0.39,
        0.5
      ],
      "s": [
        0.085,
        0.77,
        0.084
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "pedestal-leg-1-0",
      "p": [
        0.86,
        0.39,
        -0.5
      ],
      "s": [
        0.085,
        0.77,
        0.084
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "pedestal-leg-1-1",
      "p": [
        0.86,
        0.39,
        0.5
      ],
      "s": [
        0.085,
        0.77,
        0.084
      ],
      "c": 3424586
    },
    {
      "t": "rod",
      "n": "net-strand-0",
      "from": [
        0,
        0.85,
        -0.69
      ],
      "to": [
        0,
        0.95,
        -0.69
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-1",
      "from": [
        0,
        0.85,
        -0.49999999999999994
      ],
      "to": [
        0,
        0.95,
        -0.49999999999999994
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-2",
      "from": [
        0,
        0.85,
        -0.30999999999999994
      ],
      "to": [
        0,
        0.95,
        -0.30999999999999994
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-3",
      "from": [
        0,
        0.85,
        -0.11999999999999988
      ],
      "to": [
        0,
        0.95,
        -0.11999999999999988
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-4",
      "from": [
        0,
        0.85,
        0.07000000000000006
      ],
      "to": [
        0,
        0.95,
        0.07000000000000006
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-5",
      "from": [
        0,
        0.85,
        0.26
      ],
      "to": [
        0,
        0.95,
        0.26
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-6",
      "from": [
        0,
        0.85,
        0.4500000000000002
      ],
      "to": [
        0,
        0.95,
        0.4500000000000002
      ],
      "r": 0.003,
      "c": 9348268
    },
    {
      "t": "rod",
      "n": "net-strand-7",
      "from": [
        0,
        0.85,
        0.6400000000000001
      ],
      "to": [
        0,
        0.95,
        0.6400000000000001
      ],
      "r": 0.003,
      "c": 9348268
    }
  ]
});}
