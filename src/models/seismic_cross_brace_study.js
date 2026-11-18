import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Seismic Cross-Brace Study; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "architecture.seismic-cross-brace-study.001",
  "slug": "seismic-cross-brace-study",
  "title": "Seismic Cross-Brace Study",
  "title_zh": "抗震交叉支撑结构研究",
  "summary": "Educational X-braced structure with column joints and gussets",
  "category": "architecture",
  "tags": [
    "seismic",
    "cross",
    "brace",
    "study",
    "architecture",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.35,
    0.35,
    0.2
  ],
  "generator": "createSeismicCrossBraceStudy",
  "source_path": "src/models/seismic_cross_brace_study.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/seismic-cross-brace-study.webp",
  "accent": "#638998",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createSeismicCrossBraceStudy() { return buildRecipe({
  "title": "Seismic Cross-Brace Study",
  "dimensions": [
    0.35,
    0.35,
    0.2
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "structural-foundation",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.93,
        0.19,
        1.33
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "column--1",
      "p": [
        -0.76,
        1.13,
        -0.2
      ],
      "s": [
        0.17,
        1.86,
        0.17
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "base-isolator--1",
      "p": [
        -0.76,
        0.31,
        -0.2
      ],
      "s": [
        0.3,
        0.16,
        0.3
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-0",
      "p": [
        -0.76,
        0.48,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-1",
      "p": [
        -0.76,
        0.71,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-2",
      "p": [
        -0.76,
        0.94,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-3",
      "p": [
        -0.76,
        1.17,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-4",
      "p": [
        -0.76,
        1.4,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-5",
      "p": [
        -0.76,
        1.63,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt--1-6",
      "p": [
        -0.76,
        1.86,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "column-1",
      "p": [
        0.76,
        1.13,
        -0.2
      ],
      "s": [
        0.17,
        1.86,
        0.17
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "base-isolator-1",
      "p": [
        0.76,
        0.31,
        -0.2
      ],
      "s": [
        0.3,
        0.16,
        0.3
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-0",
      "p": [
        0.76,
        0.48,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-1",
      "p": [
        0.76,
        0.71,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-2",
      "p": [
        0.76,
        0.94,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-3",
      "p": [
        0.76,
        1.17,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-4",
      "p": [
        0.76,
        1.4,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-5",
      "p": [
        0.76,
        1.63,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "column-bolt-1-6",
      "p": [
        0.76,
        1.86,
        -0.07
      ],
      "s": [
        0.06,
        0.05,
        0.06
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "lateral-beam-0.48",
      "p": [
        0,
        0.48,
        -0.2
      ],
      "s": [
        1.79,
        0.13,
        0.16
      ],
      "c": 6523288,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "lateral-beam-1.23",
      "p": [
        0,
        1.23,
        -0.2
      ],
      "s": [
        1.79,
        0.13,
        0.16
      ],
      "c": 6523288,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "lateral-beam-2.04",
      "p": [
        0,
        2.04,
        -0.2
      ],
      "s": [
        1.79,
        0.13,
        0.16
      ],
      "c": 6523288,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "ascending-X-brace",
      "from": [
        -0.71,
        0.52,
        0
      ],
      "to": [
        0.71,
        2,
        0
      ],
      "r": 0.066,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "descending-X-brace",
      "from": [
        0.71,
        0.52,
        0.03
      ],
      "to": [
        -0.71,
        2,
        0.03
      ],
      "r": 0.066,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "gusset-0",
      "p": [
        0.7,
        0.54,
        0.04
      ],
      "s": [
        0.27,
        0.26,
        0.07
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-0-0",
      "p": [
        0.6,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-0-1",
      "p": [
        0.665,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-0-2",
      "p": [
        0.73,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-0-3",
      "p": [
        0.795,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "gusset-1",
      "p": [
        -0.7,
        0.54,
        0.04
      ],
      "s": [
        0.27,
        0.26,
        0.07
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-1-0",
      "p": [
        -0.8,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-1-1",
      "p": [
        -0.735,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-1-2",
      "p": [
        -0.67,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-1-3",
      "p": [
        -0.605,
        0.54,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "gusset-2",
      "p": [
        0.7,
        1.98,
        0.04
      ],
      "s": [
        0.27,
        0.26,
        0.07
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-2-0",
      "p": [
        0.6,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-2-1",
      "p": [
        0.665,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-2-2",
      "p": [
        0.73,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-2-3",
      "p": [
        0.795,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "gusset-3",
      "p": [
        -0.7,
        1.98,
        0.04
      ],
      "s": [
        0.27,
        0.26,
        0.07
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-3-0",
      "p": [
        -0.8,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-3-1",
      "p": [
        -0.735,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-3-2",
      "p": [
        -0.67,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "gusset-bolt-3-3",
      "p": [
        -0.605,
        1.98,
        0.14
      ],
      "s": [
        0.05,
        0.05,
        0.05
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-0",
      "p": [
        -0.75,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-1",
      "p": [
        -0.5625,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-2",
      "p": [
        -0.375,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-3",
      "p": [
        -0.1875,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-4",
      "p": [
        0,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-5",
      "p": [
        0.1875,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-6",
      "p": [
        0.375,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-7",
      "p": [
        0.5625,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "vibration-observer-8",
      "p": [
        0.75,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
