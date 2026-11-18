import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Kinetic Moire Desk Orbit; stylized visual prototype only. */
export const assetMeta = {
  "id": "decor.kinetic-moire-desk-orbit.001",
  "slug": "kinetic-moire-desk-orbit",
  "title": "Kinetic Moire Desk Orbit",
  "title_zh": "莫尔纹桌面星环",
  "summary": "Original kinetic moire desk orbit study with ring and gauge assemblies and individually named functional details",
  "category": "decor",
  "tags": [
    "kinetic",
    "moire",
    "desk",
    "orbit",
    "decor",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.26,
    0.32,
    0.23
  ],
  "generator": "createKineticMoireDeskOrbit",
  "source_path": "src/models/kinetic_moire_desk_orbit.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/kinetic-moire-desk-orbit.webp",
  "accent": "#e8bd83",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createKineticMoireDeskOrbit() { return buildRecipe({
  "title": "Kinetic Moire Desk Orbit",
  "dimensions": [
    0.26,
    0.32,
    0.23
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 15252867,
      "finish": "anodized"
    },
    {
      "t": "torus",
      "n": "ring-0-orbit-0",
      "p": [
        0,
        1.36,
        0
      ],
      "s": [
        0.68,
        0.68,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "ring-0-orbit-1",
      "p": [
        0,
        1.36,
        0
      ],
      "s": [
        0.9,
        0.9,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        0.23,
        0.32,
        0.17
      ]
    },
    {
      "t": "torus",
      "n": "ring-0-orbit-2",
      "p": [
        0,
        1.36,
        0
      ],
      "s": [
        1.12,
        1.12,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        0.46,
        0.64,
        0.34
      ]
    },
    {
      "t": "torus",
      "n": "ring-0-orbit-3",
      "p": [
        0,
        1.36,
        0
      ],
      "s": [
        1.34,
        1.34,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        0.6900000000000001,
        0.96,
        0.51
      ]
    },
    {
      "t": "torus",
      "n": "ring-0-orbit-4",
      "p": [
        0,
        1.36,
        0
      ],
      "s": [
        1.56,
        1.56,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        0.92,
        1.28,
        0.68
      ]
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-0",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        0.45,
        1.36,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-1",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        0.49363448015713013,
        1.645,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-2",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        0.34500000000000003,
        1.9575575286112628,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-3",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        4.9598195365467806e-17,
        2.17,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-4",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        -0.2249999999999999,
        1.7497114317029976,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-5",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        -0.49363448015713013,
        1.645,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-6",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        -0.69,
        1.36,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-7",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        -0.7014805770653955,
        0.9550000000000003,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-8",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        -0.2250000000000002,
        0.9702885682970028,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-9",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        -1.047073013270987e-16,
        0.79,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-10",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        0.34500000000000003,
        0.7624424713887376,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "ring-0-spoke-11",
      "from": [
        0,
        1.36,
        0
      ],
      "to": [
        0.7014805770653951,
        0.9549999999999997,
        0.05
      ],
      "r": 0.017,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-rule",
      "p": [
        0,
        0.33,
        -0.38
      ],
      "s": [
        1.68,
        0.12,
        0.23
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-0",
      "p": [
        -0.77,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-1",
      "p": [
        -0.66,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-2",
      "p": [
        -0.55,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-3",
      "p": [
        -0.44,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-4",
      "p": [
        -0.33,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-5",
      "p": [
        -0.21999999999999997,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-6",
      "p": [
        -0.10999999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-7",
      "p": [
        0,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-8",
      "p": [
        0.10999999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-9",
      "p": [
        0.21999999999999997,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-10",
      "p": [
        0.33000000000000007,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-11",
      "p": [
        0.43999999999999995,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-12",
      "p": [
        0.55,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-13",
      "p": [
        0.6599999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-14",
      "p": [
        0.77,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    }
  ]
}); }
