import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Bike Repair Street Station. 轮托、气泵、工具挂点、维修指示牌. Not physically print-tested. */
export const assetMeta = {
  "id": "urban.bike-repair-street-station.001",
  "slug": "bike-repair-street-station",
  "title": "Bike Repair Street Station",
  "title_zh": "城市自行车修理站",
  "summary": "Streetside DIY bike service pillar with tethered tool silhouettes and pump",
  "category": "urban",
  "tags": [
    "bike",
    "repair",
    "street",
    "station",
    "urban",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.24,
    0.36,
    0.22
  ],
  "generator": "createBikeRepairStreetStation",
  "source_path": "src/models/bike_repair_street_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/bike-repair-street-station.webp",
  "accent": "#83b0a3",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createBikeRepairStreetStation() {
  return buildMarketV15({
  "title": "Bike Repair Street Station",
  "dimensions": [
    0.24,
    0.36,
    0.22
  ],
  "accent": "#83b0a3",
  "body": [
    [
      "box",
      "ground",
      [
        0,
        0.06,
        0
      ],
      [
        1.46,
        0.12,
        1.25
      ],
      "stone",
      "matte",
      null
    ],
    [
      "rounded-box",
      "service-mast",
      [
        0,
        1.1,
        -0.2
      ],
      [
        0.38,
        1.9,
        0.43
      ],
      "primary",
      "matte",
      null
    ],
    [
      "cylinder",
      "pump-body",
      [
        -0.44,
        0.8,
        0.27
      ],
      [
        0.17,
        1.21,
        0.17
      ],
      "metal",
      "matte",
      null
    ],
    [
      "torus",
      "air-hose",
      [
        0.43,
        0.72,
        0.18
      ],
      [
        0.52,
        0.68,
        0.16
      ],
      "dark",
      "matte",
      null
    ],
    [
      "box",
      "bike-wheel-cradle",
      [
        0,
        0.18,
        0.36
      ],
      [
        0.82,
        0.24,
        0.22
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "service-placard",
      [
        0,
        2.09,
        -0.14
      ],
      [
        0.7,
        0.48,
        0.2
      ],
      "light",
      "matte",
      null
    ],
    [
      "sphere",
      "service-status",
      [
        0,
        2.22,
        0.01
      ],
      [
        0.12,
        0.12,
        0.04
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "tool-hook",
      "t": "rod",
      "count": 5,
      "o": [
        -0.17,
        1.52,
        0.12
      ],
      "d": [
        0.085,
        -0.18,
        0
      ],
      "s": [
        0.1,
        0.15,
        0.06
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "instruction-line",
      "t": "box",
      "count": 7,
      "o": [
        -0.23,
        2.05,
        -0.02
      ],
      "d": [
        0.075,
        0,
        0
      ],
      "s": [
        0.045,
        0.026,
        0.02
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "anti-slip",
      "t": "box",
      "count": 8,
      "o": [
        -0.54,
        0.13,
        0.42
      ],
      "d": [
        0.15,
        0,
        0
      ],
      "s": [
        0.05,
        0.022,
        0.32
      ],
      "c": "contrast",
      "f": "matte"
    }
  ]
});
}
