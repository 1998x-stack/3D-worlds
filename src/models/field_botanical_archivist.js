import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Field Botanical Archivist; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "characters.field-botanical-archivist.001",
  "slug": "field-botanical-archivist",
  "title": "Field Botanical Archivist",
  "title_zh": "野外植物档案员角色",
  "summary": "Original botanist figure with folio, lens and vial",
  "category": "characters",
  "tags": [
    "field",
    "botanical",
    "archivist",
    "characters",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.2,
    0.29,
    0.19
  ],
  "generator": "createFieldBotanicalArchivist",
  "source_path": "src/models/field_botanical_archivist.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/field-botanical-archivist.webp",
  "accent": "#5ca6a2",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createFieldBotanicalArchivist() { return buildRecipe({
  "title": "Field Botanical Archivist",
  "dimensions": [
    0.2,
    0.29,
    0.19
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "coat",
      "p": [
        0,
        0.78,
        0
      ],
      "s": [
        0.8,
        1.04,
        0.61
      ],
      "c": 14068349,
      "finish": "fabric"
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.58,
        0.16
      ],
      "s": [
        0.35,
        0.39,
        0.34
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "sun-hat",
      "p": [
        0,
        1.97,
        0.05
      ],
      "s": [
        1.12,
        0.1,
        1.05
      ],
      "c": 6071970,
      "finish": "fabric"
    },
    {
      "t": "cylinder",
      "n": "hat-crown",
      "p": [
        0,
        2.15,
        0.05
      ],
      "s": [
        0.68,
        0.37,
        0.64
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "arm--1",
      "from": [
        -0.4,
        1.21,
        0
      ],
      "to": [
        -0.67,
        0.75,
        0.24
      ],
      "r": 0.073,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "shoe--1",
      "p": [
        -0.24,
        0.13,
        0.19
      ],
      "s": [
        0.25,
        0.23,
        0.38
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "eye--1",
      "p": [
        -0.13,
        1.62,
        0.47
      ],
      "s": [
        0.045,
        0.046,
        0.034
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "arm-1",
      "from": [
        0.4,
        1.21,
        0
      ],
      "to": [
        0.67,
        0.75,
        0.24
      ],
      "r": 0.073,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "shoe-1",
      "p": [
        0.24,
        0.13,
        0.19
      ],
      "s": [
        0.25,
        0.23,
        0.38
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "eye-1",
      "p": [
        0.13,
        1.62,
        0.47
      ],
      "s": [
        0.045,
        0.046,
        0.034
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "botanical-folio",
      "p": [
        0.61,
        0.73,
        0.3
      ],
      "s": [
        0.39,
        0.56,
        0.1
      ],
      "c": 15910009,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-0",
      "p": [
        0.62,
        0.5,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-1",
      "p": [
        0.62,
        0.552,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-2",
      "p": [
        0.62,
        0.604,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-3",
      "p": [
        0.62,
        0.656,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-4",
      "p": [
        0.62,
        0.708,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-5",
      "p": [
        0.62,
        0.76,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-6",
      "p": [
        0.62,
        0.812,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-7",
      "p": [
        0.62,
        0.864,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "pressed-leaf-page-8",
      "p": [
        0.62,
        0.916,
        0.39
      ],
      "s": [
        0.24,
        0.018,
        0.02
      ],
      "c": 15789541,
      "finish": "fabric"
    },
    {
      "t": "torus",
      "n": "magnifying-rim",
      "p": [
        -0.77,
        1.18,
        0.22
      ],
      "s": [
        0.33,
        0.33,
        0.12
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "magnifier-handle",
      "from": [
        -0.73,
        1.08,
        0.22
      ],
      "to": [
        -0.59,
        0.74,
        0.22
      ],
      "r": 0.035,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-0",
      "p": [
        -0.23,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-1",
      "p": [
        -0.155,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-2",
      "p": [
        -0.08,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-3",
      "p": [
        -0.005,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-4",
      "p": [
        0.07,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-5",
      "p": [
        0.145,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-thread-6",
      "p": [
        0.22,
        0.67,
        0.35
      ],
      "s": [
        0.023,
        0.2,
        0.013
      ],
      "c": 15910009,
      "finish": "fabric"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
