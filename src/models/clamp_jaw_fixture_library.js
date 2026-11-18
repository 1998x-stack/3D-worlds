import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Clamp Jaw Fixture Library; stylized visual prototype only. */
export const assetMeta = {
  "id": "tools.clamp-jaw-fixture-library.001",
  "slug": "clamp-jaw-fixture-library",
  "title": "Clamp Jaw Fixture Library",
  "title_zh": "可换钳口夹具库",
  "summary": "Original clamp jaw fixture library study with cradle and tool assemblies and individually named functional details",
  "category": "tools",
  "tags": [
    "clamp",
    "jaw",
    "fixture",
    "library",
    "tools",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.3,
    0.16,
    0.2
  ],
  "generator": "createClampJawFixtureLibrary",
  "source_path": "src/models/clamp_jaw_fixture_library.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/clamp-jaw-fixture-library.webp",
  "accent": "#e7a852",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createClampJawFixtureLibrary() { return buildRecipe({
  "title": "Clamp Jaw Fixture Library",
  "dimensions": [
    0.3,
    0.16,
    0.2
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "cradle-0-support--1",
      "p": [
        -0.53,
        0.62,
        0
      ],
      "s": [
        0.2,
        0.75,
        1.12
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-0-saddle--1",
      "p": [
        -0.43,
        0.93,
        0.36
      ],
      "s": [
        0.47,
        0.13,
        0.3
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "cradle-0-hinge--1",
      "p": [
        -0.55,
        0.34,
        -0.52
      ],
      "s": [
        0.21,
        0.21,
        0.21
      ],
      "c": 15181906,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-0-hanger--1",
      "from": [
        -0.73,
        0.4,
        0.1
      ],
      "to": [
        -0.75,
        1.35,
        0.15
      ],
      "r": 0.034,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cradle-0-support-1",
      "p": [
        0.53,
        0.62,
        0
      ],
      "s": [
        0.2,
        0.75,
        1.12
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-0-saddle-1",
      "p": [
        0.43,
        0.93,
        0.36
      ],
      "s": [
        0.47,
        0.13,
        0.3
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "cradle-0-hinge-1",
      "p": [
        0.55,
        0.34,
        -0.52
      ],
      "s": [
        0.21,
        0.21,
        0.21
      ],
      "c": 15181906,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-0-hanger-1",
      "from": [
        0.73,
        0.4,
        0.1
      ],
      "to": [
        0.75,
        1.35,
        0.15
      ],
      "r": 0.034,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-0",
      "from": [
        -0.68,
        0.38,
        -0.4
      ],
      "to": [
        -0.68,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-0",
      "p": [
        -0.68,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-1",
      "from": [
        -0.49000000000000005,
        0.38,
        -0.4
      ],
      "to": [
        -0.49000000000000005,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-1",
      "p": [
        -0.49000000000000005,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-2",
      "from": [
        -0.30000000000000004,
        0.38,
        -0.4
      ],
      "to": [
        -0.30000000000000004,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-2",
      "p": [
        -0.30000000000000004,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-3",
      "from": [
        -0.10999999999999999,
        0.38,
        -0.4
      ],
      "to": [
        -0.10999999999999999,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-3",
      "p": [
        -0.10999999999999999,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-4",
      "from": [
        0.07999999999999996,
        0.38,
        -0.4
      ],
      "to": [
        0.07999999999999996,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-4",
      "p": [
        0.07999999999999996,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-5",
      "from": [
        0.2699999999999999,
        0.38,
        -0.4
      ],
      "to": [
        0.2699999999999999,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-5",
      "p": [
        0.2699999999999999,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-6",
      "from": [
        0.4600000000000001,
        0.38,
        -0.4
      ],
      "to": [
        0.4600000000000001,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-6",
      "p": [
        0.4600000000000001,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-7",
      "from": [
        0.65,
        0.38,
        -0.4
      ],
      "to": [
        0.65,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-7",
      "p": [
        0.65,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    }
  ]
}); }
