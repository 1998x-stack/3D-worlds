import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Urban Drone Delivery Operator / 城市无人机配送操作员. */
export const assetMeta = {
  "id": "characters.urban-drone-delivery-operator.001",
  "slug": "urban-drone-delivery-operator",
  "title": "Urban Drone Delivery Operator",
  "title_zh": "城市无人机配送操作员",
  "summary": "Unrigged civilian drone courier operator with controller, headset and parcel",
  "category": "characters",
  "tags": [
    "urban",
    "drone",
    "delivery",
    "operator",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.06,
    1.92,
    0.9
  ],
  "generator": "createUrbanDroneDeliveryOperator",
  "source_path": "src/models/urban_drone_delivery_operator.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/urban-drone-delivery-operator.webp",
  "accent": "#f0d8bc"
};
export function createUrbanDroneDeliveryOperator() { return buildRecipe({
  "title": "Urban Drone Delivery Operator",
  "dimensions": [
    1.06,
    1.92,
    0.9
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
      "n": "operator-headset",
      "p": [
        0,
        1.92,
        0
      ],
      "s": [
        0.44,
        0.14,
        0.33
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "dual-stick-drone-controller",
      "p": [
        0.48,
        0.85,
        0.3
      ],
      "s": [
        0.46,
        0.18,
        0.28
      ],
      "c": 3953251
    },
    {
      "t": "cylinder",
      "n": "flight-control-stick--1",
      "p": [
        -0.48,
        0.98,
        0.37
      ],
      "s": [
        0.052,
        0.13,
        0.052
      ],
      "c": 15784124
    },
    {
      "t": "cylinder",
      "n": "flight-control-stick-1",
      "p": [
        0.48,
        0.98,
        0.37
      ],
      "s": [
        0.052,
        0.13,
        0.052
      ],
      "c": 15784124
    },
    {
      "t": "box",
      "n": "parcel-delivery-case",
      "p": [
        -0.51,
        0.75,
        0.28
      ],
      "s": [
        0.33,
        0.32,
        0.35
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "courier-satchel-flap",
      "p": [
        -0.52,
        0.92,
        0.46
      ],
      "s": [
        0.29,
        0.06,
        0.08
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "courier-jacket-mark-0",
      "p": [
        -0.17,
        1.25,
        0.189
      ],
      "s": [
        0.07,
        0.06,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "courier-jacket-mark-1",
      "p": [
        -0.06000000000000001,
        1.25,
        0.189
      ],
      "s": [
        0.07,
        0.06,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "courier-jacket-mark-2",
      "p": [
        0.04999999999999999,
        1.25,
        0.189
      ],
      "s": [
        0.07,
        0.06,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "courier-jacket-mark-3",
      "p": [
        0.16,
        1.25,
        0.189
      ],
      "s": [
        0.07,
        0.06,
        0.013
      ],
      "c": 3953251
    }
  ]
}); }
