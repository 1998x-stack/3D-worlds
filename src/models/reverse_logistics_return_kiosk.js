import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Reverse Logistics Return Kiosk; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "urban.reverse-logistics-return-kiosk.001",
  "slug": "reverse-logistics-return-kiosk",
  "title": "Reverse Logistics Return Kiosk",
  "title_zh": "逆向物流智能回收柜",
  "summary": "Self-service package-return kiosk with intake slot and access panel",
  "category": "urban",
  "tags": [
    "reverse",
    "logistics",
    "return",
    "kiosk",
    "urban",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.3,
    0.32,
    0.24
  ],
  "generator": "createReverseLogisticsReturnKiosk",
  "source_path": "src/models/reverse_logistics_return_kiosk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/reverse-logistics-return-kiosk.webp",
  "accent": "#e5bb72",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createReverseLogisticsReturnKiosk() { return buildRecipe({
  "title": "Reverse Logistics Return Kiosk",
  "dimensions": [
    0.3,
    0.32,
    0.24
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "weatherproof-cabinet",
      "p": [
        0,
        1.04,
        0
      ],
      "s": [
        1.33,
        1.69,
        1
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "user-screen",
      "p": [
        0,
        1.52,
        0.54
      ],
      "s": [
        0.87,
        0.44,
        0.05
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "intake-hopper",
      "p": [
        0,
        0.96,
        0.56
      ],
      "s": [
        0.91,
        0.22,
        0.22
      ],
      "c": 8232852,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dark-throat",
      "p": [
        0,
        0.95,
        0.69
      ],
      "s": [
        0.74,
        0.1,
        0.026
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-0",
      "p": [
        -0.33,
        1.41,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-1",
      "p": [
        -0.11,
        1.41,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-2",
      "p": [
        0.11,
        1.41,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-3",
      "p": [
        0.33,
        1.41,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-4",
      "p": [
        -0.33,
        1.51,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-5",
      "p": [
        -0.11,
        1.51,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-6",
      "p": [
        0.11,
        1.51,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-7",
      "p": [
        0.33,
        1.51,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-8",
      "p": [
        -0.33,
        1.61,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-9",
      "p": [
        -0.11,
        1.61,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-10",
      "p": [
        0.11,
        1.61,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "screen-ui-11",
      "p": [
        0.33,
        1.61,
        0.58
      ],
      "s": [
        0.16,
        0.07,
        0.016
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-0",
      "p": [
        -0.38,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.06,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-1",
      "p": [
        -0.286,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.094,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-2",
      "p": [
        -0.192,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.128,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-3",
      "p": [
        -0.098,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.06,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-4",
      "p": [
        -0.004,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.094,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-5",
      "p": [
        0.09,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.128,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-6",
      "p": [
        0.184,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.06,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-7",
      "p": [
        0.278,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.094,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "parcel-size-mark-8",
      "p": [
        0.372,
        0.71,
        0.57
      ],
      "s": [
        0.02,
        0.128,
        0.024
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hatch",
      "p": [
        0.7,
        1.04,
        0
      ],
      "s": [
        0.1,
        1.13,
        0.72
      ],
      "c": 15055730,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-0",
      "p": [
        0.77,
        0.53,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-1",
      "p": [
        0.77,
        0.65,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-2",
      "p": [
        0.77,
        0.77,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-3",
      "p": [
        0.77,
        0.89,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-4",
      "p": [
        0.77,
        1.01,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-5",
      "p": [
        0.77,
        1.13,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-6",
      "p": [
        0.77,
        1.25,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-7",
      "p": [
        0.77,
        1.37,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "service-hinge-8",
      "p": [
        0.77,
        1.49,
        -0.36
      ],
      "s": [
        0.05,
        0.07,
        0.04
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "overhang",
      "p": [
        0,
        1.93,
        0
      ],
      "s": [
        1.58,
        0.13,
        1.24
      ],
      "c": 8232852,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "landing-zone-0",
      "p": [
        -0.75,
        0.15,
        0.65
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
      "n": "landing-zone-1",
      "p": [
        -0.6136,
        0.15,
        0.65
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
      "n": "landing-zone-2",
      "p": [
        -0.4773,
        0.15,
        0.65
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
      "n": "landing-zone-3",
      "p": [
        -0.3409,
        0.15,
        0.65
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
      "n": "landing-zone-4",
      "p": [
        -0.2045,
        0.15,
        0.65
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
      "n": "landing-zone-5",
      "p": [
        -0.0682,
        0.15,
        0.65
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
      "n": "landing-zone-6",
      "p": [
        0.0682,
        0.15,
        0.65
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
      "n": "landing-zone-7",
      "p": [
        0.2045,
        0.15,
        0.65
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
      "n": "landing-zone-8",
      "p": [
        0.3409,
        0.15,
        0.65
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
      "n": "landing-zone-9",
      "p": [
        0.4773,
        0.15,
        0.65
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
      "n": "landing-zone-10",
      "p": [
        0.6136,
        0.15,
        0.65
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
      "n": "landing-zone-11",
      "p": [
        0.75,
        0.15,
        0.65
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
