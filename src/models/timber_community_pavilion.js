import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Timber Community Pavilion / 社区木结构亭廊模块. */
export const assetMeta = {
  "id": "architecture.timber-community-pavilion.001",
  "slug": "timber-community-pavilion",
  "title": "Timber Community Pavilion",
  "title_zh": "社区木结构亭廊模块",
  "summary": "Modular open timber pavilion with roof trusses, decking and benches",
  "category": "architecture",
  "tags": [
    "timber",
    "community",
    "pavilion",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.85,
    3.25,
    3.35
  ],
  "generator": "createTimberCommunityPavilion",
  "source_path": "src/models/timber_community_pavilion.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/timber-community-pavilion.webp",
  "accent": "#bca17c"
};
export function createTimberCommunityPavilion() { return buildRecipe({
  "title": "Timber Community Pavilion",
  "dimensions": [
    3.85,
    3.25,
    3.35
  ],
  "parts": [
    {
      "t": "box",
      "n": "community-pavilion-deck",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        3.4,
        0.25,
        2.83
      ],
      "c": 12362108
    },
    {
      "t": "rod",
      "n": "timber-load-post--1.46--1.16",
      "from": [
        -1.46,
        0.25,
        -1.16
      ],
      "to": [
        -1.46,
        2.72,
        -1.16
      ],
      "r": 0.115,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "timber-load-post--1.46-1.16",
      "from": [
        -1.46,
        0.25,
        1.16
      ],
      "to": [
        -1.46,
        2.72,
        1.16
      ],
      "r": 0.115,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "timber-load-post-1.46--1.16",
      "from": [
        1.46,
        0.25,
        -1.16
      ],
      "to": [
        1.46,
        2.72,
        -1.16
      ],
      "r": 0.115,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "timber-load-post-1.46-1.16",
      "from": [
        1.46,
        0.25,
        1.16
      ],
      "to": [
        1.46,
        2.72,
        1.16
      ],
      "r": 0.115,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-left-0",
      "from": [
        -1.42,
        2.58,
        -1.29
      ],
      "to": [
        -1.42,
        3.18,
        0
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-right-0",
      "from": [
        -1.42,
        3.18,
        0
      ],
      "to": [
        -1.42,
        2.58,
        1.29
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-left-1",
      "from": [
        -0.8599999999999999,
        2.58,
        -1.29
      ],
      "to": [
        -0.8599999999999999,
        3.18,
        0
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-right-1",
      "from": [
        -0.8599999999999999,
        3.18,
        0
      ],
      "to": [
        -0.8599999999999999,
        2.58,
        1.29
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-left-2",
      "from": [
        -0.2999999999999998,
        2.58,
        -1.29
      ],
      "to": [
        -0.2999999999999998,
        3.18,
        0
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-right-2",
      "from": [
        -0.2999999999999998,
        3.18,
        0
      ],
      "to": [
        -0.2999999999999998,
        2.58,
        1.29
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-left-3",
      "from": [
        0.26000000000000023,
        2.58,
        -1.29
      ],
      "to": [
        0.26000000000000023,
        3.18,
        0
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-right-3",
      "from": [
        0.26000000000000023,
        3.18,
        0
      ],
      "to": [
        0.26000000000000023,
        2.58,
        1.29
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-left-4",
      "from": [
        0.8200000000000003,
        2.58,
        -1.29
      ],
      "to": [
        0.8200000000000003,
        3.18,
        0
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-right-4",
      "from": [
        0.8200000000000003,
        3.18,
        0
      ],
      "to": [
        0.8200000000000003,
        2.58,
        1.29
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-left-5",
      "from": [
        1.3800000000000003,
        2.58,
        -1.29
      ],
      "to": [
        1.3800000000000003,
        3.18,
        0
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "roof-slope-right-5",
      "from": [
        1.3800000000000003,
        3.18,
        0
      ],
      "to": [
        1.3800000000000003,
        2.58,
        1.29
      ],
      "r": 0.059,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "pavilion-roof-left",
      "p": [
        0,
        2.87,
        -0.65
      ],
      "s": [
        3.43,
        0.07,
        1.59
      ],
      "c": 14209724
    },
    {
      "t": "box",
      "n": "pavilion-roof-right",
      "p": [
        0,
        2.87,
        0.65
      ],
      "s": [
        3.43,
        0.07,
        1.59
      ],
      "c": 14209724
    },
    {
      "t": "box",
      "n": "public-bench-seat--1",
      "p": [
        -1.23,
        0.62,
        0
      ],
      "s": [
        0.43,
        0.13,
        1.62
      ],
      "c": 6389383
    },
    {
      "t": "box",
      "n": "bench-support--1",
      "p": [
        -1.23,
        0.32,
        0
      ],
      "s": [
        0.13,
        0.56,
        1.2
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "public-bench-seat-1",
      "p": [
        1.23,
        0.62,
        0
      ],
      "s": [
        0.43,
        0.13,
        1.62
      ],
      "c": 6389383
    },
    {
      "t": "box",
      "n": "bench-support-1",
      "p": [
        1.23,
        0.32,
        0
      ],
      "s": [
        0.13,
        0.56,
        1.2
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-0",
      "p": [
        -1.42,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-1",
      "p": [
        -1.02,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-2",
      "p": [
        -0.6199999999999999,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-3",
      "p": [
        -0.21999999999999975,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-4",
      "p": [
        0.18000000000000016,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-5",
      "p": [
        0.5800000000000001,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-6",
      "p": [
        0.9800000000000004,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "deck-board-7",
      "p": [
        1.3800000000000003,
        0.32,
        0
      ],
      "s": [
        0.36,
        0.035,
        2.65
      ],
      "c": 6721178
    }
  ]
}); }
