import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Desktop LiDAR Scanning Platform / 桌面激光雷达扫描平台. */
export const assetMeta = {
  "id": "electronics.desktop-lidar-scanning-platform.001",
  "slug": "desktop-lidar-scanning-platform",
  "title": "Desktop LiDAR Scanning Platform",
  "title_zh": "桌面激光雷达扫描平台",
  "summary": "3D surveying lidar unit on motorized platform with sensor head and alignment markings",
  "category": "electronics",
  "tags": [
    "desktop",
    "lidar",
    "scanning",
    "platform",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.92,
    1.17,
    0.84
  ],
  "generator": "createDesktopLidarScanningPlatform",
  "source_path": "src/models/desktop_lidar_scanning_platform.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/desktop-lidar-scanning-platform.webp",
  "accent": "#476277"
};
export function createDesktopLidarScanningPlatform() { return buildRecipe({
  "title": "Desktop LiDAR Scanning Platform",
  "dimensions": [
    0.92,
    1.17,
    0.84
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "desktop-lidar-scanning-platform-lidar-motorized-azimuth-rotator",
      "p": [
        0,
        0.27,
        0
      ],
      "s": [
        0.62,
        0.23,
        0.62
      ],
      "c": 9094085
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-survey-equipment-main-housing",
      "p": [
        0,
        0.47,
        0
      ],
      "s": [
        0.56,
        0.23,
        0.43
      ],
      "c": 4678263
    },
    {
      "t": "rod",
      "n": "desktop-lidar-scanning-platform-ranging-optics-post",
      "from": [
        0,
        0.55,
        0
      ],
      "to": [
        0,
        0.96,
        0
      ],
      "r": 0.06,
      "c": 14141613
    },
    {
      "t": "cylinder",
      "n": "desktop-lidar-scanning-platform-rotating-laser-scan-head",
      "p": [
        0,
        1.03,
        0
      ],
      "s": [
        0.45,
        0.26,
        0.45
      ],
      "c": 2307911
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-0",
      "p": [
        0.26,
        1.11,
        0
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-1",
      "p": [
        0.21034441853748634,
        1.11,
        0.15282416559604303
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-2",
      "p": [
        0.08034441853748633,
        1.11,
        0.24727469423673992
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-3",
      "p": [
        -0.0803444185374863,
        1.11,
        0.24727469423673995
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-4",
      "p": [
        -0.2103444185374863,
        1.11,
        0.15282416559604306
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-5",
      "p": [
        -0.26,
        1.11,
        3.1840816777831187e-17
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-6",
      "p": [
        -0.21034441853748637,
        1.11,
        -0.152824165596043
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-7",
      "p": [
        -0.08034441853748638,
        1.11,
        -0.24727469423673992
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-8",
      "p": [
        0.08034441853748628,
        1.11,
        -0.24727469423673995
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-ranging-angle-encoder-9",
      "p": [
        0.2103444185374863,
        1.11,
        -0.1528241655960431
      ],
      "s": [
        0.078,
        0.07,
        0.04
      ],
      "c": 14141613
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-scanning-lidar-display",
      "p": [
        0,
        0.53,
        0.27
      ],
      "s": [
        0.34,
        0.12,
        0.028
      ],
      "c": 2307911
    },
    {
      "t": "rod",
      "n": "desktop-lidar-scanning-platform-calibration-upright--1",
      "from": [
        -0.4,
        0.61,
        0
      ],
      "to": [
        -0.4,
        1.1,
        0
      ],
      "r": 0.02,
      "c": 9094085
    },
    {
      "t": "rod",
      "n": "desktop-lidar-scanning-platform-calibration-upright-1",
      "from": [
        0.4,
        0.61,
        0
      ],
      "to": [
        0.4,
        1.1,
        0
      ],
      "r": 0.02,
      "c": 9094085
    },
    {
      "t": "box",
      "n": "desktop-lidar-scanning-platform-structural-fitting-0",
      "p": [
        -0.4,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 14141613
    }
  ]
}); }
