import { buildRecipe } from './recipe_engine.js';
/** Electronics Soldering Rework Station / 电子焊接返修工作站: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "tools.electronics-soldering-rework-station.001",
  "slug": "electronics-soldering-rework-station",
  "title": "Electronics Soldering Rework Station",
  "title_zh": "电子焊接返修工作站",
  "summary": "Electronics workbench with soldering iron, hot-air tool, holder and PCB vise",
  "category": "tools",
  "tags": [
    "electronics",
    "soldering",
    "rework",
    "station",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.12,
    0.86,
    0.75
  ],
  "generator": "createElectronicsSolderingReworkStation",
  "source_path": "src/models/electronics_soldering_rework_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/electronics-soldering-rework-station.webp",
  "accent": "#283c4d"
};
export function createElectronicsSolderingReworkStation() { return buildRecipe({
  "title": "Electronics Soldering Rework Station",
  "dimensions": [
    1.12,
    0.86,
    0.75
  ],
  "parts": [
    {
      "t": "box",
      "n": "anti-static-work-surface",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1,
        0.12,
        0.62
      ],
      "c": 7834257
    },
    {
      "t": "box",
      "n": "rework-controller",
      "p": [
        -0.24,
        0.36,
        -0.16
      ],
      "s": [
        0.34,
        0.27,
        0.24
      ],
      "c": 15842648
    },
    {
      "t": "rod",
      "n": "soldering-iron-cable",
      "from": [
        -0.3,
        0.34,
        -0.05
      ],
      "to": [
        0.24,
        0.22,
        0.27
      ],
      "r": 0.015,
      "c": 2636877
    },
    {
      "t": "rod",
      "n": "soldering-iron",
      "from": [
        0.24,
        0.22,
        0.27
      ],
      "to": [
        0.51,
        0.29,
        0.31
      ],
      "r": 0.027,
      "c": 12699338
    },
    {
      "t": "rod",
      "n": "hot-air-nozzle",
      "from": [
        0.38,
        0.49,
        -0.13
      ],
      "to": [
        0.54,
        0.2,
        -0.18
      ],
      "r": 0.045,
      "c": 12699338
    },
    {
      "t": "box",
      "n": "pcb-vise",
      "p": [
        -0.03,
        0.24,
        0.13
      ],
      "s": [
        0.36,
        0.07,
        0.28
      ],
      "c": 2636877
    },
    {
      "t": "box",
      "n": "pcb-component-0",
      "p": [
        -0.16,
        0.3,
        0.05
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-1",
      "p": [
        -0.095,
        0.3,
        0.05
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-2",
      "p": [
        -0.03,
        0.3,
        0.05
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-3",
      "p": [
        0.035,
        0.3,
        0.05
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-4",
      "p": [
        0.1,
        0.3,
        0.05
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-5",
      "p": [
        -0.16,
        0.3,
        0.15000000000000002
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-6",
      "p": [
        -0.095,
        0.3,
        0.15000000000000002
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-7",
      "p": [
        -0.03,
        0.3,
        0.15000000000000002
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-8",
      "p": [
        0.035,
        0.3,
        0.15000000000000002
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "box",
      "n": "pcb-component-9",
      "p": [
        0.1,
        0.3,
        0.15000000000000002
      ],
      "s": [
        0.045,
        0.035,
        0.045
      ],
      "c": 15842648
    },
    {
      "t": "cylinder",
      "n": "fume-extraction-fan",
      "p": [
        0.35,
        0.61,
        -0.2
      ],
      "s": [
        0.28,
        0.15,
        0.28
      ],
      "c": 12699338,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
