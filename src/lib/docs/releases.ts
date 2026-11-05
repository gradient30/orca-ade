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
    "tag": "v1.4.249",
    "date": "2026-11-04",
    "dateLabel": "2026年11月4日",
    "title": "更轻松的设置、更可控的聊天与更整洁的工作区 ✨",
    "highlights": [
      "**设置与技能：** 引导时可选择聊天或终端，使用更新的 Agent 选择器与主题步骤，并在本机为所选提供方安装聊天技能。在路由支持时，新添加的空项目可打开所选聊天 Agent。",
      "**聊天行为：** 在投递不确定与 Stop 时保留输入与排队的后续消息。新设置可控制发送时的滚动位置，以及空闲聊天 Agent 何时停止。已加载的聊天图片在滚动与切换工作区时保持可见；Pi 压缩会挂起发送直至完成。",
      "**Agent 选择：** 托管 Claude 账户在默认值未改时会保留之后的 `/model` 与 effort 选择。显示 Claude 回退时不改动已保存的模型选择；OpenCode 的 effort 跟随所选模型；Claude 聊天新增 Ultracode effort。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.249",
    "href": "/docs/changelog#v1-4-249"
  },
  {
    "tag": "v1.4.248",
    "date": "2026-11-04",
    "dateLabel": "2026年11月4日",
    "title": "更可靠的终端、更稳妥的聊天与更易用的 AI 选择 ✨",
    "highlights": [
      "**终端：**远程流在输出流动时保持连接，代理标识在守护程序重启后仍然存在，移动输入按顺序流水线传输，长电话消息到达Windows Codex。加载字体后，书呆子字体符号会重新绘制，关闭的终端工作人员可以从其编排卡中重新打开。",
      "**聊天连续性：**流式回复会在收到提示后保留。转弯失败后，后续行动仍在排队，发送被拒绝时会识别过期的附件，并且可以从结构化聊天中打开粘贴的文本。",
      "**代理启动和选择：**第一次尝试后会显示最终的启动拒绝，而不是重复重试；临时故障仍会恢复。当您未选择覆盖时，聊天会保留配置的工作量，并且源代码管理文本操作使用“模型”和“工作量”菜单。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.248",
    "href": "/docs/changelog#v1-4-248"
  },
  {
    "tag": "v1.4.247",
    "date": "2026-11-03",
    "dateLabel": "2026年11月3日",
    "title": "改进的聊天界面、更丰富的手机审阅，以及更多让 Orca 归你所有的方式 ✨",
    "highlights": [
      "**聊天界面：**直接在聊天界面设置中为每个客服代表选择聊天或CLI。权限选项保持可见，模型和工作量控件在选项刷新时保持可用，而作曲家的焦点保持开放的叠加层。",
      "**对话连续性：**从终端移动到聊天时保留未发送的文本，并在保存繁忙时保留收到的回复和工具结果。重置聊天使用限制后，开启自动继续功能以恢复聊天。",
      "**电话源代码管理：**在自己的页面上查看每个分支提交，在文件之间跳转，折叠差异上下文，并在代码旁边阅读或添加审阅注释。拉取请求选项卡侧重于阻止合并的内容，具有更清晰的下一步操作和自动刷新。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.247",
    "href": "/docs/changelog#v1-4-247"
  },
  {
    "tag": "v1.4.246",
    "date": "2026-11-02",
    "dateLabel": "2026年11月2日",
    "title": "Orchestrator V3、改进的终端、聊天界面走出实验，以及焕新的手机应用 ✨",
    "highlights": [
      "**移动主题和语言选择器：**为手机应用选择**浅色、深色或系统**，然后在设置→外观和语言中选择您的**显示语言**。",
      "**全新的手机应用程序：**主屏幕侧重于您需要的内容、紧凑的顶部栏、底部搜索、过滤芯片、更清晰的列表和更流畅的工作表。工作区列表加载的数据更少，图像和Mermaid 图图支持按压到缩放， iOS可以显示内联HTML卡和预览。也可以通过手机运行自动化功能。",
      "**插件：**默认情况下，社区目录是可见的，具有公共安装计数和更清晰的发布者信息。插件作者无需单独的构建步骤、基于组件的面板、工作者通信、热重新加载和用于测试和屏幕截图的CLI工具即可获得TypeScript和TSX。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.246",
    "href": "/docs/changelog#v1-4-246"
  },
  {
    "tag": "v1.4.245",
    "date": "2026-10-30",
    "dateLabel": "2026年10月30日",
    "title": "更快的 Orca、插件与后台电脑操控 ⚡",
    "highlights": [
      "**更快的 Orca：**在数百个聊天下仍保持快速。输入更跟手，隐藏的聊天在你用其他标签时少做无用功。",
      "**插件：**在 Settings → Plugins 添加图标主题、语法高亮与自定义编辑器。社区发布即将到来，届时可分享自己的插件。",
      "**Mac 后台电脑操控：**Agent 可在 Chrome、Blender 等应用中工作，你仍可继续使用鼠标键盘。Orca 应用内浏览器本就可在后台运行；现在电脑操控也可以。部分操作仍需把应用带到前台。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.245",
    "href": "/docs/changelog#v1-4-245"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
