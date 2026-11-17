# 3D Worlds V1.1｜新增 50 个原创可编辑三维资产

## 概况

基于 V1.0 现有 385 个程序化三维模型，新增 **50 个具备独立 `src/models/*.js` 源代码的 Three.js 模型**，累计 **435 个模型、13 类**。这批新增总计 **1,465 个具名几何部件**，每个模型采用实际 `buildRecipe` 生成 Mesh，具有独立工厂函数、中英双语标题、许可证、尺度、标签和可检索 ID。

> 本库属于风格化低多边形场景资产；不表示真实的医疗器械功能、工程级尺寸精度、复杂人物绑定、制造级 CAD 或水密 3D 打印模型。

## 分类分布

| 分类 | 新增数量 | 代表模型 |
|---|---:|---|
| 家具 / `furniture` | 4 | 隔音专注办公舱、旋转档案储物架、医院陪护折叠椅、播客访谈双人沙发 |
| 卫浴设施 / `bathroom` | 4 | 海滨冲沙淋浴站、双冲水卫生间隔间、船舶堆肥式卫生间模块、壁挂婴儿护理台 |
| 职业人物 / `characters` | 4 | 风电维护技术员人物、考古测绘员人物、灾害救援物资协调员、城市无人机配送操作员 |
| 自然生态 / `nature` | 4 | 夜光蘑菇林地、玄武岩海蚀柱海岸、高山杜鹃花丛、石灰岩天坑微景观 |
| 交通载具 / `vehicles` | 4 | 风电场巡检越野车、电动港口拖轮、公园自主割草机器人、磁悬浮列车车头 |
| 电子与科研设备 / `electronics` | 4 | 超低温量子计算实验架、便携墨水屏科研记录本、气象雷达分析控制台、FPGA 实验开发工作台 |
| 家居装饰 / `decor` | 4 | 彩色玻璃穹顶灯、桌面禅意叠石流水、动态摆锤艺术装置、美术馆背光画框 |
| 厨房设施 / `kitchen` | 4 | 餐厅鲜面晾晒架、移动电磁烹饪餐车、自动珍珠奶茶封口机、太阳能香草烘干柜 |
| 建筑构件 / `architecture` | 4 | 地铁站台边缘模块、测地木结构凉亭、加筋土挡墙模块、悬挂式玻璃连廊模块 |
| 城市基础设施 / `urban` | 4 | 河道水位监测杆、电动自行车充电岛、交通减速抬升斑马线、街道树根保护单元 |
| 工业工具 / `tools` | 4 | 摄影测量旋转扫描台、便携电缆牵引绞盘、野外土壤压实度检测箱、显微镜精密维修台 |
| 运动设施 / `sports` | 3 | 滑板公园弧形坡道模块、沙滩排球裁判高台、赛艇下水浮动码头 |
| 科幻科研 / `scifi` | 3 | 轨道科研气闸舱模块、小行星植物研究平台、离子推进科研试验台 |

## 逐件模型设计与源代码

### 家具 · furniture

**隔音专注办公舱 / Acoustic Focus Booth Desk** — Enclosed focus-work booth with acoustic felt ribs, desk, lamp and privacy screen。外包围尺寸 `1.65 × 2.35 × 1.45 m`，具名部件 **24** 个，ID `furniture.acoustic-focus-booth-desk.001`。源码：[src/models/acoustic_focus_booth_desk.js](../src/models/acoustic_focus_booth_desk.js)。

**旋转档案储物架 / Rotating Archive Storage Carousel** — Circular multi-tier archive organizer with indexed shelves and card drawers。外包围尺寸 `1.65 × 2.15 × 1.65 m`，具名部件 **71** 个，ID `furniture.rotating-archive-storage-carousel.001`。源码：[src/models/rotating_archive_storage_carousel.js](../src/models/rotating_archive_storage_carousel.js)。

**医院陪护折叠椅 / Folding Hospital Visitor Chair** — Convertible hospital guest chair with fold-out sleeping pad, casters and side pocket。外包围尺寸 `0.95 × 1.25 × 1.05 m`，具名部件 **17** 个，ID `furniture.folding-hospital-visitor-chair.001`。源码：[src/models/folding_hospital_visitor_chair.js](../src/models/folding_hospital_visitor_chair.js)。

**播客访谈双人沙发 / Compact Podcast Interview Sofa** — Two-seat studio sofa with divided cushions, integrated microphone booms and side trays。外包围尺寸 `2.30 × 1.24 × 1.30 m`，具名部件 **16** 个，ID `furniture.compact-podcast-interview-sofa.001`。源码：[src/models/compact_podcast_interview_sofa.js](../src/models/compact_podcast_interview_sofa.js)。


### 卫浴设施 · bathroom

**海滨冲沙淋浴站 / Outdoor Beach Rinse Station** — Coastal public rinse station with elevated nozzles, foot taps and grated drain。外包围尺寸 `1.55 × 2.60 × 1.25 m`，具名部件 **20** 个，ID `bathroom.outdoor-beach-rinse-station.001`。源码：[src/models/outdoor_beach_rinse_station.js](../src/models/outdoor_beach_rinse_station.js)。

**双冲水卫生间隔间 / Dual Flush Restroom Cubicle** — Modular privacy toilet cubicle with low-water dual flush, doors and ventilation。外包围尺寸 `1.35 × 2.35 × 1.75 m`，具名部件 **16** 个，ID `bathroom.dual-flush-restroom-cubicle.001`。源码：[src/models/dual_flush_restroom_cubicle.js](../src/models/dual_flush_restroom_cubicle.js)。

**船舶堆肥式卫生间模块 / Marine Composting Toilet Module** — Water-saving compact marine composting restroom with vent chimney and sealed tank。外包围尺寸 `1.55 × 1.95 × 1.25 m`，具名部件 **18** 个，ID `bathroom.marine-composting-toilet-module.001`。源码：[src/models/marine_composting_toilet_module.js](../src/models/marine_composting_toilet_module.js)。

**壁挂婴儿护理台 / Wall Mounted Baby Changing Station** — Fold-down infant changing station with straps, rounded deck and accessible instruction panel。外包围尺寸 `0.94 × 1.28 × 0.78 m`，具名部件 **15** 个，ID `bathroom.wall-mounted-baby-changing-station.001`。源码：[src/models/wall_mounted_baby_changing_station.js](../src/models/wall_mounted_baby_changing_station.js)。


### 职业人物 · characters

**风电维护技术员人物 / Wind Turbine Service Technician** — Unrigged wind technician with helmet, safety harness and inspection tablet。外包围尺寸 `1.10 × 2.05 × 0.92 m`，具名部件 **24** 个，ID `characters.wind-turbine-service-technician.001`。源码：[src/models/wind_turbine_service_technician.js](../src/models/wind_turbine_service_technician.js)。

**考古测绘员人物 / Archaeological Field Surveyor** — Unrigged archaeology field worker with trowel, measuring rod and excavation satchel。外包围尺寸 `1.15 × 1.92 × 0.91 m`，具名部件 **24** 个，ID `characters.archaeological-field-surveyor.001`。源码：[src/models/archaeological_field_surveyor.js](../src/models/archaeological_field_surveyor.js)。

**灾害救援物资协调员 / Disaster Relief Supply Coordinator** — Unrigged humanitarian logistics volunteer with clipboard and marked supply case。外包围尺寸 `1.13 × 1.92 × 0.95 m`，具名部件 **24** 个，ID `characters.disaster-relief-supply-coordinator.001`。源码：[src/models/disaster_relief_supply_coordinator.js](../src/models/disaster_relief_supply_coordinator.js)。

**城市无人机配送操作员 / Urban Drone Delivery Operator** — Unrigged civilian drone courier operator with controller, headset and parcel。外包围尺寸 `1.06 × 1.92 × 0.90 m`，具名部件 **24** 个，ID `characters.urban-drone-delivery-operator.001`。源码：[src/models/urban_drone_delivery_operator.js](../src/models/urban_drone_delivery_operator.js)。


### 自然生态 · nature

**夜光蘑菇林地 / Bioluminescent Mushroom Glade** — Stylized magical forest-floor glade with layered luminous mushroom caps and mossy stones。外包围尺寸 `2.90 × 1.78 × 2.45 m`，具名部件 **72** 个，ID `nature.bioluminescent-mushroom-glade.001`。源码：[src/models/bioluminescent_mushroom_glade.js](../src/models/bioluminescent_mushroom_glade.js)。

**玄武岩海蚀柱海岸 / Basalt Sea Stack Coastline** — Wave-cut basalt sea stacks with columnar rock bands, tide pools and foam。外包围尺寸 `3.50 × 2.85 × 2.90 m`，具名部件 **45** 个，ID `nature.basalt-sea-stack-coastline.001`。源码：[src/models/basalt_sea_stack_coastline.js](../src/models/basalt_sea_stack_coastline.js)。

**高山杜鹃花丛 / Alpine Rhododendron Grove** — Alpine flowering shrub group with woody stems, clustered pink blossoms and rock base。外包围尺寸 `3.15 × 2.15 × 2.35 m`，具名部件 **64** 个，ID `nature.alpine-rhododendron-grove.001`。源码：[src/models/alpine_rhododendron_grove.js](../src/models/alpine_rhododendron_grove.js)。

**石灰岩天坑微景观 / Limestone Sinkhole Garden** — Small karst sinkhole terrain ring with layered limestone rim, ferns and bottom pool。外包围尺寸 `3.35 × 1.55 × 3.00 m`，具名部件 **50** 个，ID `nature.limestone-sinkhole-garden.001`。源码：[src/models/limestone_sinkhole_garden.js](../src/models/limestone_sinkhole_garden.js)。


### 交通载具 · vehicles

**风电场巡检越野车 / Wind Farm Service Buggy** — Rugged electric maintenance buggy with roof rack, inspection cases and safety lights。外包围尺寸 `2.05 × 2.35 × 3.85 m`，具名部件 **17** 个，ID `vehicles.wind-farm-service-buggy.001`。源码：[src/models/wind_farm_service_buggy.js](../src/models/wind_farm_service_buggy.js)。

**电动港口拖轮 / Electric Harbor Tugboat** — Compact battery-electric harbor assist vessel with wheelhouse, fenders and tow bollard。外包围尺寸 `2.85 × 2.70 × 4.35 m`，具名部件 **19** 个，ID `vehicles.electric-harbor-tugboat.001`。源码：[src/models/electric_harbor_tugboat.js](../src/models/electric_harbor_tugboat.js)。

**公园自主割草机器人 / Autonomous Park Mower Rover** — Self-driving landscape maintenance rover with deck blades guard, lidar and four turf wheels。外包围尺寸 `1.55 × 1.10 × 2.10 m`，具名部件 **18** 个，ID `vehicles.autonomous-park-mower-rover.001`。源码：[src/models/autonomous_park_mower_rover.js](../src/models/autonomous_park_mower_rover.js)。

**磁悬浮列车车头 / Maglev Passenger Train Nose** — Streamlined high-speed train lead unit with panoramic windscreen and guideway skirt。外包围尺寸 `2.65 × 3.05 × 6.40 m`，具名部件 **29** 个，ID `vehicles.maglev-passenger-train-nose.001`。源码：[src/models/maglev_passenger_train_nose.js](../src/models/maglev_passenger_train_nose.js)。


### 电子与科研设备 · electronics

**超低温量子计算实验架 / Cryogenic Quantum Computer Rig** — Dilution refrigerator research tower with thermal stages, cabling and control meters。外包围尺寸 `1.45 × 2.35 × 1.38 m`，具名部件 **53** 个，ID `electronics.cryogenic-quantum-computer-rig.001`。源码：[src/models/cryogenic_quantum_computer_rig.js](../src/models/cryogenic_quantum_computer_rig.js)。

**便携墨水屏科研记录本 / Portable E Ink Field Notebook** — Field-ready e-ink data notebook with stylus, rugged cover and sensor card slot。外包围尺寸 `0.58 × 0.44 × 0.39 m`，具名部件 **22** 个，ID `electronics.portable-ebook-field-notebook.001`。源码：[src/models/portable_ebook_field_notebook.js](../src/models/portable_ebook_field_notebook.js)。

**气象雷达分析控制台 / Weather Radar Analysis Console** — Dual-monitor meteorological radar workstation with joystick, keyboard and signal readouts。外包围尺寸 `1.65 × 1.42 × 1.04 m`，具名部件 **27** 个，ID `electronics.weather-radar-analysis-console.001`。源码：[src/models/weather_radar_analysis_console.js](../src/models/weather_radar_analysis_console.js)。

**FPGA 实验开发工作台 / Laboratory FPGA Dev Station** — Programmable logic lab bench with circuit board, probes, oscilloscope and breadboard。外包围尺寸 `1.26 × 0.92 × 0.84 m`，具名部件 **27** 个，ID `electronics.laboratory-fpga-dev-station.001`。源码：[src/models/laboratory_fpga_dev_station.js](../src/models/laboratory_fpga_dev_station.js)。


### 家居装饰 · decor

**彩色玻璃穹顶灯 / Stained Glass Dome Luminaire** — Decorative domed luminaire with stained radial panels and suspended brass mount。外包围尺寸 `1.65 × 1.62 × 1.65 m`，具名部件 **28** 个，ID `decor.stained-glass-dome-luminaire.001`。源码：[src/models/stained_glass_dome_luminaire.js](../src/models/stained_glass_dome_luminaire.js)。

**桌面禅意叠石流水 / Tabletop Zen Waterfall** — Meditation tabletop fountain with stepped stone bowls, pebbles and small bamboo planting。外包围尺寸 `1.15 × 1.28 × 0.95 m`，具名部件 **31** 个，ID `decor.tabletop-zen-waterfall.001`。源码：[src/models/tabletop_zen_waterfall.js](../src/models/tabletop_zen_waterfall.js)。

**动态摆锤艺术装置 / Kinetic Pendulum Art Mobile** — Suspended kinetic sculpture with nested pendulums, weighted spheres and radial frames。外包围尺寸 `1.85 × 2.45 × 1.20 m`，具名部件 **25** 个，ID `decor.kinetic-pendulum-art-mobile.001`。源码：[src/models/kinetic_pendulum_art_mobile.js](../src/models/kinetic_pendulum_art_mobile.js)。

**美术馆背光画框 / Gallery Illuminated Art Frame** — Museum artwork display with backlit canvas, layered frame, spotlights and label。外包围尺寸 `1.80 × 2.35 × 0.55 m`，具名部件 **15** 个，ID `decor.gallery-illuminated-art-frame.001`。源码：[src/models/gallery_illuminated_art_frame.js](../src/models/gallery_illuminated_art_frame.js)。


### 厨房设施 · kitchen

**餐厅鲜面晾晒架 / Restaurant Pasta Drying Rack** — Commercial pasta drying frame with hanging spaghetti strands, folding legs and trays。外包围尺寸 `1.55 × 1.95 × 0.90 m`，具名部件 **49** 个，ID `kitchen.restaurant-pasta-drying-rack.001`。源码：[src/models/restaurant_pasta_drying_rack.js](../src/models/restaurant_pasta_drying_rack.js)。

**移动电磁烹饪餐车 / Mobile Induction Food Cart** — Street-food cart with induction cooktop, vent hood, side shelves and storage。外包围尺寸 `1.85 × 1.73 × 1.00 m`，具名部件 **16** 个，ID `kitchen.mobile-induction-food-cart.001`。源码：[src/models/mobile_induction_food_cart.js](../src/models/mobile_induction_food_cart.js)。

**自动珍珠奶茶封口机 / Automatic Bubble Tea Sealer** — Countertop cup-sealing machine with film roll, touch controls and sample beverages。外包围尺寸 `0.72 × 1.02 × 0.63 m`，具名部件 **16** 个，ID `kitchen.automatic-bubble-tea-sealer.001`。源码：[src/models/automatic_bubble_tea_sealer.js](../src/models/automatic_bubble_tea_sealer.js)。

**太阳能香草烘干柜 / Solar Herb Dehydrator Cabinet** — Solar-powered herb drying cabinet with stacked mesh trays, exhaust chimney and panel。外包围尺寸 `1.24 × 1.88 × 1.02 m`，具名部件 **34** 个，ID `kitchen.solar-herb-dehydrator-cabinet.001`。源码：[src/models/solar_herb_dehydrator_cabinet.js](../src/models/solar_herb_dehydrator_cabinet.js)。


### 建筑构件 · architecture

**地铁站台边缘模块 / Subway Platform Edge Module** — Modular urban transit platform with tactile strips, safety screen doors and overhead signage。外包围尺寸 `3.50 × 2.62 × 2.15 m`，具名部件 **29** 个，ID `architecture.subway-platform-edge-module.001`。源码：[src/models/subway_platform_edge_module.js](../src/models/subway_platform_edge_module.js)。

**测地木结构凉亭 / Geodesic Timber Gazebo** — Open garden pavilion with timber geodesic roof triangles and circular decking。外包围尺寸 `3.75 × 3.25 × 3.55 m`，具名部件 **44** 个，ID `architecture.geodesic-timber-gazebo.001`。源码：[src/models/geodesic_timber_gazebo.js](../src/models/geodesic_timber_gazebo.js)。

**加筋土挡墙模块 / Reinforced Soil Retaining Wall** — Civil engineering earth-retaining wall segment with drainage outlets and soil layers。外包围尺寸 `3.55 × 2.85 × 1.70 m`，具名部件 **61** 个，ID `architecture.reinforced-soil-retaining-wall.001`。源码：[src/models/reinforced_soil_retaining_wall.js](../src/models/reinforced_soil_retaining_wall.js)。

**悬挂式玻璃连廊模块 / Suspended Glass Skybridge Bay** — Building-to-building enclosed glass skybridge with trusses, deck and ceiling supports。外包围尺寸 `3.85 × 2.60 × 2.65 m`，具名部件 **40** 个，ID `architecture.suspended-glass-skybridge-bay.001`。源码：[src/models/suspended_glass_skybridge_bay.js](../src/models/suspended_glass_skybridge_bay.js)。


### 城市基础设施 · urban

**河道水位监测杆 / River Flood Level Sensor Pole** — Smart river-level gauge with solar panel, telemetry cabinet and calibrated ruler。外包围尺寸 `1.28 × 3.15 × 1.05 m`，具名部件 **19** 个，ID `urban.river-flood-level-sensor-pole.001`。源码：[src/models/river_flood_level_sensor_pole.js](../src/models/river_flood_level_sensor_pole.js)。

**电动自行车充电岛 / Electric Bicycle Charging Island** — Public e-bike charging canopy with parking bays, smart chargers and photovoltaic roof。外包围尺寸 `3.20 × 2.65 × 1.85 m`，具名部件 **25** 个，ID `urban.electric-bicycle-charging-island.001`。源码：[src/models/electric_bicycle_charging_island.js](../src/models/electric_bicycle_charging_island.js)。

**交通减速抬升斑马线 / Traffic Calming Raised Crosswalk** — Modular street raised pedestrian crossing with ramp slopes and bold reflective markings。外包围尺寸 `3.70 × 0.65 × 2.45 m`，具名部件 **17** 个，ID `urban.traffic-calming-raised-crosswalk.001`。源码：[src/models/traffic_calming_raised_crosswalk.js](../src/models/traffic_calming_raised_crosswalk.js)。

**街道树根保护单元 / Street Tree Root Cell System** — Urban tree root-cell below paving with open soil grid, tree trunk and root support。外包围尺寸 `2.85 × 2.65 × 2.35 m`，具名部件 **46** 个，ID `urban.street-tree-root-cell-system.001`。源码：[src/models/street_tree_root_cell_system.js](../src/models/street_tree_root_cell_system.js)。


### 工业工具 · tools

**摄影测量旋转扫描台 / Photogrammetry Turntable Rig** — Tabletop 3D capture station with motorized turntable, camera rail and calibration markers。外包围尺寸 `1.35 × 1.72 × 1.18 m`，具名部件 **24** 个，ID `tools.photogrammetry-turntable-rig.001`。源码：[src/models/photogrammetry_turntable_rig.js](../src/models/photogrammetry_turntable_rig.js)。

**便携电缆牵引绞盘 / Portable Cable Pulling Winch** — Portable industrial cable winch with spool, control lever and anchoring feet。外包围尺寸 `1.12 × 0.80 × 0.85 m`，具名部件 **16** 个，ID `tools.portable-cable-pulling-winch.001`。源码：[src/models/portable_cable_pulling_winch.js](../src/models/portable_cable_pulling_winch.js)。

**野外土壤压实度检测箱 / Field Soil Compaction Kit** — Field geotechnical testing case with probe rods, hand rammer and numbered sample pots。外包围尺寸 `1.15 × 0.65 × 0.88 m`，具名部件 **21** 个，ID `tools.field-soil-compaction-kit.001`。源码：[src/models/field_soil_compaction_kit.js](../src/models/field_soil_compaction_kit.js)。

**显微镜精密维修台 / Microscope Repair Workbench** — Precision optics service bench with microscope, articulated lighting and calibration blocks。外包围尺寸 `1.75 × 1.28 × 0.97 m`，具名部件 **21** 个，ID `tools.microscope-repair-workbench.001`。源码：[src/models/microscope_repair_workbench.js](../src/models/microscope_repair_workbench.js)。


### 运动设施 · sports

**滑板公园弧形坡道模块 / Skatepark Quarter Pipe Module** — Skateboard quarter-pipe ramp with curved deck ribs, coping and safety rails。外包围尺寸 `3.35 × 1.78 × 2.65 m`，具名部件 **27** 个，ID `sports.skatepark-quarter-pipe-module.001`。源码：[src/models/skatepark_quarter_pipe_module.js](../src/models/skatepark_quarter_pipe_module.js)。

**沙滩排球裁判高台 / Beach Volleyball Referee Stand** — Elevated referee stand beside volleyball net with ladder, seat and score placards。外包围尺寸 `1.65 × 2.75 × 1.45 m`，具名部件 **20** 个，ID `sports.beach-volleyball-referee-stand.001`。源码：[src/models/beach_volleyball_referee_stand.js](../src/models/beach_volleyball_referee_stand.js)。

**赛艇下水浮动码头 / Rowing Launch Dock Module** — Low-profile floating sport dock with cleats, water-facing ramp and lane marker。外包围尺寸 `3.65 × 1.25 × 2.75 m`，具名部件 **23** 个，ID `sports.rowing-launch-dock-module.001`。源码：[src/models/rowing_launch_dock_module.js](../src/models/rowing_launch_dock_module.js)。


### 科幻科研 · scifi

**轨道科研气闸舱模块 / Orbital Research Airlock Module** — Nonweapon orbital habitat airlock with pressure door, docking collar and handrails。外包围尺寸 `3.25 × 3.15 × 2.75 m`，具名部件 **21** 个，ID `scifi.orbital-research-airlock-module.001`。源码：[src/models/orbital_research_airlock_module.js](../src/models/orbital_research_airlock_module.js)。

**小行星植物研究平台 / Asteroid Botanical Terrace** — Space-based botanical garden with pressurized plant beds and translucent environmental shield。外包围尺寸 `3.60 × 2.85 × 3.10 m`，具名部件 **40** 个，ID `scifi.asteroid-botanical-terrace.001`。源码：[src/models/asteroid_botanical_terrace.js](../src/models/asteroid_botanical_terrace.js)。

**离子推进科研试验台 / Ion Propulsion Test Platform** — Science fiction propulsion research test stand with ion nozzle, diagnostics and safety rail。外包围尺寸 `3.45 × 2.80 × 3.20 m`，具名部件 **21** 个，ID `scifi.ion-propulsion-test-platform.001`。源码：[src/models/ion_propulsion_test_platform.js](../src/models/ion_propulsion_test_platform.js)。

## 运行与发布

```bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm ci
node scripts/validate_models.mjs
npm run generate:assets
npm run verify:assets
python scripts/smoke_p2.py
npm run build
npm run test:gallery
npm run test:remote
```

生成流水线预期产出：**435 WebP + 435 AVIF + 1,305 个 GLB（LOD0、LOD1、LOD2）**。文件由 GitHub Actions 在 CI 中实际生成；源代码分支本身不一定包含这些较大的二进制文件。
