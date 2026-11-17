import { buildRecipe } from './recipe_engine.js';
/** Festival Hot Air Balloon — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "vehicles.festival-hot-air-balloon.001",
  "slug": "festival-hot-air-balloon",
  "title": "Festival Hot Air Balloon",
  "title_zh": "节庆热气球",
  "summary": "Bright striped hot-air balloon with basket, four suspension ropes and central burner",
  "category": "vehicles",
  "tags": [
    "balloon",
    "festival",
    "flight"
  ],
  "dimensions_m": [
    2.57,
    4.4,
    2.48
  ],
  "generator": "createFestivalHotAirBalloon",
  "source_path": "src/models/festival_hot_air_balloon.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/festival-hot-air-balloon.webp"
};
export function createFestivalHotAirBalloon() { return buildRecipe({
  "title": "Festival Hot Air Balloon",
  "dimensions": [
    2.57,
    4.4,
    2.48
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "balloon-envelope",
      "p": [
        0,
        3.13,
        0
      ],
      "s": [
        2.55,
        2.54,
        2.46
      ],
      "c": 14394471
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-0",
      "p": [
        0.83,
        3.18,
        0
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 13597019
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-1",
      "p": [
        0.5868986283848344,
        3.18,
        0.565685424949238
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 15254907
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-2",
      "p": [
        5.0822842164615156e-17,
        3.18,
        0.8
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 6527912
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-3",
      "p": [
        -0.5868986283848344,
        3.18,
        0.5656854249492381
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 8297845
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-4",
      "p": [
        -0.83,
        3.18,
        9.797174393178826e-17
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 13597019
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-5",
      "p": [
        -0.5868986283848345,
        3.18,
        -0.565685424949238
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 15254907
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-6",
      "p": [
        -1.5246852649384544e-16,
        3.18,
        -0.8
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 6527912
    },
    {
      "t": "sphere",
      "n": "radial-color-stripe-7",
      "p": [
        0.5868986283848343,
        3.18,
        -0.5656854249492381
      ],
      "s": [
        0.3,
        1.03,
        0.27
      ],
      "c": 8297845
    },
    {
      "t": "sphere",
      "n": "envelope-top",
      "p": [
        0,
        4.29,
        0
      ],
      "s": [
        0.48,
        0.22,
        0.48
      ],
      "c": 13672786
    },
    {
      "t": "torus",
      "n": "lower-envelope-ring",
      "p": [
        0,
        1.98,
        0
      ],
      "s": [
        1.08,
        1.08,
        1.08
      ],
      "c": 9859148,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "passenger-basket",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        0.83,
        0.72,
        0.68
      ],
      "c": 9859148
    },
    {
      "t": "box",
      "n": "basket-wicker-band-0",
      "p": [
        0,
        0.14,
        0.35
      ],
      "s": [
        0.8,
        0.026,
        0.02
      ],
      "c": 13151347
    },
    {
      "t": "box",
      "n": "basket-wicker-band-1",
      "p": [
        0,
        0.265,
        0.35
      ],
      "s": [
        0.8,
        0.026,
        0.02
      ],
      "c": 13151347
    },
    {
      "t": "box",
      "n": "basket-wicker-band-2",
      "p": [
        0,
        0.39,
        0.35
      ],
      "s": [
        0.8,
        0.026,
        0.02
      ],
      "c": 13151347
    },
    {
      "t": "box",
      "n": "basket-wicker-band-3",
      "p": [
        0,
        0.515,
        0.35
      ],
      "s": [
        0.8,
        0.026,
        0.02
      ],
      "c": 13151347
    },
    {
      "t": "box",
      "n": "basket-wicker-band-4",
      "p": [
        0,
        0.64,
        0.35
      ],
      "s": [
        0.8,
        0.026,
        0.02
      ],
      "c": 13151347
    },
    {
      "t": "rod",
      "n": "suspension-rope-0-0",
      "from": [
        -0.34,
        0.73,
        -0.29
      ],
      "to": [
        -0.2822,
        2.05,
        -0.24069999999999997
      ],
      "r": 0.022,
      "c": 3424584
    },
    {
      "t": "rod",
      "n": "suspension-rope-0-1",
      "from": [
        -0.34,
        0.73,
        0.29
      ],
      "to": [
        -0.2822,
        2.05,
        0.24069999999999997
      ],
      "r": 0.022,
      "c": 3424584
    },
    {
      "t": "rod",
      "n": "suspension-rope-1-0",
      "from": [
        0.34,
        0.73,
        -0.29
      ],
      "to": [
        0.2822,
        2.05,
        -0.24069999999999997
      ],
      "r": 0.022,
      "c": 3424584
    },
    {
      "t": "rod",
      "n": "suspension-rope-1-1",
      "from": [
        0.34,
        0.73,
        0.29
      ],
      "to": [
        0.2822,
        2.05,
        0.24069999999999997
      ],
      "r": 0.022,
      "c": 3424584
    },
    {
      "t": "cylinder",
      "n": "burner",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        0.25,
        0.38,
        0.25
      ],
      "c": 9414053
    },
    {
      "t": "cone",
      "n": "flame",
      "p": [
        0,
        1.39,
        0
      ],
      "s": [
        0.19,
        0.28,
        0.19
      ],
      "c": 15053146
    },
    {
      "t": "box",
      "n": "basket-rim-0",
      "p": [
        -0.31,
        0.78,
        0
      ],
      "s": [
        0.065,
        0.05,
        0.71
      ],
      "c": 13151347
    },
    {
      "t": "box",
      "n": "basket-rim-1",
      "p": [
        0.31,
        0.78,
        0
      ],
      "s": [
        0.065,
        0.05,
        0.71
      ],
      "c": 13151347
    }
  ]
}); }
