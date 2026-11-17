import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Rail Maintenance Engineer / 轨道检修工程师人物. */
export const assetMeta = {
  "id": "characters.rail-maintenance-engineer.001",
  "slug": "rail-maintenance-engineer",
  "title": "Rail Maintenance Engineer",
  "title_zh": "轨道检修工程师人物",
  "summary": "Unrigged rail engineer with protective helmet, tool belt and inspection probe",
  "category": "characters",
  "tags": [
    "rail",
    "maintenance",
    "engineer",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.02,
    1.98,
    0.78
  ],
  "generator": "createRailMaintenanceEngineer",
  "source_path": "src/models/rail_maintenance_engineer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/rail-maintenance-engineer.webp",
  "accent": "#486f8a"
};
export function createRailMaintenanceEngineer() { return buildRecipe({
  "title": "Rail Maintenance Engineer",
  "dimensions": [
    1.02,
    1.98,
    0.78
  ],
  "parts": [
    {
      "t": "box",
      "n": "uniform-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.48,
        0.68,
        0.31
      ],
      "c": 4747146
    },
    {
      "t": "sphere",
      "n": "human-face",
      "p": [
        0,
        1.78,
        0
      ],
      "s": [
        0.21,
        0.24,
        0.2
      ],
      "c": 3427169
    },
    {
      "t": "cylinder",
      "n": "neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.12
      ],
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.29,
        1.42,
        0
      ],
      "to": [
        -0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm--1",
      "from": [
        -0.36,
        1,
        0.09
      ],
      "to": [
        -0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh--1",
      "from": [
        -0.14,
        0.92,
        0
      ],
      "to": [
        -0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin--1",
      "from": [
        -0.16,
        0.5,
        0.05
      ],
      "to": [
        -0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot--1",
      "p": [
        -0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.29,
        1.42,
        0
      ],
      "to": [
        0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm-1",
      "from": [
        0.36,
        1,
        0.09
      ],
      "to": [
        0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh-1",
      "from": [
        0.14,
        0.92,
        0
      ],
      "to": [
        0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin-1",
      "from": [
        0.16,
        0.5,
        0.05
      ],
      "to": [
        0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "work-identity-patch",
      "p": [
        0.13,
        1.32,
        0.18
      ],
      "s": [
        0.15,
        0.1,
        0.026
      ],
      "c": 3427169
    },
    {
      "t": "sphere",
      "n": "hard-hat",
      "p": [
        0,
        1.99,
        0
      ],
      "s": [
        0.45,
        0.13,
        0.45
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "inspection-tool-belt",
      "p": [
        0,
        0.89,
        0.1
      ],
      "s": [
        0.55,
        0.1,
        0.23
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "rail-inspection-tool-0",
      "p": [
        -0.24,
        0.78,
        0.29
      ],
      "s": [
        0.077,
        0.19,
        0.05
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "rail-inspection-tool-1",
      "p": [
        -0.12,
        0.78,
        0.29
      ],
      "s": [
        0.077,
        0.19,
        0.05
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "rail-inspection-tool-2",
      "p": [
        0,
        0.78,
        0.29
      ],
      "s": [
        0.077,
        0.19,
        0.05
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "rail-inspection-tool-3",
      "p": [
        0.12,
        0.78,
        0.29
      ],
      "s": [
        0.077,
        0.19,
        0.05
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "rail-inspection-tool-4",
      "p": [
        0.24,
        0.78,
        0.29
      ],
      "s": [
        0.077,
        0.19,
        0.05
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "inspection-meter",
      "p": [
        0.45,
        0.96,
        0.34
      ],
      "s": [
        0.23,
        0.29,
        0.065
      ],
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "steel-track-measure",
      "from": [
        0.52,
        0.79,
        0.27
      ],
      "to": [
        0.68,
        1.38,
        0.38
      ],
      "r": 0.029,
      "c": 12704211
    }
  ]
}); }
