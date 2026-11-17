import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Neighborhood Microgrid Cabinet / 社区微电网储能柜. */
export const assetMeta = {
  "id": "urban.neighborhood-microgrid-cabinet.001",
  "slug": "neighborhood-microgrid-cabinet",
  "title": "Neighborhood Microgrid Cabinet",
  "title_zh": "社区微电网储能柜",
  "summary": "Energy storage grid distribution cabinet with battery drawers and status meters",
  "category": "urban",
  "tags": [
    "neighborhood",
    "microgrid",
    "cabinet",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    2.35,
    1.1
  ],
  "generator": "createNeighborhoodMicrogridCabinet",
  "source_path": "src/models/neighborhood_microgrid_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/neighborhood-microgrid-cabinet.webp",
  "accent": "#80a399"
};
export function createNeighborhoodMicrogridCabinet() { return buildRecipe({
  "title": "Neighborhood Microgrid Cabinet",
  "dimensions": [
    1.65,
    2.35,
    1.1
  ],
  "parts": [
    {
      "t": "box",
      "n": "microgrid-energy-cabinet",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        1.48,
        2.26,
        0.88
      ],
      "c": 6913937
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-0",
      "p": [
        0,
        0.33,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-0-0",
      "p": [
        -0.4,
        0.35,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-0-1",
      "p": [
        -0.010000000000000009,
        0.35,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-0-2",
      "p": [
        0.38,
        0.35,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-1",
      "p": [
        0,
        0.55,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-1-0",
      "p": [
        -0.4,
        0.57,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-1-1",
      "p": [
        -0.010000000000000009,
        0.57,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-1-2",
      "p": [
        0.38,
        0.57,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-2",
      "p": [
        0,
        0.77,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-2-0",
      "p": [
        -0.4,
        0.79,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-2-1",
      "p": [
        -0.010000000000000009,
        0.79,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-2-2",
      "p": [
        0.38,
        0.79,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-3",
      "p": [
        0,
        0.99,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-3-0",
      "p": [
        -0.4,
        1.01,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-3-1",
      "p": [
        -0.010000000000000009,
        1.01,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-3-2",
      "p": [
        0.38,
        1.01,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-4",
      "p": [
        0,
        1.21,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-4-0",
      "p": [
        -0.4,
        1.23,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-4-1",
      "p": [
        -0.010000000000000009,
        1.23,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-4-2",
      "p": [
        0.38,
        1.23,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-5",
      "p": [
        0,
        1.4300000000000002,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-5-0",
      "p": [
        -0.4,
        1.4500000000000002,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-5-1",
      "p": [
        -0.010000000000000009,
        1.4500000000000002,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-5-2",
      "p": [
        0.38,
        1.4500000000000002,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "grid-battery-cell-tray-6",
      "p": [
        0,
        1.6500000000000001,
        0.47
      ],
      "s": [
        1.22,
        0.17,
        0.09
      ],
      "c": 13814171
    },
    {
      "t": "sphere",
      "n": "battery-status-led-6-0",
      "p": [
        -0.4,
        1.67,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 3755098
    },
    {
      "t": "sphere",
      "n": "battery-status-led-6-1",
      "p": [
        -0.010000000000000009,
        1.67,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "sphere",
      "n": "battery-status-led-6-2",
      "p": [
        0.38,
        1.67,
        0.526
      ],
      "s": [
        0.026,
        0.025,
        0.016
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "inverter-control-display",
      "p": [
        0,
        1.99,
        0.48
      ],
      "s": [
        0.82,
        0.18,
        0.03
      ],
      "c": 8430489
    },
    {
      "t": "box",
      "n": "vent-grid-0",
      "p": [
        -0.5,
        2.19,
        0.48
      ],
      "s": [
        0.13,
        0.072,
        0.024
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "vent-grid-1",
      "p": [
        -0.25,
        2.19,
        0.48
      ],
      "s": [
        0.13,
        0.072,
        0.024
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "vent-grid-2",
      "p": [
        0,
        2.19,
        0.48
      ],
      "s": [
        0.13,
        0.072,
        0.024
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "vent-grid-3",
      "p": [
        0.25,
        2.19,
        0.48
      ],
      "s": [
        0.13,
        0.072,
        0.024
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "vent-grid-4",
      "p": [
        0.5,
        2.19,
        0.48
      ],
      "s": [
        0.13,
        0.072,
        0.024
      ],
      "c": 3755098
    },
    {
      "t": "box",
      "n": "outdoor-pad-foundation",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        1.62,
        0.14,
        1
      ],
      "c": 13814171
    }
  ]
}); }
