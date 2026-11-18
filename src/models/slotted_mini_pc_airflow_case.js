import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Slotted Mini PC Airflow Case. 散热叶片、脚垫、端口面板、拆装螺钉. Not physically print-tested. */
export const assetMeta = {
  "id": "electronics.slotted-mini-pc-airflow-case.001",
  "slug": "slotted-mini-pc-airflow-case",
  "title": "Slotted Mini PC Airflow Case",
  "title_zh": "镂空迷你电脑散热机箱",
  "summary": "Original vented desktop mini-PC enclosure mockup with raised feet and rear connector panel",
  "category": "electronics",
  "tags": [
    "slotted",
    "mini",
    "pc",
    "airflow",
    "case",
    "electronics",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.22,
    0.13,
    0.23
  ],
  "generator": "createSlottedMiniPcAirflowCase",
  "source_path": "src/models/slotted_mini_pc_airflow_case.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/slotted-mini-pc-airflow-case.webp",
  "accent": "#999bd8",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createSlottedMiniPcAirflowCase() {
  return buildMarketV15({
  "title": "Slotted Mini PC Airflow Case",
  "dimensions": [
    0.22,
    0.13,
    0.23
  ],
  "accent": "#999bd8",
  "body": [
    [
      "rounded-box",
      "enclosure",
      [
        0,
        0.51,
        0
      ],
      [
        1.6,
        0.78,
        1.48
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "front-panel",
      [
        0,
        0.51,
        0.77
      ],
      [
        1.5,
        0.62,
        0.06
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "box",
      "side-heat-shield",
      [
        0.83,
        0.51,
        0
      ],
      [
        0.07,
        0.62,
        1.24
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "rear-io",
      [
        0,
        0.43,
        -0.78
      ],
      [
        1.1,
        0.42,
        0.07
      ],
      "dark",
      "matte",
      null
    ],
    [
      "sphere",
      "front-led",
      [
        0.62,
        0.7,
        0.82
      ],
      [
        0.09,
        0.07,
        0.045
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "top-rim",
      [
        0,
        0.94,
        0
      ],
      [
        1.67,
        0.1,
        1.55
      ],
      "light",
      "matte",
      null
    ],
    [
      "cylinder",
      "reset-button",
      [
        -0.61,
        0.51,
        0.82
      ],
      [
        0.1,
        0.11,
        0.06
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "top-intake-fin",
      "t": "box",
      "count": 12,
      "o": [
        -0.65,
        1.01,
        -0.53
      ],
      "d": [
        0.12,
        0,
        0
      ],
      "s": [
        0.04,
        0.023,
        1.02
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "port-block",
      "t": "box",
      "count": 6,
      "o": [
        -0.47,
        0.45,
        -0.85
      ],
      "d": [
        0.18,
        0,
        0
      ],
      "s": [
        0.1,
        0.16,
        0.03
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "grid",
      "n": "vent-baffle",
      "t": "box",
      "nx": 5,
      "nz": 3,
      "o": [
        -0.61,
        0.3,
        0.83
      ],
      "d": [
        0.29,
        0,
        0.15
      ],
      "s": [
        0.18,
        0.025,
        0.03
      ],
      "c": "dark",
      "f": "matte"
    }
  ]
});
}
