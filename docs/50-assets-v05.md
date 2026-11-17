# 3D Worlds V0.5 — 50 个全新原创三维模型

## 版本定位

V0.5 是 `3D Worlds` 的第三批扩容集合：在保留 **85 个已有资产** 的前提下，新增 **50 个彼此独立的原创 Three.js 程序化几何模型**，使主 Catalog 达到 **135 个模型、13 个分类**。

本批资产面向网页互动场景、游戏环境、教学演示和 Agent 自动检索复用。每个模型以实际具名 Mesh 组合生成，而非空文件、占位图或未经授权的第三方 GLB。所有新模型的元数据、源码与几何配方都可复用；尺寸以米表示，Y 轴向上，地面锚点为 y≈0。

> 边界：本集合是原创风格化 low-poly 场景原型；不代表真实商品外观、工业 CAD、可直接生产制造的水密网格、经过 UV 烘焙的专业游戏美术、经过人体骨架绑定的动画角色。几何检验不代替人工视觉美术评审。

## 全类别设计清单

| 分类 | 新增数量 | 模型设计（中文 / English） |
|---|---:|---|
| 建筑构件 | 4 | 双扇推拉玻璃门 / Sliding Glass Patio Door；木结构屋架 / Timber Roof Truss；模块化石柱 / Decorative Stone Column；工业旋转楼梯 / Industrial Spiral Staircase |
| 卫浴 | 4 | 壁挂皂液机 / Wall Soap Dispenser；藤编洗衣篮 / Woven Laundry Hamper；双挂钩毛巾挂架 / Double Towel Hook；独立陶瓷坐浴盆 / Compact Ceramic Bidet |
| 人物原型 | 4 | 消防员人物原型 / Firefighter Mannequin；建筑工人人物原型 / Construction Worker Mannequin；养蜂人防护服原型 / Beekeeper Mannequin；厨师人物原型 / Chef Mannequin |
| 装饰与软装 | 4 | 几何图案编织地毯 / Woven Geometric Area Rug；山水风景装饰画 / Framed Mountain Landscape；折叠屏风隔断 / Folding Room Divider；雕塑陶瓷台灯 / Sculpted Ceramic Table Lamp |
| 电子设备 | 4 | 桌面熔融沉积3D打印机 / Desktop FDM 3D Printer；双声道书架音箱 / Stereo Bookshelf Speakers；手持对讲机 / Rugged Handheld Radio；吊顶半球监控摄像机 / Ceiling Security Camera |
| 家具 | 4 | 电动升降办公桌 / Electric Standing Desk；折叠露营椅 / Folding Camping Chair；玄关立式衣帽架 / Hallway Coat Tree；软包储物脚凳 / Tufted Storage Ottoman |
| 厨房家电 | 4 | 台式玻璃搅拌机 / Countertop Glass Blender；不锈钢沥水碗碟架 / Stainless Dish Drying Rack；厨房移动餐车 / Mobile Kitchen Service Cart；数显空气炸锅 / Compact Digital Air Fryer |
| 自然景观 | 4 | 秋季红枫树 / Autumn Maple Tree；野花草甸地块 / Wildflower Meadow Patch；苔藓倒木 / Mossy Fallen Log；沙漠沙丘地块 / Desert Sand Dune Patch |
| 科幻道具 | 3 | 六轮科考探测车 / Six Wheel Exploration Rover；低温休眠舱 / Cryogenic Sleep Pod；全息指挥控制台 / Holographic Command Console |
| 体育设施 | 3 | 便携式足球球门 / Portable Football Goal；户外乒乓球台 / Outdoor Table Tennis；健身哑铃存放架 / Gym Dumbbell Storage Rack |
| 工具器材 | 4 | 园艺独轮手推车 / Steel Garden Wheelbarrow；木工手锯 / Carpenter Hand Saw；工业焊接防护面罩 / Industrial Welding Mask；伸缩卷尺 / Retractable Tape Measure |
| 城市设施 | 4 | 公共自行车停放架 / Public Bicycle Parking Rack；复古街头邮筒 / Heritage Street Mailbox；人行横道标识牌 / Pedestrian Crosswalk Sign；道路安全防撞柱组 / Roadside Safety Bollards |
| 交通载具 | 4 | 急救救护车 / Medical Rescue Ambulance；电动货运三轮车 / Cargo Electric Tricycle；低地板城市公交车 / Low-Floor City Bus；沿海小型渔船 / Coastal Fishing Dinghy |

**共 50 个新模型，13 个分类；现有总数为 135。**

## 详细几何设计、尺寸与独立源码

### 建筑构件（architecture）

**双扇推拉玻璃门 · Sliding Glass Patio Door** — Modular double sliding patio door with aluminum tracks, glazing and dual handles.。标称外包络 `2.21 × 2.30 × 0.17 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/sliding_glass_patio_door.js`](../src/models/sliding_glass_patio_door.js)；稳定 ID：`architecture.sliding-glass-patio-door.001`。

**木结构屋架 · Timber Roof Truss** — Exposed triangular roof truss with tie-beam, angled rafters and king post.。标称外包络 `4.20 × 1.76 × 0.34 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/timber_roof_truss.js`](../src/models/timber_roof_truss.js)；稳定 ID：`architecture.timber-roof-truss.001`。

**模块化石柱 · Decorative Stone Column** — Stacked decorative stone column with fluted shaft, capital, and chamfered foot.。标称外包络 `0.64 × 2.73 × 0.63 m`；由 **20 个具名 Mesh 部件**构成。源码：[`src/models/decorative_stone_column.js`](../src/models/decorative_stone_column.js)；稳定 ID：`architecture.decorative-stone-column.001`。

**工业旋转楼梯 · Industrial Spiral Staircase** — Circular steel stair tower with radial treads, central pole, handrail and platforms.。标称外包络 `2.02 × 3.16 × 2.07 m`；由 **58 个具名 Mesh 部件**构成。源码：[`src/models/industrial_spiral_staircase.js`](../src/models/industrial_spiral_staircase.js)；稳定 ID：`architecture.industrial-spiral-staircase.001`。

### 卫浴（bathroom）

**壁挂皂液机 · Wall Soap Dispenser** — Wall-mounted refillable dispenser with pump head, translucent reservoir and drip tray.。标称外包络 `0.19 × 0.31 × 0.17 m`；由 **8 个具名 Mesh 部件**构成。源码：[`src/models/wall_soap_dispenser.js`](../src/models/wall_soap_dispenser.js)；稳定 ID：`bathroom.wall-soap-dispenser.001`。

**藤编洗衣篮 · Woven Laundry Hamper** — Cylindrical wicker hamper with repeated woven bands, soft lid and side grips.。标称外包络 `0.49 × 0.74 × 0.49 m`；由 **20 个具名 Mesh 部件**构成。源码：[`src/models/woven_laundry_hamper.js`](../src/models/woven_laundry_hamper.js)；稳定 ID：`bathroom.woven-laundry-hamper.001`。

**双挂钩毛巾挂架 · Double Towel Hook** — Porcelain wall plate, two metal prongs and hanging striped hand towels.。标称外包络 `0.39 × 0.26 × 0.24 m`；由 **11 个具名 Mesh 部件**构成。源码：[`src/models/double_towel_hook.js`](../src/models/double_towel_hook.js)；稳定 ID：`bathroom.double-towel-hook.001`。

**独立陶瓷坐浴盆 · Compact Ceramic Bidet** — Standalone compact bidet with ceramic rim, bowl, drain and metal faucet assembly.。标称外包络 `0.39 × 0.42 × 0.65 m`；由 **10 个具名 Mesh 部件**构成。源码：[`src/models/compact_ceramic_bidet.js`](../src/models/compact_ceramic_bidet.js)；稳定 ID：`bathroom.compact-ceramic-bidet.001`。

### 人物原型（characters）

**消防员人物原型 · Firefighter Mannequin** — Unrigged firefighter with protective helmet, reflective jacket, boots and oxygen tank.。标称外包络 `0.95 × 1.91 × 0.65 m`；由 **19 个具名 Mesh 部件**构成。源码：[`src/models/firefighter_mannequin.js`](../src/models/firefighter_mannequin.js)；稳定 ID：`characters.firefighter-mannequin.001`。

**建筑工人人物原型 · Construction Worker Mannequin** — Unrigged worker with hardhat, reflective vest, utility belt and protective boots.。标称外包络 `0.92 × 1.93 × 0.64 m`；由 **17 个具名 Mesh 部件**构成。源码：[`src/models/construction_worker_mannequin.js`](../src/models/construction_worker_mannequin.js)；稳定 ID：`characters.construction-worker-mannequin.001`。

**养蜂人防护服原型 · Beekeeper Mannequin** — Unrigged beekeeper in pale coveralls with broad mesh veil, gloves and boots.。标称外包络 `0.97 × 1.89 × 0.73 m`；由 **20 个具名 Mesh 部件**构成。源码：[`src/models/beekeeper_mannequin.js`](../src/models/beekeeper_mannequin.js)；稳定 ID：`characters.beekeeper-mannequin.001`。

**厨师人物原型 · Chef Mannequin** — Unrigged culinary character with tall toque, double-button jacket and apron.。标称外包络 `0.96 × 1.94 × 0.65 m`；由 **20 个具名 Mesh 部件**构成。源码：[`src/models/chef_mannequin.js`](../src/models/chef_mannequin.js)；稳定 ID：`characters.chef-mannequin.001`。

### 装饰与软装（decor）

**几何图案编织地毯 · Woven Geometric Area Rug** — Rectangular woven rug with layered central diamonds, perimeter bands, and fringe.。标称外包络 `1.83 × 0.04 × 2.48 m`；由 **37 个具名 Mesh 部件**构成。源码：[`src/models/woven_geometric_area_rug.js`](../src/models/woven_geometric_area_rug.js)；稳定 ID：`decor.woven-geometric-area-rug.001`。

**山水风景装饰画 · Framed Mountain Landscape** — Wall art with timber frame, layered geometric mountain landscape and sun disc.。标称外包络 `1.15 × 0.78 × 0.06 m`；由 **11 个具名 Mesh 部件**构成。源码：[`src/models/framed_mountain_landscape.js`](../src/models/framed_mountain_landscape.js)；稳定 ID：`decor.framed-mountain-landscape.001`。

**折叠屏风隔断 · Folding Room Divider** — Three articulated wood lattice panels with opaque textile inserts and hinges.。标称外包络 `2.29 × 1.82 × 0.52 m`；由 **28 个具名 Mesh 部件**构成。源码：[`src/models/folding_room_divider.js`](../src/models/folding_room_divider.js)；稳定 ID：`decor.folding-room-divider.001`。

**雕塑陶瓷台灯 · Sculpted Ceramic Table Lamp** — Ceramic ceramic-tiered lamp with shade, finial, cord and brass switch.。标称外包络 `0.43 × 0.71 × 0.44 m`；由 **9 个具名 Mesh 部件**构成。源码：[`src/models/sculpted_ceramic_table_lamp.js`](../src/models/sculpted_ceramic_table_lamp.js)；稳定 ID：`decor.sculpted-ceramic-table-lamp.001`。

### 电子设备（electronics）

**桌面熔融沉积3D打印机 · Desktop FDM 3D Printer** — Open-frame 3D printer with gantry, heated bed, printhead, filament reel and small print.。标称外包络 `0.51 × 0.66 × 0.52 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/desktop_fdm_3d_printer.js`](../src/models/desktop_fdm_3d_printer.js)；稳定 ID：`electronics.desktop-fdm-3d-printer.001`。

**双声道书架音箱 · Stereo Bookshelf Speakers** — Matched speaker pair with woven grille, tweeter, bass driver and volume dial.。标称外包络 `0.82 × 0.46 × 0.25 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/stereo_bookshelf_speakers.js`](../src/models/stereo_bookshelf_speakers.js)；稳定 ID：`electronics.stereo-bookshelf-speakers.001`。

**手持对讲机 · Rugged Handheld Radio** — Portable radio with flexible antenna, push-to-talk key, speaker grid and channel selector.。标称外包络 `0.15 × 0.39 × 0.09 m`；由 **15 个具名 Mesh 部件**构成。源码：[`src/models/rugged_handheld_radio.js`](../src/models/rugged_handheld_radio.js)；稳定 ID：`electronics.rugged-handheld-radio.001`。

**吊顶半球监控摄像机 · Ceiling Security Camera** — Ceiling-mounted dome camera with black lens, rotating hood and indicator light.。标称外包络 `0.29 × 0.20 × 0.29 m`；由 **10 个具名 Mesh 部件**构成。源码：[`src/models/ceiling_security_camera.js`](../src/models/ceiling_security_camera.js)；稳定 ID：`electronics.ceiling-security-camera.001`。

### 家具（furniture）

**电动升降办公桌 · Electric Standing Desk** — Dual motor lifting columns, oak worktop, crossbar and height controls.。标称外包络 `1.50 × 1.22 × 0.77 m`；由 **14 个具名 Mesh 部件**构成。源码：[`src/models/electric_standing_desk.js`](../src/models/electric_standing_desk.js)；稳定 ID：`furniture.electric-standing-desk.001`。

**折叠露营椅 · Folding Camping Chair** — Portable X-frame chair with contrasting fabric seat and arm slings.。标称外包络 `0.74 × 0.99 × 0.73 m`；由 **12 个具名 Mesh 部件**构成。源码：[`src/models/folding_camping_chair.js`](../src/models/folding_camping_chair.js)；稳定 ID：`furniture.folding-camping-chair.001`。

**玄关立式衣帽架 · Hallway Coat Tree** — Freestanding pole with tiered coat hooks, umbrella ring and round base.。标称外包络 `0.76 × 1.91 × 0.75 m`；由 **15 个具名 Mesh 部件**构成。源码：[`src/models/hallway_coat_tree.js`](../src/models/hallway_coat_tree.js)；稳定 ID：`furniture.hallway-coat-tree.001`。

**软包储物脚凳 · Tufted Storage Ottoman** — Upholstered lift-top storage bench, quilted buttons and four wooden legs.。标称外包络 `1.14 × 0.53 × 0.49 m`；由 **14 个具名 Mesh 部件**构成。源码：[`src/models/tufted_storage_ottoman.js`](../src/models/tufted_storage_ottoman.js)；稳定 ID：`furniture.tufted-storage-ottoman.001`。

### 厨房家电（kitchen）

**台式玻璃搅拌机 · Countertop Glass Blender** — Kitchen blender with control dial, tapered clear jug, lid and rotating blade assembly.。标称外包络 `0.24 × 0.46 × 0.27 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/countertop_glass_blender.js`](../src/models/countertop_glass_blender.js)；稳定 ID：`kitchen.countertop-glass-blender.001`。

**不锈钢沥水碗碟架 · Stainless Dish Drying Rack** — Dish drying rack with perforated drip tray, vertical plate dividers and utensil basket.。标称外包络 `0.57 × 0.35 × 0.41 m`；由 **21 个具名 Mesh 部件**构成。源码：[`src/models/stainless_dish_drying_rack.js`](../src/models/stainless_dish_drying_rack.js)；稳定 ID：`kitchen.stainless-dish-drying-rack.001`。

**厨房移动餐车 · Mobile Kitchen Service Cart** — Rolling two-tier service cart with handle, casters, stainless frame and utensils.。标称外包络 `0.94 × 1.01 × 0.58 m`；由 **16 个具名 Mesh 部件**构成。源码：[`src/models/mobile_kitchen_service_cart.js`](../src/models/mobile_kitchen_service_cart.js)；稳定 ID：`kitchen.mobile-kitchen-service-cart.001`。

**数显空气炸锅 · Compact Digital Air Fryer** — Basket-style air fryer with front digital control panel, removable basket handle and vents.。标称外包络 `0.34 × 0.38 × 0.37 m`；由 **15 个具名 Mesh 部件**构成。源码：[`src/models/compact_digital_air_fryer.js`](../src/models/compact_digital_air_fryer.js)；稳定 ID：`kitchen.compact-digital-air-fryer.001`。

### 自然景观（nature）

**秋季红枫树 · Autumn Maple Tree** — Branching maple with red-orange layered canopy and exposed trunk roots.。标称外包络 `3.10 × 3.42 × 2.70 m`；由 **25 个具名 Mesh 部件**构成。源码：[`src/models/autumn_maple_tree.js`](../src/models/autumn_maple_tree.js)；稳定 ID：`nature.autumn-maple-tree.001`。

**野花草甸地块 · Wildflower Meadow Patch** — Ground vegetation cluster with diverse stem heights, petals, and low grasses.。标称外包络 `1.75 × 0.67 × 1.38 m`；由 **66 个具名 Mesh 部件**构成。源码：[`src/models/wildflower_meadow_patch.js`](../src/models/wildflower_meadow_patch.js)；稳定 ID：`nature.wildflower-meadow-patch.001`。

**苔藓倒木 · Mossy Fallen Log** — Rotated fallen trunk with bark bands, exposed cut ends and moss islands.。标称外包络 `2.07 × 0.66 × 0.72 m`；由 **18 个具名 Mesh 部件**构成。源码：[`src/models/mossy_fallen_log.js`](../src/models/mossy_fallen_log.js)；稳定 ID：`nature.mossy-fallen-log.001`。

**沙漠沙丘地块 · Desert Sand Dune Patch** — Layered sand mound with wind ripples and dry shrub accents.。标称外包络 `2.28 × 0.83 × 1.75 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/desert_sand_dune_patch.js`](../src/models/desert_sand_dune_patch.js)；稳定 ID：`nature.desert-sand-dune-patch.001`。

### 科幻道具（scifi）

**六轮科考探测车 · Six Wheel Exploration Rover** — Six-wheel noncombat robotic rover with solar panels, suspension, stereo camera and sample bin.。标称外包络 `2.00 × 1.66 × 2.65 m`；由 **27 个具名 Mesh 部件**构成。源码：[`src/models/six_wheel_exploration_rover.js`](../src/models/six_wheel_exploration_rover.js)；稳定 ID：`scifi.six-wheel-exploration-rover.001`。

**低温休眠舱 · Cryogenic Sleep Pod** — Spacecraft sleep pod with mattress, curved translucent lid, locks and control touchscreen.。标称外包络 `1.04 × 1.18 × 2.52 m`；由 **20 个具名 Mesh 部件**构成。源码：[`src/models/cryogenic_sleep_pod.js`](../src/models/cryogenic_sleep_pod.js)；稳定 ID：`scifi.cryogenic-sleep-pod.001`。

**全息指挥控制台 · Holographic Command Console** — Sci-fi holographic workbench with six-by-six light grid, controls and flank modules.。标称外包络 `1.76 × 1.49 × 1.00 m`；由 **30 个具名 Mesh 部件**构成。源码：[`src/models/holographic_command_console.js`](../src/models/holographic_command_console.js)；稳定 ID：`scifi.holographic-command-console.001`。

### 体育设施（sports）

**便携式足球球门 · Portable Football Goal** — Training soccer goal with metal framing, net and diagonal brace supports.。标称外包络 `3.18 × 2.04 × 1.28 m`；由 **40 个具名 Mesh 部件**构成。源码：[`src/models/portable_football_goal.js`](../src/models/portable_football_goal.js)；稳定 ID：`sports.portable-football-goal.001`。

**户外乒乓球台 · Outdoor Table Tennis** — Regulation-shaped fixed public ping-pong table with center net and paddle.。标称外包络 `2.74 × 0.91 × 1.55 m`；由 **23 个具名 Mesh 部件**构成。源码：[`src/models/outdoor_table_tennis.js`](../src/models/outdoor_table_tennis.js)；稳定 ID：`sports.outdoor-table-tennis.001`。

**健身哑铃存放架 · Gym Dumbbell Storage Rack** — A-frame gym rack holding six matched dumbbells on three tiers.。标称外包络 `1.37 × 1.13 × 0.61 m`；由 **26 个具名 Mesh 部件**构成。源码：[`src/models/gym_dumbbell_storage_rack.js`](../src/models/gym_dumbbell_storage_rack.js)；稳定 ID：`sports.gym-dumbbell-storage-rack.001`。

### 工具器材（tools）

**园艺独轮手推车 · Steel Garden Wheelbarrow** — Outdoor single wheelbarrow with steel tray, handles and kickstand.。标称外包络 `0.80 × 0.81 × 1.57 m`；由 **14 个具名 Mesh 部件**构成。源码：[`src/models/steel_garden_wheelbarrow.js`](../src/models/steel_garden_wheelbarrow.js)；稳定 ID：`tools.steel-garden-wheelbarrow.001`。

**木工手锯 · Carpenter Hand Saw** — Riveted wooden grip and traditional toothed steel hand saw.。标称外包络 `0.67 × 0.26 × 0.10 m`；由 **18 个具名 Mesh 部件**构成。源码：[`src/models/carpenters_hand_saw.js`](../src/models/carpenters_hand_saw.js)；稳定 ID：`tools.carpenters-hand-saw.001`。

**工业焊接防护面罩 · Industrial Welding Mask** — Protective welding visor with dark viewing pane, vents and headband.。标称外包络 `0.29 × 0.43 × 0.34 m`；由 **12 个具名 Mesh 部件**构成。源码：[`src/models/industrial_welding_mask.js`](../src/models/industrial_welding_mask.js)；稳定 ID：`tools.industrial-welding-mask.001`。

**伸缩卷尺 · Retractable Tape Measure** — Compact metric tape with polymer case, extended measurement ribbon and hook.。标称外包络 `0.21 × 0.14 × 0.29 m`；由 **13 个具名 Mesh 部件**构成。源码：[`src/models/retractable_tape_measure.js`](../src/models/retractable_tape_measure.js)；稳定 ID：`tools.retractable-tape-measure.001`。

### 城市设施（urban）

**公共自行车停放架 · Public Bicycle Parking Rack** — Four steel bicycle parking loops anchored to a concrete curb.。标称外包络 `2.09 × 0.84 × 0.72 m`；由 **25 个具名 Mesh 部件**构成。源码：[`src/models/public_bicycle_parking_rack.js`](../src/models/public_bicycle_parking_rack.js)；稳定 ID：`urban.public-bicycle-parking-rack.001`。

**复古街头邮筒 · Heritage Street Mailbox** — Red public mailbox with letter aperture, postal emblem and service door.。标称外包络 `0.65 × 1.55 × 0.59 m`；由 **9 个具名 Mesh 部件**构成。源码：[`src/models/heritage_street_mailbox.js`](../src/models/heritage_street_mailbox.js)；稳定 ID：`urban.heritage-street-mailbox.001`。

**人行横道标识牌 · Pedestrian Crosswalk Sign** — Reflective street sign with pedestrian symbol and mounting post.。标称外包络 `0.84 × 2.68 × 0.30 m`；由 **12 个具名 Mesh 部件**构成。源码：[`src/models/pedestrian_crosswalk_sign.js`](../src/models/pedestrian_crosswalk_sign.js)；稳定 ID：`urban.pedestrian-crosswalk-sign.001`。

**道路安全防撞柱组 · Roadside Safety Bollards** — Three heavy steel bollards with reflective yellow stripes.。标称外包络 `1.73 × 0.94 × 0.46 m`；由 **16 个具名 Mesh 部件**构成。源码：[`src/models/roadside_safety_bollards.js`](../src/models/roadside_safety_bollards.js)；稳定 ID：`urban.roadside-safety-bollards.001`。

### 交通载具（vehicles）

**急救救护车 · Medical Rescue Ambulance** — Rescue vehicle with raised medical roof, cross emblems, beacons and emergency lamps.。标称外包络 `2.22 × 2.66 × 4.56 m`；由 **24 个具名 Mesh 部件**构成。源码：[`src/models/medical_rescue_ambulance.js`](../src/models/medical_rescue_ambulance.js)；稳定 ID：`vehicles.medical-rescue-ambulance.001`。

**电动货运三轮车 · Cargo Electric Tricycle** — Three-wheel cargo tricycle with front fork, electric battery and wooden flatbed.。标称外包络 `1.26 × 1.43 × 2.60 m`；由 **15 个具名 Mesh 部件**构成。源码：[`src/models/cargo_electric_tricycle.js`](../src/models/cargo_electric_tricycle.js)；稳定 ID：`vehicles.cargo-electric-tricycle.001`。

**低地板城市公交车 · Low-Floor City Bus** — Urban low-floor bus with sectional windows, passenger doors and route marquee.。标称外包络 `2.54 × 3.04 × 8.65 m`；由 **32 个具名 Mesh 部件**构成。源码：[`src/models/low_floor_city_bus.js`](../src/models/low_floor_city_bus.js)；稳定 ID：`vehicles.low-floor-city-bus.001`。

**沿海小型渔船 · Coastal Fishing Dinghy** — Open-top fishing dinghy with side rails, seating benches, nets and outboard motor.。标称外包络 `1.72 × 1.28 × 3.30 m`；由 **19 个具名 Mesh 部件**构成。源码：[`src/models/coastal_fishing_dinghy.js`](../src/models/coastal_fishing_dinghy.js)；稳定 ID：`vehicles.coastal-fishing-dinghy.001`。

## 构建、验收和发布流程

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

**验收目标**：135 张 WebP 缩略图 + 135 张 AVIF 缩略图 + 405 个 Meshopt GLB（LOD0、LOD1、LOD2 每档 135 个）。所有二进制由自动流水线从模型源码实际渲染、导出、压缩、计算哈希；不直接将第三方库中的 GLB 作为这批资产。

`catalog/collections/v05.json` 保存 50 个新资产的元数据、原始设计说明、真实命名部件计数及生成函数名；`catalog/models.json` 是所有 135 个资产的主数据源。SQLite、MCP、GitHub Pages 和 P2 内容寻址对象存储从统一主目录派生，保证同一个稳定资产 ID 在所有检索与下载界面中保持一致。

对于超过 100 条的目录，`scripts/smoke_p2.py` 按游标读取所有分页并核对唯一性；此前只查询一次（上限 100）的测试方法不再适用。

## 素材许可与后续演进

- **许可**：此批由参数化几何原生构建，按仓库 MIT 许可登记；没有引入第三方受限原始贴图、外购 GLB、真实品牌 LOGO。
- **模型质量**：自动测试覆盖尺寸、地面放置、Mesh 命名唯一性、预览渲染、可导出性、LOD 完整性和文件哈希；更高阶的美术风格一致性与真机 FPS 测试仍需单独进行。
- **下一步**：为角色原型增加可复用骨架，给载具轮组增加可动枢轴，为家居增加统一材质参数，给建筑构件增加模块化拼装点与碰撞代理网格。
