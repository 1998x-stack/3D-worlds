import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Passive Solar Balcony Facade / 被动式太阳能阳台立面. */
export const assetMeta = {
  "id": "architecture.passive-solar-balcony-facade.001",
  "slug": "passive-solar-balcony-facade",
  "title": "Passive Solar Balcony Facade",
  "title_zh": "被动式太阳能阳台立面",
  "summary": "Energy-saving balcony facade module with adjustable shade fins, glazed door and planter",
  "category": "architecture",
  "tags": [
    "passive",
    "solar",
    "balcony",
    "facade",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.52,
    3.36,
    1.91
  ],
  "generator": "createPassiveSolarBalconyFacade",
  "source_path": "src/models/passive_solar_balcony_facade.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/passive-solar-balcony-facade.webp",
  "accent": "#625847"
};
export function createPassiveSolarBalconyFacade() { return buildRecipe({
  "title": "Passive Solar Balcony Facade",
  "dimensions": [
    3.52,
    3.36,
    1.91
  ],
  "parts": [
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-insulated-passive-balcony-facade",
      "p": [
        0,
        1.54,
        -0.62
      ],
      "s": [
        3.2,
        3.05,
        0.43
      ],
      "c": 12363651
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-balcony-deck-thermal-break",
      "p": [
        0,
        0.96,
        0.3
      ],
      "s": [
        2.94,
        0.23,
        1.23
      ],
      "c": 6520458
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-double-glazed-energy-efficient-door",
      "p": [
        0,
        1.7,
        -0.35
      ],
      "s": [
        1.63,
        1.74,
        0.058
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-0",
      "p": [
        -1.38,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        -0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-1",
      "p": [
        -1.0999999999999999,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-2",
      "p": [
        -0.8199999999999998,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        -0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-3",
      "p": [
        -0.5399999999999998,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-4",
      "p": [
        -0.2599999999999998,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        -0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-5",
      "p": [
        0.02000000000000024,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-6",
      "p": [
        0.30000000000000027,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        -0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-7",
      "p": [
        0.5800000000000003,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-8",
      "p": [
        0.8600000000000003,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        -0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-9",
      "p": [
        1.1400000000000006,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        0.16,
        0
      ]
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-passive-shading-fin-10",
      "p": [
        1.4200000000000004,
        2.24,
        -0.19
      ],
      "s": [
        0.072,
        0.61,
        0.58
      ],
      "c": 6445127,
      "rot": [
        0,
        -0.16,
        0
      ]
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-balcony-handrail-post--1",
      "from": [
        -1.37,
        1.03,
        0.83
      ],
      "to": [
        -1.37,
        1.81,
        0.83
      ],
      "r": 0.044,
      "c": 6520458
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-sunshading-planter--1",
      "p": [
        -1.08,
        1.18,
        0.72
      ],
      "s": [
        0.4,
        0.27,
        0.31
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-balcony-handrail-post-1",
      "from": [
        1.37,
        1.03,
        0.83
      ],
      "to": [
        1.37,
        1.81,
        0.83
      ],
      "r": 0.044,
      "c": 6520458
    },
    {
      "t": "box",
      "n": "passive-solar-balcony-facade-sunshading-planter-1",
      "p": [
        1.08,
        1.18,
        0.72
      ],
      "s": [
        0.4,
        0.27,
        0.31
      ],
      "c": 12363651
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-0",
      "from": [
        -1.37,
        1.15,
        0.83
      ],
      "to": [
        1.37,
        1.15,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-1",
      "from": [
        -1.37,
        1.22,
        0.83
      ],
      "to": [
        1.37,
        1.22,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-2",
      "from": [
        -1.37,
        1.29,
        0.83
      ],
      "to": [
        1.37,
        1.29,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-3",
      "from": [
        -1.37,
        1.3599999999999999,
        0.83
      ],
      "to": [
        1.37,
        1.3599999999999999,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-4",
      "from": [
        -1.37,
        1.43,
        0.83
      ],
      "to": [
        1.37,
        1.43,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-5",
      "from": [
        -1.37,
        1.5,
        0.83
      ],
      "to": [
        1.37,
        1.5,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-6",
      "from": [
        -1.37,
        1.5699999999999998,
        0.83
      ],
      "to": [
        1.37,
        1.5699999999999998,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    },
    {
      "t": "rod",
      "n": "passive-solar-balcony-facade-glazed-balustrade-rail-7",
      "from": [
        -1.37,
        1.64,
        0.83
      ],
      "to": [
        1.37,
        1.64,
        0.83
      ],
      "r": 0.015,
      "c": 11914704
    }
  ]
}); }
