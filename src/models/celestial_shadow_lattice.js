import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Celestial Shadow Lattice; stylized visual prototype only. */
export const assetMeta = {
  "id": "decor.celestial-shadow-lattice.001",
  "slug": "celestial-shadow-lattice",
  "title": "Celestial Shadow Lattice",
  "title_zh": "星象投影格栅摆件",
  "summary": "Original celestial shadow lattice study with ring and panel assemblies and individually named functional details",
  "category": "decor",
  "tags": [
    "celestial",
    "shadow",
    "lattice",
    "decor",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.25,
    0.31,
    0.25
  ],
  "generator": "createCelestialShadowLattice",
  "source_path": "src/models/celestial_shadow_lattice.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/celestial-shadow-lattice.webp",
  "accent": "#e8bd83",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createCelestialShadowLattice() { return buildRecipe({
  "title": "Celestial Shadow Lattice",
  "dimensions": [
    0.25,
    0.31,
    0.25
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
      "n": "panel-1-louver-0",
      "p": [
        -0.76,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-1",
      "p": [
        -0.62,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-2",
      "p": [
        -0.48,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-3",
      "p": [
        -0.33999999999999997,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-4",
      "p": [
        -0.19999999999999996,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-5",
      "p": [
        -0.05999999999999994,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-6",
      "p": [
        0.08000000000000007,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-7",
      "p": [
        0.22000000000000008,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-8",
      "p": [
        0.3600000000000001,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-9",
      "p": [
        0.5000000000000002,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 15252867,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-10",
      "p": [
        0.6400000000000001,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-11",
      "p": [
        0.78,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 9533096,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-lintel",
      "p": [
        0,
        1.79,
        -0.2
      ],
      "s": [
        1.78,
        0.14,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-sill",
      "p": [
        0,
        0.28,
        -0.2
      ],
      "s": [
        1.78,
        0.14,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    }
  ]
}); }
