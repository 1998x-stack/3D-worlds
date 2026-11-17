import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "decor.tiered-candle-centerpiece.001",
  "slug": "tiered-candle-centerpiece",
  "title": "Tiered Candle Centerpiece",
  "title_zh": "错层蜡烛烛台组合",
  "summary": "Three differing-height brass candlesticks with ivory wax",
  "category": "decor",
  "tags": [
    "candle",
    "centerpiece",
    "home"
  ],
  "dimensions_m": [
    0.79,
    0.74,
    0.57
  ],
  "generator": "createTieredCandleCenterpiece",
  "source_path": "src/models/tiered_candle_centerpiece.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/tiered-candle-centerpiece.webp"
};
export function createTieredCandleCenterpiece() { return buildRecipe({
  "title": "Tiered Candle Centerpiece",
  "dimensions": [
    0.79,
    0.74,
    0.57
  ],
  "parts": [
    {
      "t": "box",
      "n": "tray",
      "p": [
        0,
        0.055,
        0
      ],
      "s": [
        0.77,
        0.09,
        0.56
      ],
      "c": 10128765
    },
    {
      "t": "cylinder",
      "n": "stem-0",
      "p": [
        -0.23,
        0.14,
        0
      ],
      "s": [
        0.042,
        0.23,
        0.042
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "cup-0",
      "p": [
        -0.23,
        0.29,
        0
      ],
      "s": [
        0.15,
        0.05,
        0.15
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "wax-0",
      "p": [
        -0.23,
        0.42,
        0
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 15061686
    },
    {
      "t": "rod",
      "n": "wick-0",
      "from": [
        -0.23,
        0.53,
        0
      ],
      "to": [
        -0.23,
        0.59,
        0
      ],
      "r": 0.008,
      "c": 3358791
    },
    {
      "t": "cone",
      "n": "flame-0",
      "p": [
        -0.23,
        0.63,
        0
      ],
      "s": [
        0.058,
        0.13,
        0.059
      ],
      "c": 15317351
    },
    {
      "t": "cylinder",
      "n": "stem-1",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        0.042,
        0.34,
        0.042
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "cup-1",
      "p": [
        0,
        0.39999999999999997,
        0
      ],
      "s": [
        0.15,
        0.05,
        0.15
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "wax-1",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 13281187
    },
    {
      "t": "rod",
      "n": "wick-1",
      "from": [
        0,
        0.64,
        0
      ],
      "to": [
        0,
        0.7,
        0
      ],
      "r": 0.008,
      "c": 3358791
    },
    {
      "t": "cone",
      "n": "flame-1",
      "p": [
        0,
        0.74,
        0
      ],
      "s": [
        0.058,
        0.13,
        0.059
      ],
      "c": 15317351
    },
    {
      "t": "cylinder",
      "n": "stem-2",
      "p": [
        0.23,
        0.14,
        0
      ],
      "s": [
        0.042,
        0.23,
        0.042
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "cup-2",
      "p": [
        0.23,
        0.29,
        0
      ],
      "s": [
        0.15,
        0.05,
        0.15
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "wax-2",
      "p": [
        0.23,
        0.42,
        0
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 11779499
    },
    {
      "t": "rod",
      "n": "wick-2",
      "from": [
        0.23,
        0.53,
        0
      ],
      "to": [
        0.23,
        0.59,
        0
      ],
      "r": 0.008,
      "c": 3358791
    },
    {
      "t": "cone",
      "n": "flame-2",
      "p": [
        0.23,
        0.63,
        0
      ],
      "s": [
        0.058,
        0.13,
        0.059
      ],
      "c": 15317351
    },
    {
      "t": "box",
      "n": "tray-handle-0",
      "p": [
        -0.33,
        0.1,
        0
      ],
      "s": [
        0.045,
        0.09,
        0.2
      ],
      "c": 13280111
    },
    {
      "t": "box",
      "n": "tray-handle-1",
      "p": [
        0.33,
        0.1,
        0
      ],
      "s": [
        0.045,
        0.09,
        0.2
      ],
      "c": 13280111
    },
    {
      "t": "sphere",
      "n": "stone-decoration",
      "p": [
        0,
        0.11,
        0.19
      ],
      "s": [
        0.18,
        0.06,
        0.11
      ],
      "c": 8030332
    }
  ]
}); }
