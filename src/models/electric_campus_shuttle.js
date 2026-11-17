import { buildRecipe } from './recipe_engine.js';
/** Electric Campus Shuttle / 电动校园接驳车: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "vehicles.electric-campus-shuttle.001",
  "slug": "electric-campus-shuttle",
  "title": "Electric Campus Shuttle",
  "title_zh": "电动校园接驳车",
  "summary": "Low-floor electric shuttle bus with panoramic windows and roof battery pod",
  "category": "vehicles",
  "tags": [
    "electric",
    "campus",
    "shuttle",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.18,
    2.65,
    4.25
  ],
  "generator": "createElectricCampusShuttle",
  "source_path": "src/models/electric_campus_shuttle.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/electric-campus-shuttle.webp",
  "accent": "#e0a24d"
};
export function createElectricCampusShuttle() { return buildRecipe({
  "title": "Electric Campus Shuttle",
  "dimensions": [
    2.18,
    2.65,
    4.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "electric-shuttle-body",
      "p": [
        0,
        1.16,
        0
      ],
      "s": [
        1.94,
        1.45,
        3.45
      ],
      "c": 14721613
    },
    {
      "t": "box",
      "n": "passenger-roof",
      "p": [
        0,
        2.04,
        0
      ],
      "s": [
        1.91,
        0.15,
        3.39
      ],
      "c": 4810624
    },
    {
      "t": "box",
      "n": "panoramic-glass--1--1.15",
      "p": [
        -1,
        1.52,
        -1.15
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass-1--1.15",
      "p": [
        1,
        1.52,
        -1.15
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass--1--0.35",
      "p": [
        -1,
        1.52,
        -0.35
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass-1--0.35",
      "p": [
        1,
        1.52,
        -0.35
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass--1-0.45",
      "p": [
        -1,
        1.52,
        0.45
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass-1-0.45",
      "p": [
        1,
        1.52,
        0.45
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass--1-1.25",
      "p": [
        -1,
        1.52,
        1.25
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "panoramic-glass-1-1.25",
      "p": [
        1,
        1.52,
        1.25
      ],
      "s": [
        0.03,
        0.69,
        0.58
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "windscreen",
      "p": [
        0,
        1.56,
        1.75
      ],
      "s": [
        1.54,
        0.79,
        0.04
      ],
      "c": 2570051
    },
    {
      "t": "box",
      "n": "roof-battery",
      "p": [
        0,
        2.19,
        -0.33
      ],
      "s": [
        1.35,
        0.18,
        1.1
      ],
      "c": 13227480
    },
    {
      "t": "cylinder",
      "n": "shuttle-wheel--1--1.17",
      "p": [
        -0.98,
        0.34,
        -1.17
      ],
      "s": [
        0.5,
        0.16,
        0.5
      ],
      "c": 13227480,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "shuttle-wheel--1-1.12",
      "p": [
        -0.98,
        0.34,
        1.12
      ],
      "s": [
        0.5,
        0.16,
        0.5
      ],
      "c": 13227480,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "shuttle-wheel-1--1.17",
      "p": [
        0.98,
        0.34,
        -1.17
      ],
      "s": [
        0.5,
        0.16,
        0.5
      ],
      "c": 13227480,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "shuttle-wheel-1-1.12",
      "p": [
        0.98,
        0.34,
        1.12
      ],
      "s": [
        0.5,
        0.16,
        0.5
      ],
      "c": 13227480,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    }
  ]
}); }
