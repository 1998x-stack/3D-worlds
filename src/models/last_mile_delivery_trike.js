import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Last Mile Delivery Trike; stylized visual prototype only. */
export const assetMeta = {
  "id": "vehicles.last-mile-delivery-trike.001",
  "slug": "last-mile-delivery-trike",
  "title": "Last Mile Delivery Trike",
  "title_zh": "末端配送三轮车",
  "summary": "Original last mile delivery trike study with wheels and crate assemblies and individually named functional details",
  "category": "vehicles",
  "tags": [
    "last",
    "mile",
    "delivery",
    "trike",
    "vehicles",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.39,
    0.24,
    0.22
  ],
  "generator": "createLastMileDeliveryTrike",
  "source_path": "src/models/last_mile_delivery_trike.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/last-mile-delivery-trike.webp",
  "accent": "#e1ad60",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createLastMileDeliveryTrike() { return buildRecipe({
  "title": "Last Mile Delivery Trike",
  "dimensions": [
    0.39,
    0.24,
    0.22
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 6850734,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 14789984,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-0",
      "p": [
        -0.62,
        0.39,
        0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-0",
      "p": [
        -0.62,
        0.39,
        0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-1",
      "p": [
        -0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-1",
      "p": [
        -0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-2",
      "p": [
        0.62,
        0.39,
        0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-2",
      "p": [
        0.62,
        0.39,
        0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-3",
      "p": [
        0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-3",
      "p": [
        0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "wheels-0-chassis",
      "p": [
        0,
        0.61,
        0
      ],
      "s": [
        1.79,
        0.26,
        0.95
      ],
      "c": 6850734,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-bin",
      "p": [
        0.13,
        1.13,
        0
      ],
      "s": [
        1.25,
        0.7,
        0.9
      ],
      "c": 14789984,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-0",
      "p": [
        -0.41,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-1",
      "p": [
        -0.29,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-2",
      "p": [
        -0.16999999999999998,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-3",
      "p": [
        -0.04999999999999999,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-4",
      "p": [
        0.07,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-5",
      "p": [
        0.19,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-6",
      "p": [
        0.31,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-7",
      "p": [
        0.43,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-8",
      "p": [
        0.55,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "crate-1-cargo-slat-9",
      "p": [
        0.6700000000000002,
        1.21,
        0.47
      ],
      "s": [
        0.055,
        0.52,
        0.07
      ],
      "c": 2569280,
      "finish": "matte"
    }
  ]
}); }
