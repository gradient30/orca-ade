# GitHub 错误排查 {#troubleshooting-github-errors}

Orca 通过你机器上（或远程 Orca 主机上）的 **GitHub CLI (`gh`)** 与 GitHub 通信。当 PR 状态、checks、issues 或 Tasks 刷新失败时，原因几乎总是 GitHub 鉴权、权限或 API 速率限制——而不是 PR 面板本身坏了。

本页覆盖你最常看到的错误以及如何修复它们。

## 快速分诊 {#quick-triage}

| 你看到的                                                              | 可能原因                                                   | 先试这个                                                                                                         |
| --------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| “GitHub is rate-limiting requests” / “rate limit exceeded (core)” 或 “(graphql)” | 你的用户 GitHub REST（core）或 GraphQL 配额耗尽            | 等待重置；停止额外的 `gh` / Agent / Orca 用量；检查 [Settings → Git → GitHub API Budget](/docs/settings)         |
| “GitHub authentication is unavailable” / `gh auth` 提示               | `gh` 未登录、令牌过期，或错误的 `GITHUB_TOKEN`             | `gh auth status`，然后 `gh auth login`                                                                           |
| “GitHub did not allow access” / HTTP 403（不是速率限制）              | 缺少 scopes 或没有该仓库的访问权限                         | 用 `repo`（以及所需的 org SSO）重新鉴权；确认你能在浏览器中打开该 PR                                             |
| “repository is unavailable” / HTTP 404                                | 错误的 remote、没有访问权限的私有仓库，或已重命名的仓库    | 检查 `git remote -v` 和浏览器访问                                                                                |
| “GitHub is unreachable” / 超时                                        | 网络、代理、VPN 或 GitHub 故障                             | 查看 [githubstatus.com](https://www.githubstatus.com/)；关掉 VPN 再试                                            |
| “GitHub CLI is unavailable”                                           | `gh` 不在 Orca 使用的 PATH 上                              | 安装 `gh` 并重启 Orca                                                                                            |

## 速率限制（最常见） {#rate-limits-most-common}

GitHub 给每个 **已鉴权用户** 一份共享的每小时预算。**该账户上的每个工具都共享它**：Orca、终端里的 `gh`、调用 `gh` 的 Claude/Codex/Grok Agent、CI 脚本、浏览器扩展，以及其他应用。

### Orca 关心的桶 {#buckets-orca-cares-about}

| 桶              | 覆盖什么                                                                     | 典型限额（已鉴权）    |
| --------------- | ---------------------------------------------------------------------------- | --------------------- |
| **REST (core)** | `gh api` REST 端点：按分支查找 PR、check runs、PR 文件、issue 评论、labels   | 5,000 / 小时          |
| **GraphQL**     | `gh pr view` / `list` / `checks` / `merge` / `edit`、`gh issue view` / `close` / `reopen` / `edit`、Project/Tasks 查询 | 5,000 点 / 小时       |
| **Search**      | 由搜索驱动的列表                                                             | 30 / 分钟             |

当主桶耗尽时，REST 调用以 HTTP **403** 和 `API rate limit exceeded` 失败，GraphQL 调用以 `API rate limit already exceeded` 失败。Orca 把二者都归类为已达速率限制，在能够时保留最后已知的 PR 状态，并在短窗口内 **停止再派发 `gh` 调用**，以免一次限额变成一连串失败风暴。

### 为什么 Settings 看起来 “OK”，PR 面板却被挡住 {#why-settings-can-look-ok-while-the-pr-panel-is-blocked}

**Settings → Git → GitHub API Budget** 读取 GitHub 特殊的 `rate_limit` 端点。该探测 **不计入** 速率限制核算，有时仍会报告剩余配额，而同一用户的真实 REST 调用已经返回 `remaining: 0`。

它们不一致时，按此顺序信任：

1. **PR / Checks 面板上的错误**（实时请求失败）
2. 一次真实的 CLI 检查（见下）
3. Settings 预算数字（有用，但只是探测）

也不要把 **GitHub API Budget** 和 Accounts 下的 **Claude / Codex / Grok usage** 搞混——那些是 AI 提供方限额，不是 GitHub 的 REST 配额。

### 从终端确认速率限制 {#confirm-a-rate-limit-from-a-terminal}

```bash
# Probe (does not consume quota; can look healthier than reality)
gh api rate_limit --jq '.resources | {core, graphql, search}'

# Real REST call — PR refresh, check runs, PR files, and comments depend on this
gh api user -i 2>&1 | head -40

# Real GraphQL call — PR details, PR lists, merges, and issue close/reopen depend on this
gh api graphql -f query='{ viewer { login } }'
```

如果 `gh api user` 返回 **403**，带有 `API rate limit exceeded` 和 `X-Ratelimit-Remaining: 0`，该账户的 REST 会被挡住，直到 `X-Ratelimit-Reset`（Unix epoch 秒）。如果 GraphQL 调用以 `API rate limit already exceeded` 失败，耗尽的是 GraphQL 桶。

### 通常是什么在烧掉配额 {#what-usually-burns-the-quota}

- 同时打开许多 Orca 窗口或 electron-dev 构建（每个都可能刷新 PR / Tasks）
- 自动化 `gh` 的 Agent（分配 PR/issues、轮询 checks、批量 GraphQL）
- 繁重的 Tasks / 多仓库扇出，同时还在刷新 PR 面板
- 使用同一 GitHub 用户令牌的其他应用

### 该怎么做 {#what-to-do}

1. **等待** 错误中或 `X-Ratelimit-Reset` 里显示的每小时重置。
2. **减少并发 GitHub 客户端** — 退出多余的 Orca 实例，并暂停批量 `gh` 自动化。
3. 受限时避免猛砸 PR 面板的刷新；Orca 已经在退避。
4. 在脚本里优先批量 GraphQL；不要在个人账户上对大批集合按一次一个 PR 循环 REST。
5. 重置之后，如果 PR 刷新仍然失败，重新检查鉴权（下一节）。

## 鉴权问题 {#authentication-problems}

Orca 继承该主机上 `gh` 使用的任何东西。

### 检查状态 {#check-status}

```bash
gh auth status -h github.com
gh api user --jq '{login, id}'
```

健康输出：已登录、令牌有效、`gh api user` 返回你的 login。

### 常见陷阱 {#common-footguns}

**`GITHUB_TOKEN` / `GH_TOKEN` 在你的 shell profile 里**<br />
如果它们被导出（例如在 `~/.bash_profile` 或 `~/.zshrc` 里 `export GITHUB_TOKEN=$(gh auth token)`），`gh` 会优先于钥匙串使用它们。过期或错误的环境令牌会产生令人困惑的鉴权或速率限制行为。取消设置它们并重新登录：

```bash
unset GITHUB_TOKEN GH_TOKEN
gh auth logout -h github.com
gh auth login -h github.com
```

**过期或已吊销的令牌**<br />
`gh auth status` 可能显示令牌无效。运行 `gh auth login`（或 `gh auth refresh`）并重启 Orca，以便它拿到新凭据。

**Org SAML SSO**<br />
私有组织仓库可能需要对该令牌做 SSO 授权。从 GitHub 令牌设置打开该组织的 SSO 授权链接，然后重试。

**远程 / SSH worktree**<br />
GitHub 鉴权是 **按主机** 的。在笔记本上登录并不会在远程机器上登录 `gh`。SSH 进主机并在那里运行 `gh auth login`，或使用 Orca 针对该环境的远程服务器 GitHub 预算视图。

## 权限与仓库错误 {#permission-and-repository-errors}

| 症状                                           | 含义                                                        |
| ---------------------------------------------- | ----------------------------------------------------------- |
| 没有 “rate limit” 的 HTTP 403                  | 令牌缺少 scope，或不允许你看到该资源                        |
| HTTP 404 / “could not resolve to a Repository” | 仓库缺失、已重命名，或对此令牌不可见                        |
| “resource not accessible by integration”       | 应用/令牌类型无法执行该操作                                 |

修复：

- 确认 PR/仓库能在浏览器中打开，且登录的是与 `gh api user` 相同的用户
- 用包含 `repo` 的 classic scopes 重新鉴权（如果你用那些功能，再加上 `read:org` / `project`）
- 对于 GitHub Enterprise，确保 `gh` 已鉴权到该主机名（`gh auth login --hostname …`）

## 网络与 GitHub 故障 {#network-and-github-outages}

关于超时、“could not resolve host” 或 “GitHub is unreachable” 的消息是连通性问题：

- 查看 [GitHub Status](https://www.githubstatus.com/)
- 试着不用 VPN / 公司代理
- 在远程主机上，确认到 `api.github.com` 的出站 HTTPS 可用

## 缺少 GitHub CLI {#github-cli-missing}

如果 Orca 报告 GitHub CLI 不可用：

1. 安装 [`gh`](https://cli.github.com/)
2. 确认 `which gh` 在普通终端里可用
3. 完全退出并重新打开 Orca（以便 PATH 匹配）
4. 在 Windows 上，为 Orca 启动的同一环境安装（WSL vs native）

## GitHub 失败时 Orca 如何表现 {#how-orca-behaves-when-github-fails}

- **速率限制 / 故障**：PR 和 Checks 面板优先使用 **最后已知状态** 加上一条短横幅，而不是清空 UI。
- **硬鉴权 / 权限失败**：你会得到清楚的空状态或横幅文案，告诉你去修登录或访问。
- **熔断器**：在一次主速率限制 403 之后，Orca 会短暂拒绝该桶（`core`、`search` 或 `graphql`）的新 `gh` 派发，以便应用保持响应，而不是把坑挖得更深。

## 在 Orca 中查看 GitHub API Budget {#check-github-api-budget-in-orca}

打开 **[Settings → Git](/docs/settings)**，找到 **GitHub API Budget**：

- 来自 GitHub 探测的 **REST / Search / GraphQL** 剩余计数
- 等过限额之后再刷新
- 在远程 Orca 服务器上，使用远程高级预算视图查看 **服务器拥有的** `gh` 身份（本地 Settings 只显示桌面客户端）

## 仍然卡住？ {#still-stuck}

1. 在 Orca 使用的同一台机器/用户上，用终端里的 `gh pr view` 或 `gh api user` 复现一次。
2. 收集日志：**Help → Open Logs**。
3. 提交 issue 时带上已分类的错误文本（不要带密钥）、打码后的 `gh auth status` 输出，以及终端 `gh` 是否同样失败。

- [GitHub Issues](https://github.com/stablyai/orca/issues)
- [Discord](https://discord.gg/fzjDKHxv8Q)

## 相关 {#related}

- [托管审查、issues 与 Actions](/docs/review/github) — 依赖 GitHub 的 PR 和 Checks 功能
- [设置参考](/docs/settings) — Integrations 和 Git 窗格
- [用量与速率限制跟踪](/docs/agents/usage-tracking) — AI 提供方限额（Claude/Codex），不是 GitHub API
- [故障排除与 FAQ](/docs/troubleshooting) — 一般 Orca 问题
