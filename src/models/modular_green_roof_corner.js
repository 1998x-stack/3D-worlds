import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Modular Green Roof Corner. 梁柱、集雨槽、绿色屋顶、排水口. Not physically print-tested. */
export const assetMeta = {
  "id": "architecture.modular-green-roof-corner.001",
  "slug": "modular-green-roof-corner",
  "title": "Modular Green Roof Corner",
  "title_zh": "模块化绿化屋顶转角",
  "summary": "Corner architectural section showing recycled rainwater channels and planted roof cassettes",
  "category": "architecture",
  "tags": [
    "modular",
    "green",
    "roof",
    "corner",
    "architecture",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.36,
    0.25,
    0.32
  ],
  "generator": "createModularGreenRoofCorner",
  "source_path": "src/models/modular_green_roof_corner.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/modular-green-roof-corner.webp",
  "accent": "#8ab78b",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createModularGreenRoofCorner() {
  return buildMarketV15({
  "title": "Modular Green Roof Corner",
  "dimensions": [
    0.36,
    0.25,
    0.32
  ],
  "accent": "#8ab78b",
  "body": [
    [
      "box",
      "foundation",
      [
        0,
        0.08,
        0
      ],
      [
        2,
        0.16,
        1.72
      ],
      "stone",
      "matte",
      null
    ],
    [
      "box",
      "left-wall",
      [
        -0.85,
        0.73,
        0
      ],
      [
        0.18,
        1.36,
        1.5
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "rear-wall",
      [
        0,
        0.73,
        -0.65
      ],
      [
        1.8,
        1.36,
        0.16
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "roof-beam",
      [
        0,
        1.49,
        0
      ],
      [
        1.95,
        0.19,
        1.61
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "roof-soil",
      [
        0,
        1.64,
        0
      ],
      [
        1.71,
        0.13,
        1.38
      ],
      "dark",
      "matte",
      null
    ],
    [
      "box",
      "drain-corner",
      [
        0.91,
        0.88,
        0.73
      ],
      [
        0.15,
        1.47,
        0.14
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "roof-lip",
      [
        0,
        1.76,
        0.76
      ],
      [
        1.95,
        0.12,
        0.09
      ],
      "secondary",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "grid",
      "n": "roof-seed-cell",
      "t": "box",
      "nx": 5,
      "nz": 4,
      "o": [
        -0.7,
        1.74,
        -0.55
      ],
      "d": [
        0.35,
        0,
        0.34
      ],
      "s": [
        0.24,
        0.12,
        0.22
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "rain-channel",
      "t": "box",
      "count": 7,
      "o": [
        -0.79,
        1.57,
        0.72
      ],
      "d": [
        0.26,
        0,
        0
      ],
      "s": [
        0.1,
        0.05,
        0.12
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "facade-batten",
      "t": "box",
      "count": 6,
      "o": [
        -0.77,
        0.24,
        0.76
      ],
      "d": [
        0.27,
        0,
        0
      ],
      "s": [
        0.06,
        0.95,
        0.05
      ],
      "c": "primary",
      "f": "matte"
    }
  ]
});
}
