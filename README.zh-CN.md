# Cybertruck Madness '98

[English](Readme.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [粵語](README.yue-Hant-HK.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md)

一款使用 Three.js 构建的实验性开放世界浏览器驾驶游戏，灵感来自 90 年代末 PC 驾驶游戏那种混乱又自由的感觉。

**立即游玩：** https://cybertruckmadness.vercel.app

> 游戏源代码采用 MIT 许可证，并将保持开源。3D 模型和音频资源采用独立许可，部分现有资产的使用及再分发权利尚未核实。请参阅 [ASSETS.md](ASSETS.md)。

## 这是什么

Cybertruck Madness '98 会把你放进一片大型程序化地形中。你可以驾驶、漂移、收集圆环、管理电量，通过指南针/地图导航，并最终解锁撤离目标。

当前版本包含：

- Three.js 渲染
- 大型程序化地形
- 街机式驾驶与漂移物理
- Cybertruck 3D 车辆
- 500 个可收集圆环
- 电池 / 充电机制
- 指南针导航
- 可展开地图
- 键盘控制
- 移动端触控
- 镜头切换
- 引擎、漂移、收集和落地音效
- 撤离 / 任务完成目标

## 操作

### 桌面端

- `W` / `Arrow Up`: 加速
- `S` / `Arrow Down`: 倒车
- `A` / `Arrow Left`: 左转
- `D` / `Arrow Right`: 右转
- `Space`: 刹车 / 漂移
- 使用 HUD 按钮控制地图、镜头、音乐和 SFX

### 移动端

- 左侧触控区域: 移动和转向
- 右侧触控区域: 按住进行刹车 / 漂移
- HUD 按钮控制地图、镜头、音乐和 SFX

## 当前架构

项目目前刻意保持简单：

```text
.
├── Readme.md
├── index.html
├── fbx/
│   ├── cybertruck.glb
│   └── moto.fbx
└── music/
```

大部分游戏逻辑目前都位于 `index.html` 中。这让项目容易检查，同时也形成了一个明确的贡献机会：在不改变现有可玩行为的前提下，逐步将系统模块化。

## 本地运行

项目使用 ES modules 和浏览器加载的资源，因此请通过本地 Web 服务器运行，而不是直接打开 `index.html`。

例如：

```bash
python -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

目前不需要构建步骤。

## 帮助把它做得更进一步

适合贡献的方向包括：

- 更好的车辆物理与漂移表现
- 坡道、跳跃、特技计分与技巧
- 新目标与任务类型
- 计时赛和检查点系统
- 程序化地形改进
- 生物群系与环境多样性
- 手柄支持
- 移动端控制改进
- 性能分析与优化
- 碰撞改进
- 音频打磨
- 更多无障碍设置
- 回放 / 计分系统
- 地图和导航改进
- 逐步模块化 `index.html`

参见 [ROADMAP.md](ROADMAP.md) 和 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 贡献理念

这个项目应该保持可玩、实验性，并带一点奇怪。

目标不是把它变成一个通用框架。贡献应该让游戏更有趣、更具技术价值、更容易扩展，或更容易运行。

相比大规模重写，我们更欢迎小而明确的 Pull Request。

## 项目状态

当前状态：**实验性 / 社区准备阶段**

在线游戏可运行。源代码采用 MIT 许可证；贡献流程和资源权利文档仍在改进。

## 社区 Cybertruck 模型与贡献者署名

**招募 3D 艺术家与开发者：** [贡献原创 Cybertruck 模型](https://github.com/Joenasriani/cybertruck-madness/issues/15)。

Cybertruck 将继续作为游戏的核心可驾驶车辆。首要目标是取得一款权利明确、适合游戏运行的模型。之后可增加多个版本及车辆选择功能。目前尚无获准使用的替代模型。

被接受的模型作者和集成开发者将在游戏内及 README 中分别获得署名。可选择展示姓名、GitHub 用户名或匿名。

游戏源代码继续使用 MIT 许可证。模型及媒体资产需单独授权。许可须允许修改、公开再分发和商业用途。现有资产权利仍有待核实，请参阅 [ASSETS.md](ASSETS.md)。

## 许可与第三方资源

源代码采用 [MIT License](LICENSE)。

该许可证适用于软件源代码，不会自动授予对随附 3D 模型、音乐、名称、商标或其他单独来源资源的权利。当前来源与权利状态请参阅 [ASSETS.md](ASSETS.md)。

## 免责声明

这是一个非官方实验性粉丝项目。它与 Tesla、Microsoft 或 Motocross Madness 的创作者不存在隶属、背书或赞助关系。

## 贡献

提交 Pull Request 前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

如果你发现 Bug、性能问题、游戏玩法问题，或有符合项目方向的具体想法，且改动较大，请先开 Issue。
