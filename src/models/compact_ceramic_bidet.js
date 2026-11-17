import { buildRecipe } from './recipe_engine.js';

/** Original authored Compact Ceramic Bidet / 独立陶瓷坐浴盆; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "bathroom.compact-ceramic-bidet.001",
  "slug": "compact-ceramic-bidet",
  "title": "Compact Ceramic Bidet",
  "title_zh": "独立陶瓷坐浴盆",
  "summary": "Standalone compact bidet with ceramic rim, bowl, drain and metal faucet assembly.",
  "category": "bathroom",
  "tags": [
    "bidet",
    "ceramic",
    "plumbing",
    "bathroom"
  ],
  "dimensions_m": [
    0.39,
    0.42,
    0.65
  ],
  "generator": "createCompactCeramicBidet",
  "source_path": "src/models/compact_ceramic_bidet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/compact-ceramic-bidet.webp"
};
export function createCompactCeramicBidet() {
  return buildRecipe({
  "title": "Compact Ceramic Bidet",
  "dimensions": [
    0.39,
    0.42,
    0.65
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "pedestal",
      "p": [
        0,
        0.17,
        -0.09
      ],
      "s": [
        0.27,
        0.33,
        0.39
      ],
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "basin-shell",
      "p": [
        0,
        0.35,
        0.05
      ],
      "s": [
        0.37,
        0.21,
        0.52
      ],
      "c": 15067103
    },
    {
      "t": "sphere",
      "n": "bowl-water",
      "p": [
        0,
        0.395,
        0.08
      ],
      "s": [
        0.26,
        0.019,
        0.33
      ],
      "c": 10270910
    },
    {
      "t": "torus",
      "n": "rim",
      "p": [
        0,
        0.41,
        0.07
      ],
      "s": [
        0.72,
        0.82,
        0.65
      ],
      "c": 15263711,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "drain",
      "p": [
        0,
        0.406,
        0.18
      ],
      "s": [
        0.07,
        0.01,
        0.07
      ],
      "c": 9213593
    },
    {
      "t": "rod",
      "n": "faucet-neck",
      "from": [
        0,
        0.39,
        -0.21
      ],
      "to": [
        0,
        0.53,
        -0.21
      ],
      "r": 0.022,
      "c": 9213593
    },
    {
      "t": "rod",
      "n": "faucet-spout",
      "from": [
        0,
        0.53,
        -0.21
      ],
      "to": [
        0,
        0.5,
        -0.04
      ],
      "r": 0.02,
      "c": 9213593
    },
    {
      "t": "sphere",
      "n": "tap-control-0",
      "p": [
        -0.1,
        0.43,
        -0.23
      ],
      "s": [
        0.046,
        0.024,
        0.05
      ],
      "c": 7845315
    },
    {
      "t": "sphere",
      "n": "tap-control-1",
      "p": [
        0.1,
        0.43,
        -0.23
      ],
      "s": [
        0.046,
        0.024,
        0.05
      ],
      "c": 13007461
    },
    {
      "t": "box",
      "n": "base-trim",
      "p": [
        0,
        0.045,
        -0.05
      ],
      "s": [
        0.28,
        0.08,
        0.35
      ],
      "c": 9213593
    }
  ]
});
}
