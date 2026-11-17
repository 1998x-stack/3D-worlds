import { buildRecipe } from './recipe_engine.js';
/** Hospital Adjustable Bed: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "furniture.hospital-adjustable-bed.001",
  "slug": "hospital-adjustable-bed",
  "title": "Hospital Adjustable Bed",
  "title_zh": "医疗电动护理床",
  "summary": "Hospital patient care bed with adjustable backrest, guard rails and lockable casters",
  "category": "furniture",
  "tags": [
    "hospital",
    "patient",
    "care"
  ],
  "dimensions_m": [
    2.28,
    1.62,
    1.38
  ],
  "generator": "createHospitalAdjustableBed",
  "source_path": "src/models/hospital_adjustable_bed.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/hospital-adjustable-bed.webp"
};
export function createHospitalAdjustableBed() { return buildRecipe({
  "title": "Hospital Adjustable Bed",
  "dimensions": [
    2.28,
    1.62,
    1.38
  ],
  "parts": [
    {
      "t": "box",
      "n": "bed-frame",
      "p": [
        0,
        0.85,
        0
      ],
      "s": [
        2.15,
        0.16,
        1.25
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "segmented-mattress",
      "p": [
        0,
        0.99,
        0
      ],
      "s": [
        2.02,
        0.17,
        1.1
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "tilt-backrest",
      "p": [
        -0.69,
        1.15,
        0
      ],
      "s": [
        0.76,
        0.15,
        1.08
      ],
      "c": 13031637,
      "rot": [
        0,
        0,
        0.2
      ]
    },
    {
      "t": "box",
      "n": "pillow",
      "p": [
        -0.85,
        1.27,
        0
      ],
      "s": [
        0.37,
        0.11,
        0.69
      ],
      "c": 6195618
    },
    {
      "t": "box",
      "n": "headboard",
      "p": [
        -1.08,
        1.22,
        0
      ],
      "s": [
        0.09,
        0.76,
        1.3
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "footboard",
      "p": [
        1.08,
        1.13,
        0
      ],
      "s": [
        0.09,
        0.6,
        1.3
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "safety-rail-0",
      "p": [
        0,
        1.28,
        -0.6
      ],
      "s": [
        1.3,
        0.31,
        0.06
      ],
      "c": 6195618
    },
    {
      "t": "box",
      "n": "safety-rail-1",
      "p": [
        0,
        1.28,
        0.6
      ],
      "s": [
        1.3,
        0.31,
        0.06
      ],
      "c": 6195618
    },
    {
      "t": "rod",
      "n": "support-0-0",
      "from": [
        -0.83,
        0.18,
        -0.49
      ],
      "to": [
        -0.83,
        0.8,
        -0.49
      ],
      "r": 0.044,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "caster-0-0",
      "p": [
        -0.83,
        0.09,
        -0.49
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "support-0-1",
      "from": [
        -0.83,
        0.18,
        0.49
      ],
      "to": [
        -0.83,
        0.8,
        0.49
      ],
      "r": 0.044,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "caster-0-1",
      "p": [
        -0.83,
        0.09,
        0.49
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "support-1-0",
      "from": [
        0.83,
        0.18,
        -0.49
      ],
      "to": [
        0.83,
        0.8,
        -0.49
      ],
      "r": 0.044,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "caster-1-0",
      "p": [
        0.83,
        0.09,
        -0.49
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "support-1-1",
      "from": [
        0.83,
        0.18,
        0.49
      ],
      "to": [
        0.83,
        0.8,
        0.49
      ],
      "r": 0.044,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "caster-1-1",
      "p": [
        0.83,
        0.09,
        0.49
      ],
      "s": [
        0.15,
        0.06,
        0.15
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "lower-brace",
      "from": [
        -0.83,
        0.5,
        0
      ],
      "to": [
        0.83,
        0.5,
        0
      ],
      "r": 0.04,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "hand-controller",
      "p": [
        0.5,
        1.48,
        0.61
      ],
      "s": [
        0.15,
        0.22,
        0.05
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "controller-button-0",
      "p": [
        0.5,
        1.41,
        0.65
      ],
      "s": [
        0.024,
        0.024,
        0.014
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "controller-button-1",
      "p": [
        0.5,
        1.46,
        0.65
      ],
      "s": [
        0.024,
        0.024,
        0.014
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "controller-button-2",
      "p": [
        0.5,
        1.51,
        0.65
      ],
      "s": [
        0.024,
        0.024,
        0.014
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "controller-button-3",
      "p": [
        0.5,
        1.56,
        0.65
      ],
      "s": [
        0.024,
        0.024,
        0.014
      ],
      "c": 13149293
    }
  ]
}); }
