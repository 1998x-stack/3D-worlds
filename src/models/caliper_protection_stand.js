import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Caliper Protection Stand / 游标卡尺保护收纳架. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "tools.caliper-protection-stand.001",
  "slug": "caliper-protection-stand",
  "title": "Caliper Protection Stand",
  "title_zh": "游标卡尺保护收纳架",
  "summary": "Angled desktop measuring-tool rest with calibrated-looking jaw supports and spare pen slots",
  "category": "tools",
  "tags": [
    "caliper",
    "protection",
    "stand",
    "tools",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.27,
    0.18,
    0.16
  ],
  "generator": "createCaliperProtectionStand",
  "source_path": "src/models/caliper_protection_stand.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/caliper-protection-stand.webp",
  "accent": "#6d8394",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createCaliperProtectionStand() { return buildRecipe({
  "title": "Caliper Protection Stand",
  "dimensions": [
    0.27,
    0.18,
    0.16
  ],
  "parts": [
    {
      "t": "box",
      "n": "plinth",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.95,
        0.18,
        1.12
      ],
      "c": 3229017
    },
    {
      "t": "rounded-box",
      "n": "angled-backrest",
      "p": [
        0,
        0.64,
        -0.35
      ],
      "s": [
        1.74,
        0.13,
        0.54
      ],
      "c": 4084325,
      "rot": [
        -0.23,
        0,
        0
      ],
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "caliper-rail-a",
      "from": [
        -0.75,
        0.98,
        -0.26
      ],
      "to": [
        0.75,
        0.98,
        -0.26
      ],
      "r": 0.06,
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "caliper-rail-b",
      "from": [
        -0.75,
        0.71,
        -0.17
      ],
      "to": [
        0.75,
        0.71,
        -0.17
      ],
      "r": 0.035,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "measurement-index-0",
      "p": [
        -0.7,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-1",
      "p": [
        -0.49999999999999994,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-2",
      "p": [
        -0.29999999999999993,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-3",
      "p": [
        -0.09999999999999987,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-4",
      "p": [
        0.10000000000000009,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-5",
      "p": [
        0.30000000000000004,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-6",
      "p": [
        0.5000000000000002,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-7",
      "p": [
        0.7000000000000002,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "tool-rest-0",
      "p": [
        -0.64,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-0",
      "p": [
        -0.64,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tool-rest-1",
      "p": [
        -0.22000000000000003,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-1",
      "p": [
        -0.22000000000000003,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tool-rest-2",
      "p": [
        0.19999999999999996,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-2",
      "p": [
        0.19999999999999996,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "tool-rest-3",
      "p": [
        0.62,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-3",
      "p": [
        0.62,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "side-stop0",
      "p": [
        -0.84,
        0.58,
        -0.3
      ],
      "s": [
        0.12,
        0.65,
        0.28
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "side-stop1",
      "p": [
        0.84,
        0.58,
        -0.3
      ],
      "s": [
        0.12,
        0.65,
        0.28
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-0",
      "p": [
        -0.71,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.13,
        0.022
      ],
      "c": 14989405,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-1",
      "p": [
        -0.616,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-2",
      "p": [
        -0.522,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-3",
      "p": [
        -0.42799999999999994,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-4",
      "p": [
        -0.33399999999999996,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-5",
      "p": [
        -0.24,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.13,
        0.022
      ],
      "c": 14989405,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-6",
      "p": [
        -0.1459999999999999,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-7",
      "p": [
        -0.051999999999999935,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-8",
      "p": [
        0.04200000000000004,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-9",
      "p": [
        0.136,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-10",
      "p": [
        0.22999999999999998,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.13,
        0.022
      ],
      "c": 14989405,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-11",
      "p": [
        0.32400000000000007,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-12",
      "p": [
        0.41800000000000015,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-13",
      "p": [
        0.512,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-14",
      "p": [
        0.6060000000000001,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.058,
        0.022
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "noncalibrated-index-mark-15",
      "p": [
        0.7,
        1.05,
        -0.22
      ],
      "s": [
        0.02,
        0.13,
        0.022
      ],
      "c": 14989405,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "anodized-caliper-jaw-0",
      "p": [
        -0.62,
        0.93,
        -0.12
      ],
      "s": [
        0.12,
        0.44,
        0.12
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "jaw-retainer-screw-0",
      "p": [
        -0.62,
        0.73,
        -0.015
      ],
      "s": [
        0.12,
        0.09,
        0.11
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "anodized-caliper-jaw-1",
      "p": [
        0.62,
        0.93,
        -0.12
      ],
      "s": [
        0.12,
        0.44,
        0.12
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "jaw-retainer-screw-1",
      "p": [
        0.62,
        0.73,
        -0.015
      ],
      "s": [
        0.12,
        0.09,
        0.11
      ],
      "c": 2570573,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "desk-isolation-foot-0",
      "p": [
        -0.82,
        0.05,
        -0.45
      ],
      "s": [
        0.2,
        0.11,
        0.2
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "desk-isolation-foot-1",
      "p": [
        0.82,
        0.05,
        -0.45
      ],
      "s": [
        0.2,
        0.11,
        0.2
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "desk-isolation-foot-2",
      "p": [
        -0.82,
        0.05,
        0.45
      ],
      "s": [
        0.2,
        0.11,
        0.2
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "desk-isolation-foot-3",
      "p": [
        0.82,
        0.05,
        0.45
      ],
      "s": [
        0.2,
        0.11,
        0.2
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "readout-style-logo",
      "p": [
        0,
        0.42,
        0.55
      ],
      "s": [
        0.55,
        0.14,
        0.035
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "soft-insert-stopper-0",
      "p": [
        -0.72,
        0.28,
        0.46
      ],
      "s": [
        0.14,
        0.13,
        0.18
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "soft-insert-stopper-1",
      "p": [
        0.72,
        0.28,
        0.46
      ],
      "s": [
        0.14,
        0.13,
        0.18
      ],
      "c": 2570573,
      "finish": "rubber"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
