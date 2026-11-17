import { buildRecipe } from './recipe_engine.js';
/** Bamboo Shoe Bench — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "furniture.bamboo-shoe-bench.001",
  "slug": "bamboo-shoe-bench",
  "title": "Bamboo Shoe Bench",
  "title_zh": "竹制换鞋凳",
  "summary": "Entryway seat with bamboo slatted top, twin shelves and four crossbraced supports",
  "category": "furniture",
  "tags": [
    "shoe",
    "bench",
    "entryway"
  ],
  "dimensions_m": [
    1.18,
    0.61,
    0.45
  ],
  "generator": "createBambooShoeBench",
  "source_path": "src/models/bamboo_shoe_bench.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/bamboo-shoe-bench.webp"
};
export function createBambooShoeBench() { return buildRecipe({
  "title": "Bamboo Shoe Bench",
  "dimensions": [
    1.18,
    0.61,
    0.45
  ],
  "parts": [
    {
      "t": "box",
      "n": "bamboo-seat-slat-0",
      "p": [
        -0.48,
        0.57,
        0
      ],
      "s": [
        0.15,
        0.055,
        0.43
      ],
      "c": 11903096
    },
    {
      "t": "box",
      "n": "bamboo-seat-slat-1",
      "p": [
        -0.29,
        0.57,
        0
      ],
      "s": [
        0.15,
        0.055,
        0.43
      ],
      "c": 11903096
    },
    {
      "t": "box",
      "n": "bamboo-seat-slat-2",
      "p": [
        -0.09999999999999998,
        0.57,
        0
      ],
      "s": [
        0.15,
        0.055,
        0.43
      ],
      "c": 11903096
    },
    {
      "t": "box",
      "n": "bamboo-seat-slat-3",
      "p": [
        0.09000000000000008,
        0.57,
        0
      ],
      "s": [
        0.15,
        0.055,
        0.43
      ],
      "c": 11903096
    },
    {
      "t": "box",
      "n": "bamboo-seat-slat-4",
      "p": [
        0.28,
        0.57,
        0
      ],
      "s": [
        0.15,
        0.055,
        0.43
      ],
      "c": 11903096
    },
    {
      "t": "box",
      "n": "bamboo-seat-slat-5",
      "p": [
        0.47,
        0.57,
        0
      ],
      "s": [
        0.15,
        0.055,
        0.43
      ],
      "c": 11903096
    },
    {
      "t": "box",
      "n": "bench-leg-0-0",
      "p": [
        -0.51,
        0.3,
        -0.18
      ],
      "s": [
        0.065,
        0.56,
        0.067
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "bench-leg-0-1",
      "p": [
        -0.51,
        0.3,
        0.18
      ],
      "s": [
        0.065,
        0.56,
        0.067
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "bench-leg-1-0",
      "p": [
        0.51,
        0.3,
        -0.18
      ],
      "s": [
        0.065,
        0.56,
        0.067
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "bench-leg-1-1",
      "p": [
        0.51,
        0.3,
        0.18
      ],
      "s": [
        0.065,
        0.56,
        0.067
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "middle-slat-0",
      "p": [
        -0.42,
        0.31,
        0
      ],
      "s": [
        0.12,
        0.038,
        0.38
      ],
      "c": 12757377
    },
    {
      "t": "box",
      "n": "middle-slat-1",
      "p": [
        -0.21,
        0.31,
        0
      ],
      "s": [
        0.12,
        0.038,
        0.38
      ],
      "c": 12757377
    },
    {
      "t": "box",
      "n": "middle-slat-2",
      "p": [
        0,
        0.31,
        0
      ],
      "s": [
        0.12,
        0.038,
        0.38
      ],
      "c": 12757377
    },
    {
      "t": "box",
      "n": "middle-slat-3",
      "p": [
        0.21000000000000002,
        0.31,
        0
      ],
      "s": [
        0.12,
        0.038,
        0.38
      ],
      "c": 12757377
    },
    {
      "t": "box",
      "n": "middle-slat-4",
      "p": [
        0.42,
        0.31,
        0
      ],
      "s": [
        0.12,
        0.038,
        0.38
      ],
      "c": 12757377
    },
    {
      "t": "box",
      "n": "bottom-slat-0",
      "p": [
        -0.42,
        0.12,
        0
      ],
      "s": [
        0.12,
        0.035,
        0.38
      ],
      "c": 11506540
    },
    {
      "t": "box",
      "n": "bottom-slat-1",
      "p": [
        -0.21,
        0.12,
        0
      ],
      "s": [
        0.12,
        0.035,
        0.38
      ],
      "c": 11506540
    },
    {
      "t": "box",
      "n": "bottom-slat-2",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.12,
        0.035,
        0.38
      ],
      "c": 11506540
    },
    {
      "t": "box",
      "n": "bottom-slat-3",
      "p": [
        0.21000000000000002,
        0.12,
        0
      ],
      "s": [
        0.12,
        0.035,
        0.38
      ],
      "c": 11506540
    },
    {
      "t": "box",
      "n": "bottom-slat-4",
      "p": [
        0.42,
        0.12,
        0
      ],
      "s": [
        0.12,
        0.035,
        0.38
      ],
      "c": 11506540
    },
    {
      "t": "rod",
      "n": "rear-stabilizer",
      "from": [
        -0.53,
        0.42,
        -0.19
      ],
      "to": [
        0.53,
        0.42,
        -0.19
      ],
      "r": 0.026,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "front-stabilizer",
      "from": [
        -0.53,
        0.42,
        0.19
      ],
      "to": [
        0.53,
        0.42,
        0.19
      ],
      "r": 0.026,
      "c": 3357765
    }
  ]
}); }
