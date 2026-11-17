import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Rural Mobile Clinic Bus / 乡村移动诊疗车. */
export const assetMeta = {
  "id": "vehicles.rural-mobile-clinic-bus.001",
  "slug": "rural-mobile-clinic-bus",
  "title": "Rural Mobile Clinic Bus",
  "title_zh": "乡村移动诊疗车",
  "summary": "Medical outreach bus with accessible service door, awning and diagnostic bay",
  "category": "vehicles",
  "tags": [
    "rural",
    "mobile",
    "clinic",
    "bus",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.55,
    3.25,
    5.55
  ],
  "generator": "createRuralMobileClinicBus",
  "source_path": "src/models/rural_mobile_clinic_bus.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/rural-mobile-clinic-bus.webp",
  "accent": "#ddb762"
};
export function createRuralMobileClinicBus() { return buildRecipe({
  "title": "Rural Mobile Clinic Bus",
  "dimensions": [
    2.55,
    3.25,
    5.55
  ],
  "parts": [
    {
      "t": "box",
      "n": "vehicle-frame",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        1.86,
        0.75,
        3.34
      ],
      "c": 3492699
    },
    {
      "t": "box",
      "n": "vehicle-cabin",
      "p": [
        0,
        1.68,
        0.91
      ],
      "s": [
        1.7,
        1.55,
        1.42
      ],
      "c": 7580339
    },
    {
      "t": "box",
      "n": "windscreen",
      "p": [
        0,
        1.96,
        1.66
      ],
      "s": [
        1.35,
        0.68,
        0.055
      ],
      "c": 14530402
    },
    {
      "t": "cylinder",
      "n": "wheel--1--1.14",
      "p": [
        -0.99,
        0.36,
        -1.14
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel--1-1.21",
      "p": [
        -0.99,
        0.36,
        1.21
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1--1.14",
      "p": [
        0.99,
        0.36,
        -1.14
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-1-1.21",
      "p": [
        0.99,
        0.36,
        1.21
      ],
      "s": [
        0.64,
        0.19,
        0.64
      ],
      "c": 14080733,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "rural-clinic-high-body",
      "p": [
        0,
        1.78,
        -0.4
      ],
      "s": [
        1.96,
        2.12,
        3.58
      ],
      "c": 7580339
    },
    {
      "t": "box",
      "n": "medical-roof-climate-unit",
      "p": [
        0,
        2.96,
        -0.34
      ],
      "s": [
        1.25,
        0.23,
        0.95
      ],
      "c": 3492699
    },
    {
      "t": "box",
      "n": "clinic-access-door",
      "p": [
        1,
        1.46,
        0.27
      ],
      "s": [
        0.058,
        1.56,
        0.72
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "mobile-awning",
      "p": [
        1.5,
        2.28,
        0.13
      ],
      "s": [
        0.92,
        0.12,
        2.17
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "clinic-glazed-window-0",
      "p": [
        -1.02,
        2.01,
        -1.7
      ],
      "s": [
        0.05,
        0.56,
        0.45
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "clinic-glazed-window-1",
      "p": [
        -1.02,
        2.01,
        -1.02
      ],
      "s": [
        0.05,
        0.56,
        0.45
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "clinic-glazed-window-2",
      "p": [
        -1.02,
        2.01,
        -0.33999999999999986
      ],
      "s": [
        0.05,
        0.56,
        0.45
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "clinic-glazed-window-3",
      "p": [
        -1.02,
        2.01,
        0.3400000000000001
      ],
      "s": [
        0.05,
        0.56,
        0.45
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "clinic-glazed-window-4",
      "p": [
        -1.02,
        2.01,
        1.0200000000000002
      ],
      "s": [
        0.05,
        0.56,
        0.45
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "boarding-step",
      "p": [
        1.13,
        0.36,
        0.39
      ],
      "s": [
        0.43,
        0.12,
        0.59
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "medical-outreach-sign",
      "p": [
        0,
        1.29,
        1.76
      ],
      "s": [
        0.34,
        0.32,
        0.035
      ],
      "c": 14530402
    }
  ]
}); }
