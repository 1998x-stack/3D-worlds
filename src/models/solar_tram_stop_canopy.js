import { buildRecipe } from './recipe_engine.js';
/** Solar Tram Stop Canopy / 太阳能电车候车亭: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "urban.solar-tram-stop-canopy.001",
  "slug": "solar-tram-stop-canopy",
  "title": "Solar Tram Stop Canopy",
  "title_zh": "太阳能电车候车亭",
  "summary": "Open rail transit shelter with photovoltaic canopy, benches and route signs",
  "category": "urban",
  "tags": [
    "solar",
    "tram",
    "stop",
    "canopy",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.5,
    2.65,
    1.85
  ],
  "generator": "createSolarTramStopCanopy",
  "source_path": "src/models/solar_tram_stop_canopy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/solar-tram-stop-canopy.webp",
  "accent": "#6a8899"
};
export function createSolarTramStopCanopy() { return buildRecipe({
  "title": "Solar Tram Stop Canopy",
  "dimensions": [
    3.5,
    2.65,
    1.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "tram-shelter-roof",
      "p": [
        0,
        2.3,
        0
      ],
      "s": [
        3.25,
        0.16,
        1.55
      ],
      "c": 6981785
    },
    {
      "t": "rod",
      "n": "tram-post--1.4--0.6",
      "from": [
        -1.4,
        0.05,
        -0.6
      ],
      "to": [
        -1.4,
        2.31,
        -0.6
      ],
      "r": 0.062,
      "c": 8430715
    },
    {
      "t": "rod",
      "n": "tram-post--1.4-0.6",
      "from": [
        -1.4,
        0.05,
        0.6
      ],
      "to": [
        -1.4,
        2.31,
        0.6
      ],
      "r": 0.062,
      "c": 8430715
    },
    {
      "t": "rod",
      "n": "tram-post-1.4--0.6",
      "from": [
        1.4,
        0.05,
        -0.6
      ],
      "to": [
        1.4,
        2.31,
        -0.6
      ],
      "r": 0.062,
      "c": 8430715
    },
    {
      "t": "rod",
      "n": "tram-post-1.4-0.6",
      "from": [
        1.4,
        0.05,
        0.6
      ],
      "to": [
        1.4,
        2.31,
        0.6
      ],
      "r": 0.062,
      "c": 8430715
    },
    {
      "t": "box",
      "n": "photovoltaic-cell-0",
      "p": [
        -1.2,
        2.39,
        0
      ],
      "s": [
        0.4,
        0.035,
        1.18
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "photovoltaic-cell-1",
      "p": [
        -0.73,
        2.39,
        0
      ],
      "s": [
        0.4,
        0.035,
        1.18
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "photovoltaic-cell-2",
      "p": [
        -0.26,
        2.39,
        0
      ],
      "s": [
        0.4,
        0.035,
        1.18
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "photovoltaic-cell-3",
      "p": [
        0.20999999999999996,
        2.39,
        0
      ],
      "s": [
        0.4,
        0.035,
        1.18
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "photovoltaic-cell-4",
      "p": [
        0.6799999999999999,
        2.39,
        0
      ],
      "s": [
        0.4,
        0.035,
        1.18
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "photovoltaic-cell-5",
      "p": [
        1.1499999999999997,
        2.39,
        0
      ],
      "s": [
        0.4,
        0.035,
        1.18
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "waiting-bench",
      "p": [
        0,
        0.63,
        0.3
      ],
      "s": [
        1.75,
        0.15,
        0.4
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "bench-leg--0.74",
      "p": [
        -0.74,
        0.34,
        0.3
      ],
      "s": [
        0.12,
        0.6,
        0.12
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "bench-leg-0.74",
      "p": [
        0.74,
        0.34,
        0.3
      ],
      "s": [
        0.12,
        0.6,
        0.12
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "transit-route-panel",
      "p": [
        1.48,
        1.57,
        0.09
      ],
      "s": [
        0.12,
        1.05,
        0.7
      ],
      "c": 15189870
    }
  ]
}); }
