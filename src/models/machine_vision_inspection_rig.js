import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Machine Vision Inspection Rig / 机器视觉检测工作站. */
export const assetMeta = {
  "id": "electronics.machine-vision-inspection-rig.001",
  "slug": "machine-vision-inspection-rig",
  "title": "Machine Vision Inspection Rig",
  "title_zh": "机器视觉检测工作站",
  "summary": "Automated vision inspection line with belt conveyor, cameras and LED illuminator",
  "category": "electronics",
  "tags": [
    "machine",
    "vision",
    "inspection",
    "rig",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.72,
    1.9,
    1.28
  ],
  "generator": "createMachineVisionInspectionRig",
  "source_path": "src/models/machine_vision_inspection_rig.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/machine-vision-inspection-rig.webp",
  "accent": "#38495e"
};
export function createMachineVisionInspectionRig() { return buildRecipe({
  "title": "Machine Vision Inspection Rig",
  "dimensions": [
    1.72,
    1.9,
    1.28
  ],
  "parts": [
    {
      "t": "box",
      "n": "industrial-conveyor-frame",
      "p": [
        0,
        0.49,
        0
      ],
      "s": [
        1.4,
        0.56,
        0.94
      ],
      "c": 3688798
    },
    {
      "t": "box",
      "n": "moving-conveyor-belt",
      "p": [
        0,
        0.77,
        0
      ],
      "s": [
        1.5,
        0.08,
        0.82
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "belt-roller-0",
      "p": [
        -0.61,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-1",
      "p": [
        -0.43999999999999995,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-2",
      "p": [
        -0.26999999999999996,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-3",
      "p": [
        -0.09999999999999998,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-4",
      "p": [
        0.07000000000000006,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-5",
      "p": [
        0.2400000000000001,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-6",
      "p": [
        0.41000000000000003,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "belt-roller-7",
      "p": [
        0.5800000000000002,
        0.74,
        0
      ],
      "s": [
        0.06,
        0.08,
        0.66
      ],
      "c": 9552063
    },
    {
      "t": "rod",
      "n": "vision-inspection-post--0.67",
      "from": [
        -0.67,
        0.8,
        -0.34
      ],
      "to": [
        -0.67,
        1.71,
        -0.34
      ],
      "r": 0.05,
      "c": 9552063
    },
    {
      "t": "rod",
      "n": "vision-inspection-post-0.67",
      "from": [
        0.67,
        0.8,
        -0.34
      ],
      "to": [
        0.67,
        1.71,
        -0.34
      ],
      "r": 0.05,
      "c": 9552063
    },
    {
      "t": "box",
      "n": "camera-gantry-top",
      "p": [
        0,
        1.73,
        -0.36
      ],
      "s": [
        1.49,
        0.1,
        0.17
      ],
      "c": 9552063
    },
    {
      "t": "cylinder",
      "n": "line-scan-camera",
      "p": [
        0,
        1.44,
        -0.36
      ],
      "s": [
        0.17,
        0.34,
        0.17
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "annular-led-light",
      "p": [
        0,
        1.24,
        -0.35
      ],
      "s": [
        0.74,
        0.09,
        0.11
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "image-processor",
      "p": [
        0.73,
        1.08,
        0.1
      ],
      "s": [
        0.26,
        0.39,
        0.24
      ],
      "c": 3688798
    },
    {
      "t": "box",
      "n": "status-led-0",
      "p": [
        0.869,
        0.94,
        0.2
      ],
      "s": [
        0.01,
        0.025,
        0.02
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "status-led-1",
      "p": [
        0.869,
        1,
        0.2
      ],
      "s": [
        0.01,
        0.025,
        0.02
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "status-led-2",
      "p": [
        0.869,
        1.06,
        0.2
      ],
      "s": [
        0.01,
        0.025,
        0.02
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "status-led-3",
      "p": [
        0.869,
        1.1199999999999999,
        0.2
      ],
      "s": [
        0.01,
        0.025,
        0.02
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "status-led-4",
      "p": [
        0.869,
        1.18,
        0.2
      ],
      "s": [
        0.01,
        0.025,
        0.02
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "status-led-5",
      "p": [
        0.869,
        1.24,
        0.2
      ],
      "s": [
        0.01,
        0.025,
        0.02
      ],
      "c": 1386806
    }
  ]
}); }
