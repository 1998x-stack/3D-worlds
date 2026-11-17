import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Rotary Spice Pod Display / 旋转式香料分装展示架. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "kitchen.rotary-spice-pod-display.001",
  "slug": "rotary-spice-pod-display",
  "title": "Rotary Spice Pod Display",
  "title_zh": "旋转式香料分装展示架",
  "summary": "Compact tabletop condiment carousel with eight labelled spice pod mockups",
  "category": "kitchen",
  "tags": [
    "rotary",
    "spice",
    "pod",
    "display",
    "kitchen",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.24,
    0.29,
    0.24
  ],
  "generator": "createRotarySpicePodDisplay",
  "source_path": "src/models/rotary_spice_pod_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/rotary-spice-pod-display.webp",
  "accent": "#c992a7"
};
export function createRotarySpicePodDisplay() { return buildRecipe({
  "title": "Rotary Spice Pod Display",
  "dimensions": [
    0.24,
    0.29,
    0.24
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "weighted-foot",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.45,
        0.18,
        1.45
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "central-column",
      "p": [
        0,
        0.92,
        0
      ],
      "s": [
        0.19,
        1.63,
        0.19
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "rotary-platform",
      "p": [
        0,
        0.54,
        0
      ],
      "s": [
        2,
        0.12,
        2
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "upper-platform",
      "p": [
        0,
        1.35,
        0
      ],
      "s": [
        1.6,
        0.11,
        1.6
      ],
      "c": 15853002
    },
    {
      "t": "cylinder",
      "n": "spice-jar-0",
      "p": [
        0.76,
        0.81,
        0
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "jar-lid-0",
      "p": [
        0.76,
        1.06,
        0
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-0",
      "p": [
        0.76,
        0.8,
        0.17
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-1",
      "p": [
        0.5374011537017762,
        0.81,
        0.5374011537017761
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "jar-lid-1",
      "p": [
        0.5374011537017762,
        1.06,
        0.5374011537017761
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-1",
      "p": [
        0.5374011537017762,
        0.8,
        0.7074011537017761
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-2",
      "p": [
        4.6536578367599424e-17,
        0.81,
        0.76
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 5086834
    },
    {
      "t": "cylinder",
      "n": "jar-lid-2",
      "p": [
        4.6536578367599424e-17,
        1.06,
        0.76
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-2",
      "p": [
        4.6536578367599424e-17,
        0.8,
        0.93
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-3",
      "p": [
        -0.5374011537017761,
        0.81,
        0.5374011537017762
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "jar-lid-3",
      "p": [
        -0.5374011537017761,
        1.06,
        0.5374011537017762
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-3",
      "p": [
        -0.5374011537017761,
        0.8,
        0.7074011537017763
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-4",
      "p": [
        -0.76,
        0.81,
        9.307315673519885e-17
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "jar-lid-4",
      "p": [
        -0.76,
        1.06,
        9.307315673519885e-17
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-4",
      "p": [
        -0.76,
        0.8,
        0.1700000000000001
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-5",
      "p": [
        -0.5374011537017762,
        0.81,
        -0.5374011537017761
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "jar-lid-5",
      "p": [
        -0.5374011537017762,
        1.06,
        -0.5374011537017761
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-5",
      "p": [
        -0.5374011537017762,
        0.8,
        -0.36740115370177606
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-6",
      "p": [
        -1.3960973510279825e-16,
        0.81,
        -0.76
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 5086834
    },
    {
      "t": "cylinder",
      "n": "jar-lid-6",
      "p": [
        -1.3960973510279825e-16,
        1.06,
        -0.76
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-6",
      "p": [
        -1.3960973510279825e-16,
        0.8,
        -0.59
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "spice-jar-7",
      "p": [
        0.537401153701776,
        0.81,
        -0.5374011537017762
      ],
      "s": [
        0.28,
        0.43,
        0.28
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "jar-lid-7",
      "p": [
        0.537401153701776,
        1.06,
        -0.5374011537017762
      ],
      "s": [
        0.3,
        0.08,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "flavor-label-7",
      "p": [
        0.537401153701776,
        0.8,
        -0.3674011537017762
      ],
      "s": [
        0.18,
        0.12,
        0.02
      ],
      "c": 15001563
    },
    {
      "t": "cylinder",
      "n": "top-knob",
      "p": [
        0,
        1.5,
        0
      ],
      "s": [
        0.37,
        0.19,
        0.37
      ],
      "c": 13938523
    }
  ]
}); }
