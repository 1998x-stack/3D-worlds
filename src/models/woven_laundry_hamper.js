import { buildRecipe } from './recipe_engine.js';

/** Original authored Woven Laundry Hamper / 藤编洗衣篮; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "bathroom.woven-laundry-hamper.001",
  "slug": "woven-laundry-hamper",
  "title": "Woven Laundry Hamper",
  "title_zh": "藤编洗衣篮",
  "summary": "Cylindrical wicker hamper with repeated woven bands, soft lid and side grips.",
  "category": "bathroom",
  "tags": [
    "laundry",
    "basket",
    "wicker",
    "bathroom"
  ],
  "dimensions_m": [
    0.49,
    0.74,
    0.49
  ],
  "generator": "createWovenLaundryHamper",
  "source_path": "src/models/woven_laundry_hamper.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/woven-laundry-hamper.webp"
};
export function createWovenLaundryHamper() {
  return buildRecipe({
  "title": "Woven Laundry Hamper",
  "dimensions": [
    0.49,
    0.74,
    0.49
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "inner-container",
      "p": [
        0,
        0.37,
        0
      ],
      "s": [
        0.43,
        0.7,
        0.43
      ],
      "c": 11965552
    },
    {
      "t": "torus",
      "n": "horizontal-weave-0",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 9728847,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "horizontal-weave-1",
      "p": [
        0,
        0.195,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 12029286,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "horizontal-weave-2",
      "p": [
        0,
        0.28,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 9728847,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "horizontal-weave-3",
      "p": [
        0,
        0.365,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 12029286,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "horizontal-weave-4",
      "p": [
        0,
        0.45,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 9728847,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "horizontal-weave-5",
      "p": [
        0,
        0.535,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 12029286,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "horizontal-weave-6",
      "p": [
        0,
        0.62,
        0
      ],
      "s": [
        0.65,
        0.65,
        0.65
      ],
      "c": 9728847,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "vertical-wicker-0",
      "from": [
        0.205,
        0.04,
        0
      ],
      "to": [
        0.205,
        0.7,
        0
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-1",
      "from": [
        0.14495689014324226,
        0.04,
        0.14495689014324223
      ],
      "to": [
        0.14495689014324226,
        0.7,
        0.14495689014324223
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-2",
      "from": [
        1.255262969126037e-17,
        0.04,
        0.205
      ],
      "to": [
        1.255262969126037e-17,
        0.7,
        0.205
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-3",
      "from": [
        -0.14495689014324223,
        0.04,
        0.14495689014324226
      ],
      "to": [
        -0.14495689014324223,
        0.7,
        0.14495689014324226
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-4",
      "from": [
        -0.205,
        0.04,
        2.510525938252074e-17
      ],
      "to": [
        -0.205,
        0.7,
        2.510525938252074e-17
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-5",
      "from": [
        -0.14495689014324226,
        0.04,
        -0.14495689014324223
      ],
      "to": [
        -0.14495689014324226,
        0.7,
        -0.14495689014324223
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-6",
      "from": [
        -3.765788907378111e-17,
        0.04,
        -0.205
      ],
      "to": [
        -3.765788907378111e-17,
        0.7,
        -0.205
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "rod",
      "n": "vertical-wicker-7",
      "from": [
        0.1449568901432422,
        0.04,
        -0.14495689014324226
      ],
      "to": [
        0.1449568901432422,
        0.7,
        -0.14495689014324226
      ],
      "r": 0.015,
      "c": 10318932
    },
    {
      "t": "cylinder",
      "n": "linen-lid",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        0.49,
        0.05,
        0.49
      ],
      "c": 14407369
    },
    {
      "t": "box",
      "n": "lid-handle",
      "p": [
        0,
        0.74,
        0
      ],
      "s": [
        0.17,
        0.033,
        0.052
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "basket-grip-0",
      "p": [
        -0.245,
        0.55,
        0
      ],
      "s": [
        0.035,
        0.1,
        0.15
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "basket-grip-1",
      "p": [
        0.245,
        0.55,
        0
      ],
      "s": [
        0.035,
        0.1,
        0.15
      ],
      "c": 3422268
    }
  ]
});
}
