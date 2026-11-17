import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Public Bike Repair Station / 公共自行车维修站. */
export const assetMeta = {
  "id": "urban.public-bike-repair-station.001",
  "slug": "public-bike-repair-station",
  "title": "Public Bike Repair Station",
  "title_zh": "公共自行车维修站",
  "summary": "Shared bicycle maintenance post with pump, tools, bike stand and instructions",
  "category": "urban",
  "tags": [
    "public",
    "bike",
    "repair",
    "station",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.7,
    2.1,
    1.15
  ],
  "generator": "createPublicBikeRepairStation",
  "source_path": "src/models/public_bike_repair_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/public-bike-repair-station.webp",
  "accent": "#d2c99b"
};
export function createPublicBikeRepairStation() { return buildRecipe({
  "title": "Public Bike Repair Station",
  "dimensions": [
    1.7,
    2.1,
    1.15
  ],
  "parts": [
    {
      "t": "box",
      "n": "bike-repair-workstation",
      "p": [
        0,
        1.04,
        0
      ],
      "s": [
        0.54,
        1.96,
        0.43
      ],
      "c": 6913937
    },
    {
      "t": "rod",
      "n": "bicycle-maintenance-upright",
      "from": [
        0.52,
        0.02,
        0
      ],
      "to": [
        0.52,
        1.78,
        0
      ],
      "r": 0.07,
      "c": 13814171
    },
    {
      "t": "rod",
      "n": "adjustable-bike-clamp",
      "from": [
        0.52,
        1.46,
        0
      ],
      "to": [
        0.05,
        1.46,
        0
      ],
      "r": 0.04,
      "c": 3755098
    },
    {
      "t": "cylinder",
      "n": "floor-pump-cylinder",
      "p": [
        -0.51,
        0.59,
        0.22
      ],
      "s": [
        0.18,
        1.14,
        0.18
      ],
      "c": 13814171
    },
    {
      "t": "rod",
      "n": "pump-handle",
      "from": [
        -0.51,
        1.17,
        0.22
      ],
      "to": [
        -0.51,
        1.43,
        0.22
      ],
      "r": 0.029,
      "c": 3755098
    },
    {
      "t": "rod",
      "n": "repair-hanging-tool-0",
      "from": [
        -0.19,
        1.71,
        0.27
      ],
      "to": [
        -0.19,
        1.31,
        0.27
      ],
      "r": 0.017,
      "c": 8430489
    },
    {
      "t": "rod",
      "n": "repair-hanging-tool-1",
      "from": [
        -0.1,
        1.71,
        0.27
      ],
      "to": [
        -0.1,
        1.2,
        0.27
      ],
      "r": 0.017,
      "c": 8430489
    },
    {
      "t": "rod",
      "n": "repair-hanging-tool-2",
      "from": [
        -0.010000000000000009,
        1.71,
        0.27
      ],
      "to": [
        -0.010000000000000009,
        1.09,
        0.27
      ],
      "r": 0.017,
      "c": 8430489
    },
    {
      "t": "rod",
      "n": "repair-hanging-tool-3",
      "from": [
        0.08000000000000002,
        1.71,
        0.27
      ],
      "to": [
        0.08000000000000002,
        1.31,
        0.27
      ],
      "r": 0.017,
      "c": 8430489
    },
    {
      "t": "rod",
      "n": "repair-hanging-tool-4",
      "from": [
        0.16999999999999998,
        1.71,
        0.27
      ],
      "to": [
        0.16999999999999998,
        1.2,
        0.27
      ],
      "r": 0.017,
      "c": 8430489
    },
    {
      "t": "rod",
      "n": "repair-hanging-tool-5",
      "from": [
        0.25999999999999995,
        1.71,
        0.27
      ],
      "to": [
        0.25999999999999995,
        1.09,
        0.27
      ],
      "r": 0.017,
      "c": 8430489
    },
    {
      "t": "box",
      "n": "maintenance-instruction-panel",
      "p": [
        0,
        0.89,
        0.25
      ],
      "s": [
        0.41,
        0.43,
        0.026
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "stainless-tool-tray",
      "p": [
        0,
        0.49,
        0.28
      ],
      "s": [
        0.45,
        0.08,
        0.33
      ],
      "c": 3755098
    }
  ]
}); }
