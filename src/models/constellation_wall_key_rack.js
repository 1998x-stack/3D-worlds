import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Constellation Wall Key Rack. 星图点线、挂钩列、悬挂定位孔. Not physically print-tested. */
export const assetMeta = {
  "id": "decor.constellation-wall-key-rack.001",
  "slug": "constellation-wall-key-rack",
  "title": "Constellation Wall Key Rack",
  "title_zh": "星图式墙挂钥匙架",
  "summary": "Night-sky board with branching constellation hooks and numbered entry badges",
  "category": "decor",
  "tags": [
    "constellation",
    "wall",
    "key",
    "rack",
    "decor",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.32,
    0.18,
    0.08
  ],
  "generator": "createConstellationWallKeyRack",
  "source_path": "src/models/constellation_wall_key_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/constellation-wall-key-rack.webp",
  "accent": "#7db2bf",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createConstellationWallKeyRack() {
  return buildMarketV15({
  "title": "Constellation Wall Key Rack",
  "dimensions": [
    0.32,
    0.18,
    0.08
  ],
  "accent": "#7db2bf",
  "body": [
    [
      "box",
      "mount-board",
      [
        0,
        0.75,
        0
      ],
      [
        2.1,
        1.34,
        0.22
      ],
      "frame",
      "matte",
      null
    ],
    [
      "box",
      "top-rail",
      [
        0,
        1.44,
        0.06
      ],
      [
        2.05,
        0.11,
        0.28
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "bottom-rail",
      [
        0,
        0.08,
        0.05
      ],
      [
        2.04,
        0.16,
        0.29
      ],
      "primary",
      "matte",
      null
    ],
    [
      "cylinder",
      "moon-disc",
      [
        -0.74,
        1.12,
        0.16
      ],
      [
        0.33,
        0.33,
        0.11
      ],
      "light",
      "matte",
      null
    ],
    [
      "rod",
      "orion-link-a",
      [
        -0.4,
        1.05,
        0.18
      ],
      [
        0.12,
        1.25,
        0.18
      ],
      0.025,
      "secondary"
    ],
    [
      "rod",
      "orion-link-b",
      [
        0.12,
        1.25,
        0.18
      ],
      [
        0.51,
        0.94,
        0.18
      ],
      0.025,
      "secondary"
    ],
    [
      "box",
      "label-plate",
      [
        0.72,
        1.3,
        0.19
      ],
      [
        0.48,
        0.15,
        0.05
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "hook",
      "t": "rod",
      "count": 5,
      "o": [
        -0.8,
        0.31,
        0.24
      ],
      "d": [
        0.39,
        0,
        0
      ],
      "s": [
        0.11,
        0.31,
        0.08
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "star-point",
      "t": "sphere",
      "count": 9,
      "o": [
        -0.08,
        1.06,
        0.18
      ],
      "r": 0.65,
      "s": [
        0.075,
        0.07,
        0.06
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "mount-screw",
      "t": "cylinder",
      "count": 4,
      "o": [
        -0.92,
        0.09,
        0.18
      ],
      "d": [
        0.62,
        0,
        0
      ],
      "s": [
        0.09,
        0.045,
        0.09
      ],
      "c": "metal",
      "f": "matte"
    }
  ]
});
}
