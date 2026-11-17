import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Temperate Rainforest Nurse Log / 温带雨林倒木生态. */
export const assetMeta = {
  "id": "nature.temperate-rainforest-nurse-log.001",
  "slug": "temperate-rainforest-nurse-log",
  "title": "Temperate Rainforest Nurse Log",
  "title_zh": "温带雨林倒木生态",
  "summary": "Moss-covered fallen log supporting miniature ferns, mushrooms and seedlings",
  "category": "nature",
  "tags": [
    "temperate",
    "rainforest",
    "nurse",
    "log",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.32,
    1.58,
    2.66
  ],
  "generator": "createTemperateRainforestNurseLog",
  "source_path": "src/models/temperate_rainforest_nurse_log.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/temperate-rainforest-nurse-log.webp",
  "accent": "#75b0bb"
};
export function createTemperateRainforestNurseLog() { return buildRecipe({
  "title": "Temperate Rainforest Nurse Log",
  "dimensions": [
    3.32,
    1.58,
    2.66
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-rainforest-understory-ground",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        3.1,
        0.24,
        2.18
      ],
      "c": 8297850
    },
    {
      "t": "cylinder",
      "n": "temperate-rainforest-nurse-log-fallen-decaying-nurse-log",
      "p": [
        0,
        0.51,
        0
      ],
      "s": [
        0.65,
        2.84,
        0.65
      ],
      "c": 9992545,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-0",
      "p": [
        -1.27,
        0.78,
        0
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-1",
      "p": [
        -1.15,
        0.78,
        0.12533230554039734
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-2",
      "p": [
        -1.03,
        0.78,
        0.15581562094051124
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-3",
      "p": [
        -0.91,
        0.78,
        0.06838078083741277
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-4",
      "p": [
        -0.79,
        0.78,
        -0.07080327092717639
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-5",
      "p": [
        -0.67,
        0.78,
        -0.15640481882641552
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-6",
      "p": [
        -0.55,
        0.78,
        -0.12364231800895795
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-7",
      "p": [
        -0.43000000000000005,
        0.78,
        0.0026902240774959543
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-8",
      "p": [
        -0.31000000000000005,
        0.78,
        0.1269868582158645
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-9",
      "p": [
        -0.18999999999999995,
        0.78,
        0.15518236973521382
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-10",
      "p": [
        -0.07000000000000006,
        0.78,
        0.06593895763868106
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-11",
      "p": [
        0.04999999999999982,
        0.78,
        -0.07320574300405142
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-12",
      "p": [
        0.16999999999999993,
        0.78,
        -0.15694979681063864
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-13",
      "p": [
        0.29000000000000004,
        0.78,
        -0.12191737342704513
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-14",
      "p": [
        0.4099999999999999,
        0.78,
        0.005379687555381872
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-15",
      "p": [
        0.5299999999999998,
        0.78,
        0.12860550824825936
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-16",
      "p": [
        0.6499999999999999,
        0.78,
        0.1545052442478844
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-17",
      "p": [
        0.77,
        0.78,
        0.06347849170089793
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-18",
      "p": [
        0.8900000000000001,
        0.78,
        -0.07558751782375459
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-19",
      "p": [
        1.0099999999999998,
        0.78,
        -0.15745040081306294
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-20",
      "p": [
        1.13,
        0.78,
        -0.12015795948346818
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-moss-cover-cushion-21",
      "p": [
        1.25,
        0.78,
        0.008067630049090363
      ],
      "s": [
        0.16,
        0.08,
        0.17
      ],
      "c": 7381371
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-0",
      "from": [
        -1.1,
        0.73,
        0.07
      ],
      "to": [
        -1.1,
        0.97,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-0",
      "p": [
        -1.1,
        1.03,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-1",
      "from": [
        -0.8600000000000001,
        0.73,
        0.07
      ],
      "to": [
        -0.8600000000000001,
        1.1,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-1",
      "p": [
        -0.8600000000000001,
        1.1600000000000001,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-2",
      "from": [
        -0.6200000000000001,
        0.73,
        0.07
      ],
      "to": [
        -0.6200000000000001,
        1.23,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-2",
      "p": [
        -0.6200000000000001,
        1.29,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-3",
      "from": [
        -0.3800000000000001,
        0.73,
        0.07
      ],
      "to": [
        -0.3800000000000001,
        0.97,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-3",
      "p": [
        -0.3800000000000001,
        1.03,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-4",
      "from": [
        -0.14000000000000012,
        0.73,
        0.07
      ],
      "to": [
        -0.14000000000000012,
        1.1,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-4",
      "p": [
        -0.14000000000000012,
        1.1600000000000001,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-5",
      "from": [
        0.09999999999999987,
        0.73,
        0.07
      ],
      "to": [
        0.09999999999999987,
        1.23,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-5",
      "p": [
        0.09999999999999987,
        1.29,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-6",
      "from": [
        0.33999999999999986,
        0.73,
        0.07
      ],
      "to": [
        0.33999999999999986,
        0.97,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-6",
      "p": [
        0.33999999999999986,
        1.03,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-7",
      "from": [
        0.5799999999999998,
        0.73,
        0.07
      ],
      "to": [
        0.5799999999999998,
        1.1,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-7",
      "p": [
        0.5799999999999998,
        1.1600000000000001,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-8",
      "from": [
        0.8199999999999998,
        0.73,
        0.07
      ],
      "to": [
        0.8199999999999998,
        1.23,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-8",
      "p": [
        0.8199999999999998,
        1.29,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "rod",
      "n": "temperate-rainforest-nurse-log-forest-sapling-stem-9",
      "from": [
        1.06,
        0.73,
        0.07
      ],
      "to": [
        1.06,
        0.97,
        0.07
      ],
      "r": 0.027,
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-new-growth-fern-9",
      "p": [
        1.06,
        1.03,
        0.07
      ],
      "s": [
        0.19,
        0.11,
        0.15
      ],
      "c": 8170112
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-0",
      "p": [
        -1,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-1",
      "p": [
        -0.6799999999999999,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-2",
      "p": [
        -0.36,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-3",
      "p": [
        -0.040000000000000036,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-4",
      "p": [
        0.28,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-5",
      "p": [
        0.6000000000000001,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "temperate-rainforest-nurse-log-fungal-mushroom-colony-6",
      "p": [
        0.9199999999999999,
        0.68,
        -0.31
      ],
      "s": [
        0.11,
        0.09,
        0.12
      ],
      "c": 13286817
    }
  ]
}); }
