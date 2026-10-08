export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest 5 desktop releases. Refreshed by scripts/sync-releases.ts from GitHub. */
export const RELEASES: ReleaseNote[] = [
  {
    "tag": "v1.4.222",
    "date": "2026-10-07",
    "dateLabel": "2026年10月7日",
    "title": "OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑",
    "highlights": [
      "OpenCode worker 会等到 OpenCode 能提交再交任务，不再把任务留在输入框。可用指定模型而不改其他启动的默认；OpenCode 2.0.12 自己发首条 prompt，插件装到该终端实际读取设置的位置。",
      "侧栏里显示的远程计算机在保存设置时不再消失。折叠子项的工作区可以拖动且不再把侧栏拖崩；删除对话框不再跳动；Create worktree 立刻关闭，设置脚本在后台检查。",
      "大 CSV 不必一次载入整文件，可调列宽、打开链接、编辑单元格、增删行列、复制粘贴和排序筛选，并记住列宽。确认日文、中文或韩文的 Enter 不再同时提交字段。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.222",
    "href": "/docs/changelog#v1-4-222"
  },
  {
    "tag": "v1.4.221",
    "date": "2026-10-05",
    "dateLabel": "2026年10月5日",
    "title": "Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex",
    "highlights": [
      "Copilot 安全修复：信任文件夹时不再把 ~/.copilot/config.json 留成其他用户可读。v1.4.219 和 v1.4.220 在 SSH 主机上也会这样；现在写入后只对所有者可读，旧文件会在下次添加文件夹时修好。",
      "Windows 上的 Codex 改用你自己的 ~/.codex，与 Orca 外一致。只在 Orca 里的登录会复制过去；仅 Orca 有的 MCP 需要重加。更新前已打开的终端继续用旧文件夹，不再提示重启。",
      "worker-start 接受尚未列出的 Codex 模型的 max 和 ultra effort。Qoder、Qwen Code 与独立 GLM Coding Plans 可用；OpenCode 和 Devin 可分开保留账户配置。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.221",
    "href": "/docs/changelog#v1-4-221"
  },
  {
    "tag": "v1.4.220",
    "date": "2026-10-04",
    "dateLabel": "2026年10月4日",
    "title": "Native Chat 的 Stop 会结束进程，SSH 可选自带运行时",
    "highlights": [
      "Native Chat（实验性）：Stop 会结束 Claude 的进程，包括后台命令和子 Agent。Codex 拒绝或不应答停止时，Orca 也会结束它。未发送的消息保持未发送直到 Retry，被插入的消息不会重复发送。",
      "SSH 主机：可选的 Orca 运行时不需要主机上的 Node、npm 或编译器；Auto 仍是默认。标准 Windows SSH 账户可用，重连期间的按键会保留。",
      "工作区与拖放：大仓库创建更快，删除不再卡住聊天或文件，后台完成不再切换视图。Mac 截图缩略图拖进本地 Claude Code 终端时，Agent 能读到可读副本。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.220",
    "href": "/docs/changelog#v1-4-220"
  },
  {
    "tag": "v1.4.219",
    "date": "2026-10-02",
    "dateLabel": "2026年10月2日",
    "title": "Codex 共用服务器会提示，启动 Agent 时预信任文件夹",
    "highlights": [
      "Codex 终端：与其他标签共用后台服务器时顶部出现提示，**Fix** 会关掉共享并显示将执行的命令。fish 里输入 `codex` 也会走独立服务器。打开终端不再剥掉 `~/.codex` 的状态 hook，也不再往 `config.toml` 写重复信任项。",
      "文件夹信任：启动 Claude Code、Codex、Cursor、Copilot、Qoder 或 Antigravity 时预先回答 “Do you trust this folder?”。可在 Settings → Agents → “Trust the folder when Orca starts an agent” 关掉。",
      "状态与终端：多个 OpenCode 2 窗格各自显示 Working / Done；Windows PowerShell 5.1 上 Claude Code 状态恢复。文件名带括号或空格的图片可拖入。Hyprland 等桌面在钥匙环解锁时加密保存的密钥。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.219",
    "href": "/docs/changelog#v1-4-219"
  },
  {
    "tag": "v1.4.218",
    "date": "2026-09-30",
    "dateLabel": "2026年9月30日",
    "title": "Codex 终端可独立服务器，内置更多 Agent",
    "highlights": [
      "Codex 终端：Settings → Agents 新增 **「Run each Codex terminal on its own server」** 开关，默认打开。关掉则回到 Codex 共用服务器。从 cmd.exe、完整路径或等待安装完成后启动的 Codex 也会走独立服务器。忙碌的 0.150–0.157 标签不再显示空闲。",
      "更多 Agent：内置 DeepSeek Harness、Freebuff、Qoder、CodeBuddy，侧栏显示状态；ZCode CLI 会话进历史，Coding Plan 额度进用量。",
      "终端：右键新增 **Reset Terminal** 清除崩溃程序留下的键盘/鼠标模式；不再误关仍在运行程序的模式。SSH 清理与本地一致；保存失败不再误报磁盘已满。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.218",
    "href": "/docs/changelog#v1-4-218"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
