import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Forest Seed Courier Figurine. 种子背包、披风纹路、叶帽、木质路标. Not physically print-tested. */
export const assetMeta = {
  "id": "characters.forest-seed-courier-figurine.001",
  "slug": "forest-seed-courier-figurine",
  "title": "Forest Seed Courier Figurine",
  "title_zh": "森林种子信使摆件",
  "summary": "Botanical messenger figurine with seed satchel, cape and layered leaf hood",
  "category": "characters",
  "tags": [
    "forest",
    "seed",
    "courier",
    "figurine",
    "characters",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.17,
    0.28,
    0.18
  ],
  "generator": "createForestSeedCourierFigurine",
  "source_path": "src/models/forest_seed_courier_figurine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/forest-seed-courier-figurine.webp",
  "accent": "#a8c386",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createForestSeedCourierFigurine() {
  return buildMarketV15({
  "title": "Forest Seed Courier Figurine",
  "dimensions": [
    0.17,
    0.28,
    0.18
  ],
  "accent": "#a8c386",
  "body": [
    [
      "cylinder",
      "plinth",
      [
        0,
        0.06,
        0
      ],
      [
        1.12,
        0.12,
        1.1
      ],
      "wood",
      "matte",
      null
    ],
    [
      "cone",
      "robe",
      [
        0,
        0.7,
        0
      ],
      [
        0.6,
        1.01,
        0.54
      ],
      "primary",
      "matte",
      null
    ],
    [
      "sphere",
      "face",
      [
        0,
        1.51,
        0.15
      ],
      [
        0.46,
        0.45,
        0.43
      ],
      "light",
      "matte",
      null
    ],
    [
      "cone",
      "hood",
      [
        0,
        1.81,
        0
      ],
      [
        0.65,
        0.36,
        0.61
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "rounded-box",
      "satchel",
      [
        0.4,
        0.87,
        -0.12
      ],
      [
        0.44,
        0.52,
        0.35
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "staff",
      [
        -0.53,
        1.02,
        0.27
      ],
      [
        0.08,
        1.82,
        0.08
      ],
      "metal",
      "matte",
      null
    ],
    [
      "sphere",
      "staff-seed",
      [
        -0.53,
        2.01,
        0.27
      ],
      [
        0.2,
        0.21,
        0.17
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "cape-leaf",
      "t": "cone",
      "count": 10,
      "o": [
        0,
        0.95,
        0
      ],
      "r": 0.3,
      "s": [
        0.13,
        0.27,
        0.1
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "satchel-rivet",
      "t": "cylinder",
      "count": 6,
      "o": [
        0.23,
        0.85,
        0.1
      ],
      "d": [
        0.07,
        0,
        0
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "robe-stitch",
      "t": "box",
      "count": 7,
      "o": [
        -0.26,
        0.58,
        0.31
      ],
      "d": [
        0.085,
        0,
        0
      ],
      "s": [
        0.04,
        0.3,
        0.023
      ],
      "c": "light",
      "f": "matte"
    }
  ]
});
}
