import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Miniature Cartographer Bot. 地图卷筒、测距头、膝轴、背部工具背包. Not physically print-tested. */
export const assetMeta = {
  "id": "characters.miniature-cartographer-bot.001",
  "slug": "miniature-cartographer-bot",
  "title": "Miniature Cartographer Bot",
  "title_zh": "微型测绘机器人",
  "summary": "Original explorer robot with rolled map drum, articulated legs and illuminated field display",
  "category": "characters",
  "tags": [
    "miniature",
    "cartographer",
    "bot",
    "characters",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.18,
    0.27,
    0.16
  ],
  "generator": "createMiniatureCartographerBot",
  "source_path": "src/models/miniature_cartographer_bot.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/miniature-cartographer-bot.webp",
  "accent": "#81c7dc",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createMiniatureCartographerBot() {
  return buildMarketV15({
  "title": "Miniature Cartographer Bot",
  "dimensions": [
    0.18,
    0.27,
    0.16
  ],
  "accent": "#81c7dc",
  "body": [
    [
      "rounded-box",
      "body",
      [
        0,
        0.91,
        0
      ],
      [
        0.8,
        0.75,
        0.55
      ],
      "primary",
      "matte",
      null
    ],
    [
      "rounded-box",
      "head",
      [
        0,
        1.58,
        0.06
      ],
      [
        0.68,
        0.49,
        0.54
      ],
      "light",
      "matte",
      null
    ],
    [
      "box",
      "map-screen",
      [
        0,
        0.91,
        0.3
      ],
      [
        0.6,
        0.36,
        0.045
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "backpack",
      [
        0,
        0.9,
        -0.38
      ],
      [
        0.52,
        0.61,
        0.25
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "left-leg",
      [
        -0.3,
        0.38,
        0
      ],
      [
        0.18,
        0.7,
        0.22
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "right-leg",
      [
        0.3,
        0.38,
        0
      ],
      [
        0.18,
        0.7,
        0.22
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "map-roll",
      [
        0,
        1.28,
        0.39
      ],
      [
        0.65,
        0.15,
        0.16
      ],
      "wood",
      "wood",
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
      "n": "chest-grid",
      "t": "box",
      "count": 5,
      "o": [
        -0.21,
        0.91,
        0.34
      ],
      "d": [
        0.105,
        0,
        0
      ],
      "s": [
        0.035,
        0.17,
        0.02
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "tool-fastener",
      "t": "cylinder",
      "count": 8,
      "o": [
        -0.42,
        0.57,
        0.21
      ],
      "d": [
        0.12,
        0,
        0
      ],
      "s": [
        0.1,
        0.05,
        0.1
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "sensor-ring",
      "t": "sphere",
      "count": 8,
      "o": [
        0,
        1.84,
        0.02
      ],
      "r": 0.25,
      "s": [
        0.055,
        0.06,
        0.055
      ],
      "c": "contrast",
      "f": "matte"
    }
  ]
});
}
