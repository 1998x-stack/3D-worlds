import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Urban Waste Recovery Specialist / 城市资源回收专员人物. */
export const assetMeta = {
  "id": "characters.urban-waste-recovery-specialist.001",
  "slug": "urban-waste-recovery-specialist",
  "title": "Urban Waste Recovery Specialist",
  "title_zh": "城市资源回收专员人物",
  "summary": "Unrigged sorting technician with high visibility vest and handheld scanner",
  "category": "characters",
  "tags": [
    "urban",
    "waste",
    "recovery",
    "specialist",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.06,
    1.91,
    0.92
  ],
  "generator": "createUrbanWasteRecoverySpecialist",
  "source_path": "src/models/urban_waste_recovery_specialist.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/urban-waste-recovery-specialist.webp",
  "accent": "#f0c39e"
};
export function createUrbanWasteRecoverySpecialist() { return buildRecipe({
  "title": "Urban Waste Recovery Specialist",
  "dimensions": [
    1.06,
    1.91,
    0.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "uniform-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.48,
        0.68,
        0.31
      ],
      "c": 4747146
    },
    {
      "t": "sphere",
      "n": "human-face",
      "p": [
        0,
        1.78,
        0
      ],
      "s": [
        0.21,
        0.24,
        0.2
      ],
      "c": 3427169
    },
    {
      "t": "cylinder",
      "n": "neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.12
      ],
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.29,
        1.42,
        0
      ],
      "to": [
        -0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm--1",
      "from": [
        -0.36,
        1,
        0.09
      ],
      "to": [
        -0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh--1",
      "from": [
        -0.14,
        0.92,
        0
      ],
      "to": [
        -0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin--1",
      "from": [
        -0.16,
        0.5,
        0.05
      ],
      "to": [
        -0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot--1",
      "p": [
        -0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.29,
        1.42,
        0
      ],
      "to": [
        0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm-1",
      "from": [
        0.36,
        1,
        0.09
      ],
      "to": [
        0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh-1",
      "from": [
        0.14,
        0.92,
        0
      ],
      "to": [
        0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin-1",
      "from": [
        0.16,
        0.5,
        0.05
      ],
      "to": [
        0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "work-identity-patch",
      "p": [
        0.13,
        1.32,
        0.18
      ],
      "s": [
        0.15,
        0.1,
        0.026
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "recovery-highviz-vest",
      "p": [
        0,
        1.2,
        0.18
      ],
      "s": [
        0.44,
        0.45,
        0.07
      ],
      "c": 15385704
    },
    {
      "t": "box",
      "n": "material-sorting-scanner",
      "p": [
        0.45,
        0.93,
        0.35
      ],
      "s": [
        0.26,
        0.31,
        0.1
      ],
      "c": 15778718
    },
    {
      "t": "box",
      "n": "sorting-scanner-display",
      "p": [
        0.45,
        1,
        0.407
      ],
      "s": [
        0.16,
        0.13,
        0.02
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "recycling-collection-bag",
      "p": [
        -0.41,
        0.68,
        0.27
      ],
      "s": [
        0.36,
        0.36,
        0.22
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "reflective-vest-stripe-0",
      "p": [
        -0.18,
        1.38,
        0.23
      ],
      "s": [
        0.06,
        0.055,
        0.018
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "reflective-vest-stripe-1",
      "p": [
        -0.09,
        1.38,
        0.23
      ],
      "s": [
        0.06,
        0.055,
        0.018
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "reflective-vest-stripe-2",
      "p": [
        0,
        1.38,
        0.23
      ],
      "s": [
        0.06,
        0.055,
        0.018
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "reflective-vest-stripe-3",
      "p": [
        0.09000000000000002,
        1.38,
        0.23
      ],
      "s": [
        0.06,
        0.055,
        0.018
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "reflective-vest-stripe-4",
      "p": [
        0.18,
        1.38,
        0.23
      ],
      "s": [
        0.06,
        0.055,
        0.018
      ],
      "c": 3427169
    }
  ]
}); }
