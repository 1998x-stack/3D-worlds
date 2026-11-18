import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Modular Rail Desk Shelf. 双层轨道、滑动抽盒、背面理线. Not physically print-tested. */
export const assetMeta = {
  "id": "furniture.modular-rail-desk-shelf.001",
  "slug": "modular-rail-desk-shelf",
  "title": "Modular Rail Desk Shelf",
  "title_zh": "模块化轨道桌面层架",
  "summary": "Dual-tier modular desk shelf with visible sliding bin channels and cable pass-through",
  "category": "furniture",
  "tags": [
    "modular",
    "rail",
    "desk",
    "shelf",
    "furniture",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.42,
    0.22,
    0.23
  ],
  "generator": "createModularRailDeskShelf",
  "source_path": "src/models/modular_rail_desk_shelf.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/modular-rail-desk-shelf.webp",
  "accent": "#c8a984",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createModularRailDeskShelf() {
  return buildMarketV15({
  "title": "Modular Rail Desk Shelf",
  "dimensions": [
    0.42,
    0.22,
    0.23
  ],
  "accent": "#c8a984",
  "body": [
    [
      "box",
      "lower-deck",
      [
        0,
        0.13,
        0
      ],
      [
        2,
        0.16,
        1.16
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "upper-deck",
      [
        0,
        1.34,
        0
      ],
      [
        2.05,
        0.14,
        1.06
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "left-pillar",
      [
        -0.91,
        0.72,
        0
      ],
      [
        0.12,
        1.2,
        0.92
      ],
      "frame",
      "matte",
      null
    ],
    [
      "box",
      "right-pillar",
      [
        0.91,
        0.72,
        0
      ],
      [
        0.12,
        1.2,
        0.92
      ],
      "frame",
      "matte",
      null
    ],
    [
      "box",
      "rear-cable-bridge",
      [
        0,
        0.44,
        -0.49
      ],
      [
        1.66,
        0.09,
        0.08
      ],
      "frame",
      "matte",
      null
    ],
    [
      "cylinder",
      "open-pencil-cup",
      [
        -0.63,
        1.59,
        0
      ],
      [
        0.3,
        0.37,
        0.33
      ],
      "light",
      "matte",
      null
    ],
    [
      "box",
      "angled-phone-tray",
      [
        0.63,
        1.54,
        0.11
      ],
      [
        0.54,
        0.08,
        0.58
      ],
      "contrast",
      "rubber",
      [
        -0.25,
        0,
        0
      ]
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "drawer-module",
      "t": "rounded-box",
      "count": 4,
      "o": [
        -0.63,
        0.4,
        0.17
      ],
      "d": [
        0.41,
        0,
        0
      ],
      "s": [
        0.35,
        0.32,
        0.72
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "drawer-label",
      "t": "box",
      "count": 4,
      "o": [
        -0.63,
        0.39,
        0.54
      ],
      "d": [
        0.41,
        0,
        0
      ],
      "s": [
        0.23,
        0.07,
        0.024
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "rail-stop",
      "t": "box",
      "count": 6,
      "o": [
        -0.8,
        1.24,
        0.51
      ],
      "d": [
        0.32,
        0,
        0
      ],
      "s": [
        0.04,
        0.05,
        0.08
      ],
      "c": "metal",
      "f": "matte"
    }
  ]
});
}
