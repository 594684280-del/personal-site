# 朔冰 · 个人网站

> 实施项目经理 · CRM / ERP 数字化交付 · 擅长 AI 技术应用

一个轻量的个人站点，包含 **首页 / 关于我 / 我的文章 / 我的作品** 四个板块。

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- lucide-react（图标）

## 本地运行

```bash
npm install --legacy-peer-deps   # 首次安装（vite 8 存在 peer 依赖提示）
npm run dev                      # 打开 http://localhost:3000
```

其他命令：

```bash
npm run build     # 生产构建，产物在 dist/
npm run preview   # 预览构建结果
npm run lint      # TypeScript 类型检查
```

## 目录结构

```
src/
├── App.tsx                 # 页面骨架与四个板块的顺序
├── components/
│   ├── Navbar.tsx          # 顶部导航（四个 tab）
│   ├── HeroSection.tsx     # 首页首屏（头像 + 简介）
│   ├── WhatIDoSection.tsx  # 我擅长什么
│   ├── TechnologiesSection.tsx
│   ├── ProjectsSection.tsx # 我的作品
│   ├── AboutSection.tsx    # 关于我
│   ├── ArticlesSection.tsx # 我的文章
│   └── ...                 # 详情弹窗、联系弹窗、页脚
└── data/portfolioData.ts   # 全站内容数据（只需改这一个文件）
public/
├── avatar.png              # 头像
└── assets/                 # 其他图片
```

## 如何更新内容

站点的所有文案、项目、文章、经历集中存放在 `src/data/portfolioData.ts`：

| 数据 | 说明 |
| --- | --- |
| `PROFILE_DATA` | 姓名、头衔、所在地、联系方式、个人简介 |
| `WHAT_I_DO_SERVICES` | 首页「我擅长什么」三张卡片 |
| `TECH_SKILLS` | 技能标签 |
| `FEATURED_PROJECTS` | 我的作品列表 |
| `ARTICLES` | 我的文章列表 |
| `CAREER_TIMELINE` | 关于我中的职业经历 |

> 注意：站内标记为「待补充」的内容（邮箱、公司名称、项目案例细节等）需替换为真实信息后再对外发布，避免展示不完整或未经确认的信息。

## 部署

### 方案：Cloudflare Pages + 自有域名

构建产物为纯静态文件，由 Cloudflare Pages 从 GitHub 自动构建发布。

**一次性配置：**

1. 登录 https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 选择仓库 `personal-site`，构建配置如下：

   | 配置项 | 值 |
   | --- | --- |
   | Framework preset | `Vite` |
   | Build command | `npm install --legacy-peer-deps && npm run build` |
   | Build output directory | `dist` |
   | 环境变量 | `NODE_VERSION` = `22`（可选，写入 `wrangler.toml` 亦可） |

   > `--legacy-peer-deps` 必须保留：Vite 8 与 `@tailwindcss/vite` 存在 peer 依赖告警，不加会构建失败。

3. 点 **Save and Deploy**，首次构建约 1–2 分钟，得到 `xxx.pages.dev` 临时域名
4. **Custom domains** → **Set up a custom domain** → 填入你的域名
5. 把你的域名 NS 指向 Cloudflare（在 Cloudflare 添加站点后会给出两个 NS），等待生效

**之后每个 `git push` 到 `main` 都会自动构建并发布。**

### 目录说明

- `wrangler.toml`：构建命令与输出目录（Cloudflare 可直接读取）
- `public/_redirects`：单页应用路由回退，刷新子路径不会 404

### 关于国内访问

- Cloudflare 免费版在中国大陆无节点，流量通常由香港 / 东京 / 新加坡承接，延迟约 80–200ms
- 启用代理（橙云）后才有 CDN 加速，纯 DNS 模式不加速
- `*.pages.dev` 默认域名在国内访问不稳定，建议绑定自有域名
- 需要更稳的境内速度需 ICP 备案 + 境内 CDN，成本与流程另计

## 许可

站点内容（文案、照片）版权归作者所有。
