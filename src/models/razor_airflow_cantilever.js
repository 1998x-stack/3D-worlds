import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Razor Airflow Cantilever; stylized visual prototype only. */
export const assetMeta = {
  "id": "bathroom.razor-airflow-cantilever.001",
  "slug": "razor-airflow-cantilever",
  "title": "Razor Airflow Cantilever",
  "title_zh": "剃须刀通风悬臂架",
  "summary": "Original razor airflow cantilever study with drain and cradle assemblies and individually named functional details",
  "category": "bathroom",
  "tags": [
    "razor",
    "airflow",
    "cantilever",
    "bathroom",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.19,
    0.19,
    0.12
  ],
  "generator": "createRazorAirflowCantilever",
  "source_path": "src/models/razor_airflow_cantilever.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/razor-airflow-cantilever.webp",
  "accent": "#43899b",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createRazorAirflowCantilever() { return buildRecipe({
  "title": "Razor Airflow Cantilever",
  "dimensions": [
    0.19,
    0.19,
    0.12
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
      "c": 8700858,
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
      "c": 4426139,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-rail--1",
      "p": [
        -0.72,
        0.54,
        0
      ],
      "s": [
        0.12,
        0.62,
        1.28
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-rail-1",
      "p": [
        0.72,
        0.54,
        0
      ],
      "s": [
        0.12,
        0.62,
        1.28
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-0",
      "p": [
        -0.68,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-1",
      "p": [
        -0.5750000000000001,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-2",
      "p": [
        -0.4700000000000001,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-3",
      "p": [
        -0.36500000000000005,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-4",
      "p": [
        -0.26000000000000006,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-5",
      "p": [
        -0.15500000000000003,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-6",
      "p": [
        -0.050000000000000044,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-7",
      "p": [
        0.05499999999999994,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-8",
      "p": [
        0.15999999999999992,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-9",
      "p": [
        0.2649999999999999,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-10",
      "p": [
        0.37,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-11",
      "p": [
        0.475,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-12",
      "p": [
        0.58,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-13",
      "p": [
        0.6849999999999999,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-support--1",
      "p": [
        -0.53,
        0.62,
        0
      ],
      "s": [
        0.2,
        0.75,
        1.12
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-saddle--1",
      "p": [
        -0.43,
        0.93,
        0.36
      ],
      "s": [
        0.47,
        0.13,
        0.3
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "cradle-1-hinge--1",
      "p": [
        -0.55,
        0.34,
        -0.52
      ],
      "s": [
        0.21,
        0.21,
        0.21
      ],
      "c": 4426139,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-1-hanger--1",
      "from": [
        -0.73,
        0.4,
        0.1
      ],
      "to": [
        -0.75,
        1.35,
        0.15
      ],
      "r": 0.034,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-support-1",
      "p": [
        0.53,
        0.62,
        0
      ],
      "s": [
        0.2,
        0.75,
        1.12
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-saddle-1",
      "p": [
        0.43,
        0.93,
        0.36
      ],
      "s": [
        0.47,
        0.13,
        0.3
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "cradle-1-hinge-1",
      "p": [
        0.55,
        0.34,
        -0.52
      ],
      "s": [
        0.21,
        0.21,
        0.21
      ],
      "c": 4426139,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-1-hanger-1",
      "from": [
        0.73,
        0.4,
        0.1
      ],
      "to": [
        0.75,
        1.35,
        0.15
      ],
      "r": 0.034,
      "c": 11847118,
      "finish": "metal"
    }
  ]
}); }
