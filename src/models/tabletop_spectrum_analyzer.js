import { buildRecipe } from './recipe_engine.js';
/** Tabletop Spectrum Analyzer / 台式频谱分析仪: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "electronics.tabletop-spectrum-analyzer.001",
  "slug": "tabletop-spectrum-analyzer",
  "title": "Tabletop Spectrum Analyzer",
  "title_zh": "台式频谱分析仪",
  "summary": "Laboratory spectrum analyzer with plotted display, knob bank and RF ports",
  "category": "electronics",
  "tags": [
    "tabletop",
    "spectrum",
    "analyzer",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.79,
    0.58,
    0.67
  ],
  "generator": "createTabletopSpectrumAnalyzer",
  "source_path": "src/models/tabletop_spectrum_analyzer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/tabletop-spectrum-analyzer.webp",
  "accent": "#1e2832"
};
export function createTabletopSpectrumAnalyzer() { return buildRecipe({
  "title": "Tabletop Spectrum Analyzer",
  "dimensions": [
    0.79,
    0.58,
    0.67
  ],
  "parts": [
    {
      "t": "box",
      "n": "spectrum-main-case",
      "p": [
        0,
        0.22,
        0
      ],
      "s": [
        0.7,
        0.43,
        0.56
      ],
      "c": 4610669
    },
    {
      "t": "box",
      "n": "spectrum-screen",
      "p": [
        -0.15,
        0.3,
        0.292
      ],
      "s": [
        0.34,
        0.24,
        0.02
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "frequency-grid-0",
      "p": [
        -0.3,
        0.23,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-1",
      "p": [
        -0.24,
        0.23,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-2",
      "p": [
        -0.18,
        0.23,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-3",
      "p": [
        -0.12,
        0.23,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-4",
      "p": [
        -0.06,
        0.23,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-5",
      "p": [
        0,
        0.23,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-6",
      "p": [
        -0.3,
        0.34,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-7",
      "p": [
        -0.24,
        0.34,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-8",
      "p": [
        -0.18,
        0.34,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-9",
      "p": [
        -0.12,
        0.34,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-10",
      "p": [
        -0.06,
        0.34,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "frequency-grid-11",
      "p": [
        0,
        0.34,
        0.308
      ],
      "s": [
        0.045,
        0.012,
        0.01
      ],
      "c": 9160635
    },
    {
      "t": "cylinder",
      "n": "encoder-knob-0",
      "p": [
        0.2,
        0.16,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.09
      ],
      "c": 14542571,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "encoder-knob-1",
      "p": [
        0.35,
        0.16,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.09
      ],
      "c": 14542571,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "encoder-knob-2",
      "p": [
        0.2,
        0.26,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.09
      ],
      "c": 14542571,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "encoder-knob-3",
      "p": [
        0.35,
        0.26,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.09
      ],
      "c": 14542571,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "encoder-knob-4",
      "p": [
        0.2,
        0.36,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.09
      ],
      "c": 14542571,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "encoder-knob-5",
      "p": [
        0.35,
        0.36,
        0.31
      ],
      "s": [
        0.09,
        0.04,
        0.09
      ],
      "c": 14542571,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "rf-input-0",
      "p": [
        -0.22,
        0.05,
        0.31
      ],
      "s": [
        0.055,
        0.05,
        0.055
      ],
      "c": 9160635,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "rf-input-1",
      "p": [
        -0.01999999999999999,
        0.05,
        0.31
      ],
      "s": [
        0.055,
        0.05,
        0.055
      ],
      "c": 9160635,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "rf-input-2",
      "p": [
        0.18000000000000002,
        0.05,
        0.31
      ],
      "s": [
        0.055,
        0.05,
        0.055
      ],
      "c": 9160635,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
