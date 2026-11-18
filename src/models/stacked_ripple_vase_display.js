import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Stacked Ripple Vase Display; stylized visual prototype only. */
export const assetMeta = {
  "id": "decor.stacked-ripple-vase-display.001",
  "slug": "stacked-ripple-vase-display",
  "title": "Stacked Ripple Vase Display",
  "title_zh": "层叠涟漪花器",
  "summary": "Original stacked ripple vase display study with vase and plant assemblies and individually named functional details",
  "category": "decor",
  "tags": [
    "stacked",
    "ripple",
    "vase",
    "display",
    "decor",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.22,
    0.32,
    0.22
  ],
  "generator": "createStackedRippleVaseDisplay",
  "source_path": "src/models/stacked_ripple_vase_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/stacked-ripple-vase-display.webp",
  "accent": "#e8bd83",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createStackedRippleVaseDisplay() { return buildRecipe({
  "title": "Stacked Ripple Vase Display",
  "dimensions": [
    0.22,
    0.32,
    0.22
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
      "c": 9533096,
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
      "c": 15252867,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "vase-0-vessel",
      "p": [
        0,
        1.03,
        0
      ],
      "s": [
        0.88,
        1.44,
        0.88
      ],
      "c": 9533096,
      "finish": "ceramic"
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-0",
      "p": [
        0,
        0.37,
        0
      ],
      "s": [
        0.82,
        0.82,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-1",
      "p": [
        0,
        0.47,
        0
      ],
      "s": [
        0.8967080861766724,
        0.8967080861766724,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-2",
      "p": [
        0,
        0.5700000000000001,
        0
      ],
      "s": [
        0.9546353575692634,
        0.9546353575692634,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-3",
      "p": [
        0,
        0.67,
        0
      ],
      "s": [
        0.9795991978566487,
        0.9795991978566487,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-4",
      "p": [
        0,
        0.77,
        0
      ],
      "s": [
        0.965487588292109,
        0.965487588292109,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-5",
      "p": [
        0,
        0.87,
        0
      ],
      "s": [
        0.915755543056633,
        0.915755543056633,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-6",
      "p": [
        0,
        0.9700000000000001,
        0
      ],
      "s": [
        0.8425792012895787,
        0.8425792012895787,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-7",
      "p": [
        0,
        1.07,
        0
      ],
      "s": [
        0.7638746835696608,
        0.7638746835696608,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-8",
      "p": [
        0,
        1.17,
        0
      ],
      "s": [
        0.6989116007507314,
        0.6989116007507314,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-9",
      "p": [
        0,
        1.27,
        0
      ],
      "s": [
        0.6635951811735844,
        0.6635951811735844,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-10",
      "p": [
        0,
        1.37,
        0
      ],
      "s": [
        0.6665721160538978,
        0.6665721160538978,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-11",
      "p": [
        0,
        1.4700000000000002,
        0
      ],
      "s": [
        0.7071135479087373,
        0.7071135479087373,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-12",
      "p": [
        0,
        1.5700000000000003,
        0
      ],
      "s": [
        0.7752935202881718,
        0.7752935202881718,
        0.15
      ],
      "c": 9533096,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "vase-0-ripple-13",
      "p": [
        0,
        1.67,
        0
      ],
      "s": [
        0.8544191980940504,
        0.8544191980940504,
        0.15
      ],
      "c": 15252867,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
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
    }
  ]
}); }
