import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: VR Motion Capture Rig / VR 动作捕捉实验架. */
export const assetMeta = {
  "id": "electronics.vr-motion-capture-rig.001",
  "slug": "vr-motion-capture-rig",
  "title": "VR Motion Capture Rig",
  "title_zh": "VR 动作捕捉实验架",
  "summary": "Optical movement tracking rig with marker cameras, wearable trackers and virtual headset",
  "category": "electronics",
  "tags": [
    "motion",
    "capture",
    "rig",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.2,
    2.32,
    1.83
  ],
  "generator": "createVrMotionCaptureRig",
  "source_path": "src/models/vr_motion_capture_rig.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/vr-motion-capture-rig.webp",
  "accent": "#233747"
};
export function createVrMotionCaptureRig() { return buildRecipe({
  "title": "VR Motion Capture Rig",
  "dimensions": [
    2.2,
    2.32,
    1.83
  ],
  "parts": [
    {
      "t": "box",
      "n": "vr-motion-capture-rig-virtual-mocap-calibration-platform",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        1.97,
        0.18,
        1.55
      ],
      "c": 9094085
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-optical-tracking-cage-post--1--0.58",
      "from": [
        -0.89,
        0.18,
        -0.58
      ],
      "to": [
        -0.89,
        2.12,
        -0.58
      ],
      "r": 0.045,
      "c": 14141613
    },
    {
      "t": "box",
      "n": "vr-motion-capture-rig-infrared-tracking-camera--1--0.58",
      "p": [
        -0.89,
        2.13,
        -0.58
      ],
      "s": [
        0.2,
        0.17,
        0.21
      ],
      "c": 2307911
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-optical-tracking-cage-post--1-0.58",
      "from": [
        -0.89,
        0.18,
        0.58
      ],
      "to": [
        -0.89,
        2.12,
        0.58
      ],
      "r": 0.045,
      "c": 14141613
    },
    {
      "t": "box",
      "n": "vr-motion-capture-rig-infrared-tracking-camera--1-0.58",
      "p": [
        -0.89,
        2.13,
        0.58
      ],
      "s": [
        0.2,
        0.17,
        0.21
      ],
      "c": 2307911
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-optical-tracking-cage-post-1--0.58",
      "from": [
        0.89,
        0.18,
        -0.58
      ],
      "to": [
        0.89,
        2.12,
        -0.58
      ],
      "r": 0.045,
      "c": 14141613
    },
    {
      "t": "box",
      "n": "vr-motion-capture-rig-infrared-tracking-camera-1--0.58",
      "p": [
        0.89,
        2.13,
        -0.58
      ],
      "s": [
        0.2,
        0.17,
        0.21
      ],
      "c": 2307911
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-optical-tracking-cage-post-1-0.58",
      "from": [
        0.89,
        0.18,
        0.58
      ],
      "to": [
        0.89,
        2.12,
        0.58
      ],
      "r": 0.045,
      "c": 14141613
    },
    {
      "t": "box",
      "n": "vr-motion-capture-rig-infrared-tracking-camera-1-0.58",
      "p": [
        0.89,
        2.13,
        0.58
      ],
      "s": [
        0.2,
        0.17,
        0.21
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "vr-motion-capture-rig-wearable-tracking-torso",
      "p": [
        0,
        1.25,
        0
      ],
      "s": [
        0.47,
        0.57,
        0.33
      ],
      "c": 4678263
    },
    {
      "t": "sphere",
      "n": "vr-motion-capture-rig-headset-tracked-human-head",
      "p": [
        0,
        1.71,
        0
      ],
      "s": [
        0.25,
        0.23,
        0.24
      ],
      "c": 4678263
    },
    {
      "t": "box",
      "n": "vr-motion-capture-rig-stereoscopic-vr-visor",
      "p": [
        0,
        1.73,
        0.18
      ],
      "s": [
        0.44,
        0.2,
        0.16
      ],
      "c": 14141613
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-motion-capture-tracked-arm--1",
      "from": [
        -0.26,
        1.43,
        0
      ],
      "to": [
        -0.49,
        0.98,
        0.13
      ],
      "r": 0.076,
      "c": 4678263
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-motion-capture-tracked-leg--1",
      "from": [
        -0.16,
        0.99,
        0
      ],
      "to": [
        -0.19,
        0.31,
        0.13
      ],
      "r": 0.082,
      "c": 4678263
    },
    {
      "t": "sphere",
      "n": "vr-motion-capture-rig-wrist-tracking-ball--1",
      "p": [
        -0.49,
        0.98,
        0.13
      ],
      "s": [
        0.1,
        0.08,
        0.1
      ],
      "c": 2307911
    },
    {
      "t": "sphere",
      "n": "vr-motion-capture-rig-ankle-tracking-ball--1",
      "p": [
        -0.19,
        0.31,
        0.13
      ],
      "s": [
        0.1,
        0.08,
        0.1
      ],
      "c": 2307911
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-motion-capture-tracked-arm-1",
      "from": [
        0.26,
        1.43,
        0
      ],
      "to": [
        0.49,
        0.98,
        0.13
      ],
      "r": 0.076,
      "c": 4678263
    },
    {
      "t": "rod",
      "n": "vr-motion-capture-rig-motion-capture-tracked-leg-1",
      "from": [
        0.16,
        0.99,
        0
      ],
      "to": [
        0.19,
        0.31,
        0.13
      ],
      "r": 0.082,
      "c": 4678263
    },
    {
      "t": "sphere",
      "n": "vr-motion-capture-rig-wrist-tracking-ball-1",
      "p": [
        0.49,
        0.98,
        0.13
      ],
      "s": [
        0.1,
        0.08,
        0.1
      ],
      "c": 2307911
    },
    {
      "t": "sphere",
      "n": "vr-motion-capture-rig-ankle-tracking-ball-1",
      "p": [
        0.19,
        0.31,
        0.13
      ],
      "s": [
        0.1,
        0.08,
        0.1
      ],
      "c": 2307911
    }
  ]
}); }
