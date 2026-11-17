import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Tabletop Zen Waterfall / 桌面禅意叠石流水. */
export const assetMeta = {
  "id": "decor.tabletop-zen-waterfall.001",
  "slug": "tabletop-zen-waterfall",
  "title": "Tabletop Zen Waterfall",
  "title_zh": "桌面禅意叠石流水",
  "summary": "Meditation tabletop fountain with stepped stone bowls, pebbles and small bamboo planting",
  "category": "decor",
  "tags": [
    "tabletop",
    "zen",
    "waterfall",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.15,
    1.28,
    0.95
  ],
  "generator": "createTabletopZenWaterfall",
  "source_path": "src/models/tabletop_zen_waterfall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/tabletop-zen-waterfall.webp",
  "accent": "#90a68a"
};
export function createTabletopZenWaterfall() { return buildRecipe({
  "title": "Tabletop Zen Waterfall",
  "dimensions": [
    1.15,
    1.28,
    0.95
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "zen-water-basin",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        0.95,
        0.25,
        0.78
      ],
      "c": 12818301
    },
    {
      "t": "sphere",
      "n": "waterfall-tiered-stone-0",
      "p": [
        0,
        0.23,
        -0.16
      ],
      "s": [
        0.58,
        0.12,
        0.33
      ],
      "c": 9479818
    },
    {
      "t": "box",
      "n": "water-step-0",
      "p": [
        0,
        0.31,
        -0.04
      ],
      "s": [
        0.19,
        0.014,
        0.21
      ],
      "c": 15389351
    },
    {
      "t": "sphere",
      "n": "waterfall-tiered-stone-1",
      "p": [
        0,
        0.43000000000000005,
        -0.13
      ],
      "s": [
        0.49999999999999994,
        0.12,
        0.33
      ],
      "c": 9479818
    },
    {
      "t": "box",
      "n": "water-step-1",
      "p": [
        0,
        0.51,
        -0.010000000000000002
      ],
      "s": [
        0.19,
        0.014,
        0.21
      ],
      "c": 15389351
    },
    {
      "t": "sphere",
      "n": "waterfall-tiered-stone-2",
      "p": [
        0,
        0.63,
        -0.1
      ],
      "s": [
        0.41999999999999993,
        0.12,
        0.33
      ],
      "c": 9479818
    },
    {
      "t": "box",
      "n": "water-step-2",
      "p": [
        0,
        0.71,
        0.019999999999999997
      ],
      "s": [
        0.19,
        0.014,
        0.21
      ],
      "c": 15389351
    },
    {
      "t": "sphere",
      "n": "waterfall-tiered-stone-3",
      "p": [
        0,
        0.8300000000000001,
        -0.07
      ],
      "s": [
        0.33999999999999997,
        0.12,
        0.33
      ],
      "c": 9479818
    },
    {
      "t": "box",
      "n": "water-step-3",
      "p": [
        0,
        0.9100000000000001,
        0.049999999999999996
      ],
      "s": [
        0.19,
        0.014,
        0.21
      ],
      "c": 15389351
    },
    {
      "t": "sphere",
      "n": "waterfall-tiered-stone-4",
      "p": [
        0,
        1.03,
        -0.04000000000000001
      ],
      "s": [
        0.25999999999999995,
        0.12,
        0.33
      ],
      "c": 9479818
    },
    {
      "t": "box",
      "n": "water-step-4",
      "p": [
        0,
        1.11,
        0.07999999999999999
      ],
      "s": [
        0.19,
        0.014,
        0.21
      ],
      "c": 15389351
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-0",
      "p": [
        -0.41,
        0.19,
        0
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-1",
      "p": [
        -0.23999999999999996,
        0.19,
        0.16
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-2",
      "p": [
        -0.06999999999999995,
        0.19,
        0.32
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-3",
      "p": [
        0.10000000000000003,
        0.19,
        0
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-4",
      "p": [
        0.2700000000000001,
        0.19,
        0.16
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-5",
      "p": [
        0.4400000000000001,
        0.19,
        0.32
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-6",
      "p": [
        -0.41,
        0.19,
        0
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-7",
      "p": [
        -0.23999999999999996,
        0.19,
        0.16
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-8",
      "p": [
        -0.06999999999999995,
        0.19,
        0.32
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-9",
      "p": [
        0.10000000000000003,
        0.19,
        0
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "sphere",
      "n": "river-worn-pebble-10",
      "p": [
        0.2700000000000001,
        0.19,
        0.16
      ],
      "s": [
        0.14,
        0.09,
        0.1
      ],
      "c": 4413544
    },
    {
      "t": "rod",
      "n": "mini-bamboo-stem-0",
      "from": [
        0.36,
        0.25,
        -0.15
      ],
      "to": [
        0.37,
        1.02,
        -0.15
      ],
      "r": 0.019,
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "mini-bamboo-stem-1",
      "from": [
        0.36,
        0.25,
        -0.06999999999999999
      ],
      "to": [
        0.37,
        1.1,
        -0.06999999999999999
      ],
      "r": 0.019,
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "mini-bamboo-stem-2",
      "from": [
        0.36,
        0.25,
        0.010000000000000009
      ],
      "to": [
        0.37,
        1.18,
        0.010000000000000009
      ],
      "r": 0.019,
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "mini-bamboo-stem-3",
      "from": [
        0.36,
        0.25,
        0.09
      ],
      "to": [
        0.37,
        1.02,
        0.09
      ],
      "r": 0.019,
      "c": 12818301
    },
    {
      "t": "rod",
      "n": "mini-bamboo-stem-4",
      "from": [
        0.36,
        0.25,
        0.17
      ],
      "to": [
        0.37,
        1.1,
        0.17
      ],
      "r": 0.019,
      "c": 12818301
    },
    {
      "t": "sphere",
      "n": "bamboo-fern-leaf-0",
      "p": [
        0.39,
        1,
        -0.13
      ],
      "s": [
        0.22,
        0.07,
        0.13
      ],
      "c": 8495748
    },
    {
      "t": "sphere",
      "n": "bamboo-fern-leaf-1",
      "p": [
        0.39,
        0.9,
        -0.04000000000000001
      ],
      "s": [
        0.22,
        0.07,
        0.13
      ],
      "c": 8495748
    },
    {
      "t": "sphere",
      "n": "bamboo-fern-leaf-2",
      "p": [
        0.39,
        0.8,
        0.04999999999999999
      ],
      "s": [
        0.22,
        0.07,
        0.13
      ],
      "c": 8495748
    },
    {
      "t": "sphere",
      "n": "bamboo-fern-leaf-3",
      "p": [
        0.39,
        0.7,
        0.14
      ],
      "s": [
        0.22,
        0.07,
        0.13
      ],
      "c": 8495748
    }
  ]
}); }
