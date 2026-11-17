import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Solar Panel Installer Mannequin / 光伏安装技师人物. */
export const assetMeta = {
  "id": "characters.solar-panel-installer-mannequin.001",
  "slug": "solar-panel-installer-mannequin",
  "title": "Solar Panel Installer Mannequin",
  "title_zh": "光伏安装技师人物",
  "summary": "Unrigged solar technician wearing harness and electrical test instrument",
  "category": "characters",
  "tags": [
    "solar",
    "panel",
    "installer",
    "mannequin",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.12,
    1.93,
    0.94
  ],
  "generator": "createSolarPanelInstallerMannequin",
  "source_path": "src/models/solar_panel_installer_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/solar-panel-installer-mannequin.webp",
  "accent": "#c1d9d3"
};
export function createSolarPanelInstallerMannequin() { return buildRecipe({
  "title": "Solar Panel Installer Mannequin",
  "dimensions": [
    1.12,
    1.93,
    0.94
  ],
  "parts": [
    {
      "t": "box",
      "n": "uniform-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.48,
        0.68,
        0.31
      ],
      "c": 4747146
    },
    {
      "t": "sphere",
      "n": "human-face",
      "p": [
        0,
        1.78,
        0
      ],
      "s": [
        0.21,
        0.24,
        0.2
      ],
      "c": 3427169
    },
    {
      "t": "cylinder",
      "n": "neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.12
      ],
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.29,
        1.42,
        0
      ],
      "to": [
        -0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm--1",
      "from": [
        -0.36,
        1,
        0.09
      ],
      "to": [
        -0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh--1",
      "from": [
        -0.14,
        0.92,
        0
      ],
      "to": [
        -0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin--1",
      "from": [
        -0.16,
        0.5,
        0.05
      ],
      "to": [
        -0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot--1",
      "p": [
        -0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.29,
        1.42,
        0
      ],
      "to": [
        0.36,
        1,
        0.09
      ],
      "r": 0.085,
      "c": 4747146
    },
    {
      "t": "rod",
      "n": "forearm-1",
      "from": [
        0.36,
        1,
        0.09
      ],
      "to": [
        0.4,
        0.77,
        0.3
      ],
      "r": 0.065,
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "trouser-thigh-1",
      "from": [
        0.14,
        0.92,
        0
      ],
      "to": [
        0.16,
        0.5,
        0.05
      ],
      "r": 0.106,
      "c": 15778718
    },
    {
      "t": "rod",
      "n": "shin-1",
      "from": [
        0.16,
        0.5,
        0.05
      ],
      "to": [
        0.18,
        0.13,
        0.1
      ],
      "r": 0.082,
      "c": 15778718
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.18,
        0.075,
        0.15
      ],
      "s": [
        0.22,
        0.12,
        0.33
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "work-identity-patch",
      "p": [
        0.13,
        1.32,
        0.18
      ],
      "s": [
        0.15,
        0.1,
        0.026
      ],
      "c": 3427169
    },
    {
      "t": "sphere",
      "n": "solar-worker-helmet",
      "p": [
        0,
        2,
        0
      ],
      "s": [
        0.46,
        0.13,
        0.42
      ],
      "c": 14859354
    },
    {
      "t": "box",
      "n": "installer-harness-panel",
      "p": [
        0,
        1.23,
        0.19
      ],
      "s": [
        0.43,
        0.44,
        0.05
      ],
      "c": 12704211
    },
    {
      "t": "box",
      "n": "handheld-electric-tester",
      "p": [
        0.48,
        0.96,
        0.34
      ],
      "s": [
        0.24,
        0.32,
        0.09
      ],
      "c": 15778718
    },
    {
      "t": "box",
      "n": "voltage-screen",
      "p": [
        0.48,
        1.02,
        0.39
      ],
      "s": [
        0.17,
        0.11,
        0.016
      ],
      "c": 3427169
    },
    {
      "t": "rod",
      "n": "cable-test-probe",
      "from": [
        0.5,
        0.8,
        0.34
      ],
      "to": [
        0.78,
        0.71,
        0.4
      ],
      "r": 0.016,
      "c": 3427169
    },
    {
      "t": "box",
      "n": "harness-buckle-0",
      "p": [
        -0.13,
        1.31,
        0.22
      ],
      "s": [
        0.05,
        0.05,
        0.022
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "harness-buckle-1",
      "p": [
        -0.045,
        1.31,
        0.22
      ],
      "s": [
        0.05,
        0.05,
        0.022
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "harness-buckle-2",
      "p": [
        0.04000000000000001,
        1.31,
        0.22
      ],
      "s": [
        0.05,
        0.05,
        0.022
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "harness-buckle-3",
      "p": [
        0.125,
        1.31,
        0.22
      ],
      "s": [
        0.05,
        0.05,
        0.022
      ],
      "c": 3427169
    },
    {
      "t": "box",
      "n": "tool-pouch",
      "p": [
        -0.41,
        0.78,
        0.25
      ],
      "s": [
        0.3,
        0.24,
        0.17
      ],
      "c": 12704211
    }
  ]
}); }
