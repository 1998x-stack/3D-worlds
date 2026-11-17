import { buildRecipe } from './recipe_engine.js';
/** Recessed Shower Shelf Niche / 淋浴墙体内嵌置物格: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "bathroom.recessed-shower-shelf-niche.001",
  "slug": "recessed-shower-shelf-niche",
  "title": "Recessed Shower Shelf Niche",
  "title_zh": "淋浴墙体内嵌置物格",
  "summary": "Tile-lined wall niche with two recessed compartments, skincare bottles and LED rim",
  "category": "bathroom",
  "tags": [
    "shower",
    "niche",
    "storage"
  ],
  "dimensions_m": [
    0.91,
    1.42,
    0.27
  ],
  "generator": "createRecessedShowerShelfNiche",
  "source_path": "src/models/recessed_shower_shelf_niche.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/recessed-shower-shelf-niche.webp"
};
export function createRecessedShowerShelfNiche() { return buildRecipe({
  "title": "Recessed Shower Shelf Niche",
  "dimensions": [
    0.91,
    1.42,
    0.27
  ],
  "parts": [
    {
      "t": "box",
      "n": "outer-tile-panel",
      "p": [
        0,
        0.71,
        -0.09
      ],
      "s": [
        0.9,
        1.41,
        0.15
      ],
      "c": 11714493
    },
    {
      "t": "box",
      "n": "niche-recess",
      "p": [
        0,
        0.72,
        0.005
      ],
      "s": [
        0.72,
        1.13,
        0.075
      ],
      "c": 6587275
    },
    {
      "t": "box",
      "n": "vertical-rim-0",
      "p": [
        -0.33,
        0.72,
        0.076
      ],
      "s": [
        0.034,
        1.17,
        0.032
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "vertical-rim-1",
      "p": [
        0.33,
        0.72,
        0.076
      ],
      "s": [
        0.034,
        1.17,
        0.032
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "horizontal-divider-0",
      "p": [
        0,
        0.15999999999999992,
        0.079
      ],
      "s": [
        0.71,
        0.037,
        0.06
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "horizontal-divider-1",
      "p": [
        0,
        0.71,
        0.079
      ],
      "s": [
        0.71,
        0.037,
        0.06
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "horizontal-divider-2",
      "p": [
        0,
        1.26,
        0.079
      ],
      "s": [
        0.71,
        0.037,
        0.06
      ],
      "c": 15328729
    },
    {
      "t": "cylinder",
      "n": "shampoo-bottle-0",
      "p": [
        -0.22,
        0.29,
        0.09
      ],
      "s": [
        0.12,
        0.34,
        0.11
      ],
      "c": 13809560
    },
    {
      "t": "cylinder",
      "n": "shampoo-bottle-1",
      "p": [
        0.22,
        0.29,
        0.09
      ],
      "s": [
        0.12,
        0.34,
        0.11
      ],
      "c": 8630956
    },
    {
      "t": "cylinder",
      "n": "bottle-cap-0",
      "p": [
        -0.22,
        0.47,
        0.09
      ],
      "s": [
        0.085,
        0.039,
        0.085
      ],
      "c": 3490120
    },
    {
      "t": "cylinder",
      "n": "bottle-cap-1",
      "p": [
        0.22,
        0.47,
        0.09
      ],
      "s": [
        0.085,
        0.039,
        0.085
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "soap-box",
      "p": [
        0,
        0.83,
        0.1
      ],
      "s": [
        0.22,
        0.11,
        0.11
      ],
      "c": 14993837
    },
    {
      "t": "sphere",
      "n": "niche-led-strip",
      "p": [
        0,
        1.29,
        0.095
      ],
      "s": [
        0.58,
        0.025,
        0.026
      ],
      "c": 15129004
    },
    {
      "t": "box",
      "n": "grout-line-0",
      "p": [
        -0.3,
        0.05,
        -0.007
      ],
      "s": [
        0.012,
        0.05,
        0.013
      ],
      "c": 14737364
    },
    {
      "t": "box",
      "n": "grout-line-1",
      "p": [
        -0.09999999999999998,
        0.05,
        -0.007
      ],
      "s": [
        0.012,
        0.05,
        0.013
      ],
      "c": 14737364
    },
    {
      "t": "box",
      "n": "grout-line-2",
      "p": [
        0.10000000000000003,
        0.05,
        -0.007
      ],
      "s": [
        0.012,
        0.05,
        0.013
      ],
      "c": 14737364
    },
    {
      "t": "box",
      "n": "grout-line-3",
      "p": [
        0.3000000000000001,
        0.05,
        -0.007
      ],
      "s": [
        0.012,
        0.05,
        0.013
      ],
      "c": 14737364
    }
  ]
}); }
