# 富 Markdown 编辑器 {#rich-markdown-editor}

Markdown 文件默认在富编辑器中打开——slash 菜单、工具栏、图片和代码的行内预览、内部链接自动完成。随时用 `Cmd-Shift-M` 切到原始 Monaco。

对于大于 300 KB 的文件，Orca 先打开原始编辑器以保持输入流畅。想对该文件用富编辑器时，在回退横幅里选 **Open anyway**；该选择持续到你关闭其标签。富编辑器无法安全保留其 Markdown 结构的文件仍会留在原始编辑器。

## Slash 菜单 {#slash-menu}

在空行输入 `/` 打开 slash 菜单：标题、列表、代码块、callouts、图片、mermaid 图表和 toggle 块。

用 `/toggle-text` 做可折叠备注，或在 toggle 摘要应读起来像某级标题时用 `/toggle-h1` … `/toggle-h5`。你可以就地编辑嵌套 toggles。Orca 把 toggles 存为可移植的 `<details>` / `<summary>` markdown，因此文件在 Orca 外仍可预览。

## 内部链接 {#internal-links}

输入 `[[` 开始 wiki 风格链接。Orca 会自动完成 worktree 内的文件路径并插入相对链接。

## 搜索 {#search}

编辑器内的 markdown 搜索尊重渲染后的文本，而不是原始 markdown——所以搜索 "Install" 能找到标题，无论写成 `# Install` 还是 `<h1>Install</h1>`。

## 审查批注 {#review-annotations}

在 Orca 的富编辑器里审查 markdown 时，选中渲染后的文本即可添加批注，而不用切回原始 markdown。Orca 把备注绑到所选源范围，因此你可以在继续编辑渲染文档时看到评论。

**Add Review Note** 是可重映射的快捷键（默认 `Cmd+Shift+A` / `Ctrl+Shift+A`，在 [Settings → Shortcuts](/docs/settings) 下）。

## Front matter {#front-matter}

YAML 和 TOML front matter 默认显示在富编辑器和渲染预览中，这样文档和静态站点文章不用切到原始 markdown 就能露出元数据。打开编辑器的 **More actions**（`…`）菜单，想要仅正文视图时选 **Hide front matter**；同一菜单可切回 **Show front matter**。该开关是按文件的，所以在一份文档上隐藏不会隐藏其余文档。

## 表格 {#tables}

在富 markdown 表格中：

| 按键 | 行为 |
| --- | --- |
| **Tab** / **Shift-Tab** | 下一格 / 上一格；在最后一格按 Tab 会插入一行 |
| **Enter** | 移到下方单元格；在最后一行则新增一行 |
| **Backspace** 在完全空的一行上 | 删除该行（如果是最后一行则删除整张表） |
| **Backspace** 在空单元格中且该行仍有内容 | 退到上一格 |

用 **Shift-Tab** 取消列表项或代码块所选行的缩进。

当插入符在表格中时，富编辑器工具栏会显示一键 **row and column insert/delete** 控件。右键表格单元格可在上下文菜单中使用相同的结构命令（仅当目标是表格单元格时才出现 Table 子菜单）。

## 目录 {#table-of-contents}

对于长文档，点编辑器标题栏的 **Table of Contents** 按钮（树图标），在编辑器左侧打开钉住的标题大纲。点击标题会跳转；折叠和展开控件让深层嵌套的章节可读。在富编辑和预览模式下可用。

## 作为 artifact 分享 {#share-as-artifact}

从编辑器标题栏，**Share as artifact** 通过你已登录的 Orca 账户把打开的 Markdown 文件发布为公开查看链接。需要 **Settings → Artifacts → Allow publishing public artifact links**（新配置档默认开启）。当 Orca 仍有映射时，重新发布会更新同一链接；从侧栏 **Artifacts** 页面管理或删除链接。Agent 和脚本可以使用 `orca artifacts share|update|list|delete`——见 [CLI reference → Artifacts](/docs/cli/reference#artifacts)。
