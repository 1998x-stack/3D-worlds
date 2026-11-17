import { buildRecipe } from './recipe_engine.js';
/** Folding Newsstand Kiosk — source-backed original low-poly prop. */
export const assetMeta = {
  "id": "urban.folding-newsstand-kiosk.001",
  "slug": "folding-newsstand-kiosk",
  "title": "Folding Newsstand Kiosk",
  "title_zh": "街头报刊售卖亭",
  "summary": "Outdoor press kiosk with folding newspaper racks, awning, price strip and shutters",
  "category": "urban",
  "tags": [
    "newsstand",
    "retail",
    "street"
  ],
  "dimensions_m": [
    1.97,
    2.34,
    1.35
  ],
  "generator": "createFoldingNewsstandKiosk",
  "source_path": "src/models/folding_newsstand_kiosk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/folding-newsstand-kiosk.webp"
};
export function createFoldingNewsstandKiosk() { return buildRecipe({
  "title": "Folding Newsstand Kiosk",
  "dimensions": [
    1.97,
    2.34,
    1.35
  ],
  "parts": [
    {
      "t": "box",
      "n": "booth-shell",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        1.89,
        2.19,
        1.28
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "roof",
      "p": [
        0,
        2.26,
        0
      ],
      "s": [
        1.97,
        0.16,
        1.35
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "service-window",
      "p": [
        0,
        1.47,
        0.65
      ],
      "s": [
        1.42,
        0.91,
        0.032
      ],
      "c": 5932698
    },
    {
      "t": "box",
      "n": "counter",
      "p": [
        0,
        0.98,
        0.73
      ],
      "s": [
        1.64,
        0.09,
        0.32
      ],
      "c": 9925201
    },
    {
      "t": "box",
      "n": "overhang-awning",
      "p": [
        0,
        2.06,
        0.76
      ],
      "s": [
        1.75,
        0.09,
        0.4
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "awning-stripe-0",
      "p": [
        -0.71,
        2.12,
        0.75
      ],
      "s": [
        0.13,
        0.015,
        0.37
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "awning-stripe-1",
      "p": [
        -0.42999999999999994,
        2.12,
        0.75
      ],
      "s": [
        0.13,
        0.015,
        0.37
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "awning-stripe-2",
      "p": [
        -0.1499999999999999,
        2.12,
        0.75
      ],
      "s": [
        0.13,
        0.015,
        0.37
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "awning-stripe-3",
      "p": [
        0.13000000000000012,
        2.12,
        0.75
      ],
      "s": [
        0.13,
        0.015,
        0.37
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "awning-stripe-4",
      "p": [
        0.41000000000000014,
        2.12,
        0.75
      ],
      "s": [
        0.13,
        0.015,
        0.37
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "awning-stripe-5",
      "p": [
        0.6900000000000002,
        2.12,
        0.75
      ],
      "s": [
        0.13,
        0.015,
        0.37
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "folded-newspaper-0",
      "p": [
        -0.57,
        1.3,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 13358808
    },
    {
      "t": "box",
      "n": "newspaper-headline-0",
      "p": [
        -0.57,
        1.36,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-1",
      "p": [
        -0.18999999999999995,
        1.3,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "newspaper-headline-1",
      "p": [
        -0.18999999999999995,
        1.36,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-2",
      "p": [
        0.19000000000000006,
        1.3,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 13358808
    },
    {
      "t": "box",
      "n": "newspaper-headline-2",
      "p": [
        0.19000000000000006,
        1.36,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-3",
      "p": [
        0.5700000000000002,
        1.3,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "newspaper-headline-3",
      "p": [
        0.5700000000000002,
        1.36,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-4",
      "p": [
        -0.57,
        1.6,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 13358808
    },
    {
      "t": "box",
      "n": "newspaper-headline-4",
      "p": [
        -0.57,
        1.6600000000000001,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-5",
      "p": [
        -0.18999999999999995,
        1.6,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "newspaper-headline-5",
      "p": [
        -0.18999999999999995,
        1.6600000000000001,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-6",
      "p": [
        0.19000000000000006,
        1.6,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 13358808
    },
    {
      "t": "box",
      "n": "newspaper-headline-6",
      "p": [
        0.19000000000000006,
        1.6600000000000001,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "folded-newspaper-7",
      "p": [
        0.5700000000000002,
        1.6,
        0.686
      ],
      "s": [
        0.28,
        0.22,
        0.015
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "newspaper-headline-7",
      "p": [
        0.5700000000000002,
        1.6600000000000001,
        0.701
      ],
      "s": [
        0.19,
        0.035,
        0.007
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "daily-price-panel",
      "p": [
        0,
        1.92,
        0.689
      ],
      "s": [
        0.93,
        0.14,
        0.012
      ],
      "c": 12689765
    },
    {
      "t": "box",
      "n": "hinged-shutter-0",
      "p": [
        -0.84,
        1.43,
        0.67
      ],
      "s": [
        0.24,
        0.85,
        0.04
      ],
      "c": 9925201
    },
    {
      "t": "box",
      "n": "hinged-shutter-1",
      "p": [
        0.84,
        1.43,
        0.67
      ],
      "s": [
        0.24,
        0.85,
        0.04
      ],
      "c": 9925201
    },
    {
      "t": "box",
      "n": "newspaper-bin",
      "p": [
        0.54,
        0.65,
        0.78
      ],
      "s": [
        0.4,
        0.48,
        0.24
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "base-floor",
      "p": [
        0,
        0.065,
        0
      ],
      "s": [
        1.92,
        0.13,
        1.33
      ],
      "c": 9413027
    }
  ]
}); }
