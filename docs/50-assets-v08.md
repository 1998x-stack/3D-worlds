# 3D Worlds V0.8｜新增 50 个原创可编辑三维资产

## 版本概况

V0.8 在此前已发布的 235 个原始资产基础上，新增 **50 个独立 Three.js 程序化模型**，达到 **285 个可检索源代码资产**，共 **13 类**。本批新增 **1160 个具名几何部件**。每个模型有独立 `src/models/*.js`、`assetMeta`、`createXxx()`、真实 `buildRecipe` 几何配方、双语标题、唯一 ID、米制尺寸与 MIT 许可信息。

重点增强可组合建筑与市政模块、交通救援车辆、工业设施、医疗及职业人物等场景素材。模型属于原创风格化低多边形 3D 场景资产，未承诺制造级精度、UV/PBR 商业美术细节或人物骨骼动画。

## 13 类新增模型

| 类别 | 本批数量 | 新增内容 |
|---|---:|---|
| 建筑构件 | 4 | 工业厂房锯齿形屋顶模块（Modular Factory Sawtooth Roof）；钢结构行人天桥模块（Pedestrian Steel Footbridge）；传统木质鸟居门架（Timber Torii Gate）；地下综合管廊模块（Underground Utility Tunnel） |
| 卫浴及无障碍设施 | 4 | 无障碍淋浴转移座椅（Accessible Shower Transfer Seat）；双盆浴室洗漱台（Dual Basin Vanity Console）；独立雨淋淋浴柱（Freestanding Rainfall Shower Column）；商用感应干手机（Touchless Commercial Hand Dryer） |
| 职业人物原型 | 4 | 民航飞行员人物原型（Airline Pilot Mannequin）；博物馆策展人原型（Museum Curator Mannequin）；铁路调度员人物原型（Railway Dispatcher Mannequin）；城市骑行者人物原型（Urban Cyclist Mannequin） |
| 家居装饰与展示 | 4 | 陶瓷茶道摆件（Ceramic Tea Ceremony Set）；中式纸灯笼悬挂组合（Hanging Paper Lantern Cluster）；室内动态水幕装饰墙（Kinetic Water Wall Fountain）；博物馆史前化石展台（Museum Fossil Display） |
| 电子与测量设备 | 4 | 广播调音控制台（Broadcast Audio Mixing Console）；工业机器人控制器（Industrial Robot Controller）；激光雷达三维扫描头（Lidar Mapping Scanner）；便携医学超声仪（Portable Medical Ultrasound） |
| 家具及医疗家具 | 4 | 教室翻板演讲桌（Classroom Folding Lecture Desk）；医疗电动护理床（Hospital Adjustable Bed）；博物馆展陈基座（Museum Display Plinth）；美发沙龙可调座椅（Salon Reclining Chair） |
| 餐饮厨房 | 4 | 商用立式和面搅拌机（Commercial Dough Mixer）；商用电磁炒锅工作站（Induction Wok Station）；日式拉面出餐台（Ramen Noodle Service Counter）；寿司回转输送展示柜（Refrigerated Sushi Conveyor） |
| 自然景观 | 4 | 冰川蓝冰洞穴（Glacial Ice Cave）；睡莲荷塘庭院（Lily Pond Garden）；稀树草原金合欢林（Savanna Acacia Grove）；火山熔岩地表（Volcanic Lava Field） |
| 科幻科学设施 | 3 | 小行星资源精炼模块（Asteroid Refinery Module）；轨道导航信标（Orbital Navigation Beacon）；行星气象探测阵列（Planetary Weather Sensor Array） |
| 体育设施 | 3 | 羽毛球场球网组合（Badminton Court Net Set）；竞技体操平衡木（Gymnastics Balance Beam）；竞速单人皮划艇（Racing Single Kayak） |
| 工业工具 | 4 | 工业管道链式切割器（Industrial Chain Pipe Cutter）；实验室桌面离心机（Laboratory Tabletop Centrifuge）；激光测距仪（Laser Distance Meter）；精密台式钻床（Precision Bench Drill Press） |
| 城市基础设施 | 4 | 社区共享种植花箱站（Community Garden Planter Station）；道路监控龙门架（Elevated Road Camera Gantry）；城市智能信息查询屏（Interactive Public Info Totem）；人行与自行车道分隔设施（Pedestrian Cycle Lane Divider） |
| 交通与专业载具 | 4 | 两栖科考船（Amphibious Research Boat）；城市有轨电车（Commuter Tram Car）；电动配送轻便摩托（Electric Delivery Moped）；消防云梯救援车（Fire Department Ladder Truck） |

**本批：50 个，涵盖 13 类，累计 1160 个具名 Mesh。**

## 逐项来源与几何设计

### 建筑构件 / architecture

**工业厂房锯齿形屋顶模块 / Modular Factory Sawtooth Roof** — Modular industrial roof structure with repeated sawtooth skylights and steel trusses。外包围尺寸 `3.54 × 2.04 × 2.64 m`，具名部件 **20** 个。稳定 ID：`architecture.modular-factory-sawtooth-roof.001`。源代码：[`src/models/modular_factory_sawtooth_roof.js`](../src/models/modular_factory_sawtooth_roof.js)。

**钢结构行人天桥模块 / Pedestrian Steel Footbridge** — Steel footbridge segment with open grating, side trusses and guard rails。外包围尺寸 `3.78 × 1.86 × 1.55 m`，具名部件 **35** 个。稳定 ID：`architecture.pedestrian-steel-footbridge.001`。源代码：[`src/models/pedestrian_steel_footbridge.js`](../src/models/pedestrian_steel_footbridge.js)。

**传统木质鸟居门架 / Timber Torii Gate** — Traditional wooden ceremonial gateway with twin uprights, curved top beam and plaques。外包围尺寸 `3.08 × 3.10 × 0.75 m`，具名部件 **15** 个。稳定 ID：`architecture.timber-torii-gate.001`。源代码：[`src/models/timber_torii_gate.js`](../src/models/timber_torii_gate.js)。

**地下综合管廊模块 / Underground Utility Tunnel** — Underground concrete utility tunnel with accessible walkway, cable troughs, water lines and lamps。外包围尺寸 `2.94 × 2.63 × 3.35 m`，具名部件 **25** 个。稳定 ID：`architecture.underground-utility-tunnel.001`。源代码：[`src/models/underground_utility_tunnel.js`](../src/models/underground_utility_tunnel.js)。

### 卫浴及无障碍设施 / bathroom

**无障碍淋浴转移座椅 / Accessible Shower Transfer Seat** — Accessible shower seat with foldable seat deck, drainage and grab rail。外包围尺寸 `0.92 × 1.18 × 0.68 m`，具名部件 **20** 个。稳定 ID：`bathroom.accessible-shower-transfer-seat.001`。源代码：[`src/models/accessible_shower_transfer_seat.js`](../src/models/accessible_shower_transfer_seat.js)。

**双盆浴室洗漱台 / Dual Basin Vanity Console** — Double vanity unit with symmetric ceramic basins, faucets, mirrored splashback and cabinet。外包围尺寸 `1.73 × 1.22 × 0.61 m`，具名部件 **21** 个。稳定 ID：`bathroom.dual-basin-vanity-console.001`。源代码：[`src/models/dual_basin_vanity_console.js`](../src/models/dual_basin_vanity_console.js)。

**独立雨淋淋浴柱 / Freestanding Rainfall Shower Column** — Tall shower column with overhead shower disk, removable handset, thermostat and tray。外包围尺寸 `0.82 × 2.40 × 0.76 m`，具名部件 **25** 个。稳定 ID：`bathroom.freestanding-rainfall-shower-column.001`。源代码：[`src/models/freestanding_rainfall_shower_column.js`](../src/models/freestanding_rainfall_shower_column.js)。

**商用感应干手机 / Touchless Commercial Hand Dryer** — Commercial hand dryer with air slots, motion sensor, status LEDs and wall mounting。外包围尺寸 `0.40 × 0.56 × 0.32 m`，具名部件 **24** 个。稳定 ID：`bathroom.touchless-commercial-hand-dryer.001`。源代码：[`src/models/touchless_commercial_hand_dryer.js`](../src/models/touchless_commercial_hand_dryer.js)。

### 职业人物原型 / characters

**民航飞行员人物原型 / Airline Pilot Mannequin** — Unrigged airline pilot wearing peaked cap, rank bars and rolling suitcase。外包围尺寸 `1.00 × 1.95 × 0.73 m`，具名部件 **24** 个。稳定 ID：`characters.airline-pilot-mannequin.001`。源代码：[`src/models/airline_pilot_mannequin.js`](../src/models/airline_pilot_mannequin.js)。

**博物馆策展人原型 / Museum Curator Mannequin** — Unrigged museum curator in blazer, badge, tablet and folded exhibition pamphlet。外包围尺寸 `0.96 × 1.91 × 0.72 m`，具名部件 **24** 个。稳定 ID：`characters.museum-curator-mannequin.001`。源代码：[`src/models/museum_curator_mannequin.js`](../src/models/museum_curator_mannequin.js)。

**铁路调度员人物原型 / Railway Dispatcher Mannequin** — Unrigged railway dispatcher with signal paddle, reflective vest and radio。外包围尺寸 `1.04 × 1.94 × 0.76 m`，具名部件 **24** 个。稳定 ID：`characters.railway-dispatcher-mannequin.001`。源代码：[`src/models/railway_dispatcher_mannequin.js`](../src/models/railway_dispatcher_mannequin.js)。

**城市骑行者人物原型 / Urban Cyclist Mannequin** — Unrigged cyclist in protective helmet, hi-vis jersey, bike glasses and water bottle。外包围尺寸 `1.13 × 1.88 × 0.91 m`，具名部件 **26** 个。稳定 ID：`characters.urban-cyclist-mannequin.001`。源代码：[`src/models/urban_cyclist_mannequin.js`](../src/models/urban_cyclist_mannequin.js)。

### 家居装饰与展示 / decor

**陶瓷茶道摆件 / Ceramic Tea Ceremony Set** — Minimalist tea ritual tray with pot, five cups, bamboo scoop and ornaments。外包围尺寸 `0.95 × 0.42 × 0.66 m`，具名部件 **17** 个。稳定 ID：`decor.ceramic-tea-ceremony-set.001`。源代码：[`src/models/ceramic_tea_ceremony_set.js`](../src/models/ceramic_tea_ceremony_set.js)。

**中式纸灯笼悬挂组合 / Hanging Paper Lantern Cluster** — Cluster of lanterns hanging from beam with tassels, ribs and warm shades。外包围尺寸 `1.64 × 2.47 × 1.31 m`，具名部件 **28** 个。稳定 ID：`decor.hanging-paper-lantern-cluster.001`。源代码：[`src/models/hanging_paper_lantern_cluster.js`](../src/models/hanging_paper_lantern_cluster.js)。

**室内动态水幕装饰墙 / Kinetic Water Wall Fountain** — Indoor water wall with illuminated waterfall panel, stone basin and stepping ripple jets。外包围尺寸 `1.42 × 2.14 × 0.56 m`，具名部件 **24** 个。稳定 ID：`decor.kinetic-water-wall-fountain.001`。源代码：[`src/models/kinetic_water_wall_fountain.js`](../src/models/kinetic_water_wall_fountain.js)。

**博物馆史前化石展台 / Museum Fossil Display** — Museum mounted fossil specimen in protective case with ribcage study and labels。外包围尺寸 `1.77 × 1.74 × 0.91 m`，具名部件 **22** 个。稳定 ID：`decor.museum-fossil-display.001`。源代码：[`src/models/museum_fossil_display.js`](../src/models/museum_fossil_display.js)。

### 电子与测量设备 / electronics

**广播调音控制台 / Broadcast Audio Mixing Console** — Studio mixing desk with individual channel faders and VU meters。外包围尺寸 `1.08 × 0.30 × 0.65 m`，具名部件 **35** 个。稳定 ID：`electronics.broadcast-audio-mixing-console.001`。源代码：[`src/models/broadcast_audio_mixing_console.js`](../src/models/broadcast_audio_mixing_console.js)。

**工业机器人控制器 / Industrial Robot Controller** — Industrial robot teach-pendant cabinet with safety stop and thermal vents。外包围尺寸 `0.76 × 1.35 × 0.57 m`，具名部件 **25** 个。稳定 ID：`electronics.industrial-robot-controller.001`。源代码：[`src/models/industrial_robot_controller.js`](../src/models/industrial_robot_controller.js)。

**激光雷达三维扫描头 / Lidar Mapping Scanner** — Three-dimensional terrestrial lidar mapping scanner and tripod support。外包围尺寸 `0.64 × 1.18 × 0.57 m`，具名部件 **22** 个。稳定 ID：`electronics.lidar-mapping-scanner.001`。源代码：[`src/models/lidar_mapping_scanner.js`](../src/models/lidar_mapping_scanner.js)。

**便携医学超声仪 / Portable Medical Ultrasound** — Portable clinical ultrasound diagnostic console and sensor probe。外包围尺寸 `0.54 × 0.65 × 0.46 m`，具名部件 **26** 个。稳定 ID：`electronics.portable-medical-ultrasound.001`。源代码：[`src/models/portable_medical_ultrasound.js`](../src/models/portable_medical_ultrasound.js)。

### 家具及医疗家具 / furniture

**教室翻板演讲桌 / Classroom Folding Lecture Desk** — Mobile folding seminar desk with writing surface, modesty panel, book rack and casters。外包围尺寸 `1.18 × 1.17 × 0.67 m`，具名部件 **19** 个。稳定 ID：`furniture.classroom-folding-lecture-desk.001`。源代码：[`src/models/classroom_folding_lecture_desk.js`](../src/models/classroom_folding_lecture_desk.js)。

**医疗电动护理床 / Hospital Adjustable Bed** — Hospital patient care bed with adjustable backrest, guard rails and lockable casters。外包围尺寸 `2.28 × 1.62 × 1.38 m`，具名部件 **22** 个。稳定 ID：`furniture.hospital-adjustable-bed.001`。源代码：[`src/models/hospital_adjustable_bed.js`](../src/models/hospital_adjustable_bed.js)。

**博物馆展陈基座 / Museum Display Plinth** — Glass-topped museum showcase with artifact, plinth and information plate。外包围尺寸 `0.78 × 1.68 × 0.72 m`，具名部件 **18** 个。稳定 ID：`furniture.museum-display-plinth.001`。源代码：[`src/models/museum_display_plinth.js`](../src/models/museum_display_plinth.js)。

**美发沙龙可调座椅 / Salon Reclining Chair** — Swivel salon chair with hydraulic pedestal, tilting back and foot support。外包围尺寸 `1.15 × 1.64 × 1.13 m`，具名部件 **19** 个。稳定 ID：`furniture.salon-reclining-chair.001`。源代码：[`src/models/salon_reclining_chair.js`](../src/models/salon_reclining_chair.js)。

### 餐饮厨房 / kitchen

**商用立式和面搅拌机 / Commercial Dough Mixer** — Commercial planetary dough mixer with raised bowl, mixing hooks, emergency stop and motor head。外包围尺寸 `0.74 × 1.25 × 0.71 m`，具名部件 **15** 个。稳定 ID：`kitchen.commercial-dough-mixer.001`。源代码：[`src/models/commercial_dough_mixer.js`](../src/models/commercial_dough_mixer.js)。

**商用电磁炒锅工作站 / Induction Wok Station** — Industrial wok station with cooking ring, handled wok, splashback and control dials。外包围尺寸 `1.03 × 1.28 × 0.86 m`，具名部件 **18** 个。稳定 ID：`kitchen.induction-wok-station.001`。源代码：[`src/models/induction_wok_station.js`](../src/models/induction_wok_station.js)。

**日式拉面出餐台 / Ramen Noodle Service Counter** — Ramen serving counter with bowls, noodle strainer baskets, toppings and menu board。外包围尺寸 `1.68 × 1.53 × 0.79 m`，具名部件 **25** 个。稳定 ID：`kitchen.ramen-noodle-service-counter.001`。源代码：[`src/models/ramen_noodle_service_counter.js`](../src/models/ramen_noodle_service_counter.js)。

**寿司回转输送展示柜 / Refrigerated Sushi Conveyor** — Compact sushi conveyor lane with glass sneeze guard, colorful dishes and cooling base。外包围尺寸 `2.34 × 1.15 × 1.14 m`，具名部件 **34** 个。稳定 ID：`kitchen.refrigerated-sushi-conveyor.001`。源代码：[`src/models/refrigerated_sushi_conveyor.js`](../src/models/refrigerated_sushi_conveyor.js)。

### 自然景观 / nature

**冰川蓝冰洞穴 / Glacial Ice Cave** — Arched translucent-looking glacier cavern with icicles and frozen pool。外包围尺寸 `2.95 × 2.17 × 2.68 m`，具名部件 **21** 个。稳定 ID：`nature.glacial-ice-cave.001`。源代码：[`src/models/glacial_ice_cave.js`](../src/models/glacial_ice_cave.js)。

**睡莲荷塘庭院 / Lily Pond Garden** — Garden lily pond with broad aquatic leaves, lotus flowers and reeds。外包围尺寸 `2.18 × 0.74 × 1.84 m`，具名部件 **28** 个。稳定 ID：`nature.lily-pond-garden.001`。源代码：[`src/models/lily_pond_garden.js`](../src/models/lily_pond_garden.js)。

**稀树草原金合欢林 / Savanna Acacia Grove** — Acacia grove with umbrella canopy and dry grass tufts。外包围尺寸 `2.81 × 2.78 × 2.27 m`，具名部件 **28** 个。稳定 ID：`nature.savanna-acacia-grove.001`。源代码：[`src/models/savanna_acacia_grove.js`](../src/models/savanna_acacia_grove.js)。

**火山熔岩地表 / Volcanic Lava Field** — Jagged basalt volcanic plain with orange lava fissures and vents。外包围尺寸 `2.70 × 1.05 × 2.39 m`，具名部件 **31** 个。稳定 ID：`nature.volcanic-lava-field.001`。源代码：[`src/models/volcanic_lava_field.js`](../src/models/volcanic_lava_field.js)。

### 科幻科学设施 / scifi

**小行星资源精炼模块 / Asteroid Refinery Module** — Nonweapon sci-fi mining refinery with ore hopper, conveyor, pressure cylinders and control bay。外包围尺寸 `3.12 × 2.83 × 2.67 m`，具名部件 **24** 个。稳定 ID：`scifi.asteroid-refinery-module.001`。源代码：[`src/models/asteroid_refinery_module.js`](../src/models/asteroid_refinery_module.js)。

**轨道导航信标 / Orbital Navigation Beacon** — Orbital route guidance beacon with toroidal antenna, luminous fins and stabilizer thrusters。外包围尺寸 `1.69 × 3.31 × 1.61 m`，具名部件 **26** 个。稳定 ID：`scifi.orbital-navigation-beacon.001`。源代码：[`src/models/orbital_navigation_beacon.js`](../src/models/orbital_navigation_beacon.js)。

**行星气象探测阵列 / Planetary Weather Sensor Array** — Futuristic planetary science meteorological mast with solar wings, radar pods and ground sensors。外包围尺寸 `2.23 × 2.81 × 2.14 m`，具名部件 **21** 个。稳定 ID：`scifi.planetary-weather-sensor-array.001`。源代码：[`src/models/planetary_weather_sensor_array.js`](../src/models/planetary_weather_sensor_array.js)。

### 体育设施 / sports

**羽毛球场球网组合 / Badminton Court Net Set** — Badminton net set with posts, tension ropes, shuttlecocks and court markings。外包围尺寸 `3.62 × 1.60 × 0.83 m`，具名部件 **31** 个。稳定 ID：`sports.badminton-court-net-set.001`。源代码：[`src/models/badminton_court_net_set.js`](../src/models/badminton_court_net_set.js)。

**竞技体操平衡木 / Gymnastics Balance Beam** — Gymnastics balance beam with padded top, steel supports and stabilizing pads。外包围尺寸 `4.12 × 1.29 × 0.69 m`，具名部件 **16** 个。稳定 ID：`sports.gymnastics-balance-beam.001`。源代码：[`src/models/gymnastics_balance_beam.js`](../src/models/gymnastics_balance_beam.js)。

**竞速单人皮划艇 / Racing Single Kayak** — Competition kayak with tapered hull, seat, footrest, paddle and spray deck。外包围尺寸 `0.82 × 0.52 × 3.91 m`，具名部件 **18** 个。稳定 ID：`sports.racing-single-kayak.001`。源代码：[`src/models/racing_single_kayak.js`](../src/models/racing_single_kayak.js)。

### 工业工具 / tools

**工业管道链式切割器 / Industrial Chain Pipe Cutter** — Industrial manual chain-style pipe cutter with adjustable jaw, wheel and crank handle。外包围尺寸 `0.51 × 0.48 × 0.77 m`，具名部件 **16** 个。稳定 ID：`tools.industrial-chain-pipe-cutter.001`。源代码：[`src/models/industrial_chain_pipe_cutter.js`](../src/models/industrial_chain_pipe_cutter.js)。

**实验室桌面离心机 / Laboratory Tabletop Centrifuge** — Bench laboratory centrifuge with six-place rotor, tube holders, lid and digital control。外包围尺寸 `0.63 × 0.48 × 0.58 m`，具名部件 **15** 个。稳定 ID：`tools.laboratory-tabletop-centrifuge.001`。源代码：[`src/models/laboratory_tabletop_centrifuge.js`](../src/models/laboratory_tabletop_centrifuge.js)。

**激光测距仪 / Laser Distance Meter** — Compact handheld digital range finder with laser port, numeric display and keypad。外包围尺寸 `0.19 × 0.33 × 0.14 m`，具名部件 **15** 个。稳定 ID：`tools.laser-distance-meter.001`。源代码：[`src/models/laser_distance_meter.js`](../src/models/laser_distance_meter.js)。

**精密台式钻床 / Precision Bench Drill Press** — Bench drill press with vertical column, sliding worktable, drill bit and protective motor housing。外包围尺寸 `0.71 × 1.25 × 0.77 m`，具名部件 **14** 个。稳定 ID：`tools.precision-bench-drill-press.001`。源代码：[`src/models/precision_bench_drill_press.js`](../src/models/precision_bench_drill_press.js)。

### 城市基础设施 / urban

**社区共享种植花箱站 / Community Garden Planter Station** — Shared neighborhood planting station with tiered planters, watering tank and labels。外包围尺寸 `2.09 × 1.43 × 1.23 m`，具名部件 **33** 个。稳定 ID：`urban.community-garden-planter-station.001`。源代码：[`src/models/community_garden_planter_station.js`](../src/models/community_garden_planter_station.js)。

**道路监控龙门架 / Elevated Road Camera Gantry** — Traffic surveillance gantry with twin columns, horizontal span, camera sensors and solar panel。外包围尺寸 `3.54 × 3.18 × 0.76 m`，具名部件 **22** 个。稳定 ID：`urban.elevated-road-camera-gantry.001`。源代码：[`src/models/elevated_road_camera_gantry.js`](../src/models/elevated_road_camera_gantry.js)。

**城市智能信息查询屏 / Interactive Public Info Totem** — Interactive urban information kiosk with touch screen, speakers and emergency call button。外包围尺寸 `0.73 × 2.21 × 0.47 m`，具名部件 **18** 个。稳定 ID：`urban.interactive-public-info-totem.001`。源代码：[`src/models/interactive_public_info_totem.js`](../src/models/interactive_public_info_totem.js)。

**人行与自行车道分隔设施 / Pedestrian Cycle Lane Divider** — Modular raised cycle lane safety divider with reflective posts and arrows。外包围尺寸 `2.69 × 0.94 × 0.67 m`，具名部件 **22** 个。稳定 ID：`urban.pedestrian-cycle-lane-divider.001`。源代码：[`src/models/pedestrian_cycle_lane_divider.js`](../src/models/pedestrian_cycle_lane_divider.js)。

### 交通与专业载具 / vehicles

**两栖科考船 / Amphibious Research Boat** — Marine science amphibious boat with cabin, sensor mast and sample deck。外包围尺寸 `2.21 × 2.83 × 4.13 m`，具名部件 **27** 个。稳定 ID：`vehicles.amphibious-research-boat.001`。源代码：[`src/models/amphibious_research_boat.js`](../src/models/amphibious_research_boat.js)。

**城市有轨电车 / Commuter Tram Car** — Low-floor city tram with passenger glazing, wheel bogies and overhead pantograph。外包围尺寸 `2.58 × 3.31 × 6.41 m`，具名部件 **39** 个。稳定 ID：`vehicles.commuter-tram-car.001`。源代码：[`src/models/commuter_tram_car.js`](../src/models/commuter_tram_car.js)。

**电动配送轻便摩托 / Electric Delivery Moped** — Electric food courier moped with cargo case, fork and steering grips。外包围尺寸 `0.89 × 1.50 × 1.86 m`，具名部件 **10** 个。稳定 ID：`vehicles.electric-delivery-moped.001`。源代码：[`src/models/electric_delivery_moped.js`](../src/models/electric_delivery_moped.js)。

**消防云梯救援车 / Fire Department Ladder Truck** — Red fire rescue truck with ladder sections, six wheels and equipment lockers。外包围尺寸 `2.49 × 3.24 × 5.68 m`，具名部件 **33** 个。稳定 ID：`vehicles.fire-department-ladder-truck.001`。源代码：[`src/models/fire_department_ladder_truck.js`](../src/models/fire_department_ladder_truck.js)。

## 质量控制与交付流水线

```bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm ci
node scripts/validate_models.mjs
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
python3 scripts/smoke_p2.py
npm run build
npm run test:gallery
npm run test:remote
```

**预期验收基线（是否成功以对应 CI 日志为准）**：285 个真实 Three.js 渲染 WebP 缩略图 + 285 个 AVIF（合计 **570 张**）；285 × LOD0/LOD1/LOD2 = **855 个** Meshopt GLB 模型；本地 SHA-256 内容寻址对象存储核验 855 个对象；SQLite 分页遍历 285 条记录无重复、中文搜索、浏览器 3D Inspector 和 MCP v2 只读集成。

## 发布与兼容性边界

- 原有 V0.1–V0.7 **235 个历史 ID 和源文件保持不变**；V0.8 只追加。
- 机器可读独立集合：`catalog/collections/v08.json`。统一目录：`catalog/models.json`。
- GitHub Pages 部署的是静态 Gallery，真正的预览图和优化 GLB 由 GitHub Actions 生成；二进制文件不要求写入 Git 历史。
- 静态 Gallery 有界投影暂为 500 条，足以包含本批 285 项；超过该规模需要分页或 API-backed 模式。
- SQLite 远端查询服务和云端 MinIO/S3 与 Pages 是独立部署项，CI 中的本地对象存储验证不代表云端服务已上线。
- 制作角色 Rig、动作、PBR/纹理和人工造型 QA 是后续阶段，不在本批承诺内。
