import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Botanical Glass Terrarium Orb / 植物生态玻璃球. */
export const assetMeta = {
  "id": "decor.botanical-glass-terrarium-orb.001",
  "slug": "botanical-glass-terrarium-orb",
  "title": "Botanical Glass Terrarium Orb",
  "title_zh": "植物生态玻璃球",
  "summary": "Large spherical terrarium with miniature moss, rocks, ferns and suspended orb stand",
  "category": "decor",
  "tags": [
    "botanical",
    "glass",
    "terrarium",
    "orb",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.24,
    1.45,
    1.1
  ],
  "generator": "createBotanicalGlassTerrariumOrb",
  "source_path": "src/models/botanical_glass_terrarium_orb.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/botanical-glass-terrarium-orb.webp",
  "accent": "#4d6978"
};
export function createBotanicalGlassTerrariumOrb() { return buildRecipe({
  "title": "Botanical Glass Terrarium Orb",
  "dimensions": [
    1.24,
    1.45,
    1.1
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "botanical-glass-terrarium-orb-suspended-terrarium-foot",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        0.76,
        0.29,
        0.67
      ],
      "c": 5073272
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-large-transparent-botanical-orb",
      "p": [
        0,
        0.87,
        0
      ],
      "s": [
        1.05,
        1.1,
        1.02
      ],
      "c": 15387547
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-internal-miniature-terrain",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        0.78,
        0.25,
        0.74
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-0",
      "from": [
        0.29,
        0.6,
        0
      ],
      "to": [
        0.3915,
        1.13,
        0
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-0",
      "p": [
        0.3886,
        1.15,
        0
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-1",
      "from": [
        0.2511473670974872,
        0.6,
        0.14499999999999996
      ],
      "to": [
        0.33904894558160775,
        1.23,
        0.17399999999999996
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-1",
      "p": [
        0.3365374719106329,
        1.25,
        0.17399999999999996
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-2",
      "from": [
        0.14500000000000002,
        0.6,
        0.2511473670974872
      ],
      "to": [
        0.19575000000000004,
        1.3299999999999998,
        0.3013768405169846
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-2",
      "p": [
        0.19430000000000003,
        1.3499999999999999,
        0.3013768405169846
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-3",
      "from": [
        1.775737858763662e-17,
        0.6,
        0.29
      ],
      "to": [
        2.3972461093309438e-17,
        1.13,
        0.348
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-3",
      "p": [
        2.379488730743307e-17,
        1.15,
        0.348
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-4",
      "from": [
        -0.14499999999999993,
        0.6,
        0.2511473670974872
      ],
      "to": [
        -0.19574999999999992,
        1.23,
        0.3013768405169846
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-4",
      "p": [
        -0.19429999999999992,
        1.25,
        0.3013768405169846
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-5",
      "from": [
        -0.2511473670974872,
        0.6,
        0.14499999999999996
      ],
      "to": [
        -0.33904894558160775,
        1.3299999999999998,
        0.17399999999999996
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-5",
      "p": [
        -0.3365374719106329,
        1.3499999999999999,
        0.17399999999999996
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-6",
      "from": [
        -0.29,
        0.6,
        3.551475717527324e-17
      ],
      "to": [
        -0.3915,
        1.13,
        4.2617708610327884e-17
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-6",
      "p": [
        -0.3886,
        1.15,
        4.2617708610327884e-17
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-7",
      "from": [
        -0.25114736709748725,
        0.6,
        -0.1449999999999999
      ],
      "to": [
        -0.3390489455816078,
        1.23,
        -0.17399999999999988
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-7",
      "p": [
        -0.33653747191063293,
        1.25,
        -0.17399999999999988
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-8",
      "from": [
        -0.14500000000000013,
        0.6,
        -0.2511473670974871
      ],
      "to": [
        -0.19575000000000017,
        1.3299999999999998,
        -0.3013768405169845
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-8",
      "p": [
        -0.1943000000000002,
        1.3499999999999999,
        -0.3013768405169845
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-9",
      "from": [
        -5.327213576290986e-17,
        0.6,
        -0.29
      ],
      "to": [
        -7.191738327992831e-17,
        1.13,
        -0.348
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-9",
      "p": [
        -7.138466192229921e-17,
        1.15,
        -0.348
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-10",
      "from": [
        0.14500000000000002,
        0.6,
        -0.2511473670974872
      ],
      "to": [
        0.19575000000000004,
        1.23,
        -0.3013768405169846
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-10",
      "p": [
        0.19430000000000003,
        1.25,
        -0.3013768405169846
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "rod",
      "n": "botanical-glass-terrarium-orb-terrarium-fern-stem-11",
      "from": [
        0.2511473670974871,
        0.6,
        -0.14500000000000013
      ],
      "to": [
        0.3390489455816076,
        1.3299999999999998,
        -0.17400000000000015
      ],
      "r": 0.019,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-terrarium-orb-leaf-11",
      "p": [
        0.3365374719106327,
        1.3499999999999999,
        -0.17400000000000015
      ],
      "s": [
        0.16,
        0.09,
        0.16
      ],
      "c": 7973491
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-sealed-terrarium-rock-0",
      "p": [
        -0.34,
        0.55,
        -0.24
      ],
      "s": [
        0.11,
        0.085,
        0.1
      ],
      "c": 5073272
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-sealed-terrarium-rock-1",
      "p": [
        -0.21000000000000002,
        0.55,
        0.27
      ],
      "s": [
        0.11,
        0.085,
        0.1
      ],
      "c": 5073272
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-sealed-terrarium-rock-2",
      "p": [
        -0.08000000000000002,
        0.55,
        -0.24
      ],
      "s": [
        0.11,
        0.085,
        0.1
      ],
      "c": 5073272
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-sealed-terrarium-rock-3",
      "p": [
        0.04999999999999999,
        0.55,
        0.27
      ],
      "s": [
        0.11,
        0.085,
        0.1
      ],
      "c": 5073272
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-sealed-terrarium-rock-4",
      "p": [
        0.18,
        0.55,
        -0.24
      ],
      "s": [
        0.11,
        0.085,
        0.1
      ],
      "c": 5073272
    },
    {
      "t": "sphere",
      "n": "botanical-glass-terrarium-orb-sealed-terrarium-rock-5",
      "p": [
        0.31,
        0.55,
        0.27
      ],
      "s": [
        0.11,
        0.085,
        0.1
      ],
      "c": 5073272
    }
  ]
}); }
