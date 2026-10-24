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
    "tag": "v1.4.238",
    "date": "2026-10-23",
    "dateLabel": "2026年10月23日",
    "title": "- Your edits stay together: …",
    "highlights": [
      "- **Your edits stay together:** Tabs of the same file share unsaved text across workspaces. Conflict review sees that live text, workspace deletion lists unsaved files, and stale Markdown or notebook edits no longer overwrite newer work.",
      "- **Chats that keep up:** Codex and Pi show turns made outside the chat. Long pastes can become text attachments, Codex questions get answer cards, and OMP gains image sending and actionable plan-review cards.",
      "- **More control over agents:** Pick chat or terminal when creating a workspace, set that choice for your default agent, add Claude and Codex accounts on supported remote servers, and install shared skills for 11 more agents."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.238",
    "href": "/docs/changelog#v1-4-238"
  },
  {
    "tag": "v1.4.237",
    "date": "2026-10-21",
    "dateLabel": "2026年10月21日",
    "title": "手机端能做的更多：笔记、无头 Markdown，以及更稳的聊天与远程",
    "highlights": [
      "手机端能做的更多：创建和编辑笔记，在无头宿主上保存 Markdown，跟随相对文件链接，并查看内嵌图片。缓冲的终端草稿在切换工作区后也能保留。",
      "聊完还能回来：Codex 聊天在撤销后能正确重开，Claude 在 Orca 回滚后仍保留已 Rewind 的上下文，截图会跟着对话走。Codex 技能选择器现在反映 Codex 实际加载的技能。",
      "工作更受保护：Discard 会暂停跨工作区对同一文件的自动保存。只读 Markdown / CSV 视图保护未保存编辑；新建、未暂存的 Markdown 会直接进入富文本编辑器。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.237",
    "href": "/docs/changelog#v1-4-237"
  },
  {
    "tag": "v1.4.235",
    "date": "2026-10-20",
    "dateLabel": "2026年10月20日",
    "title": "Claude 聊天可 Rewind 到任意一轮，每段对话记住自己的模型设置",
    "highlights": [
      "Rewind Claude 聊天：在开启一轮的消息上使用 **Rewind to here**，编辑 prompt，把对话带向新方向。Claude 从你保留的历史继续。",
      "你的聊天，你的设置：每段对话记住自己的模型、effort 与 Fast 设置。切换模型会保留兼容选项；改 Agent 默认值不会再静默挪动已记录设置的聊天。",
      "保留更多 Agent 产出：已完成回复与工具结果完整保存，而不在预览上限处截断。桌面或手机用 **Show full output**，手机也可用 **Show full message**，从缩短预览加载更多内容。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.235",
    "href": "/docs/changelog#v1-4-235"
  },
  {
    "tag": "v1.4.233",
    "date": "2026-10-20",
    "dateLabel": "2026年10月20日",
    "title": "SSH 与远程工作区：无下载也能连通，Settings 里远程服务器更清晰",
    "highlights": [
      "SSH 与远程工作区：双方都无法下载 Node.js 时仍可连接 SSH 主机，Orca 会记住并重试一键镜像。更旧的 Windows 主机（Windows 10 1809 与 Server 2019）可跑 Orca 服务器；端口被旧 SSH 连接占用时隧道能恢复。",
      "Settings 中的远程服务器：Remote Orca Servers 收成一份列表而不是六个分区；SSH 主机可批量移除且保持移除。同一服务器保存两次时会提示；再次添加已保存的服务器会更新它。",
      "手机端：从手机创建工作区更快，工作区列表与桌面保持同步，会话标签图标在长标题旁仍保持尺寸。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.233",
    "href": "/docs/changelog#v1-4-233"
  },
  {
    "tag": "v1.4.232",
    "date": "2026-10-20",
    "dateLabel": "2026年10月20日",
    "title": "自动权限进聊天与终端，Native Chat 支持 OpenCode 2 与 $ 技能",
    "highlights": [
      "自动权限，聊天与终端通用：在 Settings → Agents 选择 **Manual | Auto | Yolo**。Auto 让受支持的 Claude 与 Codex Agent 处理批准，新的 Native Chat 也跟随你的选择。可为其他 Agent 单独选权限模式；已有聊天保留各自设置。",
      "实验性 Native Chat：直接在聊天中打开 OpenCode 2，输入 `$` 查找 Codex 技能，并可平移缩放图片预览。长对话支持 Rewind；用量上限会显示何时重置，并提供 **Continue** 按钮接上对话。",
      "更好的手机输入区：可附加文件与照片，内联插入技能，并在同一面板选择模型、effort 与权限。切换应用后恢复更快，终端滚动更跟手，离开桌面也能继续工作。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.232",
    "href": "/docs/changelog#v1-4-232"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
