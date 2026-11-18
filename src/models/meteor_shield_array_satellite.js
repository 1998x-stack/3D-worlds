import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Meteor Shield Array Satellite; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "scifi.meteor-shield-array-satellite.001",
  "slug": "meteor-shield-array-satellite",
  "title": "Meteor Shield Array Satellite",
  "title_zh": "陨石防护阵列卫星",
  "summary": "Original orbital craft with articulated shield arrays",
  "category": "scifi",
  "tags": [
    "meteor",
    "shield",
    "array",
    "satellite",
    "scifi",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.34,
    0.34,
    0.32
  ],
  "generator": "createMeteorShieldArraySatellite",
  "source_path": "src/models/meteor_shield_array_satellite.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/meteor-shield-array-satellite.webp",
  "accent": "#70dfca",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createMeteorShieldArraySatellite() { return buildRecipe({
  "title": "Meteor Shield Array Satellite",
  "dimensions": [
    0.34,
    0.34,
    0.32
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "shield-satellite-core",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        0.83,
        0.92,
        0.72
      ],
      "c": 7367850,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "deployable-boom--1",
      "from": [
        -0.36,
        1.15,
        0
      ],
      "to": [
        -1.04,
        1.15,
        0
      ],
      "r": 0.059,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "shield-axis--1",
      "p": [
        -0.79,
        1.14,
        0
      ],
      "s": [
        0.29,
        0.2,
        0.29
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-0",
      "p": [
        -1.03,
        0.41,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.26
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-1",
      "p": [
        -1.081,
        0.61,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.213
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-2",
      "p": [
        -1.132,
        0.81,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.166
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-3",
      "p": [
        -1.183,
        1.01,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.119
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-4",
      "p": [
        -1.234,
        1.21,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.072
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-5",
      "p": [
        -1.285,
        1.41,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.025
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-6",
      "p": [
        -1.336,
        1.61,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.978
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-7",
      "p": [
        -1.387,
        1.81,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.931
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella--1-8",
      "p": [
        -1.438,
        2.01,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.884
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "external-sensor--1",
      "p": [
        -0.91,
        1.66,
        0.51
      ],
      "s": [
        0.17,
        0.17,
        0.12
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "deployable-boom-1",
      "from": [
        0.36,
        1.15,
        0
      ],
      "to": [
        1.04,
        1.15,
        0
      ],
      "r": 0.059,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "shield-axis-1",
      "p": [
        0.79,
        1.14,
        0
      ],
      "s": [
        0.29,
        0.2,
        0.29
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-0",
      "p": [
        1.03,
        0.41,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.26
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-1",
      "p": [
        1.081,
        0.61,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.213
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-2",
      "p": [
        1.132,
        0.81,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.166
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-3",
      "p": [
        1.183,
        1.01,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.119
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-4",
      "p": [
        1.234,
        1.21,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.072
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-5",
      "p": [
        1.285,
        1.41,
        0
      ],
      "s": [
        0.11,
        0.12,
        1.025
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-6",
      "p": [
        1.336,
        1.61,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.978
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-7",
      "p": [
        1.387,
        1.81,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.931
      ],
      "c": 7367850,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "impact-lamella-1-8",
      "p": [
        1.438,
        2.01,
        0
      ],
      "s": [
        0.11,
        0.12,
        0.884
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "external-sensor-1",
      "p": [
        0.91,
        1.66,
        0.51
      ],
      "s": [
        0.17,
        0.17,
        0.12
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "truss-beam-0",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.57,
        2.08,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-1",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.5136,
        2.08,
        0.243
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-2",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.3554,
        2.08,
        0.4378
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-3",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.1268,
        2.08,
        0.546
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-4",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.1268,
        2.08,
        0.546
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-5",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.3554,
        2.08,
        0.4378
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-6",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.5136,
        2.08,
        0.243
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-7",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.57,
        2.08,
        0
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-8",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.5136,
        2.08,
        -0.243
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-9",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.3554,
        2.08,
        -0.4378
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-10",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        -0.1268,
        2.08,
        -0.546
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-11",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.1268,
        2.08,
        -0.546
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-12",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.3554,
        2.08,
        -0.4378
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "truss-beam-13",
      "from": [
        0,
        1.82,
        0
      ],
      "to": [
        0.5136,
        2.08,
        -0.243
      ],
      "r": 0.021,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-0",
      "p": [
        -0.59,
        0.28,
        -0.63
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-1",
      "p": [
        -0.2,
        0.28,
        -0.63
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-2",
      "p": [
        0.19,
        0.28,
        -0.63
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-3",
      "p": [
        0.58,
        0.28,
        -0.63
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-4",
      "p": [
        -0.59,
        0.28,
        -0.49
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-5",
      "p": [
        -0.2,
        0.28,
        -0.49
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-6",
      "p": [
        0.19,
        0.28,
        -0.49
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "solar-patch-7",
      "p": [
        0.58,
        0.28,
        -0.49
      ],
      "s": [
        0.27,
        0.035,
        0.17
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "torus",
      "n": "radar-halo",
      "p": [
        0,
        1.12,
        0.45
      ],
      "s": [
        0.45,
        0.45,
        0.1
      ],
      "c": 7397322,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
