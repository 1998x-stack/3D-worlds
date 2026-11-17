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
  "accent": "#c5b6a2",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      "c": 8215879,
      "finish": "glow"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 7915949,
      "finish": "metal"
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
    },
    {
      "t": "box",
      "n": "vent-frame-top-0-0",
      "p": [
        -1.06,
        0.65,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-0-0",
      "p": [
        -1.06,
        0.15000000000000002,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-0-0",
      "p": [
        -1.28,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-0-0",
      "p": [
        -0.8400000000000001,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-0-1",
      "p": [
        -1.06,
        1.28,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-0-1",
      "p": [
        -1.06,
        0.78,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-0-1",
      "p": [
        -1.28,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-0-1",
      "p": [
        -0.8400000000000001,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-0-2",
      "p": [
        -1.06,
        1.9100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-0-2",
      "p": [
        -1.06,
        1.4100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-0-2",
      "p": [
        -1.28,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-0-2",
      "p": [
        -0.8400000000000001,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-0-3",
      "p": [
        -1.06,
        2.54,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-0-3",
      "p": [
        -1.06,
        2.04,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-0-3",
      "p": [
        -1.28,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-0-3",
      "p": [
        -0.8400000000000001,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-1-0",
      "p": [
        -0.53,
        0.65,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-1-0",
      "p": [
        -0.53,
        0.15000000000000002,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-1-0",
      "p": [
        -0.75,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-1-0",
      "p": [
        -0.31000000000000005,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-1-1",
      "p": [
        -0.53,
        1.28,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-1-1",
      "p": [
        -0.53,
        0.78,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-1-1",
      "p": [
        -0.75,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-1-1",
      "p": [
        -0.31000000000000005,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-1-2",
      "p": [
        -0.53,
        1.9100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-1-2",
      "p": [
        -0.53,
        1.4100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-1-2",
      "p": [
        -0.75,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-1-2",
      "p": [
        -0.31000000000000005,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-1-3",
      "p": [
        -0.53,
        2.54,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-1-3",
      "p": [
        -0.53,
        2.04,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-1-3",
      "p": [
        -0.75,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-1-3",
      "p": [
        -0.31000000000000005,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-2-0",
      "p": [
        0,
        0.65,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-2-0",
      "p": [
        0,
        0.15000000000000002,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-2-0",
      "p": [
        -0.22,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-2-0",
      "p": [
        0.22,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-2-1",
      "p": [
        0,
        1.28,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-2-1",
      "p": [
        0,
        0.78,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-2-1",
      "p": [
        -0.22,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-2-1",
      "p": [
        0.22,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-2-2",
      "p": [
        0,
        1.9100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-2-2",
      "p": [
        0,
        1.4100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-2-2",
      "p": [
        -0.22,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-2-2",
      "p": [
        0.22,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-2-3",
      "p": [
        0,
        2.54,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-2-3",
      "p": [
        0,
        2.04,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-2-3",
      "p": [
        -0.22,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-2-3",
      "p": [
        0.22,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-3-0",
      "p": [
        0.53,
        0.65,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-3-0",
      "p": [
        0.53,
        0.15000000000000002,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-3-0",
      "p": [
        0.31000000000000005,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-3-0",
      "p": [
        0.75,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-3-1",
      "p": [
        0.53,
        1.28,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-3-1",
      "p": [
        0.53,
        0.78,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-3-1",
      "p": [
        0.31000000000000005,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-3-1",
      "p": [
        0.75,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-3-2",
      "p": [
        0.53,
        1.9100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-3-2",
      "p": [
        0.53,
        1.4100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-3-2",
      "p": [
        0.31000000000000005,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-3-2",
      "p": [
        0.75,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-3-3",
      "p": [
        0.53,
        2.54,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-3-3",
      "p": [
        0.53,
        2.04,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-3-3",
      "p": [
        0.31000000000000005,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-3-3",
      "p": [
        0.75,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-4-0",
      "p": [
        1.06,
        0.65,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-4-0",
      "p": [
        1.06,
        0.15000000000000002,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-4-0",
      "p": [
        0.8400000000000001,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-4-0",
      "p": [
        1.28,
        0.4,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-4-1",
      "p": [
        1.06,
        1.28,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-4-1",
      "p": [
        1.06,
        0.78,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-4-1",
      "p": [
        0.8400000000000001,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-4-1",
      "p": [
        1.28,
        1.03,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-4-2",
      "p": [
        1.06,
        1.9100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-4-2",
      "p": [
        1.06,
        1.4100000000000001,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-4-2",
      "p": [
        0.8400000000000001,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-4-2",
      "p": [
        1.28,
        1.6600000000000001,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-top-4-3",
      "p": [
        1.06,
        2.54,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-bottom-4-3",
      "p": [
        1.06,
        2.04,
        0
      ],
      "s": [
        0.48,
        0.065,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-left-4-3",
      "p": [
        0.8400000000000001,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "vent-frame-right-4-3",
      "p": [
        1.28,
        2.29,
        0
      ],
      "s": [
        0.055,
        0.49,
        0.26
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "cylinder",
      "n": "panel-joining-bolt-0",
      "p": [
        -1.3,
        2.75,
        0.17
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "panel-joining-bolt-1",
      "p": [
        -0.78,
        2.75,
        0.17
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "panel-joining-bolt-2",
      "p": [
        -0.26,
        2.75,
        0.17
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "panel-joining-bolt-3",
      "p": [
        0.26,
        2.75,
        0.17
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "panel-joining-bolt-4",
      "p": [
        0.78,
        2.75,
        0.17
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "panel-joining-bolt-5",
      "p": [
        1.3,
        2.75,
        0.17
      ],
      "s": [
        0.07,
        0.09,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "screen-geometry-plaque",
      "p": [
        0,
        0.16,
        0.16
      ],
      "s": [
        0.49,
        0.09,
        0.04
      ],
      "c": 14989405,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
