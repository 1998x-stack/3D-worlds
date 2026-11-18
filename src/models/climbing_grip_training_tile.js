import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Climbing Grip Training Tile. 手点、脚点、路线色标、面板固定螺帽. Not physically print-tested. */
export const assetMeta = {
  "id": "sports.climbing-grip-training-tile.001",
  "slug": "climbing-grip-training-tile",
  "title": "Climbing Grip Training Tile",
  "title_zh": "攀岩抓点训练板",
  "summary": "Mini bouldering wall panel with handholds, footholds, mounting anchors and route markers",
  "category": "sports",
  "tags": [
    "climbing",
    "grip",
    "training",
    "tile",
    "sports",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.31,
    0.32,
    0.1
  ],
  "generator": "createClimbingGripTrainingTile",
  "source_path": "src/models/climbing_grip_training_tile.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/climbing-grip-training-tile.webp",
  "accent": "#d2a586",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createClimbingGripTrainingTile() {
  return buildMarketV15({
  "title": "Climbing Grip Training Tile",
  "dimensions": [
    0.31,
    0.32,
    0.1
  ],
  "accent": "#d2a586",
  "body": [
    [
      "box",
      "wall",
      [
        0,
        1.1,
        0
      ],
      [
        1.84,
        2.14,
        0.21
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "edge-left",
      [
        -0.93,
        1.12,
        0
      ],
      [
        0.11,
        2.22,
        0.3
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "edge-right",
      [
        0.93,
        1.12,
        0
      ],
      [
        0.11,
        2.22,
        0.3
      ],
      "metal",
      "matte",
      null
    ],
    [
      "sphere",
      "large-crimp",
      [
        -0.5,
        1.43,
        0.23
      ],
      [
        0.42,
        0.25,
        0.26
      ],
      "primary",
      "matte",
      null
    ],
    [
      "sphere",
      "sloper",
      [
        0.36,
        1.74,
        0.21
      ],
      [
        0.55,
        0.37,
        0.25
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "pinch",
      [
        0.2,
        0.83,
        0.26
      ],
      [
        0.25,
        0.48,
        0.24
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "logo-strip",
      [
        0,
        2.24,
        0.17
      ],
      [
        1.12,
        0.1,
        0.025
      ],
      "dark",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "grid",
      "n": "bolt-head",
      "t": "cylinder",
      "nx": 4,
      "nz": 4,
      "o": [
        -0.69,
        0.43,
        0.19
      ],
      "d": [
        0.43,
        0.46,
        0
      ],
      "s": [
        0.09,
        0.03,
        0.09
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "foot-hold",
      "t": "sphere",
      "count": 5,
      "o": [
        -0.68,
        0.39,
        0.22
      ],
      "d": [
        0.33,
        0.2,
        0
      ],
      "s": [
        0.14,
        0.1,
        0.15
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "route-marker",
      "t": "cylinder",
      "count": 8,
      "o": [
        -0.7,
        0.64,
        0.22
      ],
      "d": [
        0.2,
        0.18,
        0
      ],
      "s": [
        0.09,
        0.028,
        0.09
      ],
      "c": "contrast",
      "f": "matte"
    }
  ]
});
}
