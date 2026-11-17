import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Field Soil Compaction Kit / 野外土壤压实度检测箱. */
export const assetMeta = {
  "id": "tools.field-soil-compaction-kit.001",
  "slug": "field-soil-compaction-kit",
  "title": "Field Soil Compaction Kit",
  "title_zh": "野外土壤压实度检测箱",
  "summary": "Field geotechnical testing case with probe rods, hand rammer and numbered sample pots",
  "category": "tools",
  "tags": [
    "field",
    "soil",
    "compaction",
    "kit",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.15,
    0.65,
    0.88
  ],
  "generator": "createFieldSoilCompactionKit",
  "source_path": "src/models/field_soil_compaction_kit.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/field-soil-compaction-kit.webp",
  "accent": "#283f50"
};
export function createFieldSoilCompactionKit() { return buildRecipe({
  "title": "Field Soil Compaction Kit",
  "dimensions": [
    1.15,
    0.65,
    0.88
  ],
  "parts": [
    {
      "t": "box",
      "n": "soil-compaction-kit-case",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        1.04,
        0.29,
        0.69
      ],
      "c": 8361115
    },
    {
      "t": "box",
      "n": "open-case-lid",
      "p": [
        0,
        0.32,
        -0.22
      ],
      "s": [
        1.04,
        0.085,
        0.28
      ],
      "c": 14398057
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-0",
      "from": [
        -0.43,
        0.29,
        0.16
      ],
      "to": [
        -0.43,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-1",
      "from": [
        -0.29,
        0.29,
        0.16
      ],
      "to": [
        -0.29,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-2",
      "from": [
        -0.14999999999999997,
        0.29,
        0.16
      ],
      "to": [
        -0.14999999999999997,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-3",
      "from": [
        -0.009999999999999953,
        0.29,
        0.16
      ],
      "to": [
        -0.009999999999999953,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-4",
      "from": [
        0.13000000000000006,
        0.29,
        0.16
      ],
      "to": [
        0.13000000000000006,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-5",
      "from": [
        0.2700000000000001,
        0.29,
        0.16
      ],
      "to": [
        0.2700000000000001,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "rod",
      "n": "soil-densitometer-rod-6",
      "from": [
        0.4100000000000001,
        0.29,
        0.16
      ],
      "to": [
        0.4100000000000001,
        0.52,
        0.16
      ],
      "r": 0.019,
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "sample-cup-0",
      "p": [
        -0.35,
        0.27,
        -0.14
      ],
      "s": [
        0.16,
        0.16,
        0.16
      ],
      "c": 13226448
    },
    {
      "t": "cylinder",
      "n": "sample-cup-1",
      "p": [
        -0.019999999999999962,
        0.27,
        -0.14
      ],
      "s": [
        0.16,
        0.16,
        0.16
      ],
      "c": 13226448
    },
    {
      "t": "cylinder",
      "n": "sample-cup-2",
      "p": [
        0.31000000000000005,
        0.27,
        -0.14
      ],
      "s": [
        0.16,
        0.16,
        0.16
      ],
      "c": 13226448
    },
    {
      "t": "cylinder",
      "n": "sample-cup-3",
      "p": [
        -0.35,
        0.27,
        0.07999999999999999
      ],
      "s": [
        0.16,
        0.16,
        0.16
      ],
      "c": 13226448
    },
    {
      "t": "cylinder",
      "n": "sample-cup-4",
      "p": [
        -0.019999999999999962,
        0.27,
        0.07999999999999999
      ],
      "s": [
        0.16,
        0.16,
        0.16
      ],
      "c": 13226448
    },
    {
      "t": "cylinder",
      "n": "sample-cup-5",
      "p": [
        0.31000000000000005,
        0.27,
        0.07999999999999999
      ],
      "s": [
        0.16,
        0.16,
        0.16
      ],
      "c": 13226448
    },
    {
      "t": "cylinder",
      "n": "hand-compaction-rammer",
      "p": [
        0.35,
        0.37,
        0.27
      ],
      "s": [
        0.15,
        0.48,
        0.15
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "digital-gauge",
      "p": [
        -0.19,
        0.36,
        0.27
      ],
      "s": [
        0.25,
        0.17,
        0.09
      ],
      "c": 2637648
    },
    {
      "t": "box",
      "n": "case-label-0",
      "p": [
        -0.37,
        0.19,
        0.38
      ],
      "s": [
        0.12,
        0.05,
        0.016
      ],
      "c": 13226448
    },
    {
      "t": "box",
      "n": "case-label-1",
      "p": [
        -0.13,
        0.19,
        0.38
      ],
      "s": [
        0.12,
        0.05,
        0.016
      ],
      "c": 13226448
    },
    {
      "t": "box",
      "n": "case-label-2",
      "p": [
        0.10999999999999999,
        0.19,
        0.38
      ],
      "s": [
        0.12,
        0.05,
        0.016
      ],
      "c": 13226448
    },
    {
      "t": "box",
      "n": "case-label-3",
      "p": [
        0.35,
        0.19,
        0.38
      ],
      "s": [
        0.12,
        0.05,
        0.016
      ],
      "c": 13226448
    }
  ]
}); }
