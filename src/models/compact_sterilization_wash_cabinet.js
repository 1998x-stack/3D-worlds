import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Compact Sterilization Wash Cabinet / 紧凑型清洗消毒柜. */
export const assetMeta = {
  "id": "bathroom.compact-sterilization-wash-cabinet.001",
  "slug": "compact-sterilization-wash-cabinet",
  "title": "Compact Sterilization Wash Cabinet",
  "title_zh": "紧凑型清洗消毒柜",
  "summary": "Nonfunctional hospital instrument cleaning cabinet with basket trays and control panel",
  "category": "bathroom",
  "tags": [
    "compact",
    "sterilization",
    "wash",
    "cabinet",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.94,
    1.45,
    0.84
  ],
  "generator": "createCompactSterilizationWashCabinet",
  "source_path": "src/models/compact_sterilization_wash_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/compact-sterilization-wash-cabinet.webp",
  "accent": "#445b6b"
};
export function createCompactSterilizationWashCabinet() { return buildRecipe({
  "title": "Compact Sterilization Wash Cabinet",
  "dimensions": [
    0.94,
    1.45,
    0.84
  ],
  "parts": [
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-instrument-cleaning-chamber-shell",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        0.8,
        1.38,
        0.69
      ],
      "c": 14739945
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-sealable-glass-front-door",
      "p": [
        0,
        0.74,
        0.37
      ],
      "s": [
        0.71,
        1.15,
        0.048
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-observation-glass-panel",
      "p": [
        0,
        0.87,
        0.406
      ],
      "s": [
        0.59,
        0.51,
        0.022
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-removable-instrument-tray-0",
      "p": [
        0,
        0.3,
        -0.02
      ],
      "s": [
        0.62,
        0.05,
        0.42
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-0-0",
      "p": [
        -0.22,
        0.35,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-0-1",
      "p": [
        0,
        0.35,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-0-2",
      "p": [
        0.22,
        0.35,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-removable-instrument-tray-1",
      "p": [
        0,
        0.52,
        -0.02
      ],
      "s": [
        0.62,
        0.05,
        0.42
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-1-0",
      "p": [
        -0.22,
        0.57,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-1-1",
      "p": [
        0,
        0.57,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-1-2",
      "p": [
        0.22,
        0.57,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-removable-instrument-tray-2",
      "p": [
        0,
        0.74,
        -0.02
      ],
      "s": [
        0.62,
        0.05,
        0.42
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-2-0",
      "p": [
        -0.22,
        0.79,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-2-1",
      "p": [
        0,
        0.79,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-2-2",
      "p": [
        0.22,
        0.79,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-removable-instrument-tray-3",
      "p": [
        0,
        0.96,
        -0.02
      ],
      "s": [
        0.62,
        0.05,
        0.42
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-3-0",
      "p": [
        -0.22,
        1.01,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-3-1",
      "p": [
        0,
        1.01,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-3-2",
      "p": [
        0.22,
        1.01,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-removable-instrument-tray-4",
      "p": [
        0,
        1.18,
        -0.02
      ],
      "s": [
        0.62,
        0.05,
        0.42
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-4-0",
      "p": [
        -0.22,
        1.23,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-4-1",
      "p": [
        0,
        1.23,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "cylinder",
      "n": "compact-sterilization-wash-cabinet-basket-holder-4-2",
      "p": [
        0.22,
        1.23,
        -0.03
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "compact-sterilization-wash-cabinet-instrument-wash-cycle-panel",
      "p": [
        0,
        1.31,
        0.4
      ],
      "s": [
        0.5,
        0.13,
        0.02
      ],
      "c": 4479851
    }
  ]
}); }
