import { buildRecipe } from './recipe_engine.js';
/** Volcanic Lava Field: source-backed custom geometry. */
export const assetMeta = {
  "id": "nature.volcanic-lava-field.001",
  "slug": "volcanic-lava-field",
  "title": "Volcanic Lava Field",
  "title_zh": "火山熔岩地表",
  "summary": "Jagged basalt volcanic plain with orange lava fissures and vents",
  "category": "nature",
  "tags": [
    "volcano",
    "lava",
    "terrain"
  ],
  "dimensions_m": [
    2.7,
    1.05,
    2.39
  ],
  "generator": "createVolcanicLavaField",
  "source_path": "src/models/volcanic_lava_field.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/volcanic-lava-field.webp"
};
export function createVolcanicLavaField() { return buildRecipe({
  "title": "Volcanic Lava Field",
  "dimensions": [
    2.7,
    1.05,
    2.39
  ],
  "parts": [
    {
      "t": "box",
      "n": "landscape-base",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2.65,
        0.21,
        2.15
      ],
      "c": 3490891
    },
    {
      "t": "sphere",
      "n": "basalt-piece-0",
      "p": [
        -1.1,
        0.25,
        -0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-1",
      "p": [
        -0.55,
        0.315,
        -0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-2",
      "p": [
        0,
        0.38,
        -0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-3",
      "p": [
        0.55,
        0.25,
        -0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-4",
      "p": [
        1.1,
        0.315,
        -0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-5",
      "p": [
        -1.1,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-6",
      "p": [
        -0.55,
        0.25,
        0
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-7",
      "p": [
        0,
        0.315,
        0
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-8",
      "p": [
        0.55,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-9",
      "p": [
        1.1,
        0.25,
        0
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-10",
      "p": [
        -1.1,
        0.315,
        0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-11",
      "p": [
        -0.55,
        0.38,
        0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-12",
      "p": [
        0,
        0.25,
        0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "sphere",
      "n": "basalt-piece-13",
      "p": [
        0.55,
        0.315,
        0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 5329490
    },
    {
      "t": "sphere",
      "n": "basalt-piece-14",
      "p": [
        1.1,
        0.38,
        0.78
      ],
      "s": [
        0.32,
        0.19,
        0.29
      ],
      "c": 6578525
    },
    {
      "t": "box",
      "n": "magma-fissure-0",
      "p": [
        0,
        0.33,
        -1
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 15246158,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-1",
      "p": [
        0.3031370251581108,
        0.33,
        -0.78
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 13924161,
      "rot": [
        0,
        0.25244129544236893,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-2",
      "p": [
        0.3955559064018806,
        0.33,
        -0.56
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 15246158,
      "rot": [
        0,
        0.2727892280477045,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-3",
      "p": [
        0.21301396302224848,
        0.33,
        -0.33999999999999997
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 13924161,
      "rot": [
        0,
        0.042336002417960164,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-4",
      "p": [
        -0.11759932496622705,
        0.33,
        -0.12
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 15246158,
      "rot": [
        0,
        -0.22704074859237844,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-5",
      "p": [
        -0.366466374699782,
        0.33,
        0.10000000000000009
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 13924161,
      "rot": [
        0,
        -0.2876772823989415,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-6",
      "p": [
        -0.36059346238654194,
        0.33,
        0.32000000000000006
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 15246158,
      "rot": [
        0,
        -0.08382464945967776,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-7",
      "p": [
        -0.10406299657218757,
        0.33,
        0.54
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 13924161,
      "rot": [
        0,
        0.1970959796156367,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-8",
      "p": [
        0.2248042663602972,
        0.33,
        0.76
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 15246158,
      "rot": [
        0,
        0.2968074739870145,
        0
      ]
    },
    {
      "t": "box",
      "n": "magma-fissure-9",
      "p": [
        0.39740444932536634,
        0.33,
        0.98
      ],
      "s": [
        0.16,
        0.015,
        0.27
      ],
      "c": 13924161,
      "rot": [
        0,
        0.12363554557252697,
        0
      ]
    },
    {
      "t": "cone",
      "n": "cinder-cone-0",
      "p": [
        -0.88,
        0.57,
        -0.46
      ],
      "s": [
        0.3,
        0.46,
        0.28
      ],
      "c": 3490891
    },
    {
      "t": "cone",
      "n": "cinder-cone-1",
      "p": [
        -0.46,
        0.57,
        -0.46
      ],
      "s": [
        0.3,
        0.46,
        0.28
      ],
      "c": 3490891
    },
    {
      "t": "cone",
      "n": "cinder-cone-2",
      "p": [
        -0.040000000000000036,
        0.57,
        -0.46
      ],
      "s": [
        0.3,
        0.46,
        0.28
      ],
      "c": 3490891
    },
    {
      "t": "cone",
      "n": "cinder-cone-3",
      "p": [
        0.38,
        0.57,
        -0.46
      ],
      "s": [
        0.3,
        0.46,
        0.28
      ],
      "c": 3490891
    },
    {
      "t": "cone",
      "n": "cinder-cone-4",
      "p": [
        0.7999999999999999,
        0.57,
        -0.46
      ],
      "s": [
        0.3,
        0.46,
        0.28
      ],
      "c": 3490891
    }
  ]
}); }
