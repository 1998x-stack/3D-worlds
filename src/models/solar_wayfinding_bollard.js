import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Solar Wayfinding Bollard. 导向箭头、太阳能冠盖、反光圈和螺栓脚座. Not physically print-tested. */
export const assetMeta = {
  "id": "urban.solar-wayfinding-bollard.001",
  "slug": "solar-wayfinding-bollard",
  "title": "Solar Wayfinding Bollard",
  "title_zh": "太阳能导视路桩",
  "summary": "Low-energy-looking street orientation beacon with directional arrows and solar panel cap",
  "category": "urban",
  "tags": [
    "solar",
    "wayfinding",
    "bollard",
    "urban",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.15,
    0.4,
    0.16
  ],
  "generator": "createSolarWayfindingBollard",
  "source_path": "src/models/solar_wayfinding_bollard.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/solar-wayfinding-bollard.webp",
  "accent": "#9baed8",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createSolarWayfindingBollard() {
  return buildMarketV15({
  "title": "Solar Wayfinding Bollard",
  "dimensions": [
    0.15,
    0.4,
    0.16
  ],
  "accent": "#9baed8",
  "body": [
    [
      "box",
      "plinth",
      [
        0,
        0.1,
        0
      ],
      [
        1.06,
        0.2,
        1
      ],
      "stone",
      "matte",
      null
    ],
    [
      "rounded-box",
      "shaft",
      [
        0,
        1.21,
        0
      ],
      [
        0.46,
        2.2,
        0.44
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "solar-cap",
      [
        0,
        2.35,
        0
      ],
      [
        0.86,
        0.16,
        0.87
      ],
      "dark",
      "matte",
      null
    ],
    [
      "box",
      "north-arrow",
      [
        0,
        1.88,
        0.27
      ],
      [
        0.61,
        0.18,
        0.05
      ],
      "light",
      "matte",
      null
    ],
    [
      "box",
      "east-arrow",
      [
        0.23,
        1.54,
        0
      ],
      [
        0.07,
        0.17,
        0.62
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "torus",
      "reflector-band",
      [
        0,
        0.55,
        0
      ],
      [
        0.58,
        0.1,
        0.58
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "service-door",
      [
        0,
        0.91,
        0.24
      ],
      [
        0.31,
        0.4,
        0.045
      ],
      "metal",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "photovoltaic-cell",
      "t": "box",
      "count": 7,
      "o": [
        -0.32,
        2.44,
        0
      ],
      "d": [
        0.11,
        0,
        0
      ],
      "s": [
        0.08,
        0.025,
        0.63
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "distance-tick",
      "t": "box",
      "count": 8,
      "o": [
        -0.21,
        1.11,
        0.26
      ],
      "d": [
        0.06,
        0,
        0
      ],
      "s": [
        0.04,
        0.07,
        0.02
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "bolt-foot",
      "t": "cylinder",
      "count": 4,
      "o": [
        0,
        0.16,
        0
      ],
      "r": 0.42,
      "s": [
        0.09,
        0.06,
        0.09
      ],
      "c": "metal",
      "f": "matte"
    }
  ]
});
}
