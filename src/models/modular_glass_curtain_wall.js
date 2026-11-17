import { buildRecipe } from './recipe_engine.js';
/** Modular Glass Curtain Wall — editable original procedural asset. */
export const assetMeta = {
  "id": "architecture.modular-glass-curtain-wall.001",
  "slug": "modular-glass-curtain-wall",
  "title": "Modular Glass Curtain Wall",
  "title_zh": "建筑玻璃幕墙模块",
  "summary": "Reusable office facade tile with aluminum mullions, glass panes and anchors",
  "category": "architecture",
  "tags": [
    "curtain-wall",
    "facade",
    "architecture"
  ],
  "dimensions_m": [
    2.45,
    3.02,
    0.31
  ],
  "generator": "createModularGlassCurtainWall",
  "source_path": "src/models/modular_glass_curtain_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/modular-glass-curtain-wall.webp"
};
export function createModularGlassCurtainWall() { return buildRecipe({
  "title": "Modular Glass Curtain Wall",
  "dimensions": [
    2.45,
    3.02,
    0.31
  ],
  "parts": [
    {
      "t": "box",
      "n": "structural-frame",
      "p": [
        0,
        1.5,
        0
      ],
      "s": [
        2.44,
        2.98,
        0.21
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "glass-pane-0-0",
      "p": [
        -0.79,
        0.49,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 8170425
    },
    {
      "t": "box",
      "n": "glass-pane-1-0",
      "p": [
        0,
        0.49,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 6658476
    },
    {
      "t": "box",
      "n": "glass-pane-2-0",
      "p": [
        0.79,
        0.49,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 8170425
    },
    {
      "t": "box",
      "n": "glass-pane-0-1",
      "p": [
        -0.79,
        1.47,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 6658476
    },
    {
      "t": "box",
      "n": "glass-pane-1-1",
      "p": [
        0,
        1.47,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 8170425
    },
    {
      "t": "box",
      "n": "glass-pane-2-1",
      "p": [
        0.79,
        1.47,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 6658476
    },
    {
      "t": "box",
      "n": "glass-pane-0-2",
      "p": [
        -0.79,
        2.45,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 8170425
    },
    {
      "t": "box",
      "n": "glass-pane-1-2",
      "p": [
        0,
        2.45,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 6658476
    },
    {
      "t": "box",
      "n": "glass-pane-2-2",
      "p": [
        0.79,
        2.45,
        0.115
      ],
      "s": [
        0.73,
        0.86,
        0.027
      ],
      "c": 8170425
    },
    {
      "t": "box",
      "n": "vertical-mullion-0",
      "p": [
        -1.18,
        1.51,
        0.146
      ],
      "s": [
        0.065,
        2.99,
        0.071
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "vertical-mullion-1",
      "p": [
        -0.3899999999999999,
        1.51,
        0.146
      ],
      "s": [
        0.065,
        2.99,
        0.071
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "vertical-mullion-2",
      "p": [
        0.40000000000000013,
        1.51,
        0.146
      ],
      "s": [
        0.065,
        2.99,
        0.071
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "vertical-mullion-3",
      "p": [
        1.1900000000000002,
        1.51,
        0.146
      ],
      "s": [
        0.065,
        2.99,
        0.071
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "horizontal-transom-0",
      "p": [
        0,
        0.02,
        0.146
      ],
      "s": [
        2.44,
        0.058,
        0.072
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "horizontal-transom-1",
      "p": [
        0,
        1.01,
        0.146
      ],
      "s": [
        2.44,
        0.058,
        0.072
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "horizontal-transom-2",
      "p": [
        0,
        2,
        0.146
      ],
      "s": [
        2.44,
        0.058,
        0.072
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "horizontal-transom-3",
      "p": [
        0,
        2.9899999999999998,
        0.146
      ],
      "s": [
        2.44,
        0.058,
        0.072
      ],
      "c": 9544355
    },
    {
      "t": "box",
      "n": "fixing-bracket-0",
      "p": [
        -0.85,
        0.4,
        -0.17
      ],
      "s": [
        0.12,
        0.17,
        0.14
      ],
      "c": 13017709
    },
    {
      "t": "box",
      "n": "fixing-bracket-1",
      "p": [
        0,
        0.4,
        -0.17
      ],
      "s": [
        0.12,
        0.17,
        0.14
      ],
      "c": 13017709
    },
    {
      "t": "box",
      "n": "fixing-bracket-2",
      "p": [
        0.85,
        0.4,
        -0.17
      ],
      "s": [
        0.12,
        0.17,
        0.14
      ],
      "c": 13017709
    },
    {
      "t": "box",
      "n": "fixing-bracket-3",
      "p": [
        -0.85,
        2.2600000000000002,
        -0.17
      ],
      "s": [
        0.12,
        0.17,
        0.14
      ],
      "c": 13017709
    },
    {
      "t": "box",
      "n": "fixing-bracket-4",
      "p": [
        0,
        2.2600000000000002,
        -0.17
      ],
      "s": [
        0.12,
        0.17,
        0.14
      ],
      "c": 13017709
    },
    {
      "t": "box",
      "n": "fixing-bracket-5",
      "p": [
        0.85,
        2.2600000000000002,
        -0.17
      ],
      "s": [
        0.12,
        0.17,
        0.14
      ],
      "c": 13017709
    },
    {
      "t": "box",
      "n": "sill-flashing",
      "p": [
        0,
        0.05,
        0.15
      ],
      "s": [
        2.44,
        0.1,
        0.31
      ],
      "c": 11056307
    },
    {
      "t": "box",
      "n": "weather-seal",
      "p": [
        0,
        2.99,
        0.12
      ],
      "s": [
        2.39,
        0.026,
        0.13
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "joint-edge-0",
      "p": [
        -1.18,
        1.5,
        -0.07
      ],
      "s": [
        0.031,
        2.97,
        0.11
      ],
      "c": 5729653
    },
    {
      "t": "box",
      "n": "joint-edge-1",
      "p": [
        1.18,
        1.5,
        -0.07
      ],
      "s": [
        0.031,
        2.97,
        0.11
      ],
      "c": 5729653
    }
  ]
}); }
