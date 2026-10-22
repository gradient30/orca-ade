# Orca 是什么？ {#what-is-orca}

Orca 是一款桌面 IDE，用来并排运行多个 AI 编程 Agent。每个任务拥有自己的 git worktree、自己的 Agent 终端，以及自己的浏览器标签——这样你可以把工作扇出给 Claude Code、Codex、Cursor CLI 等，而不用 stash、来回切分支，也不会打断心流。

> **先看日常入口**
> 想按「高频 / 核心 / 官方推荐」和标准工程路径学：从 [特性手册](/docs/features) 开始。只想每天最高频 8 件事：看 [快速手册](/docs/quick-guide)。按岗位切入：看 [按角色上手](/docs/roles)。

## 什么时候该用 Orca {#when-to-use-orca}

- 你想让三个 Agent 并行尝试同一个缺陷，然后选出赢家。
- 你想在真正交付之前，认真审查 AI 生成的 diff。
- 你已经为 Claude Code、Codex 或 Cursor CLI 付费，想在一个地方编排它们。
- 你想让 Agent 跑在远程——SSH、自托管 Orca 服务器，或按需虚拟机——同时不放弃 IDE。

## 它为谁而做 {#who-its-for}

Orca 面向已经以写代码为生、把 AI 当杠杆而不是替代品的人。它假定你会读 diff、在意提交，并保持 worktree 整洁。如果你在找无代码工具，Orca 不是那个。

## Orca 不是什么 {#what-orca-is-not}

- **不是模型。** Orca 运行你已经在用的 Agent——自带 Claude、Codex 或 OpenCode 订阅即可。
- **不是 git 替代品。** 每个 worktree 都是真正的 git worktree。你可以随时 `cd` 进去用普通 git。
- **不是托管 VPS 产品。** Orca 默认跑在你的桌面。远程算力使用你控制的机器和云账号——[SSH 目标](/docs/ssh)、[自托管 Orca 服务器](/docs/remote-servers)，或 [Cloud VM / 按工作区环境](/docs/ways-to-run#4-cloud-vms-per-workspace-environments)。

> **下一步**
> 前往 [安装](/docs/install)，然后走一遍 [第一次三 Agent 会话](/docs/first-session)——这是整份文档里最重要的一页。准备把 Agent 从笔记本上挪走时，从 [运行 Orca 的方式](/docs/ways-to-run) 开始。
