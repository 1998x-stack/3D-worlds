import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Paint Pipette Drying Rack. 3×7孔位、前侧标识、无负重认证、清洗边界. Not physically print-tested. */
export const assetMeta = {
  "id": "print-commerce.paint-pipette-drying-rack.001",
  "slug": "paint-pipette-drying-rack",
  "title": "Paint Pipette Drying Rack",
  "title_zh": "颜料滴管整理晾置座",
  "summary": "CAD-backed paint-pipette socket rack with row labels and drainage-minded open slots",
  "category": "print-commerce",
  "tags": [
    "paint",
    "pipette",
    "drying",
    "rack",
    "print-commerce",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.132,
    0.02,
    0.086
  ],
  "generator": "createPaintPipetteDryingRack",
  "source_path": "src/models/paint_pipette_drying_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/paint-pipette-drying-rack.webp",
  "accent": "#a9c7ac",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createPaintPipetteDryingRack() {
  return buildMarketV15({
  "title": "Paint Pipette Drying Rack",
  "dimensions": [
    0.132,
    0.02,
    0.086
  ],
  "accent": "#a9c7ac",
  "body": [
    [
      "box",
      "rack-foot",
      [
        0,
        0.12,
        0
      ],
      [
        1.92,
        0.24,
        1.22
      ],
      "dark",
      "matte",
      null
    ],
    [
      "box",
      "raised-plate",
      [
        0,
        0.49,
        0
      ],
      [
        1.7,
        0.5,
        1
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "front-index-strip",
      [
        0,
        0.32,
        0.57
      ],
      [
        1.65,
        0.18,
        0.14
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "left-guard",
      [
        -0.88,
        0.64,
        0
      ],
      [
        0.11,
        0.26,
        1.08
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "right-guard",
      [
        0.88,
        0.64,
        0
      ],
      [
        0.11,
        0.26,
        1.08
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "rear-guard",
      [
        0,
        0.64,
        -0.53
      ],
      [
        1.72,
        0.26,
        0.1
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "tool-size-legend",
      [
        0,
        0.76,
        0.53
      ],
      [
        0.94,
        0.07,
        0.05
      ],
      "light",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "grid",
      "n": "well-visual",
      "t": "cylinder",
      "nx": 7,
      "nz": 3,
      "o": [
        -0.69,
        0.76,
        -0.32
      ],
      "d": [
        0.23,
        0,
        0.32
      ],
      "s": [
        0.13,
        0.04,
        0.13
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "grid",
      "n": "row-mark",
      "t": "box",
      "nx": 7,
      "nz": 3,
      "o": [
        -0.69,
        0.45,
        0.59
      ],
      "d": [
        0.23,
        0.08,
        0
      ],
      "s": [
        0.075,
        0.04,
        0.035
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "grip-dimple",
      "t": "sphere",
      "count": 8,
      "o": [
        -0.78,
        0.2,
        0.58
      ],
      "d": [
        0.22,
        0,
        0
      ],
      "s": [
        0.05,
        0.04,
        0.04
      ],
      "c": "secondary",
      "f": "matte"
    }
  ]
});
}
