import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Atmospheric Particle Counter / 大气颗粒物计数器. */
export const assetMeta = {
  "id": "electronics.atmospheric-particle-counter.001",
  "slug": "atmospheric-particle-counter",
  "title": "Atmospheric Particle Counter",
  "title_zh": "大气颗粒物计数器",
  "summary": "Research particle sampler with intake chimney, filter cartridge and telemetry readout",
  "category": "electronics",
  "tags": [
    "atmospheric",
    "particle",
    "counter",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.92,
    1.36,
    0.82
  ],
  "generator": "createAtmosphericParticleCounter",
  "source_path": "src/models/atmospheric_particle_counter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/atmospheric-particle-counter.webp",
  "accent": "#d7c8ad"
};
export function createAtmosphericParticleCounter() { return buildRecipe({
  "title": "Atmospheric Particle Counter",
  "dimensions": [
    0.92,
    1.36,
    0.82
  ],
  "parts": [
    {
      "t": "box",
      "n": "atmospheric-particle-counter-particle-counter-weatherproof-casing",
      "p": [
        0,
        0.64,
        0
      ],
      "s": [
        0.72,
        1.16,
        0.57
      ],
      "c": 4678263
    },
    {
      "t": "cylinder",
      "n": "atmospheric-particle-counter-air-sample-inlet-chimney",
      "p": [
        0,
        1.28,
        0
      ],
      "s": [
        0.18,
        0.43,
        0.18
      ],
      "c": 9094085
    },
    {
      "t": "sphere",
      "n": "atmospheric-particle-counter-rainproof-intake-cap",
      "p": [
        0,
        1.49,
        0
      ],
      "s": [
        0.32,
        0.09,
        0.29
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-air-quality-telemetry-screen",
      "p": [
        0,
        1,
        0.3
      ],
      "s": [
        0.48,
        0.21,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-0",
      "p": [
        -0.25,
        0.31,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-1",
      "p": [
        -0.12,
        0.31,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-2",
      "p": [
        0.010000000000000009,
        0.31,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-3",
      "p": [
        0.14,
        0.31,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-4",
      "p": [
        0.27,
        0.31,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-5",
      "p": [
        -0.25,
        0.51,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-6",
      "p": [
        -0.12,
        0.51,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-7",
      "p": [
        0.010000000000000009,
        0.51,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-8",
      "p": [
        0.14,
        0.51,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-filter-grille-slot-9",
      "p": [
        0.27,
        0.51,
        0.3
      ],
      "s": [
        0.075,
        0.11,
        0.012
      ],
      "c": 2307911
    },
    {
      "t": "cylinder",
      "n": "atmospheric-particle-counter-sample-filter-cartridge-0",
      "p": [
        -0.27,
        0.23,
        -0.07
      ],
      "s": [
        0.12,
        0.26,
        0.12
      ],
      "c": 9094085
    },
    {
      "t": "cylinder",
      "n": "atmospheric-particle-counter-sample-filter-cartridge-1",
      "p": [
        -0.14,
        0.23,
        -0.07
      ],
      "s": [
        0.12,
        0.26,
        0.12
      ],
      "c": 9094085
    },
    {
      "t": "cylinder",
      "n": "atmospheric-particle-counter-sample-filter-cartridge-2",
      "p": [
        -0.010000000000000009,
        0.23,
        -0.07
      ],
      "s": [
        0.12,
        0.26,
        0.12
      ],
      "c": 9094085
    },
    {
      "t": "cylinder",
      "n": "atmospheric-particle-counter-sample-filter-cartridge-3",
      "p": [
        0.12,
        0.23,
        -0.07
      ],
      "s": [
        0.12,
        0.26,
        0.12
      ],
      "c": 9094085
    },
    {
      "t": "cylinder",
      "n": "atmospheric-particle-counter-sample-filter-cartridge-4",
      "p": [
        0.25,
        0.23,
        -0.07
      ],
      "s": [
        0.12,
        0.26,
        0.12
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "atmospheric-particle-counter-counter-enclosure-plinth",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        0.84,
        0.17,
        0.66
      ],
      "c": 2307911
    }
  ]
}); }
