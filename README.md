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

构建产物为纯静态文件，可部署到 GitHub Pages / Vercel / Netlify 等任意静态托管。

## 许可

站点内容（文案、照片）版权归作者所有。
