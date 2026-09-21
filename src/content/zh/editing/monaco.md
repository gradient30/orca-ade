# Monaco 编辑器与自动保存 {#monaco-editor-autosave}

Orca 的代码编辑器是 Monaco——VS Code 用的同一编辑器——带一些 Orca 特有的调整。

## 自动保存 {#autosave}

文件在失焦时以及短暂空闲后保存。没有 "dirty" 点，因为正常流程里没有未保存的改动。

## 多光标、跳转、查找 {#multi-cursor-go-to-find}

- `Cmd-D` — 选中下一处出现。
- `Cmd-F` / `Cmd-Shift-F` — 文件查找 / worktree 查找。有选中文本时，文件查找会用当前选区预填搜索框。
- `Cmd-Click` — 转到定义（语言扩展支持时）。

## 改动视图模式 {#changes-view-mode}

在任意编辑器标签里切换 **Changes view mode**，把文件翻成标签内的 HEAD-vs-working-tree diff，而不离开光标位置。再切换一次回到普通文件视图。

## 自动换行 {#word-wrap}

文件编辑器默认对长行换行。从编辑器标签的 **⋯** 菜单切换 **Word Wrap**，按 `Alt+Z`（与 VS Code 相同；可在 [Settings → Shortcuts](/docs/settings) 下重映射），或在 [Settings → General → Editor Word Wrap](/docs/settings) 设置默认。此设置与只影响 diff 编辑器的 **Diff Word Wrap** 分开。

## Minimap {#minimap}

文件编辑器可在 [Settings → Appearance](/docs/settings) 下使用 minimap。默认关闭；如果你更喜欢 VS Code 风格的总览轨，就打开它。

## 自定义编辑器字体 {#custom-editor-font}

默认情况下，编辑器和 diff 视图使用与终端相同的字体。在 [Settings → Appearance](/docs/settings) 下把 **Editor Font Family** 留空以保持该关联；设置字体则只覆盖编辑器（UI 字体保持独立）。

## 语言支持 {#language-support}

语法高亮覆盖 Monaco 开箱即用支持的语言。Orca 有意以编辑器为先，而不是以 IDE 为先——在终端窗格里跑类型检查器和 linter。
