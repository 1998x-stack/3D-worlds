import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Geothermal Spring Basin / 地热泉池. */
export const assetMeta = {
  "id": "nature.geothermal-spring-basin.001",
  "slug": "geothermal-spring-basin",
  "title": "Geothermal Spring Basin",
  "title_zh": "地热泉池",
  "summary": "Warm mineral pool with terraced calcite deposits and rising steam columns",
  "category": "nature",
  "tags": [
    "geothermal",
    "spring",
    "basin",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.85,
    1.32,
    2.45
  ],
  "generator": "createGeothermalSpringBasin",
  "source_path": "src/models/geothermal_spring_basin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/geothermal-spring-basin.webp",
  "accent": "#71a5b8"
};
export function createGeothermalSpringBasin() { return buildRecipe({
  "title": "Geothermal Spring Basin",
  "dimensions": [
    2.85,
    1.32,
    2.45
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "calcite-mineral-terrace",
      "p": [
        0,
        0.33,
        0
      ],
      "s": [
        2.53,
        0.58,
        2.16
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "thermal-pool-water",
      "p": [
        0,
        0.49,
        0
      ],
      "s": [
        2.02,
        0.12,
        1.59
      ],
      "c": 7977400
    },
    {
      "t": "sphere",
      "n": "mineral-rim-0",
      "p": [
        1.13,
        0.48,
        0
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-1",
      "p": [
        1.0439838717377539,
        0.48,
        0.336761420481279
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-2",
      "p": [
        0.7990306627407987,
        0.48,
        0.6222539674441617
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-3",
      "p": [
        0.43243227857255145,
        0.48,
        0.8130139886099323
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-4",
      "p": [
        6.919254415182545e-17,
        0.48,
        0.88
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-5",
      "p": [
        -0.43243227857255134,
        0.48,
        0.8130139886099323
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-6",
      "p": [
        -0.7990306627407986,
        0.48,
        0.6222539674441618
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-7",
      "p": [
        -1.0439838717377539,
        0.48,
        0.3367614204812791
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-8",
      "p": [
        -1.13,
        0.48,
        1.0776891832496708e-16
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-9",
      "p": [
        -1.043983871737754,
        0.48,
        -0.33676142048127894
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-10",
      "p": [
        -0.7990306627407988,
        0.48,
        -0.6222539674441617
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-11",
      "p": [
        -0.43243227857255206,
        0.48,
        -0.8130139886099321
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-12",
      "p": [
        -2.0757763245547634e-16,
        0.48,
        -0.88
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-13",
      "p": [
        0.4324322785725517,
        0.48,
        -0.8130139886099322
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "mineral-rim-14",
      "p": [
        0.7990306627407985,
        0.48,
        -0.622253967444162
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "mineral-rim-15",
      "p": [
        1.0439838717377536,
        0.48,
        -0.33676142048127955
      ],
      "s": [
        0.35,
        0.16,
        0.26
      ],
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-0",
      "from": [
        -0.77,
        0.59,
        -0.19
      ],
      "to": [
        -0.72,
        1.2,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-1",
      "from": [
        -0.52,
        0.59,
        -0.19
      ],
      "to": [
        -0.47000000000000003,
        1.28,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-2",
      "from": [
        -0.27,
        0.59,
        -0.19
      ],
      "to": [
        -0.22000000000000003,
        1.3599999999999999,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-3",
      "from": [
        -0.020000000000000018,
        0.59,
        -0.19
      ],
      "to": [
        0.029999999999999985,
        1.2,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-4",
      "from": [
        0.22999999999999998,
        0.59,
        -0.19
      ],
      "to": [
        0.27999999999999997,
        1.28,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-5",
      "from": [
        0.48,
        0.59,
        -0.19
      ],
      "to": [
        0.53,
        1.3599999999999999,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    },
    {
      "t": "rod",
      "n": "geothermal-steam-6",
      "from": [
        0.73,
        0.59,
        -0.19
      ],
      "to": [
        0.78,
        1.2,
        -0.11
      ],
      "r": 0.019,
      "c": 12955786
    }
  ]
}); }
