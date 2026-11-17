import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Reinforced Soil Retaining Wall / 加筋土挡墙模块. */
export const assetMeta = {
  "id": "architecture.reinforced-soil-retaining-wall.001",
  "slug": "reinforced-soil-retaining-wall",
  "title": "Reinforced Soil Retaining Wall",
  "title_zh": "加筋土挡墙模块",
  "summary": "Civil engineering earth-retaining wall segment with drainage outlets and soil layers",
  "category": "architecture",
  "tags": [
    "reinforced",
    "soil",
    "retaining",
    "wall",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.55,
    2.85,
    1.7
  ],
  "generator": "createReinforcedSoilRetainingWall",
  "source_path": "src/models/reinforced_soil_retaining_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/reinforced-soil-retaining-wall.webp",
  "accent": "#9bc5c6"
};
export function createReinforcedSoilRetainingWall() { return buildRecipe({
  "title": "Reinforced Soil Retaining Wall",
  "dimensions": [
    3.55,
    2.85,
    1.7
  ],
  "parts": [
    {
      "t": "box",
      "n": "reinforced-earth-block-face",
      "p": [
        0,
        1.32,
        -0.33
      ],
      "s": [
        3.23,
        2.47,
        0.63
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-0",
      "p": [
        -1.42,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-1",
      "p": [
        -1.02,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-2",
      "p": [
        -0.6199999999999999,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-3",
      "p": [
        -0.21999999999999975,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-4",
      "p": [
        0.18000000000000016,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-5",
      "p": [
        0.5800000000000001,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-6",
      "p": [
        0.9800000000000004,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-0-7",
      "p": [
        1.3800000000000003,
        0.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-0",
      "p": [
        -1.42,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-1",
      "p": [
        -1.02,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-2",
      "p": [
        -0.6199999999999999,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-3",
      "p": [
        -0.21999999999999975,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-4",
      "p": [
        0.18000000000000016,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-5",
      "p": [
        0.5800000000000001,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-6",
      "p": [
        0.9800000000000004,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-1-7",
      "p": [
        1.3800000000000003,
        0.64,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-0",
      "p": [
        -1.42,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-1",
      "p": [
        -1.02,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-2",
      "p": [
        -0.6199999999999999,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-3",
      "p": [
        -0.21999999999999975,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-4",
      "p": [
        0.18000000000000016,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-5",
      "p": [
        0.5800000000000001,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-6",
      "p": [
        0.9800000000000004,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-2-7",
      "p": [
        1.3800000000000003,
        1.04,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-0",
      "p": [
        -1.42,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-1",
      "p": [
        -1.02,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-2",
      "p": [
        -0.6199999999999999,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-3",
      "p": [
        -0.21999999999999975,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-4",
      "p": [
        0.18000000000000016,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-5",
      "p": [
        0.5800000000000001,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-6",
      "p": [
        0.9800000000000004,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-3-7",
      "p": [
        1.3800000000000003,
        1.4400000000000002,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-0",
      "p": [
        -1.42,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-1",
      "p": [
        -1.02,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-2",
      "p": [
        -0.6199999999999999,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-3",
      "p": [
        -0.21999999999999975,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-4",
      "p": [
        0.18000000000000016,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-5",
      "p": [
        0.5800000000000001,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-6",
      "p": [
        0.9800000000000004,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-4-7",
      "p": [
        1.3800000000000003,
        1.84,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-0",
      "p": [
        -1.42,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-1",
      "p": [
        -1.02,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-2",
      "p": [
        -0.6199999999999999,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-3",
      "p": [
        -0.21999999999999975,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-4",
      "p": [
        0.18000000000000016,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-5",
      "p": [
        0.5800000000000001,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-6",
      "p": [
        0.9800000000000004,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "retaining-wall-facing-block-5-7",
      "p": [
        1.3800000000000003,
        2.24,
        0.05
      ],
      "s": [
        0.38,
        0.36,
        0.15
      ],
      "c": 7233104
    },
    {
      "t": "box",
      "n": "internal-geogrid-tie-0",
      "p": [
        -1.21,
        0.54,
        -0.7
      ],
      "s": [
        0.18,
        0.033,
        1.27
      ],
      "c": 6059910
    },
    {
      "t": "box",
      "n": "internal-geogrid-tie-1",
      "p": [
        -0.73,
        0.54,
        -0.7
      ],
      "s": [
        0.18,
        0.033,
        1.27
      ],
      "c": 6059910
    },
    {
      "t": "box",
      "n": "internal-geogrid-tie-2",
      "p": [
        -0.25,
        0.54,
        -0.7
      ],
      "s": [
        0.18,
        0.033,
        1.27
      ],
      "c": 6059910
    },
    {
      "t": "box",
      "n": "internal-geogrid-tie-3",
      "p": [
        0.22999999999999998,
        0.54,
        -0.7
      ],
      "s": [
        0.18,
        0.033,
        1.27
      ],
      "c": 6059910
    },
    {
      "t": "box",
      "n": "internal-geogrid-tie-4",
      "p": [
        0.71,
        0.54,
        -0.7
      ],
      "s": [
        0.18,
        0.033,
        1.27
      ],
      "c": 6059910
    },
    {
      "t": "box",
      "n": "internal-geogrid-tie-5",
      "p": [
        1.19,
        0.54,
        -0.7
      ],
      "s": [
        0.18,
        0.033,
        1.27
      ],
      "c": 6059910
    },
    {
      "t": "cylinder",
      "n": "drainage-weep-hole-0",
      "p": [
        -1.2,
        0.38,
        0.15
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 10208710,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "drainage-weep-hole-1",
      "p": [
        -0.6,
        0.38,
        0.15
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 10208710,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "drainage-weep-hole-2",
      "p": [
        0,
        0.38,
        0.15
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 10208710,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "drainage-weep-hole-3",
      "p": [
        0.5999999999999999,
        0.38,
        0.15
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 10208710,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "drainage-weep-hole-4",
      "p": [
        1.2,
        0.38,
        0.15
      ],
      "s": [
        0.13,
        0.09,
        0.13
      ],
      "c": 10208710,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "wall-granular-backfill",
      "p": [
        0,
        0.6,
        -0.95
      ],
      "s": [
        3.12,
        1.12,
        0.65
      ],
      "c": 6059910
    }
  ]
}); }
