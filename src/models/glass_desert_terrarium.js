import { buildRecipe } from './recipe_engine.js';
/** Glass Desert Terrarium — editable original scene geometry. */
export const assetMeta = {
  "id": "decor.glass-desert-terrarium.001",
  "slug": "glass-desert-terrarium",
  "title": "Glass Desert Terrarium",
  "title_zh": "玻璃沙漠微景观",
  "summary": "Glass succulent terrarium with sand layers and pebbles",
  "category": "decor",
  "tags": [
    "terrarium",
    "plant",
    "glass"
  ],
  "dimensions_m": [
    0.58,
    0.61,
    0.48
  ],
  "generator": "createGlassDesertTerrarium",
  "source_path": "src/models/glass_desert_terrarium.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/glass-desert-terrarium.webp"
};
export function createGlassDesertTerrarium() { return buildRecipe({
  "title": "Glass Desert Terrarium",
  "dimensions": [
    0.58,
    0.61,
    0.48
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "base",
      "p": [
        0,
        0.055,
        0
      ],
      "s": [
        0.49,
        0.11,
        0.44
      ],
      "c": 9793873
    },
    {
      "t": "sphere",
      "n": "terrarium-glass",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.54,
        0.49,
        0.43
      ],
      "c": 10273221
    },
    {
      "t": "cylinder",
      "n": "sand",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        0.42,
        0.09,
        0.38
      ],
      "c": 13020543
    },
    {
      "t": "sphere",
      "n": "succulent-0",
      "p": [
        0.16,
        0.25,
        0
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 8692098
    },
    {
      "t": "cone",
      "n": "succulent-leaf-0",
      "p": [
        0.16,
        0.36,
        0
      ],
      "s": [
        0.1,
        0.19,
        0.1
      ],
      "c": 7117953
    },
    {
      "t": "sphere",
      "n": "succulent-1",
      "p": [
        -0.11797867142785853,
        0.25,
        0.08781404784872124
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 6524264
    },
    {
      "t": "cone",
      "n": "succulent-leaf-1",
      "p": [
        -0.11797867142785853,
        0.36,
        0.08781404784872124
      ],
      "s": [
        0.1,
        0.19,
        0.1
      ],
      "c": 7117953
    },
    {
      "t": "sphere",
      "n": "succulent-2",
      "p": [
        0.013987086398532505,
        0.25,
        -0.12950230872368163
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 8692098
    },
    {
      "t": "cone",
      "n": "succulent-leaf-2",
      "p": [
        0.013987086398532505,
        0.36,
        -0.12950230872368163
      ],
      "s": [
        0.1,
        0.19,
        0.1
      ],
      "c": 7117953
    },
    {
      "t": "sphere",
      "n": "succulent-3",
      "p": [
        0.09735144804728933,
        0.25,
        0.10316733127703287
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 6524264
    },
    {
      "t": "cone",
      "n": "succulent-leaf-3",
      "p": [
        0.09735144804728933,
        0.36,
        0.10316733127703287
      ],
      "s": [
        0.1,
        0.19,
        0.1
      ],
      "c": 7117953
    },
    {
      "t": "sphere",
      "n": "succulent-4",
      "p": [
        -0.15755451767599984,
        0.25,
        -0.02264199976159455
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 8692098
    },
    {
      "t": "cone",
      "n": "succulent-leaf-4",
      "p": [
        -0.15755451767599984,
        0.36,
        -0.02264199976159455
      ],
      "s": [
        0.1,
        0.19,
        0.1
      ],
      "c": 7117953
    },
    {
      "t": "sphere",
      "n": "succulent-5",
      "p": [
        0.13499946036360458,
        0.25,
        -0.0697764181477477
      ],
      "s": [
        0.14,
        0.12,
        0.13
      ],
      "c": 6524264
    },
    {
      "t": "cone",
      "n": "succulent-leaf-5",
      "p": [
        0.13499946036360458,
        0.36,
        -0.0697764181477477
      ],
      "s": [
        0.1,
        0.19,
        0.1
      ],
      "c": 7117953
    },
    {
      "t": "sphere",
      "n": "pebble-0",
      "p": [
        0.18,
        0.2,
        0
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-1",
      "p": [
        0.11743874426952934,
        0.2,
        0.11367638443429154
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-2",
      "p": [
        -0.026757126048845455,
        0.2,
        0.1483334649007052
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-3",
      "p": [
        -0.1523534474188396,
        0.2,
        0.07988023613334318
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-4",
      "p": [
        -0.17204506895117994,
        0.2,
        -0.04409974686233514
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-5",
      "p": [
        -0.07214385097439557,
        0.2,
        -0.13742489051241824
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-6",
      "p": [
        0.07790636600450138,
        0.2,
        -0.1352225483949532
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "sphere",
      "n": "pebble-7",
      "p": [
        0.17380191535407316,
        0.2,
        -0.039023623714570334
      ],
      "s": [
        0.05,
        0.03,
        0.045
      ],
      "c": 10459784
    },
    {
      "t": "torus",
      "n": "glass-rim",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        0.73,
        0.7,
        0.73
      ],
      "c": 12756075,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "lid-knob",
      "p": [
        0,
        0.6,
        0
      ],
      "s": [
        0.073,
        0.048,
        0.068
      ],
      "c": 12756075
    },
    {
      "t": "box",
      "n": "nameplate",
      "p": [
        0,
        0.085,
        0.238
      ],
      "s": [
        0.25,
        0.044,
        0.012
      ],
      "c": 9544354
    }
  ]
}); }
