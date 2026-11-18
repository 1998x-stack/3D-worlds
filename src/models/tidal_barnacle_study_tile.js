import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Tidal Barnacle Study Tile. 岩池、藤壶孔缘、海藻脊纹、海星. Not physically print-tested. */
export const assetMeta = {
  "id": "nature.tidal-barnacle-study-tile.001",
  "slug": "tidal-barnacle-study-tile",
  "title": "Tidal Barnacle Study Tile",
  "title_zh": "潮间带藤壶观察板",
  "summary": "Rock pool specimen tile with starfish spokes, barnacle ring and algae bands",
  "category": "nature",
  "tags": [
    "tidal",
    "barnacle",
    "study",
    "tile",
    "nature",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.35,
    0.13,
    0.25
  ],
  "generator": "createTidalBarnacleStudyTile",
  "source_path": "src/models/tidal_barnacle_study_tile.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/tidal-barnacle-study-tile.webp",
  "accent": "#80b1c8",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createTidalBarnacleStudyTile() {
  return buildMarketV15({
  "title": "Tidal Barnacle Study Tile",
  "dimensions": [
    0.35,
    0.13,
    0.25
  ],
  "accent": "#80b1c8",
  "body": [
    [
      "box",
      "rock-bed",
      [
        0,
        0.09,
        0
      ],
      [
        1.95,
        0.16,
        1.42
      ],
      "stone",
      "matte",
      null
    ],
    [
      "cylinder",
      "pool-water",
      [
        0,
        0.19,
        0
      ],
      [
        1.38,
        0.06,
        0.92
      ],
      "light",
      "glass",
      null
    ],
    [
      "box",
      "north-rock",
      [
        0,
        0.28,
        -0.54
      ],
      [
        1.75,
        0.19,
        0.3
      ],
      "stone",
      "matte",
      null
    ],
    [
      "box",
      "south-rock",
      [
        0,
        0.22,
        0.52
      ],
      [
        1.7,
        0.2,
        0.21
      ],
      "stone",
      "matte",
      null
    ],
    [
      "cone",
      "west-shell",
      [
        -0.65,
        0.36,
        -0.12
      ],
      [
        0.3,
        0.28,
        0.25
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "sphere",
      "east-shell",
      [
        0.7,
        0.3,
        0.11
      ],
      [
        0.22,
        0.19,
        0.24
      ],
      "primary",
      "matte",
      null
    ],
    [
      "sphere",
      "star-core",
      [
        0.1,
        0.27,
        0.08
      ],
      [
        0.21,
        0.09,
        0.21
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "starfish-ray",
      "t": "cone",
      "count": 5,
      "o": [
        0.1,
        0.27,
        0.08
      ],
      "r": 0.22,
      "s": [
        0.11,
        0.26,
        0.08
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "barnacle-rim",
      "t": "torus",
      "count": 12,
      "o": [
        -0.5,
        0.31,
        0.15
      ],
      "r": 0.23,
      "s": [
        0.22,
        0.06,
        0.22
      ],
      "c": "primary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "algae-ribbon",
      "t": "box",
      "count": 9,
      "o": [
        -0.78,
        0.3,
        -0.44
      ],
      "d": [
        0.2,
        0,
        0
      ],
      "s": [
        0.09,
        0.06,
        0.24
      ],
      "c": "secondary",
      "f": "matte"
    }
  ]
});
}
