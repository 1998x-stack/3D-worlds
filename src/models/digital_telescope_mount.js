import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Digital Telescope Mount / 数控望远镜赤道仪. */
export const assetMeta = {
  "id": "electronics.digital-telescope-mount.001",
  "slug": "digital-telescope-mount",
  "title": "Digital Telescope Mount",
  "title_zh": "数控望远镜赤道仪",
  "summary": "Motorized astronomy telescope tracking mount with counterweight and tripod",
  "category": "electronics",
  "tags": [
    "digital",
    "telescope",
    "mount",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.35,
    1.95,
    1.15
  ],
  "generator": "createDigitalTelescopeMount",
  "source_path": "src/models/digital_telescope_mount.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/digital-telescope-mount.webp",
  "accent": "#a6b6bd"
};
export function createDigitalTelescopeMount() { return buildRecipe({
  "title": "Digital Telescope Mount",
  "dimensions": [
    1.35,
    1.95,
    1.15
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "equatorial-gear-head",
      "p": [
        0,
        1.22,
        0
      ],
      "s": [
        0.43,
        0.54,
        0.43
      ],
      "c": 3688798
    },
    {
      "t": "rod",
      "n": "telescope-tripod-leg-0",
      "from": [
        0,
        1.04,
        0
      ],
      "to": [
        0.7,
        0.04,
        0
      ],
      "r": 0.049,
      "c": 10925757
    },
    {
      "t": "rod",
      "n": "telescope-tripod-leg-1",
      "from": [
        0,
        1.04,
        0
      ],
      "to": [
        -0.3499999999999998,
        0.04,
        0.6062177826491071
      ],
      "r": 0.049,
      "c": 10925757
    },
    {
      "t": "rod",
      "n": "telescope-tripod-leg-2",
      "from": [
        0,
        1.04,
        0
      ],
      "to": [
        -0.3500000000000003,
        0.04,
        -0.6062177826491069
      ],
      "r": 0.049,
      "c": 10925757
    },
    {
      "t": "cylinder",
      "n": "optical-telescope-tube",
      "p": [
        0.3,
        1.54,
        0.04
      ],
      "s": [
        0.39,
        1.36,
        0.39
      ],
      "c": 1386806,
      "rot": [
        0.71,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "front-lens",
      "p": [
        0.8,
        1.69,
        0.16
      ],
      "s": [
        0.48,
        0.11,
        0.48
      ],
      "c": 9552063,
      "rot": [
        0.71,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "balanced-counterweight-shaft",
      "from": [
        0,
        1.26,
        -0.03
      ],
      "to": [
        -0.78,
        1.14,
        -0.03
      ],
      "r": 0.07,
      "c": 9552063
    },
    {
      "t": "sphere",
      "n": "counterweight-mass",
      "p": [
        -0.78,
        1.14,
        -0.03
      ],
      "s": [
        0.33,
        0.34,
        0.33
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "astro-motor-drive",
      "p": [
        0.17,
        1,
        0.3
      ],
      "s": [
        0.31,
        0.33,
        0.28
      ],
      "c": 3688798
    },
    {
      "t": "box",
      "n": "telescope-electronic-control",
      "p": [
        -0.15,
        0.96,
        0.26
      ],
      "s": [
        0.22,
        0.18,
        0.06
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "mount-button-0",
      "p": [
        -0.25,
        1.01,
        0.31
      ],
      "s": [
        0.025,
        0.016,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "mount-button-1",
      "p": [
        -0.21,
        1.01,
        0.31
      ],
      "s": [
        0.025,
        0.016,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "mount-button-2",
      "p": [
        -0.16999999999999998,
        1.01,
        0.31
      ],
      "s": [
        0.025,
        0.016,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "mount-button-3",
      "p": [
        -0.13,
        1.01,
        0.31
      ],
      "s": [
        0.025,
        0.016,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "mount-button-4",
      "p": [
        -0.09,
        1.01,
        0.31
      ],
      "s": [
        0.025,
        0.016,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "mount-button-5",
      "p": [
        -0.04999999999999999,
        1.01,
        0.31
      ],
      "s": [
        0.025,
        0.016,
        0.01
      ],
      "c": 9552063
    }
  ]
}); }
