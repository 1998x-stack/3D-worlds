import { buildRecipe } from './recipe_engine.js';
/** Compact Digital Air Fryer: individually authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.compact-digital-air-fryer.001",
  "slug": "compact-digital-air-fryer",
  "title": "Compact Digital Air Fryer",
  "title_zh": "数显空气炸锅",
  "summary": "Basket-style air fryer with front digital control panel, removable basket handle and vents.",
  "category": "kitchen",
  "tags": [
    "air-fryer",
    "appliance",
    "digital",
    "kitchen"
  ],
  "dimensions_m": [
    0.34,
    0.38,
    0.37
  ],
  "generator": "createCompactDigitalAirFryer",
  "source_path": "src/models/compact_digital_air_fryer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/compact-digital-air-fryer.webp"
};
export function createCompactDigitalAirFryer() {
 return buildRecipe({
  "title": "Compact Digital Air Fryer",
  "dimensions": [
    0.34,
    0.38,
    0.37
  ],
  "parts": [
    {
      "t": "box",
      "n": "outer-casing",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        0.34,
        0.38,
        0.36
      ],
      "c": 13161422
    },
    {
      "t": "box",
      "n": "basket-front",
      "p": [
        0,
        0.13,
        0.188
      ],
      "s": [
        0.29,
        0.2,
        0.022
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "control-face",
      "p": [
        0,
        0.3,
        0.189
      ],
      "s": [
        0.29,
        0.13,
        0.02
      ],
      "c": 4478811
    },
    {
      "t": "box",
      "n": "display",
      "p": [
        0,
        0.31,
        0.204
      ],
      "s": [
        0.16,
        0.055,
        0.008
      ],
      "c": 6926268
    },
    {
      "t": "sphere",
      "n": "button-0",
      "p": [
        -0.1,
        0.275,
        0.207
      ],
      "s": [
        0.018,
        0.014,
        0.009
      ],
      "c": 15065040
    },
    {
      "t": "sphere",
      "n": "button-1",
      "p": [
        0.1,
        0.275,
        0.207
      ],
      "s": [
        0.018,
        0.014,
        0.009
      ],
      "c": 15065040
    },
    {
      "t": "box",
      "n": "basket-handle",
      "p": [
        0,
        0.12,
        0.256
      ],
      "s": [
        0.082,
        0.05,
        0.15
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "side-vent-0",
      "p": [
        0.175,
        0.16,
        -0.045
      ],
      "s": [
        0.007,
        0.01,
        0.11
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "side-vent-1",
      "p": [
        0.175,
        0.188,
        -0.045
      ],
      "s": [
        0.007,
        0.01,
        0.11
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "side-vent-2",
      "p": [
        0.175,
        0.216,
        -0.045
      ],
      "s": [
        0.007,
        0.01,
        0.11
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "side-vent-3",
      "p": [
        0.175,
        0.244,
        -0.045
      ],
      "s": [
        0.007,
        0.01,
        0.11
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "side-vent-4",
      "p": [
        0.175,
        0.272,
        -0.045
      ],
      "s": [
        0.007,
        0.01,
        0.11
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "side-vent-5",
      "p": [
        0.175,
        0.30000000000000004,
        -0.045
      ],
      "s": [
        0.007,
        0.01,
        0.11
      ],
      "c": 8886427
    },
    {
      "t": "box",
      "n": "foot-0",
      "p": [
        -0.11,
        0.016,
        -0.11
      ],
      "s": [
        0.078,
        0.032,
        0.08
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "foot-1",
      "p": [
        0.11,
        0.016,
        -0.11
      ],
      "s": [
        0.078,
        0.032,
        0.08
      ],
      "c": 3160900
    }
  ]
});
}
