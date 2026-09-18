# Orca 中文使用手册

[Orca ADE](https://www.onorca.dev/docs) 官方文档的 1:1 中文手册站点，另附一份面向日常高频操作的「快速手册」。

**在线阅读：** [https://gradient30.github.io/orca-ade/](https://gradient30.github.io/orca-ade/)

- 官方文档：[onorca.dev/docs](https://www.onorca.dev/docs)
- 英文源：[stablyai/orca](https://github.com/stablyai/orca) `docs/site/content/docs`
- 本仓库：**非官方**译本与阅读器，命令、产品名、代码块与 `/docs/...` 路径保持与官网一致
- 发布：GitHub Pages（`main` 推送后自动构建；工作流 `.github/workflows/pages.yml`）
- 顶栏「更新」：打开手册时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases) 最近 3 次桌面版（跳过 mobile / 预发布），译成中文；点进去是[完整日志](src/content/zh/changelog.md)。结果在浏览器缓存 6 小时。已有中文底稿的版本不会被英文机翻覆盖。
- 仓库每 6 小时用 GitHub Actions 核对官方 tag，有新版本才回写内置译本
- 风格：明 / 暗 / 彩，切换结果保存在浏览器本地

## 内容

| 部分 | 说明 |
| --- | --- |
| 官网 57 页 1:1 | 安装、工作树、Agent、CLI、评审、浏览器、远程……完整目录与英文锚点 `{#id}` |
| [快速手册](src/content/zh/quick-guide.md) | 引导介绍、核心特性、日常高频：用法 / 真实示例 / 应用场景 / 价值收益 |
| [更新日志](src/content/zh/changelog.md) | 打开时抓取官方最新三次 Release 的完整中文译本 |
| [本站架构](src/content/zh/architecture.md) | 手册框架图、Release 数据更新驱动图 |
| [对照表](src/content/zh/sitemap.md) | 官网 57 页 SHA + Release 正文指纹，只亮有差异的行 |
| [命令使用](src/content/zh/cli/commands.md) | 按当前 `orca help` 分类的全部命令：中文说明、用法、可跑示例 |

常用入口：

- `/` — 官网首页译本
- `/docs/quick-guide` — 快速手册（QASai / qasai-probes 双仓执行+复核流程也写在这里）
- `/docs/changelog` — 更新日志（顶栏「更新」进入）
- `/docs/architecture` — 本站架构（框架图 + 数据更新驱动图）
- `/docs/sitemap` — 对照表（官网手册 SHA 与 Release 指纹）
- `/docs/cli/commands` — 命令使用（按 `orca help` 分类的全部命令）
- `/docs/install`、`/docs/model/worktrees`、`/docs/agents/hibernation` 等与官网路径对齐

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认监听 `0.0.0.0:8080`。生产构建（Vercel）：

```bash
npm run build
```

GitHub Pages 静态构建：

```bash
npm run build:pages
```

同步官方 Release 底稿：

```bash
npm run sync:releases
npm run sync:map
```

`sync:map` 只更新官网 SHA / Release 正文指纹（`translatedAtSha` 不动）。汉化完某一页或某个版本后：

```bash
npm run sync:map -- --mark-translated browser/profiles,cli/orchestration,v1.4.203
```

产物在 `.output/public`。

## 技术栈

TanStack Start + Vite + Tailwind v4。正文是 `src/content/zh/**/*.md`，由 `src/lib/docs/catalog.ts` 建目录、`src/components/docs/Markdown.tsx` 渲染（标题 `{#english-id}`、表格、代码、`mermaid` 架构图、哈希滚动）。

## 许可与归属

Orca / Orca ADE 是 [Stably](https://www.onorca.dev) 的产品。本仓库仅提供中文阅读与日常速查，不替代官方文档。
