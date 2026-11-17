import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "decor.bonsai-ceramic-display.001",
  "slug": "bonsai-ceramic-display",
  "title": "Bonsai Ceramic Display",
  "title_zh": "盆景陶瓷展示树",
  "summary": "Asymmetric sculptural bonsai with shallow glazed pot and branch pads",
  "category": "decor",
  "tags": [
    "bonsai",
    "plant",
    "decor"
  ],
  "dimensions_m": [
    0.76,
    0.83,
    0.66
  ],
  "generator": "createBonsaiCeramicDisplay",
  "source_path": "src/models/bonsai_ceramic_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/bonsai-ceramic-display.webp"
};
export function createBonsaiCeramicDisplay() { return buildRecipe({
  "title": "Bonsai Ceramic Display",
  "dimensions": [
    0.76,
    0.83,
    0.66
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "oval-pot",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        0.63,
        0.29,
        0.48
      ],
      "c": 8426906
    },
    {
      "t": "cylinder",
      "n": "soil",
      "p": [
        0,
        0.31,
        0
      ],
      "s": [
        0.52,
        0.025,
        0.4
      ],
      "c": 9595208
    },
    {
      "t": "rod",
      "n": "trunk-low",
      "from": [
        0,
        0.31,
        0
      ],
      "to": [
        0.1,
        0.55,
        0
      ],
      "r": 0.058,
      "c": 7426619
    },
    {
      "t": "rod",
      "n": "trunk-high",
      "from": [
        0.1,
        0.55,
        0
      ],
      "to": [
        -0.09,
        0.72,
        0.02
      ],
      "r": 0.05,
      "c": 7426619
    },
    {
      "t": "rod",
      "n": "branch-0",
      "from": [
        -0.09,
        0.66,
        0.02
      ],
      "to": [
        0.28,
        0.65,
        0
      ],
      "r": 0.027,
      "c": 9595208
    },
    {
      "t": "rod",
      "n": "branch-1",
      "from": [
        -0.09,
        0.66,
        0.02
      ],
      "to": [
        0.08653462767119707,
        0.71,
        0.190209012605692
      ],
      "r": 0.027,
      "c": 9595208
    },
    {
      "t": "rod",
      "n": "branch-2",
      "from": [
        -0.09,
        0.66,
        0.02
      ],
      "to": [
        -0.22651255867005213,
        0.77,
        0.1175690434681399
      ],
      "r": 0.027,
      "c": 9595208
    },
    {
      "t": "rod",
      "n": "branch-3",
      "from": [
        -0.09,
        0.66,
        0.02
      ],
      "to": [
        -0.2265430557237909,
        0.65,
        -0.11753905973301869
      ],
      "r": 0.027,
      "c": 9595208
    },
    {
      "t": "rod",
      "n": "branch-4",
      "from": [
        -0.09,
        0.66,
        0.02
      ],
      "to": [
        0.08648528025181286,
        0.71,
        -0.19022046325970676
      ],
      "r": 0.027,
      "c": 9595208
    },
    {
      "t": "sphere",
      "n": "foliage-0",
      "p": [
        0.26,
        0.62,
        0
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 5142609
    },
    {
      "t": "sphere",
      "n": "foliage-1",
      "p": [
        -0.1917153410702701,
        0.695,
        0.12834360839428488
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 6458466
    },
    {
      "t": "sphere",
      "n": "foliage-2",
      "p": [
        0.02272901539761532,
        0.77,
        -0.1892726050576885
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 5142609
    },
    {
      "t": "sphere",
      "n": "foliage-3",
      "p": [
        0.15819610307684515,
        0.62,
        0.15078302263566343
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 6458466
    },
    {
      "t": "sphere",
      "n": "foliage-4",
      "p": [
        -0.25602609122349973,
        0.695,
        -0.03309215349771511
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 5142609
    },
    {
      "t": "sphere",
      "n": "foliage-5",
      "p": [
        0.21937412309085744,
        0.77,
        -0.10198091883132354
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 6458466
    },
    {
      "t": "sphere",
      "n": "foliage-6",
      "p": [
        -0.06749225362538601,
        0.62,
        0.18348681993161298
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 5142609
    },
    {
      "t": "sphere",
      "n": "foliage-7",
      "p": [
        -0.11984104291091857,
        0.695,
        -0.1686132216693566
      ],
      "s": [
        0.23,
        0.13,
        0.18
      ],
      "c": 6458466
    },
    {
      "t": "sphere",
      "n": "moss-0",
      "p": [
        -0.19,
        0.32,
        0.04
      ],
      "s": [
        0.13,
        0.037,
        0.11
      ],
      "c": 6523241
    },
    {
      "t": "sphere",
      "n": "moss-1",
      "p": [
        0.19,
        0.32,
        0.04
      ],
      "s": [
        0.13,
        0.037,
        0.11
      ],
      "c": 6523241
    },
    {
      "t": "box",
      "n": "foot-0",
      "p": [
        -0.24,
        0.04,
        0
      ],
      "s": [
        0.1,
        0.08,
        0.11
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "foot-1",
      "p": [
        0.24,
        0.04,
        0
      ],
      "s": [
        0.1,
        0.08,
        0.11
      ],
      "c": 3358791
    }
  ]
}); }
