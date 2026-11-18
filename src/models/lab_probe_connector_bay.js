import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Lab Probe Connector Bay; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "electronics.lab-probe-connector-bay.001",
  "slug": "lab-probe-connector-bay",
  "title": "Lab Probe Connector Bay",
  "title_zh": "实验室探针接口分线台",
  "summary": "Benchtop connector panel with color-coded terminals and probe rests",
  "category": "electronics",
  "tags": [
    "lab",
    "probe",
    "connector",
    "bay",
    "electronics",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.3,
    0.14,
    0.2
  ],
  "generator": "createLabProbeConnectorBay",
  "source_path": "src/models/lab_probe_connector_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/lab-probe-connector-bay.webp",
  "accent": "#60c9bb",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createLabProbeConnectorBay() { return buildRecipe({
  "title": "Lab Probe Connector Bay",
  "dimensions": [
    0.3,
    0.14,
    0.2
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "instrument-shell",
      "p": [
        0,
        0.3,
        0
      ],
      "s": [
        1.9,
        0.49,
        1.25
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-connect-panel",
      "p": [
        0,
        0.59,
        0.57
      ],
      "s": [
        1.77,
        0.28,
        0.15
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-0",
      "p": [
        -0.76,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 2503997,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-0",
      "p": [
        -0.76,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-0",
      "p": [
        -0.76,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-1",
      "p": [
        -0.57,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 13657955,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-1",
      "p": [
        -0.57,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-1",
      "p": [
        -0.57,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-2",
      "p": [
        -0.38,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 2503997,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-2",
      "p": [
        -0.38,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-2",
      "p": [
        -0.38,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-3",
      "p": [
        -0.19,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 13657955,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-3",
      "p": [
        -0.19,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-3",
      "p": [
        -0.19,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-4",
      "p": [
        0,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 2503997,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-4",
      "p": [
        0,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-4",
      "p": [
        0,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-5",
      "p": [
        0.19,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 13657955,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-5",
      "p": [
        0.19,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-5",
      "p": [
        0.19,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-6",
      "p": [
        0.38,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 2503997,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-6",
      "p": [
        0.38,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-6",
      "p": [
        0.38,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-7",
      "p": [
        0.57,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 13657955,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-7",
      "p": [
        0.57,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-7",
      "p": [
        0.57,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "insulated-terminal-8",
      "p": [
        0.76,
        0.66,
        0.65
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 2503997,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "contact-8",
      "p": [
        0.76,
        0.67,
        0.74
      ],
      "s": [
        0.054,
        0.07,
        0.054
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "port-label-8",
      "p": [
        0.76,
        0.46,
        0.67
      ],
      "s": [
        0.13,
        0.042,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "probe-hanger--1",
      "from": [
        -0.75,
        0.49,
        -0.36
      ],
      "to": [
        -0.75,
        1.29,
        -0.36
      ],
      "r": 0.043,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "protected-end--1",
      "p": [
        -0.75,
        1.33,
        -0.36
      ],
      "s": [
        0.18,
        0.18,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "probe-hanger-1",
      "from": [
        0.75,
        0.49,
        -0.36
      ],
      "to": [
        0.75,
        1.29,
        -0.36
      ],
      "r": 0.043,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "protected-end-1",
      "p": [
        0.75,
        1.33,
        -0.36
      ],
      "s": [
        0.18,
        0.18,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-0",
      "p": [
        -0.69,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-1",
      "p": [
        -0.5,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-2",
      "p": [
        -0.31,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-3",
      "p": [
        -0.12,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-4",
      "p": [
        0.07,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-5",
      "p": [
        0.26,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-6",
      "p": [
        0.45,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-grommet-7",
      "p": [
        0.64,
        0.35,
        -0.61
      ],
      "s": [
        0.11,
        0.13,
        0.05
      ],
      "c": 2372666,
      "finish": "rubber"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
