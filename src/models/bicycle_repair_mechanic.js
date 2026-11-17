import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Bicycle Repair Mechanic / 自行车维修技师人物. */
export const assetMeta = {
  "id": "characters.bicycle-repair-mechanic.001",
  "slug": "bicycle-repair-mechanic",
  "title": "Bicycle Repair Mechanic",
  "title_zh": "自行车维修技师人物",
  "summary": "Unrigged mechanic wearing gloves with repair wrench and service apron",
  "category": "characters",
  "tags": [
    "bicycle",
    "repair",
    "mechanic",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.11,
    1.93,
    0.96
  ],
  "generator": "createBicycleRepairMechanic",
  "source_path": "src/models/bicycle_repair_mechanic.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/bicycle-repair-mechanic.webp",
  "accent": "#395169"
};
export function createBicycleRepairMechanic() { return buildRecipe({
  "title": "Bicycle Repair Mechanic",
  "dimensions": [
    1.11,
    1.93,
    0.96
  ],
  "parts": [
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-specialist-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.49,
        0.71,
        0.31
      ],
      "c": 7050634
    },
    {
      "t": "sphere",
      "n": "bicycle-repair-mechanic-specialist-face",
      "p": [
        0,
        1.79,
        0
      ],
      "s": [
        0.24,
        0.25,
        0.21
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "bicycle-repair-mechanic-neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-work-arm-upper--1",
      "from": [
        -0.28,
        1.43,
        0
      ],
      "to": [
        -0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-work-forearm--1",
      "from": [
        -0.37,
        1.04,
        0.06
      ],
      "to": [
        -0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-trouser-upper-leg--1",
      "from": [
        -0.14,
        0.89,
        0
      ],
      "to": [
        -0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-trouser-lower-leg--1",
      "from": [
        -0.16,
        0.48,
        0.04
      ],
      "to": [
        -0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-work-safety-boot--1",
      "p": [
        -0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-work-arm-upper-1",
      "from": [
        0.28,
        1.43,
        0
      ],
      "to": [
        0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-work-forearm-1",
      "from": [
        0.37,
        1.04,
        0.06
      ],
      "to": [
        0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-trouser-upper-leg-1",
      "from": [
        0.14,
        0.89,
        0
      ],
      "to": [
        0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-trouser-lower-leg-1",
      "from": [
        0.16,
        0.48,
        0.04
      ],
      "to": [
        0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-work-safety-boot-1",
      "p": [
        0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-bike-service-mechanic-apron",
      "p": [
        0,
        1.04,
        0.18
      ],
      "s": [
        0.46,
        0.54,
        0.06
      ],
      "c": 3756393
    },
    {
      "t": "rod",
      "n": "bicycle-repair-mechanic-mechanic-adjustable-wrench",
      "from": [
        0.43,
        0.7,
        0.32
      ],
      "to": [
        0.49,
        1.21,
        0.35
      ],
      "r": 0.037,
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "bicycle-repair-mechanic-open-jaw-wrench",
      "p": [
        0.49,
        1.21,
        0.35
      ],
      "s": [
        0.17,
        0.08,
        0.17
      ],
      "c": 14396805,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-spare-tools-sidebag",
      "p": [
        -0.4,
        0.77,
        0.27
      ],
      "s": [
        0.34,
        0.27,
        0.23
      ],
      "c": 14396805
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-repair-tool-apron-pocket-0",
      "p": [
        -0.21,
        0.88,
        0.255
      ],
      "s": [
        0.052,
        0.16,
        0.016
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-repair-tool-apron-pocket-1",
      "p": [
        -0.13,
        0.88,
        0.255
      ],
      "s": [
        0.052,
        0.16,
        0.016
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-repair-tool-apron-pocket-2",
      "p": [
        -0.04999999999999999,
        0.88,
        0.255
      ],
      "s": [
        0.052,
        0.16,
        0.016
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-repair-tool-apron-pocket-3",
      "p": [
        0.03,
        0.88,
        0.255
      ],
      "s": [
        0.052,
        0.16,
        0.016
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-repair-tool-apron-pocket-4",
      "p": [
        0.11000000000000001,
        0.88,
        0.255
      ],
      "s": [
        0.052,
        0.16,
        0.016
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "bicycle-repair-mechanic-repair-tool-apron-pocket-5",
      "p": [
        0.19000000000000003,
        0.88,
        0.255
      ],
      "s": [
        0.052,
        0.16,
        0.016
      ],
      "c": 15325113
    }
  ]
}); }
