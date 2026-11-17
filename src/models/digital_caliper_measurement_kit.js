import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Digital Caliper Measurement Kit / 数显卡尺测量套件. */
export const assetMeta = {
  "id": "tools.digital-caliper-measurement-kit.001",
  "slug": "digital-caliper-measurement-kit",
  "title": "Digital Caliper Measurement Kit",
  "title_zh": "数显卡尺测量套件",
  "summary": "Precision measurement case with digital calipers, depth probe and gauge blocks",
  "category": "tools",
  "tags": [
    "digital",
    "caliper",
    "measurement",
    "kit",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.85,
    0.4,
    0.6
  ],
  "generator": "createDigitalCaliperMeasurementKit",
  "source_path": "src/models/digital_caliper_measurement_kit.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/digital-caliper-measurement-kit.webp",
  "accent": "#6a8193"
};
export function createDigitalCaliperMeasurementKit() { return buildRecipe({
  "title": "Digital Caliper Measurement Kit",
  "dimensions": [
    0.85,
    0.4,
    0.6
  ],
  "parts": [
    {
      "t": "box",
      "n": "calibration-case-base",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        0.77,
        0.22,
        0.51
      ],
      "c": 6979987
    },
    {
      "t": "box",
      "n": "open-case-lid",
      "p": [
        0,
        0.32,
        -0.15
      ],
      "s": [
        0.81,
        0.07,
        0.28
      ],
      "c": 12765126
    },
    {
      "t": "box",
      "n": "digital-caliper-beam",
      "p": [
        0,
        0.33,
        0.12
      ],
      "s": [
        0.65,
        0.065,
        0.055
      ],
      "c": 14854486
    },
    {
      "t": "box",
      "n": "sliding-caliper-jaw",
      "p": [
        0.23,
        0.34,
        0.11
      ],
      "s": [
        0.07,
        0.21,
        0.1
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "fixed-caliper-jaw",
      "p": [
        -0.28,
        0.34,
        0.11
      ],
      "s": [
        0.07,
        0.21,
        0.1
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "precision-measurement-screen",
      "p": [
        0.09,
        0.39,
        0.15
      ],
      "s": [
        0.16,
        0.038,
        0.02
      ],
      "c": 12765126
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-0",
      "p": [
        -0.25,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-1",
      "p": [
        -0.195,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-2",
      "p": [
        -0.14,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-3",
      "p": [
        -0.08499999999999999,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-4",
      "p": [
        -0.03,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-5",
      "p": [
        0.025000000000000022,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-6",
      "p": [
        0.08000000000000002,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-7",
      "p": [
        0.135,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "engraved-caliper-scale-8",
      "p": [
        0.19,
        0.39,
        0.16
      ],
      "s": [
        0.02,
        0.012,
        0.01
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gauge-block-0",
      "p": [
        -0.29,
        0.19,
        -0.09
      ],
      "s": [
        0.13,
        0.13,
        0.12
      ],
      "c": 14854486
    },
    {
      "t": "box",
      "n": "gauge-block-1",
      "p": [
        -0.08999999999999997,
        0.19,
        -0.09
      ],
      "s": [
        0.13,
        0.13,
        0.12
      ],
      "c": 14854486
    },
    {
      "t": "box",
      "n": "gauge-block-2",
      "p": [
        0.11000000000000004,
        0.19,
        -0.09
      ],
      "s": [
        0.13,
        0.13,
        0.12
      ],
      "c": 14854486
    },
    {
      "t": "box",
      "n": "gauge-block-3",
      "p": [
        0.3100000000000001,
        0.19,
        -0.09
      ],
      "s": [
        0.13,
        0.13,
        0.12
      ],
      "c": 14854486
    },
    {
      "t": "rod",
      "n": "depth-measuring-probe",
      "from": [
        -0.33,
        0.17,
        0.29
      ],
      "to": [
        0.29,
        0.17,
        0.29
      ],
      "r": 0.01,
      "c": 2769748
    }
  ]
}); }
