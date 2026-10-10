# Cybertruck Madness '98

[English](Readme.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [粵語](README.yue-Hant-HK.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md)

一隻用 Three.js 整嘅實驗性開放世界瀏覽器駕駛遊戲，靈感嚟自九十年代尾電腦駕駛遊戲嗰種自由又有啲瘋狂嘅感覺。

**即刻玩：** https://cybertruckmadness.vercel.app

> 遊戲程式碼用 [MIT License](LICENSE) 授權，會繼續保持開源。不過，3D 模型同音樂嘅授權係分開計嘅；部分現有素材嘅使用同公開再分發權利仲未核實。詳情睇 [ASSETS.md](ASSETS.md)。

## 呢隻係咩遊戲？

喺 Cybertruck Madness '98 入面，你可以喺一大片程序生成嘅地形上面揸車、甩尾、執金環、管理電量，仲可以靠指南針同地圖搵路，最後解鎖撤離目標。

目前版本有：

- Three.js 3D 畫面
- 10,000 × 10,000 嘅程序生成地形
- 街機風格嘅駕駛同甩尾物理
- 目前由 `fbx/moto.fbx` 載入嘅 3D 車輛
- 500 個可以收集嘅金環
- 執齊 450 個金環（90%）先會解鎖出口
- 每執一個環可以回復 20 點電量
- 指南針會指向最近嘅金環，之後指向出口
- 可以展開嘅地圖，睇到剩低嘅金環、車輛位置同出口
- 大約 15,000 棵程序生成嘅樹，同 200 塊石頭
- 鍵盤操控同手機觸控
- 支援嘅手機可以提供震動回饋
- 追尾鏡頭同俯視鏡頭
- 引擎、甩尾、收集同落地音效
- ShallowWaters 背景音樂
- 任務完成同重新開始功能

## 點解值得睇原始碼？

遊戲唔使大型框架或者建置流程，開發者可以直接研究各個系統：

- 用數學方法產生地形高度，唔使對地形做射線偵測
- 用 `THREE.InstancedMesh` 畫大量樹木
- 自訂街機式駕駛同甩尾邏輯
- 手機觸控轉向、煞車同震動
- Canvas 地圖、指南針同最近目標搜尋
- Web Audio 產生嘅引擎、甩尾同收集音效
- 金環、電池、撤離目標嘅狀態管理

## 點樣操作？

### 電腦

- `W` / `Arrow Up`：加速
- `S` / `Arrow Down`：倒車
- `A` / `Arrow Left`：向左轉
- `D` / `Arrow Right`：向右轉
- `Space`：煞車 / 甩尾
- 用畫面上嘅 HUD 按鈕開地圖、轉鏡頭、控制音樂同音效

### 手機

- 左邊觸控區：加速同轉向
- 右邊觸控區：按住煞車 / 甩尾
- HUD 按鈕：地圖、鏡頭、音樂同音效
- 如果裝置支援，收集、甩尾同碰撞時會有震動回饋

## 專案而家點樣運作？

主要檔案：

```text
.
├── Readme.md
├── index.html
├── fbx/
│   ├── cybertruck.glb
│   └── moto.fbx
└── music/
```

目前大部分遊戲邏輯都喺 `index.html`。咁樣比較容易閱讀，但日後亦可以逐個系統拆成獨立模組，方便維護。

目前真正載入嘅車輛係 `fbx/moto.fbx`。另外一個 `fbx/cybertruck.glb` 有放喺倉庫，但遊戲冇使用佢。**兩個檔案嘅再分發權利都未清楚核實**；詳細來源同授權狀況喺 [ASSETS.md](ASSETS.md)。

## 喺自己部電腦執行

遊戲用 ES modules 同瀏覽器載入素材，所以要透過本機 Web 伺服器開啟，唔好直接雙擊 `index.html`。

例如：

```bash
python -m http.server 8000
```

然後喺瀏覽器開：

```text
http://localhost:8000
```

目前唔需要額外建置步驟。

## 點樣幫手改進？

歡迎具體、可以測試嘅貢獻，例如：

- 改善駕駛手感、抓地力同甩尾
- 加入斜坡、跳躍、特技分數
- 新任務、計時賽、檢查點
- 改善地形、樹木同環境變化
- 加入手掣支援
- 改善手機操控同無障礙功能
- 效能分析、碰撞處理、音效
- 改善地圖、導航同程式架構
- 用圖、草圖或者設計提案提供新玩法

睇 [ROADMAP.md](ROADMAP.md)、[ARCHITECTURE.md](ARCHITECTURE.md) 同 [CONTRIBUTING.md](CONTRIBUTING.md) 了解詳情。大改動最好先開 Issue，細小而清楚嘅 Pull Request 會比較易審核。

## 社群 Cybertruck 模型同貢獻者署名

**招募 3D 藝術家同開發者：** [參與製作原創 Cybertruck 車輛模型（Issue #15）](https://github.com/Joenasriani/cybertruck-madness/issues/15)。

**Cybertruck 會繼續係隻遊戲嘅主角車輛。** 首先需要一個可用、權利清晰、適合瀏覽器運行嘅 Cybertruck 模型。之後可以再加入唔同款式，同埋可選擇車輛嘅功能。目前**仲未有正式接受嘅替代模型**。

獲接受嘅模型創作者同整合開發者，會喺**遊戲入面同 README 分別署名**。可以用慣用名稱、GitHub 帳號，或者要求匿名。每款接受嘅模型都會標明創作者。

遊戲程式碼繼續採用 MIT。模型同其他媒體素材有自己嘅授權，必須容許修改、公開再分發同商業使用。較推薦原創模型採用 CC0 或 CC BY 4.0，但仍然需要核實擁有權同可能涉及嘅商標、設計權利。

**目前社群貢獻者：** 等待第一款通過權利核實同技術測試嘅模型；接受後先會加入實際署名。

## 授權同第三方素材

程式碼採用 [MIT License](LICENSE)。呢個授權**唔會自動覆蓋** 3D 模型、音樂、商標同其他獨立素材。

現有車輛素材嘅再分發權利仍未確認。以前向 TurboSquid 申請相關使用許可並無成功，唔可以當成已經獲得授權。詳情睇 [ASSETS.md](ASSETS.md)。

## 免責聲明

呢個係非官方嘅實驗性粉絲作品，同 Tesla、Microsoft 或《Motocross Madness》嘅創作者冇隸屬、認可或者贊助關係。

## 參與貢獻

開 Pull Request 之前，請先睇 [CONTRIBUTING.md](CONTRIBUTING.md)。如果你發現 Bug、效能問題或者有具體新構思，而改動規模比較大，請先開 Issue。
