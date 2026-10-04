# orca.yaml 与 .worktreeinclude {#orca-yaml--worktreeinclude}

把 `orca.yaml` 和 `.worktreeinclude` 放在仓库根目录。`orca.yaml` 提供项目默认值；`.worktreeinclude` 列出要带进新 worktree 的 ignored 文件。提交这些配置文件，其他用户就能用同一套规则。密钥留在它们所指的 ignored 文件里。

本参考覆盖 **本地 Git worktree**。[Folder workspace](/docs/model/worktrees#multi-repo-project-groups-folder-workspaces) 不会创建 Git checkout，也不会跑这些拷贝/共享步骤。其他执行目标见 [Ways to run Orca](/docs/ways-to-run)。

## 示例 {#example}

使用 pnpm 的项目可以在 setup 时安装依赖，并打开一个 Agent 标签和一个 Git status 标签：

```yaml
scripts:
  setup: |
    pnpm install
  archive: |
    echo Workspace archived
setupAgentStartupPolicy: wait-for-setup
defaultTabs:
  - title: Agent
  - title: Git status
    command: git status --short
worktree:
  sharedDirectories:
    - .cache
```

`.cache` 目录必须已经存在于主 checkout，并且被 gitignore。第一个标签故意没有 command：桌面创建编写器启动 Agent 时，其启动优先于第一个标签配置的 command。

## 接受的键与默认值 {#accepted-keys-and-defaults}

所有键都可选。脚本、标题、命令和路径值必须是字符串；Orca 会 trim，并丢掉空值或超长值。无效字段会被跳过，有效的兄弟字段仍然生效。未知键不会配置额外行为。

| 键 | 接受的值 | 省略时 |
| --- | --- | --- |
| `scripts.setup` | 非空脚本字符串，包括 YAML block scalar（`\|`）。setup 启用时在新 worktree 中运行。 | 没有项目 setup 脚本。 |
| `scripts.archive` | 非空脚本字符串。hooks 启用时，在归档/删除之前于 worktree 中运行。 | 没有项目 archive 脚本。 |
| `setupAgentStartupPolicy` | 只能是 `start-immediately` 或 `wait-for-setup`。 | `start-immediately`；本地 **wait** 设置仍然优先。 |
| `issueCommand` | 创建编写器里，用于已链接 GitHub/GitLab 条目的非空命令模板。 | 没有项目模板；编写器仍可提供内置 Agent prompt。 |
| `defaultTabs` | 映射列表，可选 `title`、`command` 和 `color`。每条至少要有一个有效字段。`color` 接受 `#RGB` 或 `#RRGGBB`。 | 正常的初始终端行为。 |
| `worktree.sharedDirectories` | 相对仓库的目录路径列表。只有已存在且被 gitignore 的目录会被共享。 | 只应用用户 Settings 里的共享路径。 |
| `environmentRecipes` | 每 workspace 环境配方列表。配方字段和生命周期命令见 [Cloud VMs](/docs/ways-to-run#4-cloud-vms-per-workspace-environments) 和 `orca-per-workspace-env` skill。 | 没有项目配方。 |

`scripts` 和 `worktree` 必须是映射；`defaultTabs`、`environmentRecipes` 和 `sharedDirectories` 必须是列表。`setupRunPolicy` 和 `commandSourcePolicy` 是 **Settings 值**，不是 `orca.yaml` 接受的键。

### 解析失败与限制 {#parse-failures-and-limits}

**无效 YAML，或任意位置出现重复的 mapping key，都会拒绝整个文件。** Orca 不会保留最后一个重复值。根不是映射、别名展开过多，或文件过大，也都不会产生配置。能接受重复 key 的 YAML 检查器不能证明 Orca 会接受该文件。

| 限制 | 超出时 |
| --- | --- |
| 整个文件：256 KiB（262,144 个 UTF-8 字节）**并且** 262,144 个 UTF-16 code unit | 整个文件被拒绝。 |
| 每个字符串字段：64 KiB（65,536 个 UTF-8 字节）**并且** 65,536 个 UTF-16 code unit，trim 之前计量 | 字段被丢弃。 |
| `defaultTabs`：256 个输入条目 | 整个标签列表被丢弃。 |
| `environmentRecipes`：256 个输入条目 | 整个配方列表被丢弃，并给出配方诊断。 |
| `worktree.sharedDirectories`：前 100 个输入条目 | 更后的条目被忽略，即使更早的条目无效或重复。 |
| YAML 别名展开：解析器 `maxAliasCount` 为 100 | 解析器展开预算超出时整个文件被拒绝；这不是别名 token 的简单计数。 |

## 哪份 checkout 提供配置？ {#which-checkout-supplies-the-configuration}

**主 checkout** 是在 Orca 里登记的仓库文件夹。它的分支可以与新 worktree 不同。

| 配置 | 读取位置 |
| --- | --- |
| Setup 脚本、setup 启动策略和 `defaultTabs` | **新 worktree** 的 `orca.yaml`。 |
| 共享目录规则及其源目录 | **主 checkout** 的 `orca.yaml` 和文件系统。 |
| 拷贝规则及其源文件 | **主 checkout** 的 `.worktreeinclude` 和文件系统。 |
| Archive 脚本 | **主 checkout** 的 `orca.yaml`，以 worktree 为工作目录执行。 |
| Issue command | **主 checkout** 的 `.orca/issue-command`，然后是它的 `orca.yaml`。 |

改功能分支上的 `.worktreeinclude` 或共享目录列表，不会更新主 checkout。再创建 worktree 之前，确认主 checkout 有预期规则和 ignored 源路径。Setup 和标签默认值则跟随新 worktree 里检出的修订。这些默认值在创建时应用；它们不会同步已有标签或文件。

## Setup、archive 与命令选择 {#setup-archive-and-command-selection}

在 **Settings → Repository** 里，setup 可以自动运行、每次询问，或默认跳过。新仓库默认运行 setup。[CLI](/docs/cli/reference#worktrees) 接受 `--setup run|skip|inherit`；`inherit` 跟随该 Settings 策略。文件有效并不能绕过 Orca 的命令批准。

**Command source & orca.yaml** 控制 setup 和 archive 脚本：

| Settings 选项 | 使用的脚本 |
| --- | --- |
| **orca.yaml only**（`shared-only`） | 只用 YAML hook；本地 hook 被忽略。 |
| **Local only**（`local-only`） | 只用本地 hook；YAML hook 被忽略。 |
| **Run both**（`run-both`） | 先 YAML 再本地，拼成一个脚本。 |

没有保存来源选择时，非空的本地 hook 会为该 hook 选择 **Local only**；否则 Orca 使用 **orca.yaml only**。共享目录与这个命令来源选择无关。

Setup 在 **Setup** 终端里运行。macOS/Linux 上，Orca 写入带 `set -e` 的 Bash runner；开头 `#!` 行上支持的 shell 选项会被重放。原生 Windows 上，runner 使用 `.cmd` 语法，逐条调用非空行，失败即停。开头的 POSIX shell `#!` 行只有在 Git Bash 已配置且可用时才改走 Bash；否则 `.cmd` runner 会在跑任何命令之前拒绝该脚本。把终端选成 PowerShell 不会把 setup 脚本变成 PowerShell 代码。

Setup runner 会收到：

| 变量 | 值 |
| --- | --- |
| `ORCA_ROOT_PATH` | 主 checkout 路径。 |
| `ORCA_WORKTREE_PATH` | 新 worktree 路径。 |
| `ORCA_WORKSPACE_NAME` | Worktree 目录的 basename，而不是改名后的显示标题。 |
| `CONDUCTOR_ROOT_PATH`、`GHOSTX_ROOT_PATH` | `ORCA_ROOT_PATH` 的兼容别名。 |

路径和 shell 语法因平台而异。Bash 里用 `$ORCA_WORKTREE_PATH`，`.cmd` 脚本里用 `%ORCA_WORKTREE_PATH%`。`wait-for-setup` 会等 setup 成功后再启动 Agent；YAML 或本地 wait 设置任一启用即可。这控制启动顺序，不决定 setup 是否运行。

Archive hooks 在本地删除之前运行；CLI 需要 `--run-hooks` 才会启用。失败的 archive hook 会阻止删除，除非调用方明确接受该失败。

### 终端默认值与 issue 命令 {#terminal-defaults-and-issue-commands}

`defaultTabs` 为新 worktree 创建一次终端标签。命令被跳过时，标题和颜色仍然生效。标签命令跟随 setup 的运行决定，并会被 **Local only** 抑制（使用 setup 的命令来源策略）。

在 **桌面创建编写器** 里，Agent/启动命令占用第一个模板标签，因此 **第一个标签的模板命令不会运行**。把该标签留给 Agent，其他命令放在后面的标签。本地 CLI 用 `--agent` 创建时，则在配置的标签之外另开一个启动终端；每个被允许的模板命令都可以运行。标签命令不会等 setup 结束，需要已安装依赖的命令应在 setup 完成后再跑。示例里的 Git status 命令不依赖安装。

`issueCommand` 有自己的覆盖：非空的 `.orca/issue-command` 内容优先于 YAML。清掉该本地文件即恢复共享模板。这与 setup/archive 的命令来源选择是分开的。模板支持已链接条目的 URL `{{artifact_url}}`，以及其编号的旧占位 `{{issue}}`；是否使用模板由编写器决定。共享 YAML 命令走 Orca 的批准流程，可以复用已保存的信任；本地覆盖视为用户撰写，不会触发该共享命令提示。

```yaml
issueCommand: |
  echo "Linked item: {{artifact_url}}"
```

## 共享还是拷贝 ignored 路径 {#sharing-versus-copying-ignored-paths}

三种机制都使用相对主 checkout 的路径，并保留已存在的目标。先应用 Settings 路径，再是 YAML 共享目录，然后是 include 拷贝。已经通过共享存在的路径不会再拷一次。

| 机制 | 源条目 | 在新的本地 worktree 中的结果 |
| --- | --- | --- |
| **Settings → Repository → Worktree Shared Paths** | 个人仓库设置；已存在的文件或目录。 | macOS 上可用时用 APFS clone-copy；否则用链接。clone 的内容独立，链接则共享编辑。 |
| `worktree.sharedDirectories` | 主 `orca.yaml` 里列出的、已存在且 **被 gitignore 的目录**。追加到 Settings 路径。 | 始终链接到主目录，包括在 APFS 上。Windows 会先尝试目录 junction，再尝试 symlink。编辑会影响共享源。 |
| `.worktreeinclude` | 主 checkout 里列出的、已存在且 **被 gitignore 的文件或目录**。 | 私有副本：可用时用 APFS clone-copy，否则普通拷贝。从不回退成共享链接。 |

YAML 共享路径会把反斜杠规范成 `/`，去掉开头的 `./` 和结尾的 `/`，并去重。绝对路径、带盘符的路径、空路径段、`.`/`..` 段，以及任何 `.git` 段都会被拒绝。文件、缺失目录或未被 ignore 的目录会被跳过。

### .worktreeinclude 格式与拷贝预算 {#worktreeinclude-format-and-copy-budget}

```text
# .worktreeinclude
.env
.env.local
.vscode/settings.json
```

**每行一个字面路径**，锚定在仓库根目录。空行和以 `#` 开头的行会被忽略；行内注释不会被剥掉。反斜杠、开头的 `./` 和结尾的 `/` 会被规范化，重复项会被去掉。含 `*` 或 `?` 的 glob，以及以 `!` 开头的否定会被跳过。使用不含穿越或 `.git` 的相对路径；只有已存在且被 gitignore 的条目会被拷贝。include 文件必须是不超过 256 KiB 的普通文件；Orca 最多考虑 1,000 个有效字面路径候选。

普通 include 拷贝限制为每个新 worktree **总共 2 GiB 文件字节和 50,000 个文件系统条目**，在拷贝前计量。APFS clone 不消耗字节预算，但仍消耗条目预算；回退到普通拷贝时必须装进字节预算。超出剩余预算的条目会被跳过，创建时报告警告。更早被拒绝的条目也可能耗尽有界的体积遍历，使后面的条目未被计量。这些是准入限制，不是拷贝过程中文件增长的配额。

拷贝顶层源 symlink 时使用其目标的内容。嵌套 symlink 仍保持为链接，因此经由其一编辑仍可能影响所指对象。大型依赖树通常应放进 setup 或有意的共享，而不是 `.worktreeinclude`。

## 配置看起来没生效时 {#when-configuration-appears-to-do-nothing}

1. 核对上表中的正确 checkout、键名拼写、值类型、重复键和限制。解析失败可以让 setup、标签和共享目录一起失效。
1. 核对 setup 的运行策略、命令来源选择、批准，以及第一个标签的启动行为。`--setup run` 改变的是运行决定；它不会覆盖 **Local only**。
1. 核对源路径存在于主 checkout，且 `sharedDirectories` 对应的是目录。在那里用 `git check-ignore -- path/to/entry` 确认 ignore 状态；已跟踪或未被 ignore 的路径不符合 YAML 共享或 include 拷贝。
1. 核对目标是否已存在，或是否有拷贝预算警告。缺失的共享目录会被跳过且没有警告；不是每个被跳过的字段/路径都有可见错误。没有警告不能证明已被接受。

创建流程见 [Worktrees](/docs/model/worktrees#shared-directories-gitignored-files)，仓库偏好见 [Settings](/docs/settings#repository)。
