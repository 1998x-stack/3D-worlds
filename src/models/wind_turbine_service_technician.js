import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Wind Turbine Service Technician / 风电维护技术员人物. */
export const assetMeta = {
  "id": "characters.wind-turbine-service-technician.001",
  "slug": "wind-turbine-service-technician",
  "title": "Wind Turbine Service Technician",
  "title_zh": "风电维护技术员人物",
  "summary": "Unrigged wind technician with helmet, safety harness and inspection tablet",
  "category": "characters",
  "tags": [
    "wind",
    "turbine",
    "service",
    "technician",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.1,
    2.05,
    0.92
  ],
  "generator": "createWindTurbineServiceTechnician",
  "source_path": "src/models/wind_turbine_service_technician.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/wind-turbine-service-technician.webp",
  "accent": "#729d92"
};
export function createWindTurbineServiceTechnician() { return buildRecipe({
  "title": "Wind Turbine Service Technician",
  "dimensions": [
    1.1,
    2.05,
    0.92
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
      "t": "sphere",
      "n": "protective-hard-hat",
      "p": [
        0,
        1.98,
        0
      ],
      "s": [
        0.48,
        0.14,
        0.44
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "climbing-harness-strap--1",
      "p": [
        -0.15,
        1.22,
        0.18
      ],
      "s": [
        0.055,
        0.51,
        0.025
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "climbing-harness-strap-1",
      "p": [
        0.15,
        1.22,
        0.18
      ],
      "s": [
        0.055,
        0.51,
        0.025
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "wind-inspection-tablet",
      "p": [
        0.48,
        0.99,
        0.37
      ],
      "s": [
        0.32,
        0.35,
        0.047
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "tablet-status-map",
      "p": [
        0.48,
        1,
        0.395
      ],
      "s": [
        0.21,
        0.23,
        0.014
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "safety-cord-lanyard",
      "p": [
        0,
        0.94,
        0.15
      ],
      "s": [
        0.42,
        0.08,
        0.02
      ],
      "c": 15784124
    },
    {
      "t": "box",
      "n": "technician-glove-stripe-0",
      "p": [
        -0.28,
        0.8,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.019
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "technician-glove-stripe-1",
      "p": [
        -0.10000000000000003,
        0.8,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.019
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "technician-glove-stripe-2",
      "p": [
        0.07999999999999996,
        0.8,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.019
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "technician-glove-stripe-3",
      "p": [
        0.26,
        0.8,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.019
      ],
      "c": 3953251
    }
  ]
}); }
