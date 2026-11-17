import { buildRecipe } from './recipe_engine.js';
/** Portable Digital Oscilloscope / 便携数字示波器: original authored procedural scene prop. */
export const assetMeta = {
  "id": "electronics.portable-digital-oscilloscope.001",
  "slug": "portable-digital-oscilloscope",
  "title": "Portable Digital Oscilloscope",
  "title_zh": "便携数字示波器",
  "summary": "Benchtop waveform oscilloscope with dual probe ports, side knobs and carry handle",
  "category": "electronics",
  "tags": [
    "oscilloscope",
    "measurement",
    "electronics"
  ],
  "dimensions_m": [
    0.44,
    0.31,
    0.21
  ],
  "generator": "createPortableDigitalOscilloscope",
  "source_path": "src/models/portable_digital_oscilloscope.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/portable-digital-oscilloscope.webp"
};
export function createPortableDigitalOscilloscope() { return buildRecipe({
  "title": "Portable Digital Oscilloscope",
  "dimensions": [
    0.44,
    0.31,
    0.21
  ],
  "parts": [
    {
      "t": "box",
      "n": "oscilloscope-body",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        0.43,
        0.3,
        0.2
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "lcd-window",
      "p": [
        -0.07,
        0.18,
        0.107
      ],
      "s": [
        0.27,
        0.18,
        0.016
      ],
      "c": 3432311
    },
    {
      "t": "box",
      "n": "waveform-pixel-0",
      "p": [
        -0.18,
        0.17,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-1",
      "p": [
        -0.151,
        0.19953773560641724,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-2",
      "p": [
        -0.122,
        0.2119975522496586,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-3",
      "p": [
        -0.09299999999999999,
        0.20017552130890331,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-4",
      "p": [
        -0.06399999999999999,
        0.17090682098049603,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-5",
      "p": [
        -0.034999999999999976,
        0.1411138213142731,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-6",
      "p": [
        -0.005999999999999978,
        0.12802202804125407,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-7",
      "p": [
        0.02300000000000002,
        0.13920076155818245,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "box",
      "n": "waveform-pixel-8",
      "p": [
        0.05200000000000002,
        0.1681867808212334,
        0.119
      ],
      "s": [
        0.025,
        0.007,
        0.004
      ],
      "c": 8836012
    },
    {
      "t": "cylinder",
      "n": "function-knob-0",
      "p": [
        0.15,
        0.23,
        0.116
      ],
      "s": [
        0.042,
        0.022,
        0.042
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "function-knob-1",
      "p": [
        0.15,
        0.187,
        0.116
      ],
      "s": [
        0.042,
        0.022,
        0.042
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "function-knob-2",
      "p": [
        0.15,
        0.14400000000000002,
        0.116
      ],
      "s": [
        0.042,
        0.022,
        0.042
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "function-knob-3",
      "p": [
        0.15,
        0.101,
        0.116
      ],
      "s": [
        0.042,
        0.022,
        0.042
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "function-knob-4",
      "p": [
        0.15,
        0.058000000000000024,
        0.116
      ],
      "s": [
        0.042,
        0.022,
        0.042
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "probe-socket-0",
      "p": [
        -0.13,
        0.045,
        0.112
      ],
      "s": [
        0.056,
        0.024,
        0.056
      ],
      "c": 12427115,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "probe-socket-1",
      "p": [
        0.13,
        0.045,
        0.112
      ],
      "s": [
        0.056,
        0.024,
        0.056
      ],
      "c": 12427115,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "carry-handle",
      "from": [
        -0.15,
        0.35,
        0
      ],
      "to": [
        0.15,
        0.35,
        0
      ],
      "r": 0.024,
      "c": 3753552
    },
    {
      "t": "rod",
      "n": "handle-arm-0",
      "from": [
        -0.16,
        0.29,
        0
      ],
      "to": [
        -0.16,
        0.35,
        0
      ],
      "r": 0.017,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "handle-arm-1",
      "from": [
        0.16,
        0.29,
        0
      ],
      "to": [
        0.16,
        0.35,
        0
      ],
      "r": 0.017,
      "c": 9215136
    },
    {
      "t": "rod",
      "n": "probe-cable-a",
      "from": [
        -0.13,
        0.046,
        0.13
      ],
      "to": [
        -0.28,
        0.03,
        0.3
      ],
      "r": 0.012,
      "c": 3753552
    },
    {
      "t": "rod",
      "n": "probe-cable-b",
      "from": [
        0.13,
        0.046,
        0.13
      ],
      "to": [
        0.28,
        0.02,
        0.3
      ],
      "r": 0.012,
      "c": 3753552
    },
    {
      "t": "box",
      "n": "probe-tip",
      "p": [
        -0.28,
        0.027,
        0.31
      ],
      "s": [
        0.08,
        0.022,
        0.09
      ],
      "c": 9215136
    },
    {
      "t": "box",
      "n": "trigger-label",
      "p": [
        0.15,
        0.083,
        0.119
      ],
      "s": [
        0.13,
        0.022,
        0.009
      ],
      "c": 15197659
    }
  ]
}); }
