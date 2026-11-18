import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Alien Microbe Observation Vault; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "scifi.alien-microbe-observation-vault.001",
  "slug": "alien-microbe-observation-vault",
  "title": "Alien Microbe Observation Vault",
  "title_zh": "外星微生物观测密室",
  "summary": "Speculative containment laboratory with separate specimen pods",
  "category": "scifi",
  "tags": [
    "alien",
    "microbe",
    "observation",
    "vault",
    "scifi",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.3,
    0.32,
    0.29
  ],
  "generator": "createAlienMicrobeObservationVault",
  "source_path": "src/models/alien_microbe_observation_vault.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/alien-microbe-observation-vault.webp",
  "accent": "#70dfca",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createAlienMicrobeObservationVault() { return buildRecipe({
  "title": "Alien Microbe Observation Vault",
  "dimensions": [
    0.3,
    0.32,
    0.29
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "biohazard-floor",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        1.8,
        0.17,
        1.49
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "sealed-post--1",
      "p": [
        -0.68,
        1.09,
        -0.38
      ],
      "s": [
        0.19,
        1.75,
        0.19
      ],
      "c": 7367850,
      "finish": "matte"
    },
    {
      "t": "torus",
      "n": "safety-ring--1",
      "p": [
        -0.48,
        1.39,
        0
      ],
      "s": [
        0.58,
        0.58,
        0.11
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        -0.17
      ]
    },
    {
      "t": "rounded-box",
      "n": "sealed-post-1",
      "p": [
        0.68,
        1.09,
        -0.38
      ],
      "s": [
        0.19,
        1.75,
        0.19
      ],
      "c": 7367850,
      "finish": "matte"
    },
    {
      "t": "torus",
      "n": "safety-ring-1",
      "p": [
        0.48,
        1.39,
        0
      ],
      "s": [
        0.58,
        0.58,
        0.11
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        0.17
      ]
    },
    {
      "t": "rounded-box",
      "n": "culture-cell-0",
      "p": [
        -0.65,
        0.94,
        0.21
      ],
      "s": [
        0.25,
        0.76,
        0.32
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "pressure-base-0",
      "p": [
        -0.65,
        0.52,
        0.21
      ],
      "s": [
        0.29,
        0.13,
        0.4
      ],
      "c": 7397322,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "alien-culture-0",
      "p": [
        -0.65,
        0.91,
        0.21
      ],
      "s": [
        0.1,
        0.12,
        0.09
      ],
      "c": 13657955,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-0-0",
      "p": [
        -0.595,
        0.87,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-0-1",
      "p": [
        -0.6944,
        0.903,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-0-2",
      "p": [
        -0.6333,
        0.936,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-0-3",
      "p": [
        -0.6325,
        0.969,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-0-4",
      "p": [
        -0.6949,
        1.002,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "sample-tag-0",
      "p": [
        -0.65,
        0.64,
        0.42
      ],
      "s": [
        0.18,
        0.09,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "culture-cell-1",
      "p": [
        -0.325,
        0.94,
        0.21
      ],
      "s": [
        0.25,
        0.76,
        0.32
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "pressure-base-1",
      "p": [
        -0.325,
        0.52,
        0.21
      ],
      "s": [
        0.29,
        0.13,
        0.4
      ],
      "c": 7397322,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "alien-culture-1",
      "p": [
        -0.325,
        0.91,
        0.21
      ],
      "s": [
        0.1,
        0.12,
        0.09
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-1-0",
      "p": [
        -0.27,
        0.87,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-1-1",
      "p": [
        -0.3694,
        0.903,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-1-2",
      "p": [
        -0.3083,
        0.936,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-1-3",
      "p": [
        -0.3075,
        0.969,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-1-4",
      "p": [
        -0.3699,
        1.002,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "sample-tag-1",
      "p": [
        -0.325,
        0.64,
        0.42
      ],
      "s": [
        0.18,
        0.09,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "culture-cell-2",
      "p": [
        0,
        0.94,
        0.21
      ],
      "s": [
        0.25,
        0.76,
        0.32
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "pressure-base-2",
      "p": [
        0,
        0.52,
        0.21
      ],
      "s": [
        0.29,
        0.13,
        0.4
      ],
      "c": 7397322,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "alien-culture-2",
      "p": [
        0,
        0.91,
        0.21
      ],
      "s": [
        0.1,
        0.12,
        0.09
      ],
      "c": 13657955,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-2-0",
      "p": [
        0.055,
        0.87,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-2-1",
      "p": [
        -0.0444,
        0.903,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-2-2",
      "p": [
        0.0167,
        0.936,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-2-3",
      "p": [
        0.0175,
        0.969,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-2-4",
      "p": [
        -0.0449,
        1.002,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "sample-tag-2",
      "p": [
        0,
        0.64,
        0.42
      ],
      "s": [
        0.18,
        0.09,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "culture-cell-3",
      "p": [
        0.325,
        0.94,
        0.21
      ],
      "s": [
        0.25,
        0.76,
        0.32
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "pressure-base-3",
      "p": [
        0.325,
        0.52,
        0.21
      ],
      "s": [
        0.29,
        0.13,
        0.4
      ],
      "c": 7397322,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "alien-culture-3",
      "p": [
        0.325,
        0.91,
        0.21
      ],
      "s": [
        0.1,
        0.12,
        0.09
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-3-0",
      "p": [
        0.38,
        0.87,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-3-1",
      "p": [
        0.2806,
        0.903,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-3-2",
      "p": [
        0.3417,
        0.936,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-3-3",
      "p": [
        0.3425,
        0.969,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-3-4",
      "p": [
        0.2801,
        1.002,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "sample-tag-3",
      "p": [
        0.325,
        0.64,
        0.42
      ],
      "s": [
        0.18,
        0.09,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "culture-cell-4",
      "p": [
        0.65,
        0.94,
        0.21
      ],
      "s": [
        0.25,
        0.76,
        0.32
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "pressure-base-4",
      "p": [
        0.65,
        0.52,
        0.21
      ],
      "s": [
        0.29,
        0.13,
        0.4
      ],
      "c": 7397322,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "alien-culture-4",
      "p": [
        0.65,
        0.91,
        0.21
      ],
      "s": [
        0.1,
        0.12,
        0.09
      ],
      "c": 13657955,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-4-0",
      "p": [
        0.705,
        0.87,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-4-1",
      "p": [
        0.6056,
        0.903,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-4-2",
      "p": [
        0.6667,
        0.936,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-4-3",
      "p": [
        0.6675,
        0.969,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "cell-organelle-4-4",
      "p": [
        0.6051,
        1.002,
        0.29
      ],
      "s": [
        0.029,
        0.029,
        0.029
      ],
      "c": 15910009,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "sample-tag-4",
      "p": [
        0.65,
        0.64,
        0.42
      ],
      "s": [
        0.18,
        0.09,
        0.02
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "observation-console",
      "p": [
        0,
        0.36,
        -0.58
      ],
      "s": [
        1.24,
        0.45,
        0.26
      ],
      "c": 7367850,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-0",
      "p": [
        -0.52,
        0.62,
        -0.43
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-1",
      "p": [
        -0.17,
        0.62,
        -0.43
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-2",
      "p": [
        0.18,
        0.62,
        -0.43
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-3",
      "p": [
        0.53,
        0.62,
        -0.43
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-4",
      "p": [
        -0.52,
        0.62,
        -0.41
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-5",
      "p": [
        -0.17,
        0.62,
        -0.41
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-6",
      "p": [
        0.18,
        0.62,
        -0.41
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-7",
      "p": [
        0.53,
        0.62,
        -0.41
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-8",
      "p": [
        -0.52,
        0.62,
        -0.39
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-9",
      "p": [
        -0.17,
        0.62,
        -0.39
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-10",
      "p": [
        0.18,
        0.62,
        -0.39
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-key-11",
      "p": [
        0.53,
        0.62,
        -0.39
      ],
      "s": [
        0.2,
        0.06,
        0.02
      ],
      "c": 12504530,
      "finish": "matte"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
