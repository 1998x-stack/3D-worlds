import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Folding Maker Clamp Jig. 双夹爪、丝杆螺纹、锁止轴、导轨底板. Not physically print-tested. */
export const assetMeta = {
  "id": "tools.folding-maker-clamp-jig.001",
  "slug": "folding-maker-clamp-jig",
  "title": "Folding Maker Clamp Jig",
  "title_zh": "折叠创客夹具治具",
  "summary": "Non-load-rated visual jig with parallel jaws, lead screw and pivot lugs",
  "category": "tools",
  "tags": [
    "folding",
    "maker",
    "clamp",
    "jig",
    "tools",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.25,
    0.21,
    0.19
  ],
  "generator": "createFoldingMakerClampJig",
  "source_path": "src/models/folding_maker_clamp_jig.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/folding-maker-clamp-jig.webp",
  "accent": "#c5a989",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createFoldingMakerClampJig() {
  return buildMarketV15({
  "title": "Folding Maker Clamp Jig",
  "dimensions": [
    0.25,
    0.21,
    0.19
  ],
  "accent": "#c5a989",
  "body": [
    [
      "box",
      "base",
      [
        0,
        0.14,
        0
      ],
      [
        1.94,
        0.22,
        1.25
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "rail-left",
      [
        0,
        0.4,
        -0.37
      ],
      [
        1.78,
        0.22,
        0.12
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "rail-right",
      [
        0,
        0.4,
        0.37
      ],
      [
        1.78,
        0.22,
        0.12
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "fixed-jaw",
      [
        -0.69,
        0.85,
        0
      ],
      [
        0.24,
        0.79,
        0.89
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "moving-jaw",
      [
        0.46,
        0.85,
        0
      ],
      [
        0.24,
        0.79,
        0.89
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "rod",
      "screw-shaft",
      [
        -0.72,
        0.7,
        0
      ],
      [
        0.89,
        0.7,
        0
      ],
      0.09,
      "metal"
    ],
    [
      "cylinder",
      "screw-dial",
      [
        0.9,
        0.71,
        0
      ],
      [
        0.31,
        0.29,
        0.31
      ],
      "light",
      "metal",
      [
        0,
        0,
        1.5707963267948966
      ]
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "thread-crest",
      "t": "torus",
      "count": 12,
      "o": [
        -0.54,
        0.7,
        0
      ],
      "d": [
        0.1,
        0,
        0
      ],
      "s": [
        0.18,
        0.045,
        0.18
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "jaw-pad",
      "t": "box",
      "count": 6,
      "o": [
        -0.49,
        0.58,
        -0.34
      ],
      "d": [
        0,
        0.12,
        0.13
      ],
      "s": [
        0.044,
        0.08,
        0.1
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "dial-notch",
      "t": "box",
      "count": 8,
      "o": [
        0.9,
        0.71,
        0
      ],
      "r": 0.16,
      "s": [
        0.05,
        0.1,
        0.025
      ],
      "c": "dark",
      "f": "matte"
    }
  ]
});
}
