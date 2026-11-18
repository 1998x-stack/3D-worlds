import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Drill Depth Reference Gauge; stylized visual prototype only. */
export const assetMeta = {
  "id": "tools.drill-depth-reference-gauge.001",
  "slug": "drill-depth-reference-gauge",
  "title": "Drill Depth Reference Gauge",
  "title_zh": "钻孔深度基准尺",
  "summary": "Original drill depth reference gauge study with gauge and tool assemblies and individually named functional details",
  "category": "tools",
  "tags": [
    "drill",
    "depth",
    "reference",
    "gauge",
    "tools",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.22,
    0.28,
    0.17
  ],
  "generator": "createDrillDepthReferenceGauge",
  "source_path": "src/models/drill_depth_reference_gauge.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/drill-depth-reference-gauge.webp",
  "accent": "#e7a852",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createDrillDepthReferenceGauge() { return buildRecipe({
  "title": "Drill Depth Reference Gauge",
  "dimensions": [
    0.22,
    0.28,
    0.17
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
      "c": 6323600,
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
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-rule",
      "p": [
        0,
        0.33,
        -0.38
      ],
      "s": [
        1.68,
        0.12,
        0.23
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-0",
      "p": [
        -0.77,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-1",
      "p": [
        -0.66,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-2",
      "p": [
        -0.55,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-3",
      "p": [
        -0.44,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-4",
      "p": [
        -0.33,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-5",
      "p": [
        -0.21999999999999997,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-6",
      "p": [
        -0.10999999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-7",
      "p": [
        0,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-8",
      "p": [
        0.10999999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-9",
      "p": [
        0.21999999999999997,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-10",
      "p": [
        0.33000000000000007,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-11",
      "p": [
        0.43999999999999995,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-12",
      "p": [
        0.55,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-13",
      "p": [
        0.6599999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-0-graduation-14",
      "p": [
        0.77,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-0",
      "from": [
        -0.68,
        0.38,
        -0.4
      ],
      "to": [
        -0.68,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-0",
      "p": [
        -0.68,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-1",
      "from": [
        -0.49000000000000005,
        0.38,
        -0.4
      ],
      "to": [
        -0.49000000000000005,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-1",
      "p": [
        -0.49000000000000005,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-2",
      "from": [
        -0.30000000000000004,
        0.38,
        -0.4
      ],
      "to": [
        -0.30000000000000004,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-2",
      "p": [
        -0.30000000000000004,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-3",
      "from": [
        -0.10999999999999999,
        0.38,
        -0.4
      ],
      "to": [
        -0.10999999999999999,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-3",
      "p": [
        -0.10999999999999999,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-4",
      "from": [
        0.07999999999999996,
        0.38,
        -0.4
      ],
      "to": [
        0.07999999999999996,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-4",
      "p": [
        0.07999999999999996,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-5",
      "from": [
        0.2699999999999999,
        0.38,
        -0.4
      ],
      "to": [
        0.2699999999999999,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-5",
      "p": [
        0.2699999999999999,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-6",
      "from": [
        0.4600000000000001,
        0.38,
        -0.4
      ],
      "to": [
        0.4600000000000001,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-6",
      "p": [
        0.4600000000000001,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15181906,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-7",
      "from": [
        0.65,
        0.38,
        -0.4
      ],
      "to": [
        0.65,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-7",
      "p": [
        0.65,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 6323600,
      "finish": "matte"
    }
  ]
}); }
