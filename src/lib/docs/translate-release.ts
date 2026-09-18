import type { LiveRelease } from "./github-releases";
import type { ReleaseNote } from "./releases";

const HEADINGS: Record<string, string> = {
  "The short version": "简要说明",
  "Notable changes": "重点变化",
  "Product experience": "产品体验",
  "Workspaces & projects": "工作区与项目",
  "Editor, browser & UI": "编辑器、浏览器与界面",
  "Settings & localization": "设置与本地化",
  "Agents & workflow": "Agent 与工作流",
  "Agents & native chat": "Agent 与 Native Chat",
  Automations: "自动化",
  "Terminal & CLI": "终端与 CLI",
  "Remote & platform": "远程与平台",
  "SSH, relay & remote": "SSH、中继与远程",
  "Windows & WSL": "Windows 与 WSL",
  Mobile: "移动端",
  "Quality & delivery": "质量与交付",
  "Performance: interface & workspace": "性能：界面与工作区",
  "Performance: terminal & remote": "性能：终端与远程",
  "Performance: core & infrastructure": "性能：核心与基础设施",
  "Testing & reliability": "测试与可靠性",
  "Release, CI & documentation": "发布、CI 与文档",
  "New Contributors": "新贡献者",
  "UI / workspaces": "界面与工作区",
  "Agents / native chat": "Agent 与 Native Chat",
  Terminal: "终端",
  "Windows, remote server / SSH": "Windows、远程服务器与 SSH",
  "Performance / reliability": "性能与可靠性",
  "Workspaces, tabs & browser": "工作区、标签页与浏览器",
  "Workspaces, tabs & editor": "工作区、标签页与编辑器",
  "Tabs & browser": "标签页与浏览器",
  "Native chat": "Native Chat",
  "Agent activity & results": "Agent 活动与结果",
  "Composer & controls": "编写器与控件",
  "Chat & workspace routing": "聊天与工作区路由",
  "Performance: interface, chat & workspaces": "性能：界面、聊天与工作区",
  "Performance: terminals, tunnels & runtime": "性能：终端、隧道与运行时",
  "Performance: data & integrations": "性能：数据与集成",
  "Reliability & maintenance": "可靠性与维护",
  "What's Changed": "本版本改动",
  "Agent reliability & native chat": "Agent 可靠性与 Native Chat",
  "Relay & cloud": "中继与云端",
  "Performance improvements": "性能改进",
  "Reliability, tests & delivery": "可靠性、测试与交付",
  "New contributors": "新贡献者",
  "Source control": "源码管理",
  "Workspaces, editor & source control": "工作区、编辑器与源码管理",
  "Terminal & remote": "终端与远程",
  Performance: "性能",
  "Agent & chat": "Agent 与聊天",
  "Agents & chat": "Agent 与聊天",
  "Workspaces & mobile": "工作区与移动端",
  "Reliability & security": "可靠性与安全",
};

const TYPES: Record<string, string> = {
  fix: "修复",
  feat: "新增",
  perf: "性能",
  docs: "文档",
  doc: "文档",
  test: "测试",
  ci: "CI",
  chore: "杂项",
  refactor: "重构",
  revert: "回退",
  infra: "基础设施",
  style: "样式",
  build: "构建",
  i18n: "本地化",
};

const PHRASES: [string, string][] = [
  ["Thank you so much for using Orca and for your continued support! ❤️", "感谢使用 Orca，也感谢一直以来的支持。"],
  ["Thank you so much for using Orca and for your continued support!", "感谢使用 Orca，也感谢一直以来的支持。"],
  [
    "Please note: It usually takes 48–72 hours for a landed PR to be released (except P0+ fixes). We have many more exciting PRs and features coming in later versions!",
    "说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。",
  ],
  [
    "Improved Codex chat UI is available when **Structured Chat** is enabled in Experimental settings, with inline file diffs, pane actions, clearer tool output, individual task stops, and structured mobile Codex chat.",
    "在实验设置中开启 **Structured Chat** 后，可使用改进的 Codex 聊天界面：行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。",
  ],
  [
    "GitHub Projects Roadmap views now render as timelines; the desktop also adds tab scrolling, narrower tabs, and refreshed notifications.",
    "GitHub Projects 的 Roadmap 视图改为时间线；桌面端增加标签滚动、更窄标签，并刷新了通知。",
  ],
  [
    "Faster workspace, renderer, editor, terminal, Git, and remote operations, alongside stronger SSH relay and Windows/WSL recovery.",
    "工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。",
  ],
  [
    "Faster worktree, renderer, editor, browser, terminal, and Git operations across local and remote workspaces.",
    "本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。",
  ],
  [
    "More resilient agent sessions, native chat, SSH relay recovery, and Windows/WSL execution.",
    "Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。",
  ],
  [
    "Expanded workspace, terminal, CLI, cloud, and cross-platform reliability improvements.",
    "工作区、终端、CLI、云端与跨平台可靠性进一步增强。",
  ],
  [
    "Faster worktree switching, Git metadata scans, terminal startup, and renderer updates across local, WSL, and remote workspaces.",
    "本地、WSL 与远程工作区的 worktree 切换、Git 元数据扫描、终端启动和渲染器更新更快。",
  ],
  [
    "More reliable native chat and agent sessions, including large command results, live tool progress, image attachments, and delivery recovery.",
    "Native Chat 与 Agent 会话更可靠：大命令结果、实时工具进度、图片附件与投递恢复。",
  ],
  [
    "Broader SSH, Windows/WSL, GitLab, updater, startup, and release reliability improvements.",
    "SSH、Windows/WSL、GitLab、更新器、启动与发布流程的可靠性覆盖更广。",
  ],
  [
    "Add project is back where you can find it.",
    "「Add project」又回到你找得到的地方了。",
  ],
  ["Structured chat grew up.", "Structured Chat 更成熟了。"],
  ["Remote work holds on better.", "远程工作更稳了。"],
  ["It's quicker.", "更快了。"],
  ["Two things were pulled.", "有两项被撤回。"],
  [
    "Native chat: Claude subagent activity and Codex background tasks are now visible in chat. Completed turns show changed files, and task updates stream into the composer.",
    "Native Chat：Claude 子 Agent 活动与 Codex 后台任务会显示在聊天里。完成的回合会列出变更文件，任务更新会流入编写器。",
  ],
  [
    "Orchestration: Worker-terminal ownership is established at creation. Startup, mobile input, and older federation coordinators have additional recovery safeguards.",
    "编排：Worker 终端从创建起就有主人。启动、移动端输入以及旧联邦协调器增加了恢复保护。",
  ],
  [
    "Workspace & browser: Background browser tabs load on open, and creating a chat preserves the active worktree.",
    "工作区与浏览器：后台浏览器标签打开即加载；创建聊天时保留当前 worktree。",
  ],
  [
    "Keep the current worktree selected, and trust a newly opened browser tab to be ready when you visit it.",
    "保持当前 worktree 选中；新打开的浏览器标签在你访问时已经就绪。",
  ],
  [
    "The conversation gives you a much better read on what an agent did, is doing, and has delegated.",
    "对话能更清楚地告诉你：Agent 做了什么、正在做什么、以及委托了什么。",
  ],
  [
    "Workers have a clearer owner from their first moment and are less likely to get stranded during recovery, federation, or mobile use.",
    "Worker 从诞生起就有更明确的主人，在恢复、联邦或移动端使用时更不容易滞留。",
  ],
  [
    "Nothing here changes what you see — it changes how smoothly Orca behaves under real workloads. Expanded below if you want the detail.",
    "这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。",
  ],
  [
    "Reliability & security: Electron is updated to address a glibc environment use-after-free, browser cookie migration is more reliable, and worktree creation now completes cleanly after post-create failures.",
    "可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。",
  ],
  [
    "Agents & chat: Native chat recovers restart-stranded sends from provider history, agent status no longer depends on a retained runtime row store, and provider/model validation is more resilient.",
    "Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储；提供方/模型校验更抗故障。",
  ],
  [
    "Workspaces & mobile: Folder workspaces retain their saved names and groups, sidebar nesting is easier to work with, and mobile restores push, cold-start, notification, Markdown, and workspace-routing behavior.",
    "工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知、Markdown 与工作区路由。",
  ],
  [
    "Performance: Orca reduces cold-switching, browser, terminal, SSH, mobile, history, plugin, and relay overhead across a broad set of targeted improvements.",
    "性能：一轮针对性优化降低了冷切换、浏览器、终端、SSH、移动端、历史、插件与中继的开销。",
  ],
  [
    "Native chat adds a message rail for jumping between your prompts, keeps a resumed transcript pinned to its end, holds a detached reader in place as messages grow, and cancels pending prompts precisely. OMP conversations resume from session history under their saved names, agent-status ingress moves behind a single admission point, and a timed-out hook now actually terminates its process tree.",
    "Native Chat 增加了在提问之间跳转的消息轨道；恢复的对话会钉在末尾；消息变长时保持分离阅读位置；能精确取消待发送的提问。OMP 对话会按保存的名称从会话历史恢复；Agent 状态入口收束到单一准入点；超时的 hook 现在会真正终止其进程树。",
  ],
  [
    "A failed archive hook blocks worktree removal instead of deleting anyway, and worktree registrations survive prunable git-file states. Stage, unstage and discard failures surface with retry, automations repair cron step expansion and stop tick latency counting against the missed-run grace, code blocks gain a copy button, and Tiptap moves up behind Markdown compatibility guards.",
    "归档 hook 失败时会拦截 worktree 删除，而不是照删不误；worktree 登记能挺过可修剪的 git 文件状态。暂存 / 取消暂存 / 丢弃失败会带重试入口；自动化修复了 cron 步长展开，并把 tick 延迟排除出错过运行的宽限期；代码块增加复制按钮；Tiptap 升级并加了 Markdown 兼容防护。",
  ],
  [
    "Terminal renames survive pane hydration, handles persist across PTY incarnation rotation, and PTY child-process checks preserve an unverifiable verdict instead of guessing. Relay failures become diagnosable by acquisition versus execution phase, and streamed remote records are bounded.",
    "终端重命名能挺过窗格水合；句柄在 PTY 实例轮换后仍保留；子进程检查在无法核实时保持不确定结论，而不是猜测。中继失败可按获取阶段与执行阶段诊断；远程流式记录有上限。",
  ],
  [
    "Codex usage scans do far less work — attribution resolved once per scan, and grown rollouts resumed at the last parsed byte — which takes a large cold scan from minutes to under a minute. They still run on the main process; the worker-thread move lands in a later release.",
    "Codex 用量扫描的工作量大幅下降——每次扫描只解析一次归属，增长中的 rollout 从上次解析字节续扫——一次大型冷扫描从数分钟降到一分钟以内。扫描仍在主进程运行；迁到 worker 线程会在后续版本落地。",
  ],
  [
    "Native chat adds file drag-and-drop and provider-aware Fast mode, resumes structured chats cleanly after restart, hides idle activity, and fixes tail-read cursor and Claude-turn reopening; Grok completion/hook attribution and Claude SessionEnd handling are more correct, and agent status keys rows by agent instead of pane.",
    "Native Chat 支持文件拖放和按提供方区分的 Fast 模式；重启后能干净恢复结构化聊天；隐藏空闲活动；修复了尾读游标和 Claude 回合重开。Grok 的完成/hook 归属与 Claude SessionEnd 处理更准确；Agent 状态按 agent 而不是窗格来索引行。",
  ],
  [
    "Workspaces re-seed after agent selection, recover from activation failures, and retire orphaned chat tabs; mobile continues the typed-RPC migration across settings, source-control, and workspace creation while preserving delivery and fixing streaming jumps.",
    "工作区在选择 Agent 后会重新播种，能从激活失败中恢复，并回收无子聊天的标签。移动端继续把设置、源码管理与工作区创建迁到带类型的 RPC，同时保住投递并修复流式跳动。",
  ],
  [
    "Orca batches terminal file-link checks, dispatches browser input in-process, avoids repeated remote capability probes, skips redundant persistence flushes, and bounds WSL skill discovery.",
    "终端文件链接检查改为批量；浏览器输入在进程内派发；避免重复的远程能力探测；跳过多余的持久化刷新；限制 WSL skill 发现范围。",
  ],
  ["Reliability & security:", "可靠性与安全："],
  ["Agents & chat:", "Agent 与聊天："],
  ["Agent & chat:", "Agent 与聊天："],
  ["Workspaces & mobile:", "工作区与移动端："],
  ["Workspaces, editor & source control:", "工作区、编辑器与源码管理："],
  ["Terminal & remote:", "终端与远程："],
  ["Performance:", "性能："],
  [
    "Safer workspace creation, more reliable browser data, and clearer navigation around your projects.",
    "工作区创建更安全，浏览器数据更可靠，项目导航更清楚。",
  ],
  [
    "Agents recover more gracefully, and chat makes safer decisions when provider state or configuration changes.",
    "Agent 恢复更从容；提供方状态或配置变化时，聊天会做更稳妥的决定。",
  ],
  [
    "Mobile restores its notification and startup paths while keeping workspace and Markdown handling responsive.",
    "移动端恢复通知与启动路径，同时保持工作区与 Markdown 处理跟得上。",
  ],
  [
    "Rollout gates, monitoring, and relay rehoming have stronger compatibility and failure handling.",
    "放量门禁、监控与中继重新归属的兼容性和失败处理更强。",
  ],
  [
    "Safer worktree removal, clearer failure reporting, and a Tiptap upgrade with Markdown compatibility guards.",
    "worktree 删除更安全，失败提示更清楚，Tiptap 升级并加了 Markdown 兼容防护。",
  ],
  [
    "Staging failures are recoverable and Git spawn errors say what actually went wrong.",
    "暂存失败可恢复，Git 启动错误会说明真正原因。",
  ],
  [
    "Chat navigation and transcript positioning improve, and agent state is reported through one ingress point.",
    "聊天导航和对话定位更好，Agent 状态改由单一入口上报。",
  ],
  [
    "Renames, handles and PTY verdicts survive rotation, hydration and uncertainty.",
    "重命名、句柄和 PTY 判定能挺过轮换、水合和不确定状态。",
  ],
  ["Mobile continues its typed-RPC migration.", "移动端继续 typed-RPC 迁移。"],
  [
    "Relay failures are diagnosable by phase, and streamed remote records are bounded.",
    "中继失败可按阶段诊断，远程流式记录有上限。",
  ],
  [
    "Targeted optimizations remove repeated work from the Codex, OpenCode and Claude usage scanners and from no-op store updates. These reduce the cost of a scan; they do not yet move it off the main process.",
    "针对性优化去掉了 Codex、OpenCode 和 Claude 用量扫描以及空操作 store 更新中的重复工作。这些降低了扫描成本，但还没有把扫描移出主进程。",
  ],
  [
    "Safer workspace recovery, more responsive browser input, and clearer project views.",
    "工作区恢复更安全，浏览器输入更跟手，项目视图更清楚。",
  ],
  [
    "Chat adds drag-and-drop and Fast mode, recovers more gracefully, and reports agent state more accurately.",
    "聊天增加拖放和 Fast 模式，恢复更从容，Agent 状态上报更准。",
  ],
  [
    "Mobile continues its typed-RPC migration while keeping delivery and streaming stable.",
    "移动端继续 typed-RPC 迁移，同时保持投递和流式稳定。",
  ],
  [
    "Probes and identity validation have tighter bounds and failure handling.",
    "探测和身份校验的边界更紧，失败处理更好。",
  ],
  [
    "Targeted optimizations reduce unnecessary work across terminal, browser, remote, persistence, and skill-discovery paths.",
    "针对性优化减少了终端、浏览器、远程、持久化和 skill 发现路径上的多余工作。",
  ],
  ["made their first contribution in", "首次贡献于"],
  ["made their first contribution", "首次贡献"],
  ["What's Changed", "本版本改动"],
  ["inline file diffs", "行内文件 diff"],
  ["native chat", "Native Chat"],
  ["structured chats", "结构化聊天"],
  ["structured chat", "结构化聊天"],
  ["worktree switching", "worktree 切换"],
  ["SSH relay", "SSH 中继"],
  ["Windows/WSL", "Windows/WSL"],
  ["agent sessions", "Agent 会话"],
  ["live tool progress", "实时工具进度"],
  ["image attachments", "图片附件"],
  ["large command results", "大段命令结果"],
  ["floating workspace", "浮动工作区"],
  ["local and remote workspaces", "本地与远程工作区"],
];

PHRASES.sort((a, b) => b[0].length - a[0].length);

const CONV = /^(fix|feat|perf|docs|doc|test|ci|chore|refactor|revert|infra|style|build)(?:\(([^)]+)\))?:\s*(.+)$/i;
const BY_IN = /^(.+?)(?: by @([\w-]+))?(?: in (https:\/\/github\.com\/stablyai\/orca\/pull\/\d+))?\s*$/;
const REVERT = /^(?:Revert|revert)\s+"(.+)"\s*$/;
const CONTRIB = /^@([\w-]+)\s+made their first contribution/i;

export function dateLabel(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

export function tagAnchor(tag: string): string {
  return tag.replace(/\./g, "-");
}

function applyPhrases(text: string): string {
  let out = text;
  for (const [en, zh] of PHRASES) {
    if (out.includes(en)) out = out.split(en).join(zh);
  }
  return out;
}

const START_VERBS: [RegExp, string][] = [
  [/^Prevent /i, "防止："],
  [/^Preserve /i, "保留："],
  [/^Restore /i, "恢复："],
  [/^Support /i, "支持："],
  [/^Display /i, "显示："],
  [/^Improve /i, "改进："],
  [/^Reduce /i, "减小："],
  [/^Enable /i, "启用："],
  [/^Disable /i, "禁用："],
  [/^Import /i, "导入："],
  [/^Activate /i, "激活："],
  [/^Update /i, "更新："],
  [/^Remove /i, "移除："],
  [/^Allow /i, "允许："],
  [/^Avoid /i, "避免："],
  [/^Keep /i, "保持："],
  [/^Stop /i, "停止："],
  [/^Show /i, "显示："],
  [/^Open /i, "打开："],
  [/^Move /i, "移动："],
  [/^Let /i, "允许："],
  [/^Add /i, "新增："],
  [/^Fix /i, "修复："],
  [/^Bump /i, "升级："],
  [/^Distinguish /i, "区分："],
  [/^Surface /i, "暴露："],
  [/^Report /i, "报告："],
  [/^Expose /i, "暴露："],
  [/^Diagnose /i, "诊断："],
  [/^Migrate /i, "迁移："],
  [/^Clarify /i, "澄清："],
  [/^Bound /i, "限制："],
  [/^Hide /i, "隐藏："],
  [/^Resume /i, "恢复："],
  [/^Retire /i, "回收："],
  [/^Reject /i, "拒绝："],
  [/^Skip /i, "跳过："],
  [/^Drop /i, "去掉："],
  [/^Wait /i, "等待："],
  [/^Defer /i, "推迟："],
  [/^Derive /i, "推导："],
  [/^Announce /i, "宣告："],
  [/^Subscribe /i, "订阅："],
  [/^Ignore /i, "忽略："],
  [/^Construct /i, "构建："],
  [/^Consolidate /i, "整合："],
  [/^Validate /i, "校验："],
  [/^Give /i, "给予："],
  [/^Send /i, "发送："],
  [/^Pin /i, "钉住："],
  [/^Compile /i, "编译："],
];

function translateProse(raw: string): string {
  const phrased = applyPhrases(raw.trim());
  if (/[\u4e00-\u9fff]/.test(phrased) && phrased.length - phrased.replace(/[\u4e00-\u9fff]/g, "").length >= 10) {
    return phrased;
  }
  let s = phrased;
  s = s.replace(
    /^Faster (.+?), alongside (.+?)\.?$/i,
    (_, a: string, b: string) => `${applyPhrases(a)}更快，同时${applyPhrases(b)}`,
  );
  s = s.replace(
    /^Faster (.+?) across (.+?)\.?$/i,
    (_, a: string, b: string) => `${applyPhrases(b)}的${applyPhrases(a)}更快。`,
  );
  s = s.replace(/^Faster (.+?)\.?$/i, (_, a: string) => `${applyPhrases(a)}更快。`);
  s = s.replace(/^More resilient (.+?)\.?$/i, (_, a: string) => `${applyPhrases(a)}更抗故障。`);
  s = s.replace(
    /^More reliable (.+?), including (.+?)\.?$/i,
    (_, a: string, b: string) => `${applyPhrases(a)}更可靠：${applyPhrases(b)}`,
  );
  s = s.replace(/^More reliable (.+?)\.?$/i, (_, a: string) => `${applyPhrases(a)}更可靠。`);
  s = s.replace(/^Expanded (.+?)\.?$/i, (_, a: string) => `${applyPhrases(a)}进一步增强。`);
  s = s.replace(/^Broader (.+?)\.?$/i, (_, a: string) => `${applyPhrases(a)}覆盖更广。`);
  s = s.replace(
    /^Improved (.+?) is available when (.+?), with (.+?)\.?$/i,
    (_, a: string, b: string, c: string) => `当${applyPhrases(b)}时，可使用改进的${applyPhrases(a)}：${applyPhrases(c)}`,
  );
  if (s === phrased) {
    for (const [re, zh] of START_VERBS) {
      if (re.test(s)) {
        s = s.replace(re, zh);
        break;
      }
    }
  }
  return s;
}

function translateTitle(raw: string): string {
  const t = raw.trim();
  const rev = REVERT.exec(t);
  if (rev?.[1]) return `回退「${translateTitle(rev[1])}」`;
  const conv = CONV.exec(t);
  if (conv) {
    const kind = TYPES[conv[1]!.toLowerCase()] ?? conv[1];
    const scope = conv[2];
    const rest = applyPhrases(conv[3] ?? "");
    return scope ? `${kind}（${scope}）：${rest}` : `${kind}：${rest}`;
  }
  return translateProse(t);
}

function translateItem(line: string): string {
  const raw = line.replace(/^\*\s+/, "").trim();
  const m = BY_IN.exec(raw);
  const title = m?.[1] ?? raw;
  const user = m?.[2] ?? "";
  const url = m?.[3] ?? "";
  const contrib = CONTRIB.exec(title);
  if (contrib) {
    const handle = contrib[1]!;
    const n = url.split("/").pop();
    if (n && url) return `- [@${handle}](https://github.com/${handle}) 首次贡献于 [#${n}](${url})`;
    return `- [@${handle}](https://github.com/${handle}) 首次贡献`;
  }
  const zh = translateTitle(title);
  const bits: string[] = [];
  if (user) bits.push(`[@${user}](https://github.com/${user})`);
  if (url) {
    const n = url.split("/").pop();
    bits.push(`[#${n}](${url})`);
  }
  if (!bits.length) return `- ${zh}`;
  return `- ${zh}（${bits.join("，")}）`;
}

function headingZh(text: string, level: number, tag: string): string {
  const zh = HEADINGS[text] ?? applyPhrases(text);
  const key =
    {
      重点变化: "notable",
      简要说明: "short",
      产品体验: "product",
      工作区与项目: "workspaces",
      "编辑器、浏览器与界面": "editor-ui",
      设置与本地化: "settings",
      "Agent 与工作流": "agents-workflow",
      "Agent 与 Native Chat": "native-chat",
      自动化: "automations",
      "终端与 CLI": "terminal-cli",
      远程与平台: "remote",
      "SSH、中继与远程": "ssh-relay",
      "Windows 与 WSL": "windows-wsl",
      移动端: "mobile",
      质量与交付: "quality",
      "性能：界面与工作区": "perf-ui",
      "性能：终端与远程": "perf-terminal",
      "性能：核心与基础设施": "perf-core",
      测试与可靠性: "testing",
      "发布、CI 与文档": "release-ci",
      新贡献者: "contributors",
      界面与工作区: "ui-workspaces",
      终端: "terminal",
      "Windows、远程服务器与 SSH": "windows-ssh",
      性能与可靠性: "perf-reliability",
      "工作区、标签页与浏览器": "workspaces-tabs",
      "工作区、标签页与编辑器": "workspaces-tabs-editor",
      "标签页与浏览器": "tabs-browser",
      "Agent 活动与结果": "agent-activity",
      编写器与控件: "composer",
      聊天与工作区路由: "chat-routing",
      "性能：界面、聊天与工作区": "perf-ui-chat",
      "性能：终端、隧道与运行时": "perf-term-runtime",
      "性能：数据与集成": "perf-data",
      可靠性与维护: "reliability",
      本版本改动: "changed",
      "Agent 可靠性与 Native Chat": "agent-reliability",
      中继与云端: "relay-cloud",
      性能改进: "perf-improvements",
      "可靠性、测试与交付": "reliability-tests",
      源码管理: "source-control",
      "工作区、编辑器与源码管理": "workspaces-editor-scm",
      "终端与远程": "terminal-remote",
      性能: "performance",
      "Agent 与聊天": "agents-chat",
      "工作区与移动端": "workspaces-mobile",
      "可靠性与安全": "reliability-security",
    }[zh] ?? zh.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${"#".repeat(level)} ${zh} {#${tag}-${key}}`;
}

export function extractHighlights(body: string): string[] {
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  const short = lines.findIndex((l) => /^##\s+(The short version|简要说明)/i.test(l));
  const notable = lines.findIndex((l) => /^##\s+(Notable changes|重点变化)/i.test(l));
  if (short >= 0 && (notable < 0 || short < notable)) {
    const out: string[] = [];
    for (const line of lines.slice(short + 1)) {
      if (/^##\s+/.test(line)) break;
      const trimmed = line.trim();
      const m = /^\*\*(.+?)\*\*\s*(.*)$/.exec(trimmed);
      if (m) {
        const head = m[1]!.trim();
        const rest = (m[2] ?? "").trim();
        const combined = rest ? `${head.replace(/:$/, "：")} ${rest}` : head;
        out.push(translateProse(combined));
        if (out.length >= 3) break;
        continue;
      }
      if (!trimmed || trimmed.startsWith("*") || trimmed.startsWith("#") || trimmed.startsWith("<")) continue;
      out.push(translateProse(trimmed));
      if (out.length >= 3) break;
    }
    if (out.length) return out;
  }
  const start = notable >= 0 ? notable : -1;
  const slice = start >= 0 ? lines.slice(start + 1) : lines;
  const out: string[] = [];
  for (const line of slice) {
    if (/^##\s+/.test(line)) break;
    if (!line.startsWith("* ")) continue;
    out.push(translateTitle(line.slice(2).trim()));
    if (out.length >= 3) break;
  }
  return out;
}

export function inferTitle(highlights: string[]): string {
  const first = (highlights[0] ?? "").replace(/\*\*/g, "").trim();
  if (!first) return "官方更新";
  const afterColon = first.replace(/^[^：:]{1,24}[：:]\s*/, "");
  const source = afterColon.length > 8 ? afterColon : first;
  const cut = source.split(/[。；;]/)[0] ?? source;
  return cut.length > 28 ? `${cut.slice(0, 28)}…` : cut;
}

export function toReleaseNote(rel: LiveRelease): ReleaseNote {
  const highlights = extractHighlights(rel.body);
  const id = tagAnchor(rel.tag);
  return {
    tag: rel.tag,
    date: rel.publishedAt.slice(0, 10),
    dateLabel: dateLabel(rel.publishedAt),
    title: inferTitle(highlights),
    highlights: highlights.length ? highlights : ["详见下方完整中文日志。"],
    url: rel.url,
    href: `/docs/changelog#${id}`,
  };
}

function translateBody(rel: LiveRelease): string[] {
  const id = tagAnchor(rel.tag);
  const out: string[] = [];
  for (const line of rel.body.replace(/\r\n/g, "\n").split("\n")) {
    const s = line.trim();
    if (!s) {
      if (out.at(-1) !== "") out.push("");
      continue;
    }
    if (s.startsWith("<details") || s === "</details>") continue;
    if (s.startsWith("<summary>")) {
      const inner = s
        .replace(/<\/?summary>/gi, "")
        .replace(/<\/?b>/gi, "")
        .replace(/\s*—\s*\d+\s*PRs?/i, "")
        .trim();
      out.push(headingZh(inner, 4, id));
      out.push("");
      continue;
    }
    if (s.startsWith("**Full Changelog**") || s.startsWith("**完整变更对照**")) {
      const m = s.match(/https:\/\/github\.com\/stablyai\/orca\/compare\/\S+/);
      const url = (m?.[0] ?? "").replace(/[.)]+$/, "");
      out.push(url ? `**完整变更对照：** [${url.split("/").pop()}](${url})` : "**完整变更对照**");
      out.push("");
      continue;
    }
    if (s.startsWith("### ")) {
      out.push(headingZh(s.slice(4).trim(), 4, id));
      out.push("");
      continue;
    }
    if (s.startsWith("## ")) {
      out.push(headingZh(s.slice(3).trim(), 3, id));
      out.push("");
      continue;
    }
    if (/^\*[^*].*\*$/.test(s) && !s.startsWith("* ")) {
      out.push(`> ${translateProse(s.slice(1, -1).trim())}`);
      out.push("");
      continue;
    }
    if (/^\*\*[^*].*\*\*$/.test(s)) {
      out.push(`**${translateProse(s.slice(2, -2).trim())}**`);
      out.push("");
      continue;
    }
    if (s.startsWith("* ")) {
      out.push(translateItem(s));
      continue;
    }
    out.push(applyPhrases(s));
  }
  while (out.at(-1) === "") out.pop();
  return out;
}

/** Pull a baked `## vX.Y.Z …` section out of changelog.md so live fetch cannot un-translate it. */
export function extractVersionSection(md: string, tag: string): string | null {
  const escaped = tag.replace(/\./g, "\\.");
  const re = new RegExp(`^## ${escaped} .+$`, "m");
  const m = re.exec(md);
  if (!m || m.index === undefined) return null;
  const start = m.index;
  const rest = md.slice(start + m[0].length);
  const next = rest.search(/^## v\d+\.\d+\.\d+ /m);
  const section = next < 0 ? md.slice(start) : md.slice(start, start + m[0].length + next);
  return section.trim();
}

export function buildChangelogMarkdown(
  releases: LiveRelease[],
  existingMd = "",
  bakedNotes: ReleaseNote[] = [],
): string {
  const notes = releases.map((rel) => bakedNotes.find((n) => n.tag === rel.tag) ?? toReleaseNote(rel));
  const parts: string[] = [];
  parts.push("# 更新日志 {#changelog}", "");
  parts.push(
    "顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。",
    "",
  );
  parts.push(
    "> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。",
    "",
  );
  parts.push("## 核心摘要 {#highlights}", "");
  parts.push("| 版本 | 日期 | 一句话 |", "| --- | --- | --- |");
  for (const n of notes) {
    parts.push(`| [${n.tag}](#${tagAnchor(n.tag)}) | ${n.dateLabel} | ${n.title} |`);
  }
  parts.push("");
  for (const n of notes) {
    const id = tagAnchor(n.tag);
    parts.push(`### ${n.tag} · ${n.title} {#${id}-summary}`, "");
    parts.push(`${n.dateLabel} · [本页全文](#${id}) · [官方 Release](${n.url})`, "");
    for (const h of n.highlights) parts.push(`- ${h}`);
    parts.push("");
  }
  parts.push("## 完整中文日志 {#full-notes}", "");
  for (const rel of releases) {
    const baked = existingMd ? extractVersionSection(existingMd, rel.tag) : null;
    if (baked) {
      parts.push(baked, "");
      continue;
    }
    const note = notes.find((n) => n.tag === rel.tag) ?? toReleaseNote(rel);
    const id = tagAnchor(rel.tag);
    parts.push(`## ${rel.tag} ${note.title} {#${id}}`, "");
    parts.push(`${note.dateLabel} 发布 · [官方原文](${rel.url})`, "");
    parts.push(...translateBody(rel));
    parts.push("");
  }
  return parts.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
