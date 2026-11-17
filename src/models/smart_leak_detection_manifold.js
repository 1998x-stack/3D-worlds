import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Smart Leak Detection Manifold / 智能漏水检测歧管. */
export const assetMeta = {
  "id": "bathroom.smart-leak-detection-manifold.001",
  "slug": "smart-leak-detection-manifold",
  "title": "Smart Leak Detection Manifold",
  "title_zh": "智能漏水检测歧管",
  "summary": "Water supply monitoring manifold with valves, digital flow sensors and status panel",
  "category": "bathroom",
  "tags": [
    "smart",
    "leak",
    "detection",
    "manifold",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.26,
    1.05,
    0.7
  ],
  "generator": "createSmartLeakDetectionManifold",
  "source_path": "src/models/smart_leak_detection_manifold.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/smart-leak-detection-manifold.webp",
  "accent": "#e0e9e9"
};
export function createSmartLeakDetectionManifold() { return buildRecipe({
  "title": "Smart Leak Detection Manifold",
  "dimensions": [
    1.26,
    1.05,
    0.7
  ],
  "parts": [
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-monitoring-manifold-backpanel",
      "p": [
        0,
        0.51,
        -0.18
      ],
      "s": [
        1.13,
        0.96,
        0.14
      ],
      "c": 14739945
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-main-water-flow-feed",
      "from": [
        -0.51,
        0.36,
        0
      ],
      "to": [
        0.51,
        0.36,
        0
      ],
      "r": 0.057,
      "c": 6588058
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-upper-pipe-manifold",
      "from": [
        -0.5,
        0.65,
        0
      ],
      "to": [
        0.5,
        0.65,
        0
      ],
      "r": 0.053,
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-water-valve-riser-0",
      "from": [
        -0.42,
        0.35,
        0
      ],
      "to": [
        -0.42,
        0.89,
        0
      ],
      "r": 0.029,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "smart-leak-detection-manifold-isolation-valve-0",
      "p": [
        -0.42,
        0.86,
        0
      ],
      "s": [
        0.15,
        0.1,
        0.15
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-digital-flow-sensor-0",
      "p": [
        -0.42,
        0.57,
        0.18
      ],
      "s": [
        0.15,
        0.13,
        0.08
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-water-valve-riser-1",
      "from": [
        -0.21,
        0.35,
        0
      ],
      "to": [
        -0.21,
        0.89,
        0
      ],
      "r": 0.029,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "smart-leak-detection-manifold-isolation-valve-1",
      "p": [
        -0.21,
        0.86,
        0
      ],
      "s": [
        0.15,
        0.1,
        0.15
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-digital-flow-sensor-1",
      "p": [
        -0.21,
        0.57,
        0.18
      ],
      "s": [
        0.15,
        0.13,
        0.08
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-water-valve-riser-2",
      "from": [
        0,
        0.35,
        0
      ],
      "to": [
        0,
        0.89,
        0
      ],
      "r": 0.029,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "smart-leak-detection-manifold-isolation-valve-2",
      "p": [
        0,
        0.86,
        0
      ],
      "s": [
        0.15,
        0.1,
        0.15
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-digital-flow-sensor-2",
      "p": [
        0,
        0.57,
        0.18
      ],
      "s": [
        0.15,
        0.13,
        0.08
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-water-valve-riser-3",
      "from": [
        0.21000000000000002,
        0.35,
        0
      ],
      "to": [
        0.21000000000000002,
        0.89,
        0
      ],
      "r": 0.029,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "smart-leak-detection-manifold-isolation-valve-3",
      "p": [
        0.21000000000000002,
        0.86,
        0
      ],
      "s": [
        0.15,
        0.1,
        0.15
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-digital-flow-sensor-3",
      "p": [
        0.21000000000000002,
        0.57,
        0.18
      ],
      "s": [
        0.15,
        0.13,
        0.08
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "smart-leak-detection-manifold-water-valve-riser-4",
      "from": [
        0.42,
        0.35,
        0
      ],
      "to": [
        0.42,
        0.89,
        0
      ],
      "r": 0.029,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "smart-leak-detection-manifold-isolation-valve-4",
      "p": [
        0.42,
        0.86,
        0
      ],
      "s": [
        0.15,
        0.1,
        0.15
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-digital-flow-sensor-4",
      "p": [
        0.42,
        0.57,
        0.18
      ],
      "s": [
        0.15,
        0.13,
        0.08
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "smart-leak-detection-manifold-leak-detection-display",
      "p": [
        0,
        0.95,
        0.1
      ],
      "s": [
        0.44,
        0.12,
        0.08
      ],
      "c": 4479851
    }
  ]
}); }
