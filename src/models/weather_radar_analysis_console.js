import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Weather Radar Analysis Console / 气象雷达分析控制台. */
export const assetMeta = {
  "id": "electronics.weather-radar-analysis-console.001",
  "slug": "weather-radar-analysis-console",
  "title": "Weather Radar Analysis Console",
  "title_zh": "气象雷达分析控制台",
  "summary": "Dual-monitor meteorological radar workstation with joystick, keyboard and signal readouts",
  "category": "electronics",
  "tags": [
    "weather",
    "radar",
    "analysis",
    "console",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    1.42,
    1.04
  ],
  "generator": "createWeatherRadarAnalysisConsole",
  "source_path": "src/models/weather_radar_analysis_console.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/weather-radar-analysis-console.webp",
  "accent": "#172b37"
};
export function createWeatherRadarAnalysisConsole() { return buildRecipe({
  "title": "Weather Radar Analysis Console",
  "dimensions": [
    1.65,
    1.42,
    1.04
  ],
  "parts": [
    {
      "t": "box",
      "n": "radar-analyst-control-desk",
      "p": [
        0,
        0.43,
        0
      ],
      "s": [
        1.47,
        0.83,
        0.89
      ],
      "c": 3952998
    },
    {
      "t": "box",
      "n": "radar-monitor-frame--1",
      "p": [
        -0.39,
        1.08,
        -0.28
      ],
      "s": [
        0.68,
        0.47,
        0.07
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "weather-radar-presentation--1",
      "p": [
        -0.39,
        1.08,
        -0.232
      ],
      "s": [
        0.56,
        0.34,
        0.015
      ],
      "c": 1518391
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell--1-0",
      "p": [
        -0.5700000000000001,
        1.07,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 13675110
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell--1-1",
      "p": [
        -0.45,
        1.1500000000000001,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 6863023
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell--1-2",
      "p": [
        -0.33,
        1.23,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 13675110
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell--1-3",
      "p": [
        -0.21000000000000002,
        1.07,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 6863023
    },
    {
      "t": "box",
      "n": "radar-monitor-frame-1",
      "p": [
        0.39,
        1.08,
        -0.28
      ],
      "s": [
        0.68,
        0.47,
        0.07
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "weather-radar-presentation-1",
      "p": [
        0.39,
        1.08,
        -0.232
      ],
      "s": [
        0.56,
        0.34,
        0.015
      ],
      "c": 1518391
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell-1-0",
      "p": [
        0.21000000000000002,
        1.07,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 13675110
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell-1-1",
      "p": [
        0.33,
        1.1500000000000001,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 6863023
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell-1-2",
      "p": [
        0.45,
        1.23,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 13675110
    },
    {
      "t": "sphere",
      "n": "radar-storm-cell-1-3",
      "p": [
        0.5700000000000001,
        1.07,
        -0.207
      ],
      "s": [
        0.055,
        0.048,
        0.013
      ],
      "c": 6863023
    },
    {
      "t": "box",
      "n": "forecast-operator-keyboard",
      "p": [
        0,
        0.92,
        0.28
      ],
      "s": [
        0.78,
        0.038,
        0.24
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "weather-key-0",
      "p": [
        -0.35,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-1",
      "p": [
        -0.27999999999999997,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-2",
      "p": [
        -0.20999999999999996,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-3",
      "p": [
        -0.13999999999999996,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-4",
      "p": [
        -0.06999999999999995,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-5",
      "p": [
        5.551115123125783e-17,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-6",
      "p": [
        0.07000000000000006,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-7",
      "p": [
        0.14000000000000007,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-8",
      "p": [
        0.21000000000000008,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-9",
      "p": [
        0.28000000000000014,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "weather-key-10",
      "p": [
        0.3500000000000001,
        0.946,
        0.31
      ],
      "s": [
        0.038,
        0.012,
        0.04
      ],
      "c": 1518391
    },
    {
      "t": "cylinder",
      "n": "weather-analysis-joystick",
      "p": [
        0.59,
        1,
        0.22
      ],
      "s": [
        0.11,
        0.2,
        0.11
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "radar-observation-podium",
      "p": [
        0,
        0.12,
        0.24
      ],
      "s": [
        0.98,
        0.23,
        0.26
      ],
      "c": 10933453
    }
  ]
}); }
