# SSH worktrees {#ssh-worktrees}

Orca 可以通过 SSH 在远程机器上驱动 Agent——适合长时间构建、GPU 机器，或任何你的笔记本不适合跑活的环境。

> **四种运行模式之一**
> SSH 是把 Agent 放到远程算力上的方式之一。本机、自托管服务器和临时虚拟机，见 [运行 Orca 的方式](/docs/ways-to-run)。

## 添加 SSH 目标 {#add-an-ssh-target}

1. 打开 [Settings → SSH](/docs/settings)。
1. 点击 **Add Target**。主机表单在模态框中打开（而不是列表下方内联），因此即使主机列表很长，Host、Advanced 和 Save 也始终够得着。编辑使用同一个对话框，并显示目标标签以及 `user@host:port`。
1. 填写 host、user、port 和可选的 identity file——或者在同一对话框里打开 **OpenSSH config** 选择器，搜索 `~/.ssh/config`（包括 `Include` 的文件），选一个主机并预填表单。已经保存在 Orca 里的主机会显示 **In Orca** 徽章。该流程可用时，你仍然可以从配置批量导入主机。
1. 如果密钥有口令保护，Orca 会在第一次提示。
1. 点击 **Test** 验证连通性，然后 **Save**。

未保存的添加/编辑表单会忽略外部点击，以免误点空白处丢掉已填字段；用 Escape、Cancel 或 × 来丢弃。

## 主机密钥校验 {#host-key-verification}

Orca 会对照你生效的 OpenSSH `known_hosts` 文件以及它先前保存的密钥检查内置 SSH 连接。已有匹配则静默连接。默认策略下，Orca 在首次接触时接受并记住主机，并显示其指纹；`StrictHostKeyChecking yes` 拒绝未知主机，而 `no` / `off` 接受但不保存信任记录。

密钥已更改、已吊销或密钥类型意外不同时，会在 Orca 询问密码或密钥口令之前被拒绝。如果你是有意重建或重新开通该主机，先核对其新指纹，然后按错误里的恢复路径操作。对于 `known_hosts` 不匹配，Orca 会提供相应的 `ssh-keygen -R` 命令（需要时包含带方括号的主机和端口）。

## 使用目标 {#use-a-target}

创建 worktree 时，选择 SSH 目标而不是 Local。Orca 将会：

- 在远程主机上创建 git worktree。
- 通过 SSH 连接在远程运行 Agent。
- 同步文件事件，让编辑器、diff 和浏览器仍然像在本地一样。

首次连接时，Orca 会通过你自己的 SSH 连接在主机上安装自身；Settings 里这些主机会列在 **Orca on your SSH hosts** 下。你的代码和文件仍留在原处。只有 Orca 的项目列表、标签页和终端会迁到该主机。

## 高级连接选项 {#advanced-connection-options}

打开 **Settings → SSH**，编辑一个目标，当主机需要代理、跳板机或 SSH multiplexing 覆盖时展开 **Advanced Connection**。Orca 默认启用 **Reuse SSH connection for faster setup**，在 macOS 和 Linux 上使用 OpenSSH 连接复用，这样 setup 命令不必每次都付一次全新的 SSH 握手。仅当主机的 SSH 策略拒绝复用会话时才关掉它。

## 口令 {#passphrases}

口令在 Orca 会话生命周期内保存在内存中。关闭 Orca 即清除。你可以在 SSH 设置里选择更长的 TTL。

## 状态 {#status}

远程 worktree 会显示带实时 SSH 状态的芯片——绿色已连接、黄色重连中、红色已断开。SSH 主机仍在连接时，Orca 可以从 **持久化的本地元数据** 列出工作区，这样侧栏不会在实时 provider 起来之前空着；这些行在连接稳定后会刷新为权威的远程状态。断开不会杀掉正在运行的 Agent；Orca 会重连并重新附着，重放滚动输出，并从已渲染的帧恢复全屏应用窗格，而不是让它们空白或破碎。主机掉线时，受影响的工作区卡片可以显示内联 **Connect** / 重连控件，这样你不用打开终端浮层或去翻状态栏就能恢复。如果 SSH relay 以 "Multiplexer disposed" 一类的失败掉线，Orca 会自动恢复，而不是让窗格卡住直到你重启。Agent 状态（working / idle / blocked）通过 SSH 传播的方式与本机相同，因此侧栏和 [Agents 动态](/docs/activity) 会实时反映远程 Agent。

## 关闭应用后的会话 {#sessions-across-app-close}

关闭桌面应用不再会杀掉你的远程 PTY 会话。远程终端会话通过运行在远程主机上的 relay 租约，因此它们能在你笔记本上的 Orca 关闭后继续存活。当你重新打开应用并重连到该目标时，已租约的 PTY 会以 **attached** 状态恢复到它们的标签，回滚缓冲完好。默认完全没有倒计时：每个目标都开启 **Keep terminals alive until reset**，因此分离的会话会一直跑到你显式结束它们——**End Remote Terminals**、**Reset Relay**、移除目标，或关闭标签。在 **Advanced Connection** 下关掉该开关，改为为该目标设置有界的 **Timeout after disconnect**；表单从 24 小时起步，接受 60 秒到 7 天，超时后 relay 会拆除分离的会话。与主机失去联系并不等于它的工作停了，因此当前够不着的远程会话不应被假定已死——在同一 worktree 上再开第二个 Agent 之前，先检查主机。

## 下载远程文件和文件夹 {#downloading-remote-files-and-folders}

在 SSH worktree 文件浏览器中右键：

- **File** → **Download** — 原生保存对话框；把文件复制到你的笔记本。
- **Folder** → **Download Folder** — 递归下载到你选择的文件夹（仅桌面）。

Orca 使用与连接相同的 SSH 传输路径。仅当连接声明支持递归文件夹传输（通常是完整 SFTP）时才会出现文件夹下载。停留在仅系统 OpenSSH 传输上的连接可能仍能下载 **files**，但不显示 **Download Folder**。

这是仅桌面的操作——Web 客户端不暴露 Download，因为它依赖 Electron 的保存对话框。

## 在 VS Code 中打开远程工作区 {#open-a-remote-workspace-in-vs-code}

对于 SSH worktree，当配置的应用是 VS Code 或 VS Code Insiders（`code` / `code-insiders`，或指向这些启动器的直接路径）时，worktree 菜单的 **Open in** 列表可以把远程路径交给 VS Code Remote-SSH。

1. 配置 **Settings → General → Open in menu**，让 VS Code 出现在列表中（预设或自定义命令）。
1. 右键 SSH worktree（或使用 worktree 溢出菜单）→ **Open in** → **VS Code**。
1. Orca 针对该主机和 worktree 路径启动带 Remote-SSH 的 VS Code（`--remote ssh-remote+<host> <path>`）。菜单项可能会显示 **Remote SSH** 徽章。

**此远程路径不支持：** Cursor、Zed、复合 shell 命令，或通过 **Remote Orca Server** 活动运行时打开（那些保持 **Local only**）。Finder/Explorer 项仅用于本地路径。

## Kerberos / GSSAPI {#kerberos-gssapi}

如果 OpenSSH 配置中的主机设置了 `GSSAPIAuthentication yes`，Orca 对该目标优先使用 **system OpenSSH** 传输（内置 ssh2 客户端不讲 GSSAPI）。连接前保持有效的 Kerberos ticket（`kinit` / 你组织的 SSO）。手动目标在配置为系统 SSH 时也可以启用 GSSAPI。

对于从配置导入的主机，你不必再拨一个单独的 “Kerberos mode” 开关——import/`ssh -G` 会把该标志带过来。

## FIDO2 / 安全密钥 {#fido2-security-keys}

硬件支持的 OpenSSH 身份（`ed25519-sk`、`ecdsa-sk`，包括由 agent 支持的安全密钥）同样使用 **system OpenSSH**，而不是内置 ssh2 客户端。Orca 从你的 identity 文件检测密钥类型，并把连接交给操作系统的 OpenSSH 二进制，这样触摸 / PIN 提示会照常工作。普通的 Ed25519、ECDSA 和 RSA 密钥留在内置传输上。如果机器上没有 OpenSSH，这些 FIDO2 目标在它安装并位于 `PATH`（或常见的 Windows/macOS/Linux 位置）之前无法认证。

## 没有 C/C++ 工具链的 Linux 主机 {#linux-hosts-without-a-c-c-toolchain}

首次连接时，Orca 会在远程安装一个小型 relay。远程终端需要原生 `node-pty` 模块。Linux 包通常在主机上编译；macOS/Windows relay 使用预构建。

如果远程缺少 **make**、**C++ compiler** 和 **python3**，Orca 仍会完成连接以供 **files、git 和编辑器** 使用，但在安装构建工具之前 **远程终端无法工作**。Orca 可能会给出的示例安装提示：

- Debian/Ubuntu: `sudo apt-get install -y build-essential python3`
- Fedora/RHEL: `sudo dnf install -y make gcc gcc-c++ python3`
- Alpine: `sudo apk add build-base python3`
- Arch: `sudo pacman -S --needed base-devel python`

安装工具，然后重连，以便 relay 安装原生模块。

## 端口转发 {#port-forwarding}

对于远程 worktree，右侧栏显示 **Ports** 标签（用 `Cmd+Shift+I` 切换）。Orca 扫描远程的 `/proc/net/tcp`，并在 **Detected** 下列出监听端口——一点即可转发到你的笔记本。你也可以手动添加、编辑或移除转发。转发在应用重启和 SSH 重连后保持，特权远程端口会在本地自动重映射（例如 remote 80 → local 10080）。

## macOS 主机：本地网络访问 {#macos-hosts-local-network-access}

在 macOS 15 及之后，SSH 主机上的终端可能失去对该主机本地网络上设备的访问（例如 `kubectl`、Homebrew 的 `node` 或 `python`，或 `.local` 名称失败并报 `no route to host`）。macOS 把网络访问记到启动 Orca 托管服务器的那次 SSH 会话上；当该会话结束时，从服务器终端启动的程序会被拦住。Apple 自带工具如 `/usr/bin/curl` 仍可工作，loopback 连接不受影响。通过 **Allow full disk access for remote users** 授予的 Full Disk Access 可能以同样方式失效。

当 Orca 发现这种情况时，**Settings → SSH** 里该主机的状态会说明，并提供 **Restart managed server…**，从你当前的连接再次启动服务器。仅当主机上没有正在运行的终端时 Orca 才会重启它，因为仍打开的终端会继续带着已丢失的访问。请先关掉它们。

要彻底避开该问题，主机上的管理员可以把本地地址范围从 Local Network 检查中豁免（macOS 15.5 及之后；见 Apple 的 [TN3179](https://developer.apple.com/documentation/technotes/tn3179-understanding-local-network-privacy)）。豁免对该 Mac 上列出范围内的每一个应用生效：

```sh
sudo defaults write com.apple.network.local-network AllowedEthernetLocalNetworkAddresses -array "10.0.0.0/8" "172.16.0.0/12" "192.168.0.0/16"
sudo defaults write com.apple.network.local-network AllowedWiFiLocalNetworkAddresses -array "10.0.0.0/8" "172.16.0.0/12" "192.168.0.0/16"
```

重启 Mac 使更改生效。要撤销，运行 `sudo defaults delete com.apple.network.local-network AllowedEthernetLocalNetworkAddresses`（Wi-Fi 键同样操作），然后重启。
