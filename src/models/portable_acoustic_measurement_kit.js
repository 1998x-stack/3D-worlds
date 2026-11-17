import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Portable Acoustic Measurement Kit / 便携声学测量套件. */
export const assetMeta = {
  "id": "electronics.portable-acoustic-measurement-kit.001",
  "slug": "portable-acoustic-measurement-kit",
  "title": "Portable Acoustic Measurement Kit",
  "title_zh": "便携声学测量套件",
  "summary": "Field sound measurement case with microphone, foam windscreen and digital spectrum readout",
  "category": "electronics",
  "tags": [
    "portable",
    "acoustic",
    "measurement",
    "kit",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.01,
    0.72,
    0.78
  ],
  "generator": "createPortableAcousticMeasurementKit",
  "source_path": "src/models/portable_acoustic_measurement_kit.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/portable-acoustic-measurement-kit.webp",
  "accent": "#8ac3c5"
};
export function createPortableAcousticMeasurementKit() { return buildRecipe({
  "title": "Portable Acoustic Measurement Kit",
  "dimensions": [
    1.01,
    0.72,
    0.78
  ],
  "parts": [
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-portable-sound-meter-case",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        0.83,
        0.32,
        0.62
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-protective-case-lid",
      "p": [
        0,
        0.33,
        -0.17
      ],
      "s": [
        0.84,
        0.07,
        0.26
      ],
      "c": 4678263
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-acoustic-meter-body",
      "p": [
        -0.21,
        0.39,
        0.08
      ],
      "s": [
        0.28,
        0.21,
        0.19
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-screen",
      "p": [
        -0.21,
        0.43,
        0.19
      ],
      "s": [
        0.2,
        0.1,
        0.01
      ],
      "c": 2307911
    },
    {
      "t": "rod",
      "n": "portable-acoustic-measurement-kit-microphone-measurement-rod",
      "from": [
        0.24,
        0.3,
        0.05
      ],
      "to": [
        0.24,
        0.64,
        0.05
      ],
      "r": 0.031,
      "c": 14141613
    },
    {
      "t": "sphere",
      "n": "portable-acoustic-measurement-kit-foam-microphone-windscreen",
      "p": [
        0.24,
        0.7,
        0.05
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-0",
      "p": [
        -0.33,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.013,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-1",
      "p": [
        -0.302,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.026,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-2",
      "p": [
        -0.274,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.039,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-3",
      "p": [
        -0.246,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.052,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-4",
      "p": [
        -0.21800000000000003,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.013,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-5",
      "p": [
        -0.19,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.026,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-6",
      "p": [
        -0.162,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.039,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-7",
      "p": [
        -0.134,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.052,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-frequency-spectrum-bar-8",
      "p": [
        -0.10600000000000001,
        0.45,
        0.204
      ],
      "s": [
        0.019,
        0.013,
        0.009
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-sound-meter-accessory-0",
      "p": [
        -0.33,
        0.21,
        -0.15
      ],
      "s": [
        0.09,
        0.09,
        0.13
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-sound-meter-accessory-1",
      "p": [
        -0.2,
        0.21,
        -0.15
      ],
      "s": [
        0.09,
        0.09,
        0.13
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-sound-meter-accessory-2",
      "p": [
        -0.07,
        0.21,
        -0.15
      ],
      "s": [
        0.09,
        0.09,
        0.13
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-sound-meter-accessory-3",
      "p": [
        0.06,
        0.21,
        -0.15
      ],
      "s": [
        0.09,
        0.09,
        0.13
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-sound-meter-accessory-4",
      "p": [
        0.19,
        0.21,
        -0.15
      ],
      "s": [
        0.09,
        0.09,
        0.13
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "portable-acoustic-measurement-kit-sound-meter-accessory-5",
      "p": [
        0.32,
        0.21,
        -0.15
      ],
      "s": [
        0.09,
        0.09,
        0.13
      ],
      "c": 2307911
    }
  ]
}); }
