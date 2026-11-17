import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Retractable Greenhouse Wall / 可收放温室幕墙模块. */
export const assetMeta = {
  "id": "architecture.retractable-greenhouse-wall.001",
  "slug": "retractable-greenhouse-wall",
  "title": "Retractable Greenhouse Wall",
  "title_zh": "可收放温室幕墙模块",
  "summary": "Greenhouse facade with movable glazed louver panels and tracks",
  "category": "architecture",
  "tags": [
    "retractable",
    "greenhouse",
    "wall",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.4,
    2.8,
    1.2
  ],
  "generator": "createRetractableGreenhouseWall",
  "source_path": "src/models/retractable_greenhouse_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/retractable-greenhouse-wall.webp",
  "accent": "#617e87"
};
export function createRetractableGreenhouseWall() { return buildRecipe({
  "title": "Retractable Greenhouse Wall",
  "dimensions": [
    3.4,
    2.8,
    1.2
  ],
  "parts": [
    {
      "t": "rod",
      "n": "greenhouse-vertical-frame-0",
      "from": [
        -1.35,
        0.04,
        0
      ],
      "to": [
        -1.35,
        2.6,
        0
      ],
      "r": 0.047,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "louver-glass-panel-0",
      "p": [
        -1.35,
        1.43,
        0.12
      ],
      "s": [
        0.45,
        2.07,
        0.055
      ],
      "c": 14209724
    },
    {
      "t": "rod",
      "n": "retractable-rail-0",
      "from": [
        -1.35,
        2.55,
        -0.37
      ],
      "to": [
        -1.35,
        2.55,
        0.4
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "greenhouse-vertical-frame-1",
      "from": [
        -0.8200000000000001,
        0.04,
        0
      ],
      "to": [
        -0.8200000000000001,
        2.6,
        0
      ],
      "r": 0.047,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "louver-glass-panel-1",
      "p": [
        -0.8200000000000001,
        1.43,
        0.12
      ],
      "s": [
        0.45,
        2.07,
        0.055
      ],
      "c": 14209724
    },
    {
      "t": "rod",
      "n": "retractable-rail-1",
      "from": [
        -0.8200000000000001,
        2.55,
        -0.37
      ],
      "to": [
        -0.8200000000000001,
        2.55,
        0.4
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "greenhouse-vertical-frame-2",
      "from": [
        -0.29000000000000004,
        0.04,
        0
      ],
      "to": [
        -0.29000000000000004,
        2.6,
        0
      ],
      "r": 0.047,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "louver-glass-panel-2",
      "p": [
        -0.29000000000000004,
        1.43,
        0.12
      ],
      "s": [
        0.45,
        2.07,
        0.055
      ],
      "c": 14209724
    },
    {
      "t": "rod",
      "n": "retractable-rail-2",
      "from": [
        -0.29000000000000004,
        2.55,
        -0.37
      ],
      "to": [
        -0.29000000000000004,
        2.55,
        0.4
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "greenhouse-vertical-frame-3",
      "from": [
        0.24,
        0.04,
        0
      ],
      "to": [
        0.24,
        2.6,
        0
      ],
      "r": 0.047,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "louver-glass-panel-3",
      "p": [
        0.24,
        1.43,
        0.12
      ],
      "s": [
        0.45,
        2.07,
        0.055
      ],
      "c": 14209724
    },
    {
      "t": "rod",
      "n": "retractable-rail-3",
      "from": [
        0.24,
        2.55,
        -0.37
      ],
      "to": [
        0.24,
        2.55,
        0.4
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "greenhouse-vertical-frame-4",
      "from": [
        0.77,
        0.04,
        0
      ],
      "to": [
        0.77,
        2.6,
        0
      ],
      "r": 0.047,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "louver-glass-panel-4",
      "p": [
        0.77,
        1.43,
        0.12
      ],
      "s": [
        0.45,
        2.07,
        0.055
      ],
      "c": 14209724
    },
    {
      "t": "rod",
      "n": "retractable-rail-4",
      "from": [
        0.77,
        2.55,
        -0.37
      ],
      "to": [
        0.77,
        2.55,
        0.4
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "greenhouse-vertical-frame-5",
      "from": [
        1.3000000000000003,
        0.04,
        0
      ],
      "to": [
        1.3000000000000003,
        2.6,
        0
      ],
      "r": 0.047,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "louver-glass-panel-5",
      "p": [
        1.3000000000000003,
        1.43,
        0.12
      ],
      "s": [
        0.45,
        2.07,
        0.055
      ],
      "c": 14209724
    },
    {
      "t": "rod",
      "n": "retractable-rail-5",
      "from": [
        1.3000000000000003,
        2.55,
        -0.37
      ],
      "to": [
        1.3000000000000003,
        2.55,
        0.4
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "greenhouse-upper-transom",
      "from": [
        -1.54,
        2.61,
        0
      ],
      "to": [
        1.54,
        2.61,
        0
      ],
      "r": 0.072,
      "c": 12362108
    },
    {
      "t": "rod",
      "n": "greenhouse-lower-transom",
      "from": [
        -1.54,
        0.09,
        0
      ],
      "to": [
        1.54,
        0.09,
        0
      ],
      "r": 0.07,
      "c": 12362108
    },
    {
      "t": "box",
      "n": "movable-shade-motor-0",
      "p": [
        -1.35,
        2.44,
        0.35
      ],
      "s": [
        0.22,
        0.2,
        0.21
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "movable-shade-motor-1",
      "p": [
        -0.8200000000000001,
        2.44,
        0.35
      ],
      "s": [
        0.22,
        0.2,
        0.21
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "movable-shade-motor-2",
      "p": [
        -0.29000000000000004,
        2.44,
        0.35
      ],
      "s": [
        0.22,
        0.2,
        0.21
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "movable-shade-motor-3",
      "p": [
        0.24,
        2.44,
        0.35
      ],
      "s": [
        0.22,
        0.2,
        0.21
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "movable-shade-motor-4",
      "p": [
        0.77,
        2.44,
        0.35
      ],
      "s": [
        0.22,
        0.2,
        0.21
      ],
      "c": 6721178
    },
    {
      "t": "box",
      "n": "movable-shade-motor-5",
      "p": [
        1.3000000000000003,
        2.44,
        0.35
      ],
      "s": [
        0.22,
        0.2,
        0.21
      ],
      "c": 6721178
    }
  ]
}); }
