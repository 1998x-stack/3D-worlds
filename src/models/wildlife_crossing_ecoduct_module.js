import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Wildlife Crossing Ecoduct Module / 野生动物生态廊桥. */
export const assetMeta = {
  "id": "urban.wildlife-crossing-ecoduct-module.001",
  "slug": "wildlife-crossing-ecoduct-module",
  "title": "Wildlife Crossing Ecoduct Module",
  "title_zh": "野生动物生态廊桥",
  "summary": "Vegetated pedestrian-free wildlife overpass with soil cover, fencing and habitat paths",
  "category": "urban",
  "tags": [
    "wildlife",
    "crossing",
    "ecoduct",
    "module",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.72,
    2.58,
    3.2
  ],
  "generator": "createWildlifeCrossingEcoductModule",
  "source_path": "src/models/wildlife_crossing_ecoduct_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/wildlife-crossing-ecoduct-module.webp",
  "accent": "#6d8796"
};
export function createWildlifeCrossingEcoductModule() { return buildRecipe({
  "title": "Wildlife Crossing Ecoduct Module",
  "dimensions": [
    3.72,
    2.58,
    3.2
  ],
  "parts": [
    {
      "t": "box",
      "n": "wildlife-crossing-ecoduct-module-wildlife-green-ecoduct-groundbed",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        3.41,
        0.56,
        2.82
      ],
      "c": 11190439
    },
    {
      "t": "box",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-support-pier--1",
      "p": [
        -1.2,
        0.94,
        0
      ],
      "s": [
        0.3,
        1.12,
        2.45
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "wildlife-crossing-ecoduct-module-wildlife-fencing--1",
      "p": [
        -1.54,
        1.57,
        0
      ],
      "s": [
        0.06,
        0.58,
        2.62
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-support-pier-1",
      "p": [
        1.2,
        0.94,
        0
      ],
      "s": [
        0.3,
        1.12,
        2.45
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "wildlife-crossing-ecoduct-module-wildlife-fencing-1",
      "p": [
        1.54,
        1.57,
        0
      ],
      "s": [
        0.06,
        0.58,
        2.62
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "wildlife-crossing-ecoduct-module-habitat-green-landbridge",
      "p": [
        0,
        1.49,
        0
      ],
      "s": [
        3.22,
        0.18,
        2.54
      ],
      "c": 7178134
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-0",
      "p": [
        -1.32,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-1",
      "p": [
        -0.98,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-2",
      "p": [
        -0.64,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-3",
      "p": [
        -0.30000000000000004,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-4",
      "p": [
        0.040000000000000036,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-5",
      "p": [
        0.3800000000000001,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-6",
      "p": [
        0.72,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-7",
      "p": [
        1.0600000000000003,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-8",
      "p": [
        1.4000000000000001,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-9",
      "p": [
        -1.32,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-10",
      "p": [
        -0.98,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-11",
      "p": [
        -0.64,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-12",
      "p": [
        -0.30000000000000004,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-13",
      "p": [
        0.040000000000000036,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-14",
      "p": [
        0.3800000000000001,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-15",
      "p": [
        0.72,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 14202734
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-16",
      "p": [
        1.0600000000000003,
        1.69,
        -0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    },
    {
      "t": "sphere",
      "n": "wildlife-crossing-ecoduct-module-ecoduct-native-shrub-17",
      "p": [
        1.4000000000000001,
        1.69,
        0.83
      ],
      "s": [
        0.26,
        0.18,
        0.24
      ],
      "c": 7382391
    }
  ]
}); }
