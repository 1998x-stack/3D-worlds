import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Market Citrus Juicer Counter / 鲜榨柑橘汁操作台. */
export const assetMeta = {
  "id": "kitchen.market-citrus-juicer-counter.001",
  "slug": "market-citrus-juicer-counter",
  "title": "Market Citrus Juicer Counter",
  "title_zh": "鲜榨柑橘汁操作台",
  "summary": "Produce market juice counter with citrus press, glasses and fruit display",
  "category": "kitchen",
  "tags": [
    "market",
    "citrus",
    "juicer",
    "counter",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.6,
    1.58,
    0.88
  ],
  "generator": "createMarketCitrusJuicerCounter",
  "source_path": "src/models/market_citrus_juicer_counter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/market-citrus-juicer-counter.webp",
  "accent": "#637e83"
};
export function createMarketCitrusJuicerCounter() { return buildRecipe({
  "title": "Market Citrus Juicer Counter",
  "dimensions": [
    1.6,
    1.58,
    0.88
  ],
  "parts": [
    {
      "t": "box",
      "n": "fruit-juice-market-counter",
      "p": [
        0,
        0.58,
        0
      ],
      "s": [
        1.4,
        0.98,
        0.68
      ],
      "c": 13225148
    },
    {
      "t": "box",
      "n": "citrus-display-rack",
      "p": [
        -0.43,
        1.16,
        -0.12
      ],
      "s": [
        0.45,
        0.19,
        0.42
      ],
      "c": 6520451
    },
    {
      "t": "sphere",
      "n": "orange-fruit-0",
      "p": [
        -0.61,
        1.31,
        -0.21
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-1",
      "p": [
        -0.48,
        1.31,
        -0.07999999999999999
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-2",
      "p": [
        -0.35,
        1.31,
        -0.21
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-3",
      "p": [
        -0.21999999999999997,
        1.31,
        -0.07999999999999999
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-4",
      "p": [
        -0.61,
        1.4300000000000002,
        -0.21
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-5",
      "p": [
        -0.48,
        1.4300000000000002,
        -0.07999999999999999
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-6",
      "p": [
        -0.35,
        1.4300000000000002,
        -0.21
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "sphere",
      "n": "orange-fruit-7",
      "p": [
        -0.21999999999999997,
        1.4300000000000002,
        -0.07999999999999999
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 14198098
    },
    {
      "t": "cylinder",
      "n": "juice-press-column",
      "p": [
        0.32,
        1.3,
        -0.11
      ],
      "s": [
        0.18,
        0.67,
        0.18
      ],
      "c": 14136923
    },
    {
      "t": "cone",
      "n": "juice-press-cone",
      "p": [
        0.32,
        1.58,
        -0.1
      ],
      "s": [
        0.25,
        0.23,
        0.25
      ],
      "c": 11767394
    },
    {
      "t": "cylinder",
      "n": "juice-collection-glass",
      "p": [
        0.32,
        1.12,
        0.22
      ],
      "s": [
        0.25,
        0.3,
        0.25
      ],
      "c": 11767394
    },
    {
      "t": "cylinder",
      "n": "glass-cup-0",
      "p": [
        -0.49,
        1.15,
        0.24
      ],
      "s": [
        0.15,
        0.24,
        0.15
      ],
      "c": 11767394
    },
    {
      "t": "cylinder",
      "n": "glass-cup-1",
      "p": [
        -0.24,
        1.15,
        0.24
      ],
      "s": [
        0.15,
        0.24,
        0.15
      ],
      "c": 11767394
    },
    {
      "t": "cylinder",
      "n": "glass-cup-2",
      "p": [
        0.010000000000000009,
        1.15,
        0.24
      ],
      "s": [
        0.15,
        0.24,
        0.15
      ],
      "c": 11767394
    },
    {
      "t": "cylinder",
      "n": "glass-cup-3",
      "p": [
        0.26,
        1.15,
        0.24
      ],
      "s": [
        0.15,
        0.24,
        0.15
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "menu-display-board",
      "p": [
        0,
        1.41,
        0.4
      ],
      "s": [
        0.9,
        0.39,
        0.03
      ],
      "c": 6520451
    }
  ]
}); }
