# 3D Worlds · V0.4 40 个原创模型设计与交付说明

本次从原有 **45 个**模型增至 **85 个**，沿用原有 **13 个分类**，新增 **40 个**可编辑程序化 Three.js 资产。

**资产定位：** 低面数、风格化、可编辑的游戏场景原型和环境物件；并非经过认证的工程 CAD、真实产品扫描件、专业角色 Rig 或用于制造的闭合网格。所有新增资产均为源码构建的原创原型，许可为 MIT。

**规范：** 米为长度单位、Y 轴向上、地面最低点位于 Y≈0、物体在水平面居中；每个模型有稳定 ID、命名的 Mesh、双语名称、用途标签、来源和尺寸。纹理使用 Three.js 材质和几何形状，并未引入第三方版权贴图。

## 完整新增清单

| 类别 | 数量 | 资产（中文／英文） | 典型游戏用途 |
|---|---:|---|---|
| 建筑构件 (`architecture`) | 3 | 砖砌门洞 / Masonry Brick Archway；建筑工字钢立柱 / Structural Steel Column；坡屋顶天窗 / Pitched Roof Skylight | architecture |
| 卫浴 (`bathroom`) | 3 | 步入式雨淋花洒 / Walk-in Rain Shower；背光浴室镜 / Backlit Vanity Mirror；落地毛巾架 / Freestanding Towel Rack | interior |
| 人物角色 (`characters`) | 3 | 宇航员人物原型 / Astronaut Mannequin；骑士盔甲人物原型 / Armored Knight Mannequin；服务机器人角色原型 / Service Robot Character | character |
| 家居装饰 (`decor`) | 3 | 黄铜吊灯 / Brass Pendant Light；陶瓷花瓶插花 / Ceramic Flower Bouquet；复古挂钟 / Midcentury Wall Clock | interior |
| 电子设备 (`electronics`) | 3 | 复古街机柜 / Retro Arcade Cabinet；无线网络路由器 / Wi-Fi Router；双摇杆游戏手柄 / Dual Stick Gamepad | interior |
| 家具 (`furniture`) | 4 | 模块化转角沙发 / Modular Sectional Sofa；滚轮文件柜 / Rolling File Cabinet；墙面悬浮置物架 / Floating Wall Shelf；木质摇椅 / Wooden Rocking Chair | interior、office |
| 厨房家电 (`kitchen`) | 3 | 专业意式咖啡机 / Professional Espresso Machine；实木厨房中岛 / Butcher Block Island；不锈钢抽油烟机 / Stainless Range Hood | interior |
| 自然环境 (`nature`) | 3 | 盛开樱花树 / Flowering Cherry Tree；热带椰子树 / Tropical Coconut Palm；河床鹅卵石群 / River Pebble Cluster | environment |
| 科幻道具 (`scifi`) | 3 | 科幻反应堆能量核心 / Reactor Energy Core；古代传送门 / Ancient Portal Gateway；货运装载机甲 / Cargo Loading Mech | game |
| 运动设施 (`sports`) | 2 | 便携式网球网 / Portable Tennis Net；街头滑板 / Street Skateboard | sports |
| 工具器材 (`tools`) | 3 | 无绳电钻 / Cordless Power Drill；活动扳手 / Adjustable Steel Wrench；折叠人字梯 / Folding Step Ladder | tool |
| 城市设施 (`urban`) | 3 | 城市公交候车亭 / Glass Bus Shelter；太阳能停车计时器 / Solar Parking Meter；城市分类回收箱 / Color-Coded Recycling Bin | urban |
| 交通载具 (`vehicles`) | 4 | 城市配送厢式货车 / Compact Delivery Van；通勤城市自行车 / Commuter City Bicycle；仓储叉车 / Warehouse Forklift；海岸单桅帆船 / Coastal Sailboat | vehicle |

**总计：** 40 个新增模型；覆盖 13 个分类。

## 分资产设计要点和源码

### 建筑构件 (architecture)

**砖砌门洞 / Masonry Brick Archway** — Brick piers, lintel, keystone and threshold。尺寸：`2.22 × 2.64 × 0.48 m`；用途：architecture。源码：[`src/models/masonry_brick_archway.js`](../src/models/masonry_brick_archway.js)。

**建筑工字钢立柱 / Structural Steel Column** — Steel web, flanges, gussets and baseplate anchor bolts。尺寸：`0.54 × 3.18 × 0.51 m`；用途：architecture。源码：[`src/models/structural_steel_column.js`](../src/models/structural_steel_column.js)。

**坡屋顶天窗 / Pitched Roof Skylight** — Pitch glazing, ridge, hinges and metal mullions。尺寸：`1.40 × 0.47 × 1.03 m`；用途：architecture。源码：[`src/models/pitched_roof_skylight.js`](../src/models/pitched_roof_skylight.js)。

### 卫浴 (bathroom)

**步入式雨淋花洒 / Walk-in Rain Shower** — Glass enclosure, shower controls and rain showerhead。尺寸：`1.13 × 2.22 × 1.04 m`；用途：interior。源码：[`src/models/walk_in_rain_shower.js`](../src/models/walk_in_rain_shower.js)。

**背光浴室镜 / Backlit Vanity Mirror** — Mirrored face, LED bands and proximity sensor。尺寸：`0.79 × 1.04 × 0.12 m`；用途：interior。源码：[`src/models/backlit_vanity_mirror.js`](../src/models/backlit_vanity_mirror.js)。

**落地毛巾架 / Freestanding Towel Rack** — Vertical stands, towel bars and draped textile。尺寸：`0.86 × 1.26 × 0.36 m`；用途：interior。源码：[`src/models/freestanding_towel_rack.js`](../src/models/freestanding_towel_rack.js)。

### 人物角色 (characters)

**宇航员人物原型 / Astronaut Mannequin** — Helmet, visor, oxygen backpack, limb assemblies and control panel。尺寸：`0.91 × 1.84 × 0.62 m`；用途：character。源码：[`src/models/astronaut_mannequin.js`](../src/models/astronaut_mannequin.js)。

**骑士盔甲人物原型 / Armored Knight Mannequin** — Helmet, chestplate, pauldrons, greaves and armored boots。尺寸：`0.88 × 1.89 × 0.50 m`；用途：character。源码：[`src/models/armored_knight_mannequin.js`](../src/models/armored_knight_mannequin.js)。

**服务机器人角色原型 / Service Robot Character** — Display torso, wheeled base, antenna and two grippers。尺寸：`0.82 × 1.49 × 0.78 m`；用途：character。源码：[`src/models/service_robot_character.js`](../src/models/service_robot_character.js)。

### 家居装饰 (decor)

**黄铜吊灯 / Brass Pendant Light** — Suspended conical shade, opal lamp and support cord。尺寸：`0.66 × 1.24 × 0.66 m`；用途：interior。源码：[`src/models/brass_pendant_light.js`](../src/models/brass_pendant_light.js)。

**陶瓷花瓶插花 / Ceramic Flower Bouquet** — Ceramic vase with seven branching flowering stems。尺寸：`0.58 × 0.99 × 0.53 m`；用途：interior。源码：[`src/models/ceramic_flower_bouquet.js`](../src/models/ceramic_flower_bouquet.js)。

**复古挂钟 / Midcentury Wall Clock** — Clock face, twelve hour markers and decorative hands。尺寸：`0.61 × 0.61 × 0.11 m`；用途：interior。源码：[`src/models/midcentury_wall_clock.js`](../src/models/midcentury_wall_clock.js)。

### 电子设备 (electronics)

**复古街机柜 / Retro Arcade Cabinet** — Arcade marquee, display, joystick and coin compartment。尺寸：`0.74 × 1.76 × 0.82 m`；用途：interior。源码：[`src/models/retro_arcade_cabinet.js`](../src/models/retro_arcade_cabinet.js)。

**无线网络路由器 / Wi-Fi Router** — Triple-antenna network box, indicators and ventilation。尺寸：`0.37 × 0.24 × 0.25 m`；用途：interior。源码：[`src/models/wifi_router.js`](../src/models/wifi_router.js)。

**双摇杆游戏手柄 / Dual Stick Gamepad** — Twin analog sticks, d-pad, face buttons and triggers。尺寸：`0.44 × 0.16 × 0.27 m`；用途：interior。源码：[`src/models/dual_stick_gamepad.js`](../src/models/dual_stick_gamepad.js)。

### 家具 (furniture)

**模块化转角沙发 / Modular Sectional Sofa** — Separate sectional seats, chaise extension, back pillows and feet。尺寸：`2.55 × 0.96 × 1.70 m`；用途：interior。源码：[`src/models/modular_sectional_sofa.js`](../src/models/modular_sectional_sofa.js)。

**滚轮文件柜 / Rolling File Cabinet** — Three drawers, handles and four rolling castors。尺寸：`0.49 × 0.72 × 0.55 m`；用途：office。源码：[`src/models/rolling_file_cabinet.js`](../src/models/rolling_file_cabinet.js)。

**墙面悬浮置物架 / Floating Wall Shelf** — Floating timber planks, brackets, books and a display plant。尺寸：`1.34 × 0.72 × 0.25 m`；用途：interior。源码：[`src/models/floating_wall_shelf.js`](../src/models/floating_wall_shelf.js)。

**木质摇椅 / Wooden Rocking Chair** — Rocking runners, seat, armrests and back slats。尺寸：`0.73 × 1.05 × 0.95 m`；用途：interior。源码：[`src/models/wooden_rocking_chair.js`](../src/models/wooden_rocking_chair.js)。

### 厨房家电 (kitchen)

**专业意式咖啡机 / Professional Espresso Machine** — Dual brewing heads, portafilters, display and steam wand。尺寸：`0.65 × 0.49 × 0.53 m`；用途：interior。源码：[`src/models/professional_espresso_machine.js`](../src/models/professional_espresso_machine.js)。

**实木厨房中岛 / Butcher Block Island** — Worktop, pantry cabinets, metal handles and food-prep surface。尺寸：`1.84 × 0.96 × 0.96 m`；用途：interior。源码：[`src/models/butcher_block_island.js`](../src/models/butcher_block_island.js)。

**不锈钢抽油烟机 / Stainless Range Hood** — Vent chimney, filter slats and integrated task lights。尺寸：`0.98 × 0.82 × 0.65 m`；用途：interior。源码：[`src/models/stainless_range_hood.js`](../src/models/stainless_range_hood.js)。

### 自然环境 (nature)

**盛开樱花树 / Flowering Cherry Tree** — Branching blossom canopy and seasonal floral color。尺寸：`2.80 × 3.25 × 2.50 m`；用途：environment。源码：[`src/models/flowering_cherry_tree.js`](../src/models/flowering_cherry_tree.js)。

**热带椰子树 / Tropical Coconut Palm** — Six radial palm fronds, coconut clusters and palm trunk。尺寸：`2.95 × 4.10 × 2.95 m`；用途：environment。源码：[`src/models/tropical_coconut_palm.js`](../src/models/tropical_coconut_palm.js)。

**河床鹅卵石群 / River Pebble Cluster** — Natural pebble scatter with variations in stone color and form。尺寸：`1.50 × 0.36 × 1.05 m`；用途：environment。源码：[`src/models/river_pebble_cluster.js`](../src/models/river_pebble_cluster.js)。

### 科幻道具 (scifi)

**科幻反应堆能量核心 / Reactor Energy Core** — Futuristic chamber with energy rings and cooling spokes。尺寸：`1.55 × 1.82 × 1.48 m`；用途：game。源码：[`src/models/reactor_energy_core.js`](../src/models/reactor_energy_core.js)。

**古代传送门 / Ancient Portal Gateway** — Stone gateway and concentric portal energy effect。尺寸：`2.58 × 3.64 × 0.71 m`；用途：game。源码：[`src/models/ancient_portal_gateway.js`](../src/models/ancient_portal_gateway.js)。

**货运装载机甲 / Cargo Loading Mech** — Industrial utility mech with cargo grippers and hydraulic supports。尺寸：`1.62 × 2.71 × 1.42 m`；用途：game。源码：[`src/models/cargo_loading_mech.js`](../src/models/cargo_loading_mech.js)。

### 运动设施 (sports)

**便携式网球网 / Portable Tennis Net** — Freestanding net with posts, taut threads and side supports。尺寸：`3.08 × 0.95 × 0.30 m`；用途：sports。源码：[`src/models/portable_tennis_net.js`](../src/models/portable_tennis_net.js)。

**街头滑板 / Street Skateboard** — Maple deck, grip tape, two axles and four wheels。尺寸：`0.29 × 0.14 × 0.83 m`；用途：sports。源码：[`src/models/street_skateboard.js`](../src/models/street_skateboard.js)。

### 工具器材 (tools)

**无绳电钻 / Cordless Power Drill** — Motor housing, chuck, trigger, handle and battery。尺寸：`0.26 × 0.37 × 0.43 m`；用途：tool。源码：[`src/models/cordless_power_drill.js`](../src/models/cordless_power_drill.js)。

**活动扳手 / Adjustable Steel Wrench** — Long handle, fixed jaw, sliding jaw and adjustment wheel。尺寸：`0.25 × 0.58 × 0.08 m`；用途：tool。源码：[`src/models/adjustable_steel_wrench.js`](../src/models/adjustable_steel_wrench.js)。

**折叠人字梯 / Folding Step Ladder** — Articulated frame with steps, feet and safety braces。尺寸：`0.74 × 1.60 × 1.17 m`；用途：tool。源码：[`src/models/folding_step_ladder.js`](../src/models/folding_step_ladder.js)。

### 城市设施 (urban)

**城市公交候车亭 / Glass Bus Shelter** — Canopy, glazing, bench, curb and route sign。尺寸：`3.38 × 2.82 × 1.57 m`；用途：urban。源码：[`src/models/glass_bus_shelter.js`](../src/models/glass_bus_shelter.js)。

**太阳能停车计时器 / Solar Parking Meter** — Solar panel, payment display and slim pedestal。尺寸：`0.38 × 1.56 × 0.34 m`；用途：urban。源码：[`src/models/solar_parking_meter.js`](../src/models/solar_parking_meter.js)。

**城市分类回收箱 / Color-Coded Recycling Bin** — Three color-coded bin compartments and collection slots。尺寸：`1.05 × 1.35 × 0.55 m`；用途：urban。源码：[`src/models/color_coded_recycling_bin.js`](../src/models/color_coded_recycling_bin.js)。

### 交通载具 (vehicles)

**城市配送厢式货车 / Compact Delivery Van** — Cargo compartment, cab, glazing, mirrors and four wheels。尺寸：`2.12 × 2.40 × 4.38 m`；用途：vehicle。源码：[`src/models/compact_delivery_van.js`](../src/models/compact_delivery_van.js)。

**通勤城市自行车 / Commuter City Bicycle** — Commuter frame, dual wheels, rear basket and pedals。尺寸：`0.72 × 1.28 × 1.78 m`；用途：vehicle。源码：[`src/models/commuter_city_bicycle.js`](../src/models/commuter_city_bicycle.js)。

**仓储叉车 / Warehouse Forklift** — Lifting mast, load forks, drive wheels and rollbar。尺寸：`1.46 × 2.31 × 2.72 m`；用途：vehicle。源码：[`src/models/warehouse_forklift.js`](../src/models/warehouse_forklift.js)。

**海岸单桅帆船 / Coastal Sailboat** — Single mast, hull, boom, two triangular sails and cabin。尺寸：`1.42 × 4.15 × 3.64 m`；用途：vehicle。源码：[`src/models/coastal_sailboat.js`](../src/models/coastal_sailboat.js)。

## 代码与元数据分层

- 统一版本清单：[`catalog/collections/v04.json`](../catalog/collections/v04.json)，收录 40 个资产 ID、源文件、尺寸与用途。
- 全库主目录：[`catalog/models.json`](../catalog/models.json)，总计 85 条资产；保留旧资产 ID 不变。
- 程序化构建引擎：[`src/models/recipe_engine.js`](../src/models/recipe_engine.js)，支持盒体、球体、圆柱体、圆锥、环面、线性杆件和三角面片。
- 每个模型有独立 `src/models/<slug_underscored>.js`；没有新增第三方模型二进制或需要额外许可的纹理文件。
- 既有 SQLite + FTS5、MCP、P0 WebP/AVIF 及 P1 Meshopt LOD0/1/2 流水线继续覆盖全库。

## 验收与发布

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

**预期自动产物（全部 85 个均为程序化资产）：**

- WebP 缩略图：85 张；AVIF 缩略图：85 张。
- 可下载 GLB：85 × LOD0、LOD1、LOD2，共 **255 个优化变体**。
- SQLite 主目录：85 个资产、13 个分类、全文索引。
- 浏览器静态页面：85 个模型卡片，可查看原始 3D 模型、获取 GLB 或复制生成代码。
- 本地 API：稳定分页、分类检索；MCP 继续基于 SQLite 检索和读取源代码。

这些数字是全套流水线的**验收目标**，不是对尚未运行步骤的完成宣称。实际质量检查以 Actions 报告为准。

## 质量边界和后续工作

此次资产以真实 3D 程序化源码为主，自动化检查聚焦：模型能生成、边界盒合理、无重复 Mesh 名称、三角面数量可控、导出/LOD/浏览器链路可工作。没有给人物绑定骨架，也没有精细制作金属 PBR 贴图、纹理 UV、物理碰撞壳、LOD 视觉感知评估或人工美术评审。

下一阶段可优先针对可复用频次高的交通车辆、建筑模块和家具建立材质/颜色参数面板与碰撞包围盒；对载具的轮组和人物骨骼，再增加显式动效结构。
