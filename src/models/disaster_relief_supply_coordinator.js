import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Disaster Relief Supply Coordinator / 灾害救援物资协调员. */
export const assetMeta = {
  "id": "characters.disaster-relief-supply-coordinator.001",
  "slug": "disaster-relief-supply-coordinator",
  "title": "Disaster Relief Supply Coordinator",
  "title_zh": "灾害救援物资协调员",
  "summary": "Unrigged humanitarian logistics volunteer with clipboard and marked supply case",
  "category": "characters",
  "tags": [
    "disaster",
    "relief",
    "supply",
    "coordinator",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.13,
    1.92,
    0.95
  ],
  "generator": "createDisasterReliefSupplyCoordinator",
  "source_path": "src/models/disaster_relief_supply_coordinator.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/disaster-relief-supply-coordinator.webp",
  "accent": "#3c5263"
};
export function createDisasterReliefSupplyCoordinator() { return buildRecipe({
  "title": "Disaster Relief Supply Coordinator",
  "dimensions": [
    1.13,
    1.92,
    0.95
  ],
  "parts": [
    {
      "t": "box",
      "n": "workwear-torso",
      "p": [
        0,
        1.19,
        0
      ],
      "s": [
        0.53,
        0.69,
        0.31
      ],
      "c": 7511442
    },
    {
      "t": "sphere",
      "n": "face-and-skull",
      "p": [
        0,
        1.77,
        0
      ],
      "s": [
        0.22,
        0.24,
        0.21
      ],
      "c": 15784124
    },
    {
      "t": "cylinder",
      "n": "neck-joint",
      "p": [
        0,
        1.55,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.12
      ],
      "c": 15784124
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.28,
        1.44,
        0
      ],
      "to": [
        -0.38,
        1.03,
        0.09
      ],
      "r": 0.075,
      "c": 7511442
    },
    {
      "t": "rod",
      "n": "forearm--1",
      "from": [
        -0.38,
        1.03,
        0.09
      ],
      "to": [
        -0.43,
        0.78,
        0.29
      ],
      "r": 0.066,
      "c": 15784124
    },
    {
      "t": "rod",
      "n": "upper-leg--1",
      "from": [
        -0.15,
        0.89,
        0
      ],
      "to": [
        -0.17,
        0.49,
        0.02
      ],
      "r": 0.103,
      "c": 14924173
    },
    {
      "t": "rod",
      "n": "lower-leg--1",
      "from": [
        -0.17,
        0.49,
        0.02
      ],
      "to": [
        -0.18,
        0.12,
        0.07
      ],
      "r": 0.082,
      "c": 14924173
    },
    {
      "t": "box",
      "n": "work-boot--1",
      "p": [
        -0.18,
        0.065,
        0.13
      ],
      "s": [
        0.21,
        0.13,
        0.33
      ],
      "c": 3953251
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.28,
        1.44,
        0
      ],
      "to": [
        0.38,
        1.03,
        0.09
      ],
      "r": 0.075,
      "c": 7511442
    },
    {
      "t": "rod",
      "n": "forearm-1",
      "from": [
        0.38,
        1.03,
        0.09
      ],
      "to": [
        0.43,
        0.78,
        0.29
      ],
      "r": 0.066,
      "c": 15784124
    },
    {
      "t": "rod",
      "n": "upper-leg-1",
      "from": [
        0.15,
        0.89,
        0
      ],
      "to": [
        0.17,
        0.49,
        0.02
      ],
      "r": 0.103,
      "c": 14924173
    },
    {
      "t": "rod",
      "n": "lower-leg-1",
      "from": [
        0.17,
        0.49,
        0.02
      ],
      "to": [
        0.18,
        0.12,
        0.07
      ],
      "r": 0.082,
      "c": 14924173
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.18,
        0.065,
        0.13
      ],
      "s": [
        0.21,
        0.13,
        0.33
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "badge-identifier",
      "p": [
        0.13,
        1.32,
        0.177
      ],
      "s": [
        0.15,
        0.1,
        0.024
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "aid-team-reflective-vest",
      "p": [
        0,
        1.18,
        0.18
      ],
      "s": [
        0.44,
        0.56,
        0.05
      ],
      "c": 15250270
    },
    {
      "t": "box",
      "n": "humanitarian-clipboard",
      "p": [
        0.48,
        0.95,
        0.33
      ],
      "s": [
        0.36,
        0.38,
        0.044
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "aid-supply-box",
      "p": [
        -0.51,
        0.66,
        0.36
      ],
      "s": [
        0.41,
        0.33,
        0.3
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "supply-cross-symbol",
      "p": [
        -0.51,
        0.68,
        0.53
      ],
      "s": [
        0.17,
        0.14,
        0.025
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "two-way-radio",
      "p": [
        0.32,
        1.44,
        0.18
      ],
      "s": [
        0.16,
        0.21,
        0.12
      ],
      "c": 15784124
    },
    {
      "t": "box",
      "n": "aid-vest-reflective-segment-0",
      "p": [
        -0.19,
        1.3,
        0.213
      ],
      "s": [
        0.075,
        0.06,
        0.01
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "aid-vest-reflective-segment-1",
      "p": [
        -0.095,
        1.3,
        0.213
      ],
      "s": [
        0.075,
        0.06,
        0.01
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "aid-vest-reflective-segment-2",
      "p": [
        0,
        1.3,
        0.213
      ],
      "s": [
        0.075,
        0.06,
        0.01
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "aid-vest-reflective-segment-3",
      "p": [
        0.09500000000000003,
        1.3,
        0.213
      ],
      "s": [
        0.075,
        0.06,
        0.01
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "aid-vest-reflective-segment-4",
      "p": [
        0.19,
        1.3,
        0.213
      ],
      "s": [
        0.075,
        0.06,
        0.01
      ],
      "c": 3953251
    }
  ]
}); }
