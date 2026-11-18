import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Deep Space Observation Relay. 抛物面天线、光伏翼、姿态喷口和桁架. Not physically print-tested. */
export const assetMeta = {
  "id": "scifi.deep-space-observation-relay.001",
  "slug": "deep-space-observation-relay",
  "title": "Deep Space Observation Relay",
  "title_zh": "深空观测中继器",
  "summary": "Non-weapon orbital observation platform with dish antenna and articulated-looking solar wings",
  "category": "scifi",
  "tags": [
    "deep",
    "space",
    "observation",
    "relay",
    "scifi",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.34,
    0.31,
    0.33
  ],
  "generator": "createDeepSpaceObservationRelay",
  "source_path": "src/models/deep_space_observation_relay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/deep-space-observation-relay.webp",
  "accent": "#97b1e7",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createDeepSpaceObservationRelay() {
  return buildMarketV15({
  "title": "Deep Space Observation Relay",
  "dimensions": [
    0.34,
    0.31,
    0.33
  ],
  "accent": "#97b1e7",
  "body": [
    [
      "rounded-box",
      "service-core",
      [
        0,
        1.2,
        0
      ],
      [
        0.82,
        0.77,
        0.79
      ],
      "primary",
      "matte",
      null
    ],
    [
      "cylinder",
      "radar-dish",
      [
        0,
        2.05,
        0
      ],
      [
        1.28,
        0.23,
        1.27
      ],
      "light",
      "metal",
      null
    ],
    [
      "cone",
      "dish-feed",
      [
        0,
        2.44,
        0
      ],
      [
        0.2,
        0.45,
        0.2
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "left-solar-wing",
      [
        -1.18,
        1.15,
        0
      ],
      [
        1.55,
        0.09,
        0.85
      ],
      "dark",
      "matte",
      null
    ],
    [
      "box",
      "right-solar-wing",
      [
        1.18,
        1.15,
        0
      ],
      [
        1.55,
        0.09,
        0.85
      ],
      "dark",
      "matte",
      null
    ],
    [
      "cylinder",
      "lower-bus",
      [
        0,
        0.61,
        0
      ],
      [
        0.46,
        0.52,
        0.47
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "ground-demo-base",
      [
        0,
        0.09,
        0
      ],
      [
        1.17,
        0.16,
        1.1
      ],
      "stone",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "grid",
      "n": "left-cell",
      "t": "box",
      "nx": 5,
      "nz": 3,
      "o": [
        -1.8,
        1.22,
        -0.31
      ],
      "d": [
        0.3,
        0,
        0.31
      ],
      "s": [
        0.25,
        0.025,
        0.23
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "grid",
      "n": "right-cell",
      "t": "box",
      "nx": 5,
      "nz": 3,
      "o": [
        0.58,
        1.22,
        -0.31
      ],
      "d": [
        0.3,
        0,
        0.31
      ],
      "s": [
        0.25,
        0.025,
        0.23
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "thermal-fin",
      "t": "box",
      "count": 8,
      "o": [
        0,
        0.8,
        0
      ],
      "r": 0.39,
      "s": [
        0.08,
        0.25,
        0.3
      ],
      "c": "contrast",
      "f": "matte"
    }
  ]
});
}
