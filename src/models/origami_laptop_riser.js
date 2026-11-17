import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Origami Laptop Riser / 折叠几何笔记本支架. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "furniture.origami-laptop-riser.001",
  "slug": "origami-laptop-riser",
  "title": "Origami Laptop Riser",
  "title_zh": "折叠几何笔记本支架",
  "summary": "Fold-flat ventilated laptop riser with hinged A-frames and cable channel",
  "category": "furniture",
  "tags": [
    "origami",
    "laptop",
    "riser",
    "furniture",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.31,
    0.18,
    0.28
  ],
  "generator": "createOrigamiLaptopRiser",
  "source_path": "src/models/origami_laptop_riser.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/origami-laptop-riser.webp",
  "accent": "#c5b6a2",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createOrigamiLaptopRiser() { return buildRecipe({
  "title": "Origami Laptop Riser",
  "dimensions": [
    0.31,
    0.18,
    0.28
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "laptop-deck",
      "p": [
        0,
        1.08,
        0
      ],
      "s": [
        2,
        0.1,
        1.5
      ],
      "c": 4084325,
      "rot": [
        0.12,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "fold-frame-a0",
      "from": [
        -0.76,
        0.08,
        -0.55
      ],
      "to": [
        -0.69,
        1.06,
        -0.52
      ],
      "r": 0.065,
      "c": 15776881,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "fold-frame-b0",
      "from": [
        -0.76,
        0.08,
        0.56
      ],
      "to": [
        -0.69,
        1.06,
        0.48
      ],
      "r": 0.065,
      "c": 15776881,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "hinge-cap0",
      "p": [
        -0.74,
        0.11,
        0
      ],
      "s": [
        0.16,
        0.15,
        1.16
      ],
      "c": 3229017,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "fold-frame-a1",
      "from": [
        0.76,
        0.08,
        -0.55
      ],
      "to": [
        0.69,
        1.06,
        -0.52
      ],
      "r": 0.065,
      "c": 15776881,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "fold-frame-b1",
      "from": [
        0.76,
        0.08,
        0.56
      ],
      "to": [
        0.69,
        1.06,
        0.48
      ],
      "r": 0.065,
      "c": 15776881,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "hinge-cap1",
      "p": [
        0.74,
        0.11,
        0
      ],
      "s": [
        0.16,
        0.15,
        1.16
      ],
      "c": 3229017,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "cooling-rib0",
      "p": [
        -0.78,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib1",
      "p": [
        -0.585,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib2",
      "p": [
        -0.39,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib3",
      "p": [
        -0.19500000000000006,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib4",
      "p": [
        0,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib5",
      "p": [
        0.19500000000000006,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib6",
      "p": [
        0.3899999999999999,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib7",
      "p": [
        0.585,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cooling-rib8",
      "p": [
        0.78,
        1.15,
        -0.08
      ],
      "s": [
        0.07,
        0.025,
        1.02
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "cable-channel",
      "p": [
        0,
        0.93,
        0.63
      ],
      "s": [
        1.1,
        0.11,
        0.1
      ],
      "c": 2570315
    },
    {
      "t": "cylinder",
      "n": "rubber-pad0",
      "p": [
        -0.79,
        1.18,
        -0.57
      ],
      "s": [
        0.12,
        0.04,
        0.12
      ],
      "c": 3229017,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "rubber-pad1",
      "p": [
        0.79,
        1.18,
        -0.57
      ],
      "s": [
        0.12,
        0.04,
        0.12
      ],
      "c": 3229017,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "rubber-pad2",
      "p": [
        -0.79,
        1.18,
        0.57
      ],
      "s": [
        0.12,
        0.04,
        0.12
      ],
      "c": 3229017,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "rubber-pad3",
      "p": [
        0.79,
        1.18,
        0.57
      ],
      "s": [
        0.12,
        0.04,
        0.12
      ],
      "c": 3229017,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-0",
      "p": [
        -0.72,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-1",
      "p": [
        -0.5599999999999999,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-2",
      "p": [
        -0.39999999999999997,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-3",
      "p": [
        -0.24,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-4",
      "p": [
        -0.07999999999999996,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-5",
      "p": [
        0.08000000000000007,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-6",
      "p": [
        0.24,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-7",
      "p": [
        0.40000000000000013,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-8",
      "p": [
        0.56,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "vent-slot-9",
      "p": [
        0.72,
        1.152,
        -0.16
      ],
      "s": [
        0.055,
        0.015,
        0.58
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "fold-bearing-0",
      "p": [
        -0.75,
        0.15,
        -0.53
      ],
      "s": [
        0.17,
        0.1,
        0.18
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "anti-slip-deck-pad-0",
      "p": [
        -0.75,
        1.168,
        0.49
      ],
      "s": [
        0.22,
        0.035,
        0.16
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "fold-release-key-0",
      "p": [
        -0.75,
        0.7,
        0.49
      ],
      "s": [
        0.14,
        0.18,
        0.14
      ],
      "c": 15383673,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "fold-bearing-1",
      "p": [
        0.75,
        0.15,
        -0.53
      ],
      "s": [
        0.17,
        0.1,
        0.18
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "anti-slip-deck-pad-1",
      "p": [
        0.75,
        1.168,
        0.49
      ],
      "s": [
        0.22,
        0.035,
        0.16
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "fold-release-key-1",
      "p": [
        0.75,
        0.7,
        0.49
      ],
      "s": [
        0.14,
        0.18,
        0.14
      ],
      "c": 15383673,
      "finish": "anodized"
    },
    {
      "t": "rod",
      "n": "torsion-crossbar",
      "from": [
        -0.72,
        0.35,
        -0.39
      ],
      "to": [
        0.72,
        0.35,
        -0.39
      ],
      "r": 0.026,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rear-laptop-stop",
      "p": [
        0,
        1.21,
        -0.57
      ],
      "s": [
        1.39,
        0.16,
        0.07
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "hinge-lock-plaque",
      "p": [
        0,
        0.95,
        0.62
      ],
      "s": [
        0.34,
        0.06,
        0.04
      ],
      "c": 14989405,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
