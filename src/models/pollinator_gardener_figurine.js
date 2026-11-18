import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Pollinator Gardener Figurine; stylized visual prototype only. */
export const assetMeta = {
  "id": "characters.pollinator-gardener-figurine.001",
  "slug": "pollinator-gardener-figurine",
  "title": "Pollinator Gardener Figurine",
  "title_zh": "授粉园丁摆件",
  "summary": "Original pollinator gardener figurine study with robot and plant assemblies and individually named functional details",
  "category": "characters",
  "tags": [
    "pollinator",
    "gardener",
    "figurine",
    "characters",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.18,
    0.28,
    0.17
  ],
  "generator": "createPollinatorGardenerFigurine",
  "source_path": "src/models/pollinator_gardener_figurine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/pollinator-gardener-figurine.webp",
  "accent": "#6ac9ba",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createPollinatorGardenerFigurine() { return buildRecipe({
  "title": "Pollinator Gardener Figurine",
  "dimensions": [
    0.18,
    0.28,
    0.17
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
      "c": 14595194,
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
      "c": 6998458,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-torso",
      "p": [
        0,
        0.94,
        0
      ],
      "s": [
        0.81,
        0.89,
        0.66
      ],
      "c": 14595194,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-head",
      "p": [
        0,
        1.58,
        0.07
      ],
      "s": [
        0.8,
        0.57,
        0.61
      ],
      "c": 6998458,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-face-panel",
      "p": [
        0,
        1.6,
        0.41
      ],
      "s": [
        0.58,
        0.26,
        0.04
      ],
      "c": 8909020,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "robot-0-eye--1",
      "p": [
        -0.18,
        1.65,
        0.47
      ],
      "s": [
        0.054,
        0.054,
        0.054
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "robot-0-arm--1",
      "from": [
        -0.42,
        1.17,
        0
      ],
      "to": [
        -0.7,
        0.77,
        0.15
      ],
      "r": 0.072,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "robot-0-leg--1",
      "from": [
        -0.25,
        0.52,
        0
      ],
      "to": [
        -0.34,
        0.17,
        0.15
      ],
      "r": 0.083,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-boot--1",
      "p": [
        -0.34,
        0.18,
        0.2
      ],
      "s": [
        0.26,
        0.2,
        0.36
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "robot-0-eye-1",
      "p": [
        0.18,
        1.65,
        0.47
      ],
      "s": [
        0.054,
        0.054,
        0.054
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "robot-0-arm-1",
      "from": [
        0.42,
        1.17,
        0
      ],
      "to": [
        0.7,
        0.77,
        0.15
      ],
      "r": 0.072,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "robot-0-leg-1",
      "from": [
        0.25,
        0.52,
        0
      ],
      "to": [
        0.34,
        0.17,
        0.15
      ],
      "r": 0.083,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "robot-0-boot-1",
      "p": [
        0.34,
        0.18,
        0.2
      ],
      "s": [
        0.26,
        0.2,
        0.36
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-stem",
      "from": [
        0,
        0.29,
        0.1
      ],
      "to": [
        0,
        1.79,
        0.1
      ],
      "r": 0.046,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-0",
      "from": [
        0,
        0.7,
        0.1
      ],
      "to": [
        0.28,
        1.03,
        0
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-0",
      "p": [
        0.28,
        1.04,
        0
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-1",
      "from": [
        0,
        0.7719999999999999,
        0.1
      ],
      "to": [
        -0.2578512593217556,
        1.106,
        0.2366700827442809
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-1",
      "p": [
        -0.2578512593217556,
        1.116,
        0.2366700827442809
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-2",
      "from": [
        0,
        0.844,
        0.1
      ],
      "to": [
        0.03591272183187595,
        1.182,
        -0.4184617980301503
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-2",
      "p": [
        0.03591272183187595,
        1.192,
        -0.4184617980301503
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-3",
      "from": [
        0,
        0.9159999999999999,
        0.1
      ],
      "to": [
        0.2992574927169837,
        1.258,
        0.38800122815880944
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-3",
      "p": [
        0.2992574927169837,
        1.268,
        0.38800122815880944
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-4",
      "from": [
        0,
        0.988,
        0.1
      ],
      "to": [
        -0.2759056393988137,
        1.334,
        -0.047708260793407765
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-4",
      "p": [
        -0.2759056393988137,
        1.344,
        -0.047708260793407765
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-5",
      "from": [
        0,
        1.06,
        0.1
      ],
      "to": [
        0.2944061950089996,
        1.4100000000000001,
        -0.18927491207321412
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-5",
      "p": [
        0.2944061950089996,
        1.42,
        -0.18927491207321412
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-6",
      "from": [
        0,
        1.132,
        0.1
      ],
      "to": [
        -0.10668788240027216,
        1.486,
        0.40622370160903426
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-6",
      "p": [
        -0.10668788240027216,
        1.496,
        0.40622370160903426
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-7",
      "from": [
        0,
        1.204,
        0.1
      ],
      "to": [
        -0.2287713074707226,
        1.562,
        -0.4333170766057301
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-7",
      "p": [
        -0.2287713074707226,
        1.572,
        -0.4333170766057301
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-8",
      "from": [
        0,
        1.2759999999999998,
        0.1
      ],
      "to": [
        0.2637422989433443,
        1.638,
        0.09402127284864659
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-8",
      "p": [
        0.2637422989433443,
        1.6480000000000001,
        0.09402127284864659
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-9",
      "from": [
        0,
        1.3479999999999999,
        0.1
      ],
      "to": [
        -0.322351094084886,
        1.714,
        0.13634431466796487
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-9",
      "p": [
        -0.322351094084886,
        1.724,
        0.13634431466796487
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-10",
      "from": [
        0,
        1.42,
        0.1
      ],
      "to": [
        0.17434290966635707,
        1.79,
        -0.3821054171940886
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-10",
      "p": [
        0.17434290966635707,
        1.8,
        -0.3821054171940886
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "plant-1-branch-11",
      "from": [
        0,
        1.492,
        0.1
      ],
      "to": [
        0.1515946063102468,
        1.866,
        0.4659603795792528
      ],
      "r": 0.016,
      "c": 7714187,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "plant-1-leaf-11",
      "p": [
        0.1515946063102468,
        1.876,
        0.4659603795792528
      ],
      "s": [
        0.095,
        0.095,
        0.095
      ],
      "c": 7714187,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gardener-apron-front",
      "p": [
        0,
        0.9,
        0.36
      ],
      "s": [
        0.57,
        0.7,
        0.085
      ],
      "c": 9287344,
      "finish": "fabric"
    },
    {
      "t": "cylinder",
      "n": "gardener-brim",
      "p": [
        0,
        1.91,
        0.08
      ],
      "s": [
        0.99,
        0.12,
        0.87
      ],
      "c": 15580523,
      "finish": "fabric"
    },
    {
      "t": "cylinder",
      "n": "gardener-cap",
      "p": [
        0,
        2.06,
        0.08
      ],
      "s": [
        0.63,
        0.31,
        0.59
      ],
      "c": 14195786,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-0",
      "p": [
        -0.26,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-1",
      "p": [
        -0.177,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-2",
      "p": [
        -0.094,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-3",
      "p": [
        -0.01100000000000001,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-4",
      "p": [
        0.07200000000000001,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-5",
      "p": [
        0.15500000000000003,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitch-6",
      "p": [
        0.238,
        0.55,
        0.416
      ],
      "s": [
        0.035,
        0.027,
        0.016
      ],
      "c": 15918274,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "pollinator-wand",
      "from": [
        0.66,
        0.81,
        0.17
      ],
      "to": [
        0.75,
        1.66,
        0.24
      ],
      "r": 0.041,
      "c": 11386806,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "flower-pollen-head",
      "p": [
        0.75,
        1.72,
        0.24
      ],
      "s": [
        0.24,
        0.17,
        0.17
      ],
      "c": 15512683,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "flower-petal-0",
      "p": [
        0.94,
        1.72,
        0.24
      ],
      "s": [
        0.14,
        0.13,
        0.055
      ],
      "c": 15849353,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "flower-petal-1",
      "p": [
        0.845,
        1.8845448267190432,
        0.24
      ],
      "s": [
        0.14,
        0.13,
        0.055
      ],
      "c": 15849353,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "flower-petal-2",
      "p": [
        0.655,
        1.8845448267190434,
        0.24
      ],
      "s": [
        0.14,
        0.13,
        0.055
      ],
      "c": 15849353,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "flower-petal-3",
      "p": [
        0.56,
        1.72,
        0.24
      ],
      "s": [
        0.14,
        0.13,
        0.055
      ],
      "c": 15849353,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "flower-petal-4",
      "p": [
        0.6549999999999999,
        1.5554551732809567,
        0.24
      ],
      "s": [
        0.14,
        0.13,
        0.055
      ],
      "c": 15849353,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "flower-petal-5",
      "p": [
        0.845,
        1.5554551732809567,
        0.24
      ],
      "s": [
        0.14,
        0.13,
        0.055
      ],
      "c": 15849353,
      "finish": "fabric"
    }
  ]
}); }
