import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Modular Triple Handwash Sink / 模块化三人洗手池. */
export const assetMeta = {
  "id": "bathroom.modular-triple-handwash-sink.001",
  "slug": "modular-triple-handwash-sink",
  "title": "Modular Triple Handwash Sink",
  "title_zh": "模块化三人洗手池",
  "summary": "Three-station public washbasin with faucets, soap dispensers and splash protection",
  "category": "bathroom",
  "tags": [
    "modular",
    "triple",
    "handwash",
    "sink",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.36,
    1.35,
    0.91
  ],
  "generator": "createModularTripleHandwashSink",
  "source_path": "src/models/modular_triple_handwash_sink.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/modular-triple-handwash-sink.webp",
  "accent": "#a3c6c8"
};
export function createModularTripleHandwashSink() { return buildRecipe({
  "title": "Modular Triple Handwash Sink",
  "dimensions": [
    2.36,
    1.35,
    0.91
  ],
  "parts": [
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-public-sink-cabinet",
      "p": [
        0,
        0.54,
        0
      ],
      "s": [
        2.1,
        0.68,
        0.74
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-one-piece-three-basin-countertop",
      "p": [
        0,
        0.91,
        0
      ],
      "s": [
        2.19,
        0.12,
        0.8
      ],
      "c": 14739945
    },
    {
      "t": "sphere",
      "n": "modular-triple-handwash-sink-ceramic-handwash-basin-0",
      "p": [
        -0.7,
        0.99,
        0.07
      ],
      "s": [
        0.49,
        0.12,
        0.42
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "modular-triple-handwash-sink-gooseneck-mixer-0",
      "from": [
        -0.7,
        1.01,
        -0.22
      ],
      "to": [
        -0.7,
        1.32,
        0.04
      ],
      "r": 0.03,
      "c": 4479851
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-soap-dispensing-unit-0",
      "p": [
        -0.47,
        1.23,
        -0.23
      ],
      "s": [
        0.15,
        0.24,
        0.13
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "modular-triple-handwash-sink-drain-filter-0",
      "p": [
        -0.7,
        0.98,
        0.12
      ],
      "s": [
        0.08,
        0.03,
        0.08
      ],
      "c": 4479851
    },
    {
      "t": "sphere",
      "n": "modular-triple-handwash-sink-ceramic-handwash-basin-1",
      "p": [
        0,
        0.99,
        0.07
      ],
      "s": [
        0.49,
        0.12,
        0.42
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "modular-triple-handwash-sink-gooseneck-mixer-1",
      "from": [
        0,
        1.01,
        -0.22
      ],
      "to": [
        0,
        1.32,
        0.04
      ],
      "r": 0.03,
      "c": 4479851
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-soap-dispensing-unit-1",
      "p": [
        0.23,
        1.23,
        -0.23
      ],
      "s": [
        0.15,
        0.24,
        0.13
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "modular-triple-handwash-sink-drain-filter-1",
      "p": [
        0,
        0.98,
        0.12
      ],
      "s": [
        0.08,
        0.03,
        0.08
      ],
      "c": 4479851
    },
    {
      "t": "sphere",
      "n": "modular-triple-handwash-sink-ceramic-handwash-basin-2",
      "p": [
        0.7,
        0.99,
        0.07
      ],
      "s": [
        0.49,
        0.12,
        0.42
      ],
      "c": 10733256
    },
    {
      "t": "rod",
      "n": "modular-triple-handwash-sink-gooseneck-mixer-2",
      "from": [
        0.7,
        1.01,
        -0.22
      ],
      "to": [
        0.7,
        1.32,
        0.04
      ],
      "r": 0.03,
      "c": 4479851
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-soap-dispensing-unit-2",
      "p": [
        0.9299999999999999,
        1.23,
        -0.23
      ],
      "s": [
        0.15,
        0.24,
        0.13
      ],
      "c": 6588058
    },
    {
      "t": "cylinder",
      "n": "modular-triple-handwash-sink-drain-filter-2",
      "p": [
        0.7,
        0.98,
        0.12
      ],
      "s": [
        0.08,
        0.03,
        0.08
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-sanitary-wall-splashplate",
      "p": [
        0,
        1.21,
        -0.4
      ],
      "s": [
        2.2,
        0.37,
        0.08
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-structural-fitting-0",
      "p": [
        -0.4,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-structural-fitting-1",
      "p": [
        -0.33,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "modular-triple-handwash-sink-structural-fitting-2",
      "p": [
        -0.26,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4479851
    }
  ]
}); }
