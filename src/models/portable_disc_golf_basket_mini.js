import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Portable Disc Golf Basket Mini. 立柱、篮圈、链条挂点、编号牌. Not physically print-tested. */
export const assetMeta = {
  "id": "sports.portable-disc-golf-basket-mini.001",
  "slug": "portable-disc-golf-basket-mini",
  "title": "Portable Disc Golf Basket Mini",
  "title_zh": "便携飞盘高尔夫球篮模型",
  "summary": "Decorative practice basket scale model with radial chain proxy and number plate",
  "category": "sports",
  "tags": [
    "portable",
    "disc",
    "golf",
    "basket",
    "mini",
    "sports",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.24,
    0.32,
    0.24
  ],
  "generator": "createPortableDiscGolfBasketMini",
  "source_path": "src/models/portable_disc_golf_basket_mini.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/portable-disc-golf-basket-mini.webp",
  "accent": "#e4b960",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createPortableDiscGolfBasketMini() {
  return buildMarketV15({
  "title": "Portable Disc Golf Basket Mini",
  "dimensions": [
    0.24,
    0.32,
    0.24
  ],
  "accent": "#e4b960",
  "body": [
    [
      "cylinder",
      "ground",
      [
        0,
        0.08,
        0
      ],
      [
        1.24,
        0.16,
        1.24
      ],
      "stone",
      "matte",
      null
    ],
    [
      "cylinder",
      "pole",
      [
        0,
        1.18,
        0
      ],
      [
        0.13,
        2,
        0.13
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "upper-disc",
      [
        0,
        2.15,
        0
      ],
      [
        1.18,
        0.11,
        1.18
      ],
      "primary",
      "matte",
      null
    ],
    [
      "cylinder",
      "lower-basket",
      [
        0,
        1.13,
        0
      ],
      [
        0.96,
        0.23,
        0.96
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "torus",
      "basket-rim",
      [
        0,
        1.33,
        0
      ],
      [
        1.08,
        0.11,
        1.08
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "number-plate",
      [
        0,
        2.46,
        0
      ],
      [
        0.46,
        0.32,
        0.08
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "cylinder",
      "bottom-hub",
      [
        0,
        0.34,
        0
      ],
      [
        0.43,
        0.14,
        0.43
      ],
      "dark",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "chain-strand",
      "t": "rod",
      "count": 16,
      "o": [
        0,
        1.78,
        0
      ],
      "r": 0.48,
      "s": [
        0.045,
        0.78,
        0.04
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "basket-wire",
      "t": "rod",
      "count": 12,
      "o": [
        0,
        1.24,
        0
      ],
      "r": 0.42,
      "s": [
        0.04,
        0.28,
        0.045
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "plate-stamp",
      "t": "box",
      "count": 6,
      "o": [
        -0.18,
        2.48,
        0.065
      ],
      "d": [
        0.075,
        0,
        0
      ],
      "s": [
        0.045,
        0.12,
        0.022
      ],
      "c": "light",
      "f": "matte"
    }
  ]
});
}
