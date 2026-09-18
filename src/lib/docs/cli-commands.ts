export type CliCommand = {
  id: string;
  bin: string;
  summary: string;
  usage: string;
  examples: string[];
  retired?: boolean;
  note?: string;
};

export type CliCategory = {
  id: string;
  title: string;
  blurb: string;
  commands: CliCommand[];
};

function cmd(bin: string, summary: string, usage: string, examples: string[], extra?: { retired?: boolean; note?: string }): CliCommand {
  return {
    id: bin.replace(/^orca\s+/, "").replace(/\s+/g, "-"),
    bin,
    summary,
    usage,
    examples,
    ...extra,
  };
}

/** Complete `orca help` command surface. Flags only from that help text. */
export const CLI_CATEGORIES: CliCategory[] = [
  {
    id: "startup",
    title: "启动",
    blurb: "打开桌面、拉起无头运行时、查看就绪状态。多数后续命令都要求运行时已在。",
    commands: [
      cmd("orca open", "启动 Orca，并等到运行时可达。", "orca open [--json]", ["orca open", "orca open --json"]),
      cmd("orca serve", "启动无头 Orca 运行时服务器（不打开桌面窗口）。", "orca serve [--port <port>] [--pairing-address <host>] [--mobile-pairing] [--no-pairing] [--project-root <path>] [--recipe-json] [--json]", ["orca serve --json", "orca serve --port 6768 --pairing-address 100.64.1.20 --json", "orca serve --project-root D:\\workspace_test\\github_desk\\test --json"]),
      cmd("orca status", "显示应用 / 运行时 / graph 的就绪状态。", "orca status [--json]", ["orca status --json"]),
    ],
  },
  {
    id: "diagnostics",
    title: "诊断",
    blurb: "采集运行时与托管终端的诊断快照。",
    commands: [
      cmd("orca diagnostics memory", "采集 Orca 与托管终端的内存快照。", "orca diagnostics memory [--json]", ["orca diagnostics memory --json"]),
    ],
  },
  {
    id: "agent-discovery",
    title: "Agent 发现",
    blurb: "把本机 CLI 的命令面以机器可读形式交给 Agent。",
    commands: [
      cmd("orca agent-context", "打印给 Agent 用的机器可读命令 schema。", "orca agent-context [--json]", ["orca agent-context --json"]),
    ],
  },
  {
    id: "accounts",
    title: "账号",
    blurb: "在本机 Orca 宿主上管理 Claude / Codex 账号。",
    commands: [
      cmd("orca account add", "在本机 Orca 宿主上添加受管理的 Claude 或 Codex 账号。", "orca account add [--agent claude|codex] [--json]", ["orca account add --json", "orca account add --agent claude --json", "orca account add --agent codex --json"]),
      cmd("orca account list", "列出本机 Orca 宿主上已管理的 Claude 和 Codex 账号。", "orca account list [--json]", ["orca account list --json"]),
    ],
  },
  {
    id: "skills",
    title: "技能",
    blurb: "列出、打印、安装、更新和分享 Orca 捆绑技能。install / update 走社区 skills CLI。",
    commands: [
      cmd("orca skills installed", "列出已安装的技能选择器。", "orca skills installed [--json]", ["orca skills installed --json"]),
      cmd("orca skills share", "把选中的技能发布到一条未列出的链接后面。", "orca skills share [--json]", ["orca skills share --json", "orca skills share --help"]),
      cmd("orca skills list", "列出与当前 CLI 版本匹配、随 CLI 捆绑的技能指南。", "orca skills list [--json]", ["orca skills list", "orca skills list --json"]),
      cmd("orca skills get", "把一份版本匹配的技能指南打印成 Markdown。", "orca skills get [--json]", ["orca skills get --help", "orca skills get --json"]),
      cmd("orca skills install", "通过社区 skills CLI，把捆绑的 Orca 技能安装到全局。", "orca skills install [--json]", ["orca skills install --json", "orca skills install --help"]),
      cmd("orca skills update", "通过社区 skills CLI 更新已经安装的 Orca 技能。", "orca skills update [--json]", ["orca skills update --json", "orca skills update --help"]),
    ],
  },
  {
    id: "hosts",
    title: "宿主",
    blurb: "列出当前能瞄准的机器，以及每一台该怎么写选择器。",
    commands: [
      cmd("orca host list", "列出可瞄准的机器，以及如何命名每一台。", "orca host list [--json]", ["orca host list --json"]),
    ],
  },
  {
    id: "environments",
    title: "环境",
    blurb: "用配对码保存、查看和删除远程 Orca 运行时。",
    commands: [
      cmd("orca environment add", "用配对码保存一个远程 Orca 运行时。", "orca environment add --name <name> --pairing-code <code> [--json]", ["orca environment add --name work-laptop --pairing-code \"orca://pair?code=...\" --json"]),
      cmd("orca environment list", "列出已保存的远程 Orca 运行时。", "orca environment list [--json]", ["orca environment list --json"]),
      cmd("orca environment show", "显示一个已保存的远程 Orca 运行时。", "orca environment show --environment <selector> [--json]", ["orca environment show --environment work-laptop --json"]),
      cmd("orca environment rm", "删除一个已保存的远程 Orca 运行时。", "orca environment rm --environment <selector> [--json]", ["orca environment rm --environment work-laptop --json"]),
    ],
  },
  {
    id: "recipes",
    title: "环境配方",
    blurb: "校验每工作区环境配方。",
    commands: [
      cmd("orca vm recipe doctor", "校验一份每工作区环境配方。", "orca vm recipe doctor [--json]", ["orca vm recipe doctor --json", "orca vm recipe doctor --help"]),
    ],
  },
  {
    id: "automations",
    title: "自动化",
    blurb: "创建、查看、编辑、立即跑和删除计划中的 Orca 自动化。",
    commands: [
      cmd("orca automations list", "列出已计划的 Orca 自动化。", "orca automations list [--json]", ["orca automations list --json"]),
      cmd("orca automations show", "显示一条 Orca 自动化。", "orca automations show [--json]", ["orca automations show --json", "orca automations show --help"]),
      cmd("orca automations create", "创建一条计划中的 Orca 自动化。", "orca automations create [--json]", ["orca automations create --help"]),
      cmd("orca automations edit", "编辑一条 Orca 自动化。", "orca automations edit [--json]", ["orca automations edit --help"]),
      cmd("orca automations remove", "删除一条 Orca 自动化及其运行历史。", "orca automations remove [--json]", ["orca automations remove --help"]),
      cmd("orca automations run", "立即跑一条 Orca 自动化。", "orca automations run [--json]", ["orca automations run --help"]),
      cmd("orca automations runs", "列出自动化运行历史。", "orca automations runs [--json]", ["orca automations runs --json"]),
    ],
  },
  {
    id: "projects",
    title: "项目",
    blurb: "列出持久项目，以及在某个宿主上导入、克隆或登记项目 setup。",
    commands: [
      cmd("orca project list", "列出 Orca 已知的持久项目。", "orca project list [--json]", ["orca project list --json"]),
      cmd("orca project setups", "列出项目的宿主 setup。", "orca project setups [--project <id>] [--host <host-id>] [--json]", ["orca project setups --json", "orca project setups --project <id> --host local --json"]),
      cmd("orca project setup-existing-folder", "导入已有文件夹，让项目在某个宿主上可用。", "orca project setup-existing-folder --project <id> --host <host-id> --path <path> [--kind git|folder] [--display-name <name>] [--json]", ["orca project setup-existing-folder --project <id> --host local --path D:\\workspace_test\\github_desk\\test --kind git --display-name test --json"]),
      cmd("orca project setup-clone", "克隆仓库，让项目在某个宿主上可用。", "orca project setup-clone --project <id> --host <host-id> --url <clone-url> --destination <path> [--display-name <name>] [--json]", ["orca project setup-clone --project <id> --host local --url https://github.com/stablyai/orca.git --destination D:\\workspace_test\\github_desk\\orca --json"]),
      cmd("orca project setup-create", "创建独立的项目宿主 setup 元数据。", "orca project setup-create --project <id> --host <host-id> [--setup-id <id>] [--path <path>] [--kind git|folder] [--display-name <name>] [--worktree-base-path <path>] [--git-username <name>] [--state ready|not-set-up|setting-up|error|unsupported] [--method imported-existing-folder|cloned|provisioned] [--json]", ["orca project setup-create --project <id> --host local --path D:\\workspace_test\\github_desk\\test --kind git --state ready --method imported-existing-folder --json"]),
      cmd("orca project setup-update", "更新项目宿主 setup 元数据。", "orca project setup-update --setup <setup-id> [--display-name <name>] [--path <path>] [--worktree-base-path <path>] [--git-username <name>] [--kind git|folder] [--state ready|not-set-up|setting-up|error|unsupported] [--method legacy-repo|imported-existing-folder|cloned|provisioned] [--json]", ["orca project setup-update --setup <setup-id> --display-name test --state ready --json"]),
      cmd("orca project setup-delete", "删除一个项目宿主 setup。", "orca project setup-delete --setup <setup-id> [--json]", ["orca project setup-delete --setup <setup-id> --json"]),
    ],
  },
  {
    id: "repos",
    title: "仓库",
    blurb: "登记本地仓库、查看信息、设置默认 base ref、搜索分支和 tag。",
    commands: [
      cmd("orca repo list", "列出已在 Orca 登记的仓库。", "orca repo list [--json]", ["orca repo list", "orca repo list --json"]),
      cmd("orca repo add", "按文件系统路径把一个项目加进 Orca。", "orca repo add --path <path> [--json]", ["orca repo add --path D:\\workspace_test\\github_desk\\test --json"]),
      cmd("orca repo show", "显示一个已登记仓库。", "orca repo show --repo <selector> [--json]", ["orca repo show --repo name:orca --json", "orca repo show --repo path:D:\\workspace_test\\github_desk\\test --json"]),
      cmd("orca repo set-base-ref", "设置该仓库以后创建 worktree 时的默认 base ref。", "orca repo set-base-ref --repo <selector> --ref <ref> [--json]", ["orca repo set-base-ref --repo name:orca --ref origin/main --json"]),
      cmd("orca repo search-refs", "在仓库里搜索分支 / tag。", "orca repo search-refs --repo <selector> --query <text> [--limit <n>] [--json]", ["orca repo search-refs --repo name:orca --query main --limit 10 --json"]),
    ],
  },
  {
    id: "worktrees",
    title: "Worktrees",
    blurb: "创建、列出、更新和删除 Orca 管理的 git worktree。",
    commands: [
      cmd("orca worktree list", "列出 Orca 管理的 worktree。", "orca worktree list [--repo <selector>] [--limit <n>] [--json]", ["orca worktree list --json", "orca worktree list --repo name:orca --limit 20 --json"]),
      cmd("orca worktree show", "显示一个 worktree。", "orca worktree show --worktree <selector> [--json]", ["orca worktree show --worktree active --json", "orca worktree show --worktree branch:Jinwoo-H/cli --json"]),
      cmd("orca worktree current", "显示当前目录对应的、由 Orca 管理的 worktree。", "orca worktree current [--json]", ["orca worktree current", "orca worktree current --json"]),
      cmd("orca worktree create", "创建一个新的 Orca 管理 worktree。", "orca worktree create --name <name> [--repo <selector>|--project <id> [--host <host-id>]|--project-host-setup <id>] [--agent <id>] [--prompt <text>] [--setup run|skip|inherit] [--base-branch <ref>] [--issue <number>] [--linear-issue <identifier-or-url>] [--comment <text>] [--parent-worktree <selector>] [--no-parent] [--run-hooks] [--activate] [--json]", ["orca worktree create --name agent-task --agent codex --prompt \"hi\"", "orca worktree create --repo name:orca --name cli-test-1 --issue 273", "orca worktree create --repo name:orca --name linear-task --linear-issue https://linear.app/stably/issue/STA-335/test-issue", "orca worktree create --name linear-task --linear-issue STA-335", "orca worktree create --name child-task --parent-worktree active --json", "orca worktree create --name independent --no-parent --json"]),
      cmd("orca worktree set", "更新一个 worktree 的 Orca 元数据。", "orca worktree set --worktree <selector> [--display-name <name>] [--issue <number|null>] [--linear-issue <identifier-or-url|null>] [--comment <text>] [--workspace-status <id>] [--parent-worktree <selector>|--no-parent] [--json]", ["orca worktree set --worktree active --comment \"waiting on review\"", "orca worktree set --worktree active --linear-issue null", "orca worktree set --worktree active --issue null --json"]),
      cmd("orca worktree rm", "从 Orca 和 git 里删除一个 worktree。", "orca worktree rm --worktree <selector> [--force] [--run-hooks] [--allow-failed-archive-hook] [--json]", ["orca worktree rm --worktree active --json", "orca worktree rm --worktree name:cli-test-1 --force --allow-failed-archive-hook --json"]),
      cmd("orca worktree ps", "跨 worktree 显示一份紧凑的编排摘要。", "orca worktree ps [--limit <n>] [--json]", ["orca worktree ps --limit 10", "orca worktree ps --json"]),
    ],
  },
  {
    id: "files",
    title: "文件",
    blurb: "在 Orca 编辑器里打开工作区文件或 diff。",
    commands: [
      cmd("orca file open", "在 Orca 编辑器里打开一个工作区文件。", "orca file open <path> [--worktree <selector>] [--json]", ["orca file open src/App.tsx", "orca file open src/App.tsx --worktree active --json"]),
      cmd("orca file diff", "在 Orca 编辑器里打开一个工作区文件的 diff。", "orca file diff <path> [--staged] [--worktree <selector>] [--json]", ["orca file diff src/App.tsx --worktree active --json", "orca file diff src/App.tsx --staged --worktree active --json"]),
      cmd("orca file open-changed", "打开某个工作区全部 git 已改文件。", "orca file open-changed [--mode edit|diff|both] [--worktree <selector>] [--json]", ["orca file open-changed --mode diff", "orca file open-changed --mode both --worktree active --json"]),
    ],
  },
  {
    id: "terminals",
    title: "终端",
    blurb: "列出、创建、读写、发送输入、等待和关闭 Orca 管理的终端。句柄来自 `terminal list --json`。",
    commands: [
      cmd("orca terminal list", "列出正在运行的 Orca 管理终端。", "orca terminal list [--worktree <selector>] [--limit <n>] [--include-visual-layouts] [--json]", ["orca terminal list --worktree active --json", "orca terminal list --worktree path:/Users/me/orca/workspaces/orca/cli-test-1 --json", "orca terminal list --include-visual-layouts --json"]),
      cmd("orca terminal show", "显示终端元数据和预览。", "orca terminal show [--terminal <handle>] [--json]", ["orca terminal show --json", "orca terminal show --terminal term_123 --json"]),
      cmd("orca terminal read", "读取有界的终端输出。", "orca terminal read [--terminal <handle>] [--cursor <n>] [--limit <n>] [--json]", ["orca terminal read --terminal term_123 --json", "orca terminal read --terminal term_123 --cursor 0 --limit 200 --json"]),
      cmd("orca terminal send", "向正在运行的终端发送输入。", "orca terminal send [--terminal <handle>] [--text <text>] [--enter] [--interrupt] [--wait-submit <seconds>] [--retry-request <id>] [--json]", ["orca terminal send --terminal term_123 --text \"hi\" --enter", "orca terminal send --terminal term_123 --interrupt --json"]),
      cmd("orca terminal wait", "等待终端条件：进程退出，或 TUI 空闲。", "orca terminal wait [--terminal <handle>] --for exit|tui-idle [--timeout-ms <ms>] [--json]", ["orca terminal wait --terminal term_123 --for exit --timeout-ms 60000 --json", "orca terminal wait --terminal term_123 --for tui-idle --timeout-ms 30000 --json"]),
      cmd("orca terminal create", "在某个 worktree 里创建终端会话。", "orca terminal create [--worktree <selector>] [--title <name>] [--command <text>] [--focus] [--json]", ["orca terminal create --worktree active --command \"codex\"", "orca terminal create --worktree active --title tests --command \"npm test\" --focus --json"]),
      cmd("orca terminal rename", "设置或清除终端标签的标题。", "orca terminal rename [--terminal <handle>] [--json]", ["orca terminal rename --terminal term_123 --json", "orca terminal rename --help"]),
      cmd("orca terminal split", "拆分一个已有终端窗格。", "orca terminal split [--terminal <handle>] [--direction horizontal|vertical] [--json]", ["orca terminal split --terminal term_123 --direction vertical --json", "orca terminal split --direction horizontal --json"]),
      cmd("orca terminal switch", "把一个终端标签带到前台。", "orca terminal switch [--terminal <handle>] [--json]", ["orca terminal switch --terminal term_123 --json"]),
      cmd("orca terminal focus", "`terminal switch` 的别名，把终端标签带到前台。", "orca terminal focus [--terminal <handle>] [--json]", ["orca terminal focus --terminal term_123 --json"], { note: "与 `orca terminal switch` 相同。" }),
      cmd("orca terminal close", "关闭一个终端；加 --tab 关整个标签；或 --worktree --all 关闭该 worktree 里全部终端。", "orca terminal close ([--terminal <handle>] [--tab] | --worktree <selector> --all) [--json]", ["orca terminal close --terminal term_123 --json", "orca terminal close --terminal term_123 --tab --json", "orca terminal close --worktree active --all --json"]),
    ],
  },
  {
    id: "orchestration",
    title: "编排",
    blurb: "用 Run、任务、受监督 worker、消息和决策门协调多个 Agent。使用前先在 Settings → Experimental 打开编排。",
    commands: [
      cmd("orca orchestration run-create", "创建并绑定一个轻量编排 Run。", "orca orchestration run-create [--json]", ["orca orchestration run-create --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration run-use", "把当前协调者终端绑定到一个已有 Run。", "orca orchestration run-use [--json]", ["orca orchestration run-use --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration run-current", "显示本终端已绑定的 Run。", "orca orchestration run-current [--json]", ["orca orchestration run-current --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration run-list", "列出轻量编排 Run。", "orca orchestration run-list [--json]", ["orca orchestration run-list --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration run-show", "显示一个轻量编排 Run。", "orca orchestration run-show [--json]", ["orca orchestration run-show --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration send", "发送一条 Agent 间消息。", "orca orchestration send [--json]", ["orca orchestration send --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration check", "检查已绑定 Run 的邮箱。", "orca orchestration check [--json]", ["orca orchestration check --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration ask", "向协调者提一个阻塞问题。", "orca orchestration ask [--json]", ["orca orchestration ask --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration reply", "回复一条消息。", "orca orchestration reply [--json]", ["orca orchestration reply --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration inbox", "显示所有收件人的消息。", "orca orchestration inbox [--json]", ["orca orchestration inbox --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration task-create", "创建一条编排任务。", "orca orchestration task-create [--json]", ["orca orchestration task-create --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration task-list", "列出编排任务。", "orca orchestration task-list [--json]", ["orca orchestration task-list --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration task-update", "更新任务状态。", "orca orchestration task-update [--json]", ["orca orchestration task-update --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration dispatch", "把任务派发到一个终端。", "orca orchestration dispatch [--json]", ["orca orchestration dispatch --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration dispatch-show", "显示某任务的派发上下文。", "orca orchestration dispatch-show [--json]", ["orca orchestration dispatch-show --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-start", "在本地或已连接的 Orca 服务器上启动受监督 worker。", "orca orchestration worker-start [--json]", ["orca orchestration worker-start --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-show", "检查一个受监督 worker。", "orca orchestration worker-show [--json]", ["orca orchestration worker-show --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-read", "读取一个受监督 worker 的有界输出。", "orca orchestration worker-read [--json]", ["orca orchestration worker-read --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-stop", "围栏一次 Dispatch；只停止它的受监督 worker。", "orca orchestration worker-stop [--json]", ["orca orchestration worker-stop --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-abandon", "在不宣称已停止的情况下，围栏一个不确定的 worker。", "orca orchestration worker-abandon [--json]", ["orca orchestration worker-abandon --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-release", "归档输出后释放已结算 worker 的终端。", "orca orchestration worker-release [--json]", ["orca orchestration worker-release --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-retain", "为调试把 worker 终端保持运行。", "orca orchestration worker-retain [--json]", ["orca orchestration worker-retain --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration worker-list", "报告 worker 终端的资源记账。", "orca orchestration worker-list [--json]", ["orca orchestration worker-list --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration coordinator-start", "已退役：请加载当前编排技能。", "orca orchestration coordinator-start [--json]", ["orca orchestration coordinator-start --json"], { retired: true, note: "已退役，没有实际效果。加载 `orca skills get orchestration`。" }),
      cmd("orca orchestration coordinator-stop", "已退役：请加载当前编排技能。", "orca orchestration coordinator-stop [--json]", ["orca orchestration coordinator-stop --json"], { retired: true, note: "已退役，没有实际效果。加载 `orca skills get orchestration`。" }),
      cmd("orca orchestration gate-create", "创建一个会阻塞任务的决策门。", "orca orchestration gate-create [--json]", ["orca orchestration gate-create --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration gate-resolve", "解决一个待处理的决策门。", "orca orchestration gate-resolve [--json]", ["orca orchestration gate-resolve --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration gate-list", "列出决策门。", "orca orchestration gate-list [--json]", ["orca orchestration gate-list --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
      cmd("orca orchestration reset", "重置编排状态。", "orca orchestration reset [--json]", ["orca orchestration reset --json"], { note: "这条命令的详细旗帜以 `orca orchestration … --help` 或 `orca skills get orchestration` 为准；`orca help` 只给出命令名。" }),
    ],
  },
  {
    id: "computer",
    title: "Computer Use",
    blurb: "通过无障碍树操作本机桌面应用。详细工作流见 Computer Use 专页。",
    commands: [
      cmd("orca computer capabilities", "显示 computer-use 提供方能力。", "orca computer capabilities [--json]", ["orca computer capabilities --json"]),
      cmd("orca computer permissions", "显示或打开 computer-use 权限设置。", "orca computer permissions [--json]", ["orca computer permissions --json"]),
      cmd("orca computer list-apps", "列出 computer-use 能看到的正在运行的应用。", "orca computer list-apps [--json]", ["orca computer list-apps --json"]),
      cmd("orca computer list-windows", "列出目标应用的可见窗口。", "orca computer list-windows [--json]", ["orca computer list-windows --json", "orca computer list-windows --help"]),
      cmd("orca computer get-app-state", "捕获某个应用的紧凑无障碍快照。", "orca computer get-app-state [--json]", ["orca computer get-app-state --json", "orca computer get-app-state --help"]),
      cmd("orca computer click", "点击应用元素或窗口坐标。", "orca computer click [--json]", ["orca computer click --help"]),
      cmd("orca computer perform-secondary-action", "运行一条已公布的无障碍动作。", "orca computer perform-secondary-action [--json]", ["orca computer perform-secondary-action --help"]),
      cmd("orca computer scroll", "滚动应用元素。", "orca computer scroll [--json]", ["orca computer scroll --help"]),
      cmd("orca computer drag", "在应用元素或窗口坐标之间拖拽。", "orca computer drag [--json]", ["orca computer drag --help"]),
      cmd("orca computer type-text", "在当前应用焦点输入字面文本。", "orca computer type-text [--json]", ["orca computer type-text --help"]),
      cmd("orca computer press-key", "按单个键，例如 Return 或 Escape。", "orca computer press-key [--json]", ["orca computer press-key --help"]),
      cmd("orca computer hotkey", "按组合快捷键，例如 CmdOrCtrl+A。", "orca computer hotkey [--json]", ["orca computer hotkey --help"]),
      cmd("orca computer paste-text", "走系统剪贴板路径粘贴文本。", "orca computer paste-text [--json]", ["orca computer paste-text --help"]),
      cmd("orca computer set-value", "设置可写入应用元素的值。", "orca computer set-value [--json]", ["orca computer set-value --help"]),
    ],
  },
  {
    id: "linear-cli",
    title: "Linear",
    blurb: "给 Agent 读取 Linear 工单上下文。子命令以 `orca linear --help` 为准。",
    commands: [
      cmd("orca linear", "为 Agent 读取 Linear 工单上下文。", "orca linear [--json]", ["orca linear --json", "orca linear --help"]),
    ],
  },
  {
    id: "emulator",
    title: "移动模拟器（iOS Simulator）",
    blurb: "通过 Orca 管理的桥接控制 iOS Simulator。坐标是 0..1 归一化。",
    commands: [
      cmd("orca emulator list", "列出可用 / 正在运行的模拟器（Orca 管理的 + 原始 serve-sim）。", "orca emulator list [--json]", ["orca emulator list --json"]),
      cmd("orca emulator attach", "附着 / 启动 helper，并设为该 worktree 的活动模拟器。", "orca emulator attach <device> [--json]", ["orca emulator attach \"iPhone 16\" --json"]),
      cmd("orca emulator tap", "在归一化 0..1 坐标点按（单击优先用这条）。", "orca emulator tap <x> <y> [--json]", ["orca emulator tap 0.5 0.7 --json"]),
      cmd("orca emulator type", "输入文本（仅 US ASCII）。", "orca emulator type <text> [--json]", ["orca emulator type \"hello\" --json"]),
      cmd("orca emulator gesture", "发送 begin/move/end 触点。", "orca emulator gesture <json> [--json]", ["orca emulator gesture '[{\"type\":\"begin\",\"x\":0.5,\"y\":0.8},{\"type\":\"move\",\"x\":0.5,\"y\":0.4},{\"type\":\"end\",\"x\":0.5,\"y\":0.2}]' --json"]),
      cmd("orca emulator button", "按硬件按钮（home、side_button 等）。", "orca emulator button <name> [--json]", ["orca emulator button home --json"]),
      cmd("orca emulator rotate", "旋转设备（portrait、landscape_left 等）。", "orca emulator rotate <o> [--json]", ["orca emulator rotate landscape_left --json", "orca emulator rotate portrait --json"]),
      cmd("orca emulator exec", "把原始 serve-sim 子命令透传过去（不要加 serve-sim 前缀）。", "orca emulator exec --command <text> [--json]", ["orca emulator exec --command \"tap 0.5 0.7\" --json"]),
      cmd("orca emulator kill", "停止该设备的 helper。", "orca emulator kill [--json]", ["orca emulator kill --json"]),
    ],
  },
  {
    id: "browser",
    title: "浏览器自动化",
    blurb: "驱动当前 worktree 的内置 Chromium 标签。先 snapshot 拿 @eN 引用，再 click / fill；导航或切标签后必须重新 snapshot。并发工作流优先 `tab list --json`，之后用 --page <id>。",
    commands: [
      cmd("orca tab create", "新建浏览器标签，并导航到 --url。", "orca tab create --url <url> [--profile <id>] [--worktree <selector>] [--json]", ["orca tab create --url https://example.com --profile work", "orca tab create --url https://example.com --json"]),
      cmd("orca tab list", "列出打开的浏览器标签。", "orca tab list [--worktree <selector>] [--json]", ["orca tab list --json"]),
      cmd("orca tab show", "按 page id 显示一个浏览器标签。", "orca tab show --page <id> [--json]", ["orca tab show --page page_123 --json"]),
      cmd("orca tab current", "显示当前浏览器标签。", "orca tab current [--json]", ["orca tab current --json"]),
      cmd("orca tab profile list", "列出浏览器会话配置档。", "orca tab profile list [--json]", ["orca tab profile list --json"]),
      cmd("orca tab profile create", "创建浏览器会话配置档。", "orca tab profile create [--no-ua-spoof] [--json]", ["orca tab profile create --json", "orca tab profile create --no-ua-spoof --json"]),
      cmd("orca tab profile delete", "删除浏览器会话配置档。", "orca tab profile delete --profile <id> [--json]", ["orca tab profile delete --profile work --json"]),
      cmd("orca tab profile set", "把浏览器标签切到另一个配置档。", "orca tab profile set --profile <id> [--page <id>] [--json]", ["orca tab profile set --profile work --page page_123 --json"]),
      cmd("orca tab profile show", "显示浏览器标签绑定的配置档。", "orca tab profile show [--page <id>] [--show-profile] [--json]", ["orca tab profile show --page page_123 --json"]),
      cmd("orca tab profile use-default", "把浏览器标签切回默认配置档。", "orca tab profile use-default [--page <id>] [--json]", ["orca tab profile use-default --page page_123 --json"]),
      cmd("orca tab profile clone", "把一个浏览器标签克隆到另一个配置档。", "orca tab profile clone --page <id> --profile <id> [--json]", ["orca tab profile clone --page page_123 --profile work --json"]),
      cmd("orca tab switch", "按 --index 或 --page 切换活动浏览器标签。", "orca tab switch [--index <n>] [--page <id>] [--json]", ["orca tab switch --index 1 --json", "orca tab switch --page page_123 --json"]),
      cmd("orca tab close", "按 --index / --page 关闭标签，或关闭当前标签。", "orca tab close [--index <n>] [--page <id>] [--json]", ["orca tab close --json", "orca tab close --page page_123 --json"]),
      cmd("orca snapshot", "带元素引用（@e1、@e2）的无障碍快照。", "orca snapshot [--worktree <selector>] [--json]", ["orca snapshot", "orca snapshot --json"]),
      cmd("orca goto", "把活动标签导航到 --url。", "orca goto --url <url> [--worktree <selector>] [--json]", ["orca goto --url https://example.com/login", "orca goto --url https://example.com --json"]),
      cmd("orca click", "按 --element 引用点击元素。", "orca click --element <ref> [--json]", ["orca click --element e3", "orca click --element @e3 --json"]),
      cmd("orca fill", "按 --element 引用清空并填入 --value。", "orca fill --element <ref> --value <text> [--json]", ["orca fill --element e5 --value \"hello\"", "orca fill --element @e5 --value \"search query\" --json"]),
      cmd("orca type", "在当前焦点输入 --input 文本（不需要 element）。", "orca type --input <text> [--json]", ["orca type --input \"hello\" --json"]),
      cmd("orca select", "按 --element 和 --value 选择下拉项。", "orca select --element <ref> --value <text> [--json]", ["orca select --element @e4 --value \"option-a\" --json"]),
      cmd("orca hover", "按 --element 引用悬停。", "orca hover --element <ref> [--json]", ["orca hover --element @e2 --json"]),
      cmd("orca keypress", "按下一个键（Enter、Tab、Control+a 等）。", "orca keypress --key <key> [--json]", ["orca keypress --key Enter", "orca keypress --key Tab --json"]),
      cmd("orca scroll", "按 --direction（up/down）滚动 --amount 像素。", "orca scroll --direction <dir> [--amount <pixels>] [--json]", ["orca scroll --direction down --json", "orca scroll --direction up --amount 800 --json"]),
      cmd("orca back", "浏览器历史后退。", "orca back [--json]", ["orca back --json"]),
      cmd("orca reload", "重新加载活动浏览器标签。", "orca reload [--json]", ["orca reload --json"]),
      cmd("orca screenshot", "捕获视口截图（--format png|jpeg）。", "orca screenshot [--format png|jpeg] [--json]", ["orca screenshot --json", "orca screenshot --format png --json"]),
      cmd("orca eval", "在页面上下文里求值 --expression JavaScript。", "orca eval --expression <js> [--json]", ["orca eval --expression \"document.title\"", "orca eval --expression \"document.title\" --json"]),
      cmd("orca wait", "等待页面空闲，或等待 --timeout 毫秒。", "orca wait [--timeout <ms>] [--json]", ["orca wait --json", "orca wait --timeout 5000 --json"]),
      cmd("orca check", "按 --element 勾选复选框。", "orca check --element <ref> [--json]", ["orca check --element @e8 --json"]),
      cmd("orca uncheck", "按 --element 取消勾选复选框。", "orca uncheck --element <ref> [--json]", ["orca uncheck --element @e8 --json"]),
      cmd("orca focus", "按 --element 聚焦元素。", "orca focus --element <ref> [--json]", ["orca focus --element @e5 --json"]),
      cmd("orca clear", "按 --element 清空输入框。", "orca clear --element <ref> [--json]", ["orca clear --element @e5 --json"]),
      cmd("orca drag", "把 --from 引用拖到 --to 引用。", "orca drag --from <ref> --to <ref> [--json]", ["orca drag --from @e1 --to @e9 --json"]),
      cmd("orca upload", "把 --files 上传到 --element 指向的文件输入。", "orca upload --element <ref> --files <path,...> [--json]", ["orca upload --element @e3 --files D:\\\\workspace_test\\\\github_desk\\\\test\\\\readme.md --json"]),
      cmd("orca dblclick", "按 --element 双击。", "orca dblclick --element <ref> [--json]", ["orca dblclick --element @e2 --json"]),
      cmd("orca forward", "浏览器历史前进。", "orca forward [--json]", ["orca forward --json"]),
      cmd("orca scrollintoview", "把 --element 滚进视口。", "orca scrollintoview --element <ref> [--json]", ["orca scrollintoview --element @e12 --json"]),
      cmd("orca get", "读取元素属性（--what: text、html、value、url、title）。", "orca get --element <ref> --what text|html|value|url|title [--json]", ["orca get --element @e1 --what text --json", "orca get --element @e1 --what html --json"]),
      cmd("orca is", "检查元素状态（--what: visible、enabled、checked）。", "orca is --element <ref> --what visible|enabled|checked [--json]", ["orca is --element @e8 --what visible --json", "orca is --element @e8 --what checked --json"]),
      cmd("orca inserttext", "插入文本，不派发按键事件。", "orca inserttext [--json]", ["orca inserttext --help"]),
      cmd("orca mouse move", "把鼠标移到 --x --y。", "orca mouse move --x <n> --y <n> [--json]", ["orca mouse move --x 120 --y 80 --json"]),
      cmd("orca mouse down", "按下鼠标键。", "orca mouse down [--json]", ["orca mouse down --json"]),
      cmd("orca mouse up", "松开鼠标键。", "orca mouse up [--json]", ["orca mouse up --json"]),
      cmd("orca mouse wheel", "滚动滚轮 --dy，可选 --dx。", "orca mouse wheel --dy <n> [--dx <n>] [--json]", ["orca mouse wheel --dy 400 --json", "orca mouse wheel --dy 200 --dx 0 --json"]),
      cmd("orca find", "按定位器查找元素（--locator role|text|label --value <v>）。", "orca find --locator role|text|label --value <v> [--json]", ["orca find --locator text --value \"Sign in\" --json", "orca find --locator role --value button --json"]),
      cmd("orca set device", "模拟设备（--name \"iPhone 12\"）。", "orca set device --name <name> [--json]", ["orca set device --name \"iPhone 12\" --json"]),
      cmd("orca set offline", "切换离线模式（--state on|off）。", "orca set offline --state on|off [--json]", ["orca set offline --state on --json", "orca set offline --state off --json"]),
      cmd("orca set headers", "设置 HTTP 头（--headers '{\"key\":\"val\"}'）。", "orca set headers --headers <json> [--json]", ["orca set headers --headers '{\"X-Debug\":\"1\"}' --json"]),
      cmd("orca set credentials", "设置 HTTP 认证（--user --pass）。", "orca set credentials --user <u> --pass <p> [--json]", ["orca set credentials --user demo --pass secret --json"]),
      cmd("orca set media", "设置配色方案（--color-scheme dark|light）。", "orca set media --color-scheme dark|light [--json]", ["orca set media --color-scheme dark --json"]),
      cmd("orca clipboard read", "读取剪贴板内容。", "orca clipboard read [--json]", ["orca clipboard read --json"]),
      cmd("orca clipboard write", "把 --text 写入剪贴板。", "orca clipboard write --text <text> [--json]", ["orca clipboard write --text \"hello\" --json"]),
      cmd("orca dialog accept", "接受浏览器对话框（prompt 用 --text 作答）。", "orca dialog accept [--text <text>] [--json]", ["orca dialog accept --json", "orca dialog accept --text \"yes\" --json"]),
      cmd("orca dialog dismiss", "关闭浏览器对话框。", "orca dialog dismiss [--json]", ["orca dialog dismiss --json"]),
      cmd("orca storage local get", "按 --key 读取 localStorage。", "orca storage local get --key <key> [--json]", ["orca storage local get --key theme --json"]),
      cmd("orca storage local set", "设置 localStorage --key --value。", "orca storage local set --key <key> --value <text> [--json]", ["orca storage local set --key theme --value dark --json"]),
      cmd("orca storage local clear", "清空 localStorage。", "orca storage local clear [--json]", ["orca storage local clear --json"]),
      cmd("orca storage session get", "按 --key 读取 sessionStorage。", "orca storage session get --key <key> [--json]", ["orca storage session get --key nonce --json"]),
      cmd("orca storage session set", "设置 sessionStorage --key --value。", "orca storage session set --key <key> --value <text> [--json]", ["orca storage session set --key nonce --value abc --json"]),
      cmd("orca storage session clear", "清空 sessionStorage。", "orca storage session clear [--json]", ["orca storage session clear --json"]),
      cmd("orca download", "通过 --selector 把文件下载到 --path。", "orca download --selector <sel> --path <path> [--json]", ["orca download --selector a.download --path D:\\\\workspace_test\\\\github_desk\\\\test\\\\out.bin --json"]),
      cmd("orca highlight", "在页面上高亮 --selector。", "orca highlight --selector <sel> [--json]", ["orca highlight --selector main --json"]),
      cmd("orca exec", "运行任意 agent-browser 命令（--command \"...\"）。", "orca exec --command <text> [--json]", ["orca exec --command \"snapshot\" --json"]),
    ],
  },
];

export const CLI_COMMANDS: CliCommand[] = CLI_CATEGORIES.flatMap((c) => c.commands);

export const CLI_COMMAND_COUNT = CLI_COMMANDS.length;

export const CLI_COMMAND_TOC = [
  { id: "conventions", text: "使用约定", level: 2 as const },
  ...CLI_CATEGORIES.map((c) => ({ id: c.id, text: c.title, level: 2 as const })),
];

