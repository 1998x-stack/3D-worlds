import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Subway Platform Edge Module / 地铁站台边缘模块. */
export const assetMeta = {
  "id": "architecture.subway-platform-edge-module.001",
  "slug": "subway-platform-edge-module",
  "title": "Subway Platform Edge Module",
  "title_zh": "地铁站台边缘模块",
  "summary": "Modular urban transit platform with tactile strips, safety screen doors and overhead signage",
  "category": "architecture",
  "tags": [
    "subway",
    "platform",
    "edge",
    "module",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.5,
    2.62,
    2.15
  ],
  "generator": "createSubwayPlatformEdgeModule",
  "source_path": "src/models/subway_platform_edge_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/subway-platform-edge-module.webp",
  "accent": "#c3ad8d"
};
export function createSubwayPlatformEdgeModule() { return buildRecipe({
  "title": "Subway Platform Edge Module",
  "dimensions": [
    3.5,
    2.62,
    2.15
  ],
  "parts": [
    {
      "t": "box",
      "n": "rail-transit-platform-floor",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        3.29,
        0.27,
        1.76
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-0",
      "p": [
        -1.48,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-1",
      "p": [
        -1.268,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-2",
      "p": [
        -1.056,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-3",
      "p": [
        -0.844,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-4",
      "p": [
        -0.632,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-5",
      "p": [
        -0.41999999999999993,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-6",
      "p": [
        -0.20799999999999996,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-7",
      "p": [
        0.0040000000000000036,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-8",
      "p": [
        0.21599999999999997,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-9",
      "p": [
        0.42799999999999994,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-10",
      "p": [
        0.6400000000000001,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-11",
      "p": [
        0.8519999999999999,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-12",
      "p": [
        1.064,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-13",
      "p": [
        1.2759999999999998,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "tactile-platform-tile-14",
      "p": [
        1.488,
        0.335,
        0.52
      ],
      "s": [
        0.17,
        0.025,
        0.23
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "platform-screen-door-post--1.48",
      "from": [
        -1.48,
        0.37,
        -0.55
      ],
      "to": [
        -1.48,
        2.28,
        -0.55
      ],
      "r": 0.075,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "platform-screen-door-post-0",
      "from": [
        0,
        0.37,
        -0.55
      ],
      "to": [
        0,
        2.28,
        -0.55
      ],
      "r": 0.075,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "platform-screen-door-post-1.48",
      "from": [
        1.48,
        0.37,
        -0.55
      ],
      "to": [
        1.48,
        2.28,
        -0.55
      ],
      "r": 0.075,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "platform-glass-doors-0",
      "p": [
        -1.12,
        1.28,
        -0.58
      ],
      "s": [
        0.69,
        1.63,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "platform-glass-doors-1",
      "p": [
        -0.3700000000000001,
        1.28,
        -0.58
      ],
      "s": [
        0.69,
        1.63,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "platform-glass-doors-2",
      "p": [
        0.3799999999999999,
        1.28,
        -0.58
      ],
      "s": [
        0.69,
        1.63,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "platform-glass-doors-3",
      "p": [
        1.13,
        1.28,
        -0.58
      ],
      "s": [
        0.69,
        1.63,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "box",
      "n": "transit-overhead-nameplate",
      "p": [
        0,
        2.35,
        -0.56
      ],
      "s": [
        2.75,
        0.18,
        0.11
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "station-warning-chevron-0",
      "p": [
        -1.3,
        0.33,
        -0.28
      ],
      "s": [
        0.22,
        0.018,
        0.17
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "station-warning-chevron-1",
      "p": [
        -0.65,
        0.33,
        -0.28
      ],
      "s": [
        0.22,
        0.018,
        0.17
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "station-warning-chevron-2",
      "p": [
        0,
        0.33,
        -0.28
      ],
      "s": [
        0.22,
        0.018,
        0.17
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "station-warning-chevron-3",
      "p": [
        0.6500000000000001,
        0.33,
        -0.28
      ],
      "s": [
        0.22,
        0.018,
        0.17
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "station-warning-chevron-4",
      "p": [
        1.3,
        0.33,
        -0.28
      ],
      "s": [
        0.22,
        0.018,
        0.17
      ],
      "c": 7233104
    }
  ]
}); }
