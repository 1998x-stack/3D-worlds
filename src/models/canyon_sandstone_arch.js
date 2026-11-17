import { buildRecipe } from './recipe_engine.js';
/** Canyon Sandstone Arch / 峡谷砂岩天然拱门: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "nature.canyon-sandstone-arch.001",
  "slug": "canyon-sandstone-arch",
  "title": "Canyon Sandstone Arch",
  "title_zh": "峡谷砂岩天然拱门",
  "summary": "Weathered sandstone arch with stratified layers and scree at its base",
  "category": "nature",
  "tags": [
    "canyon",
    "sandstone",
    "arch",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.5,
    2.86,
    1.95
  ],
  "generator": "createCanyonSandstoneArch",
  "source_path": "src/models/canyon_sandstone_arch.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/canyon-sandstone-arch.webp",
  "accent": "#799a6a"
};
export function createCanyonSandstoneArch() { return buildRecipe({
  "title": "Canyon Sandstone Arch",
  "dimensions": [
    3.5,
    2.86,
    1.95
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "weathered-arch-segment-0",
      "p": [
        -1.4,
        1.8,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "weathered-arch-segment-1",
      "p": [
        -0.99,
        2.19,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "weathered-arch-segment-2",
      "p": [
        -0.58,
        2.475499814951862,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "weathered-arch-segment-3",
      "p": [
        -0.16999999999999993,
        2.58,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "weathered-arch-segment-4",
      "p": [
        0.24,
        2.475499814951862,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "weathered-arch-segment-5",
      "p": [
        0.6499999999999999,
        2.19,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "weathered-arch-segment-6",
      "p": [
        1.06,
        1.8,
        0
      ],
      "s": [
        0.38,
        0.36,
        0.45
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "arch-base--1-0",
      "p": [
        -1.35,
        0.25,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "arch-base--1-1",
      "p": [
        -1.31,
        0.5700000000000001,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 6919344
    },
    {
      "t": "sphere",
      "n": "arch-base--1-2",
      "p": [
        -1.27,
        0.89,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "arch-base--1-3",
      "p": [
        -1.23,
        1.21,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 6919344
    },
    {
      "t": "sphere",
      "n": "arch-base-1-0",
      "p": [
        1.35,
        0.25,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "arch-base-1-1",
      "p": [
        1.31,
        0.5700000000000001,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 6919344
    },
    {
      "t": "sphere",
      "n": "arch-base-1-2",
      "p": [
        1.27,
        0.89,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 7969386
    },
    {
      "t": "sphere",
      "n": "arch-base-1-3",
      "p": [
        1.23,
        1.21,
        0
      ],
      "s": [
        0.4,
        0.27,
        0.47
      ],
      "c": 6919344
    },
    {
      "t": "sphere",
      "n": "scree-rock-0",
      "p": [
        -1.2000000000000002,
        0.07,
        -0.55
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "scree-rock-1",
      "p": [
        -0.8,
        0.07,
        0
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "scree-rock-2",
      "p": [
        -0.4,
        0.07,
        0.55
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "scree-rock-3",
      "p": [
        0,
        0.07,
        -0.55
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "scree-rock-4",
      "p": [
        0.4,
        0.07,
        0
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "scree-rock-5",
      "p": [
        0.8,
        0.07,
        0.55
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    },
    {
      "t": "sphere",
      "n": "scree-rock-6",
      "p": [
        1.2000000000000002,
        0.07,
        -0.55
      ],
      "s": [
        0.17,
        0.09,
        0.15
      ],
      "c": 9202771
    }
  ]
}); }
