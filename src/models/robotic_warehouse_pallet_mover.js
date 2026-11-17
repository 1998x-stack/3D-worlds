import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Robotic Warehouse Pallet Mover / 仓储机器人托盘搬运车. */
export const assetMeta = {
  "id": "vehicles.robotic-warehouse-pallet-mover.001",
  "slug": "robotic-warehouse-pallet-mover",
  "title": "Robotic Warehouse Pallet Mover",
  "title_zh": "仓储机器人托盘搬运车",
  "summary": "Autonomous indoor pallet transporter with low forks, sensor towers and safety lamps",
  "category": "vehicles",
  "tags": [
    "robotic",
    "warehouse",
    "pallet",
    "mover",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.55,
    1.42,
    2.85
  ],
  "generator": "createRoboticWarehousePalletMover",
  "source_path": "src/models/robotic_warehouse_pallet_mover.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/robotic-warehouse-pallet-mover.webp",
  "accent": "#d3b568"
};
export function createRoboticWarehousePalletMover() { return buildRecipe({
  "title": "Robotic Warehouse Pallet Mover",
  "dimensions": [
    1.55,
    1.42,
    2.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-warehouse-robot-main-deck",
      "p": [
        0,
        0.38,
        0
      ],
      "s": [
        1.38,
        0.5,
        1.94
      ],
      "c": 7446440
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-autonomous-fork--1",
      "p": [
        -0.45,
        0.18,
        1.06
      ],
      "s": [
        0.23,
        0.15,
        1.07
      ],
      "c": 3757672
    },
    {
      "t": "cylinder",
      "n": "robotic-warehouse-pallet-mover-drivetrain-wheel--1--0.79",
      "p": [
        -0.73,
        0.19,
        -0.79
      ],
      "s": [
        0.33,
        0.13,
        0.33
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "robotic-warehouse-pallet-mover-drivetrain-wheel--1-0.81",
      "p": [
        -0.73,
        0.19,
        0.81
      ],
      "s": [
        0.33,
        0.13,
        0.33
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-autonomous-fork-1",
      "p": [
        0.45,
        0.18,
        1.06
      ],
      "s": [
        0.23,
        0.15,
        1.07
      ],
      "c": 3757672
    },
    {
      "t": "cylinder",
      "n": "robotic-warehouse-pallet-mover-drivetrain-wheel-1--0.79",
      "p": [
        0.73,
        0.19,
        -0.79
      ],
      "s": [
        0.33,
        0.13,
        0.33
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "robotic-warehouse-pallet-mover-drivetrain-wheel-1-0.81",
      "p": [
        0.73,
        0.19,
        0.81
      ],
      "s": [
        0.33,
        0.13,
        0.33
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-motorized-lifting-bed",
      "p": [
        0,
        0.69,
        -0.39
      ],
      "s": [
        1.08,
        0.15,
        1.17
      ],
      "c": 13874536
    },
    {
      "t": "rod",
      "n": "robotic-warehouse-pallet-mover-warehouse-lidar-observation-pole",
      "from": [
        0,
        0.7,
        -0.74
      ],
      "to": [
        0,
        1.24,
        -0.74
      ],
      "r": 0.041,
      "c": 3757672
    },
    {
      "t": "cylinder",
      "n": "robotic-warehouse-pallet-mover-warehouse-autonomy-lidar",
      "p": [
        0,
        1.28,
        -0.74
      ],
      "s": [
        0.3,
        0.16,
        0.3
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-0",
      "p": [
        -0.62,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-1",
      "p": [
        -0.42,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-2",
      "p": [
        -0.21999999999999997,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-3",
      "p": [
        -0.019999999999999907,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-4",
      "p": [
        0.18000000000000005,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-5",
      "p": [
        0.38,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-forklift-safety-warning-led-6",
      "p": [
        0.5800000000000002,
        0.62,
        0.69
      ],
      "s": [
        0.065,
        0.057,
        0.031
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "robotic-warehouse-pallet-mover-structural-fitting-0",
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
      "c": 2834000
    }
  ]
}); }
