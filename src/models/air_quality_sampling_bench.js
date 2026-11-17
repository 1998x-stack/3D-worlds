import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Air Quality Sampling Bench / 空气质量采样实验台. */
export const assetMeta = {
  "id": "tools.air-quality-sampling-bench.001",
  "slug": "air-quality-sampling-bench",
  "title": "Air Quality Sampling Bench",
  "title_zh": "空气质量采样实验台",
  "summary": "Laboratory gas sampling bench with canisters, filters and flow meters",
  "category": "tools",
  "tags": [
    "air",
    "quality",
    "sampling",
    "bench",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    1.65,
    0.92
  ],
  "generator": "createAirQualitySamplingBench",
  "source_path": "src/models/air_quality_sampling_bench.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/air-quality-sampling-bench.webp",
  "accent": "#2a4354"
};
export function createAirQualitySamplingBench() { return buildRecipe({
  "title": "Air Quality Sampling Bench",
  "dimensions": [
    1.65,
    1.65,
    0.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "gas-analysis-laboratory-bench",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        1.47,
        0.82,
        0.72
      ],
      "c": 6979987
    },
    {
      "t": "box",
      "n": "sampling-top",
      "p": [
        0,
        0.9,
        0
      ],
      "s": [
        1.53,
        0.12,
        0.77
      ],
      "c": 12765126
    },
    {
      "t": "cylinder",
      "n": "gas-sample-canister-0",
      "p": [
        -0.6,
        1.13,
        -0.13
      ],
      "s": [
        0.16,
        0.44,
        0.16
      ],
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "sampling-valve-0",
      "p": [
        -0.6,
        1.39,
        -0.13
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "gas-sample-canister-1",
      "p": [
        -0.36,
        1.13,
        -0.13
      ],
      "s": [
        0.16,
        0.44,
        0.16
      ],
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "sampling-valve-1",
      "p": [
        -0.36,
        1.39,
        -0.13
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "gas-sample-canister-2",
      "p": [
        -0.12,
        1.13,
        -0.13
      ],
      "s": [
        0.16,
        0.44,
        0.16
      ],
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "sampling-valve-2",
      "p": [
        -0.12,
        1.39,
        -0.13
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "gas-sample-canister-3",
      "p": [
        0.12,
        1.13,
        -0.13
      ],
      "s": [
        0.16,
        0.44,
        0.16
      ],
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "sampling-valve-3",
      "p": [
        0.12,
        1.39,
        -0.13
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "gas-sample-canister-4",
      "p": [
        0.36,
        1.13,
        -0.13
      ],
      "s": [
        0.16,
        0.44,
        0.16
      ],
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "sampling-valve-4",
      "p": [
        0.36,
        1.39,
        -0.13
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "gas-sample-canister-5",
      "p": [
        0.6,
        1.13,
        -0.13
      ],
      "s": [
        0.16,
        0.44,
        0.16
      ],
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "sampling-valve-5",
      "p": [
        0.6,
        1.39,
        -0.13
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "cylinder",
      "n": "flowmeter-0",
      "p": [
        -0.5,
        1.12,
        0.22
      ],
      "s": [
        0.13,
        0.38,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "rod",
      "n": "sample-tube-0",
      "from": [
        -0.5,
        1.05,
        -0.13
      ],
      "to": [
        -0.5,
        1.15,
        0.22
      ],
      "r": 0.014,
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "flowmeter-1",
      "p": [
        -0.16999999999999998,
        1.12,
        0.22
      ],
      "s": [
        0.13,
        0.38,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "rod",
      "n": "sample-tube-1",
      "from": [
        -0.16999999999999998,
        1.05,
        -0.13
      ],
      "to": [
        -0.16999999999999998,
        1.15,
        0.22
      ],
      "r": 0.014,
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "flowmeter-2",
      "p": [
        0.16000000000000003,
        1.12,
        0.22
      ],
      "s": [
        0.13,
        0.38,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "rod",
      "n": "sample-tube-2",
      "from": [
        0.16000000000000003,
        1.05,
        -0.13
      ],
      "to": [
        0.16000000000000003,
        1.15,
        0.22
      ],
      "r": 0.014,
      "c": 14854486
    },
    {
      "t": "cylinder",
      "n": "flowmeter-3",
      "p": [
        0.49,
        1.12,
        0.22
      ],
      "s": [
        0.13,
        0.38,
        0.13
      ],
      "c": 2769748
    },
    {
      "t": "rod",
      "n": "sample-tube-3",
      "from": [
        0.49,
        1.05,
        -0.13
      ],
      "to": [
        0.49,
        1.15,
        0.22
      ],
      "r": 0.014,
      "c": 14854486
    },
    {
      "t": "box",
      "n": "analysis-screen",
      "p": [
        0,
        1.52,
        -0.2
      ],
      "s": [
        0.68,
        0.28,
        0.07
      ],
      "c": 14854486
    },
    {
      "t": "box",
      "n": "gas-metric-readout-0",
      "p": [
        -0.24,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gas-metric-readout-1",
      "p": [
        -0.15999999999999998,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gas-metric-readout-2",
      "p": [
        -0.07999999999999999,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gas-metric-readout-3",
      "p": [
        0,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gas-metric-readout-4",
      "p": [
        0.08000000000000002,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gas-metric-readout-5",
      "p": [
        0.16000000000000003,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    },
    {
      "t": "box",
      "n": "gas-metric-readout-6",
      "p": [
        0.24,
        1.56,
        -0.152
      ],
      "s": [
        0.055,
        0.03,
        0.013
      ],
      "c": 2769748
    }
  ]
}); }
