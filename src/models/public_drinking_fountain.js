import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.public-drinking-fountain.001",
  "slug": "public-drinking-fountain",
  "title": "Public Drinking Fountain",
  "title_zh": "公共饮水台",
  "summary": "Accessible public drinking fountain with lower pet station, spouts and drainage",
  "category": "urban",
  "tags": [
    "drinking",
    "water",
    "public"
  ],
  "dimensions_m": [
    0.76,
    1.18,
    0.57
  ],
  "generator": "createPublicDrinkingFountain",
  "source_path": "src/models/public_drinking_fountain.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/public-drinking-fountain.webp"
};
export function createPublicDrinkingFountain() { return buildRecipe({
  "title": "Public Drinking Fountain",
  "dimensions": [
    0.76,
    1.18,
    0.57
  ],
  "parts": [
    {
      "t": "box",
      "n": "pedestal",
      "p": [
        0,
        0.53,
        -0.06
      ],
      "s": [
        0.52,
        1.02,
        0.44
      ],
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "upper-basin",
      "p": [
        0,
        1.03,
        0.03
      ],
      "s": [
        0.68,
        0.18,
        0.52
      ],
      "c": 9741221
    },
    {
      "t": "sphere",
      "n": "upper-drain",
      "p": [
        0,
        1.07,
        0.08
      ],
      "s": [
        0.21,
        0.015,
        0.18
      ],
      "c": 3490634
    },
    {
      "t": "rod",
      "n": "water-spout",
      "from": [
        0.23,
        1,
        -0.12
      ],
      "to": [
        0.23,
        1.19,
        0.05
      ],
      "r": 0.021,
      "c": 9741221
    },
    {
      "t": "sphere",
      "n": "spout-nozzle",
      "p": [
        0.23,
        1.19,
        0.05
      ],
      "s": [
        0.038,
        0.028,
        0.04
      ],
      "c": 3490634
    },
    {
      "t": "sphere",
      "n": "activation-button",
      "p": [
        -0.28,
        0.95,
        0.07
      ],
      "s": [
        0.049,
        0.038,
        0.045
      ],
      "c": 12953197
    },
    {
      "t": "sphere",
      "n": "lower-pet-bowl",
      "p": [
        0,
        0.3,
        0.23
      ],
      "s": [
        0.57,
        0.13,
        0.4
      ],
      "c": 10399405
    },
    {
      "t": "cylinder",
      "n": "pet-drain",
      "p": [
        0,
        0.34,
        0.25
      ],
      "s": [
        0.1,
        0.018,
        0.1
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "rear-drain-pipe",
      "p": [
        0,
        0.55,
        -0.28
      ],
      "s": [
        0.13,
        0.51,
        0.13
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "anchoring-bolt-0",
      "p": [
        -0.2,
        0.06,
        -0.13
      ],
      "s": [
        0.055,
        0.07,
        0.055
      ],
      "c": 12953197
    },
    {
      "t": "box",
      "n": "anchoring-bolt-1",
      "p": [
        0.2,
        0.06,
        -0.13
      ],
      "s": [
        0.055,
        0.07,
        0.055
      ],
      "c": 12953197
    },
    {
      "t": "box",
      "n": "maintenance-hatch",
      "p": [
        0,
        0.54,
        0.18
      ],
      "s": [
        0.26,
        0.3,
        0.026
      ],
      "c": 3490634
    }
  ]
}); }
