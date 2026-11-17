import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Rotary Calculation Cuff / 旋转计算刻度手环. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "tools.rotary-calculation-cuff.001",
  "slug": "rotary-calculation-cuff",
  "title": "Rotary Calculation Cuff",
  "title_zh": "旋转计算刻度手环",
  "summary": "Nonfunctional parametric math-inspired rotating calculation cuff display, not a calibrated instrument",
  "category": "tools",
  "tags": [
    "rotary",
    "calculation",
    "cuff",
    "tools",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.14,
    0.055,
    0.14
  ],
  "generator": "createRotaryCalculationCuff",
  "source_path": "src/models/rotary_calculation_cuff.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/rotary-calculation-cuff.webp",
  "accent": "#6d8394"
};
export function createRotaryCalculationCuff() { return buildRecipe({
  "title": "Rotary Calculation Cuff",
  "dimensions": [
    0.14,
    0.055,
    0.14
  ],
  "parts": [
    {
      "t": "torus",
      "n": "cuff-main",
      "p": [
        0,
        0.35,
        0
      ],
      "s": [
        1.8,
        1.8,
        1.8
      ],
      "c": 13938523,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "cuff-rotor-inner",
      "p": [
        0,
        0.5,
        0
      ],
      "s": [
        1.52,
        1.52,
        1.52
      ],
      "c": 4084325,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "cuff-bezel",
      "p": [
        0,
        0.62,
        0
      ],
      "s": [
        1.87,
        1.87,
        1.87
      ],
      "c": 7177108,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "log-scale-mark-0",
      "p": [
        0.7,
        0.67,
        0
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-1",
      "p": [
        0.6761480784023478,
        0.67,
        0.18117333157176452
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-2",
      "p": [
        0.6062177826491071,
        0.67,
        0.3499999999999999
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-3",
      "p": [
        0.4949747468305833,
        0.67,
        0.4949747468305832
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-4",
      "p": [
        0.35000000000000003,
        0.67,
        0.606217782649107
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-5",
      "p": [
        0.18117333157176452,
        0.67,
        0.6761480784023478
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-6",
      "p": [
        4.286263797015736e-17,
        0.67,
        0.7
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-7",
      "p": [
        -0.18117333157176443,
        0.67,
        0.6761480784023478
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-8",
      "p": [
        -0.3499999999999998,
        0.67,
        0.6062177826491071
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-9",
      "p": [
        -0.4949747468305832,
        0.67,
        0.4949747468305833
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-10",
      "p": [
        -0.6062177826491071,
        0.67,
        0.3499999999999999
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-11",
      "p": [
        -0.6761480784023477,
        0.67,
        0.1811733315717647
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-12",
      "p": [
        -0.7,
        0.67,
        8.572527594031472e-17
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-13",
      "p": [
        -0.6761480784023478,
        0.67,
        -0.18117333157176455
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-14",
      "p": [
        -0.6062177826491071,
        0.67,
        -0.3499999999999998
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-15",
      "p": [
        -0.4949747468305835,
        0.67,
        -0.49497474683058296
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-16",
      "p": [
        -0.3500000000000003,
        0.67,
        -0.6062177826491069
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-17",
      "p": [
        -0.18117333157176443,
        0.67,
        -0.6761480784023478
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-18",
      "p": [
        -1.2858791391047207e-16,
        0.67,
        -0.7
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-19",
      "p": [
        0.18117333157176418,
        0.67,
        -0.6761480784023478
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-20",
      "p": [
        0.35000000000000003,
        0.67,
        -0.606217782649107
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-21",
      "p": [
        0.4949747468305831,
        0.67,
        -0.49497474683058335
      ],
      "s": [
        0.04,
        0.16,
        0.045
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "log-scale-mark-22",
      "p": [
        0.6062177826491069,
        0.67,
        -0.3500000000000003
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "log-scale-mark-23",
      "p": [
        0.6761480784023476,
        0.67,
        -0.1811733315717651
      ],
      "s": [
        0.04,
        0.08,
        0.045
      ],
      "c": 15853002
    },
    {
      "t": "sphere",
      "n": "pointer-jewel",
      "p": [
        0.79,
        0.71,
        0
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "display-plinth",
      "p": [
        0,
        0.05,
        0
      ],
      "s": [
        1.3,
        0.1,
        1.3
      ],
      "c": 3229017
    }
  ]
}); }
