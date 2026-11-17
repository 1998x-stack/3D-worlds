import { buildRecipe } from './recipe_engine.js';
/** Mossy Fallen Log: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "nature.mossy-fallen-log.001",
  "slug": "mossy-fallen-log",
  "title": "Mossy Fallen Log",
  "title_zh": "苔藓倒木",
  "summary": "Rotated fallen trunk with bark bands, exposed cut ends and moss islands.",
  "category": "nature",
  "tags": [
    "fallen",
    "log",
    "forest",
    "moss"
  ],
  "dimensions_m": [
    2.07,
    0.66,
    0.72
  ],
  "generator": "createMossyFallenLog",
  "source_path": "src/models/mossy_fallen_log.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/mossy-fallen-log.webp"
};
export function createMossyFallenLog() {
  return buildRecipe({
  "title": "Mossy Fallen Log",
  "dimensions": [
    2.07,
    0.66,
    0.72
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "fallen-trunk",
      "p": [
        0,
        0.27,
        0
      ],
      "s": [
        0.54,
        1.95,
        0.54
      ],
      "c": 9531474,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cut-ring-0",
      "p": [
        -0.91,
        0.27,
        0
      ],
      "s": [
        0.51,
        0.055,
        0.51
      ],
      "c": 13151102,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cut-ring-1",
      "p": [
        0.91,
        0.27,
        0
      ],
      "s": [
        0.51,
        0.055,
        0.51
      ],
      "c": 13151102,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "torus",
      "n": "bark-ring-0",
      "p": [
        -0.7,
        0.27,
        0
      ],
      "s": [
        0.72,
        0.72,
        0.72
      ],
      "c": 7557689,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "bark-ring-1",
      "p": [
        -0.35,
        0.27,
        0
      ],
      "s": [
        0.72,
        0.72,
        0.72
      ],
      "c": 6768946,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "bark-ring-2",
      "p": [
        0,
        0.27,
        0
      ],
      "s": [
        0.72,
        0.72,
        0.72
      ],
      "c": 7557689,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "bark-ring-3",
      "p": [
        0.34999999999999987,
        0.27,
        0
      ],
      "s": [
        0.72,
        0.72,
        0.72
      ],
      "c": 6768946,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "bark-ring-4",
      "p": [
        0.7,
        0.27,
        0
      ],
      "s": [
        0.72,
        0.72,
        0.72
      ],
      "c": 7557689,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "moss-tuft-0",
      "p": [
        -0.75,
        0.48,
        -0.09
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 6658147
    },
    {
      "t": "sphere",
      "n": "moss-tuft-1",
      "p": [
        -0.51,
        0.516,
        0
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 5013589
    },
    {
      "t": "sphere",
      "n": "moss-tuft-2",
      "p": [
        -0.27,
        0.48,
        0.09
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 6658147
    },
    {
      "t": "sphere",
      "n": "moss-tuft-3",
      "p": [
        -0.030000000000000027,
        0.516,
        -0.09
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 5013589
    },
    {
      "t": "sphere",
      "n": "moss-tuft-4",
      "p": [
        0.20999999999999996,
        0.48,
        0
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 6658147
    },
    {
      "t": "sphere",
      "n": "moss-tuft-5",
      "p": [
        0.44999999999999996,
        0.516,
        0.09
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 5013589
    },
    {
      "t": "sphere",
      "n": "moss-tuft-6",
      "p": [
        0.69,
        0.48,
        -0.09
      ],
      "s": [
        0.17,
        0.08,
        0.16
      ],
      "c": 6658147
    },
    {
      "t": "sphere",
      "n": "shelf-fungus-0",
      "p": [
        -0.48,
        0.38,
        0.25
      ],
      "s": [
        0.16,
        0.045,
        0.11
      ],
      "c": 13879205
    },
    {
      "t": "sphere",
      "n": "shelf-fungus-1",
      "p": [
        0.56,
        0.38,
        0.25
      ],
      "s": [
        0.16,
        0.045,
        0.11
      ],
      "c": 13879205
    },
    {
      "t": "rod",
      "n": "small-branch",
      "from": [
        0.31,
        0.24,
        -0.15
      ],
      "to": [
        0.67,
        0.61,
        -0.39
      ],
      "r": 0.036,
      "c": 9531474
    }
  ]
});
}
