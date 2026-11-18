import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Parametric Stair Landing Bay. 踏步阵列、扶手、踢面和平台对接梁. Not physically print-tested. */
export const assetMeta = {
  "id": "architecture.parametric-stair-landing-bay.001",
  "slug": "parametric-stair-landing-bay",
  "title": "Parametric Stair Landing Bay",
  "title_zh": "参数化楼梯平台舱段",
  "summary": "Architectural stair module with stepped treads, balustrades and landing edge",
  "category": "architecture",
  "tags": [
    "parametric",
    "stair",
    "landing",
    "bay",
    "architecture",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.38,
    0.32,
    0.26
  ],
  "generator": "createParametricStairLandingBay",
  "source_path": "src/models/parametric_stair_landing_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/parametric-stair-landing-bay.webp",
  "accent": "#b5b5b0",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createParametricStairLandingBay() {
  return buildMarketV15({
  "title": "Parametric Stair Landing Bay",
  "dimensions": [
    0.38,
    0.32,
    0.26
  ],
  "accent": "#b5b5b0",
  "body": [
    [
      "box",
      "base",
      [
        0,
        0.06,
        0
      ],
      [
        2.08,
        0.13,
        1.34
      ],
      "stone",
      "matte",
      null
    ],
    [
      "box",
      "landing",
      [
        0.62,
        1.64,
        0
      ],
      [
        0.76,
        0.16,
        1.22
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "left-stringer",
      [
        0,
        0.86,
        -0.52
      ],
      [
        1.67,
        0.18,
        0.1
      ],
      "metal",
      "metal",
      [
        0,
        0,
        -0.55
      ]
    ],
    [
      "box",
      "right-stringer",
      [
        0,
        0.86,
        0.52
      ],
      [
        1.67,
        0.18,
        0.1
      ],
      "metal",
      "metal",
      [
        0,
        0,
        -0.55
      ]
    ],
    [
      "box",
      "landing-rail",
      [
        0.75,
        2.24,
        -0.54
      ],
      [
        0.07,
        1.03,
        0.07
      ],
      "frame",
      "matte",
      null
    ],
    [
      "box",
      "top-rail",
      [
        0.15,
        2.52,
        -0.54
      ],
      [
        1.22,
        0.08,
        0.09
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "front-foot",
      [
        -0.86,
        0.25,
        0
      ],
      [
        0.23,
        0.42,
        1.12
      ],
      "secondary",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "tread",
      "t": "box",
      "count": 8,
      "o": [
        -0.76,
        0.27,
        0
      ],
      "d": [
        0.22,
        0.19,
        0
      ],
      "s": [
        0.34,
        0.11,
        1.05
      ],
      "c": "wood",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "riser-accent",
      "t": "box",
      "count": 8,
      "o": [
        -0.76,
        0.2,
        0.54
      ],
      "d": [
        0.22,
        0.19,
        0
      ],
      "s": [
        0.31,
        0.11,
        0.025
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "baluster",
      "t": "box",
      "count": 7,
      "o": [
        -0.67,
        0.54,
        -0.58
      ],
      "d": [
        0.23,
        0.21,
        0
      ],
      "s": [
        0.07,
        0.64,
        0.06
      ],
      "c": "frame",
      "f": "matte"
    }
  ]
});
}
