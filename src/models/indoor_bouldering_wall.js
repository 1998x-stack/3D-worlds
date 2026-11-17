import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "sports.indoor-bouldering-wall.001",
  "slug": "indoor-bouldering-wall",
  "title": "Indoor Bouldering Wall",
  "title_zh": "室内抱石攀岩墙",
  "summary": "Overhanging bouldering wall with color-coded holds, crash mat and support frames",
  "category": "sports",
  "tags": [
    "climbing",
    "bouldering",
    "sport"
  ],
  "dimensions_m": [
    2.73,
    3.07,
    0.95
  ],
  "generator": "createIndoorBoulderingWall",
  "source_path": "src/models/indoor_bouldering_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/indoor-bouldering-wall.webp"
};
export function createIndoorBoulderingWall() { return buildRecipe({
  "title": "Indoor Bouldering Wall",
  "dimensions": [
    2.73,
    3.07,
    0.95
  ],
  "parts": [
    {
      "t": "box",
      "n": "climbing-board",
      "p": [
        0,
        1.55,
        -0.19
      ],
      "s": [
        2.72,
        3,
        0.16
      ],
      "c": 12492668,
      "rot": [
        -0.11,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "crash-pad",
      "p": [
        0,
        0.14,
        0.37
      ],
      "s": [
        2.67,
        0.28,
        0.7
      ],
      "c": 5405831
    },
    {
      "t": "sphere",
      "n": "climbing-hold-0",
      "p": [
        -1.04,
        0.5,
        -0.06
      ],
      "s": [
        0.09,
        0.08,
        0.08
      ],
      "c": 13207661
    },
    {
      "t": "sphere",
      "n": "climbing-hold-1",
      "p": [
        -0.52,
        0.5,
        -0.06
      ],
      "s": [
        0.12,
        0.1,
        0.08
      ],
      "c": 13207661
    },
    {
      "t": "sphere",
      "n": "climbing-hold-2",
      "p": [
        0,
        0.5,
        -0.06
      ],
      "s": [
        0.15,
        0.08,
        0.08
      ],
      "c": 13207661
    },
    {
      "t": "sphere",
      "n": "climbing-hold-3",
      "p": [
        0.52,
        0.5,
        -0.06
      ],
      "s": [
        0.09,
        0.1,
        0.08
      ],
      "c": 13207661
    },
    {
      "t": "sphere",
      "n": "climbing-hold-4",
      "p": [
        1.04,
        0.5,
        -0.06
      ],
      "s": [
        0.12,
        0.08,
        0.08
      ],
      "c": 13207661
    },
    {
      "t": "sphere",
      "n": "climbing-hold-5",
      "p": [
        -0.92,
        1.0699999999999998,
        -0.06
      ],
      "s": [
        0.15,
        0.1,
        0.08
      ],
      "c": 6200984
    },
    {
      "t": "sphere",
      "n": "climbing-hold-6",
      "p": [
        -0.4,
        1.0699999999999998,
        -0.06
      ],
      "s": [
        0.09,
        0.08,
        0.08
      ],
      "c": 6200984
    },
    {
      "t": "sphere",
      "n": "climbing-hold-7",
      "p": [
        0.12,
        1.0699999999999998,
        -0.06
      ],
      "s": [
        0.12,
        0.1,
        0.08
      ],
      "c": 6200984
    },
    {
      "t": "sphere",
      "n": "climbing-hold-8",
      "p": [
        0.64,
        1.0699999999999998,
        -0.06
      ],
      "s": [
        0.15,
        0.08,
        0.08
      ],
      "c": 6200984
    },
    {
      "t": "sphere",
      "n": "climbing-hold-9",
      "p": [
        1.1600000000000001,
        1.0699999999999998,
        -0.06
      ],
      "s": [
        0.09,
        0.1,
        0.08
      ],
      "c": 6200984
    },
    {
      "t": "sphere",
      "n": "climbing-hold-10",
      "p": [
        -1.04,
        1.64,
        -0.06
      ],
      "s": [
        0.12,
        0.08,
        0.08
      ],
      "c": 11707595
    },
    {
      "t": "sphere",
      "n": "climbing-hold-11",
      "p": [
        -0.52,
        1.64,
        -0.06
      ],
      "s": [
        0.15,
        0.1,
        0.08
      ],
      "c": 11707595
    },
    {
      "t": "sphere",
      "n": "climbing-hold-12",
      "p": [
        0,
        1.64,
        -0.06
      ],
      "s": [
        0.09,
        0.08,
        0.08
      ],
      "c": 11707595
    },
    {
      "t": "sphere",
      "n": "climbing-hold-13",
      "p": [
        0.52,
        1.64,
        -0.06
      ],
      "s": [
        0.12,
        0.1,
        0.08
      ],
      "c": 11707595
    },
    {
      "t": "sphere",
      "n": "climbing-hold-14",
      "p": [
        1.04,
        1.64,
        -0.06
      ],
      "s": [
        0.15,
        0.08,
        0.08
      ],
      "c": 11707595
    },
    {
      "t": "sphere",
      "n": "climbing-hold-15",
      "p": [
        -0.92,
        2.21,
        -0.06
      ],
      "s": [
        0.09,
        0.1,
        0.08
      ],
      "c": 13678190
    },
    {
      "t": "sphere",
      "n": "climbing-hold-16",
      "p": [
        -0.4,
        2.21,
        -0.06
      ],
      "s": [
        0.12,
        0.08,
        0.08
      ],
      "c": 13678190
    },
    {
      "t": "sphere",
      "n": "climbing-hold-17",
      "p": [
        0.12,
        2.21,
        -0.06
      ],
      "s": [
        0.15,
        0.1,
        0.08
      ],
      "c": 13678190
    },
    {
      "t": "sphere",
      "n": "climbing-hold-18",
      "p": [
        0.64,
        2.21,
        -0.06
      ],
      "s": [
        0.09,
        0.08,
        0.08
      ],
      "c": 13678190
    },
    {
      "t": "sphere",
      "n": "climbing-hold-19",
      "p": [
        1.1600000000000001,
        2.21,
        -0.06
      ],
      "s": [
        0.12,
        0.1,
        0.08
      ],
      "c": 13678190
    },
    {
      "t": "sphere",
      "n": "climbing-hold-20",
      "p": [
        -1.04,
        2.78,
        -0.06
      ],
      "s": [
        0.15,
        0.08,
        0.08
      ],
      "c": 13207661
    },
    {
      "t": "rod",
      "n": "wall-stand-0",
      "from": [
        -1.27,
        0.15,
        -0.35
      ],
      "to": [
        -1.27,
        3.02,
        -0.35
      ],
      "r": 0.051,
      "c": 3490634
    },
    {
      "t": "rod",
      "n": "wall-stand-1",
      "from": [
        1.27,
        0.15,
        -0.35
      ],
      "to": [
        1.27,
        3.02,
        -0.35
      ],
      "r": 0.051,
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bolt-disc-0",
      "p": [
        -1.08,
        2.84,
        -0.1
      ],
      "s": [
        0.035,
        0.037,
        0.03
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bolt-disc-1",
      "p": [
        -0.54,
        2.84,
        -0.1
      ],
      "s": [
        0.035,
        0.037,
        0.03
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bolt-disc-2",
      "p": [
        0,
        2.84,
        -0.1
      ],
      "s": [
        0.035,
        0.037,
        0.03
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bolt-disc-3",
      "p": [
        0.54,
        2.84,
        -0.1
      ],
      "s": [
        0.035,
        0.037,
        0.03
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "bolt-disc-4",
      "p": [
        1.08,
        2.84,
        -0.1
      ],
      "s": [
        0.035,
        0.037,
        0.03
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "front-pad-seam",
      "p": [
        0,
        0.29,
        0.37
      ],
      "s": [
        2.57,
        0.019,
        0.025
      ],
      "c": 3231321
    }
  ]
}); }
