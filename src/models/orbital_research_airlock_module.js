import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Orbital Research Airlock Module / 轨道科研气闸舱模块. */
export const assetMeta = {
  "id": "scifi.orbital-research-airlock-module.001",
  "slug": "orbital-research-airlock-module",
  "title": "Orbital Research Airlock Module",
  "title_zh": "轨道科研气闸舱模块",
  "summary": "Nonweapon orbital habitat airlock with pressure door, docking collar and handrails",
  "category": "scifi",
  "tags": [
    "orbital",
    "research",
    "airlock",
    "module",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.25,
    3.15,
    2.75
  ],
  "generator": "createOrbitalResearchAirlockModule",
  "source_path": "src/models/orbital_research_airlock_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/orbital-research-airlock-module.webp",
  "accent": "#7294ba"
};
export function createOrbitalResearchAirlockModule() { return buildRecipe({
  "title": "Orbital Research Airlock Module",
  "dimensions": [
    3.25,
    3.15,
    2.75
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "orbital-airlock-pressure-hull",
      "p": [
        0,
        1.54,
        0
      ],
      "s": [
        2.39,
        2.59,
        2.2
      ],
      "c": 7509178
    },
    {
      "t": "torus",
      "n": "pressurized-docking-collar",
      "p": [
        0,
        1.54,
        1.04
      ],
      "s": [
        2.67,
        2.67,
        0.24
      ],
      "c": 10018250
    },
    {
      "t": "cylinder",
      "n": "circular-pressure-hatch",
      "p": [
        0,
        1.54,
        1.16
      ],
      "s": [
        1.66,
        0.18,
        1.66
      ],
      "c": 13812462,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "hatch-center-lock",
      "p": [
        0,
        1.54,
        1.3
      ],
      "s": [
        0.4,
        0.1,
        0.4
      ],
      "c": 3423067,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-0",
      "p": [
        0.75,
        1.54,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-1",
      "p": [
        0.649519052838329,
        1.915,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-2",
      "p": [
        0.3750000000000001,
        2.189519052838329,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-3",
      "p": [
        4.592425496802574e-17,
        2.29,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-4",
      "p": [
        -0.37499999999999983,
        2.189519052838329,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-5",
      "p": [
        -0.649519052838329,
        1.915,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-6",
      "p": [
        -0.75,
        1.54,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-7",
      "p": [
        -0.6495190528383291,
        1.1650000000000003,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-8",
      "p": [
        -0.37500000000000033,
        0.8904809471616713,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-9",
      "p": [
        -1.3777276490407724e-16,
        0.79,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-10",
      "p": [
        0.3750000000000001,
        0.890480947161671,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-radial-fastener-11",
      "p": [
        0.6495190528383288,
        1.1649999999999996,
        1.34
      ],
      "s": [
        0.11,
        0.11,
        0.08
      ],
      "c": 3423067
    },
    {
      "t": "rod",
      "n": "extravehicular-grip-rail--1",
      "from": [
        -1.2,
        0.27,
        0.82
      ],
      "to": [
        -1.2,
        2.68,
        0.82
      ],
      "r": 0.046,
      "c": 10018250
    },
    {
      "t": "box",
      "n": "equalizing-valve--1",
      "p": [
        -0.76,
        1.01,
        1.22
      ],
      "s": [
        0.22,
        0.21,
        0.1
      ],
      "c": 3423067
    },
    {
      "t": "rod",
      "n": "extravehicular-grip-rail-1",
      "from": [
        1.2,
        0.27,
        0.82
      ],
      "to": [
        1.2,
        2.68,
        0.82
      ],
      "r": 0.046,
      "c": 10018250
    },
    {
      "t": "box",
      "n": "equalizing-valve-1",
      "p": [
        0.76,
        1.01,
        1.22
      ],
      "s": [
        0.22,
        0.21,
        0.1
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "airlock-floor-landing",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        2.39,
        0.22,
        2.17
      ],
      "c": 13812462
    }
  ]
}); }
