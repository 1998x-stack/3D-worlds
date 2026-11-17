import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.modular-street-vending-kiosk.001",
  "slug": "modular-street-vending-kiosk",
  "title": "Modular Street Vending Kiosk",
  "title_zh": "城市街头零售亭",
  "summary": "Tiny retail booth with service window, awning, counter, signs and shelves",
  "category": "urban",
  "tags": [
    "kiosk",
    "retail",
    "street"
  ],
  "dimensions_m": [
    2.12,
    2.52,
    1.43
  ],
  "generator": "createModularStreetVendingKiosk",
  "source_path": "src/models/modular_street_vending_kiosk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/modular-street-vending-kiosk.webp"
};
export function createModularStreetVendingKiosk() { return buildRecipe({
  "title": "Modular Street Vending Kiosk",
  "dimensions": [
    2.12,
    2.52,
    1.43
  ],
  "parts": [
    {
      "t": "box",
      "n": "kiosk-cabinet",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        2.09,
        2.19,
        1.38
      ],
      "c": 10913894
    },
    {
      "t": "box",
      "n": "sheet-metal-roof",
      "p": [
        0,
        2.37,
        0
      ],
      "s": [
        2.12,
        0.23,
        1.43
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "service-opening",
      "p": [
        0,
        1.43,
        0.705
      ],
      "s": [
        1.42,
        0.92,
        0.032
      ],
      "c": 4418170
    },
    {
      "t": "box",
      "n": "folding-counter",
      "p": [
        0,
        0.96,
        0.82
      ],
      "s": [
        1.72,
        0.11,
        0.4
      ],
      "c": 9596753
    },
    {
      "t": "box",
      "n": "striped-awning",
      "p": [
        0,
        2.04,
        0.82
      ],
      "s": [
        1.94,
        0.1,
        0.53
      ],
      "c": 12148566
    },
    {
      "t": "box",
      "n": "canopy-stripe-0",
      "p": [
        -0.79,
        2.1,
        0.83
      ],
      "s": [
        0.13,
        0.015,
        0.48
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "canopy-stripe-1",
      "p": [
        -0.48000000000000004,
        2.1,
        0.83
      ],
      "s": [
        0.13,
        0.015,
        0.48
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "canopy-stripe-2",
      "p": [
        -0.17000000000000004,
        2.1,
        0.83
      ],
      "s": [
        0.13,
        0.015,
        0.48
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "canopy-stripe-3",
      "p": [
        0.1399999999999999,
        2.1,
        0.83
      ],
      "s": [
        0.13,
        0.015,
        0.48
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "canopy-stripe-4",
      "p": [
        0.44999999999999996,
        2.1,
        0.83
      ],
      "s": [
        0.13,
        0.015,
        0.48
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "canopy-stripe-5",
      "p": [
        0.76,
        2.1,
        0.83
      ],
      "s": [
        0.13,
        0.015,
        0.48
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "side-door",
      "p": [
        0.94,
        0.92,
        -0.02
      ],
      "s": [
        0.035,
        1.74,
        0.64
      ],
      "c": 9596753
    },
    {
      "t": "box",
      "n": "upper-logo",
      "p": [
        0,
        2.31,
        0.731
      ],
      "s": [
        0.9,
        0.19,
        0.027
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "display-box-0",
      "p": [
        -0.56,
        1.12,
        0.73
      ],
      "s": [
        0.23,
        0.25,
        0.1
      ],
      "c": 7904389
    },
    {
      "t": "box",
      "n": "display-box-1",
      "p": [
        -0.19000000000000006,
        1.12,
        0.73
      ],
      "s": [
        0.23,
        0.25,
        0.1
      ],
      "c": 13151597
    },
    {
      "t": "box",
      "n": "display-box-2",
      "p": [
        0.17999999999999994,
        1.12,
        0.73
      ],
      "s": [
        0.23,
        0.25,
        0.1
      ],
      "c": 11108720
    },
    {
      "t": "box",
      "n": "display-box-3",
      "p": [
        0.5499999999999998,
        1.12,
        0.73
      ],
      "s": [
        0.23,
        0.25,
        0.1
      ],
      "c": 8888506
    },
    {
      "t": "box",
      "n": "awning-upright-0",
      "p": [
        -0.85,
        1.62,
        0.7
      ],
      "s": [
        0.035,
        0.65,
        0.035
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "awning-upright-1",
      "p": [
        0.85,
        1.62,
        0.7
      ],
      "s": [
        0.035,
        0.65,
        0.035
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "base-plinth",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        2.09,
        0.2,
        1.35
      ],
      "c": 9741221
    }
  ]
}); }
