import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Stackable Cotton Pad Caddy. 上下层开口、纸片导向柱、底部抽取槽. Not physically print-tested. */
export const assetMeta = {
  "id": "bathroom.stackable-cotton-pad-caddy.001",
  "slug": "stackable-cotton-pad-caddy",
  "title": "Stackable Cotton Pad Caddy",
  "title_zh": "可叠放棉片整理塔",
  "summary": "Two offset open-sided dispensers and a handle loop for bathroom cotton pads",
  "category": "bathroom",
  "tags": [
    "stackable",
    "cotton",
    "pad",
    "caddy",
    "bathroom",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.19,
    0.22,
    0.17
  ],
  "generator": "createStackableCottonPadCaddy",
  "source_path": "src/models/stackable_cotton_pad_caddy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/stackable-cotton-pad-caddy.webp",
  "accent": "#d9afb6",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createStackableCottonPadCaddy() {
  return buildMarketV15({
  "title": "Stackable Cotton Pad Caddy",
  "dimensions": [
    0.19,
    0.22,
    0.17
  ],
  "accent": "#d9afb6",
  "body": [
    [
      "box",
      "lower-shell",
      [
        0,
        0.4,
        0
      ],
      [
        1.3,
        0.72,
        1.06
      ],
      "ceramic",
      "matte",
      null
    ],
    [
      "box",
      "upper-shell",
      [
        0.16,
        1.2,
        0
      ],
      [
        1.15,
        0.68,
        0.96
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "dispense-shelf",
      [
        0,
        0.12,
        0.49
      ],
      [
        1.27,
        0.16,
        0.17
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "upper-dispense-shelf",
      [
        0.16,
        0.94,
        0.45
      ],
      [
        1.1,
        0.13,
        0.15
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "top-lid",
      [
        0.16,
        1.58,
        0
      ],
      [
        1.26,
        0.08,
        1.07
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "handle",
      [
        0.16,
        1.77,
        0
      ],
      [
        0.53,
        0.1,
        0.12
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "window-slot",
      [
        0,
        0.42,
        0.56
      ],
      [
        0.76,
        0.28,
        0.032
      ],
      "dark",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "lower-side-slat",
      "t": "box",
      "count": 6,
      "o": [
        -0.63,
        0.19,
        -0.34
      ],
      "d": [
        0,
        0.13,
        0
      ],
      "s": [
        0.05,
        0.065,
        0.2
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "upper-marker",
      "t": "box",
      "count": 6,
      "o": [
        -0.25,
        1.19,
        0.48
      ],
      "d": [
        0.18,
        0,
        0
      ],
      "s": [
        0.07,
        0.09,
        0.03
      ],
      "c": "secondary",
      "f": "matte"
    }
  ]
});
}
