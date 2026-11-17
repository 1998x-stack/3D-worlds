import { buildRecipe } from './recipe_engine.js';
/** Triple Mirror Medicine Cabinet — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "bathroom.triple-mirror-medicine-cabinet.001",
  "slug": "triple-mirror-medicine-cabinet",
  "title": "Triple Mirror Medicine Cabinet",
  "title_zh": "三门镜面药柜",
  "summary": "Wall medicine cabinet with three mirrored doors, shelf insets and side pull tabs",
  "category": "bathroom",
  "tags": [
    "medicine",
    "cabinet",
    "storage"
  ],
  "dimensions_m": [
    0.88,
    0.67,
    0.19
  ],
  "generator": "createTripleMirrorMedicineCabinet",
  "source_path": "src/models/triple_mirror_medicine_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/triple-mirror-medicine-cabinet.webp"
};
export function createTripleMirrorMedicineCabinet() { return buildRecipe({
  "title": "Triple Mirror Medicine Cabinet",
  "dimensions": [
    0.88,
    0.67,
    0.19
  ],
  "parts": [
    {
      "t": "box",
      "n": "cabinet-body",
      "p": [
        0,
        0.34,
        -0.02
      ],
      "s": [
        0.87,
        0.66,
        0.16
      ],
      "c": 13094347
    },
    {
      "t": "box",
      "n": "mirror-door-0",
      "p": [
        -0.28,
        0.34,
        0.07
      ],
      "s": [
        0.27,
        0.61,
        0.036
      ],
      "c": 7315374
    },
    {
      "t": "box",
      "n": "mirror-trim-0",
      "p": [
        -0.28,
        0.34,
        0.095
      ],
      "s": [
        0.255,
        0.59,
        0.014
      ],
      "c": 12243149
    },
    {
      "t": "box",
      "n": "handle-0",
      "p": [
        -0.18000000000000002,
        0.35,
        0.11
      ],
      "s": [
        0.024,
        0.13,
        0.02
      ],
      "c": 12755572
    },
    {
      "t": "box",
      "n": "internal-shelf-0",
      "p": [
        -0.28,
        0.2,
        -0.03
      ],
      "s": [
        0.24,
        0.018,
        0.13
      ],
      "c": 15263196
    },
    {
      "t": "box",
      "n": "mirror-door-1",
      "p": [
        0,
        0.34,
        0.07
      ],
      "s": [
        0.27,
        0.61,
        0.036
      ],
      "c": 7315374
    },
    {
      "t": "box",
      "n": "mirror-trim-1",
      "p": [
        0,
        0.34,
        0.095
      ],
      "s": [
        0.255,
        0.59,
        0.014
      ],
      "c": 12243149
    },
    {
      "t": "box",
      "n": "handle-1",
      "p": [
        0.1,
        0.35,
        0.11
      ],
      "s": [
        0.024,
        0.13,
        0.02
      ],
      "c": 12755572
    },
    {
      "t": "box",
      "n": "internal-shelf-1",
      "p": [
        0,
        0.2,
        -0.03
      ],
      "s": [
        0.24,
        0.018,
        0.13
      ],
      "c": 15263196
    },
    {
      "t": "box",
      "n": "mirror-door-2",
      "p": [
        0.28,
        0.34,
        0.07
      ],
      "s": [
        0.27,
        0.61,
        0.036
      ],
      "c": 7315374
    },
    {
      "t": "box",
      "n": "mirror-trim-2",
      "p": [
        0.28,
        0.34,
        0.095
      ],
      "s": [
        0.255,
        0.59,
        0.014
      ],
      "c": 12243149
    },
    {
      "t": "box",
      "n": "handle-2",
      "p": [
        0.38,
        0.35,
        0.11
      ],
      "s": [
        0.024,
        0.13,
        0.02
      ],
      "c": 12755572
    },
    {
      "t": "box",
      "n": "internal-shelf-2",
      "p": [
        0.28,
        0.2,
        -0.03
      ],
      "s": [
        0.24,
        0.018,
        0.13
      ],
      "c": 15263196
    },
    {
      "t": "box",
      "n": "upper-cap",
      "p": [
        0,
        0.665,
        0
      ],
      "s": [
        0.89,
        0.025,
        0.19
      ],
      "c": 9149339
    },
    {
      "t": "box",
      "n": "sconce-0",
      "p": [
        -0.34,
        0.69,
        0.12
      ],
      "s": [
        0.09,
        0.11,
        0.05
      ],
      "c": 15325104
    },
    {
      "t": "box",
      "n": "sconce-1",
      "p": [
        0.34,
        0.69,
        0.12
      ],
      "s": [
        0.09,
        0.11,
        0.05
      ],
      "c": 15325104
    }
  ]
}); }
