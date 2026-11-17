import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Astronomy Observatory Slit Dome / 天文台观测穹顶. */
export const assetMeta = {
  "id": "architecture.astronomy-observatory-slit-dome.001",
  "slug": "astronomy-observatory-slit-dome",
  "title": "Astronomy Observatory Slit Dome",
  "title_zh": "天文台观测穹顶",
  "summary": "Small scientific observatory with ribbed telescope dome, shutter slot and base structure",
  "category": "architecture",
  "tags": [
    "astronomy",
    "observatory",
    "slit",
    "dome",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.56,
    3.62,
    3.42
  ],
  "generator": "createAstronomyObservatorySlitDome",
  "source_path": "src/models/astronomy_observatory_slit_dome.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/astronomy-observatory-slit-dome.webp",
  "accent": "#637e8a"
};
export function createAstronomyObservatorySlitDome() { return buildRecipe({
  "title": "Astronomy Observatory Slit Dome",
  "dimensions": [
    3.56,
    3.62,
    3.42
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "astronomy-observatory-slit-dome-astronomical-telescope-dome-base",
      "p": [
        0,
        0.73,
        0
      ],
      "s": [
        2.52,
        1.36,
        2.5
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-0",
      "from": [
        1.04,
        1.39,
        0
      ],
      "to": [
        0.3224,
        2.98,
        0
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-0",
      "p": [
        0.676,
        2.16,
        0
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-1",
      "from": [
        0.9608347138117382,
        1.39,
        0.3979907696596934
      ],
      "to": [
        0.29785876128163885,
        2.98,
        0.12337713859450494
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-1",
      "p": [
        0.6245425639776299,
        2.16,
        0.2586940002788007
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-2",
      "from": [
        0.7353910524340095,
        1.39,
        0.7353910524340094
      ],
      "to": [
        0.22797122625454294,
        2.98,
        0.2279712262545429
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-2",
      "p": [
        0.47800418408210615,
        2.16,
        0.4780041840821061
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-3",
      "from": [
        0.39799076965969343,
        1.39,
        0.9608347138117382
      ],
      "to": [
        0.12337713859450496,
        2.98,
        0.29785876128163885
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-3",
      "p": [
        0.25869400027880074,
        2.16,
        0.6245425639776299
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-4",
      "from": [
        6.368163355566237e-17,
        1.39,
        1.04
      ],
      "to": [
        1.9741306402255335e-17,
        2.98,
        0.3224
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-4",
      "p": [
        4.1393061811180545e-17,
        2.16,
        0.676
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-5",
      "from": [
        -0.3979907696596933,
        1.39,
        0.9608347138117382
      ],
      "to": [
        -0.12337713859450493,
        2.98,
        0.29785876128163885
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-5",
      "p": [
        -0.2586940002788007,
        2.16,
        0.6245425639776299
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-6",
      "from": [
        -0.7353910524340094,
        1.39,
        0.7353910524340095
      ],
      "to": [
        -0.2279712262545429,
        2.98,
        0.22797122625454294
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-6",
      "p": [
        -0.4780041840821061,
        2.16,
        0.47800418408210615
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-7",
      "from": [
        -0.9608347138117382,
        1.39,
        0.3979907696596935
      ],
      "to": [
        -0.29785876128163885,
        2.98,
        0.12337713859450498
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-7",
      "p": [
        -0.6245425639776299,
        2.16,
        0.2586940002788008
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-8",
      "from": [
        -1.04,
        1.39,
        1.2736326711132475e-16
      ],
      "to": [
        -0.3224,
        2.98,
        3.948261280451067e-17
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-8",
      "p": [
        -0.676,
        2.16,
        8.278612362236109e-17
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-9",
      "from": [
        -0.9608347138117384,
        1.39,
        -0.39799076965969327
      ],
      "to": [
        -0.2978587612816389,
        2.98,
        -0.12337713859450491
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-9",
      "p": [
        -0.62454256397763,
        2.16,
        -0.25869400027880063
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-10",
      "from": [
        -0.7353910524340096,
        1.39,
        -0.7353910524340094
      ],
      "to": [
        -0.22797122625454297,
        2.98,
        -0.2279712262545429
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-10",
      "p": [
        -0.47800418408210626,
        2.16,
        -0.4780041840821061
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-11",
      "from": [
        -0.397990769659694,
        1.39,
        -0.960834713811738
      ],
      "to": [
        -0.12337713859450514,
        2.98,
        -0.2978587612816388
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-11",
      "p": [
        -0.25869400027880113,
        2.16,
        -0.6245425639776297
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-12",
      "from": [
        -1.910449006669871e-16,
        1.39,
        -1.04
      ],
      "to": [
        -5.9223919206766e-17,
        2.98,
        -0.3224
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-12",
      "p": [
        -1.241791854335416e-16,
        2.16,
        -0.676
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-13",
      "from": [
        0.3979907696596936,
        1.39,
        -0.9608347138117381
      ],
      "to": [
        0.12337713859450501,
        2.98,
        -0.2978587612816388
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-13",
      "p": [
        0.25869400027880085,
        2.16,
        -0.6245425639776297
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-14",
      "from": [
        0.7353910524340093,
        1.39,
        -0.7353910524340096
      ],
      "to": [
        0.22797122625454286,
        2.98,
        -0.22797122625454297
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-14",
      "p": [
        0.47800418408210604,
        2.16,
        -0.47800418408210626
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-observatory-dome-meridian-rib-15",
      "from": [
        0.960834713811738,
        1.39,
        -0.39799076965969404
      ],
      "to": [
        0.2978587612816388,
        2.98,
        -0.12337713859450515
      ],
      "r": 0.048,
      "c": 6520458
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-curved-cladding-panel-15",
      "p": [
        0.6245425639776297,
        2.16,
        -0.25869400027880113
      ],
      "s": [
        0.42,
        0.36,
        0.45
      ],
      "c": 11914704
    },
    {
      "t": "sphere",
      "n": "astronomy-observatory-slit-dome-dome-roof-cap",
      "p": [
        0,
        2.94,
        0
      ],
      "s": [
        0.43,
        0.2,
        0.42
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "astronomy-observatory-slit-dome-open-retractable-shutter-left",
      "p": [
        -0.2,
        2.2,
        1.03
      ],
      "s": [
        0.2,
        1.13,
        0.08
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "astronomy-observatory-slit-dome-open-retractable-shutter-right",
      "p": [
        0.2,
        2.2,
        1.03
      ],
      "s": [
        0.2,
        1.13,
        0.08
      ],
      "c": 6445127
    },
    {
      "t": "cylinder",
      "n": "astronomy-observatory-slit-dome-internal-observation-pier",
      "p": [
        0,
        1.47,
        0
      ],
      "s": [
        0.24,
        0.72,
        0.24
      ],
      "c": 6520458
    },
    {
      "t": "rod",
      "n": "astronomy-observatory-slit-dome-scientific-optics-tube",
      "from": [
        0,
        1.72,
        0
      ],
      "to": [
        0,
        2.3,
        0.61
      ],
      "r": 0.13,
      "c": 11914704
    }
  ]
}); }
