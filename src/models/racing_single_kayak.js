import { buildRecipe } from './recipe_engine.js';
/** Racing Single Kayak: original source-editable mesh scene. */
export const assetMeta = {
  "id": "sports.racing-single-kayak.001",
  "slug": "racing-single-kayak",
  "title": "Racing Single Kayak",
  "title_zh": "竞速单人皮划艇",
  "summary": "Competition kayak with tapered hull, seat, footrest, paddle and spray deck",
  "category": "sports",
  "tags": [
    "kayak",
    "racing",
    "water"
  ],
  "dimensions_m": [
    0.82,
    0.52,
    3.91
  ],
  "generator": "createRacingSingleKayak",
  "source_path": "src/models/racing_single_kayak.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/racing-single-kayak.webp"
};
export function createRacingSingleKayak() { return buildRecipe({
  "title": "Racing Single Kayak",
  "dimensions": [
    0.82,
    0.52,
    3.91
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "kayak-hull",
      "p": [
        0,
        0.22,
        0
      ],
      "s": [
        0.79,
        0.42,
        3.84
      ],
      "c": 12284766
    },
    {
      "t": "box",
      "n": "kayak-deck",
      "p": [
        0,
        0.39,
        0
      ],
      "s": [
        0.71,
        0.08,
        3.41
      ],
      "c": 15197661
    },
    {
      "t": "torus",
      "n": "cockpit-rim",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        0.71,
        0.71,
        0.71
      ],
      "c": 3753293,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "cockpit-seat",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.39,
        0.11,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "deck-fastening-0",
      "p": [
        0,
        0.43,
        -1.5
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "deck-fastening-1",
      "p": [
        0,
        0.43,
        -1
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "deck-fastening-2",
      "p": [
        0,
        0.43,
        -0.5
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "deck-fastening-3",
      "p": [
        0,
        0.43,
        0
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "deck-fastening-4",
      "p": [
        0,
        0.43,
        0.5
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "deck-fastening-5",
      "p": [
        0,
        0.43,
        1
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "deck-fastening-6",
      "p": [
        0,
        0.43,
        1.5
      ],
      "s": [
        0.31,
        0.013,
        0.017
      ],
      "c": 9872548
    },
    {
      "t": "rod",
      "n": "two-bladed-paddle",
      "from": [
        -0.6,
        0.64,
        0
      ],
      "to": [
        0.6,
        0.64,
        0
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "box",
      "n": "paddle-blade-left",
      "p": [
        -0.69,
        0.64,
        0
      ],
      "s": [
        0.33,
        0.058,
        0.14
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "paddle-blade-right",
      "p": [
        0.69,
        0.64,
        0
      ],
      "s": [
        0.33,
        0.058,
        0.14
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "anti-slip-strip-0",
      "p": [
        -0.25,
        0.4,
        0.75
      ],
      "s": [
        0.05,
        0.02,
        0.28
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "anti-slip-strip-1",
      "p": [
        -0.07999999999999999,
        0.4,
        0.75
      ],
      "s": [
        0.05,
        0.02,
        0.28
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "anti-slip-strip-2",
      "p": [
        0.09000000000000002,
        0.4,
        0.75
      ],
      "s": [
        0.05,
        0.02,
        0.28
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "anti-slip-strip-3",
      "p": [
        0.26,
        0.4,
        0.75
      ],
      "s": [
        0.05,
        0.02,
        0.28
      ],
      "c": 3753293
    }
  ]
}); }
