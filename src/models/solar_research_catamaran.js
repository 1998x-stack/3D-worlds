import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Solar Research Catamaran / 太阳能科研双体船. */
export const assetMeta = {
  "id": "vehicles.solar-research-catamaran.001",
  "slug": "solar-research-catamaran",
  "title": "Solar Research Catamaran",
  "title_zh": "太阳能科研双体船",
  "summary": "Twin hull ocean research craft with solar canopy and water sampling crane",
  "category": "vehicles",
  "tags": [
    "solar",
    "research",
    "catamaran",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.15,
    2.95,
    5.7
  ],
  "generator": "createSolarResearchCatamaran",
  "source_path": "src/models/solar_research_catamaran.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/solar-research-catamaran.webp",
  "accent": "#d6dadd"
};
export function createSolarResearchCatamaran() { return buildRecipe({
  "title": "Solar Research Catamaran",
  "dimensions": [
    3.15,
    2.95,
    5.7
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "marine-hull--1",
      "p": [
        -1.05,
        0.57,
        0
      ],
      "s": [
        0.75,
        0.65,
        4.35
      ],
      "c": 7580339
    },
    {
      "t": "sphere",
      "n": "marine-hull-1",
      "p": [
        1.05,
        0.57,
        0
      ],
      "s": [
        0.75,
        0.65,
        4.35
      ],
      "c": 7580339
    },
    {
      "t": "box",
      "n": "scientific-workdeck",
      "p": [
        0,
        0.93,
        0
      ],
      "s": [
        2.25,
        0.19,
        2.86
      ],
      "c": 14080733
    },
    {
      "t": "box",
      "n": "solar-photovoltaic-canopy",
      "p": [
        0,
        2.35,
        0
      ],
      "s": [
        2.81,
        0.14,
        3.76
      ],
      "c": 3492699
    },
    {
      "t": "rod",
      "n": "canopy-strut--1--1.48",
      "from": [
        -0.85,
        0.82,
        -1.48
      ],
      "to": [
        -0.86,
        2.32,
        -1.48
      ],
      "r": 0.06,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "canopy-strut--1-1.48",
      "from": [
        -0.85,
        0.82,
        1.48
      ],
      "to": [
        -0.86,
        2.32,
        1.48
      ],
      "r": 0.06,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "canopy-strut-1--1.48",
      "from": [
        0.85,
        0.82,
        -1.48
      ],
      "to": [
        0.86,
        2.32,
        -1.48
      ],
      "r": 0.06,
      "c": 14080733
    },
    {
      "t": "rod",
      "n": "canopy-strut-1-1.48",
      "from": [
        0.85,
        0.82,
        1.48
      ],
      "to": [
        0.86,
        2.32,
        1.48
      ],
      "r": 0.06,
      "c": 14080733
    },
    {
      "t": "box",
      "n": "solar-cell-0",
      "p": [
        -0.67,
        2.44,
        -1.22
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-1",
      "p": [
        0.67,
        2.44,
        -1.22
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-2",
      "p": [
        -0.67,
        2.44,
        -0.62
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-3",
      "p": [
        0.67,
        2.44,
        -0.62
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-4",
      "p": [
        -0.67,
        2.44,
        -0.020000000000000018
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-5",
      "p": [
        0.67,
        2.44,
        -0.020000000000000018
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-6",
      "p": [
        -0.67,
        2.44,
        0.5799999999999998
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-7",
      "p": [
        0.67,
        2.44,
        0.5799999999999998
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-8",
      "p": [
        -0.67,
        2.44,
        1.18
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "box",
      "n": "solar-cell-9",
      "p": [
        0.67,
        2.44,
        1.18
      ],
      "s": [
        1.16,
        0.032,
        0.51
      ],
      "c": 14530402
    },
    {
      "t": "rod",
      "n": "water-sampling-crane",
      "from": [
        0.92,
        1.1,
        -1.18
      ],
      "to": [
        0.53,
        2.01,
        -1.63
      ],
      "r": 0.068,
      "c": 3492699
    },
    {
      "t": "rod",
      "n": "crane-hoist",
      "from": [
        0.53,
        2.01,
        -1.63
      ],
      "to": [
        0.53,
        0.55,
        -1.63
      ],
      "r": 0.014,
      "c": 14530402
    },
    {
      "t": "cylinder",
      "n": "radar-dome",
      "p": [
        0,
        2.71,
        0.74
      ],
      "s": [
        0.36,
        0.17,
        0.36
      ],
      "c": 14530402
    }
  ]
}); }
