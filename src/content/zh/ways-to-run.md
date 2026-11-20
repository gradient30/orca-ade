# 运行 Orca 的方式 {#ways-to-run-orca}

Orca 并不锁在你的笔记本上。每个 worktree 都跑在某个地方——眼前这台机器、你已经拥有的盒子、一台共享的常开服务器，或为那一个工作区拉起的全新云虚拟机。

本页是总图。深入内容在链接出去的各页。

## 一览 {#at-a-glance}

| 模式 | 文件和 Agent 所在位置 | 谁拥有机器 | 最适合 |
| ---------------------------------------- | ---------------------------------------------- | --------------------------------- | --------------------------------------------- |
| **Local** | 你的桌面 | 你 | 日常编码、快速迭代 |
| **SSH target** | 你通过 SSH 连接的远程主机 | 你（或你的团队） | 开发机、GPU 主机、常开 VPS |
| **Remote Orca Server** | 运行 Orca 桌面或 `orca serve` 的机器 | 你（或你的团队） | 持久共享运行时、移动端、自动化 |
| **Cloud VM / per-workspace environment** | 每个工作区一个一次性 VM/sandbox | 你的云账号（自带供应商） | 隔离的、短暂的 Agent 算力 |

Orca **不**出售托管 VPS。远程模式始终使用你控制的机器和云账号。

## 1. 本机桌面 {#1-local-desktop}

安装 Orca，打开项目，创建 worktree。Agent、终端和浏览器与 UI 跑在同一台机器上。

这是大多数人的默认路径。见 [第一次三 Agent 会话](/docs/first-session) 和 [Worktrees](/docs/model/worktrees)。

## 2. SSH 目标 {#2-ssh-targets}

把 Orca 指向任意 SSH 主机——更强的 Mac mini、Linux VPS、GPU 盒子、带 SSH 的云 sandbox。创建 worktree 时，在 **Run on** 下选那台主机。Agent 和 `git worktree` 跑在远程；编辑器、diff 和 UI 留在笔记本上。

**适合的情况：** 远程已经有你的仓库、工具和凭证，而你想用一台笔记本上的 Orca 驱动多台机器。

**设置要点：**

1. 在 [Settings → SSH](/docs/settings) 下添加主机。
1. 测试连接（仓库 worktree 要求主机上有 git）。
1. 创建 worktree，并在 **Run on** 下选择 SSH 目标。键入即筛会列出就绪主机；对于已连接但尚未为本项目完成设置的主机，则显示不可选的 **setup-needed** 行。

SSH worktree 可以在 VS Code Remote-SSH 中打开，在 SFTP 允许时下载远程文件夹，并且即使远程无法编译终端原生组件，文件/git 仍可用（要跑 shell 就安装构建工具）。细节：[SSH Worktrees](/docs/ssh) 以及配方 [通过 SSH 在远程机器上工作](/docs/recipes/remote-worktrees)。

## 3. 远程 Orca 服务器 {#3-remote-orca-servers}

让 Orca 跑在你控制的机器上——旧笔记本、Mac mini、家里的服务器、云 VPS，或团队的盒子。把你的笔记本、浏览器客户端或手机配对到那个运行时。**server** 拥有项目、worktree、终端和 Agent 进程；客户端是 UI。

**适合的情况：**

- 你希望笔记本休眠后 Agent 继续跑
- 移动端应重连到同一批会话
- 自动化或后端应在稳定主机上启动会话

**最简设置：** 在两台电脑上都安装 Orca 和 Tailscale。在服务器上打开 **Settings → Remote Orca Servers → Advertise this app as a server → New Link**，选择它的 Tailscale 地址，生成访问链接。在客户端选择 **Add Server** 并粘贴该链接。

对于无头 Linux 服务器或由服务管理的虚拟机，用 `orca serve` 作为替代。在 Linux 上 CLI 名为 `orca-ide`，所以首次启动是：

```bash
orca-ide serve --bind <server-tailscale-ip> --pairing-address <server-tailscale-ip>
```

完整说明：[远程 Orca 服务器](/docs/remote-servers)。

### SSH 与 Remote Orca Server {#ssh-vs-remote-orca-server}

| | SSH worktrees | Remote Orca Server |
| ------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| 运行时所有者 | 笔记本上的 Orca | 远程机器（Orca 桌面或 `orca serve`） |
| 断开连接 | Agent 在主机上继续运行；笔记本重新挂上 | 完整会话状态住在服务器上 |
| 多客户端 | 一台笔记本驱动该主机 | 笔记本、网页、移动端和自动化可以共享同一运行时 |
| 典型设置 | 导入 SSH config，选 **Run on** | 共享服务器应用或运行 `orca serve`，然后用 URL 配对 |

## 4. Cloud VM（按工作区环境） {#4-cloud-vms-per-workspace-environments}

每个 worktree 都可以从仓库里检入的 **recipe**（`orca.yaml` + 生命周期脚本）启动自己的按需环境——云 sandbox、虚拟机，或本地 Docker 容器。Create 拉起它；suspend/resume/destroy 拆掉它。Orca 是一层薄封装：供应商账号、镜像和账单仍是你的。

产品 UI 里，这块区域在 [Settings → Experimental](/docs/settings) 下标为 **Cloud VM**。Recipe 仍然创建按工作区环境。

目前人们接上的供应商包括 Vercel Sandbox、Fly、Modal、普通 SSH 主机，以及本地 Docker。连接方式要么是 **Orca server**（recipe 启动 `orca serve` 并返回配对 URL），要么是 **SSH**（recipe 返回 Orca 去连接的详情）。

> **图示** Settings → Experimental → Cloud VM — 启用该 skill，然后让 Agent 为仓库配置 recipe。

> **图示** 从工作区侧栏选择本地或远程运行目标。

**适合的情况：** 你想要每个任务干净隔离、一次性算力，或每个 Agent 启动时都进入同一套标准环境。

**设置要点：**

1. 在 [Settings → Experimental](/docs/settings) 下启用 **Cloud VM**。该面板包含一份简短的 **Create a Cloud VM** 指南，以及 recipe/runtime 控件。
1. 如有需要，安装/更新 Cloud VM / 按工作区环境 skill。
1. 在任意工作区里，对你的 Agent 说：

   ```text
   Use the orca-per-workspace-env skill to set up a per-workspace environment for this repo.
   ```

1. 该 skill 会走完前置条件 → 基础快照 → Agent 鉴权 → `orca.yaml` recipe → doctor 校验。
1. 当 **Recipes** 下出现 recipe 后，创建 worktree，并在 **Run on** 下选择它。

Recipe 只有在项目的 **primary** checkout 的 `orca.yaml` 上有 `environmentRecipes` 条目时，才会出现在工作区创建里（不只是功能分支）。在你迭代脚本时，doctor 和实际 provision 仍可从任意分支运行。

> **自带云——不是 Orca VPS**
> Cloud VM 不会给你一台由 Orca 托管的 VPS。你自带供应商（并向该供应商付费）。Orca 运行你的 create/suspend/resume/destroy 脚本，并通过它们打印的配对 URL 或 SSH 详情连接。

## 如何选择 {#how-to-choose}

- **留在本地**，如果笔记本够快、Agent 生命周期短。
- **SSH**，如果你已经有 VPS 或开发机，想让 Agent 跑在那里，又不想再装一份 Orca 运行时。
- **Remote Orca Server**，如果你想要一份常开的 Orca 运行时，供移动端、浏览器和自动化使用。
- **Cloud VM / 按工作区环境**，如果每个任务都应得到一个全新的、由 recipe 定义的 sandbox，并随 worktree 一起消失。

你可以在一次安装里混用模式：快速修改用本地 worktree，GPU 盒子用 SSH，类 CI 的隔离用 recipe。

## 相关 {#related}

- [SSH Worktrees](/docs/ssh)
- [远程 Orca 服务器](/docs/remote-servers)
- [Worktrees](/docs/model/worktrees)
- [移动伴侣](/docs/mobile)
- [设置参考](/docs/settings)
