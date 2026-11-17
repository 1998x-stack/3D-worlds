import { buildRecipe } from './recipe_engine.js';
/** Broadcast Audio Mixing Console: source-backed custom geometry. */
export const assetMeta = {
  "id": "electronics.broadcast-audio-mixing-console.001",
  "slug": "broadcast-audio-mixing-console",
  "title": "Broadcast Audio Mixing Console",
  "title_zh": "广播调音控制台",
  "summary": "Studio mixing desk with individual channel faders and VU meters",
  "category": "electronics",
  "tags": [
    "audio",
    "mixer",
    "studio"
  ],
  "dimensions_m": [
    1.08,
    0.3,
    0.65
  ],
  "generator": "createBroadcastAudioMixingConsole",
  "source_path": "src/models/broadcast_audio_mixing_console.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/broadcast-audio-mixing-console.webp"
};
export function createBroadcastAudioMixingConsole() { return buildRecipe({
  "title": "Broadcast Audio Mixing Console",
  "dimensions": [
    1.08,
    0.3,
    0.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-housing",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        1.04,
        0.27,
        0.6
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "operation-display",
      "p": [
        0,
        0.31,
        0.24
      ],
      "s": [
        0.59,
        0.24,
        0.019
      ],
      "c": 6790322
    },
    {
      "t": "box",
      "n": "keypad-button-0",
      "p": [
        -0.24,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-1",
      "p": [
        -0.148,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-2",
      "p": [
        -0.055999999999999994,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-3",
      "p": [
        0.03600000000000003,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-4",
      "p": [
        0.128,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-5",
      "p": [
        0.21999999999999997,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-6",
      "p": [
        -0.24,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-7",
      "p": [
        -0.148,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-8",
      "p": [
        -0.055999999999999994,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-9",
      "p": [
        0.03600000000000003,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-10",
      "p": [
        0.128,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-11",
      "p": [
        0.21999999999999997,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "fader-handle-0",
      "p": [
        -0.42,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-0",
      "p": [
        -0.42,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-1",
      "p": [
        -0.3,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-1",
      "p": [
        -0.3,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-2",
      "p": [
        -0.18,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-2",
      "p": [
        -0.18,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-3",
      "p": [
        -0.06,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-3",
      "p": [
        -0.06,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-4",
      "p": [
        0.06,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-4",
      "p": [
        0.06,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-5",
      "p": [
        0.18,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-5",
      "p": [
        0.18,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-6",
      "p": [
        0.3,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-6",
      "p": [
        0.3,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "fader-handle-7",
      "p": [
        0.42,
        0.33,
        0.15
      ],
      "s": [
        0.05,
        0.026,
        0.04
      ],
      "c": 14936037
    },
    {
      "t": "cylinder",
      "n": "gain-control-7",
      "p": [
        0.42,
        0.33,
        -0.17
      ],
      "s": [
        0.05,
        0.03,
        0.05
      ],
      "c": 13347175
    },
    {
      "t": "box",
      "n": "meter-column-0",
      "p": [
        -0.3,
        0.34,
        -0.29
      ],
      "s": [
        0.038,
        0.014,
        0.07
      ],
      "c": 12741208
    },
    {
      "t": "box",
      "n": "meter-column-1",
      "p": [
        -0.15,
        0.34,
        -0.29
      ],
      "s": [
        0.038,
        0.014,
        0.07
      ],
      "c": 6920056
    },
    {
      "t": "box",
      "n": "meter-column-2",
      "p": [
        0,
        0.34,
        -0.29
      ],
      "s": [
        0.038,
        0.014,
        0.07
      ],
      "c": 12741208
    },
    {
      "t": "box",
      "n": "meter-column-3",
      "p": [
        0.14999999999999997,
        0.34,
        -0.29
      ],
      "s": [
        0.038,
        0.014,
        0.07
      ],
      "c": 6920056
    },
    {
      "t": "box",
      "n": "meter-column-4",
      "p": [
        0.3,
        0.34,
        -0.29
      ],
      "s": [
        0.038,
        0.014,
        0.07
      ],
      "c": 12741208
    }
  ]
}); }
