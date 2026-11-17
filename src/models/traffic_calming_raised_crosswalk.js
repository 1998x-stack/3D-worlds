import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Traffic Calming Raised Crosswalk / 交通减速抬升斑马线. */
export const assetMeta = {
  "id": "urban.traffic-calming-raised-crosswalk.001",
  "slug": "traffic-calming-raised-crosswalk",
  "title": "Traffic Calming Raised Crosswalk",
  "title_zh": "交通减速抬升斑马线",
  "summary": "Modular street raised pedestrian crossing with ramp slopes and bold reflective markings",
  "category": "urban",
  "tags": [
    "traffic",
    "calming",
    "raised",
    "crosswalk",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.7,
    0.65,
    2.45
  ],
  "generator": "createTrafficCalmingRaisedCrosswalk",
  "source_path": "src/models/traffic_calming_raised_crosswalk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/traffic-calming-raised-crosswalk.webp",
  "accent": "#e6bf6a"
};
export function createTrafficCalmingRaisedCrosswalk() { return buildRecipe({
  "title": "Traffic Calming Raised Crosswalk",
  "dimensions": [
    3.7,
    0.65,
    2.45
  ],
  "parts": [
    {
      "t": "box",
      "n": "raised-crosswalk-tarmac",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        3.46,
        0.33,
        2.17
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "approach-ramp-north",
      "p": [
        0,
        0.2,
        -1.04
      ],
      "s": [
        3.4,
        0.23,
        0.32
      ],
      "c": 6717332,
      "rot": [
        0.12,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "approach-ramp-south",
      "p": [
        0,
        0.2,
        1.04
      ],
      "s": [
        3.4,
        0.23,
        0.32
      ],
      "c": 6717332,
      "rot": [
        -0.12,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-0",
      "p": [
        -1.45,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-1",
      "p": [
        -1.0899999999999999,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-2",
      "p": [
        -0.73,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-3",
      "p": [
        -0.3699999999999999,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-4",
      "p": [
        -0.010000000000000009,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-5",
      "p": [
        0.34999999999999987,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-6",
      "p": [
        0.7100000000000002,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-7",
      "p": [
        1.07,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "crosswalk-white-stripe-8",
      "p": [
        1.43,
        0.349,
        0
      ],
      "s": [
        0.2,
        0.018,
        1.51
      ],
      "c": 15122282
    },
    {
      "t": "cylinder",
      "n": "warning-bollard--1",
      "p": [
        -1.56,
        0.67,
        0
      ],
      "s": [
        0.14,
        1.02,
        0.14
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "bollard-reflective-strip--1",
      "p": [
        -1.56,
        1.05,
        0.07
      ],
      "s": [
        0.11,
        0.1,
        0.02
      ],
      "c": 15122282
    },
    {
      "t": "cylinder",
      "n": "warning-bollard-1",
      "p": [
        1.56,
        0.67,
        0
      ],
      "s": [
        0.14,
        1.02,
        0.14
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "bollard-reflective-strip-1",
      "p": [
        1.56,
        1.05,
        0.07
      ],
      "s": [
        0.11,
        0.1,
        0.02
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "ramp-hazard-color-band",
      "p": [
        0,
        0.344,
        -0.75
      ],
      "s": [
        3.1,
        0.012,
        0.1
      ],
      "c": 6717332
    }
  ]
}); }
