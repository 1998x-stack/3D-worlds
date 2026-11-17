import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Parametric Shade Brick Screen / 参数化遮阳花砖屏风. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "architecture.parametric-shade-brick-screen.001",
  "slug": "parametric-shade-brick-screen",
  "title": "Parametric Shade Brick Screen",
  "title_zh": "参数化遮阳花砖屏风",
  "summary": "Architectural screen panel of patterned hollow-look shade bricks with diagonal ribs",
  "category": "architecture",
  "tags": [
    "parametric",
    "shade",
    "brick",
    "screen",
    "architecture",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.45,
    0.42,
    0.08
  ],
  "generator": "createParametricShadeBrickScreen",
  "source_path": "src/models/parametric_shade_brick_screen.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/parametric-shade-brick-screen.webp",
  "accent": "#c5b6a2"
};
export function createParametricShadeBrickScreen() { return buildRecipe({
  "title": "Parametric Shade Brick Screen",
  "dimensions": [
    0.45,
    0.42,
    0.08
  ],
  "parts": [
    {
      "t": "box",
      "n": "screen-plinth",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        2.7,
        0.14,
        0.45
      ],
      "c": 8215879
    },
    {
      "t": "box",
      "n": "brick-frame-0-0",
      "p": [
        -1.06,
        0.4,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-0-0",
      "from": [
        -1.28,
        0.2,
        0.14
      ],
      "to": [
        -0.8400000000000001,
        0.6000000000000001,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-0-1",
      "p": [
        -1.06,
        1.03,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-0-1",
      "from": [
        -1.28,
        0.8300000000000001,
        0.14
      ],
      "to": [
        -0.8400000000000001,
        1.23,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-0-2",
      "p": [
        -1.06,
        1.6600000000000001,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-0-2",
      "from": [
        -1.28,
        1.4600000000000002,
        0.14
      ],
      "to": [
        -0.8400000000000001,
        1.86,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-0-3",
      "p": [
        -1.06,
        2.29,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-0-3",
      "from": [
        -1.28,
        2.09,
        0.14
      ],
      "to": [
        -0.8400000000000001,
        2.49,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-1-0",
      "p": [
        -0.53,
        0.4,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-1-0",
      "from": [
        -0.75,
        0.2,
        0.14
      ],
      "to": [
        -0.31000000000000005,
        0.6000000000000001,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-1-1",
      "p": [
        -0.53,
        1.03,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-1-1",
      "from": [
        -0.75,
        0.8300000000000001,
        0.14
      ],
      "to": [
        -0.31000000000000005,
        1.23,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-1-2",
      "p": [
        -0.53,
        1.6600000000000001,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-1-2",
      "from": [
        -0.75,
        1.4600000000000002,
        0.14
      ],
      "to": [
        -0.31000000000000005,
        1.86,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-1-3",
      "p": [
        -0.53,
        2.29,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-1-3",
      "from": [
        -0.75,
        2.09,
        0.14
      ],
      "to": [
        -0.31000000000000005,
        2.49,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-2-0",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-2-0",
      "from": [
        -0.22,
        0.2,
        0.14
      ],
      "to": [
        0.22,
        0.6000000000000001,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-2-1",
      "p": [
        0,
        1.03,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-2-1",
      "from": [
        -0.22,
        0.8300000000000001,
        0.14
      ],
      "to": [
        0.22,
        1.23,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-2-2",
      "p": [
        0,
        1.6600000000000001,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-2-2",
      "from": [
        -0.22,
        1.4600000000000002,
        0.14
      ],
      "to": [
        0.22,
        1.86,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-2-3",
      "p": [
        0,
        2.29,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-2-3",
      "from": [
        -0.22,
        2.09,
        0.14
      ],
      "to": [
        0.22,
        2.49,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-3-0",
      "p": [
        0.53,
        0.4,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-3-0",
      "from": [
        0.31000000000000005,
        0.2,
        0.14
      ],
      "to": [
        0.75,
        0.6000000000000001,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-3-1",
      "p": [
        0.53,
        1.03,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-3-1",
      "from": [
        0.31000000000000005,
        0.8300000000000001,
        0.14
      ],
      "to": [
        0.75,
        1.23,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-3-2",
      "p": [
        0.53,
        1.6600000000000001,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-3-2",
      "from": [
        0.31000000000000005,
        1.4600000000000002,
        0.14
      ],
      "to": [
        0.75,
        1.86,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-3-3",
      "p": [
        0.53,
        2.29,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-3-3",
      "from": [
        0.31000000000000005,
        2.09,
        0.14
      ],
      "to": [
        0.75,
        2.49,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-4-0",
      "p": [
        1.06,
        0.4,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-4-0",
      "from": [
        0.8400000000000001,
        0.2,
        0.14
      ],
      "to": [
        1.28,
        0.6000000000000001,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-4-1",
      "p": [
        1.06,
        1.03,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-4-1",
      "from": [
        0.8400000000000001,
        0.8300000000000001,
        0.14
      ],
      "to": [
        1.28,
        1.23,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "brick-frame-4-2",
      "p": [
        1.06,
        1.6600000000000001,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 12957346
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-4-2",
      "from": [
        0.8400000000000001,
        1.4600000000000002,
        0.14
      ],
      "to": [
        1.28,
        1.86,
        0.14
      ],
      "r": 0.055,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "brick-frame-4-3",
      "p": [
        1.06,
        2.29,
        0
      ],
      "s": [
        0.49,
        0.58,
        0.26
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "diagonal-louvre-4-3",
      "from": [
        0.8400000000000001,
        2.09,
        0.14
      ],
      "to": [
        1.28,
        2.49,
        0.14
      ],
      "r": 0.055,
      "c": 7915949
    },
    {
      "t": "box",
      "n": "panel-mullion-0",
      "p": [
        -1.32,
        1.32,
        -0.18
      ],
      "s": [
        0.05,
        2.55,
        0.11
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "panel-mullion-1",
      "p": [
        -0.79,
        1.32,
        -0.18
      ],
      "s": [
        0.05,
        2.55,
        0.11
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "panel-mullion-2",
      "p": [
        -0.26,
        1.32,
        -0.18
      ],
      "s": [
        0.05,
        2.55,
        0.11
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "panel-mullion-3",
      "p": [
        0.27,
        1.32,
        -0.18
      ],
      "s": [
        0.05,
        2.55,
        0.11
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "panel-mullion-4",
      "p": [
        0.8,
        1.32,
        -0.18
      ],
      "s": [
        0.05,
        2.55,
        0.11
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "panel-mullion-5",
      "p": [
        1.3300000000000003,
        1.32,
        -0.18
      ],
      "s": [
        0.05,
        2.55,
        0.11
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "beam",
      "p": [
        0,
        2.8,
        0
      ],
      "s": [
        2.8,
        0.12,
        0.38
      ],
      "c": 3229017
    }
  ]
}); }
