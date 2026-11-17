import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Lunar Ice Extraction Laboratory / 月球冰资源提取实验舱. */
export const assetMeta = {
  "id": "scifi.lunar-ice-extraction-laboratory.001",
  "slug": "lunar-ice-extraction-laboratory",
  "title": "Lunar Ice Extraction Laboratory",
  "title_zh": "月球冰资源提取实验舱",
  "summary": "Nonweapon lunar polar research platform with sampling auger, ice tanks and pressurized analysis pod",
  "category": "scifi",
  "tags": [
    "lunar",
    "ice",
    "extraction",
    "laboratory",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.62,
    3.34,
    3.32
  ],
  "generator": "createLunarIceExtractionLaboratory",
  "source_path": "src/models/lunar_ice_extraction_laboratory.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/lunar-ice-extraction-laboratory.webp",
  "accent": "#7193b6"
};
export function createLunarIceExtractionLaboratory() { return buildRecipe({
  "title": "Lunar Ice Extraction Laboratory",
  "dimensions": [
    3.62,
    3.34,
    3.32
  ],
  "parts": [
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-lunar-cryogenic-extraction-deck",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        3.09,
        0.3,
        2.83
      ],
      "c": 7443382
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-drill-auger-mast",
      "p": [
        -0.73,
        1.37,
        0.24
      ],
      "s": [
        0.29,
        2.3,
        0.29
      ],
      "c": 14007776
    },
    {
      "t": "cone",
      "n": "lunar-ice-extraction-laboratory-polar-ice-boring-sampler",
      "p": [
        -0.73,
        0.59,
        0.24
      ],
      "s": [
        0.22,
        0.71,
        0.22
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-sealed-ice-isotope-analysis-cylinder",
      "p": [
        0.45,
        1.36,
        0
      ],
      "s": [
        1.2,
        1.87,
        1.12
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-0",
      "p": [
        0.95,
        2.14,
        0
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-1",
      "p": [
        0.833022221559489,
        2.14,
        0.3213938048432696
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-2",
      "p": [
        0.5368240888334652,
        2.14,
        0.492403876506104
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-3",
      "p": [
        0.20000000000000012,
        2.14,
        0.43301270189221935
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-4",
      "p": [
        -0.019846310392954147,
        2.14,
        0.17101007166283444
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-5",
      "p": [
        -0.019846310392954203,
        2.14,
        -0.17101007166283433
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-6",
      "p": [
        0.1999999999999998,
        2.14,
        -0.4330127018922192
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-7",
      "p": [
        0.536824088833465,
        2.14,
        -0.49240387650610407
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-cryogenic-support-truss-8",
      "p": [
        0.8330222215594889,
        2.14,
        -0.3213938048432698
      ],
      "s": [
        0.19,
        0.22,
        0.14
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-ice-sample-tank-0",
      "p": [
        -1.15,
        0.55,
        -0.79
      ],
      "s": [
        0.21,
        0.72,
        0.21
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-ice-sample-tank-1",
      "p": [
        -0.8899999999999999,
        0.55,
        -0.79
      ],
      "s": [
        0.21,
        0.72,
        0.21
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-ice-sample-tank-2",
      "p": [
        -0.6299999999999999,
        0.55,
        -0.79
      ],
      "s": [
        0.21,
        0.72,
        0.21
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-ice-sample-tank-3",
      "p": [
        -0.3699999999999999,
        0.55,
        -0.79
      ],
      "s": [
        0.21,
        0.72,
        0.21
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-ice-sample-tank-4",
      "p": [
        -0.10999999999999988,
        0.55,
        -0.79
      ],
      "s": [
        0.21,
        0.72,
        0.21
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "lunar-ice-extraction-laboratory-lunar-ice-sample-tank-5",
      "p": [
        0.15000000000000013,
        0.55,
        -0.79
      ],
      "s": [
        0.21,
        0.72,
        0.21
      ],
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "lunar-ice-extraction-laboratory-solar-powered-lunar-lab-mast",
      "from": [
        1.14,
        0.3,
        0.7
      ],
      "to": [
        1.14,
        2.58,
        0.7
      ],
      "r": 0.047,
      "c": 14007776
    },
    {
      "t": "box",
      "n": "lunar-ice-extraction-laboratory-lunar-science-instrument-console",
      "p": [
        0.45,
        1.28,
        0.68
      ],
      "s": [
        0.62,
        0.38,
        0.06
      ],
      "c": 3424606
    }
  ]
}); }
