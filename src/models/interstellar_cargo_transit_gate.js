import { buildRecipe } from './recipe_engine.js';
/** Interstellar Cargo Transit Gate / 星际货运传送门: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "scifi.interstellar-cargo-transit-gate.001",
  "slug": "interstellar-cargo-transit-gate",
  "title": "Interstellar Cargo Transit Gate",
  "title_zh": "星际货运传送门",
  "summary": "Science-fiction nonweapon logistics portal with guide rails and active energy ring",
  "category": "scifi",
  "tags": [
    "interstellar",
    "cargo",
    "transit",
    "gate",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.35,
    3.48,
    1.55
  ],
  "generator": "createInterstellarCargoTransitGate",
  "source_path": "src/models/interstellar_cargo_transit_gate.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/interstellar-cargo-transit-gate.webp",
  "accent": "#30334e"
};
export function createInterstellarCargoTransitGate() { return buildRecipe({
  "title": "Interstellar Cargo Transit Gate",
  "dimensions": [
    3.35,
    3.48,
    1.55
  ],
  "parts": [
    {
      "t": "box",
      "n": "portal-upright--1",
      "p": [
        -1.16,
        1.65,
        0
      ],
      "s": [
        0.28,
        3.26,
        0.42
      ],
      "c": 7244215
    },
    {
      "t": "box",
      "n": "portal-upright-1",
      "p": [
        1.16,
        1.65,
        0
      ],
      "s": [
        0.28,
        3.26,
        0.42
      ],
      "c": 7244215
    },
    {
      "t": "box",
      "n": "portal-overhead-lintel",
      "p": [
        0,
        3.25,
        0
      ],
      "s": [
        2.6,
        0.3,
        0.47
      ],
      "c": 8446153
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-0",
      "p": [
        1.05,
        1.82,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-1",
      "p": [
        1.0142221176035218,
        2.146111996829176,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-2",
      "p": [
        0.9093266739736606,
        2.45,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-3",
      "p": [
        0.742462120245875,
        2.71095454429505,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-4",
      "p": [
        0.5250000000000001,
        2.911192008768393,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-5",
      "p": [
        0.2717599973576468,
        3.037066541124226,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-6",
      "p": [
        6.429395695523605e-17,
        3.08,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-7",
      "p": [
        -0.27175999735764667,
        3.037066541124226,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-8",
      "p": [
        -0.5249999999999998,
        2.911192008768393,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-9",
      "p": [
        -0.7424621202458749,
        2.71095454429505,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-10",
      "p": [
        -0.9093266739736606,
        2.45,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-11",
      "p": [
        -1.0142221176035215,
        2.1461119968291764,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "sphere",
      "n": "energy-arc-segment-12",
      "p": [
        -1.05,
        1.8200000000000003,
        0.02
      ],
      "s": [
        0.17,
        0.15,
        0.09
      ],
      "c": 3158862
    },
    {
      "t": "box",
      "n": "cargo-guide-rail-left",
      "p": [
        -0.8,
        0.11,
        0.48
      ],
      "s": [
        0.13,
        0.15,
        1.02
      ],
      "c": 8446153
    },
    {
      "t": "box",
      "n": "cargo-guide-rail-right",
      "p": [
        0.8,
        0.11,
        0.48
      ],
      "s": [
        0.13,
        0.15,
        1.02
      ],
      "c": 8446153
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-0",
      "p": [
        -1.22,
        0.55,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-1",
      "p": [
        1.22,
        0.55,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-2",
      "p": [
        -1.22,
        1.19,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-3",
      "p": [
        1.22,
        1.19,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-4",
      "p": [
        -1.22,
        1.83,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-5",
      "p": [
        1.22,
        1.83,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-6",
      "p": [
        -1.22,
        2.4699999999999998,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "portal-diagnostic-light-7",
      "p": [
        1.22,
        2.4699999999999998,
        0.25
      ],
      "s": [
        0.047,
        0.14,
        0.025
      ],
      "c": 14276850
    },
    {
      "t": "box",
      "n": "inspection-scanner",
      "p": [
        0,
        2.6,
        0.27
      ],
      "s": [
        0.69,
        0.19,
        0.13
      ],
      "c": 3158862
    }
  ]
}); }
