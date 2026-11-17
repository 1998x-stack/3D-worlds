import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Folding Auditorium Bench / 折叠阶梯会场长椅. */
export const assetMeta = {
  "id": "furniture.folding-auditorium-bench.001",
  "slug": "folding-auditorium-bench",
  "title": "Folding Auditorium Bench",
  "title_zh": "折叠阶梯会场长椅",
  "summary": "Tiered lecture seating with flip-up cushions and steel support frames",
  "category": "furniture",
  "tags": [
    "folding",
    "auditorium",
    "bench",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.45,
    1.35,
    1.14
  ],
  "generator": "createFoldingAuditoriumBench",
  "source_path": "src/models/folding_auditorium_bench.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/folding-auditorium-bench.webp",
  "accent": "#bd9c77"
};
export function createFoldingAuditoriumBench() { return buildRecipe({
  "title": "Folding Auditorium Bench",
  "dimensions": [
    2.45,
    1.35,
    1.14
  ],
  "parts": [
    {
      "t": "box",
      "n": "seat-cushion-0",
      "p": [
        -0.74,
        0.56,
        0.08
      ],
      "s": [
        0.64,
        0.14,
        0.63
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "flipping-backrest-0",
      "p": [
        -0.74,
        0.92,
        -0.3
      ],
      "s": [
        0.63,
        0.65,
        0.1
      ],
      "c": 12426359
    },
    {
      "t": "rod",
      "n": "support-strut-0--1",
      "from": [
        -1.03,
        0.61,
        -0.25
      ],
      "to": [
        -1.07,
        0.11,
        0.15
      ],
      "r": 0.035,
      "c": 5928329
    },
    {
      "t": "rod",
      "n": "support-strut-0-1",
      "from": [
        -0.45,
        0.61,
        -0.25
      ],
      "to": [
        -0.41,
        0.11,
        0.15
      ],
      "r": 0.035,
      "c": 5928329
    },
    {
      "t": "box",
      "n": "seat-number-0",
      "p": [
        -0.74,
        0.33,
        -0.38
      ],
      "s": [
        0.19,
        0.08,
        0.025
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "seat-cushion-1",
      "p": [
        0,
        0.56,
        0.08
      ],
      "s": [
        0.64,
        0.14,
        0.63
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "flipping-backrest-1",
      "p": [
        0,
        0.92,
        -0.3
      ],
      "s": [
        0.63,
        0.65,
        0.1
      ],
      "c": 12426359
    },
    {
      "t": "rod",
      "n": "support-strut-1--1",
      "from": [
        -0.29,
        0.61,
        -0.25
      ],
      "to": [
        -0.33,
        0.11,
        0.15
      ],
      "r": 0.035,
      "c": 5928329
    },
    {
      "t": "rod",
      "n": "support-strut-1-1",
      "from": [
        0.29,
        0.61,
        -0.25
      ],
      "to": [
        0.33,
        0.11,
        0.15
      ],
      "r": 0.035,
      "c": 5928329
    },
    {
      "t": "box",
      "n": "seat-number-1",
      "p": [
        0,
        0.33,
        -0.38
      ],
      "s": [
        0.19,
        0.08,
        0.025
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "seat-cushion-2",
      "p": [
        0.74,
        0.56,
        0.08
      ],
      "s": [
        0.64,
        0.14,
        0.63
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "flipping-backrest-2",
      "p": [
        0.74,
        0.92,
        -0.3
      ],
      "s": [
        0.63,
        0.65,
        0.1
      ],
      "c": 12426359
    },
    {
      "t": "rod",
      "n": "support-strut-2--1",
      "from": [
        0.45,
        0.61,
        -0.25
      ],
      "to": [
        0.41,
        0.11,
        0.15
      ],
      "r": 0.035,
      "c": 5928329
    },
    {
      "t": "rod",
      "n": "support-strut-2-1",
      "from": [
        1.03,
        0.61,
        -0.25
      ],
      "to": [
        1.07,
        0.11,
        0.15
      ],
      "r": 0.035,
      "c": 5928329
    },
    {
      "t": "box",
      "n": "seat-number-2",
      "p": [
        0.74,
        0.33,
        -0.38
      ],
      "s": [
        0.19,
        0.08,
        0.025
      ],
      "c": 4541272
    },
    {
      "t": "rod",
      "n": "joined-rear-stabilizer",
      "from": [
        -1.11,
        0.23,
        -0.34
      ],
      "to": [
        1.11,
        0.23,
        -0.34
      ],
      "r": 0.05,
      "c": 4541272
    }
  ]
}); }
