# 技能注册表与 MCP {#orca-skills-registry-mcp}

Orca 提供 **skills**，供 Agent 安装进各自的技能目录。公开安装包是 **混合发现存根**：短小的 `SKILL.md` 文件告诉 Agent *何时* 接入 Orca，以及如何从正在运行的 CLI 加载完整指南。命令标志住在二进制里，因此不会和应用版本脱节。

## 可安装的 Orca 技能 {#installable-orca-skills}

用 `npx skills add`，加上公开的 Orca 仓库和技能名。默认 Agent 设置通常会安装 `orca-cli`、`computer-use` 和 `orchestration`。

| 技能                                                | 安装                                                                                      | 用途                                                          |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`orca-cli`](#orca-cli)                             | `npx skills add https://github.com/stablyai/orca --skill orca-cli --global`               | Worktree、终端、文件、自动化、内置浏览器。                    |
| [`orchestration`](#orchestration)                   | `npx skills add https://github.com/stablyai/orca --skill orchestration --global`          | 多 Agent 的 Run、任务、受监督 worker、消息、决策门。          |
| [`computer-use`](#computer-use)                     | `npx skills add https://github.com/stablyai/orca --skill computer-use --global`           | 通过无障碍树和安全 UI 操作控制桌面应用。                      |
| [`orca-linear`](#orca-linear)                       | `npx skills add https://github.com/stablyai/orca --skill orca-linear --global`            | 通过 `orca linear` 读写 Linear 工单。                         |
| [`orca-emulator`](#orca-emulator)                   | `npx skills add https://github.com/stablyai/orca --skill orca-emulator --global`          | 控制 iOS Simulator。                                          |
| [`orca-emulator-android`](#orca-emulator-android)   | `npx skills add https://github.com/stablyai/orca --skill orca-emulator-android --global`  | 通过 adb 控制 Android 模拟器/设备。                           |
| [`orca-per-workspace-env`](#orca-per-workspace-env) | `npx skills add https://github.com/stablyai/orca --skill orca-per-workspace-env --global` | 每工作区环境配方（`orca.yaml`）。                              |

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

当 Orca 发布了比全局已安装更新的技能包时，应用可以：

- 显示 **update available** 提示（当某份拷贝过期且更新器无法安全改写时，则显示 **Needs attention**）。
- 打开 **Update skills** —— 列出放置位置和跳过原因，然后无界面运行 **`npx --yes skills update <names> --global -y`**（不嵌入终端）。
- 把运行保持在 **background**：关闭对话框不会取消它。状态栏一段显示进度（运行时是 spinner，成功时短暂打勾，失败会一直显示直到你处理）。点击该段可重新打开对话框。
- 在 **Settings → Agents** 上为已安装技能展示新鲜度（全局安装栏），某行需要审查时包括 **Details**。

手动等价命令（桌面 Settings 仍显示同一条 `npx` 形式）：

```bash
npx skills update orca-cli orchestration computer-use --global
```

在没有 Settings UI 的无头宿主（SSH、容器、CI、`orca serve`）上，使用本地 CLI 包装——它们解析同一套 `npx` 命令、加上非交互标志，并且 **不** 需要正在运行的 Orca 运行时：

```bash
orca skills install                                      # list installable names
orca skills install --skill orca-cli --skill orchestration
orca skills install --skill orca-cli --agent claude-code,codex
orca skills install --all --dry-run
orca skills update --all
orca skills update --skill orca-cli --dry-run
```

- 默认范围是 **global**（`--global`）；只针对当前项目时传 `--local`。
- `install` 针对 Orca 在宿主上检测到的 Agent（外加共享的 `.agents/skills` 目录）。用 `--agent <name>[,<name>…]` 或 `--agent universal` 覆盖；如果没有检测到 Agent，则必须提供 `--agent`。
- `update` 只刷新已经安装的技能。
- `--dry-run` 打印解析后的命令；`--json` 只在列出 / `--dry-run` 时有效。

Orca 提供应用内更新器时优先用它，这样应用扫描到的同一批全局放置会被改写。标为 **Skipped** 的行会说明该技能为何无法自动更新（例如缺少源注册）——修好放置位置，然后重新检查。

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

## computer-use {#computer-use}

```bash
npx skills add https://github.com/stablyai/orca --skill computer-use --global
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

## 发现来源 {#discovery-sources}

Orca 的技能 UI 会扫描 Claude、Codex、Agent Skills 和 **OMP**（`~/.omp/agent/skills`）的已安装技能主目录，因此放在那里的技能无需手动 symlink 就会出现。

## 添加你自己的技能 {#add-your-own-skills}

任何带有 `skills/<name>/SKILL.md` 文件的仓库都可以通过 `npx skills add` 安装。把 Agent 指向内部仓库，就能给它公司专属能力。

## MCP 服务器 {#mcp-servers}

Model Context Protocol（MCP）服务器向兼容的 Agent 暴露外部工具。在 [Settings → Integrations → MCP](/docs/settings) 下注册 MCP 端点；这些工具会出现在支持 MCP 的 Agent CLI 里。
