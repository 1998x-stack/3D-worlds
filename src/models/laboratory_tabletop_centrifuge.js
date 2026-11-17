import { buildRecipe } from './recipe_engine.js';
/** Laboratory Tabletop Centrifuge: original source-editable mesh scene. */
export const assetMeta = {
  "id": "tools.laboratory-tabletop-centrifuge.001",
  "slug": "laboratory-tabletop-centrifuge",
  "title": "Laboratory Tabletop Centrifuge",
  "title_zh": "实验室桌面离心机",
  "summary": "Bench laboratory centrifuge with six-place rotor, tube holders, lid and digital control",
  "category": "tools",
  "tags": [
    "centrifuge",
    "laboratory",
    "instrument"
  ],
  "dimensions_m": [
    0.63,
    0.48,
    0.58
  ],
  "generator": "createLaboratoryTabletopCentrifuge",
  "source_path": "src/models/laboratory_tabletop_centrifuge.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/laboratory-tabletop-centrifuge.webp"
};
export function createLaboratoryTabletopCentrifuge() { return buildRecipe({
  "title": "Laboratory Tabletop Centrifuge",
  "dimensions": [
    0.63,
    0.48,
    0.58
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.56,
        0.15,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "laboratory-casing",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        0.61,
        0.35,
        0.57
      ],
      "c": 15197661
    },
    {
      "t": "cylinder",
      "n": "rotor-center",
      "p": [
        0,
        0.39,
        0
      ],
      "s": [
        0.37,
        0.07,
        0.35
      ],
      "c": 3753293
    },
    {
      "t": "cylinder",
      "n": "closed-lid",
      "p": [
        0,
        0.45,
        -0.18
      ],
      "s": [
        0.54,
        0.075,
        0.37
      ],
      "c": 6657707
    },
    {
      "t": "cylinder",
      "n": "sample-tube-0",
      "p": [
        0.15,
        0.42,
        0
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 11323079
    },
    {
      "t": "cylinder",
      "n": "sample-tube-1",
      "p": [
        0.10606601717798213,
        0.42,
        0.10606601717798211
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 12952430
    },
    {
      "t": "cylinder",
      "n": "sample-tube-2",
      "p": [
        9.184850993605149e-18,
        0.42,
        0.15
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 11323079
    },
    {
      "t": "cylinder",
      "n": "sample-tube-3",
      "p": [
        -0.10606601717798211,
        0.42,
        0.10606601717798213
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 12952430
    },
    {
      "t": "cylinder",
      "n": "sample-tube-4",
      "p": [
        -0.15,
        0.42,
        1.8369701987210297e-17
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 11323079
    },
    {
      "t": "cylinder",
      "n": "sample-tube-5",
      "p": [
        -0.10606601717798216,
        0.42,
        -0.10606601717798211
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 12952430
    },
    {
      "t": "cylinder",
      "n": "sample-tube-6",
      "p": [
        -2.7554552980815445e-17,
        0.42,
        -0.15
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 11323079
    },
    {
      "t": "cylinder",
      "n": "sample-tube-7",
      "p": [
        0.1060660171779821,
        0.42,
        -0.10606601717798216
      ],
      "s": [
        0.07,
        0.19,
        0.07
      ],
      "c": 12952430
    },
    {
      "t": "box",
      "n": "front-console",
      "p": [
        0,
        0.22,
        0.292
      ],
      "s": [
        0.4,
        0.16,
        0.016
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "control-display",
      "p": [
        0,
        0.26,
        0.308
      ],
      "s": [
        0.24,
        0.065,
        0.012
      ],
      "c": 6657707
    },
    {
      "t": "cylinder",
      "n": "start-button",
      "p": [
        0.17,
        0.18,
        0.307
      ],
      "s": [
        0.061,
        0.024,
        0.061
      ],
      "c": 7050619,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
