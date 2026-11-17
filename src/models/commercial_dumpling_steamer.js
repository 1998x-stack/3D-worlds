import { buildRecipe } from './recipe_engine.js';
/** Commercial Dumpling Steamer / 商用蒸饺多层蒸柜: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "kitchen.commercial-dumpling-steamer.001",
  "slug": "commercial-dumpling-steamer",
  "title": "Commercial Dumpling Steamer",
  "title_zh": "商用蒸饺多层蒸柜",
  "summary": "Stainless multi-tier steaming cabinet with bamboo baskets and condensate tray",
  "category": "kitchen",
  "tags": [
    "commercial",
    "dumpling",
    "steamer",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.05,
    1.8,
    0.88
  ],
  "generator": "createCommercialDumplingSteamer",
  "source_path": "src/models/commercial_dumpling_steamer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/commercial-dumpling-steamer.webp",
  "accent": "#b2c5c9"
};
export function createCommercialDumplingSteamer() { return buildRecipe({
  "title": "Commercial Dumpling Steamer",
  "dimensions": [
    1.05,
    1.8,
    0.88
  ],
  "parts": [
    {
      "t": "box",
      "n": "steamer-appliance-body",
      "p": [
        0,
        0.68,
        0
      ],
      "s": [
        0.85,
        1.13,
        0.64
      ],
      "c": 11716041
    },
    {
      "t": "cylinder",
      "n": "steam-basket-0",
      "p": [
        0,
        1.18,
        0
      ],
      "s": [
        0.65,
        0.15,
        0.52
      ],
      "c": 14198889
    },
    {
      "t": "torus",
      "n": "basket-rim-0",
      "p": [
        0,
        1.27,
        0
      ],
      "s": [
        0.82,
        0.06,
        0.71
      ],
      "c": 4213849,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "steam-basket-1",
      "p": [
        0,
        1.3299999999999998,
        0
      ],
      "s": [
        0.65,
        0.15,
        0.52
      ],
      "c": 14198889
    },
    {
      "t": "torus",
      "n": "basket-rim-1",
      "p": [
        0,
        1.42,
        0
      ],
      "s": [
        0.82,
        0.06,
        0.71
      ],
      "c": 4213849,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "steam-basket-2",
      "p": [
        0,
        1.48,
        0
      ],
      "s": [
        0.65,
        0.15,
        0.52
      ],
      "c": 14198889
    },
    {
      "t": "torus",
      "n": "basket-rim-2",
      "p": [
        0,
        1.57,
        0
      ],
      "s": [
        0.82,
        0.06,
        0.71
      ],
      "c": 4213849,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "steam-basket-3",
      "p": [
        0,
        1.63,
        0
      ],
      "s": [
        0.65,
        0.15,
        0.52
      ],
      "c": 14198889
    },
    {
      "t": "torus",
      "n": "basket-rim-3",
      "p": [
        0,
        1.72,
        0
      ],
      "s": [
        0.82,
        0.06,
        0.71
      ],
      "c": 4213849,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "water-reservoir",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        0.85,
        0.27,
        0.65
      ],
      "c": 4213849
    },
    {
      "t": "box",
      "n": "vent-slot-0",
      "p": [
        -0.3,
        0.85,
        0.33
      ],
      "s": [
        0.055,
        0.035,
        0.02
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "vent-slot-1",
      "p": [
        -0.18,
        0.85,
        0.33
      ],
      "s": [
        0.055,
        0.035,
        0.02
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "vent-slot-2",
      "p": [
        -0.06,
        0.85,
        0.33
      ],
      "s": [
        0.055,
        0.035,
        0.02
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "vent-slot-3",
      "p": [
        0.06,
        0.85,
        0.33
      ],
      "s": [
        0.055,
        0.035,
        0.02
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "vent-slot-4",
      "p": [
        0.18,
        0.85,
        0.33
      ],
      "s": [
        0.055,
        0.035,
        0.02
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "vent-slot-5",
      "p": [
        0.3,
        0.85,
        0.33
      ],
      "s": [
        0.055,
        0.035,
        0.02
      ],
      "c": 14476257
    },
    {
      "t": "cylinder",
      "n": "pressure-dial",
      "p": [
        0.25,
        0.63,
        0.34
      ],
      "s": [
        0.16,
        0.05,
        0.16
      ],
      "c": 14476257,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
