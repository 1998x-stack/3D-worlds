import { buildRecipe } from './recipe_engine.js';
/** Rugged Handheld Radio: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "electronics.rugged-handheld-radio.001",
  "slug": "rugged-handheld-radio",
  "title": "Rugged Handheld Radio",
  "title_zh": "手持对讲机",
  "summary": "Portable radio with flexible antenna, push-to-talk key, speaker grid and channel selector.",
  "category": "electronics",
  "tags": [
    "radio",
    "walkie-talkie",
    "communication",
    "electronics"
  ],
  "dimensions_m": [
    0.15,
    0.39,
    0.094
  ],
  "generator": "createRuggedHandheldRadio",
  "source_path": "src/models/rugged_handheld_radio.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/rugged-handheld-radio.webp"
};
export function createRuggedHandheldRadio() {
  return buildRecipe({
  "title": "Rugged Handheld Radio",
  "dimensions": [
    0.15,
    0.39,
    0.094
  ],
  "parts": [
    {
      "t": "box",
      "n": "radio-body",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        0.15,
        0.29,
        0.085
      ],
      "c": 3291196
    },
    {
      "t": "box",
      "n": "rubber-side",
      "p": [
        0.071,
        0.18,
        0
      ],
      "s": [
        0.018,
        0.23,
        0.09
      ],
      "c": 8820381
    },
    {
      "t": "rod",
      "n": "antenna",
      "from": [
        0.047,
        0.28,
        0
      ],
      "to": [
        0.058,
        0.39,
        0
      ],
      "r": 0.011,
      "c": 3291196
    },
    {
      "t": "cylinder",
      "n": "channel-dial",
      "p": [
        -0.043,
        0.327,
        0
      ],
      "s": [
        0.057,
        0.047,
        0.057
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "display",
      "p": [
        0,
        0.23,
        0.047
      ],
      "s": [
        0.099,
        0.065,
        0.008
      ],
      "c": 5275020
    },
    {
      "t": "box",
      "n": "speaker-slot-0",
      "p": [
        -0.046,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "speaker-slot-1",
      "p": [
        -0.031,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "speaker-slot-2",
      "p": [
        -0.016,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "speaker-slot-3",
      "p": [
        -0.0010000000000000009,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "speaker-slot-4",
      "p": [
        0.013999999999999999,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "speaker-slot-5",
      "p": [
        0.028999999999999998,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "speaker-slot-6",
      "p": [
        0.044,
        0.13,
        0.047
      ],
      "s": [
        0.008,
        0.055,
        0.008
      ],
      "c": 8820381
    },
    {
      "t": "box",
      "n": "ptt-button",
      "p": [
        -0.077,
        0.2,
        0
      ],
      "s": [
        0.011,
        0.078,
        0.036
      ],
      "c": 12101472
    },
    {
      "t": "box",
      "n": "clip",
      "p": [
        0,
        0.19,
        -0.049
      ],
      "s": [
        0.07,
        0.14,
        0.015
      ],
      "c": 8820381
    },
    {
      "t": "sphere",
      "n": "status-lamp",
      "p": [
        0.049,
        0.29,
        0.044
      ],
      "s": [
        0.011,
        0.011,
        0.009
      ],
      "c": 8305574
    }
  ]
});
}
