import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "architecture.gothic-stone-arch-module.001",
  "slug": "gothic-stone-arch-module",
  "title": "Gothic Stone Arch Module",
  "title_zh": "尖拱石门建筑模块",
  "summary": "Pointed sandstone portal with voussoirs, carved bosses and threshold",
  "category": "architecture",
  "tags": [
    "gothic",
    "arch",
    "modular"
  ],
  "dimensions_m": [
    2.24,
    3.28,
    0.55
  ],
  "generator": "createGothicStoneArchModule",
  "source_path": "src/models/gothic_stone_arch_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/gothic-stone-arch-module.webp"
};
export function createGothicStoneArchModule() { return buildRecipe({
  "title": "Gothic Stone Arch Module",
  "dimensions": [
    2.24,
    3.28,
    0.55
  ],
  "parts": [
    {
      "t": "box",
      "n": "column-0",
      "p": [
        -0.93,
        1.41,
        0
      ],
      "s": [
        0.37,
        2.82,
        0.48
      ],
      "c": 12759962
    },
    {
      "t": "box",
      "n": "base-0",
      "p": [
        -0.93,
        0.13,
        0
      ],
      "s": [
        0.47,
        0.26,
        0.52
      ],
      "c": 10262924
    },
    {
      "t": "box",
      "n": "capital-0",
      "p": [
        -0.93,
        2.82,
        0
      ],
      "s": [
        0.46,
        0.18,
        0.52
      ],
      "c": 11773580
    },
    {
      "t": "box",
      "n": "column-1",
      "p": [
        0.93,
        1.41,
        0
      ],
      "s": [
        0.37,
        2.82,
        0.48
      ],
      "c": 12759962
    },
    {
      "t": "box",
      "n": "base-1",
      "p": [
        0.93,
        0.13,
        0
      ],
      "s": [
        0.47,
        0.26,
        0.52
      ],
      "c": 10262924
    },
    {
      "t": "box",
      "n": "capital-1",
      "p": [
        0.93,
        2.82,
        0
      ],
      "s": [
        0.46,
        0.18,
        0.52
      ],
      "c": 11773580
    },
    {
      "t": "rod",
      "n": "left-arch",
      "from": [
        -0.94,
        2.68,
        0
      ],
      "to": [
        0,
        3.28,
        0
      ],
      "r": 0.19,
      "c": 12299406
    },
    {
      "t": "rod",
      "n": "right-arch",
      "from": [
        0.94,
        2.68,
        0
      ],
      "to": [
        0,
        3.28,
        0
      ],
      "r": 0.19,
      "c": 12299406
    },
    {
      "t": "box",
      "n": "keystone",
      "p": [
        0,
        3.17,
        0.018
      ],
      "s": [
        0.23,
        0.21,
        0.53
      ],
      "c": 13023384
    },
    {
      "t": "box",
      "n": "left-mortar-0",
      "p": [
        -0.9,
        1.45,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "left-mortar-1",
      "p": [
        -0.9,
        1.73,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "left-mortar-2",
      "p": [
        -0.9,
        2.01,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "left-mortar-3",
      "p": [
        -0.9,
        2.29,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "left-mortar-4",
      "p": [
        -0.9,
        2.5700000000000003,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "right-mortar-0",
      "p": [
        0.9,
        1.45,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "right-mortar-1",
      "p": [
        0.9,
        1.73,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "right-mortar-2",
      "p": [
        0.9,
        2.01,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "right-mortar-3",
      "p": [
        0.9,
        2.29,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "right-mortar-4",
      "p": [
        0.9,
        2.5700000000000003,
        0.24
      ],
      "s": [
        0.36,
        0.035,
        0.015
      ],
      "c": 8683120
    },
    {
      "t": "box",
      "n": "threshold",
      "p": [
        0,
        0.065,
        0
      ],
      "s": [
        2.23,
        0.13,
        0.54
      ],
      "c": 10198427
    },
    {
      "t": "sphere",
      "n": "carved-boss-0",
      "p": [
        -0.75,
        2.75,
        0.27
      ],
      "s": [
        0.1,
        0.11,
        0.034
      ],
      "c": 12755828
    },
    {
      "t": "sphere",
      "n": "carved-boss-1",
      "p": [
        0.75,
        2.75,
        0.27
      ],
      "s": [
        0.1,
        0.11,
        0.034
      ],
      "c": 12755828
    }
  ]
}); }
