import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Field Sensor Weather Node. 遮光百叶、传感帽、状态窗和安装脚. Not physically print-tested. */
export const assetMeta = {
  "id": "electronics.field-sensor-weather-node.001",
  "slug": "field-sensor-weather-node",
  "title": "Field Sensor Weather Node",
  "title_zh": "野外气象传感节点",
  "summary": "Sculptural weather-sensing mockup with louvered radiation shield and service window",
  "category": "electronics",
  "tags": [
    "field",
    "sensor",
    "weather",
    "node",
    "electronics",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.18,
    0.33,
    0.17
  ],
  "generator": "createFieldSensorWeatherNode",
  "source_path": "src/models/field_sensor_weather_node.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/field-sensor-weather-node.webp",
  "accent": "#83c8cd",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createFieldSensorWeatherNode() {
  return buildMarketV15({
  "title": "Field Sensor Weather Node",
  "dimensions": [
    0.18,
    0.33,
    0.17
  ],
  "accent": "#83c8cd",
  "body": [
    [
      "box",
      "base",
      [
        0,
        0.1,
        0
      ],
      [
        1.16,
        0.14,
        1.14
      ],
      "frame",
      "matte",
      null
    ],
    [
      "cylinder",
      "mast",
      [
        0,
        1.04,
        0
      ],
      [
        0.16,
        1.8,
        0.16
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "sensor-canister",
      [
        0,
        1.63,
        0
      ],
      [
        0.76,
        0.71,
        0.76
      ],
      "light",
      "matte",
      null
    ],
    [
      "cone",
      "rain-cap",
      [
        0,
        2.06,
        0
      ],
      [
        0.98,
        0.12,
        0.98
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "display",
      [
        0,
        0.81,
        0.42
      ],
      [
        0.6,
        0.33,
        0.07
      ],
      "dark",
      "matte",
      null
    ],
    [
      "cylinder",
      "gasket",
      [
        0,
        0.6,
        0
      ],
      [
        0.75,
        0.08,
        0.75
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "torus",
      "mounting-ring",
      [
        0,
        0.25,
        0
      ],
      [
        0.82,
        0.08,
        0.82
      ],
      "metal",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "louver",
      "t": "cylinder",
      "count": 9,
      "o": [
        0,
        1.29,
        0
      ],
      "d": [
        0,
        0.085,
        0
      ],
      "s": [
        0.92,
        0.026,
        0.92
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "sensor-pin",
      "t": "sphere",
      "count": 8,
      "o": [
        0,
        2.16,
        0
      ],
      "r": 0.29,
      "s": [
        0.075,
        0.08,
        0.075
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "display-bar",
      "t": "box",
      "count": 5,
      "o": [
        -0.21,
        0.8,
        0.47
      ],
      "d": [
        0.11,
        0,
        0
      ],
      "s": [
        0.08,
        0.13,
        0.02
      ],
      "c": "light",
      "f": "matte"
    }
  ]
});
}
