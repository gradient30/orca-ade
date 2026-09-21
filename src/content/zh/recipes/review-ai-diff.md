# 审查 AI Diff {#review-an-ai-diff-line-by-line}

把 AI diff 审好，就是快速交付和把 bug 发出去的差别。下面是这个循环。

## 步骤 {#steps}

1. 打开该 worktree 的 diff 视图。
1. 逐个审查已改文件。对每个 hunk 问：这次改动必要吗？够最小吗？和文件其余部分匹配吗？
1. 想改的地方用 **Annotate AI Diff** 留评论——完整句子效果最好。
1. 整份 diff 走完后，点 **Send to agent**。Orca 把全部评论打成一批 prompt。
1. 看着 Agent 修订。状态点会变黄（等更多输入）或变绿（正在干活）。
1. 空闲后再打开 diff。你的评论钉在那里；已修好的标成 resolved，其余留下 follow-up。
1. 重复直到干净，然后提交。
