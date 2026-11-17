import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.metro-station-entrance.001",
  "slug": "metro-station-entrance",
  "title": "Metro Station Entrance",
  "title_zh": "地铁站出入口",
  "summary": "Covered station entrance with descending steps, overhead emblem and railings",
  "category": "urban",
  "tags": [
    "metro",
    "transit",
    "entrance"
  ],
  "dimensions_m": [
    2.7,
    2.48,
    2.6
  ],
  "generator": "createMetroStationEntrance",
  "source_path": "src/models/metro_station_entrance.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/metro-station-entrance.webp"
};
export function createMetroStationEntrance() { return buildRecipe({
  "title": "Metro Station Entrance",
  "dimensions": [
    2.7,
    2.48,
    2.6
  ],
  "parts": [
    {
      "t": "box",
      "n": "landing",
      "p": [
        0,
        0.16,
        0.43
      ],
      "s": [
        2.68,
        0.3,
        2.54
      ],
      "c": 9410457
    },
    {
      "t": "box",
      "n": "side-pier-left",
      "p": [
        -1.2,
        1.05,
        -0.1
      ],
      "s": [
        0.3,
        2,
        2.1
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "side-pier-right",
      "p": [
        1.2,
        1.05,
        -0.1
      ],
      "s": [
        0.3,
        2,
        2.1
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "rain-canopy",
      "p": [
        0,
        2.14,
        0.16
      ],
      "s": [
        2.7,
        0.18,
        2.6
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "descending-step-0",
      "p": [
        0,
        0.42,
        1.1
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "box",
      "n": "descending-step-1",
      "p": [
        0,
        0.366,
        0.8200000000000001
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "box",
      "n": "descending-step-2",
      "p": [
        0,
        0.312,
        0.54
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "box",
      "n": "descending-step-3",
      "p": [
        0,
        0.258,
        0.26
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "box",
      "n": "descending-step-4",
      "p": [
        0,
        0.204,
        -0.020000000000000018
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "box",
      "n": "descending-step-5",
      "p": [
        0,
        0.14999999999999997,
        -0.30000000000000004
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "box",
      "n": "descending-step-6",
      "p": [
        0,
        0.09599999999999997,
        -0.5800000000000001
      ],
      "s": [
        2.1,
        0.11,
        0.27
      ],
      "c": 11844793
    },
    {
      "t": "rod",
      "n": "handrail-0",
      "from": [
        -1.02,
        0.5,
        0.94
      ],
      "to": [
        -1.02,
        1.18,
        -0.9
      ],
      "r": 0.042,
      "c": 12953197
    },
    {
      "t": "rod",
      "n": "handrail-1",
      "from": [
        1.02,
        0.5,
        0.94
      ],
      "to": [
        1.02,
        1.18,
        -0.9
      ],
      "r": 0.042,
      "c": 12953197
    },
    {
      "t": "rod",
      "n": "support-post-0",
      "from": [
        -1.03,
        0.41,
        0.27
      ],
      "to": [
        -1.03,
        1.02,
        0.27
      ],
      "r": 0.028,
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "support-post-1",
      "from": [
        1.03,
        0.41,
        0.27
      ],
      "to": [
        1.03,
        1.02,
        0.27
      ],
      "r": 0.028,
      "c": 9741221
    },
    {
      "t": "box",
      "n": "metro-signboard",
      "p": [
        0,
        2.3,
        1.08
      ],
      "s": [
        1.54,
        0.3,
        0.065
      ],
      "c": 5540513
    },
    {
      "t": "cylinder",
      "n": "metro-icon",
      "p": [
        0,
        2.33,
        1.12
      ],
      "s": [
        0.22,
        0.025,
        0.22
      ],
      "c": 15133152,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "information-panel",
      "p": [
        0,
        1.69,
        1.12
      ],
      "s": [
        0.93,
        0.72,
        0.027
      ],
      "c": 11651017
    },
    {
      "t": "box",
      "n": "station-label-0",
      "p": [
        0,
        1.85,
        1.139
      ],
      "s": [
        0.64,
        0.035,
        0.012
      ],
      "c": 5540513
    },
    {
      "t": "box",
      "n": "station-label-1",
      "p": [
        0,
        1.7200000000000002,
        1.139
      ],
      "s": [
        0.64,
        0.035,
        0.012
      ],
      "c": 5540513
    },
    {
      "t": "box",
      "n": "station-label-2",
      "p": [
        0,
        1.59,
        1.139
      ],
      "s": [
        0.64,
        0.035,
        0.012
      ],
      "c": 5540513
    },
    {
      "t": "box",
      "n": "station-label-3",
      "p": [
        0,
        1.46,
        1.139
      ],
      "s": [
        0.64,
        0.035,
        0.012
      ],
      "c": 5540513
    }
  ]
}); }
