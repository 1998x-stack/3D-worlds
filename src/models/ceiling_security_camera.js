import { buildRecipe } from './recipe_engine.js';
/** Ceiling Security Camera: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "electronics.ceiling-security-camera.001",
  "slug": "ceiling-security-camera",
  "title": "Ceiling Security Camera",
  "title_zh": "吊顶半球监控摄像机",
  "summary": "Ceiling-mounted dome camera with black lens, rotating hood and indicator light.",
  "category": "electronics",
  "tags": [
    "camera",
    "security",
    "surveillance",
    "electronics"
  ],
  "dimensions_m": [
    0.29,
    0.2,
    0.29
  ],
  "generator": "createCeilingSecurityCamera",
  "source_path": "src/models/ceiling_security_camera.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/ceiling-security-camera.webp"
};
export function createCeilingSecurityCamera() {
  return buildRecipe({
  "title": "Ceiling Security Camera",
  "dimensions": [
    0.29,
    0.2,
    0.29
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "mounting-ring",
      "p": [
        0,
        0.175,
        0
      ],
      "s": [
        0.29,
        0.052,
        0.29
      ],
      "c": 15197657
    },
    {
      "t": "sphere",
      "n": "dome-body",
      "p": [
        0,
        0.097,
        0
      ],
      "s": [
        0.26,
        0.18,
        0.26
      ],
      "c": 8820381
    },
    {
      "t": "sphere",
      "n": "smoked-hemisphere",
      "p": [
        0,
        0.064,
        0.024
      ],
      "s": [
        0.21,
        0.11,
        0.2
      ],
      "c": 3291196
    },
    {
      "t": "cylinder",
      "n": "lens-housing",
      "p": [
        0,
        0.07,
        0.105
      ],
      "s": [
        0.105,
        0.04,
        0.105
      ],
      "c": 8820381,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "glass-lens",
      "p": [
        0,
        0.073,
        0.14
      ],
      "s": [
        0.055,
        0.05,
        0.015
      ],
      "c": 2379369
    },
    {
      "t": "torus",
      "n": "seal-gasket",
      "p": [
        0,
        0.157,
        0
      ],
      "s": [
        0.4,
        0.4,
        0.4
      ],
      "c": 3291196,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "record-indicator",
      "p": [
        0.092,
        0.09,
        0.122
      ],
      "s": [
        0.012,
        0.012,
        0.01
      ],
      "c": 10209445
    },
    {
      "t": "cylinder",
      "n": "mount-screw-0",
      "p": [
        0.12,
        0.199,
        0
      ],
      "s": [
        0.018,
        0.011,
        0.018
      ],
      "c": 3291196
    },
    {
      "t": "cylinder",
      "n": "mount-screw-1",
      "p": [
        -0.05999999999999997,
        0.199,
        0.10392304845413264
      ],
      "s": [
        0.018,
        0.011,
        0.018
      ],
      "c": 3291196
    },
    {
      "t": "cylinder",
      "n": "mount-screw-2",
      "p": [
        -0.06000000000000005,
        0.199,
        -0.1039230484541326
      ],
      "s": [
        0.018,
        0.011,
        0.018
      ],
      "c": 3291196
    }
  ]
});
}
