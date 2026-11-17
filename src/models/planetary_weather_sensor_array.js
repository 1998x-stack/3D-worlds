import { buildRecipe } from './recipe_engine.js';
/** Planetary Weather Sensor Array: original source-editable mesh scene. */
export const assetMeta = {
  "id": "scifi.planetary-weather-sensor-array.001",
  "slug": "planetary-weather-sensor-array",
  "title": "Planetary Weather Sensor Array",
  "title_zh": "行星气象探测阵列",
  "summary": "Futuristic planetary science meteorological mast with solar wings, radar pods and ground sensors",
  "category": "scifi",
  "tags": [
    "planetary",
    "weather",
    "sensor"
  ],
  "dimensions_m": [
    2.23,
    2.81,
    2.14
  ],
  "generator": "createPlanetaryWeatherSensorArray",
  "source_path": "src/models/planetary_weather_sensor_array.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/planetary-weather-sensor-array.webp"
};
export function createPlanetaryWeatherSensorArray() { return buildRecipe({
  "title": "Planetary Weather Sensor Array",
  "dimensions": [
    2.23,
    2.81,
    2.14
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "tech-pedestal",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.18,
        0.25,
        1.05
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "weather-mast",
      "from": [
        0,
        0.26,
        0
      ],
      "to": [
        0,
        2.76,
        0
      ],
      "r": 0.049,
      "c": 9872548
    },
    {
      "t": "cylinder",
      "n": "weather-radome",
      "p": [
        0,
        2.72,
        0
      ],
      "s": [
        0.3,
        0.25,
        0.29
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "radial-weather-arm-0",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        0.9,
        1.72,
        0
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "sensor-pod-0",
      "p": [
        0.92,
        1.72,
        0
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "radial-weather-arm-1",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        0.4500000000000001,
        1.72,
        0.762102355330306
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "sensor-pod-1",
      "p": [
        0.46000000000000013,
        1.72,
        0.762102355330306
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "radial-weather-arm-2",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        -0.4499999999999998,
        1.72,
        0.762102355330306
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "sensor-pod-2",
      "p": [
        -0.4599999999999998,
        1.72,
        0.762102355330306
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "radial-weather-arm-3",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        -0.9,
        1.72,
        1.0776891832496708e-16
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "sensor-pod-3",
      "p": [
        -0.92,
        1.72,
        1.0776891832496708e-16
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 6657707
    },
    {
      "t": "rod",
      "n": "radial-weather-arm-4",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        -0.4500000000000004,
        1.72,
        -0.7621023553303058
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "sensor-pod-4",
      "p": [
        -0.4600000000000004,
        1.72,
        -0.7621023553303058
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 12952430
    },
    {
      "t": "rod",
      "n": "radial-weather-arm-5",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        0.4500000000000001,
        1.72,
        -0.762102355330306
      ],
      "r": 0.024,
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "sensor-pod-5",
      "p": [
        0.46000000000000013,
        1.72,
        -0.762102355330306
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "solar-wing--0.72",
      "p": [
        -0.72,
        1.08,
        0
      ],
      "s": [
        0.54,
        0.035,
        1.1
      ],
      "c": 4156817
    },
    {
      "t": "box",
      "n": "solar-wing-0.72",
      "p": [
        0.72,
        1.08,
        0
      ],
      "s": [
        0.54,
        0.035,
        1.1
      ],
      "c": 4156817
    },
    {
      "t": "box",
      "n": "solar-cell-0",
      "p": [
        -0.68,
        1.105,
        -0.22
      ],
      "s": [
        0.42,
        0.008,
        0.32
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "solar-cell-1",
      "p": [
        0.68,
        1.105,
        -0.22
      ],
      "s": [
        0.42,
        0.008,
        0.32
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "solar-cell-2",
      "p": [
        -0.68,
        1.105,
        0.22
      ],
      "s": [
        0.42,
        0.008,
        0.32
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "solar-cell-3",
      "p": [
        0.68,
        1.105,
        0.22
      ],
      "s": [
        0.42,
        0.008,
        0.32
      ],
      "c": 6657707
    }
  ]
}); }
