import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Modular Public Flood Barrier Gate / 城市防洪闸门模块. */
export const assetMeta = {
  "id": "urban.modular-public-flood-barrier-gate.001",
  "slug": "modular-public-flood-barrier-gate",
  "title": "Modular Public Flood Barrier Gate",
  "title_zh": "城市防洪闸门模块",
  "summary": "Removable municipal flood barrier gate with side posts, stacked seals and warning lights",
  "category": "urban",
  "tags": [
    "modular",
    "public",
    "flood",
    "barrier",
    "gate",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.66,
    2.28,
    1.52
  ],
  "generator": "createModularPublicFloodBarrierGate",
  "source_path": "src/models/modular_public_flood_barrier_gate.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/modular-public-flood-barrier-gate.webp",
  "accent": "#d8b76e"
};
export function createModularPublicFloodBarrierGate() { return buildRecipe({
  "title": "Modular Public Flood Barrier Gate",
  "dimensions": [
    3.66,
    2.28,
    1.52
  ],
  "parts": [
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-sealed-concrete-sill",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        3.28,
        0.3,
        1.11
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-flood-barrier-locking-post--1",
      "p": [
        -1.48,
        1.17,
        0
      ],
      "s": [
        0.23,
        2.22,
        0.42
      ],
      "c": 11190439
    },
    {
      "t": "cylinder",
      "n": "modular-public-flood-barrier-gate-removable-gate-lock--1",
      "p": [
        -1.47,
        2.28,
        0
      ],
      "s": [
        0.21,
        0.13,
        0.21
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-flood-barrier-locking-post-1",
      "p": [
        1.48,
        1.17,
        0
      ],
      "s": [
        0.23,
        2.22,
        0.42
      ],
      "c": 11190439
    },
    {
      "t": "cylinder",
      "n": "modular-public-flood-barrier-gate-removable-gate-lock-1",
      "p": [
        1.47,
        2.28,
        0
      ],
      "s": [
        0.21,
        0.13,
        0.21
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-0",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-0",
      "p": [
        0,
        0.25,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-1",
      "p": [
        0,
        0.5650000000000001,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-1",
      "p": [
        0,
        0.475,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-2",
      "p": [
        0,
        0.79,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-2",
      "p": [
        0,
        0.7,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-3",
      "p": [
        0,
        1.0150000000000001,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-3",
      "p": [
        0,
        0.925,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-4",
      "p": [
        0,
        1.24,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-4",
      "p": [
        0,
        1.15,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-5",
      "p": [
        0,
        1.465,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-5",
      "p": [
        0,
        1.375,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-6",
      "p": [
        0,
        1.6900000000000002,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-6",
      "p": [
        0,
        1.6,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-7",
      "p": [
        0,
        1.915,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 7178134
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-7",
      "p": [
        0,
        1.825,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-watertight-flood-barrier-plank-8",
      "p": [
        0,
        2.14,
        0
      ],
      "s": [
        2.82,
        0.19,
        0.31
      ],
      "c": 14202734
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-interlocking-neoprene-gasket-8",
      "p": [
        0,
        2.05,
        0.17
      ],
      "s": [
        2.73,
        0.038,
        0.041
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-warning-reflector-0",
      "p": [
        -1.2,
        1.15,
        0.196
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-warning-reflector-1",
      "p": [
        -0.72,
        1.15,
        0.196
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-warning-reflector-2",
      "p": [
        -0.24,
        1.15,
        0.196
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-warning-reflector-3",
      "p": [
        0.24,
        1.15,
        0.196
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-warning-reflector-4",
      "p": [
        0.72,
        1.15,
        0.196
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 4872041
    },
    {
      "t": "box",
      "n": "modular-public-flood-barrier-gate-floodgate-warning-reflector-5",
      "p": [
        1.2,
        1.15,
        0.196
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 4872041
    }
  ]
}); }
