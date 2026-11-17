import { buildRecipe } from './recipe_engine.js';
/** Coastal Fishing Dinghy: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "vehicles.coastal-fishing-dinghy.001",
  "slug": "coastal-fishing-dinghy",
  "title": "Coastal Fishing Dinghy",
  "title_zh": "沿海小型渔船",
  "summary": "Open-top fishing dinghy with side rails, seating benches, nets and outboard motor.",
  "category": "vehicles",
  "tags": [
    "boat",
    "fishing",
    "marine",
    "dinghy"
  ],
  "dimensions_m": [
    1.72,
    1.28,
    3.3
  ],
  "generator": "createCoastalFishingDinghy",
  "source_path": "src/models/coastal_fishing_dinghy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/coastal-fishing-dinghy.webp"
};
export function createCoastalFishingDinghy() {
  return buildRecipe({
  "title": "Coastal Fishing Dinghy",
  "dimensions": [
    1.72,
    1.28,
    3.3
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "longboat-hull",
      "p": [
        0,
        0.35,
        0
      ],
      "s": [
        1.66,
        0.64,
        3.18
      ],
      "c": 5146769
    },
    {
      "t": "box",
      "n": "inner-floor",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        1.15,
        0.07,
        2.4
      ],
      "c": 13089698
    },
    {
      "t": "box",
      "n": "high-gunwale-0",
      "p": [
        -0.72,
        0.68,
        0
      ],
      "s": [
        0.12,
        0.28,
        2.83
      ],
      "c": 3567997
    },
    {
      "t": "box",
      "n": "high-gunwale-1",
      "p": [
        0.72,
        0.68,
        0
      ],
      "s": [
        0.12,
        0.28,
        2.83
      ],
      "c": 3567997
    },
    {
      "t": "box",
      "n": "bench-0",
      "p": [
        0,
        0.72,
        -0.87
      ],
      "s": [
        1.31,
        0.09,
        0.35
      ],
      "c": 9531474
    },
    {
      "t": "box",
      "n": "bench-1",
      "p": [
        0,
        0.72,
        0.02
      ],
      "s": [
        1.31,
        0.09,
        0.35
      ],
      "c": 9531474
    },
    {
      "t": "box",
      "n": "bench-2",
      "p": [
        0,
        0.72,
        0.9
      ],
      "s": [
        1.31,
        0.09,
        0.35
      ],
      "c": 9531474
    },
    {
      "t": "box",
      "n": "bow-bumper",
      "p": [
        0,
        0.5,
        1.62
      ],
      "s": [
        0.85,
        0.19,
        0.12
      ],
      "c": 3291196
    },
    {
      "t": "box",
      "n": "stern-bumper",
      "p": [
        0,
        0.5,
        -1.53
      ],
      "s": [
        0.93,
        0.14,
        0.15
      ],
      "c": 3291196
    },
    {
      "t": "box",
      "n": "motor-casing",
      "p": [
        0,
        0.92,
        -1.58
      ],
      "s": [
        0.41,
        0.45,
        0.27
      ],
      "c": 3291196
    },
    {
      "t": "rod",
      "n": "outboard-shaft",
      "from": [
        0,
        0.85,
        -1.68
      ],
      "to": [
        0,
        0.18,
        -1.75
      ],
      "r": 0.05,
      "c": 8820381
    },
    {
      "t": "rod",
      "n": "fishing-net-cord-0",
      "from": [
        -0.55,
        0.88,
        -0.74
      ],
      "to": [
        0.55,
        0.88,
        -0.74
      ],
      "r": 0.012,
      "c": 15197657
    },
    {
      "t": "rod",
      "n": "fishing-net-cord-1",
      "from": [
        -0.55,
        0.88,
        -0.27999999999999997
      ],
      "to": [
        0.55,
        0.88,
        -0.27999999999999997
      ],
      "r": 0.012,
      "c": 15197657
    },
    {
      "t": "rod",
      "n": "fishing-net-cord-2",
      "from": [
        -0.55,
        0.88,
        0.18000000000000005
      ],
      "to": [
        0.55,
        0.88,
        0.18000000000000005
      ],
      "r": 0.012,
      "c": 15197657
    },
    {
      "t": "rod",
      "n": "fishing-net-cord-3",
      "from": [
        -0.55,
        0.88,
        0.6400000000000001
      ],
      "to": [
        0.55,
        0.88,
        0.6400000000000001
      ],
      "r": 0.012,
      "c": 15197657
    },
    {
      "t": "sphere",
      "n": "net-buoy-0",
      "p": [
        -0.46,
        0.9,
        0.48
      ],
      "s": [
        0.09,
        0.075,
        0.095
      ],
      "c": 15197657
    },
    {
      "t": "sphere",
      "n": "net-buoy-1",
      "p": [
        -0.16000000000000003,
        0.9,
        0.48
      ],
      "s": [
        0.09,
        0.075,
        0.095
      ],
      "c": 15051361
    },
    {
      "t": "sphere",
      "n": "net-buoy-2",
      "p": [
        0.13999999999999996,
        0.9,
        0.48
      ],
      "s": [
        0.09,
        0.075,
        0.095
      ],
      "c": 15197657
    },
    {
      "t": "sphere",
      "n": "net-buoy-3",
      "p": [
        0.4399999999999999,
        0.9,
        0.48
      ],
      "s": [
        0.09,
        0.075,
        0.095
      ],
      "c": 15051361
    }
  ]
});
}
