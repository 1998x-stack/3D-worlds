import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Solar Campus Delivery Trike. 前独轮、后双轮、货箱格栅、车顶太阳能片. Not physically print-tested. */
export const assetMeta = {
  "id": "vehicles.solar-campus-delivery-trike.001",
  "slug": "solar-campus-delivery-trike",
  "title": "Solar Campus Delivery Trike",
  "title_zh": "太阳能校园配送三轮车",
  "summary": "Utility cargo trike scene with rear loading basket, three wheels and canopy solar tiles",
  "category": "vehicles",
  "tags": [
    "solar",
    "campus",
    "delivery",
    "trike",
    "vehicles",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.36,
    0.3,
    0.25
  ],
  "generator": "createSolarCampusDeliveryTrike",
  "source_path": "src/models/solar_campus_delivery_trike.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/solar-campus-delivery-trike.webp",
  "accent": "#e3b069",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createSolarCampusDeliveryTrike() {
  return buildMarketV15({
  "title": "Solar Campus Delivery Trike",
  "dimensions": [
    0.36,
    0.3,
    0.25
  ],
  "accent": "#e3b069",
  "body": [
    [
      "box",
      "chassis",
      [
        0,
        0.43,
        0
      ],
      [
        1.9,
        0.2,
        0.56
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "front-wheel",
      [
        -0.88,
        0.26,
        0
      ],
      [
        0.43,
        0.18,
        0.43
      ],
      "dark",
      "rubber",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "cylinder",
      "rear-left-wheel",
      [
        0.75,
        0.25,
        -0.48
      ],
      [
        0.43,
        0.18,
        0.43
      ],
      "dark",
      "rubber",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "cylinder",
      "rear-right-wheel",
      [
        0.75,
        0.25,
        0.48
      ],
      [
        0.43,
        0.18,
        0.43
      ],
      "dark",
      "rubber",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "box",
      "cargo-basket",
      [
        0.38,
        0.82,
        0
      ],
      [
        1,
        0.68,
        0.86
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "solar-roof",
      [
        0.22,
        1.85,
        0
      ],
      [
        1.66,
        0.06,
        1.12
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "rod",
      "front-steerer",
      [
        -0.82,
        0.45,
        0
      ],
      [
        -0.71,
        1.34,
        0
      ],
      0.055,
      "metal"
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "basket-mesh",
      "t": "box",
      "count": 8,
      "o": [
        -0.05,
        0.78,
        0.45
      ],
      "d": [
        0.12,
        0,
        0
      ],
      "s": [
        0.035,
        0.48,
        0.025
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "solar-cell",
      "t": "box",
      "count": 7,
      "o": [
        -0.49,
        1.89,
        0.13
      ],
      "d": [
        0.22,
        0,
        0
      ],
      "s": [
        0.18,
        0.02,
        0.7
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "roof-support",
      "t": "box",
      "count": 4,
      "o": [
        -0.48,
        1.25,
        -0.39
      ],
      "d": [
        0.34,
        0,
        0.26
      ],
      "s": [
        0.035,
        1.04,
        0.035
      ],
      "c": "metal",
      "f": "matte"
    }
  ]
});
}
