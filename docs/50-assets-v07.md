# 3D Worlds V0.7：新一批 50 个原创模型

## 版本概览

**V0.7** 在已发布的 185 个原创 Three.js 资产基础上，新增 **50 个独立程序化几何模型**，使完整 Catalog 达到 **235 个模型，13 个分类**。

- 资产来源：原创 Three.js 组合几何，无外部限制性 GLB、贴图或商标；依照仓库 MIT 许可登记。
- 格式：每项保留 `src/models/*.js` 代码、`assetMeta`、`createXxx()` 生成函数和完整几何配方。
- 规范：单位米，Y-up，地面基准 y≈0；每个模型至少 9 个具名几何部件；稳定的 `category.slug.001` 资产 ID。
- 用途：网页环境编辑器、游戏概念搭建、互动教学、物体检索和场景原型；不是生产级 CAD、专业贴图烘焙模型或已经绑定骨骼的动画角色。

## 分类和命名一览

| 分类 | 新增 | 双语资产列表 |
|---|---:|---|
| 建筑构件 | 4 | 城堡垛口墙模块 / Castle Crenellated Wall Module；玻璃温室单元 / Glass Greenhouse Bay；建筑玻璃幕墙模块 / Modular Glass Curtain Wall；花园木质廊架 / Timber Garden Pergola |
| 卫浴 | 4 | 小型雪松桑拿房 / Compact Cedar Sauna Cabin；壁挂式电热毛巾架 / Heated Wall Towel Rail；淋浴墙体内嵌置物格 / Recessed Shower Shelf Niche；足浴泡脚护理站 / Spa Foot Soak Station |
| 人物原型 | 4 | 野外植物学家原型 / Field Botanist Mannequin；工业机械维修师原型 / Industrial Mechanic Mannequin；交响乐团指挥人物原型 / Orchestra Conductor Mannequin；急救医护人员原型 / Paramedic Mannequin |
| 装饰与摆件 | 4 | 玻璃沙漠微景观 / Glass Desert Terrarium；编织吊篮绿植 / Hanging Macrame Planter；动感平衡艺术雕塑 / Kinetic Balance Sculpture；黄铜留声机 / Vintage Brass Gramophone |
| 电子设备 | 4 | 全向会议摄像机 / Omnidirectional Conference Camera；便携数字示波器 / Portable Digital Oscilloscope；智能扫地清洁机器人 / Smart Robot Floor Vacuum；复古胶片放映机 / Vintage Film Projector |
| 家具 | 4 | 隔音阅读舱座椅 / Acoustic Reading Pod Chair；阶梯式组合储物柜 / Modular Stair Storage Cabinet；可倾斜建筑绘图桌 / Tilting Architect Drafting Desk；铁艺花园双人秋千 / Wrought Iron Garden Swing |
| 厨房 | 4 | 面包店展示货架 / Bakery Bread Display Rack；竹制蒸笼点心组合 / Bamboo Dimsum Steamer Set；台式多功能料理机 / Countertop Food Processor；智能电饭煲 / Digital Rice Cooker |
| 自然景观 | 4 | 红树林气根小岛 / Mangrove Root Island；积雪冷杉树林 / Snowy Fir Grove；向日葵农田地块 / Sunflower Farm Strip；热带珊瑚礁群 / Tropical Coral Reef Garden |
| 科幻场景 | 3 | 外星植物研究标本 / Alien Botanical Specimen；轨道空间站水培塔 / Orbital Hydroponic Growing Tower；太阳帆深空探测器 / Solar Sail Deep Space Probe |
| 体育设施 | 3 | 拳击沙袋训练站 / Boxing Heavy Bag Station；迷你高尔夫推杆练习场 / Mini Golf Putting Green；田径跨栏训练组合 / Track Hurdle Training Set |
| 工具设备 | 4 | 台式砂带打磨机 / Bench Belt Sander；数字万用表检测套装 / Digital Multimeter Kit；液压汽车地牛千斤顶 / Hydraulic Floor Jack；移动焊接工具车 / Mobile Welding Tool Cart |
| 城市设施 | 4 | 智能快递自提柜墙 / Automated Parcel Locker Wall；停车场自动道闸 / Automatic Parking Barrier；街头报刊售卖亭 / Folding Newsstand Kiosk；儿童游乐旋转滑梯 / Playground Spiral Slide |
| 交通载具 | 4 | 机场行李牵引车 / Airport Baggage Tug；海上救援气垫船 / Coastal Rescue Hovercraft；山地缆车吊厢 / Mountain Cable Car Gondola；复古冰淇淋售卖车 / Retro Ice Cream Truck |

**本批计数：50 个新增，13 个类别，1357 个命名几何部件。**

## 逐模型设计、尺寸和源代码

### 建筑构件（architecture）

**城堡垛口墙模块 — Castle Crenellated Wall Module**：Medieval masonry battlement wall tile with merlons and arrow slit。规格 `3.20 × 2.76 × 0.81 m`；具名 Mesh **34** 个。唯一 ID：`architecture.castle-crenellated-wall-module.001`。源码：[`src/models/castle_crenellated_wall_module.js`](../src/models/castle_crenellated_wall_module.js)。

**玻璃温室单元 — Glass Greenhouse Bay**：Modular greenhouse with glass roof, irrigated planters and door。规格 `2.41 × 2.63 × 2.13 m`；具名 Mesh **28** 个。唯一 ID：`architecture.glass-greenhouse-bay.001`。源码：[`src/models/glass_greenhouse_bay.js`](../src/models/glass_greenhouse_bay.js)。

**建筑玻璃幕墙模块 — Modular Glass Curtain Wall**：Reusable office facade tile with aluminum mullions, glass panes and anchors。规格 `2.45 × 3.02 × 0.31 m`；具名 Mesh **28** 个。唯一 ID：`architecture.modular-glass-curtain-wall.001`。源码：[`src/models/modular_glass_curtain_wall.js`](../src/models/modular_glass_curtain_wall.js)。

**花园木质廊架 — Timber Garden Pergola**：Open timber garden pergola with posts, rafters and grapevine supports。规格 `3.14 × 2.52 × 2.67 m`；具名 Mesh **33** 个。唯一 ID：`architecture.timber-garden-pergola.001`。源码：[`src/models/timber_garden_pergola.js`](../src/models/timber_garden_pergola.js)。

### 卫浴（bathroom）

**小型雪松桑拿房 — Compact Cedar Sauna Cabin**：Cedar mini-sauna enclosure with glazing, stacked benches, heater and ventilation slats。规格 `1.73 × 2.20 × 1.44 m`；具名 Mesh **25** 个。唯一 ID：`bathroom.compact-cedar-sauna-cabin.001`。源码：[`src/models/compact_cedar_sauna_cabin.js`](../src/models/compact_cedar_sauna_cabin.js)。

**壁挂式电热毛巾架 — Heated Wall Towel Rail**：Stainless electric ladder-style towel heater with vertical pipes and towel drape。规格 `0.77 × 1.22 × 0.19 m`；具名 Mesh **20** 个。唯一 ID：`bathroom.heated-wall-towel-rail.001`。源码：[`src/models/heated_wall_towel_rail.js`](../src/models/heated_wall_towel_rail.js)。

**淋浴墙体内嵌置物格 — Recessed Shower Shelf Niche**：Tile-lined wall niche with two recessed compartments, skincare bottles and LED rim。规格 `0.91 × 1.42 × 0.27 m`；具名 Mesh **17** 个。唯一 ID：`bathroom.recessed-shower-shelf-niche.001`。源码：[`src/models/recessed_shower_shelf_niche.js`](../src/models/recessed_shower_shelf_niche.js)。

**足浴泡脚护理站 — Spa Foot Soak Station**：Compact foot soak chair and inset basin with massage rollers, controls and drainage。规格 `0.79 × 0.69 × 0.91 m`；具名 Mesh **17** 个。唯一 ID：`bathroom.spa-foot-soak-station.001`。源码：[`src/models/spa_foot_soak_station.js`](../src/models/spa_foot_soak_station.js)。

### 人物原型（characters）

**野外植物学家原型 — Field Botanist Mannequin**：Unrigged botanist with brim hat, herbarium case, field notebook and walking boots。规格 `1.02 × 1.89 × 0.80 m`；具名 Mesh **17** 个。唯一 ID：`characters.field-botanist-mannequin.001`。源码：[`src/models/field_botanist_mannequin.js`](../src/models/field_botanist_mannequin.js)。

**工业机械维修师原型 — Industrial Mechanic Mannequin**：Unrigged industrial mechanic with coveralls, safety visor, tool belt and wrench。规格 `1.09 × 1.92 × 0.75 m`；具名 Mesh **19** 个。唯一 ID：`characters.industrial-mechanic-mannequin.001`。源码：[`src/models/industrial_mechanic_mannequin.js`](../src/models/industrial_mechanic_mannequin.js)。

**交响乐团指挥人物原型 — Orchestra Conductor Mannequin**：Unrigged stage conductor in tailcoat carrying baton and pocket square。规格 `1.08 × 1.95 × 0.69 m`；具名 Mesh **22** 个。唯一 ID：`characters.orchestra-conductor-mannequin.001`。源码：[`src/models/orchestra_conductor_mannequin.js`](../src/models/orchestra_conductor_mannequin.js)。

**急救医护人员原型 — Paramedic Mannequin**：Unrigged paramedic wearing reflective uniform, medical satchel and portable radio。规格 `0.99 × 1.91 × 0.74 m`；具名 Mesh **21** 个。唯一 ID：`characters.paramedic-mannequin.001`。源码：[`src/models/paramedic_mannequin.js`](../src/models/paramedic_mannequin.js)。

### 装饰与摆件（decor）

**玻璃沙漠微景观 — Glass Desert Terrarium**：Glass succulent terrarium with sand layers and pebbles。规格 `0.58 × 0.61 × 0.48 m`；具名 Mesh **26** 个。唯一 ID：`decor.glass-desert-terrarium.001`。源码：[`src/models/glass_desert_terrarium.js`](../src/models/glass_desert_terrarium.js)。

**编织吊篮绿植 — Hanging Macrame Planter**：Braided macrame suspension with clay plant pot and trailing vines。规格 `0.79 × 1.36 × 0.75 m`；具名 Mesh **46** 个。唯一 ID：`decor.hanging-macrame-planter.001`。源码：[`src/models/hanging_macrame_planter.js`](../src/models/hanging_macrame_planter.js)。

**动感平衡艺术雕塑 — Kinetic Balance Sculpture**：Kinetic desktop mobile with counterweighted rods, fins and stone pedestal。规格 `1.25 × 1.65 × 0.87 m`；具名 Mesh **19** 个。唯一 ID：`decor.kinetic-balance-sculpture.001`。源码：[`src/models/kinetic_balance_sculpture.js`](../src/models/kinetic_balance_sculpture.js)。

**黄铜留声机 — Vintage Brass Gramophone**：Analog gramophone with brass horn, record, walnut plinth and crank。规格 `0.64 × 0.89 × 0.65 m`；具名 Mesh **16** 个。唯一 ID：`decor.vintage-brass-gramophone.001`。源码：[`src/models/vintage_brass_gramophone.js`](../src/models/vintage_brass_gramophone.js)。

### 电子设备（electronics）

**全向会议摄像机 — Omnidirectional Conference Camera**：360-degree conference camera with four radial lenses, sound pickup ring and indicator base。规格 `0.22 × 0.35 × 0.23 m`；具名 Mesh **22** 个。唯一 ID：`electronics.omnidirectional-conference-camera.001`。源码：[`src/models/omnidirectional_conference_camera.js`](../src/models/omnidirectional_conference_camera.js)。

**便携数字示波器 — Portable Digital Oscilloscope**：Benchtop waveform oscilloscope with dual probe ports, side knobs and carry handle。规格 `0.44 × 0.31 × 0.21 m`；具名 Mesh **25** 个。唯一 ID：`electronics.portable-digital-oscilloscope.001`。源码：[`src/models/portable_digital_oscilloscope.js`](../src/models/portable_digital_oscilloscope.js)。

**智能扫地清洁机器人 — Smart Robot Floor Vacuum**：Disk robot vacuum with lidar turret, bumper, wheel housings, brush and docking marker。规格 `0.37 × 0.21 × 0.37 m`；具名 Mesh **16** 个。唯一 ID：`electronics.smart-robot-floor-vacuum.001`。源码：[`src/models/smart_robot_floor_vacuum.js`](../src/models/smart_robot_floor_vacuum.js)。

**复古胶片放映机 — Vintage Film Projector**：Twin-reel analog movie projector with optical lens, feed rollers, drive housing and tripod。规格 `0.61 × 0.59 × 0.56 m`；具名 Mesh **27** 个。唯一 ID：`electronics.vintage-film-projector.001`。源码：[`src/models/vintage_film_projector.js`](../src/models/vintage_film_projector.js)。

### 家具（furniture）

**隔音阅读舱座椅 — Acoustic Reading Pod Chair**：High-sided private reading chair with upholstered alcove, cushion and integrated reading light。规格 `1.25 × 1.72 × 1.03 m`；具名 Mesh **15** 个。唯一 ID：`furniture.acoustic-reading-pod-chair.001`。源码：[`src/models/acoustic_reading_pod_chair.js`](../src/models/acoustic_reading_pod_chair.js)。

**阶梯式组合储物柜 — Modular Stair Storage Cabinet**：Three-level stepped storage cabinet with cubbies, drawer pulls and contrasting stair tread。规格 `1.65 × 1.56 × 0.49 m`；具名 Mesh **22** 个。唯一 ID：`furniture.modular-stair-storage-cabinet.001`。源码：[`src/models/modular_stair_storage_cabinet.js`](../src/models/modular_stair_storage_cabinet.js)。

**可倾斜建筑绘图桌 — Tilting Architect Drafting Desk**：Adjustable angled drafting desktop with angle locks, ruler tray and tubular height frame。规格 `1.45 × 1.37 × 0.93 m`；具名 Mesh **16** 个。唯一 ID：`furniture.tilting-architect-drafting-desk.001`。源码：[`src/models/tilting_architect_drafting_desk.js`](../src/models/tilting_architect_drafting_desk.js)。

**铁艺花园双人秋千 — Wrought Iron Garden Swing**：Outdoor A-frame two-person swing with chained bench, curved armrests and cushion slats。规格 `2.28 × 2.12 × 1.50 m`；具名 Mesh **24** 个。唯一 ID：`furniture.wrought-iron-garden-swing.001`。源码：[`src/models/wrought_iron_garden_swing.js`](../src/models/wrought_iron_garden_swing.js)。

### 厨房（kitchen）

**面包店展示货架 — Bakery Bread Display Rack**：Open bakery bread stand with angled shelves, loaves and price tags。规格 `1.33 × 1.48 × 0.70 m`；具名 Mesh **36** 个。唯一 ID：`kitchen.bakery-bread-display-rack.001`。源码：[`src/models/bakery_bread_display_rack.js`](../src/models/bakery_bread_display_rack.js)。

**竹制蒸笼点心组合 — Bamboo Dimsum Steamer Set**：Stacked bamboo dim sum steamers with woven rings, dumplings and serving tray。规格 `0.49 × 0.59 × 0.52 m`；具名 Mesh **26** 个。唯一 ID：`kitchen.bamboo-dimsum-steamer-set.001`。源码：[`src/models/bamboo_dimsum_steamer_set.js`](../src/models/bamboo_dimsum_steamer_set.js)。

**台式多功能料理机 — Countertop Food Processor**：Transparent blender processor with chopping blades, feed tube and LCD control。规格 `0.32 × 0.58 × 0.37 m`；具名 Mesh **15** 个。唯一 ID：`kitchen.countertop-food-processor.001`。源码：[`src/models/countertop_food_processor.js`](../src/models/countertop_food_processor.js)。

**智能电饭煲 — Digital Rice Cooker**：Smart kitchen rice cooker with sealed lid, digital display and serving scoop。规格 `0.42 × 0.43 × 0.39 m`；具名 Mesh **17** 个。唯一 ID：`kitchen.digital-rice-cooker.001`。源码：[`src/models/digital_rice_cooker.js`](../src/models/digital_rice_cooker.js)。

### 自然景观（nature）

**红树林气根小岛 — Mangrove Root Island**：Coastal mangrove with stilt roots, branching trunk and shallow blue tidal water。规格 `2.16 × 2.61 × 1.90 m`；具名 Mesh **41** 个。唯一 ID：`nature.mangrove-root-island.001`。源码：[`src/models/mangrove_root_island.js`](../src/models/mangrove_root_island.js)。

**积雪冷杉树林 — Snowy Fir Grove**：Cluster of five fir trees with multi-tiered conifer foliage, snow caps and icy terrain。规格 `2.75 × 3.21 × 2.17 m`；具名 Mesh **32** 个。唯一 ID：`nature.snowy-fir-grove.001`。源码：[`src/models/snowy_fir_grove.js`](../src/models/snowy_fir_grove.js)。

**向日葵农田地块 — Sunflower Farm Strip**：Three neat rows of sunflowers with layered petals, seed disks, stems and farmland furrows。规格 `1.98 × 1.71 × 1.56 m`；具名 Mesh **80** 个。唯一 ID：`nature.sunflower-farm-strip.001`。源码：[`src/models/sunflower_farm_strip.js`](../src/models/sunflower_farm_strip.js)。

**热带珊瑚礁群 — Tropical Coral Reef Garden**：Underwater reef tile with branching corals, tube sponges, sea grass and two stylized fish。规格 `2.04 × 1.17 × 1.70 m`；具名 Mesh **49** 个。唯一 ID：`nature.tropical-coral-reef-garden.001`。源码：[`src/models/tropical_coral_reef_garden.js`](../src/models/tropical_coral_reef_garden.js)。

### 科幻场景（scifi）

**外星植物研究标本 — Alien Botanical Specimen**：Fictional alien bioluminescent plant with spiral stalk, luminous pods and transparent sample vessel。规格 `1.34 × 2.04 × 1.18 m`；具名 Mesh **34** 个。唯一 ID：`scifi.alien-botanical-specimen.001`。源码：[`src/models/alien_botanical_specimen.js`](../src/models/alien_botanical_specimen.js)。

**轨道空间站水培塔 — Orbital Hydroponic Growing Tower**：Vertical space hydroponic grower with LED bars, stacked trays, transparent reservoir and leafy food crops。规格 `1.33 × 2.62 × 1.26 m`；具名 Mesh **81** 个。唯一 ID：`scifi.orbital-hydroponic-growing-tower.001`。源码：[`src/models/orbital_hydroponic_growing_tower.js`](../src/models/orbital_hydroponic_growing_tower.js)。

**太阳帆深空探测器 — Solar Sail Deep Space Probe**：Nonweapon space science probe with large reflective triangular sail panels, central satellite and telemetry antenna。规格 `3.16 × 3.29 × 0.92 m`；具名 Mesh **22** 个。唯一 ID：`scifi.solar-sail-deep-space-probe.001`。源码：[`src/models/solar_sail_deep_space_probe.js`](../src/models/solar_sail_deep_space_probe.js)。

### 体育设施（sports）

**拳击沙袋训练站 — Boxing Heavy Bag Station**：Standing exercise bag rig with steel top arm, chains, reinforced heavy bag and floor mat。规格 `1.28 × 2.45 × 1.11 m`；具名 Mesh **19** 个。唯一 ID：`sports.boxing-heavy-bag-station.001`。源码：[`src/models/boxing_heavy_bag_station.js`](../src/models/boxing_heavy_bag_station.js)。

**迷你高尔夫推杆练习场 — Mini Golf Putting Green**：Portable putting green with synthetic turf, two ball holes, flag, golf balls and edge rail。规格 `2.43 × 0.37 × 1.54 m`；具名 Mesh **24** 个。唯一 ID：`sports.mini-golf-putting-green.001`。源码：[`src/models/mini_golf_putting_green.js`](../src/models/mini_golf_putting_green.js)。

**田径跨栏训练组合 — Track Hurdle Training Set**：Three adjustable track hurdles with striped crossbars, stabilizer supports and numbered height marks。规格 `2.54 × 1.19 × 0.75 m`；具名 Mesh **36** 个。唯一 ID：`sports.track-hurdle-training-set.001`。源码：[`src/models/track_hurdle_training_set.js`](../src/models/track_hurdle_training_set.js)。

### 工具设备（tools）

**台式砂带打磨机 — Bench Belt Sander**：Stationary belt sander with abrasive loop, motor, work rest and dust exhaust port。规格 `0.58 × 0.63 × 0.81 m`；具名 Mesh **18** 个。唯一 ID：`tools.bench-belt-sander.001`。源码：[`src/models/bench_belt_sander.js`](../src/models/bench_belt_sander.js)。

**数字万用表检测套装 — Digital Multimeter Kit**：Handheld electrical multimeter with LCD, rotary range switch and pair of probe leads。规格 `0.24 × 0.51 × 0.23 m`；具名 Mesh **21** 个。唯一 ID：`tools.digital-multimeter-kit.001`。源码：[`src/models/digital_multimeter_kit.js`](../src/models/digital_multimeter_kit.js)。

**液压汽车地牛千斤顶 — Hydraulic Floor Jack**：Low-profile wheeled car jack with hydraulic cylinder, lifting saddle and long pumping handle。规格 `0.47 × 0.50 × 0.99 m`；具名 Mesh **14** 个。唯一 ID：`tools.hydraulic-floor-jack.001`。源码：[`src/models/hydraulic_floor_jack.js`](../src/models/hydraulic_floor_jack.js)。

**移动焊接工具车 — Mobile Welding Tool Cart**：Steel welding cart with gas cylinder cradle, hose reel, welding machine and pushbar。规格 `0.88 × 1.21 × 0.61 m`；具名 Mesh **18** 个。唯一 ID：`tools.mobile-welding-tool-cart.001`。源码：[`src/models/mobile_welding_tool_cart.js`](../src/models/mobile_welding_tool_cart.js)。

### 城市设施（urban）

**智能快递自提柜墙 — Automated Parcel Locker Wall**：Self-service parcel locker station with compartment doors, scanner and touchscreen。规格 `2.12 × 2.11 × 0.62 m`；具名 Mesh **41** 个。唯一 ID：`urban.automated-parcel-locker-wall.001`。源码：[`src/models/automated_parcel_locker_wall.js`](../src/models/automated_parcel_locker_wall.js)。

**停车场自动道闸 — Automatic Parking Barrier**：Parking lot gate with hinged striped beam, control cabinet, infrared sensor and road anchors。规格 `3.38 × 1.14 × 0.51 m`；具名 Mesh **24** 个。唯一 ID：`urban.automatic-parking-barrier.001`。源码：[`src/models/automatic_parking_barrier.js`](../src/models/automatic_parking_barrier.js)。

**街头报刊售卖亭 — Folding Newsstand Kiosk**：Outdoor press kiosk with folding newspaper racks, awning, price strip and shutters。规格 `1.97 × 2.34 × 1.35 m`；具名 Mesh **32** 个。唯一 ID：`urban.folding-newsstand-kiosk.001`。源码：[`src/models/folding_newsstand_kiosk.js`](../src/models/folding_newsstand_kiosk.js)。

**儿童游乐旋转滑梯 — Playground Spiral Slide**：Children's playground slide with raised deck, helical-style descending ramp, ladder and guard rails。规格 `2.38 × 2.64 × 2.26 m`；具名 Mesh **38** 个。唯一 ID：`urban.playground-spiral-slide.001`。源码：[`src/models/playground_spiral_slide.js`](../src/models/playground_spiral_slide.js)。

### 交通载具（vehicles）

**机场行李牵引车 — Airport Baggage Tug**：Small airport tug with tow hitch, cabin, orange safety beacon and four wheels。规格 `1.60 × 1.79 × 2.44 m`；具名 Mesh **19** 个。唯一 ID：`vehicles.airport-baggage-tug.001`。源码：[`src/models/airport_baggage_tug.js`](../src/models/airport_baggage_tug.js)。

**海上救援气垫船 — Coastal Rescue Hovercraft**：Rescue hovercraft with inflatable skirt, cabin, fan guard, searchlight and deck equipment。规格 `2.51 × 1.91 × 3.86 m`；具名 Mesh **21** 个。唯一 ID：`vehicles.coastal-rescue-hovercraft.001`。源码：[`src/models/coastal_rescue_hovercraft.js`](../src/models/coastal_rescue_hovercraft.js)。

**山地缆车吊厢 — Mountain Cable Car Gondola**：Suspended passenger gondola with panoramic glass, overhead hanger and cable clamp。规格 `1.82 × 2.53 × 1.98 m`；具名 Mesh **16** 个。唯一 ID：`vehicles.mountain-cable-car-gondola.001`。源码：[`src/models/mountain_cable_car_gondola.js`](../src/models/mountain_cable_car_gondola.js)。

**复古冰淇淋售卖车 — Retro Ice Cream Truck**：Pastel mobile ice cream van with service hatch, striped canopy, freezer counter and wheels。规格 `2.13 × 2.61 × 4.02 m`；具名 Mesh **28** 个。唯一 ID：`vehicles.retro-ice-cream-truck.001`。源码：[`src/models/retro_ice_cream_truck.js`](../src/models/retro_ice_cream_truck.js)。

## 可重复构建与验收

```bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm install --no-audit --no-fund
node scripts/validate_models.mjs
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
python3 scripts/smoke_p2.py
npm run build
npm run test:gallery
npm run test:remote
```

**CI 的明确验收目标**：235 个真正生成的 WebP 缩略图、235 个 AVIF 缩略图（总共 470 张），以及 235 × 3 LOD = **705 个** Meshopt GLB 变体；另需验证全部对象的 SHA-256 哈希、解码、SQLite keyset 游标分页、浏览器 Viewer 和 MCP v2 检索。本表仅为预期目标；实际通过状态请参照相应 GitHub Actions run 日志。

## 结构和兼容约定

- 主 Catalog 位于 `catalog/models.json`，V0.7 独立资产索引位于 `catalog/collections/v07.json`。其字段包括双语命名、设计意图、完整相对源码路径、生成函数、尺寸、Mesh 计数。
- V0.1–V0.6 的 **185 个已有 ID** 不更名、不覆盖，新增条目只追加。V0.4、V0.5、V0.6 的历史集合单元测试保持激活。
- 搜索 API 单页上限 100，因而全库验收必须分页至游标结束，检查 **235 条且无重复**，不能只读第一页。
- GitHub Pages 是静态站点，生产环境外部 S3/MinIO 与 Python API 不是 Pages 的内置服务；本地内容寻址镜像通过不等于云端部署已完成。
- 构建好的缩略图和 GLB 二进制在 GitHub Actions 生成、作为工件归档/部署，不应宣称这些二进制均已提交到 Git 源码树。

## 质量与后续工作

现阶段为可重用 **stylized / low-poly 场景原型**，使用实质性的命名几何装配，尚未包含专业 UV 展开、自动骨骼绑定、精细碰撞、机械运动学或全部模型的人工艺术审核。建议未来引入模块对齐锚点、按场景比例校准、材质统一、画面视觉差异检测与持续端到端压力测试。
