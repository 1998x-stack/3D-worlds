import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Portable E Ink Field Notebook / 便携墨水屏科研记录本. */
export const assetMeta = {
  "id": "electronics.portable-ebook-field-notebook.001",
  "slug": "portable-ebook-field-notebook",
  "title": "Portable E Ink Field Notebook",
  "title_zh": "便携墨水屏科研记录本",
  "summary": "Field-ready e-ink data notebook with stylus, rugged cover and sensor card slot",
  "category": "electronics",
  "tags": [
    "portable",
    "ebook",
    "field",
    "notebook",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.58,
    0.44,
    0.39
  ],
  "generator": "createPortableEbookFieldNotebook",
  "source_path": "src/models/portable_ebook_field_notebook.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/portable-ebook-field-notebook.webp",
  "accent": "#a6d4cd"
};
export function createPortableEbookFieldNotebook() { return buildRecipe({
  "title": "Portable E Ink Field Notebook",
  "dimensions": [
    0.58,
    0.44,
    0.39
  ],
  "parts": [
    {
      "t": "box",
      "n": "e-ink-rugged-tablet",
      "p": [
        0,
        0.21,
        0
      ],
      "s": [
        0.49,
        0.065,
        0.35
      ],
      "c": 3952998
    },
    {
      "t": "box",
      "n": "e-paper-dashboard",
      "p": [
        0,
        0.25,
        0.025
      ],
      "s": [
        0.41,
        0.018,
        0.26
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "field-notebook-line-0",
      "p": [
        -0.16,
        0.263,
        -0.1
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-1",
      "p": [
        -0.16,
        0.263,
        -0.082
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-2",
      "p": [
        -0.16,
        0.263,
        -0.064
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-3",
      "p": [
        -0.16,
        0.263,
        -0.04600000000000001
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-4",
      "p": [
        -0.16,
        0.263,
        -0.02800000000000001
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-5",
      "p": [
        -0.16,
        0.263,
        -0.010000000000000009
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-6",
      "p": [
        -0.16,
        0.263,
        0.00799999999999998
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-7",
      "p": [
        -0.16,
        0.263,
        0.025999999999999995
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-8",
      "p": [
        -0.16,
        0.263,
        0.043999999999999984
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-9",
      "p": [
        -0.16,
        0.263,
        0.06199999999999997
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-notebook-line-10",
      "p": [
        -0.16,
        0.263,
        0.07999999999999999
      ],
      "s": [
        0.31,
        0.005,
        0.01
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "tablet-corner-bumper-left",
      "p": [
        -0.23,
        0.22,
        0
      ],
      "s": [
        0.06,
        0.1,
        0.42
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "tablet-corner-bumper-right",
      "p": [
        0.23,
        0.22,
        0
      ],
      "s": [
        0.06,
        0.1,
        0.42
      ],
      "c": 12043214
    },
    {
      "t": "rod",
      "n": "digital-stylus",
      "from": [
        0.18,
        0.15,
        0.25
      ],
      "to": [
        0.5,
        0.25,
        0.31
      ],
      "r": 0.023,
      "c": 10933453
    },
    {
      "t": "box",
      "n": "field-sensor-memory-slot",
      "p": [
        0,
        0.23,
        -0.18
      ],
      "s": [
        0.17,
        0.034,
        0.06
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "environmental-hotkey-0",
      "p": [
        -0.16,
        0.265,
        0.166
      ],
      "s": [
        0.043,
        0.014,
        0.02
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "environmental-hotkey-1",
      "p": [
        -0.08,
        0.265,
        0.166
      ],
      "s": [
        0.043,
        0.014,
        0.02
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "environmental-hotkey-2",
      "p": [
        0,
        0.265,
        0.166
      ],
      "s": [
        0.043,
        0.014,
        0.02
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "environmental-hotkey-3",
      "p": [
        0.07999999999999999,
        0.265,
        0.166
      ],
      "s": [
        0.043,
        0.014,
        0.02
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "environmental-hotkey-4",
      "p": [
        0.16,
        0.265,
        0.166
      ],
      "s": [
        0.043,
        0.014,
        0.02
      ],
      "c": 1518391
    }
  ]
}); }
