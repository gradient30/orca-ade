# 技能注册表与 MCP {#orca-skills-registry-mcp}

Orca 提供 **skills**，供 Agent 安装进各自的技能目录。公开安装包是 **混合发现存根**：短小的 `SKILL.md` 文件告诉 Agent *何时* 接入 Orca，以及如何从正在运行的 CLI 加载完整指南。命令标志住在二进制里，因此不会和应用版本脱节。

## 可安装的 Orca 技能 {#installable-orca-skills}

用 `npx skills add`，加上公开的 Orca 仓库和技能名。默认 Agent 设置通常会安装 `orca-cli`、`orca-computer-use` 和 `orchestration`。

| 技能                                                | 安装                                                                                      | 用途                                                          |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`orca-cli`](#orca-cli)                             | `npx skills add https://github.com/stablyai/orca --skill orca-cli --global`               | Worktree、终端、文件、自动化、内置浏览器。                    |
| [`orchestration`](#orchestration)                   | `npx skills add https://github.com/stablyai/orca --skill orchestration --global`          | 多 Agent 的 Run、任务、受监督 worker、消息、决策门。          |
| [`orca-computer-use`](#orca-computer-use)           | `npx skills add https://github.com/stablyai/orca --skill orca-computer-use --global`      | 通过无障碍树和安全 UI 操作控制桌面应用。                      |
| [`orca-linear`](#orca-linear)                       | `npx skills add https://github.com/stablyai/orca --skill orca-linear --global`            | 通过 `orca linear` 读写 Linear 工单。                         |
| [`orca-emulator`](#orca-emulator)                   | `npx skills add https://github.com/stablyai/orca --skill orca-emulator --global`          | 控制 iOS Simulator。                                          |
| [`orca-emulator-android`](#orca-emulator-android)   | `npx skills add https://github.com/stablyai/orca --skill orca-emulator-android --global`  | 通过 adb 控制 Android 模拟器/设备。                           |
| [`orca-per-workspace-env`](#orca-per-workspace-env) | `npx skills add https://github.com/stablyai/orca --skill orca-per-workspace-env --global` | 每工作区环境配方（`orca.yaml`）。                              |
| [`orca-plugin-authoring`](#orca-plugin-authoring)   | `npx skills add https://github.com/stablyai/orca --skill orca-plugin-authoring --global`  | 构建、调试并发布 Orca 插件。                                  |

## 混合存根 vs 实时指南 {#hybrid-stubs-vs-the-live-guide}

`npx skills add` 之后，Agent 看到的是一份短存根，内容是：

1. 解析本次会话的 CLI 可执行文件（`ORCA_CLI_COMMAND`、`orca-dev`、Linux 上的 `orca-ide`，否则 `orca`）。
2. 加载完整指南：`orca skills get <topic>`（或用 `--full` 加载长指南）。
3. 优先 `--json`，不要凭记忆臆造标志。

```bash
orca skills list
orca skills get orca-cli
orca skills get orchestration --references
orca skills get orchestration --reference recovery-and-cleanup
orca skills get orchestration --full
orca skills get orca-linear --json
```

指南的动作门会点名条件引用。`--reference <name>` 只打印其中一份，因此 Agent 只为内核加上那份文档付费，而不是整包；`--references` 列出名称。名称可以是裸的（`recovery-and-cleanup`），也可以按指南里的写法（`references/recovery-and-cleanup.md`）。`--full` 仍会打印内核加上每一份引用。

当 Agent 需要确定性输出做自动化时，加上 `--json`。`skills show` 是 `skills get` 的别名。

## 保持技能最新 {#keep-skills-up-to-date}

Orca 自己更新自己的技能，不需要 `npx`、Git、Node 或网络。一份拷贝算作 Orca 未改动的拷贝，当它的文件夹里只有 `SKILL.md`，且该文件匹配 Orca 曾经发布过的某个版本。只有这些拷贝会被就地改写（共享的 `~/.agents/skills/<name>`，或 Agent 技能文件夹里的真实文件夹，例如 `~/.claude/skills/<name>`）。其他任何东西都会被留下并报告：**You've changed this copy**，或 **A different skill already uses this name**。Orca 从不会删除一个它没有创建的文件夹。

当这个 Orca 构建发布了你已安装技能的更新版本时，应用会：

- 显示 **update available** 提示和徽章。更新只触及已经持有该技能的位置；它从不会为另一个 Agent 添加该技能。
- 打开 **Update skills**，其中列出每一个位置以及 Update 在那里做什么：**No change**、**Will update**、**Will link**，或 **Left alone** 并附上原因。被留下的拷贝有一个 **Replace** 选项（默认关闭）；Replace 会先把该拷贝移到 `~/.agents/.orca-skill-backups/`，然后把 Orca 的拷贝放到原处。
- 精确运行你审查过的计划：如果某个文件夹在你打开对话框之后变了，该技能会报告 **Changed since you reviewed it**，那里什么都不会写入。
- 按技能显示结果，例如 `Updated · 1 left alone: You've changed this copy`，运行期间状态栏有一段显示。

这覆盖安装在这台计算机上的技能。应用还不会检查 WSL 项目、SSH 宿主或已配对的 Orca 服务器；在那些地方运行 `orca skills update`。

在无头宿主（SSH、容器、CI、`orca serve`）上使用 CLI。它在运行它的那台机器上运行同一套规划器，并且 **不** 需要正在运行的 Orca 应用：

```bash
orca skills install                                      # list installable names
orca skills install --skill orca-cli --skill orchestration
orca skills install --skill orca-cli --agent claude,codex
orca skills update --all --dry-run                       # what would change, and the plan digest
orca skills update --all
orca skills update --all --force                         # also replace copies left alone (backup kept)
```

- 默认范围是 **global**；只针对当前项目时传 `--local`（Orca 只会链接进该项目已经有的 Agent 文件夹）。
- 针对 Orca 在宿主上检测到的 Agent，外加共享的 `.agents/skills` 文件夹。用 `--agent <name>[,<name>…]` 来选择（skills CLI 的键，例如 `claude-code`，仍然有效），或用 `--agent universal` 只针对共享文件夹。
- `update` 只触及已经持有该技能的位置；`install` 会添加它，包括为新检测到的 Agent。
- `--dry-run` 打印计划及其 digest，不写入。真正的运行会再次规划，并且只在计划仍然匹配时写入。
- `--json` 对试运行和真正的运行都有效。某个位置失败或在运行期间发生变化时，退出码为 1；被留下的文件夹是警告。

## 从 Skills 页安装和删除 {#install-and-delete-from-the-skills-page}

当应用内安装要求选择工作区目标时，按工作区名称或按种类（**worktree** / **folder**）搜索选择器。Agent 选择器把 Orca 始终包含的目录和你可以额外选择的 Agent 目录分开，因此你可以在继续之前核对精确的安装目标。

要移除一份扫描到的技能，打开它的操作菜单并选择 **Delete…**。一次删多份时，打开该页的 **More actions** 菜单，选择 **Delete skills…**，再勾选符合条件的结果。确认之前，Orca 会说明某份拷贝为何不能删除——例如因为它是捆绑的、由插件管理、只读，或不在可移除的技能文件夹内。这与 **Manage installs** 是分开的，后者管理从共享链接安装的拷贝。

## 在宿主之间分享私有技能 {#share-private-skills-between-hosts}

打开 **Skills → Share skills**，把一项技能或一个包发布到一条未列出、可撤销的链接后面。发布需要你的 Orca 账号。发布前检查包含的文件、脚本、可执行文件、digest 和可选的发行说明；每个已发布版本是不可变的，因此之后的本地编辑不会悄悄改变接收者安装到的内容。

任何持有有效链接的人都可以在不登录的情况下查看并安装分享的技能，所以要把链接当凭证对待。接收者核对精确版本，选择全部或其技能子集，然后在本机、配对的 Orca 运行时、WSL 或 SSH 宿主上选择 global 或 workspace 范围。已有的已修改技能默认 **Keep local**。用 **Skills → Manage installs** 更新、回滚或移除 Orca 安装的拷贝，用 **Settings → Share Skills** 复制或撤销你的有效链接。撤销链接会阻断未来访问，但不会移除已经安装的拷贝。

在你开启单独的、默认关闭的 **Settings → Share Skills → Allow agents and the Orca CLI to publish skill links** 权限之后，Agent 可以从 CLI 发布一组明确点名的技能：

```bash
orca skills installed --json
orca skills share --skill frontend --skill testing --bundle-name "Team Toolkit" --json
```

`skills installed` 返回安全的选择器，不暴露本地路径。`skills share` 接受精确的发现 ID 或无歧义的名称；它不接受任意路径或 `--all`。

## orca-cli {#orca-cli}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-cli --global
```

安装后，用 `orca skills get orca-cli` 加载版本匹配的命令指南。见 [Orca CLI](/docs/cli/overview) 和 [命令使用](/docs/cli/commands)。

## orchestration {#orchestration}

```bash
npx skills add https://github.com/stablyai/orca --skill orchestration --global
```

当 Agent 应通过 Run、任务、受监督 worker 和决策门来协调其他 Agent 时使用。见 [编排](/docs/cli/orchestration)。在变更编排状态之前始终加载 `orca skills get orchestration --full` —— 旧的 `orchestration run` 命令已退役。

<span id="computer-use" />

## orca-computer-use {#orca-computer-use}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-computer-use --global
```

当 Agent 需要检查并操作本机桌面应用窗口时使用。见 [Computer Use](/docs/cli/computer-use)。

## orca-linear {#orca-linear}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-linear --global
```

Agent 在变更工单之前应加载 `orca skills get orca-linear`。覆盖 `issue --full`、`save-issue`、`list-issues`、关系、完成后的 attach+comment 流程，以及不可信工单规则。已有的 `linear-tickets` 安装仍然能解析。见 [CLI 参考 → Linear](/docs/cli/reference#linear)。

## orca-emulator {#orca-emulator}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-emulator --global
```

当 Agent 应通过 `orca emulator` 命令从 Orca 内部控制 iOS Simulator 时使用。

## orca-emulator-android {#orca-emulator-android}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-emulator-android --global
```

用于 adb 连接的 Android AVD/设备：列出/启动、点按/滑动/输入、硬件按钮、安装/启动、权限、无障碍树、logcat。用 `orca skills get orca-emulator-android` 加载细节。

## orca-per-workspace-env {#orca-per-workspace-env}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-per-workspace-env --global
```

在 `orca.yaml` 中设置或调试每工作区环境配方时使用。见 [运行 Orca 的方式](/docs/ways-to-run#4-cloud-vms-per-workspace-environments)。

## orca-plugin-authoring {#orca-plugin-authoring}

```bash
npx skills add https://github.com/stablyai/orca --skill orca-plugin-authoring --global
```

当 Agent 应制作、调试、测试或发布 Orca 插件时使用：主题、语法、自定义编辑器、TSX 组件面板和 worker 命令。用 `orca skills get orca-plugin-authoring` 加载它；它的参考（组件、host API、事件、manifest 字段、CLI）由正在运行的 Orca 生成。

## 发现来源 {#discovery-sources}

Orca 的技能 UI 会扫描 Claude、Codex、Agent Skills 和 **OMP**（`~/.omp/agent/skills`）的已安装技能主目录，因此放在那里的技能无需手动 symlink 就会出现。

## 添加你自己的技能 {#add-your-own-skills}

任何带有 `skills/<name>/SKILL.md` 文件的仓库都可以通过 `npx skills add` 安装。把 Agent 指向内部仓库，就能给它公司专属能力。

## MCP 服务器 {#mcp-servers}

Model Context Protocol（MCP）服务器向兼容的 Agent 暴露外部工具。在 [Settings → Integrations → MCP](/docs/settings) 下注册 MCP 端点；这些工具会出现在支持 MCP 的 Agent CLI 里。
