import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Countertop Spice Index Carousel. 双环瓶位、索引刻度、中央把手. Not physically print-tested. */
export const assetMeta = {
  "id": "kitchen.countertop-spice-index-carousel.001",
  "slug": "countertop-spice-index-carousel",
  "title": "Countertop Spice Index Carousel",
  "title_zh": "台式香料索引转盘",
  "summary": "Rotating-look spice organizer with angled label faces and multi-ring bottle grouping",
  "category": "kitchen",
  "tags": [
    "countertop",
    "spice",
    "index",
    "carousel",
    "kitchen",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.25,
    0.23,
    0.24
  ],
  "generator": "createCountertopSpiceIndexCarousel",
  "source_path": "src/models/countertop_spice_index_carousel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/countertop-spice-index-carousel.webp",
  "accent": "#d7a46b",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createCountertopSpiceIndexCarousel() {
  return buildMarketV15({
  "title": "Countertop Spice Index Carousel",
  "dimensions": [
    0.25,
    0.23,
    0.24
  ],
  "accent": "#d7a46b",
  "body": [
    [
      "cylinder",
      "turntable",
      [
        0,
        0.15,
        0
      ],
      [
        1.5,
        0.19,
        1.5
      ],
      "wood",
      "matte",
      null
    ],
    [
      "cylinder",
      "top-disc",
      [
        0,
        0.36,
        0
      ],
      [
        1.35,
        0.12,
        1.35
      ],
      "primary",
      "matte",
      null
    ],
    [
      "cylinder",
      "central-handle",
      [
        0,
        1.17,
        0
      ],
      [
        0.18,
        1.31,
        0.18
      ],
      "metal",
      "matte",
      null
    ],
    [
      "sphere",
      "handle-knob",
      [
        0,
        1.83,
        0
      ],
      [
        0.3,
        0.26,
        0.3
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "front-index",
      [
        0,
        0.27,
        0.8
      ],
      [
        0.88,
        0.19,
        0.08
      ],
      "light",
      "matte",
      null
    ],
    [
      "cylinder",
      "bearing-housing",
      [
        0,
        0.06,
        0
      ],
      [
        0.64,
        0.13,
        0.64
      ],
      "metal",
      "matte",
      null
    ],
    [
      "torus",
      "outer-guard",
      [
        0,
        0.48,
        0
      ],
      [
        1.61,
        0.06,
        1.61
      ],
      "secondary",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "spice-jar",
      "t": "cylinder",
      "count": 10,
      "o": [
        0,
        0.79,
        0
      ],
      "r": 0.52,
      "s": [
        0.23,
        0.68,
        0.23
      ],
      "c": "light",
      "f": "glass"
    },
    {
      "k": "radial",
      "n": "cap-rib",
      "t": "cylinder",
      "count": 10,
      "o": [
        0,
        1.2,
        0
      ],
      "r": 0.52,
      "s": [
        0.25,
        0.14,
        0.25
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "dial-mark",
      "t": "box",
      "count": 12,
      "o": [
        0,
        0.32,
        0
      ],
      "r": 0.7,
      "s": [
        0.05,
        0.025,
        0.1
      ],
      "c": "dark",
      "f": "matte"
    }
  ]
});
}
