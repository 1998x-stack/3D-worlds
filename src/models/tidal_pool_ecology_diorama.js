import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Tidal Pool Ecology Diorama / 潮间带生态微景观. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "nature.tidal-pool-ecology-diorama.001",
  "slug": "tidal-pool-ecology-diorama",
  "title": "Tidal Pool Ecology Diorama",
  "title_zh": "潮间带生态微景观",
  "summary": "Rock pool scene with shell spiral, starfish, tidal channels and miniature coral",
  "category": "nature",
  "tags": [
    "tidal",
    "pool",
    "ecology",
    "diorama",
    "nature",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.4,
    0.19,
    0.31
  ],
  "generator": "createTidalPoolEcologyDiorama",
  "source_path": "src/models/tidal_pool_ecology_diorama.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/tidal-pool-ecology-diorama.webp",
  "accent": "#4d9e72"
};
export function createTidalPoolEcologyDiorama() { return buildRecipe({
  "title": "Tidal Pool Ecology Diorama",
  "dimensions": [
    0.4,
    0.19,
    0.31
  ],
  "parts": [
    {
      "t": "box",
      "n": "coast-base",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        2.8,
        0.2,
        2
      ],
      "c": 8215879
    },
    {
      "t": "cylinder",
      "n": "tidal-water",
      "p": [
        0,
        0.24,
        0
      ],
      "s": [
        1.6,
        0.07,
        1.45
      ],
      "c": 10143185
    },
    {
      "t": "sphere",
      "n": "rock-0",
      "p": [
        1.05,
        0.27,
        0
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-1",
      "p": [
        0.8043466652749269,
        0.27,
        0.507802211652366
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-2",
      "p": [
        0.18233058655027695,
        0.27,
        0.7779981248796444
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-3",
      "p": [
        -0.5249999999999998,
        0.27,
        0.6841600689897066
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-4",
      "p": [
        -0.9866772518252038,
        0.27,
        0.27019591322727843
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-5",
      "p": [
        -0.9866772518252039,
        0.27,
        -0.27019591322727826
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-6",
      "p": [
        -0.5250000000000005,
        0.27,
        -0.6841600689897064
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-7",
      "p": [
        0.18233058655027648,
        0.27,
        -0.7779981248796445
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "rock-8",
      "p": [
        0.8043466652749267,
        0.27,
        -0.5078022116523663
      ],
      "s": [
        0.39,
        0.28,
        0.32
      ],
      "c": 4084325
    },
    {
      "t": "rod",
      "n": "sea-star-arm-0",
      "from": [
        0.14,
        0.33,
        0.1
      ],
      "to": [
        0.43,
        0.33,
        0.1
      ],
      "r": 0.067,
      "c": 14648424
    },
    {
      "t": "rod",
      "n": "sea-star-arm-1",
      "from": [
        0.14,
        0.33,
        0.1
      ],
      "to": [
        0.22961492836873476,
        0.33,
        0.37580638972559455
      ],
      "r": 0.067,
      "c": 14648424
    },
    {
      "t": "rod",
      "n": "sea-star-arm-2",
      "from": [
        0.14,
        0.33,
        0.1
      ],
      "to": [
        -0.0946149283687347,
        0.33,
        0.2704577231648172
      ],
      "r": 0.067,
      "c": 14648424
    },
    {
      "t": "rod",
      "n": "sea-star-arm-3",
      "from": [
        0.14,
        0.33,
        0.1
      ],
      "to": [
        -0.09461492836873475,
        0.33,
        -0.07045772316481716
      ],
      "r": 0.067,
      "c": 14648424
    },
    {
      "t": "rod",
      "n": "sea-star-arm-4",
      "from": [
        0.14,
        0.33,
        0.1
      ],
      "to": [
        0.2296149283687347,
        0.33,
        -0.1758063897255945
      ],
      "r": 0.067,
      "c": 14648424
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-0",
      "p": [
        -0.45999999999999996,
        0.31,
        -0.32
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-1",
      "p": [
        -0.4951471862576142,
        0.31,
        -0.23514718625761433
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-2",
      "p": [
        -0.58,
        0.31,
        -0.2
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-3",
      "p": [
        -0.6648528137423857,
        0.31,
        -0.2351471862576143
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-4",
      "p": [
        -0.7,
        0.31,
        -0.32
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-5",
      "p": [
        -0.6648528137423857,
        0.31,
        -0.4048528137423857
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-6",
      "p": [
        -0.58,
        0.31,
        -0.44
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "anemone-polyp-7",
      "p": [
        -0.4951471862576143,
        0.31,
        -0.40485281374238574
      ],
      "s": [
        0.12,
        0.2,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "torus",
      "n": "shell-spiral",
      "p": [
        0.56,
        0.33,
        0.38
      ],
      "s": [
        0.4,
        0.3,
        0.28
      ],
      "c": 15853002,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
}); }
