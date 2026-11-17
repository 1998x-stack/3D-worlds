import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Zero Waste Compost Dehydrator / 厨余脱水处理机. */
export const assetMeta = {
  "id": "kitchen.zero-waste-compost-dehydrator.001",
  "slug": "zero-waste-compost-dehydrator",
  "title": "Zero Waste Compost Dehydrator",
  "title_zh": "厨余脱水处理机",
  "summary": "Compact organic waste processor with feeding hatch, airflow vents and output bin",
  "category": "kitchen",
  "tags": [
    "zero",
    "waste",
    "compost",
    "dehydrator",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.91,
    1.25,
    0.8
  ],
  "generator": "createZeroWasteCompostDehydrator",
  "source_path": "src/models/zero_waste_compost_dehydrator.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/zero-waste-compost-dehydrator.webp",
  "accent": "#d7b65b"
};
export function createZeroWasteCompostDehydrator() { return buildRecipe({
  "title": "Zero Waste Compost Dehydrator",
  "dimensions": [
    0.91,
    1.25,
    0.8
  ],
  "parts": [
    {
      "t": "box",
      "n": "compost-dehydrator-main-housing",
      "p": [
        0,
        0.58,
        0
      ],
      "s": [
        0.74,
        1.02,
        0.67
      ],
      "c": 13225148
    },
    {
      "t": "box",
      "n": "food-waste-feeding-hatch",
      "p": [
        0,
        1.11,
        -0.09
      ],
      "s": [
        0.56,
        0.11,
        0.38
      ],
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "grinder-drive",
      "p": [
        0,
        0.72,
        0.11
      ],
      "s": [
        0.33,
        0.22,
        0.33
      ],
      "c": 6520451
    },
    {
      "t": "box",
      "n": "thermal-vent-0",
      "p": [
        -0.28,
        0.45,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-1",
      "p": [
        0,
        0.45,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-2",
      "p": [
        0.28,
        0.45,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-3",
      "p": [
        -0.28,
        0.63,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-4",
      "p": [
        0,
        0.63,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-5",
      "p": [
        0.28,
        0.63,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-6",
      "p": [
        -0.28,
        0.81,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-7",
      "p": [
        0,
        0.81,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "thermal-vent-8",
      "p": [
        0.28,
        0.81,
        0.349
      ],
      "s": [
        0.13,
        0.08,
        0.025
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "processor-digital-display",
      "p": [
        0,
        1.02,
        0.343
      ],
      "s": [
        0.32,
        0.12,
        0.019
      ],
      "c": 11767394
    },
    {
      "t": "box",
      "n": "dried-compost-output-bin",
      "p": [
        0,
        0.21,
        0.31
      ],
      "s": [
        0.56,
        0.31,
        0.29
      ],
      "c": 6520451
    },
    {
      "t": "sphere",
      "n": "organic-waste-piece-0",
      "p": [
        -0.17,
        0.23,
        0.45
      ],
      "s": [
        0.08,
        0.06,
        0.07
      ],
      "c": 11767394
    },
    {
      "t": "sphere",
      "n": "organic-waste-piece-1",
      "p": [
        0,
        0.23,
        0.45
      ],
      "s": [
        0.08,
        0.06,
        0.07
      ],
      "c": 14136923
    },
    {
      "t": "sphere",
      "n": "organic-waste-piece-2",
      "p": [
        0.17,
        0.23,
        0.45
      ],
      "s": [
        0.08,
        0.06,
        0.07
      ],
      "c": 11767394
    },
    {
      "t": "sphere",
      "n": "organic-waste-piece-3",
      "p": [
        -0.17,
        0.30000000000000004,
        0.45
      ],
      "s": [
        0.08,
        0.06,
        0.07
      ],
      "c": 14136923
    },
    {
      "t": "sphere",
      "n": "organic-waste-piece-4",
      "p": [
        0,
        0.30000000000000004,
        0.45
      ],
      "s": [
        0.08,
        0.06,
        0.07
      ],
      "c": 11767394
    },
    {
      "t": "sphere",
      "n": "organic-waste-piece-5",
      "p": [
        0.17,
        0.30000000000000004,
        0.45
      ],
      "s": [
        0.08,
        0.06,
        0.07
      ],
      "c": 14136923
    }
  ]
}); }
