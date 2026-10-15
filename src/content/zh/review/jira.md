# Jira 议题抽屉 {#jira-items-drawer}

Jira 在任务抽屉里与 GitHub 和 Linear 并列。浏览 Jira 议题、更新它们，并从任意议题创建 worktree，而不离开 Orca。

## 连接 Jira 站点 {#connect-a-jira-site}

1. 打开 **Tasks** 侧栏条目，从源选择器里选 **Jira**——即使还没保存任何凭据，Jira 默认也和 GitHub、Linear 并列。
2. 点 **Connect Jira**。会出现 **Connect Jira site** 对话框。
3. 选择 **Cloud** 或 **Self-hosted (Server / Data Center)**。

**Cloud**

- **Jira Cloud site URL** — 例如 `https://example.atlassian.net`。
- **Atlassian email** — 你 Atlassian 账户上的地址。对 scoped tokens 可选：留空则使用 Bearer 认证。
- **Atlassian API token** — 在 [id.atlassian.com → Security → API tokens](https://id.atlassian.com/manage-profile/security/api-tokens) 创建，可带或不带 scopes。

Scoped tokens 需要 `read:jira-work` 才能浏览议题，`write:jira-work` 才能创建或编辑议题与评论，`read:jira-user` 才能验证账户并选择 assignee。看板列排序还额外需要 `read:board-scope:jira-software`、`read:board-scope.admin:jira-software` 和 `read:project:jira`；没有这些时，status 按字母排序。

Orca 在不发送 token 的情况下查找站点的 cloud ID，然后把 scoped-token API 请求路由到 `https://api.atlassian.com/ex/jira/<cloudId>`。有 email 时，它先尝试站点，仅在 401 后重试网关。浏览链接仍使用站点 URL。缺少 scope 时会报告端点和所需访问权限，而不移除已保存的凭据。

对于 SSH 连接，远程运行时拥有 token 和 API 请求。较旧的远程运行时仍要求 email 和非 scoped token；更新远程运行时以启用 scoped tokens。

**Self-hosted**

- **Jira base URL** — 你的 Server/DC 基址（如果 Jira 不在 `/`，请包含路径）。
- Auth method:
  - **Personal access token** — Bearer PAT（现代 Server/DC 上首选）。
  - **Username and password** — 没有 PAT 的旧实例用 Basic auth。

> **使用 HTTPS**
> 尽可能为 Cloud 和自托管 Jira 使用 `https://` URL。Orca 在 `Authorization` 头里发送凭据；明文 HTTP 可能把它们暴露在网络上。如果服务器只提供 HTTP，请在连接前把它放在受信任的 HTTPS 隧道或 VPN 后面。

4. 点 **Connect**。Orca 验证凭据并加载你的站点。

你可以连接多个 Atlassian 站点。连接站点后，Tasks 标题栏会有站点选择器；选 **All sites** 可合并跨站点的议题。

如果完全不用 Jira，可通过 [Settings → Tasks](/docs/settings) 从源选择器里隐藏它。

## 使用 Jira {#using-jira}

- 每个源启用后，任务抽屉会在统一列表里显示 GitHub、Linear 和 Jira 议题。
- 打开议题可在侧抽屉里看到完整描述、评论和元数据。行内编辑 status（通过可用 transitions）、priority、assignee 和自定义字段。
- 从抽屉的评论 composer 添加评论。
- **New Jira issue** 会在你不小心关掉对话框时保留 title 和 description——Escape、Cancel、外部点击或关闭。同一应用会话中重新打开对话框时会恢复文本；草稿在成功创建后清除，应用重启后不会保留。Issue type 和其他选择器仍使用它们平时打开时的默认值。
- 从 Jira 议题创建 worktree 会预填任务名并把 worktree 链到该议题，让审查和议题保持绑在一起。
- 在 **Create workspace** 对话框里，你也可以把 Jira 议题 URL（`https://…/browse/ABC-123`）贴进名称字段，或把字段切到 **Jira** 搜索并用文本挑选议题。Orca 会填工作区名称、关联议题，并在 worktree 卡片上显示 key + summary，带 **View on Jira**。粘贴感知多站点：当多个已连接站点匹配 URL origin 时，Orca 会问用哪个站点；都不匹配时，它会说该站点未连接。
- Orca 按仓库记住你上次用的任务源，因此以 Jira 驱动的仓库下次打开会默认到 Jira。

> **凭据存放在哪里**
> 你的 Atlassian API token 或自托管凭据通过 OS keychain 加密并本地存储——它们只用来调用你配置的 Jira 站点。如果你停止使用 Orca，请从 Atlassian 账户设置撤销 tokens。

## 下一步 {#next-steps}

- [Linear 议题抽屉](/docs/review/linear) — 对 Linear 的同一流程。
- [托管审查、议题与 Actions](/docs/review/github) — Jira 议题进行中后，把 worktree 交给托管审查。
- [从 Orca 提交并推送](/docs/review/commit-push) — 不离开 Orca 发出分支。
