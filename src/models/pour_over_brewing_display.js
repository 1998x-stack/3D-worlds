import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Pour-Over Brewing Display. 滤杯、环形支架、玻璃杯、滴液刻度. Not physically print-tested. */
export const assetMeta = {
  "id": "kitchen.pour-over-brewing-display.001",
  "slug": "pour-over-brewing-display",
  "title": "Pour-Over Brewing Display",
  "title_zh": "手冲咖啡展示组件",
  "summary": "Stylized non-food-contact pour-over station scene with dripper, cup and height gauge",
  "category": "kitchen",
  "tags": [
    "pour",
    "over",
    "brewing",
    "display",
    "kitchen",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.25,
    0.32,
    0.22
  ],
  "generator": "createPourOverBrewingDisplay",
  "source_path": "src/models/pour_over_brewing_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/pour-over-brewing-display.webp",
  "accent": "#b7a38b",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createPourOverBrewingDisplay() {
  return buildMarketV15({
  "title": "Pour-Over Brewing Display",
  "dimensions": [
    0.25,
    0.32,
    0.22
  ],
  "accent": "#b7a38b",
  "body": [
    [
      "box",
      "base",
      [
        0,
        0.08,
        0
      ],
      [
        1.45,
        0.16,
        1.22
      ],
      "wood",
      "matte",
      null
    ],
    [
      "box",
      "mast",
      [
        -0.52,
        1.07,
        -0.3
      ],
      [
        0.1,
        1.98,
        0.11
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cone",
      "drip-hopper",
      [
        0,
        1.58,
        0
      ],
      [
        0.88,
        0.66,
        0.85
      ],
      "primary",
      "ceramic",
      [
        3.141592653589793,
        0,
        0
      ]
    ],
    [
      "torus",
      "ring-holder",
      [
        0,
        1.4,
        0
      ],
      [
        1.06,
        0.09,
        1.06
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "glass-cup",
      [
        0,
        0.4,
        0.08
      ],
      [
        0.73,
        0.7,
        0.72
      ],
      "light",
      "glass",
      null
    ],
    [
      "torus",
      "cup-handle",
      [
        0.48,
        0.43,
        0.11
      ],
      [
        0.35,
        0.35,
        0.13
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "cylinder",
      "top-stop",
      [
        -0.52,
        2.1,
        -0.3
      ],
      [
        0.24,
        0.13,
        0.24
      ],
      "secondary",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "height-tick",
      "t": "box",
      "count": 9,
      "o": [
        -0.46,
        0.27,
        -0.25
      ],
      "d": [
        0,
        0.18,
        0
      ],
      "s": [
        0.11,
        0.025,
        0.04
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "dripper-flute",
      "t": "box",
      "count": 10,
      "o": [
        0,
        1.65,
        0
      ],
      "r": 0.35,
      "s": [
        0.045,
        0.34,
        0.06
      ],
      "c": "secondary",
      "f": "matte"
    }
  ]
});
}
