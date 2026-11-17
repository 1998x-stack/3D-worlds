import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Modular Disaster Relief Clinic / 模块化应急诊疗建筑. */
export const assetMeta = {
  "id": "architecture.modular-disaster-relief-clinic.001",
  "slug": "modular-disaster-relief-clinic",
  "title": "Modular Disaster Relief Clinic",
  "title_zh": "模块化应急诊疗建筑",
  "summary": "Prefabricated medical outreach clinic with entrance ramp, solar roof and treatment signage",
  "category": "architecture",
  "tags": [
    "modular",
    "disaster",
    "relief",
    "clinic",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.7,
    3.42,
    3.3
  ],
  "generator": "createModularDisasterReliefClinic",
  "source_path": "src/models/modular_disaster_relief_clinic.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/modular-disaster-relief-clinic.webp",
  "accent": "#bca783"
};
export function createModularDisasterReliefClinic() { return buildRecipe({
  "title": "Modular Disaster Relief Clinic",
  "dimensions": [
    3.7,
    3.42,
    3.3
  ],
  "parts": [
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-field-hospital-module-base",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        3.32,
        0.25,
        2.78
      ],
      "c": 6520458
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-prefabricated-emergency-clinic-shell",
      "p": [
        0,
        1.48,
        0
      ],
      "s": [
        3.05,
        2.52,
        2.58
      ],
      "c": 12363651
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-clinic-weatherproof-roof",
      "p": [
        0,
        2.81,
        0
      ],
      "s": [
        3.34,
        0.16,
        2.81
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-medical-module-entry-door",
      "p": [
        0,
        1.1,
        1.31
      ],
      "s": [
        0.88,
        1.76,
        0.065
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-accessible-ramp-at-entry",
      "p": [
        0,
        0.18,
        1.66
      ],
      "s": [
        1.21,
        0.12,
        0.84
      ],
      "c": 6520458,
      "rot": [
        0.045,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-first-aid-glazed-window--1",
      "p": [
        -1.55,
        1.67,
        0.02
      ],
      "s": [
        0.06,
        0.71,
        1.24
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "modular-disaster-relief-clinic-accessibility-handrail--1",
      "from": [
        -0.73,
        0.26,
        1.23
      ],
      "to": [
        -0.73,
        1.11,
        1.91
      ],
      "r": 0.041,
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-first-aid-glazed-window-1",
      "p": [
        1.55,
        1.67,
        0.02
      ],
      "s": [
        0.06,
        0.71,
        1.24
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "modular-disaster-relief-clinic-accessibility-handrail-1",
      "from": [
        0.73,
        0.26,
        1.23
      ],
      "to": [
        0.73,
        1.11,
        1.91
      ],
      "r": 0.041,
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-0",
      "p": [
        -1.3,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-1",
      "p": [
        -0.98,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-2",
      "p": [
        -0.66,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-3",
      "p": [
        -0.3400000000000001,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-4",
      "p": [
        -0.020000000000000018,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-5",
      "p": [
        0.30000000000000004,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-6",
      "p": [
        0.6199999999999999,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-7",
      "p": [
        0.9400000000000002,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-solar-roof-segment-8",
      "p": [
        1.26,
        2.93,
        -0.18
      ],
      "s": [
        0.28,
        0.025,
        0.71
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "modular-disaster-relief-clinic-aid-clinic-entrance-header",
      "p": [
        0,
        2.25,
        1.33
      ],
      "s": [
        1.2,
        0.28,
        0.06
      ],
      "c": 11914704
    }
  ]
}); }
