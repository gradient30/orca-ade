# 在 Worktree 之间跳转 {#jump-between-10-worktrees}

十个 worktree 很难同时顾上。Jump Palette + Restart 芯片 + Agent 状态点就是为这个规模做的。

## 步骤 {#steps}

1. `Cmd-J` 打开跳转面板。输入任务名的一段。Enter 跳转。列表很大时按 **Tab** 按宿主或项目过滤。
1. 扫侧栏——有活动 Agent 的 worktree 带绿点。先去需要输入的（黄点）。
1. 在每个 worktree 里，**Restart** 芯片会重新拉起已退出的 Agent。笔记本休眠后批量恢复很合适。
1. 用 [持久铃铛](/docs/notifications) 清空“Agent 完成”队列——点一条通知，就会跳到那个 worktree。

## 卫生习惯 {#hygiene}

已合并的 worktree 要积极删除。Orca 让这很便宜——一键，worktree 和分支都走。留着几十个已合并的 worktree 只会拖慢面板。
