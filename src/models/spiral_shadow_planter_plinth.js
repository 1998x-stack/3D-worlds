import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Spiral Shadow Planter Plinth. 环形灯影格栅、悬浮盆托、螺旋叶瓣. Not physically print-tested. */
export const assetMeta = {
  "id": "decor.spiral-shadow-planter-plinth.001",
  "slug": "spiral-shadow-planter-plinth",
  "title": "Spiral Shadow Planter Plinth",
  "title_zh": "螺旋投影花盆底座",
  "summary": "Botanical display pedestal with helical open ribs and a floating-look pot bowl",
  "category": "decor",
  "tags": [
    "spiral",
    "shadow",
    "planter",
    "plinth",
    "decor",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.24,
    0.28,
    0.24
  ],
  "generator": "createSpiralShadowPlanterPlinth",
  "source_path": "src/models/spiral_shadow_planter_plinth.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/spiral-shadow-planter-plinth.webp",
  "accent": "#b18cc0",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createSpiralShadowPlanterPlinth() {
  return buildMarketV15({
  "title": "Spiral Shadow Planter Plinth",
  "dimensions": [
    0.24,
    0.28,
    0.24
  ],
  "accent": "#b18cc0",
  "body": [
    [
      "cylinder",
      "base",
      [
        0,
        0.08,
        0
      ],
      [
        1.45,
        0.16,
        1.45
      ],
      "wood",
      "matte",
      null
    ],
    [
      "cylinder",
      "pot",
      [
        0,
        1.42,
        0
      ],
      [
        1.03,
        0.78,
        1.03
      ],
      "primary",
      "ceramic",
      null
    ],
    [
      "torus",
      "pot-rim",
      [
        0,
        1.84,
        0
      ],
      [
        1.2,
        0.12,
        1.2
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "torus",
      "lower-ring",
      [
        0,
        0.25,
        0
      ],
      [
        1.3,
        0.12,
        1.3
      ],
      "metal",
      "matte",
      null
    ],
    [
      "torus",
      "upper-ring",
      [
        0,
        1.1,
        0
      ],
      [
        1.14,
        0.1,
        1.14
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "soil",
      [
        0,
        1.84,
        0
      ],
      [
        0.88,
        0.07,
        0.88
      ],
      "dark",
      "matte",
      null
    ],
    [
      "cone",
      "leaf-sprout",
      [
        0,
        2.13,
        0
      ],
      [
        0.27,
        0.53,
        0.25
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "spiral-upright",
      "t": "rod",
      "count": 14,
      "o": [
        0,
        0.68,
        0
      ],
      "r": 0.59,
      "s": [
        0.08,
        0.96,
        0.08
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "petal",
      "t": "cone",
      "count": 9,
      "o": [
        0,
        2.1,
        0
      ],
      "r": 0.33,
      "s": [
        0.18,
        0.36,
        0.15
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "basin-emboss",
      "t": "box",
      "count": 7,
      "o": [
        -0.54,
        1.49,
        0.53
      ],
      "d": [
        0.18,
        0,
        0
      ],
      "s": [
        0.08,
        0.35,
        0.04
      ],
      "c": "contrast",
      "f": "matte"
    }
  ]
});
}
