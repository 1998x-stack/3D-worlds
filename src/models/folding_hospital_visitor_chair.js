import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Folding Hospital Visitor Chair / 医院陪护折叠椅. */
export const assetMeta = {
  "id": "furniture.folding-hospital-visitor-chair.001",
  "slug": "folding-hospital-visitor-chair",
  "title": "Folding Hospital Visitor Chair",
  "title_zh": "医院陪护折叠椅",
  "summary": "Convertible hospital guest chair with fold-out sleeping pad, casters and side pocket",
  "category": "furniture",
  "tags": [
    "folding",
    "hospital",
    "visitor",
    "chair",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.95,
    1.25,
    1.05
  ],
  "generator": "createFoldingHospitalVisitorChair",
  "source_path": "src/models/folding_hospital_visitor_chair.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/folding-hospital-visitor-chair.webp",
  "accent": "#e0cdb6"
};
export function createFoldingHospitalVisitorChair() { return buildRecipe({
  "title": "Folding Hospital Visitor Chair",
  "dimensions": [
    0.95,
    1.25,
    1.05
  ],
  "parts": [
    {
      "t": "box",
      "n": "hospital-guest-seat",
      "p": [
        0,
        0.52,
        0.12
      ],
      "s": [
        0.72,
        0.14,
        0.59
      ],
      "c": 14732726
    },
    {
      "t": "box",
      "n": "folding-bed-extension",
      "p": [
        0,
        0.49,
        0.48
      ],
      "s": [
        0.7,
        0.1,
        0.34
      ],
      "c": 13149561
    },
    {
      "t": "box",
      "n": "chair-back-panel",
      "p": [
        0,
        0.95,
        -0.25
      ],
      "s": [
        0.72,
        0.6,
        0.12
      ],
      "c": 6715783
    },
    {
      "t": "rod",
      "n": "chair-tubular-frame--1",
      "from": [
        -0.35,
        0.55,
        -0.25
      ],
      "to": [
        -0.38,
        0.08,
        0.27
      ],
      "r": 0.035,
      "c": 6715783
    },
    {
      "t": "rod",
      "n": "fold-out-support--1",
      "from": [
        -0.35,
        0.48,
        0.44
      ],
      "to": [
        -0.36,
        0.09,
        0.52
      ],
      "r": 0.029,
      "c": 3952987
    },
    {
      "t": "cylinder",
      "n": "chair-caster--1",
      "p": [
        -0.36,
        0.08,
        0.29
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 3952987,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "soft-armrest--1",
      "p": [
        -0.38,
        0.72,
        0
      ],
      "s": [
        0.12,
        0.13,
        0.52
      ],
      "c": 14732726
    },
    {
      "t": "rod",
      "n": "chair-tubular-frame-1",
      "from": [
        0.35,
        0.55,
        -0.25
      ],
      "to": [
        0.38,
        0.08,
        0.27
      ],
      "r": 0.035,
      "c": 6715783
    },
    {
      "t": "rod",
      "n": "fold-out-support-1",
      "from": [
        0.35,
        0.48,
        0.44
      ],
      "to": [
        0.36,
        0.09,
        0.52
      ],
      "r": 0.029,
      "c": 3952987
    },
    {
      "t": "cylinder",
      "n": "chair-caster-1",
      "p": [
        0.36,
        0.08,
        0.29
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 3952987,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "soft-armrest-1",
      "p": [
        0.38,
        0.72,
        0
      ],
      "s": [
        0.12,
        0.13,
        0.52
      ],
      "c": 14732726
    },
    {
      "t": "box",
      "n": "hospital-visitor-storage-pocket",
      "p": [
        0.39,
        0.46,
        0.07
      ],
      "s": [
        0.06,
        0.18,
        0.29
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "seat-stitch-0",
      "p": [
        -0.26,
        0.602,
        0.14
      ],
      "s": [
        0.013,
        0.01,
        0.32
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "seat-stitch-1",
      "p": [
        -0.13,
        0.602,
        0.14
      ],
      "s": [
        0.013,
        0.01,
        0.32
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "seat-stitch-2",
      "p": [
        0,
        0.602,
        0.14
      ],
      "s": [
        0.013,
        0.01,
        0.32
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "seat-stitch-3",
      "p": [
        0.13,
        0.602,
        0.14
      ],
      "s": [
        0.013,
        0.01,
        0.32
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "seat-stitch-4",
      "p": [
        0.26,
        0.602,
        0.14
      ],
      "s": [
        0.013,
        0.01,
        0.32
      ],
      "c": 3952987
    }
  ]
}); }
