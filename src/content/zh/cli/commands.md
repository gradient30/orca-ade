# 命令使用 {#cli-commands}

本页按 `orca help` **当前输出**分类收录全部命令：中文说明、用法、真实可跑的示例。卡片可搜索、可按类过滤。

> 数据源就是这份 `orca help`。**没有写进该帮助的旗帜，这里也不编。** 某条命令的完整标志以 `orca <command> --help`（以及 `orca skills get …`）为准。

## 使用约定 {#conventions}

- Linux 上可执行文件是 `orca-ide`，把下面的 `orca` 读成 `orca-ide`。见 [安装 → Linux](/docs/install#linux)。
- 多数命令需要正在运行的 Orca 运行时。还没打开时先 `orca open`。
- 远程运行时：`--pairing-code` / `--environment`，或环境变量 `ORCA_PAIRING_CODE` / `ORCA_ENVIRONMENT`。
- 自动化和 Agent 优先加 `--json`。
- 终端句柄来自 `orca terminal list --json`；Orca 重启或句柄过期后重新 list。
- 选择器：
  - `--repo`：`id:<id>`、`name:<name>`、`path:<path>`
  - `--worktree`：`identity:<identity>`、`id:<repo-id>::<path>`、`name:<displayName>`、`branch:<branch>`、`issue:<number>`、`path:<path>`、`active` / `current`
  - `--parent-worktree` 同上；独立任务用 `--no-parent`
  - `--terminal`：运行时签发的 handle
- 浏览器：先 `orca snapshot` 拿 `@eN` 引用，再 `click` / `fill`。导航或切标签后必须重新 snapshot。并发工作流优先 `orca tab list --json`，之后用 `--page <id>`。

更深的工作流仍在专题页：[概览](/docs/cli/overview) · [参考](/docs/cli/reference) · [编排](/docs/cli/orchestration) · [自动化](/docs/cli/automations) · [Computer Use](/docs/cli/computer-use) · [技能](/docs/cli/skills)。

下面是完整命令卡片。
