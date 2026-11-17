import { buildRecipe } from './recipe_engine.js';
/** Coastal Survey Submersible / 海岸测绘潜水器: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "vehicles.coastal-survey-submersible.001",
  "slug": "coastal-survey-submersible",
  "title": "Coastal Survey Submersible",
  "title_zh": "海岸测绘潜水器",
  "summary": "Compact ocean mapping submersible with observation dome and side thrusters",
  "category": "vehicles",
  "tags": [
    "coastal",
    "survey",
    "submersible",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.25,
    1.92,
    3.25
  ],
  "generator": "createCoastalSurveySubmersible",
  "source_path": "src/models/coastal_survey_submersible.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/coastal-survey-submersible.webp",
  "accent": "#c9d5d8"
};
export function createCoastalSurveySubmersible() { return buildRecipe({
  "title": "Coastal Survey Submersible",
  "dimensions": [
    2.25,
    1.92,
    3.25
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "submersible-pressure-hull",
      "p": [
        0,
        0.97,
        0
      ],
      "s": [
        1.02,
        0.68,
        1.52
      ],
      "c": 14721613
    },
    {
      "t": "sphere",
      "n": "observation-dome",
      "p": [
        0,
        1.27,
        1.09
      ],
      "s": [
        0.67,
        0.42,
        0.56
      ],
      "c": 2570051
    },
    {
      "t": "cylinder",
      "n": "survey-side-thruster--1",
      "p": [
        -1.07,
        0.75,
        -0.45
      ],
      "s": [
        0.53,
        0.36,
        0.53
      ],
      "c": 13227480,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "stabilizer-fin--1",
      "p": [
        -0.98,
        0.86,
        0.44
      ],
      "s": [
        0.62,
        0.11,
        1.35
      ],
      "c": 4810624
    },
    {
      "t": "cylinder",
      "n": "survey-side-thruster-1",
      "p": [
        1.07,
        0.75,
        -0.45
      ],
      "s": [
        0.53,
        0.36,
        0.53
      ],
      "c": 13227480,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "stabilizer-fin-1",
      "p": [
        0.98,
        0.86,
        0.44
      ],
      "s": [
        0.62,
        0.11,
        1.35
      ],
      "c": 4810624
    },
    {
      "t": "rod",
      "n": "sensor-mast",
      "from": [
        0,
        1.35,
        -0.65
      ],
      "to": [
        0,
        2,
        -0.65
      ],
      "r": 0.05,
      "c": 13227480
    },
    {
      "t": "sphere",
      "n": "multibeam-sonar",
      "p": [
        0,
        0.35,
        1.13
      ],
      "s": [
        0.44,
        0.2,
        0.38
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "survey-camera-0",
      "p": [
        -0.33,
        0.86,
        1.42
      ],
      "s": [
        0.13,
        0.1,
        0.1
      ],
      "c": 13227480
    },
    {
      "t": "box",
      "n": "survey-camera-1",
      "p": [
        -0.11,
        0.86,
        1.42
      ],
      "s": [
        0.13,
        0.1,
        0.1
      ],
      "c": 13227480
    },
    {
      "t": "box",
      "n": "survey-camera-2",
      "p": [
        0.11,
        0.86,
        1.42
      ],
      "s": [
        0.13,
        0.1,
        0.1
      ],
      "c": 13227480
    },
    {
      "t": "box",
      "n": "survey-camera-3",
      "p": [
        0.33,
        0.86,
        1.42
      ],
      "s": [
        0.13,
        0.1,
        0.1
      ],
      "c": 13227480
    }
  ]
}); }
