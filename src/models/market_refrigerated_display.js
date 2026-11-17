import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "kitchen.market-refrigerated-display.001",
  "slug": "market-refrigerated-display",
  "title": "Market Refrigerated Display",
  "title_zh": "商用冷藏展示柜",
  "summary": "Refrigerated commercial showcase with bottle shelves and compressor",
  "category": "kitchen",
  "tags": [
    "retail",
    "showcase",
    "refrigerated"
  ],
  "dimensions_m": [
    1.53,
    1.4,
    0.72
  ],
  "generator": "createMarketRefrigeratedDisplay",
  "source_path": "src/models/market_refrigerated_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/market-refrigerated-display.webp"
};
export function createMarketRefrigeratedDisplay() { return buildRecipe({
  "title": "Market Refrigerated Display",
  "dimensions": [
    1.53,
    1.4,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "lower-compressor",
      "p": [
        0,
        0.24,
        0
      ],
      "s": [
        1.52,
        0.48,
        0.7
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "glass-case",
      "p": [
        0,
        0.89,
        0
      ],
      "s": [
        1.5,
        0.87,
        0.7
      ],
      "c": 10337731
    },
    {
      "t": "box",
      "n": "front-glass",
      "p": [
        0,
        0.91,
        0.365
      ],
      "s": [
        1.42,
        0.76,
        0.024
      ],
      "c": 7515837
    },
    {
      "t": "box",
      "n": "top",
      "p": [
        0,
        1.38,
        0
      ],
      "s": [
        1.53,
        0.05,
        0.72
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "shelf-0",
      "p": [
        0,
        0.58,
        0
      ],
      "s": [
        1.37,
        0.036,
        0.56
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "shelf-1",
      "p": [
        0,
        0.8899999999999999,
        0
      ],
      "s": [
        1.37,
        0.036,
        0.56
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "shelf-2",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        1.37,
        0.036,
        0.56
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-0",
      "p": [
        -0.54,
        0.705,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 12547942
    },
    {
      "t": "cylinder",
      "n": "lid-0",
      "p": [
        -0.54,
        0.8,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-1",
      "p": [
        0,
        0.705,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 6331035
    },
    {
      "t": "cylinder",
      "n": "lid-1",
      "p": [
        0,
        0.8,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-2",
      "p": [
        0.54,
        0.705,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 12757618
    },
    {
      "t": "cylinder",
      "n": "lid-2",
      "p": [
        0.54,
        0.8,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-3",
      "p": [
        -0.54,
        1.015,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 12547942
    },
    {
      "t": "cylinder",
      "n": "lid-3",
      "p": [
        -0.54,
        1.1099999999999999,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-4",
      "p": [
        0,
        1.015,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 6331035
    },
    {
      "t": "cylinder",
      "n": "lid-4",
      "p": [
        0,
        1.1099999999999999,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-5",
      "p": [
        0.54,
        1.015,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 12757618
    },
    {
      "t": "cylinder",
      "n": "lid-5",
      "p": [
        0.54,
        1.1099999999999999,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-6",
      "p": [
        -0.54,
        1.325,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 12547942
    },
    {
      "t": "cylinder",
      "n": "lid-6",
      "p": [
        -0.54,
        1.42,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-7",
      "p": [
        0,
        1.325,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 6331035
    },
    {
      "t": "cylinder",
      "n": "lid-7",
      "p": [
        0,
        1.42,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "cylinder",
      "n": "drink-8",
      "p": [
        0.54,
        1.325,
        0
      ],
      "s": [
        0.105,
        0.17,
        0.105
      ],
      "c": 12757618
    },
    {
      "t": "cylinder",
      "n": "lid-8",
      "p": [
        0.54,
        1.42,
        0
      ],
      "s": [
        0.105,
        0.015,
        0.105
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-0",
      "p": [
        -0.59,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-1",
      "p": [
        -0.39999999999999997,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-2",
      "p": [
        -0.20999999999999996,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-3",
      "p": [
        -0.019999999999999907,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-4",
      "p": [
        0.17000000000000004,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-5",
      "p": [
        0.36,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "compressor-vent-6",
      "p": [
        0.5500000000000002,
        0.22,
        0.365
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9872549
    },
    {
      "t": "box",
      "n": "price-label",
      "p": [
        0,
        1.26,
        0.378
      ],
      "s": [
        0.48,
        0.14,
        0.013
      ],
      "c": 15131609
    }
  ]
}); }
