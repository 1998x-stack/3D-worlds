import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Fastener Calibration Rack; stylized visual prototype only. */
export const assetMeta = {
  "id": "tools.fastener-calibration-rack.001",
  "slug": "fastener-calibration-rack",
  "title": "Fastener Calibration Rack",
  "title_zh": "紧固件规格展示架",
  "summary": "Original fastener calibration rack study with hex and gauge assemblies and individually named functional details",
  "category": "tools",
  "tags": [
    "fastener",
    "calibration",
    "rack",
    "tools",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.29,
    0.11,
    0.18
  ],
  "generator": "createFastenerCalibrationRack",
  "source_path": "src/models/fastener_calibration_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/fastener-calibration-rack.webp",
  "accent": "#e7a852",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createFastenerCalibrationRack() { return buildRecipe({
  "title": "Fastener Calibration Rack",
  "dimensions": [
    0.29,
    0.11,
    0.18
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
      "t": "hex",
      "n": "hex-0-hex-cell-0",
      "p": [
        -0.65,
        0.48,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 6323600,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-1",
      "p": [
        -0.385,
        0.48,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-2",
      "p": [
        -0.12,
        0.48,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-3",
      "p": [
        0.14500000000000002,
        0.48,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 6323600,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-4",
      "p": [
        0.41000000000000003,
        0.48,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-5",
      "p": [
        0.6750000000000002,
        0.48,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-6",
      "p": [
        -0.65,
        0.76,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 6323600,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-7",
      "p": [
        -0.385,
        0.76,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-8",
      "p": [
        -0.12,
        0.76,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-9",
      "p": [
        0.14500000000000002,
        0.76,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 6323600,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-10",
      "p": [
        0.41000000000000003,
        0.76,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-11",
      "p": [
        0.6750000000000002,
        0.76,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-12",
      "p": [
        -0.65,
        1.04,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 6323600,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-13",
      "p": [
        -0.385,
        1.04,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-14",
      "p": [
        -0.12,
        1.04,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-15",
      "p": [
        0.14500000000000002,
        1.04,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 6323600,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-16",
      "p": [
        0.41000000000000003,
        1.04,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "hex",
      "n": "hex-0-hex-cell-17",
      "p": [
        0.6750000000000002,
        1.04,
        -0.03
      ],
      "s": [
        0.23,
        0.23,
        0.18
      ],
      "c": 15181906,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-rule",
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
      "n": "gauge-1-graduation-0",
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
      "n": "gauge-1-graduation-1",
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
      "n": "gauge-1-graduation-2",
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
      "n": "gauge-1-graduation-3",
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
      "n": "gauge-1-graduation-4",
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
      "n": "gauge-1-graduation-5",
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
      "n": "gauge-1-graduation-6",
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
      "n": "gauge-1-graduation-7",
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
      "n": "gauge-1-graduation-8",
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
      "n": "gauge-1-graduation-9",
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
      "n": "gauge-1-graduation-10",
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
      "n": "gauge-1-graduation-11",
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
      "n": "gauge-1-graduation-12",
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
      "n": "gauge-1-graduation-13",
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
      "n": "gauge-1-graduation-14",
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
    }
  ]
}); }
