# HTML、Mermaid、PDF 与图片查看器 {#html-mermaid-pdf-image-viewers}

Orca 为大多数仓库里会出现的格式内置了查看器。

## HTML {#html}

用 **Open in Orca Browser** 或 **Open Preview to the Side** 打开本地、SSH 或 paired-runtime 的 `.html` 文件。Orca 在沙盒浏览器标签里本地渲染文档，并通过工作区的文件连接读取该文件及其相对资源，因此远程设计文档保持清晰，而不会暴露你的桌面文件系统。

预览在读取额外文件夹前会询问，并且只授予你为该标签批准的文件夹。外部 HTTP(S) 链接需要确认，并在普通 Orca 浏览器标签中打开；文档预览内禁用下载。用 **Preview options** 从磁盘重新加载、打开源文件，或复制其完整或工作区相对路径。

在 paired runtimes 上，HTML 链接也可以预览已注册工作区之外的文件。Orca 使用服务器按文件授予的访问权，不需要登记项目，也不需要 Web 服务器。这类文档一开始只读取打开的那个文件，要加载同目录其他文件前会先询问。如果较旧的已配对服务器不能授予该文件，请更新它。非常旧的 paired servers 可能渲染文档但不带二进制资源；如果远程图片不加载，请更新服务器。

## Mermaid {#mermaid}

Mermaid 图表在 markdown 预览里行内渲染。独立的 `.mmd` 文件在带平移/缩放的专用查看器中打开。

## PDF {#pdf}

滚动、缩放和文本选择。适合仓库里的设计文档。当你离开 PDF 标签再回来时（包括同一会话中关闭再打开），滚动位置会恢复——页码加上页内偏移，所以你落在离开的地方。位置仅限会话，Orca 重启时清除。

## 图片 {#images}

`.png`、`.jpg`、`.svg`、`.webp`、`.gif`。Image-diff 模式并排比较同一文件的两个版本。

## CSV / TSV {#csv-tsv}

`.csv` 和 `.tsv` 文件在带可排序列和快速搜索的表格查看器中打开。适合 fixtures、导出以及仓库里的任何表格数据。需要直接编辑单元格时，用工具栏切回原始文本视图。

## Jupyter notebooks {#jupyter-notebooks}

`.ipynb` 文件在 notebook 查看器中打开，带渲染后的 markdown、语法高亮的代码单元格和已保存的输出。编辑单元格会写回磁盘上的 `.ipynb`，同时保留 nbformat，因此 diffs 保持干净。

> **Beta**
> notebook 编辑器标记为 beta。单元格执行和更丰富的输出渲染仍在沉淀——如果你仓库里的 notebook 加载不干净，请提交 issue。
