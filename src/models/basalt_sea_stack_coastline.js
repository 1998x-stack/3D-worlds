import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Basalt Sea Stack Coastline / 玄武岩海蚀柱海岸. */
export const assetMeta = {
  "id": "nature.basalt-sea-stack-coastline.001",
  "slug": "basalt-sea-stack-coastline",
  "title": "Basalt Sea Stack Coastline",
  "title_zh": "玄武岩海蚀柱海岸",
  "summary": "Wave-cut basalt sea stacks with columnar rock bands, tide pools and foam",
  "category": "nature",
  "tags": [
    "basalt",
    "sea",
    "stack",
    "coastline",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.5,
    2.85,
    2.9
  ],
  "generator": "createBasaltSeaStackCoastline",
  "source_path": "src/models/basalt_sea_stack_coastline.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/basalt-sea-stack-coastline.webp",
  "accent": "#8b795f"
};
export function createBasaltSeaStackCoastline() { return buildRecipe({
  "title": "Basalt Sea Stack Coastline",
  "dimensions": [
    3.5,
    2.85,
    2.9
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "tidal-rock-coast-ground",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        3.13,
        0.27,
        2.46
      ],
      "c": 9140575
    },
    {
      "t": "box",
      "n": "shallow-tide-water",
      "p": [
        0,
        0.1,
        0.55
      ],
      "s": [
        3.12,
        0.1,
        1.62
      ],
      "c": 6921900
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-0",
      "p": [
        -1.23,
        0.645,
        -0.42
      ],
      "s": [
        0.35,
        0.73,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-0-0",
      "p": [
        -1.23,
        0.36,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-0-1",
      "p": [
        -1.23,
        0.49139999999999995,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-0-2",
      "p": [
        -1.23,
        0.6228,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-0-3",
      "p": [
        -1.23,
        0.7542,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-1",
      "p": [
        -0.86,
        0.835,
        0.030000000000000027
      ],
      "s": [
        0.35,
        1.1099999999999999,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-1-0",
      "p": [
        -0.86,
        0.36,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-1-1",
      "p": [
        -0.86,
        0.5598,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-1-2",
      "p": [
        -0.86,
        0.7595999999999999,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-1-3",
      "p": [
        -0.86,
        0.9593999999999999,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-2",
      "p": [
        -0.49,
        1.025,
        0.48000000000000004
      ],
      "s": [
        0.35,
        1.49,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-2-0",
      "p": [
        -0.49,
        0.36,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-2-1",
      "p": [
        -0.49,
        0.6282,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-2-2",
      "p": [
        -0.49,
        0.8964,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-2-3",
      "p": [
        -0.49,
        1.1645999999999999,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-3",
      "p": [
        -0.1200000000000001,
        1.215,
        -0.42
      ],
      "s": [
        0.35,
        1.87,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-3-0",
      "p": [
        -0.1200000000000001,
        0.36,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-3-1",
      "p": [
        -0.1200000000000001,
        0.6966,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-3-2",
      "p": [
        -0.1200000000000001,
        1.0332,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-3-3",
      "p": [
        -0.1200000000000001,
        1.3698000000000001,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-4",
      "p": [
        0.25,
        0.645,
        0.030000000000000027
      ],
      "s": [
        0.35,
        0.73,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-4-0",
      "p": [
        0.25,
        0.36,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-4-1",
      "p": [
        0.25,
        0.49139999999999995,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-4-2",
      "p": [
        0.25,
        0.6228,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-4-3",
      "p": [
        0.25,
        0.7542,
        0.27
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-5",
      "p": [
        0.6200000000000001,
        0.835,
        0.48000000000000004
      ],
      "s": [
        0.35,
        1.1099999999999999,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-5-0",
      "p": [
        0.6200000000000001,
        0.36,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-5-1",
      "p": [
        0.6200000000000001,
        0.5598,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-5-2",
      "p": [
        0.6200000000000001,
        0.7595999999999999,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-5-3",
      "p": [
        0.6200000000000001,
        0.9593999999999999,
        0.72
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "cone",
      "n": "basalt-sea-stack-6",
      "p": [
        0.9899999999999998,
        1.025,
        -0.42
      ],
      "s": [
        0.35,
        1.49,
        0.33
      ],
      "c": 7246460
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-6-0",
      "p": [
        0.9899999999999998,
        0.36,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-6-1",
      "p": [
        0.9899999999999998,
        0.6282,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-6-2",
      "p": [
        0.9899999999999998,
        0.8964,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "box",
      "n": "columnar-basalt-stripe-6-3",
      "p": [
        0.9899999999999998,
        1.1645999999999999,
        -0.18
      ],
      "s": [
        0.18,
        0.045,
        0.08
      ],
      "c": 7845814
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-0",
      "p": [
        -1.3,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-1",
      "p": [
        -0.9400000000000001,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-2",
      "p": [
        -0.5800000000000001,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-3",
      "p": [
        -0.21999999999999997,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-4",
      "p": [
        0.1399999999999999,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-5",
      "p": [
        0.4999999999999998,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-6",
      "p": [
        0.8600000000000001,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    },
    {
      "t": "sphere",
      "n": "breaking-sea-foam-7",
      "p": [
        1.22,
        0.22,
        1
      ],
      "s": [
        0.23,
        0.025,
        0.18
      ],
      "c": 13215610
    }
  ]
}); }
