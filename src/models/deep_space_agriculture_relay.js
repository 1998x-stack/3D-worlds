import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Deep Space Agriculture Relay / 深空农业中继站. */
export const assetMeta = {
  "id": "scifi.deep-space-agriculture-relay.001",
  "slug": "deep-space-agriculture-relay",
  "title": "Deep Space Agriculture Relay",
  "title_zh": "深空农业中继站",
  "summary": "Science-fiction orbital crop monitoring relay with antenna dishes and nutrient stores",
  "category": "scifi",
  "tags": [
    "deep",
    "space",
    "agriculture",
    "relay",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.3,
    3.25,
    3.3
  ],
  "generator": "createDeepSpaceAgricultureRelay",
  "source_path": "src/models/deep_space_agriculture_relay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/deep-space-agriculture-relay.webp",
  "accent": "#61799d"
};
export function createDeepSpaceAgricultureRelay() { return buildRecipe({
  "title": "Deep Space Agriculture Relay",
  "dimensions": [
    3.3,
    3.25,
    3.3
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "orbital-agriculture-hub",
      "p": [
        0,
        1.48,
        0
      ],
      "s": [
        1.25,
        1.97,
        1.25
      ],
      "c": 6388125
    },
    {
      "t": "rod",
      "n": "relay-truss-0",
      "from": [
        0.55,
        1.38,
        0
      ],
      "to": [
        1.48,
        1.38,
        0
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-0",
      "p": [
        1.26,
        1.43,
        0
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-0",
      "p": [
        1.37,
        1.12,
        0
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-1",
      "from": [
        0.3889087296526012,
        1.38,
        0.38890872965260115
      ],
      "to": [
        1.0465180361560904,
        1.38,
        1.0465180361560902
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-1",
      "p": [
        0.8909545442950499,
        1.43,
        0.8909545442950498
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-1",
      "p": [
        0.9687362902255703,
        1.12,
        0.9687362902255701
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-2",
      "from": [
        3.367778697655222e-17,
        1.38,
        0.55
      ],
      "to": [
        9.062386313690413e-17,
        1.38,
        1.48
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-2",
      "p": [
        7.715274834628325e-17,
        1.43,
        1.26
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-2",
      "p": [
        8.38883057415937e-17,
        1.12,
        1.37
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-3",
      "from": [
        -0.38890872965260115,
        1.38,
        0.3889087296526012
      ],
      "to": [
        -1.0465180361560902,
        1.38,
        1.0465180361560904
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-3",
      "p": [
        -0.8909545442950498,
        1.43,
        0.8909545442950499
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-3",
      "p": [
        -0.9687362902255701,
        1.12,
        0.9687362902255703
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-4",
      "from": [
        -0.55,
        1.38,
        6.735557395310444e-17
      ],
      "to": [
        -1.48,
        1.38,
        1.8124772627380827e-16
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-4",
      "p": [
        -1.26,
        1.43,
        1.543054966925665e-16
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-4",
      "p": [
        -1.37,
        1.12,
        1.677766114831874e-16
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-5",
      "from": [
        -0.38890872965260126,
        1.38,
        -0.38890872965260115
      ],
      "to": [
        -1.0465180361560906,
        1.38,
        -1.0465180361560902
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-5",
      "p": [
        -0.89095454429505,
        1.43,
        -0.8909545442950498
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-5",
      "p": [
        -0.9687362902255704,
        1.12,
        -0.9687362902255701
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-6",
      "from": [
        -1.0103336092965664e-16,
        1.38,
        -0.55
      ],
      "to": [
        -2.718715894107124e-16,
        1.38,
        -1.48
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-6",
      "p": [
        -2.3145824503884976e-16,
        1.43,
        -1.26
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-6",
      "p": [
        -2.516649172247811e-16,
        1.12,
        -1.37
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-truss-7",
      "from": [
        0.3889087296526011,
        1.38,
        -0.38890872965260126
      ],
      "to": [
        1.04651803615609,
        1.38,
        -1.0465180361560906
      ],
      "r": 0.048,
      "c": 12760807
    },
    {
      "t": "box",
      "n": "hydroponic-solar-panel-7",
      "p": [
        0.8909545442950497,
        1.43,
        -0.89095454429505
      ],
      "s": [
        0.43,
        0.77,
        0.1
      ],
      "c": 10016206
    },
    {
      "t": "sphere",
      "n": "growth-radiator-7",
      "p": [
        0.96873629022557,
        1.12,
        -0.9687362902255704
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 3752031
    },
    {
      "t": "rod",
      "n": "relay-transmission-antenna",
      "from": [
        0,
        2.2,
        0
      ],
      "to": [
        0,
        3.04,
        0
      ],
      "r": 0.049,
      "c": 3752031
    },
    {
      "t": "cylinder",
      "n": "agricultural-telemetry-dish",
      "p": [
        0,
        3.02,
        0
      ],
      "s": [
        0.73,
        0.16,
        0.73
      ],
      "c": 10016206
    },
    {
      "t": "cylinder",
      "n": "nutrient-storage-module",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        0.85,
        0.75,
        0.85
      ],
      "c": 12760807
    }
  ]
}); }
