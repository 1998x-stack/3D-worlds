import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Bio Lumen Explorer Pod; stylized visual prototype only. */
export const assetMeta = {
  "id": "scifi.bio-lumen-explorer-pod.001",
  "slug": "bio-lumen-explorer-pod",
  "title": "Bio Lumen Explorer Pod",
  "title_zh": "生物光探测舱",
  "summary": "Original bio lumen explorer pod study with pod and ring assemblies and individually named functional details",
  "category": "scifi",
  "tags": [
    "bio",
    "lumen",
    "explorer",
    "pod",
    "scifi",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.32,
    0.3,
    0.31
  ],
  "generator": "createBioLumenExplorerPod",
  "source_path": "src/models/bio_lumen_explorer_pod.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/bio-lumen-explorer-pod.webp",
  "accent": "#62d9ce",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createBioLumenExplorerPod() { return buildRecipe({
  "title": "Bio Lumen Explorer Pod",
  "dimensions": [
    0.32,
    0.3,
    0.31
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
      "c": 6643622,
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
      "c": 6478286,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "pod-0-pressure-vessel",
      "p": [
        0,
        1.02,
        0
      ],
      "s": [
        1.1,
        1.22,
        1.1
      ],
      "c": 6643622,
      "finish": "anodized"
    },
    {
      "t": "sphere",
      "n": "pod-0-canopy",
      "p": [
        0,
        1.72,
        0
      ],
      "s": [
        0.51,
        0.51,
        0.51
      ],
      "c": 7522523,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-0",
      "from": [
        0.33,
        0.8,
        0
      ],
      "to": [
        0.72,
        0.23,
        0
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-0",
      "p": [
        0.52,
        1.1,
        0
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-1",
      "from": [
        0.23334523779156072,
        0.8,
        0.23334523779156066
      ],
      "to": [
        0.5091168824543142,
        0.23,
        0.5091168824543142
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-1",
      "p": [
        0.36769552621700474,
        1.1,
        0.3676955262170047
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-2",
      "from": [
        2.020667218593133e-17,
        0.8,
        0.33
      ],
      "to": [
        4.4087284769304716e-17,
        0.23,
        0.72
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-2",
      "p": [
        3.1840816777831187e-17,
        1.1,
        0.52
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-3",
      "from": [
        -0.23334523779156066,
        0.8,
        0.23334523779156072
      ],
      "to": [
        -0.5091168824543142,
        0.23,
        0.5091168824543142
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-3",
      "p": [
        -0.3676955262170047,
        1.1,
        0.36769552621700474
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-4",
      "from": [
        -0.33,
        0.8,
        4.041334437186266e-17
      ],
      "to": [
        -0.72,
        0.23,
        8.817456953860943e-17
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-4",
      "p": [
        -0.52,
        1.1,
        6.368163355566237e-17
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-5",
      "from": [
        -0.23334523779156074,
        0.8,
        -0.23334523779156066
      ],
      "to": [
        -0.5091168824543143,
        0.23,
        -0.5091168824543142
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-5",
      "p": [
        -0.3676955262170048,
        1.1,
        -0.3676955262170047
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-6",
      "from": [
        -6.062001655779399e-17,
        0.8,
        -0.33
      ],
      "to": [
        -1.3226185430791412e-16,
        0.23,
        -0.72
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-6",
      "p": [
        -9.552245033349355e-17,
        1.1,
        -0.52
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "pod-0-strut-7",
      "from": [
        0.23334523779156063,
        0.8,
        -0.23334523779156074
      ],
      "to": [
        0.5091168824543141,
        0.23,
        -0.5091168824543143
      ],
      "r": 0.045,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pod-0-cell-7",
      "p": [
        0.36769552621700463,
        1.1,
        -0.3676955262170048
      ],
      "s": [
        0.21,
        0.28,
        0.14
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "torus",
      "n": "ring-1-orbit-0",
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
      "c": 6478286,
      "finish": "metal",
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "ring-1-orbit-1",
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
      "c": 6643622,
      "finish": "metal",
      "rot": [
        0.23,
        0.32,
        0.17
      ]
    },
    {
      "t": "torus",
      "n": "ring-1-orbit-2",
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
      "c": 6478286,
      "finish": "metal",
      "rot": [
        0.46,
        0.64,
        0.34
      ]
    },
    {
      "t": "torus",
      "n": "ring-1-orbit-3",
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
      "c": 6643622,
      "finish": "metal",
      "rot": [
        0.6900000000000001,
        0.96,
        0.51
      ]
    },
    {
      "t": "torus",
      "n": "ring-1-orbit-4",
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
      "c": 6478286,
      "finish": "metal",
      "rot": [
        0.92,
        1.28,
        0.68
      ]
    },
    {
      "t": "rod",
      "n": "ring-1-spoke-0",
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
      "n": "ring-1-spoke-1",
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
      "n": "ring-1-spoke-2",
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
      "n": "ring-1-spoke-3",
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
      "n": "ring-1-spoke-4",
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
      "n": "ring-1-spoke-5",
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
      "n": "ring-1-spoke-6",
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
      "n": "ring-1-spoke-7",
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
      "n": "ring-1-spoke-8",
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
      "n": "ring-1-spoke-9",
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
      "n": "ring-1-spoke-10",
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
      "n": "ring-1-spoke-11",
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
    }
  ]
}); }
