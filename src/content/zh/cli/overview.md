# Orca CLI 概览 {#orca-cli-overview}

Orca CLI 是 `orca` 命令行界面，用来从任意 shell 脚本化正在运行的 Orca 编辑器。用它创建和查看 worktree、驱动 Agent 终端、打开文件和 diff、自动化内置浏览器、运行定时自动化、分享 HTML/Markdown artifacts，以及从脚本或 AI Agent 控制 Orca 原生工具。

它随桌面应用一起提供；在 [Settings → General → Orca CLI](/docs/settings) 下注册。Linux 上命令是 `orca-ide`，因为 GNOME Orca 的屏幕阅读器已经占用 `/usr/bin/orca`——见 [安装 → Linux](/docs/install#linux)。

当前 `orca help` 里的全部命令、中文说明和可跑示例见 [命令使用](/docs/cli/commands)。本页是能力概览；选择器和更深的标志仍在 [Orca CLI 参考](/docs/cli/reference)。

Agent 可以用以下命令安装对应的 Orca CLI 技能：

```bash
npx skills add https://github.com/stablyai/orca --skill orca-cli
# headless / no Settings UI:
orca skills install --skill orca-cli
```

每个可安装的 Orca 技能见 [技能注册表与 MCP](/docs/cli/skills)，包括 `orca skills install` / `orca skills update`。

## 安装与验证 {#install-verify}

```
command -v orca
orca status --json
```

## Worktree 命令 {#worktree-commands}

```
orca worktree ps --json
orca worktree create --repo id:<repoId> --name my-task --issue 123 --json
orca worktree current --json
orca worktree set --worktree active --comment "reproduced bug" --json
orca worktree rm --worktree id:<id> --force --json
```

选择器、setup 标志、父子 worktree 以及更完整的命令表，见 [Orca CLI 参考](/docs/cli/reference)。与当前 `orca help` 对齐的卡片式全表见 [命令使用](/docs/cli/commands)。

## 终端命令 {#terminal-commands}

```
orca terminal list --json
orca terminal read --json
orca terminal send --text "continue" --enter --json
orca terminal wait --for tui-idle --timeout-ms 30000 --json
orca terminal create --worktree path:/projects/app --command "npm test" --json
orca terminal split --direction vertical --command "npm run dev" --json
```

对于有跟踪的多 Agent 工作，请用 [编排](/docs/cli/orchestration)，而不是普通的终端 prompt。

## 文件命令 {#file-commands}

从 shell 在当前活动的 Orca worktree 里打开文件和 diff：

```
orca file open src/App.tsx
orca file diff src/App.tsx --staged
orca file open-changed --mode both
```

当 shell 的当前目录不在目标 worktree 内时，使用 `--worktree <selector>`。

## 浏览器配置档 {#browser-profiles}

浏览器配置档隔离标签的会话状态，因此脚本或 Agent 可以用不同的 cookies、local storage 和已登录身份来测试。CLI 在 `orca tab profile` 下提供配置档命令；从 `orca tab profile list --json` 开始，然后按需使用 `create`、`set`、`clone` 或 `use-default`。

## 定时自动化 {#scheduled-automations}

用 `orca automations` 从 shell 创建、查看、运行和删除计划中的 Orca 任务。当你想让一段周期性 prompt 针对某个仓库或已有 worktree 运行时，从 [定时自动化](/docs/cli/automations) 开始。

## Artifacts {#artifacts}

通过已登录的 Orca 账号，把 HTML 或 Markdown 分享为公开查看链接（`orca artifacts share|update|list|delete`）。发布是 **选择加入** 的，在 Settings → Artifacts 下开启。命令细节：[CLI 参考 → Artifacts](/docs/cli/reference#artifacts)。

## 浏览器自动化 {#browser-automation}

CLI 还用 snapshot-interact-re-snapshot 循环驱动内置浏览器：

```
orca goto --url https://example.com --json
orca snapshot --json     # returns refs like @e1, @e3
orca click --element @e3 --json
orca fill --element @e1 --value "user@example.com" --json
orca screenshot --json
```

做响应式浏览器检查时，把活动标签切到命名的设备配置档：

```
orca set device --name "iPhone 12" --json
orca screenshot --json
```

## 移动模拟器 {#mobile-emulator}

CLI 也可以通过 Orca 的移动模拟器桥接驱动 iOS Simulator。它限定在当前活动的 worktree，因此 Agent 和脚本可以从 `orca emulator list` 附着模拟器、点按归一化坐标、输入文本、发送手势、旋转设备，并在不离开 Orca 的情况下关闭它。

```
orca emulator list --json
orca emulator attach "<device-name-or-udid>" --json
orca emulator tap 0.5 0.7 --json
orca emulator type "hello" --json
orca emulator gesture '[{"type":"begin","x":0.5,"y":0.8},{"type":"move","x":0.5,"y":0.4},{"type":"end","x":0.5,"y":0.2}]' --json
orca emulator rotate landscape_left --json
orca emulator kill --json
```

脚本需要明确目标时，使用 `--worktree <selector>`、`--device <udid-or-name>` 或 `--emulator <id>`。

> 与当前 `orca help` 对齐的命令卡片见 [命令使用](/docs/cli/commands)。更深的选择器和专题标志见 [Orca CLI 参考](/docs/cli/reference)，然后安装 Orca CLI 技能（见 [技能注册表](/docs/cli/skills)），并把它交给你的 Agent。
