import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Moss Terrace Rock Garden. 三级地形、页岩断层、苔藓簇和蘑菇. Not physically print-tested. */
export const assetMeta = {
  "id": "nature.moss-terrace-rock-garden.001",
  "slug": "moss-terrace-rock-garden",
  "title": "Moss Terrace Rock Garden",
  "title_zh": "苔藓台地石景",
  "summary": "Layered mossland sample terrain with stepped shale, stone boulders and tiny fungi",
  "category": "nature",
  "tags": [
    "moss",
    "terrace",
    "rock",
    "garden",
    "nature",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.37,
    0.16,
    0.27
  ],
  "generator": "createMossTerraceRockGarden",
  "source_path": "src/models/moss_terrace_rock_garden.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/moss-terrace-rock-garden.webp",
  "accent": "#86bb91",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createMossTerraceRockGarden() {
  return buildMarketV15({
  "title": "Moss Terrace Rock Garden",
  "dimensions": [
    0.37,
    0.16,
    0.27
  ],
  "accent": "#86bb91",
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
        2.1,
        0.12,
        1.5
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "low-terrace",
      [
        -0.38,
        0.19,
        0.02
      ],
      [
        1.38,
        0.18,
        1.06
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "middle-terrace",
      [
        -0.18,
        0.36,
        -0.08
      ],
      [
        1.08,
        0.2,
        0.78
      ],
      "primary",
      "matte",
      null
    ],
    [
      "sphere",
      "summit-rock",
      [
        0.26,
        0.53,
        -0.21
      ],
      [
        0.47,
        0.38,
        0.42
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "sphere",
      "stone-west",
      [
        -0.77,
        0.3,
        -0.33
      ],
      [
        0.37,
        0.3,
        0.29
      ],
      "stone",
      "matte",
      null
    ],
    [
      "sphere",
      "stone-east",
      [
        0.68,
        0.2,
        0.31
      ],
      [
        0.3,
        0.26,
        0.23
      ],
      "stone",
      "matte",
      null
    ],
    [
      "box",
      "stream-path",
      [
        0.1,
        0.15,
        0.56
      ],
      [
        1.22,
        0.022,
        0.1
      ],
      "light",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "grid",
      "n": "moss-cushion",
      "t": "sphere",
      "nx": 5,
      "nz": 3,
      "o": [
        -0.82,
        0.28,
        -0.45
      ],
      "d": [
        0.36,
        0,
        0.4
      ],
      "s": [
        0.1,
        0.06,
        0.09
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "fungus-cap",
      "t": "cone",
      "count": 7,
      "o": [
        0.31,
        0.43,
        0.18
      ],
      "r": 0.33,
      "s": [
        0.11,
        0.16,
        0.11
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "strata-seam",
      "t": "box",
      "count": 6,
      "o": [
        -0.86,
        0.24,
        0.5
      ],
      "d": [
        0.28,
        0,
        0
      ],
      "s": [
        0.15,
        0.025,
        0.04
      ],
      "c": "stone",
      "f": "matte"
    }
  ]
});
}
