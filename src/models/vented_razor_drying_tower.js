import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Vented Razor Drying Tower. 纵向通风翼、滴水盆、独立刀柄槽. Not physically print-tested. */
export const assetMeta = {
  "id": "bathroom.vented-razor-drying-tower.001",
  "slug": "vented-razor-drying-tower",
  "title": "Vented Razor Drying Tower",
  "title_zh": "镂空剃须刀晾置塔",
  "summary": "Slatted bath-side drying tower with drip basin and tool cradle",
  "category": "bathroom",
  "tags": [
    "vented",
    "razor",
    "drying",
    "tower",
    "bathroom",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.16,
    0.27,
    0.15
  ],
  "generator": "createVentedRazorDryingTower",
  "source_path": "src/models/vented_razor_drying_tower.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/vented-razor-drying-tower.webp",
  "accent": "#7ac8bd",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createVentedRazorDryingTower() {
  return buildMarketV15({
  "title": "Vented Razor Drying Tower",
  "dimensions": [
    0.16,
    0.27,
    0.15
  ],
  "accent": "#7ac8bd",
  "body": [
    [
      "box",
      "catch-tray",
      [
        0,
        0.1,
        0
      ],
      [
        1.28,
        0.18,
        1.1
      ],
      "ceramic",
      "matte",
      null
    ],
    [
      "cylinder",
      "central-stem",
      [
        0,
        0.92,
        0
      ],
      [
        0.24,
        1.47,
        0.25
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "head-cradle",
      [
        0,
        1.66,
        0.08
      ],
      [
        0.8,
        0.22,
        0.58
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "drain-gutter",
      [
        0,
        0.24,
        0.4
      ],
      [
        0.95,
        0.04,
        0.16
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "rear-support",
      [
        0,
        0.91,
        -0.4
      ],
      [
        0.16,
        1.32,
        0.15
      ],
      "frame",
      "matte",
      null
    ],
    [
      "box",
      "base-rim",
      [
        0,
        0.05,
        0
      ],
      [
        1.38,
        0.08,
        1.22
      ],
      "metal",
      "matte",
      null
    ],
    [
      "rounded-box",
      "tool-rest",
      [
        0,
        1.81,
        0.12
      ],
      [
        0.3,
        0.07,
        0.48
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "airflow-fin",
      "t": "box",
      "count": 12,
      "o": [
        0,
        0.9,
        0
      ],
      "r": 0.43,
      "s": [
        0.07,
        1.1,
        0.1
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "tray-channel",
      "t": "box",
      "count": 5,
      "o": [
        -0.41,
        0.2,
        0.18
      ],
      "d": [
        0.2,
        0,
        0
      ],
      "s": [
        0.08,
        0.028,
        0.75
      ],
      "c": "secondary",
      "f": "matte"
    }
  ]
});
}
