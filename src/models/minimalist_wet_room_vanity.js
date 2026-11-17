import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Minimalist Wet Room Vanity / 防水整体浴室洗漱柜. */
export const assetMeta = {
  "id": "bathroom.minimalist-wet-room-vanity.001",
  "slug": "minimalist-wet-room-vanity",
  "title": "Minimalist Wet Room Vanity",
  "title_zh": "防水整体浴室洗漱柜",
  "summary": "Waterproof floating vanity with ceramic basin, mixer faucet and shelf",
  "category": "bathroom",
  "tags": [
    "minimalist",
    "wet",
    "room",
    "vanity",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.38,
    1.5,
    0.65
  ],
  "generator": "createMinimalistWetRoomVanity",
  "source_path": "src/models/minimalist_wet_room_vanity.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/minimalist-wet-room-vanity.webp",
  "accent": "#7d9da4"
};
export function createMinimalistWetRoomVanity() { return buildRecipe({
  "title": "Minimalist Wet Room Vanity",
  "dimensions": [
    1.38,
    1.5,
    0.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "waterproof-vanity-back",
      "p": [
        0,
        0.95,
        -0.24
      ],
      "s": [
        1.2,
        1.87,
        0.15
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "floating-sink-storage",
      "p": [
        0,
        0.6,
        0.11
      ],
      "s": [
        1.12,
        0.45,
        0.47
      ],
      "c": 15199984
    },
    {
      "t": "sphere",
      "n": "ceramic-washbowl",
      "p": [
        0,
        0.89,
        0.18
      ],
      "s": [
        0.76,
        0.13,
        0.42
      ],
      "c": 4877181
    },
    {
      "t": "rod",
      "n": "sink-mixer-feed",
      "from": [
        0,
        0.91,
        -0.08
      ],
      "to": [
        0,
        1.16,
        0.02
      ],
      "r": 0.027,
      "c": 12964815
    },
    {
      "t": "rod",
      "n": "mixer-spout",
      "from": [
        0,
        1.16,
        0.02
      ],
      "to": [
        0,
        1.13,
        0.23
      ],
      "r": 0.024,
      "c": 12964815
    },
    {
      "t": "box",
      "n": "waterproof-vanity-drawer-0",
      "p": [
        -0.35,
        0.55,
        0.365
      ],
      "s": [
        0.3,
        0.23,
        0.04
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drawer-recess-0",
      "p": [
        -0.35,
        0.58,
        0.392
      ],
      "s": [
        0.17,
        0.023,
        0.012
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "waterproof-vanity-drawer-1",
      "p": [
        0,
        0.55,
        0.365
      ],
      "s": [
        0.3,
        0.23,
        0.04
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drawer-recess-1",
      "p": [
        0,
        0.58,
        0.392
      ],
      "s": [
        0.17,
        0.023,
        0.012
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "waterproof-vanity-drawer-2",
      "p": [
        0.35,
        0.55,
        0.365
      ],
      "s": [
        0.3,
        0.23,
        0.04
      ],
      "c": 8232356
    },
    {
      "t": "box",
      "n": "drawer-recess-2",
      "p": [
        0.35,
        0.58,
        0.392
      ],
      "s": [
        0.17,
        0.023,
        0.012
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "floating-bath-shelf",
      "p": [
        0,
        1.38,
        -0.06
      ],
      "s": [
        1.05,
        0.08,
        0.2
      ],
      "c": 15199984
    },
    {
      "t": "box",
      "n": "soap-product-0",
      "p": [
        -0.37,
        1.53,
        -0.08
      ],
      "s": [
        0.13,
        0.23,
        0.13
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "soap-product-1",
      "p": [
        -0.13999999999999999,
        1.53,
        -0.08
      ],
      "s": [
        0.13,
        0.23,
        0.13
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "soap-product-2",
      "p": [
        0.09000000000000002,
        1.53,
        -0.08
      ],
      "s": [
        0.13,
        0.23,
        0.13
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "soap-product-3",
      "p": [
        0.32000000000000006,
        1.53,
        -0.08
      ],
      "s": [
        0.13,
        0.23,
        0.13
      ],
      "c": 4877181
    },
    {
      "t": "box",
      "n": "cabinet-led-strip",
      "p": [
        0,
        1.32,
        0.02
      ],
      "s": [
        0.91,
        0.025,
        0.022
      ],
      "c": 4877181
    }
  ]
}); }
