# 3D Worlds V0.6｜下一批 50 个原创三维资产

## 概览

本次在之前 135 个模型的基础上，新增 **50 个原创、可编辑的 Three.js 程序化模型**，总量达到 **185 个**。新增资产仍覆盖仓库全部 **13 个分类**，其中 11 类各增加 4 个，运动和科幻类别各增加 3 个。

**约束**：每个资产有独立 `src/models/*.js` 源码、稳定 ID、双语名称、按米计的包围盒尺寸、具名几何部件和 MIT 版权声明。部件模型均由几何内核构建，不是只有元数据的占位记录。

**适用**：浏览器 3D 场景、可视化演示、游戏低多边形概念素材、教育和资源检索复用。人物原型没有骨骼绑定；装饰物和场景模块不承诺生产级 CAD/拓扑水密或美术级 UV/PBR。

## 类别分布

| 分类 | 新增数量 | 完整模型清单 |
|---|---:|---|
| 建筑构件 | 4 | 建筑施工脚手架单元（Construction Scaffolding Bay）；尖拱石门建筑模块（Gothic Stone Arch Module）；砖砌屋顶烟囱（Masonry Brick Chimney）；木质外挑阳台模块（Timber Balcony Module） |
| 卫浴 | 4 | 复古铜质四足浴缸（Copper Clawfoot Bathtub）；实木浴缸托盘（Timber Bath Tray）；三门镜面药柜（Triple Mirror Medicine Cabinet）；壁挂式马桶（Wall Hung Toilet） |
| 人物原型 | 4 | 实验室技术员原型（Laboratory Technician Mannequin）；邮政投递员原型（Mail Carrier Mannequin）；国家公园护林员原型（Park Ranger Mannequin）；潜水员人物原型（Scuba Diver Mannequin） |
| 家居装饰 | 4 | 复古落地摆钟（Antique Grandfather Clock）；盆景陶瓷展示树（Bonsai Ceramic Display）；彩色铅条玻璃屏（Stained Glass Panel）；错层蜡烛烛台组合（Tiered Candle Centerpiece） |
| 电子设备 | 4 | 桌面激光雕刻机（Desktop Laser Engraver）；电子舞台键盘（Digital Stage Keyboard）；迷你服务器机柜（Mini Server Cabinet）；数位屏绘画工作台（Pen Tablet Workstation） |
| 家具 | 4 | 竹制换鞋凳（Bamboo Shoe Bench）；套叠边几组合（Nesting Side Table Set）；图书馆滑轨木梯（Rolling Library Ladder）；丝绒贵妃躺椅（Velvet Chaise Lounge） |
| 厨房家电 | 4 | 桌面真空食品封口机（Countertop Vacuum Sealer）；独立式燃气炉灶烤箱（Freestanding Gas Range Oven）；双槽不锈钢烤面包机（Stainless Two Slot Toaster）；柴火石砌披萨炉（Wood Fired Pizza Oven） |
| 自然环境 | 4 | 高山瀑布岩壁（Alpine Waterfall Cliff）；竹林竹丛（Dense Bamboo Grove）；薰衣草田地块（Lavender Field Patch）；海滨潮汐礁石池（Tidal Rock Pool） |
| 科幻道具 | 3 | 月面居住舱模块（Lunar Habitat Module）；轨道空间站对接口环（Orbital Docking Ring）；机器人采矿挖掘车（Robotic Mining Excavator） |
| 运动设施 | 3 | 射箭练习靶架（Archery Practice Target）；室内抱石攀岩墙（Indoor Bouldering Wall）；室内划船训练器（Rowing Fitness Ergometer） |
| 工具器材 | 4 | 便携式空气压缩机（Portable Air Compressor）；手持角磨机（Rotary Angle Grinder）；野外测绘三脚架（Surveying Camera Tripod）；木工台钳（Woodworking Bench Vise） |
| 城市设施 | 4 | 电动车公共充电桩（Electric Vehicle Charging Pillar）；地铁站出入口（Metro Station Entrance）；城市街头零售亭（Modular Street Vending Kiosk）；公共饮水台（Public Drinking Fountain） |
| 交通载具 | 4 | 农业田间拖拉机（Agricultural Field Tractor）；城市电动滑板车（City Electric Scooter）；城市通勤轨道列车（Commuter Passenger Train）；节庆热气球（Festival Hot Air Balloon） |

**本批合计：50 个｜覆盖分类：13 个｜具名部件：1148 个。**

## 模型结构与可编辑来源

### 建筑构件（architecture）

**建筑施工脚手架单元 / Construction Scaffolding Bay**：Reusable scaffolding module with crossbraces, two work decks and guard rails。尺寸 `2.43 × 3.02 × 1.34 m`；**22 个几何部件**。ID：`architecture.construction-scaffolding-bay.001`。生成代码：[`src/models/construction_scaffolding_bay.js`](../src/models/construction_scaffolding_bay.js)。

**尖拱石门建筑模块 / Gothic Stone Arch Module**：Pointed sandstone portal with voussoirs, carved bosses and threshold。尺寸 `2.24 × 3.28 × 0.55 m`；**22 个几何部件**。ID：`architecture.gothic-stone-arch-module.001`。生成代码：[`src/models/gothic_stone_arch_module.js`](../src/models/gothic_stone_arch_module.js)。

**砖砌屋顶烟囱 / Masonry Brick Chimney**：Brickwork flue with mortar pattern, cap supports and metal rain cover。尺寸 `0.85 × 2.31 × 0.82 m`；**29 个几何部件**。ID：`architecture.masonry-brick-chimney.001`。生成代码：[`src/models/masonry_brick_chimney.js`](../src/models/masonry_brick_chimney.js)。

**木质外挑阳台模块 / Timber Balcony Module**：Modular balcony with deck planking, wall fasteners, railings and support corbels。尺寸 `2.62 × 1.57 × 1.50 m`；**29 个几何部件**。ID：`architecture.timber-balcony-module.001`。生成代码：[`src/models/timber_balcony_module.js`](../src/models/timber_balcony_module.js)。

### 卫浴（bathroom）

**复古铜质四足浴缸 / Copper Clawfoot Bathtub**：Copper freestanding bathtub with contrasting enamel interior and four ornate feet。尺寸 `1.63 × 0.76 × 0.83 m`；**13 个几何部件**。ID：`bathroom.copper-clawfoot-bathtub.001`。生成代码：[`src/models/copper_clawfoot_bathtub.js`](../src/models/copper_clawfoot_bathtub.js)。

**实木浴缸托盘 / Timber Bath Tray**：Slatted bath caddy with book rest, glass stem holder and small soap bowl。尺寸 `0.94 × 0.21 × 0.30 m`；**17 个几何部件**。ID：`bathroom.timber-bath-tray.001`。生成代码：[`src/models/timber_bath_tray.js`](../src/models/timber_bath_tray.js)。

**三门镜面药柜 / Triple Mirror Medicine Cabinet**：Wall medicine cabinet with three mirrored doors, shelf insets and side pull tabs。尺寸 `0.88 × 0.67 × 0.19 m`；**16 个几何部件**。ID：`bathroom.triple-mirror-medicine-cabinet.001`。生成代码：[`src/models/triple_mirror_medicine_cabinet.js`](../src/models/triple_mirror_medicine_cabinet.js)。

**壁挂式马桶 / Wall Hung Toilet**：Wall-mounted tankless ceramic toilet with floating bowl, flush panel and hinges。尺寸 `0.39 × 0.78 × 0.64 m`；**12 个几何部件**。ID：`bathroom.wall-hung-toilet.001`。生成代码：[`src/models/wall_hung_toilet.js`](../src/models/wall_hung_toilet.js)。

### 人物原型（characters）

**实验室技术员原型 / Laboratory Technician Mannequin**：Unrigged scientist wearing goggles, lab coat, nitrile gloves and microscope clipboard。尺寸 `0.95 × 1.92 × 0.68 m`；**19 个几何部件**。ID：`characters.laboratory-technician-mannequin.001`。生成代码：[`src/models/laboratory_technician_mannequin.js`](../src/models/laboratory_technician_mannequin.js)。

**邮政投递员原型 / Mail Carrier Mannequin**：Unrigged delivery worker with satchel, uniform cap, envelope and walking shoes。尺寸 `0.99 × 1.88 × 0.68 m`；**16 个几何部件**。ID：`characters.mail-carrier-mannequin.001`。生成代码：[`src/models/mail_carrier_mannequin.js`](../src/models/mail_carrier_mannequin.js)。

**国家公园护林员原型 / Park Ranger Mannequin**：Unrigged forest ranger with brimmed hat, radio, khaki uniform and hiking boots。尺寸 `0.96 × 1.91 × 0.68 m`；**17 个几何部件**。ID：`characters.park-ranger-mannequin.001`。生成代码：[`src/models/park_ranger_mannequin.js`](../src/models/park_ranger_mannequin.js)。

**潜水员人物原型 / Scuba Diver Mannequin**：Unrigged scuba diver with mask, tank, flippers, weighted belt and air hoses。尺寸 `1.20 × 1.92 × 0.72 m`；**15 个几何部件**。ID：`characters.scuba-diver-mannequin.001`。生成代码：[`src/models/scuba_diver_mannequin.js`](../src/models/scuba_diver_mannequin.js)。

### 家居装饰（decor）

**复古落地摆钟 / Antique Grandfather Clock**：Grandfather clock with decorated dial and weighted pendulum。尺寸 `0.64 × 2.18 × 0.39 m`；**24 个几何部件**。ID：`decor.antique-grandfather-clock.001`。生成代码：[`src/models/antique_grandfather_clock.js`](../src/models/antique_grandfather_clock.js)。

**盆景陶瓷展示树 / Bonsai Ceramic Display**：Asymmetric sculptural bonsai with shallow glazed pot and branch pads。尺寸 `0.76 × 0.83 × 0.66 m`；**21 个几何部件**。ID：`decor.bonsai-ceramic-display.001`。生成代码：[`src/models/bonsai_ceramic_display.js`](../src/models/bonsai_ceramic_display.js)。

**彩色铅条玻璃屏 / Stained Glass Panel**：Decorative colored leaded glass grid with central rosette。尺寸 `1.21 × 1.77 × 0.11 m`；**25 个几何部件**。ID：`decor.stained-glass-panel.001`。生成代码：[`src/models/stained_glass_panel.js`](../src/models/stained_glass_panel.js)。

**错层蜡烛烛台组合 / Tiered Candle Centerpiece**：Three differing-height brass candlesticks with ivory wax。尺寸 `0.79 × 0.74 × 0.57 m`；**19 个几何部件**。ID：`decor.tiered-candle-centerpiece.001`。生成代码：[`src/models/tiered_candle_centerpiece.js`](../src/models/tiered_candle_centerpiece.js)。

### 电子设备（electronics）

**桌面激光雕刻机 / Desktop Laser Engraver**：Enclosed compact laser engraver with X-Y bridge, safety shroud, bed and fume tube。尺寸 `0.63 × 0.57 × 0.60 m`；**14 个几何部件**。ID：`electronics.desktop-laser-engraver.001`。生成代码：[`src/models/desktop_laser_engraver.js`](../src/models/desktop_laser_engraver.js)。

**电子舞台键盘 / Digital Stage Keyboard**：Portable stage piano with 28 keys, control knobs, display and X-frame stand。尺寸 `1.25 × 0.83 × 0.43 m`；**48 个几何部件**。ID：`electronics.digital-stage-keyboard.001`。生成代码：[`src/models/digital_stage_keyboard.js`](../src/models/digital_stage_keyboard.js)。

**迷你服务器机柜 / Mini Server Cabinet**：Network equipment cabinet with ventilation grilles, eight modules, front door and cables。尺寸 `0.57 × 1.05 × 0.69 m`；**41 个几何部件**。ID：`electronics.mini-server-cabinet.001`。生成代码：[`src/models/mini_server_cabinet.js`](../src/models/mini_server_cabinet.js)。

**数位屏绘画工作台 / Pen Tablet Workstation**：Artist pen display with stand, stylus, side shortcut buttons and a drawing interface。尺寸 `0.78 × 0.56 × 0.46 m`；**16 个几何部件**。ID：`electronics.pen-tablet-workstation.001`。生成代码：[`src/models/pen_tablet_workstation.js`](../src/models/pen_tablet_workstation.js)。

### 家具（furniture）

**竹制换鞋凳 / Bamboo Shoe Bench**：Entryway seat with bamboo slatted top, twin shelves and four crossbraced supports。尺寸 `1.18 × 0.61 × 0.45 m`；**22 个几何部件**。ID：`furniture.bamboo-shoe-bench.001`。生成代码：[`src/models/bamboo_shoe_bench.js`](../src/models/bamboo_shoe_bench.js)。

**套叠边几组合 / Nesting Side Table Set**：Three-height steel nesting side tables with rounded stone-like tops。尺寸 `1.24 × 0.69 × 0.47 m`；**19 个几何部件**。ID：`furniture.nesting-side-table-set.001`。生成代码：[`src/models/nesting_side_table_set.js`](../src/models/nesting_side_table_set.js)。

**图书馆滑轨木梯 / Rolling Library Ladder**：Angled walnut step ladder with sliding rail hooks and eight treads。尺寸 `0.69 × 2.52 × 0.86 m`；**18 个几何部件**。ID：`furniture.rolling-library-ladder.001`。生成代码：[`src/models/rolling_library_ladder.js`](../src/models/rolling_library_ladder.js)。

**丝绒贵妃躺椅 / Velvet Chaise Lounge**：Low asymmetric chaise lounge with sculpted curved pillow and brass feet。尺寸 `1.70 × 0.87 × 0.76 m`；**14 个几何部件**。ID：`furniture.velvet-chaise-lounge.001`。生成代码：[`src/models/velvet_chaise_lounge.js`](../src/models/velvet_chaise_lounge.js)。

### 厨房家电（kitchen）

**桌面真空食品封口机 / Countertop Vacuum Sealer**：Countertop vacuum packer with transparent lid, control keys, heating seal and food bag。尺寸 `0.47 × 0.25 × 0.36 m`；**15 个几何部件**。ID：`kitchen.countertop-vacuum-sealer.001`。生成代码：[`src/models/countertop_vacuum_sealer.js`](../src/models/countertop_vacuum_sealer.js)。

**独立式燃气炉灶烤箱 / Freestanding Gas Range Oven**：Gas cooktop and oven combination with burner grates and control dials。尺寸 `0.68 × 0.89 × 0.68 m`；**31 个几何部件**。ID：`kitchen.freestanding-gas-range-oven.001`。生成代码：[`src/models/freestanding_gas_range_oven.js`](../src/models/freestanding_gas_range_oven.js)。

**双槽不锈钢烤面包机 / Stainless Two Slot Toaster**：Compact countertop toaster with extended bread and shade control。尺寸 `0.35 × 0.27 × 0.24 m`；**15 个几何部件**。ID：`kitchen.stainless-two-slot-toaster.001`。生成代码：[`src/models/stainless_two_slot_toaster.js`](../src/models/stainless_two_slot_toaster.js)。

**柴火石砌披萨炉 / Wood Fired Pizza Oven**：Outdoor pizzeria masonry oven with domed hearth, brick apron, chimney and bread peel。尺寸 `1.45 × 1.36 × 1.29 m`；**19 个几何部件**。ID：`kitchen.wood-fired-pizza-oven.001`。生成代码：[`src/models/wood_fired_pizza_oven.js`](../src/models/wood_fired_pizza_oven.js)。

### 自然环境（nature）

**高山瀑布岩壁 / Alpine Waterfall Cliff**：Rock wall with sloped terraces, suspended vertical waterfall ribbons and pool。尺寸 `2.48 × 2.17 × 1.47 m`；**19 个几何部件**。ID：`nature.alpine-waterfall-cliff.001`。生成代码：[`src/models/alpine_waterfall_cliff.js`](../src/models/alpine_waterfall_cliff.js)。

**竹林竹丛 / Dense Bamboo Grove**：Layered cluster of green bamboo canes with node rings and horizontal leaves。尺寸 `1.35 × 3.17 × 1.28 m`；**77 个几何部件**。ID：`nature.dense-bamboo-grove.001`。生成代码：[`src/models/dense_bamboo_grove.js`](../src/models/dense_bamboo_grove.js)。

**薰衣草田地块 / Lavender Field Patch**：Six dense rows of purple lavender spikes above shallow soil and green stems。尺寸 `1.57 × 0.77 × 1.26 m`；**94 个几何部件**。ID：`nature.lavender-field-patch.001`。生成代码：[`src/models/lavender_field_patch.js`](../src/models/lavender_field_patch.js)。

**海滨潮汐礁石池 / Tidal Rock Pool**：Natural shallow tide pool with rock ring, aquatic plants, and starfish details。尺寸 `1.74 × 0.56 × 1.45 m`；**23 个几何部件**。ID：`nature.tidal-rock-pool.001`。生成代码：[`src/models/tidal_rock_pool.js`](../src/models/tidal_rock_pool.js)。

### 科幻道具（scifi）

**月面居住舱模块 / Lunar Habitat Module**：Modular pressurized lunar habitat with solar wing, airlock, windows and anchor feet。尺寸 `3.17 × 2.32 × 3.44 m`；**23 个几何部件**。ID：`scifi.lunar-habitat-module.001`。生成代码：[`src/models/lunar_habitat_module.js`](../src/models/lunar_habitat_module.js)。

**轨道空间站对接口环 / Orbital Docking Ring**：Space-station docking gateway with concentric steel rings, twelve seals, beacon lights and mounting gantry。尺寸 `2.87 × 2.86 × 0.79 m`；**27 个几何部件**。ID：`scifi.orbital-docking-ring.001`。生成代码：[`src/models/orbital_docking_ring.js`](../src/models/orbital_docking_ring.js)。

**机器人采矿挖掘车 / Robotic Mining Excavator**：Nonweapon autonomous mining crawler with articulated boom, digging bucket and sensors。尺寸 `2.25 × 2.46 × 3.36 m`；**25 个几何部件**。ID：`scifi.robotic-mining-excavator.001`。生成代码：[`src/models/robotic_mining_excavator.js`](../src/models/robotic_mining_excavator.js)。

### 运动设施（sports）

**射箭练习靶架 / Archery Practice Target**：Freestanding sport target butt with concentric colored scoring rings and A-frame supports; no bow or arrows。尺寸 `1.15 × 1.68 × 0.76 m`；**13 个几何部件**。ID：`sports.archery-practice-target.001`。生成代码：[`src/models/archery_practice_target.js`](../src/models/archery_practice_target.js)。

**室内抱石攀岩墙 / Indoor Bouldering Wall**：Overhanging bouldering wall with color-coded holds, crash mat and support frames。尺寸 `2.73 × 3.07 × 0.95 m`；**31 个几何部件**。ID：`sports.indoor-bouldering-wall.001`。生成代码：[`src/models/indoor_bouldering_wall.js`](../src/models/indoor_bouldering_wall.js)。

**室内划船训练器 / Rowing Fitness Ergometer**：Indoor rowing machine with track, sliding seat, flywheel, pedals and pull handle。尺寸 `0.67 × 1.13 × 2.13 m`；**14 个几何部件**。ID：`sports.rowing-fitness-ergometer.001`。生成代码：[`src/models/rowing_fitness_ergometer.js`](../src/models/rowing_fitness_ergometer.js)。

### 工具器材（tools）

**便携式空气压缩机 / Portable Air Compressor**：Workshop air compressor with pressure tank, gauge, hose coil, motor and wheels。尺寸 `0.77 × 0.64 × 0.47 m`；**15 个几何部件**。ID：`tools.portable-air-compressor.001`。生成代码：[`src/models/portable_air_compressor.js`](../src/models/portable_air_compressor.js)。

**手持角磨机 / Rotary Angle Grinder**：Workshop angle grinder with metal cutoff wheel, protective cover and side grip。尺寸 `0.40 × 0.21 × 0.55 m`；**13 个几何部件**。ID：`tools.rotary-angle-grinder.001`。生成代码：[`src/models/rotary_angle_grinder.js`](../src/models/rotary_angle_grinder.js)。

**野外测绘三脚架 / Surveying Camera Tripod**：Adjustable survey tripod with telescopic legs, rotation head and bubble level。尺寸 `1.11 × 1.69 × 1.08 m`；**19 个几何部件**。ID：`tools.surveying-camera-tripod.001`。生成代码：[`src/models/surveying_camera_tripod.js`](../src/models/surveying_camera_tripod.js)。

**木工台钳 / Woodworking Bench Vise**：Heavy bench vise with twin jaws, tightening screw, swiveling handle and mounting foot。尺寸 `0.41 × 0.32 × 0.57 m`；**12 个几何部件**。ID：`tools.woodworking-bench-vise.001`。生成代码：[`src/models/woodworking_bench_vise.js`](../src/models/woodworking_bench_vise.js)。

### 城市设施（urban）

**电动车公共充电桩 / Electric Vehicle Charging Pillar**：Outdoor EV charger with touch display, payment terminal, cable loop and plug。尺寸 `0.58 × 1.78 × 0.47 m`；**15 个几何部件**。ID：`urban.electric-vehicle-charging-pillar.001`。生成代码：[`src/models/electric_vehicle_charging_pillar.js`](../src/models/electric_vehicle_charging_pillar.js)。

**地铁站出入口 / Metro Station Entrance**：Covered station entrance with descending steps, overhead emblem and railings。尺寸 `2.70 × 2.48 × 2.60 m`；**22 个几何部件**。ID：`urban.metro-station-entrance.001`。生成代码：[`src/models/metro_station_entrance.js`](../src/models/metro_station_entrance.js)。

**城市街头零售亭 / Modular Street Vending Kiosk**：Tiny retail booth with service window, awning, counter, signs and shelves。尺寸 `2.12 × 2.52 × 1.43 m`；**20 个几何部件**。ID：`urban.modular-street-vending-kiosk.001`。生成代码：[`src/models/modular_street_vending_kiosk.js`](../src/models/modular_street_vending_kiosk.js)。

**公共饮水台 / Public Drinking Fountain**：Accessible public drinking fountain with lower pet station, spouts and drainage。尺寸 `0.76 × 1.18 × 0.57 m`；**12 个几何部件**。ID：`urban.public-drinking-fountain.001`。生成代码：[`src/models/public_drinking_fountain.js`](../src/models/public_drinking_fountain.js)。

### 交通载具（vehicles）

**农业田间拖拉机 / Agricultural Field Tractor**：Farm utility tractor with large rear tires, enclosed cabin, exhaust and front counterweight。尺寸 `1.84 × 2.31 × 3.28 m`；**17 个几何部件**。ID：`vehicles.agricultural-field-tractor.001`。生成代码：[`src/models/agricultural_field_tractor.js`](../src/models/agricultural_field_tractor.js)。

**城市电动滑板车 / City Electric Scooter**：Standing commuter scooter with split forks, platform battery, handlebars and brake。尺寸 `0.64 × 1.19 × 1.25 m`；**13 个几何部件**。ID：`vehicles.city-electric-scooter.001`。生成代码：[`src/models/city_electric_scooter.js`](../src/models/city_electric_scooter.js)。

**城市通勤轨道列车 / Commuter Passenger Train**：One stylized commuter rail car with multiple passenger windows, bogies and roof pantograph。尺寸 `2.68 × 3.10 × 7.25 m`；**31 个几何部件**。ID：`vehicles.commuter-passenger-train.001`。生成代码：[`src/models/commuter_passenger_train.js`](../src/models/commuter_passenger_train.js)。

**节庆热气球 / Festival Hot Air Balloon**：Bright striped hot-air balloon with basket, four suspension ropes and central burner。尺寸 `2.57 × 4.40 × 2.48 m`；**25 个几何部件**。ID：`vehicles.festival-hot-air-balloon.001`。生成代码：[`src/models/festival_hot_air_balloon.js`](../src/models/festival_hot_air_balloon.js)。

## 构建与测试验收

```bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm install
node scripts/validate_models.mjs
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
npm run build
npm run test:gallery
npm run test:remote
python3 scripts/smoke_p2.py
```

**预期交付（由 CI 实际验证）**：
- 模型库：185 个程序化模型，13 个分类，含新增 50 个独立模型。
- 图片：185 张原生 Three.js 渲染 WebP，185 张 AVIF，共 **370 张预览**。
- GLB：185 × LOD0 + 185 × LOD1 + 185 × LOD2，共 **555 个 Meshopt 优化变体**。
- 对象存储：本地不可变 SHA-256 对象镜像检查 555 个 GLB；远端 S3/MinIO 仍需用户提供独立基础设施才能部署。
- 搜索：SQLite 全文索引 + keyset 游标分页；不能通过仅一次 `limit=100` API 请求判断全库数量。
- 浏览器：新增科幻采矿车的真实缩略图与 3D Inspector、中文搜索和多页加载。

**资产完整性**：新增清单 `catalog/collections/v06.json` 提供机器可读模型来源与部件数量；所有历史资产 ID 与源文件保持不变。V0.4、V0.5 原有测试继续覆盖历史集合，`tests/test_collection_v06.py` 独立核验新增 50 个资产。

**发布说明**：静态站点使用 GitHub Pages。完整构建的预览图、GLB 与报告由 GitHub Actions 从源码生成、归档并部署；大型二进制不直接塞入 Git 历史。此处列出的是验收目标，成功状态请以对应 workflow 最终日志为准。

## 推荐下一阶段

- 对建筑模块增加标准连接锚点和尺寸约束，支持浏览器场景拼装。
- 对交通载具增加旋转轮毂、车门状态和动画控制器。
- 对人物模型建立通用骨架，再选取高需求职业角色进行 Rig。
- 为预览引入视觉一致性评分和肉眼 QA 清单，防止自动检查通过但造型识别度不足。
