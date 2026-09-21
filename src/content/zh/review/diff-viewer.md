# Diff 查看器 {#diff-viewer}

Orca 的 diff 查看器是为认真审查 AI 生成的代码而设计的——不是扫一眼。每个 worktree 都有一份相对其 start-from ref 的内置 diff。

## 功能 {#features}

- **Combined diff** 覆盖全部已暂存、未暂存和未跟踪的文件。
- **Line numbers** 两侧行号，可开关。
- **Image diffs** — 二进制图片支持并排、swipe 和 onion-skin 模式。
- **HTML preview** — 在 **View all** / combined diffs 中，工作树里仍然存在的 HTML 区段会在始终可见的打开文件控件旁边显示 **Open Preview to the Side**（眼睛图标）。预览会在侧边浏览器分屏中打开工作树里的 HTML。已删除的 HTML 以及仅提交的 combined 表面会跳过眼睛图标。
- **Merge-conflict UI** 带三方视图和行内解决。
- **File staging** 从 Source Control 面板暂存文件。

## 范围 {#scoping}

默认情况下，diff 显示相对该 worktree 的 start-from ref 的改动。你可以在 diff 工具栏里切换为与任意 commit、分支或 base ref 比较。

## 自动换行 {#word-wrap}

打开 diff word wrap 时，长行会就地换行，宽 diff 可以自上而下阅读，不用横向滚动。默认关闭。从 diff 编辑器标题栏的 **⋯** 操作菜单切换 **Word Wrap**，或在 **Settings → General → Diff Word Wrap** 设置全局默认。两个控件共用同一设置——从编辑器切换会到处生效。

## 文件树 {#file-tree}

Combined diffs 可以在 hunk 旁边显示可折叠的文件树。拖动树的调整大小手柄（或在手柄上用方向键；Shift 会放大步进）来设置宽度——尺寸会跨会话记住。从 combined-diff 工具栏折叠或显示该树。

## 键盘快捷键 {#keyboard-shortcuts}

- `F7` / `Shift+F7` — 活动编辑器中的下一个 / 上一个改动。
