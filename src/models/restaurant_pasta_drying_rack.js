import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Restaurant Pasta Drying Rack / 餐厅鲜面晾晒架. */
export const assetMeta = {
  "id": "kitchen.restaurant-pasta-drying-rack.001",
  "slug": "restaurant-pasta-drying-rack",
  "title": "Restaurant Pasta Drying Rack",
  "title_zh": "餐厅鲜面晾晒架",
  "summary": "Commercial pasta drying frame with hanging spaghetti strands, folding legs and trays",
  "category": "kitchen",
  "tags": [
    "restaurant",
    "pasta",
    "drying",
    "rack",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.55,
    1.95,
    0.9
  ],
  "generator": "createRestaurantPastaDryingRack",
  "source_path": "src/models/restaurant_pasta_drying_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/restaurant-pasta-drying-rack.webp",
  "accent": "#d3c4a9"
};
export function createRestaurantPastaDryingRack() { return buildRecipe({
  "title": "Restaurant Pasta Drying Rack",
  "dimensions": [
    1.55,
    1.95,
    0.9
  ],
  "parts": [
    {
      "t": "box",
      "n": "pasta-rack-upright--1",
      "p": [
        -0.6,
        0.87,
        0
      ],
      "s": [
        0.08,
        1.7,
        0.11
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "pasta-rack-upright-1",
      "p": [
        0.6,
        0.87,
        0
      ],
      "s": [
        0.08,
        1.7,
        0.11
      ],
      "c": 6652044
    },
    {
      "t": "rod",
      "n": "pasta-drying-bar-0",
      "from": [
        -0.63,
        0.56,
        0
      ],
      "to": [
        0.63,
        0.56,
        0
      ],
      "r": 0.032,
      "c": 3426904
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-0",
      "from": [
        -0.48,
        0.56,
        0.02
      ],
      "to": [
        -0.48,
        0.28,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-1",
      "from": [
        -0.374,
        0.56,
        0.02
      ],
      "to": [
        -0.374,
        0.26,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-2",
      "from": [
        -0.268,
        0.56,
        0.02
      ],
      "to": [
        -0.268,
        0.24000000000000002,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-3",
      "from": [
        -0.16199999999999998,
        0.56,
        0.02
      ],
      "to": [
        -0.16199999999999998,
        0.28,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-4",
      "from": [
        -0.055999999999999994,
        0.56,
        0.02
      ],
      "to": [
        -0.055999999999999994,
        0.26,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-5",
      "from": [
        0.050000000000000044,
        0.56,
        0.02
      ],
      "to": [
        0.050000000000000044,
        0.24000000000000002,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-6",
      "from": [
        0.15600000000000003,
        0.56,
        0.02
      ],
      "to": [
        0.15600000000000003,
        0.28,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-7",
      "from": [
        0.262,
        0.56,
        0.02
      ],
      "to": [
        0.262,
        0.26,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-8",
      "from": [
        0.368,
        0.56,
        0.02
      ],
      "to": [
        0.368,
        0.24000000000000002,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-0-9",
      "from": [
        0.474,
        0.56,
        0.02
      ],
      "to": [
        0.474,
        0.28,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "pasta-drying-bar-1",
      "from": [
        -0.63,
        0.92,
        0
      ],
      "to": [
        0.63,
        0.92,
        0
      ],
      "r": 0.032,
      "c": 3426904
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-0",
      "from": [
        -0.48,
        0.92,
        0.02
      ],
      "to": [
        -0.48,
        0.64,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-1",
      "from": [
        -0.374,
        0.92,
        0.02
      ],
      "to": [
        -0.374,
        0.62,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-2",
      "from": [
        -0.268,
        0.92,
        0.02
      ],
      "to": [
        -0.268,
        0.6,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-3",
      "from": [
        -0.16199999999999998,
        0.92,
        0.02
      ],
      "to": [
        -0.16199999999999998,
        0.64,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-4",
      "from": [
        -0.055999999999999994,
        0.92,
        0.02
      ],
      "to": [
        -0.055999999999999994,
        0.62,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-5",
      "from": [
        0.050000000000000044,
        0.92,
        0.02
      ],
      "to": [
        0.050000000000000044,
        0.6,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-6",
      "from": [
        0.15600000000000003,
        0.92,
        0.02
      ],
      "to": [
        0.15600000000000003,
        0.64,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-7",
      "from": [
        0.262,
        0.92,
        0.02
      ],
      "to": [
        0.262,
        0.62,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-8",
      "from": [
        0.368,
        0.92,
        0.02
      ],
      "to": [
        0.368,
        0.6,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-1-9",
      "from": [
        0.474,
        0.92,
        0.02
      ],
      "to": [
        0.474,
        0.64,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "pasta-drying-bar-2",
      "from": [
        -0.63,
        1.28,
        0
      ],
      "to": [
        0.63,
        1.28,
        0
      ],
      "r": 0.032,
      "c": 3426904
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-0",
      "from": [
        -0.48,
        1.28,
        0.02
      ],
      "to": [
        -0.48,
        1,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-1",
      "from": [
        -0.374,
        1.28,
        0.02
      ],
      "to": [
        -0.374,
        0.98,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-2",
      "from": [
        -0.268,
        1.28,
        0.02
      ],
      "to": [
        -0.268,
        0.96,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-3",
      "from": [
        -0.16199999999999998,
        1.28,
        0.02
      ],
      "to": [
        -0.16199999999999998,
        1,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-4",
      "from": [
        -0.055999999999999994,
        1.28,
        0.02
      ],
      "to": [
        -0.055999999999999994,
        0.98,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-5",
      "from": [
        0.050000000000000044,
        1.28,
        0.02
      ],
      "to": [
        0.050000000000000044,
        0.96,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-6",
      "from": [
        0.15600000000000003,
        1.28,
        0.02
      ],
      "to": [
        0.15600000000000003,
        1,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-7",
      "from": [
        0.262,
        1.28,
        0.02
      ],
      "to": [
        0.262,
        0.98,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-8",
      "from": [
        0.368,
        1.28,
        0.02
      ],
      "to": [
        0.368,
        0.96,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-2-9",
      "from": [
        0.474,
        1.28,
        0.02
      ],
      "to": [
        0.474,
        1,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "pasta-drying-bar-3",
      "from": [
        -0.63,
        1.6400000000000001,
        0
      ],
      "to": [
        0.63,
        1.6400000000000001,
        0
      ],
      "r": 0.032,
      "c": 3426904
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-0",
      "from": [
        -0.48,
        1.6400000000000001,
        0.02
      ],
      "to": [
        -0.48,
        1.36,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-1",
      "from": [
        -0.374,
        1.6400000000000001,
        0.02
      ],
      "to": [
        -0.374,
        1.34,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-2",
      "from": [
        -0.268,
        1.6400000000000001,
        0.02
      ],
      "to": [
        -0.268,
        1.32,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-3",
      "from": [
        -0.16199999999999998,
        1.6400000000000001,
        0.02
      ],
      "to": [
        -0.16199999999999998,
        1.36,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-4",
      "from": [
        -0.055999999999999994,
        1.6400000000000001,
        0.02
      ],
      "to": [
        -0.055999999999999994,
        1.34,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-5",
      "from": [
        0.050000000000000044,
        1.6400000000000001,
        0.02
      ],
      "to": [
        0.050000000000000044,
        1.32,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-6",
      "from": [
        0.15600000000000003,
        1.6400000000000001,
        0.02
      ],
      "to": [
        0.15600000000000003,
        1.36,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-7",
      "from": [
        0.262,
        1.6400000000000001,
        0.02
      ],
      "to": [
        0.262,
        1.34,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-8",
      "from": [
        0.368,
        1.6400000000000001,
        0.02
      ],
      "to": [
        0.368,
        1.32,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "noodle-hanging-strand-3-9",
      "from": [
        0.474,
        1.6400000000000001,
        0.02
      ],
      "to": [
        0.474,
        1.36,
        0.07
      ],
      "r": 0.009,
      "c": 15380324
    },
    {
      "t": "box",
      "n": "pasta-cooling-bottom-tray",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        1.3,
        0.1,
        0.63
      ],
      "c": 13878441
    },
    {
      "t": "box",
      "n": "rack-support-foot--1",
      "p": [
        -0.6,
        0.08,
        0
      ],
      "s": [
        0.22,
        0.15,
        0.76
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "rack-support-foot-1",
      "p": [
        0.6,
        0.08,
        0
      ],
      "s": [
        0.22,
        0.15,
        0.76
      ],
      "c": 6652044
    }
  ]
}); }
