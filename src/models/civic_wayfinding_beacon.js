import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Civic Wayfinding Beacon / 城市公共导向信息柱. */
export const assetMeta = {
  "id": "urban.civic-wayfinding-beacon.001",
  "slug": "civic-wayfinding-beacon",
  "title": "Civic Wayfinding Beacon",
  "title_zh": "城市公共导向信息柱",
  "summary": "Tall public wayfinding totem with city map, directions and illuminated header",
  "category": "urban",
  "tags": [
    "civic",
    "wayfinding",
    "beacon",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1,
    3.15,
    0.74
  ],
  "generator": "createCivicWayfindingBeacon",
  "source_path": "src/models/civic_wayfinding_beacon.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/civic-wayfinding-beacon.webp",
  "accent": "#697f91"
};
export function createCivicWayfindingBeacon() { return buildRecipe({
  "title": "Civic Wayfinding Beacon",
  "dimensions": [
    1,
    3.15,
    0.74
  ],
  "parts": [
    {
      "t": "box",
      "n": "civic-information-totem",
      "p": [
        0,
        1.45,
        0
      ],
      "s": [
        0.77,
        2.86,
        0.46
      ],
      "c": 6913937
    },
    {
      "t": "box",
      "n": "city-map-touch-panel",
      "p": [
        0,
        1.56,
        0.246
      ],
      "s": [
        0.64,
        1.12,
        0.027
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "beacon-header",
      "p": [
        0,
        2.95,
        0.07
      ],
      "s": [
        0.92,
        0.26,
        0.48
      ],
      "c": 13814171
    },
    {
      "t": "box",
      "n": "map-grid-overlay",
      "p": [
        0,
        1.49,
        0.264
      ],
      "s": [
        0.43,
        0.36,
        0.013
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "wayfinding-direction-0",
      "p": [
        -0.27,
        2.17,
        0.265
      ],
      "s": [
        0.41,
        0.085,
        0.025
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "wayfinding-direction-1",
      "p": [
        0.25,
        2.17,
        0.265
      ],
      "s": [
        0.41,
        0.085,
        0.025
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "wayfinding-direction-2",
      "p": [
        -0.27,
        2.3,
        0.265
      ],
      "s": [
        0.41,
        0.085,
        0.025
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "wayfinding-direction-3",
      "p": [
        0.25,
        2.3,
        0.265
      ],
      "s": [
        0.41,
        0.085,
        0.025
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "wayfinding-direction-4",
      "p": [
        -0.27,
        2.4299999999999997,
        0.265
      ],
      "s": [
        0.41,
        0.085,
        0.025
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "wayfinding-direction-5",
      "p": [
        0.25,
        2.4299999999999997,
        0.265
      ],
      "s": [
        0.41,
        0.085,
        0.025
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "beacon-status-dot-0",
      "p": [
        -0.23,
        2.93,
        0.32
      ],
      "s": [
        0.046,
        0.047,
        0.02
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "beacon-status-dot-1",
      "p": [
        -0.08000000000000002,
        2.93,
        0.32
      ],
      "s": [
        0.046,
        0.047,
        0.02
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "beacon-status-dot-2",
      "p": [
        0.06999999999999998,
        2.93,
        0.32
      ],
      "s": [
        0.046,
        0.047,
        0.02
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "beacon-status-dot-3",
      "p": [
        0.21999999999999995,
        2.93,
        0.32
      ],
      "s": [
        0.046,
        0.047,
        0.02
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "public-floor-anchor",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        0.98,
        0.14,
        0.69
      ],
      "c": 13814171
    }
  ]
}); }
