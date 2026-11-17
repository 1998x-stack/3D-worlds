import { buildRecipe } from './recipe_engine.js';
/** Timber Bath Tray — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "bathroom.timber-bath-tray.001",
  "slug": "timber-bath-tray",
  "title": "Timber Bath Tray",
  "title_zh": "实木浴缸托盘",
  "summary": "Slatted bath caddy with book rest, glass stem holder and small soap bowl",
  "category": "bathroom",
  "tags": [
    "caddy",
    "bath",
    "timber"
  ],
  "dimensions_m": [
    0.94,
    0.21,
    0.3
  ],
  "generator": "createTimberBathTray",
  "source_path": "src/models/timber_bath_tray.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/timber-bath-tray.webp"
};
export function createTimberBathTray() { return buildRecipe({
  "title": "Timber Bath Tray",
  "dimensions": [
    0.94,
    0.21,
    0.3
  ],
  "parts": [
    {
      "t": "box",
      "n": "wood-slat-0",
      "p": [
        -0.4,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-1",
      "p": [
        -0.28500000000000003,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-2",
      "p": [
        -0.17,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-3",
      "p": [
        -0.05499999999999999,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-4",
      "p": [
        0.06,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-5",
      "p": [
        0.17500000000000004,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-6",
      "p": [
        0.29000000000000004,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "wood-slat-7",
      "p": [
        0.405,
        0.065,
        0
      ],
      "s": [
        0.095,
        0.035,
        0.3
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "non-slip-end-0",
      "p": [
        -0.4,
        0.023,
        0
      ],
      "s": [
        0.1,
        0.045,
        0.29
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "non-slip-end-1",
      "p": [
        0.4,
        0.023,
        0
      ],
      "s": [
        0.1,
        0.045,
        0.29
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "book-ledge",
      "p": [
        0,
        0.13,
        -0.06
      ],
      "s": [
        0.42,
        0.12,
        0.027
      ],
      "c": 12755572,
      "rot": [
        0.45,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "folded-book",
      "p": [
        0,
        0.17,
        -0.085
      ],
      "s": [
        0.34,
        0.05,
        0.18
      ],
      "c": 15263196,
      "rot": [
        0.45,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "soap-dish",
      "p": [
        0.3,
        0.105,
        0.045
      ],
      "s": [
        0.13,
        0.035,
        0.12
      ],
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "round-soap",
      "p": [
        0.3,
        0.146,
        0.045
      ],
      "s": [
        0.087,
        0.045,
        0.07
      ],
      "c": 15323840
    },
    {
      "t": "rod",
      "n": "wine-stem",
      "from": [
        -0.29,
        0.08,
        0.03
      ],
      "to": [
        -0.29,
        0.18,
        0.03
      ],
      "r": 0.014,
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "wine-glass",
      "p": [
        -0.29,
        0.19,
        0.03
      ],
      "s": [
        0.085,
        0.055,
        0.075
      ],
      "c": 9877700
    },
    {
      "t": "box",
      "n": "stem-notch",
      "p": [
        -0.29,
        0.062,
        0.13
      ],
      "s": [
        0.048,
        0.013,
        0.09
      ],
      "c": 3357765
    }
  ]
}); }
