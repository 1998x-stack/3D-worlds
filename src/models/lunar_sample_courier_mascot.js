import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Lunar Sample Courier Mascot; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "characters.lunar-sample-courier-mascot.001",
  "slug": "lunar-sample-courier-mascot",
  "title": "Lunar Sample Courier Mascot",
  "title_zh": "月面样本运输机器人角色",
  "summary": "Original robot mascot with visor, pod carriers and boots",
  "category": "characters",
  "tags": [
    "lunar",
    "sample",
    "courier",
    "mascot",
    "characters",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.2,
    0.29,
    0.18
  ],
  "generator": "createLunarSampleCourierMascot",
  "source_path": "src/models/lunar_sample_courier_mascot.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/lunar-sample-courier-mascot.webp",
  "accent": "#5ca6a2",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createLunarSampleCourierMascot() { return buildRecipe({
  "title": "Lunar Sample Courier Mascot",
  "dimensions": [
    0.2,
    0.29,
    0.18
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "robot-body",
      "p": [
        0,
        0.98,
        0
      ],
      "s": [
        0.91,
        0.92,
        0.73
      ],
      "c": 14068349,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "helmet",
      "p": [
        0,
        1.65,
        0.01
      ],
      "s": [
        0.94,
        0.67,
        0.76
      ],
      "c": 6071970,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "visor",
      "p": [
        0,
        1.68,
        0.44
      ],
      "s": [
        0.67,
        0.27,
        0.05
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "sphere",
      "n": "eye--1",
      "p": [
        -0.19,
        1.69,
        0.48
      ],
      "s": [
        0.065,
        0.065,
        0.041
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "arm--1",
      "from": [
        -0.45,
        1.19,
        0
      ],
      "to": [
        -0.75,
        0.8,
        0.21
      ],
      "r": 0.083,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "leg--1",
      "from": [
        -0.25,
        0.57,
        0.02
      ],
      "to": [
        -0.35,
        0.2,
        0.19
      ],
      "r": 0.093,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "boot--1",
      "p": [
        -0.35,
        0.15,
        0.21
      ],
      "s": [
        0.33,
        0.25,
        0.4
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "specimen-vial--1",
      "p": [
        -0.7,
        1.11,
        -0.13
      ],
      "s": [
        0.28,
        0.44,
        0.28
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "eye-1",
      "p": [
        0.19,
        1.69,
        0.48
      ],
      "s": [
        0.065,
        0.065,
        0.041
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "arm-1",
      "from": [
        0.45,
        1.19,
        0
      ],
      "to": [
        0.75,
        0.8,
        0.21
      ],
      "r": 0.083,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "leg-1",
      "from": [
        0.25,
        0.57,
        0.02
      ],
      "to": [
        0.35,
        0.2,
        0.19
      ],
      "r": 0.093,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "boot-1",
      "p": [
        0.35,
        0.15,
        0.21
      ],
      "s": [
        0.33,
        0.25,
        0.4
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "specimen-vial-1",
      "p": [
        0.7,
        1.11,
        -0.13
      ],
      "s": [
        0.28,
        0.44,
        0.28
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-0",
      "p": [
        -0.32,
        0.84,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-1",
      "p": [
        -0.11,
        0.84,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-2",
      "p": [
        0.1,
        0.84,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-3",
      "p": [
        0.31,
        0.84,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-4",
      "p": [
        -0.32,
        1,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-5",
      "p": [
        -0.11,
        1,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-6",
      "p": [
        0.1,
        1,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-7",
      "p": [
        0.31,
        1,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-8",
      "p": [
        -0.32,
        1.16,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-9",
      "p": [
        -0.11,
        1.16,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 7141333,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-10",
      "p": [
        0.1,
        1.16,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "robot-console-pixel-11",
      "p": [
        0.31,
        1.16,
        0.4
      ],
      "s": [
        0.13,
        0.09,
        0.03
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "transponder",
      "from": [
        0,
        2,
        -0.13
      ],
      "to": [
        0.12,
        2.21,
        -0.13
      ],
      "r": 0.025,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "beacon",
      "p": [
        0.12,
        2.22,
        -0.13
      ],
      "s": [
        0.075,
        0.075,
        0.075
      ],
      "c": 13657955,
      "finish": "matte"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
