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
  "accent": "#c5b6a2"
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
      "t": "box",
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
      "c": 15776881
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
      "c": 15776881
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
      "c": 3229017
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
      "c": 15776881
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
      "c": 15776881
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
      "c": 3229017
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
      "c": 3229017
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
      "c": 3229017
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
      "c": 3229017
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
      "c": 3229017
    }
  ]
}); }
