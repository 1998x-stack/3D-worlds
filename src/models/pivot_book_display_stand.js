import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Pivot Book Display Stand. 倾斜书托、书页挡边、双侧轴套. Not physically print-tested. */
export const assetMeta = {
  "id": "furniture.pivot-book-display-stand.001",
  "slug": "pivot-book-display-stand",
  "title": "Pivot Book Display Stand",
  "title_zh": "可旋转书本陈列支架",
  "summary": "Angled manuscript book stand with twin pivot supports and elastic-looking page guards",
  "category": "furniture",
  "tags": [
    "pivot",
    "book",
    "display",
    "stand",
    "furniture",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.3,
    0.25,
    0.23
  ],
  "generator": "createPivotBookDisplayStand",
  "source_path": "src/models/pivot_book_display_stand.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/pivot-book-display-stand.webp",
  "accent": "#b0a6df",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createPivotBookDisplayStand() {
  return buildMarketV15({
  "title": "Pivot Book Display Stand",
  "dimensions": [
    0.3,
    0.25,
    0.23
  ],
  "accent": "#b0a6df",
  "body": [
    [
      "box",
      "plinth",
      [
        0,
        0.1,
        0
      ],
      [
        1.78,
        0.16,
        1.28
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "inclined-leaf",
      [
        0,
        1.04,
        -0.05
      ],
      [
        1.55,
        1.55,
        0.08
      ],
      "primary",
      "wood",
      [
        -0.45,
        0,
        0
      ]
    ],
    [
      "box",
      "lower-page-ledge",
      [
        0,
        0.43,
        0.49
      ],
      [
        1.72,
        0.14,
        0.17
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "cylinder",
      "left-hinge",
      [
        -0.76,
        0.6,
        -0.22
      ],
      [
        0.22,
        0.2,
        0.2
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "right-hinge",
      [
        0.76,
        0.6,
        -0.22
      ],
      [
        0.22,
        0.2,
        0.2
      ],
      "metal",
      "matte",
      null
    ],
    [
      "rod",
      "stand-foot-left",
      [
        -0.68,
        0.22,
        -0.41
      ],
      [
        -0.68,
        1.28,
        -0.25
      ],
      0.045,
      "frame"
    ],
    [
      "rod",
      "stand-foot-right",
      [
        0.68,
        0.22,
        -0.41
      ],
      [
        0.68,
        1.28,
        -0.25
      ],
      0.045,
      "frame"
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "backboard-groove",
      "t": "box",
      "count": 7,
      "o": [
        -0.55,
        1.05,
        0.03
      ],
      "d": [
        0.18,
        0,
        0
      ],
      "s": [
        0.027,
        1.1,
        0.024
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "page-retention-hook",
      "t": "sphere",
      "count": 4,
      "o": [
        -0.66,
        0.51,
        0.54
      ],
      "d": [
        0.44,
        0,
        0
      ],
      "s": [
        0.065,
        0.07,
        0.065
      ],
      "c": "metal",
      "f": "matte"
    }
  ]
});
}
