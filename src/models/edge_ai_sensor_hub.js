import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Edge AI Sensor Hub / 边缘智能传感网关. */
export const assetMeta = {
  "id": "electronics.edge-ai-sensor-hub.001",
  "slug": "edge-ai-sensor-hub",
  "title": "Edge AI Sensor Hub",
  "title_zh": "边缘智能传感网关",
  "summary": "Rugged edge AI sensor box with antennas, cooling fins and port array",
  "category": "electronics",
  "tags": [
    "edge",
    "ai",
    "sensor",
    "hub",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.74,
    0.84,
    0.56
  ],
  "generator": "createEdgeAiSensorHub",
  "source_path": "src/models/edge_ai_sensor_hub.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/edge-ai-sensor-hub.webp",
  "accent": "#91c0bf"
};
export function createEdgeAiSensorHub() { return buildRecipe({
  "title": "Edge AI Sensor Hub",
  "dimensions": [
    0.74,
    0.84,
    0.56
  ],
  "parts": [
    {
      "t": "box",
      "n": "edge-ai-industrial-housing",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        0.6,
        0.56,
        0.42
      ],
      "c": 3688798
    },
    {
      "t": "box",
      "n": "touchscreen-output",
      "p": [
        0,
        0.44,
        0.23
      ],
      "s": [
        0.36,
        0.16,
        0.016
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-0",
      "p": [
        -0.24,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-1",
      "p": [
        -0.18,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-2",
      "p": [
        -0.12,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-3",
      "p": [
        -0.06,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-4",
      "p": [
        0,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-5",
      "p": [
        0.06,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-6",
      "p": [
        0.12,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-7",
      "p": [
        0.18,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "high-speed-compute-fin-8",
      "p": [
        0.24,
        0.7,
        -0.11
      ],
      "s": [
        0.025,
        0.2,
        0.33
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-0",
      "p": [
        -0.22,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-1",
      "p": [
        -0.16,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-2",
      "p": [
        -0.1,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-3",
      "p": [
        -0.04000000000000001,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-4",
      "p": [
        0.01999999999999999,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-5",
      "p": [
        0.07999999999999999,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-6",
      "p": [
        0.13999999999999999,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "i-o-ethernet-port-7",
      "p": [
        0.19999999999999998,
        0.2,
        0.236
      ],
      "s": [
        0.046,
        0.047,
        0.019
      ],
      "c": 10925757
    },
    {
      "t": "rod",
      "n": "external-radio-antenna--1",
      "from": [
        -0.23,
        0.66,
        -0.12
      ],
      "to": [
        -0.39,
        1.08,
        -0.26
      ],
      "r": 0.025,
      "c": 9552063
    },
    {
      "t": "rod",
      "n": "external-radio-antenna-1",
      "from": [
        0.23,
        0.66,
        -0.12
      ],
      "to": [
        0.39,
        1.08,
        -0.26
      ],
      "r": 0.025,
      "c": 9552063
    },
    {
      "t": "box",
      "n": "hardware-power-light-0",
      "p": [
        -0.12,
        0.52,
        0.24
      ],
      "s": [
        0.034,
        0.03,
        0.01
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "hardware-power-light-1",
      "p": [
        -0.039999999999999994,
        0.52,
        0.24
      ],
      "s": [
        0.034,
        0.03,
        0.01
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "hardware-power-light-2",
      "p": [
        0.04000000000000001,
        0.52,
        0.24
      ],
      "s": [
        0.034,
        0.03,
        0.01
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "hardware-power-light-3",
      "p": [
        0.12,
        0.52,
        0.24
      ],
      "s": [
        0.034,
        0.03,
        0.01
      ],
      "c": 1386806
    }
  ]
}); }
