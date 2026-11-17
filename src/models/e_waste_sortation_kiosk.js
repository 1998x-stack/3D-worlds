import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: E-waste Sortation Kiosk / 电子废料分类回收站. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "urban.e-waste-sortation-kiosk.001",
  "slug": "e-waste-sortation-kiosk",
  "title": "E-waste Sortation Kiosk",
  "title_zh": "电子废料分类回收站",
  "summary": "Three-channel community recycling station with pictogram slots and screen",
  "category": "urban",
  "tags": [
    "waste",
    "sortation",
    "kiosk",
    "urban",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.34,
    0.49,
    0.27
  ],
  "generator": "createEWasteSortationKiosk",
  "source_path": "src/models/e_waste_sortation_kiosk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/e-waste-sortation-kiosk.webp",
  "accent": "#78c9ad"
};
export function createEWasteSortationKiosk() { return buildRecipe({
  "title": "E-waste Sortation Kiosk",
  "dimensions": [
    0.34,
    0.49,
    0.27
  ],
  "parts": [
    {
      "t": "box",
      "n": "kiosk-housing",
      "p": [
        0,
        1.08,
        0
      ],
      "s": [
        2.23,
        2.1,
        1
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "canopy",
      "p": [
        0,
        2.22,
        0
      ],
      "s": [
        2.39,
        0.15,
        1.13
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "waste-door-0",
      "p": [
        -0.73,
        0.97,
        0.55
      ],
      "s": [
        0.66,
        1.2,
        0.09
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "deposit-slot-0",
      "p": [
        -0.73,
        1.77,
        0.59
      ],
      "s": [
        0.51,
        0.16,
        0.05
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "status-dot-0",
      "p": [
        -0.73,
        1.6,
        0.64
      ],
      "s": [
        0.13,
        0.08,
        0.13
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "bin-handle-0",
      "p": [
        -0.73,
        0.63,
        0.64
      ],
      "s": [
        0.33,
        0.1,
        0.08
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "category-pixel-0-0",
      "p": [
        -0.86,
        1.26,
        0.63
      ],
      "s": [
        0.1,
        0.1,
        0.04
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "category-pixel-0-1",
      "p": [
        -0.63,
        1.26,
        0.63
      ],
      "s": [
        0.1,
        0.1,
        0.04
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "waste-door-1",
      "p": [
        0,
        0.97,
        0.55
      ],
      "s": [
        0.66,
        1.2,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "deposit-slot-1",
      "p": [
        0,
        1.77,
        0.59
      ],
      "s": [
        0.51,
        0.16,
        0.05
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "status-dot-1",
      "p": [
        0,
        1.6,
        0.64
      ],
      "s": [
        0.13,
        0.08,
        0.13
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "bin-handle-1",
      "p": [
        0,
        0.63,
        0.64
      ],
      "s": [
        0.33,
        0.1,
        0.08
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "category-pixel-1-0",
      "p": [
        -0.13,
        1.26,
        0.63
      ],
      "s": [
        0.1,
        0.1,
        0.04
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "category-pixel-1-1",
      "p": [
        0.1,
        1.26,
        0.63
      ],
      "s": [
        0.1,
        0.1,
        0.04
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "waste-door-2",
      "p": [
        0.73,
        0.97,
        0.55
      ],
      "s": [
        0.66,
        1.2,
        0.09
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "deposit-slot-2",
      "p": [
        0.73,
        1.77,
        0.59
      ],
      "s": [
        0.51,
        0.16,
        0.05
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "status-dot-2",
      "p": [
        0.73,
        1.6,
        0.64
      ],
      "s": [
        0.13,
        0.08,
        0.13
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "bin-handle-2",
      "p": [
        0.73,
        0.63,
        0.64
      ],
      "s": [
        0.33,
        0.1,
        0.08
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "category-pixel-2-0",
      "p": [
        0.6,
        1.26,
        0.63
      ],
      "s": [
        0.1,
        0.1,
        0.04
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "category-pixel-2-1",
      "p": [
        0.83,
        1.26,
        0.63
      ],
      "s": [
        0.1,
        0.1,
        0.04
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "screen",
      "p": [
        0,
        2.09,
        0.54
      ],
      "s": [
        0.6,
        0.18,
        0.07
      ],
      "c": 10143185
    }
  ]
}); }
