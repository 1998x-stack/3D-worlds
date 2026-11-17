import { buildRecipe } from './recipe_engine.js';
/** Art Deco Celestial Globe / 装饰艺术星图地球仪: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "decor.art-deco-celestial-globe.001",
  "slug": "art-deco-celestial-globe",
  "title": "Art Deco Celestial Globe",
  "title_zh": "装饰艺术星图地球仪",
  "summary": "Brass-mounted star chart globe with meridian ring and stepped marble plinth",
  "category": "decor",
  "tags": [
    "art",
    "deco",
    "celestial",
    "globe",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.08,
    1.72,
    1.08
  ],
  "generator": "createArtDecoCelestialGlobe",
  "source_path": "src/models/art_deco_celestial_globe.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/art-deco-celestial-globe.webp",
  "accent": "#d0b57b"
};
export function createArtDecoCelestialGlobe() { return buildRecipe({
  "title": "Art Deco Celestial Globe",
  "dimensions": [
    1.08,
    1.72,
    1.08
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "marble-base",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.68,
        0.24,
        0.68
      ],
      "c": 3562593
    },
    {
      "t": "rod",
      "n": "brass-support",
      "from": [
        0,
        0.23,
        0
      ],
      "to": [
        0,
        1.16,
        0
      ],
      "r": 0.055,
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "celestial-sphere",
      "p": [
        0,
        1.38,
        0
      ],
      "s": [
        0.53,
        0.53,
        0.53
      ],
      "c": 13677947
    },
    {
      "t": "torus",
      "n": "meridian-ring",
      "p": [
        0,
        1.38,
        0
      ],
      "s": [
        1.6,
        1.6,
        1.6
      ],
      "c": 11845003,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "equator-ring",
      "p": [
        0,
        1.38,
        0
      ],
      "s": [
        1.6,
        1.6,
        1.6
      ],
      "c": 10186585,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "constellation-star-0",
      "p": [
        0.23923104376117665,
        1.8752459062939721,
        0
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-1",
      "p": [
        -0.3176911872055083,
        1.7218854825488652,
        0.2910096671835562
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-2",
      "p": [
        0.04695614106037574,
        1.5004536779011728,
        -0.5345895923947628
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-3",
      "p": [
        0.3258428175193799,
        1.255038847918802,
        0.42510136290251044
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-4",
      "p": [
        -0.4213875753419468,
        1.0345045075024935,
        -0.07460144778313976
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-5",
      "p": [
        0.20187606332957497,
        1.8752459062939721,
        -0.1283648992272243
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-6",
      "p": [
        -0.11193705969077668,
        1.7218854825488652,
        0.41603414702415115
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-7",
      "p": [
        -0.24722217200332122,
        1.5004536779011728,
        -0.47631093746631603
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-8",
      "p": [
        0.5030616302268396,
        1.255038847918802,
        0.18388503654200425
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-9",
      "p": [
        -0.39561869013704415,
        1.0345045075024935,
        0.16315243387137948
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-10",
      "p": [
        0.1014767866668096,
        1.8752459062939721,
        -0.21664245675038132
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-11",
      "p": [
        0.12877412530763355,
        1.7218854825488652,
        0.4111344566848944
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-12",
      "p": [
        -0.46419495812327255,
        1.5004536779011728,
        -0.2692841479423061
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-13",
      "p": [
        0.5231782787872996,
        1.255038847918802,
        -0.1147571308272319
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "constellation-star-14",
      "p": [
        -0.24630122029947002,
        1.0345045075024935,
        0.3499551021815476
      ],
      "s": [
        0.028,
        0.028,
        0.028
      ],
      "c": 3562593
    }
  ]
}); }
