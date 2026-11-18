import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Root Window Terrarium; stylized visual prototype only. */
export const assetMeta = {
  "id": "nature.root-window-terrarium.001",
  "slug": "root-window-terrarium",
  "title": "Root Window Terrarium",
  "title_zh": "透明根系观察缸",
  "summary": "Original root window terrarium study with root and plant assemblies and individually named functional details",
  "category": "nature",
  "tags": [
    "root",
    "window",
    "terrarium",
    "nature",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.25,
    0.28,
    0.19
  ],
  "generator": "createRootWindowTerrarium",
  "source_path": "src/models/root_window_terrarium.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/root-window-terrarium.webp",
  "accent": "#bdc87a",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createRootWindowTerrarium() { return buildRecipe({
  "title": "Root Window Terrarium",
  "dimensions": [
    0.25,
    0.28,
    0.19
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
      "c": 6461811,
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
      "c": 12437626,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "root-0-soil-layer",
      "p": [
        0,
        0.38,
        0
      ],
      "s": [
        1.58,
        0.33,
        1.17
      ],
      "c": 7889484,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-0",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.3,
        0.2,
        0
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-1",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        -0.23596598897319854,
        0.2,
        0.17562042694329924
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-2",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.029749654369411772,
        0.2,
        -0.268964444385677
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-3",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.21900647323161188,
        0.2,
        0.22222700187776276
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-4",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        -0.37418138520176825,
        0.2,
        -0.05055476655466409
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-5",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.3375415834929969,
        0.2,
        -0.16097187540013047
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-6",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        -0.10912328960977673,
        0.2,
        0.2993539107302762
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-7",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        -0.2026985784609995,
        0.2,
        -0.2840214507460815
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-8",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.43204135948056055,
        0.2,
        0.11329392651056548
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-9",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        -0.4437464519587777,
        0.2,
        0.12962516716268077
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-10",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.2120895036684985,
        0.2,
        -0.3169524267023183
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-11",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        0.15542691130952524,
        0.2,
        0.3435426340173709
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "root-0-rootlet-12",
      "from": [
        0,
        0.6,
        0
      ],
      "to": [
        -0.46709453672290285,
        0.2,
        -0.1856620413776113
      ],
      "r": 0.014,
      "c": 7889484,
      "finish": "metal"
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
