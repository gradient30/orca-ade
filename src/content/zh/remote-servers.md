# 远程 Orca 服务器 {#remote-orca-servers}

Remote Orca Server 让一台计算机干活，另一台计算机提供 UI。服务器保存项目、worktree、终端、标签、提供方账户和 Agent 会话。你的笔记本连接到那个正在运行的 Orca 实例。

最简单的做法是两台计算机上都装 Orca 桌面应用，通过 [Tailscale](https://tailscale.com/) 连接。这条路径不需要运行 `orca serve`。

> **测试版**
> Remote Orca Servers 处于测试版。把服务器和客户端放在你控制的私有网络路径上，例如同一个 Tailscale tailnet 或 LAN。

## 哪里跑什么 {#what-runs-where}

```text
Client computer · Orca client
  Shows the UI and sends your input
                 │
                 │ private network route
                 ▼
Server computer · Orca server
  Stores repos and worktrees
  Runs terminals and agents
```

在 **服务器计算机** 上安装并鉴权 Codex、Claude Code、OpenCode、`git` 以及任何提供方 CLI。笔记本上的登录不会自动带到服务器。

在无头 `orca serve` 主机上，从服务器 shell 注册托管的 Claude/Codex 账户（远程客户端禁用 **Add account**）：

```bash
orca account add --agent claude
orca account add --agent codex
orca account list
```

无需 Settings UI 即可安装或刷新 Agent 技能：

```bash
orca skills install --skill orca-cli --skill orchestration
orca skills update --all
```

## 推荐：桌面应用 + Tailscale {#recommended-desktop-app-tailscale}

你需要：

- 两台计算机都已安装并更新 Orca
- 两台计算机都已安装 Tailscale
- 两台计算机登录同一个 tailnet
- 服务器计算机醒着、在线，并且正在运行 Orca

Tailscale 给服务器一个通常以 `100.` 开头的私有地址。Orca 会把该地址放在连接地址选择器的最前面。

### 1. 在服务器上创建访问链接 {#1-create-an-access-link-on-the-server}

在应保持会话运行的那台计算机上：

1. 打开 Orca 桌面应用。
1. 打开 **Settings → Remote Orca Servers**。
1. 在 **Advertise this app as a server** 下，点击 **New Link**。
1. 对于 **Connection address**，选择 Tailscale 地址。它通常看起来像 `100.x.y.z`。
1. 点击 **Generate Access Link**。
1. 在 **Pair another Orca client** 下复制该链接。

如果 Tailscale 地址缺失，确认 Tailscale 已连接，并点击 **Connection address** 旁边的刷新按钮。

> **请对访问链接保密**
> 配对 URL 授予对此 Orca 运行时的访问。把它当密码对待，只发给你打算配对的客户端。

### 2. 在笔记本上添加服务器 {#2-add-the-server-on-your-laptop}

在你想用作客户端的计算机上：

1. 打开 **Settings → Remote Orca Servers**。
1. 点击 **Add Server**。
1. 输入可识别的名称，例如 `Remote Server`。
1. 粘贴来自服务器的访问链接。
1. 点击 **Add Server**。
1. 如果已保存的服务器显示 **Disconnected**，点击 **Connect**。

> **图示** 在客户端：给服务器命名，粘贴它的访问链接，然后添加。此示例中配对码已打码。

> **图示** 通过私有网络把 Orca 桌面运行时分享给另一个客户端。

添加服务器会保存它，而不会强制每个新项目都走它。只有当你希望默认由该服务器处理服务器路由的项目、终端、提供方检查以及浏览器或移动端交接时，才打开 **Advanced → Default host for new projects**。

## 使用远程服务器 {#use-the-remote-server}

一旦服务器显示 **Connected**，选中它或其项目之一，像平常一样使用 Orca。终端、Agent 进程、文件、worktree 和会话状态都住在服务器计算机上。

当多台已配对客户端共享该服务器时，侧栏过滤器可以提供 **Hide other-client workspaces**，让此设备只列出它创建的工作区。见 [Worktrees → 侧栏布局](/docs/model/worktrees#sidebar-layout)。

这意味着：

- 客户端笔记本休眠或断开时，Agent 继续运行；
- 服务器需要那些 Agent 使用的仓库、工具和凭据；
- 服务器必须保持醒着并连接到 tailnet；
- 重连客户端或重新打开 Orca 会回到服务器拥有的工作区、标签和可见窗格状态，而不会复制已配对标签；
- 你在服务器上删除的项目会从每台已配对客户端的侧栏消失（没有永久幽灵行）。

## 访问与安全 {#access-and-security}

Orca 为每个已配对客户端创建单独、可撤销的令牌。服务器在 **Shared Server Access** 下列出它们。

- 点击授权旁边的垃圾桶按钮即可撤销。使用该授权的活动客户端会立即断开。
- 再生成一个链接会替换上一个 **未使用** 的链接。已经配对的客户端保留各自的授权，直到你撤销它们。
- 把 Tailscale ACL 或授权保持得和你的设置允许的一样窄。
- 不要把 Orca 端口直接转发到公网。优先使用 Tailscale、WireGuard、受信任的 LAN、SSH 转发，或经过鉴权的隧道。
- 不要为另一台计算机选择 `127.0.0.1`。该地址只在服务器自身上有效。

## 替代方案：`orca serve` {#alternative-orca-serve}

当主机应在没有桌面窗口的情况下运行时使用 `orca serve`——例如无头 Linux 服务器或由服务管理的虚拟机。对于你可以保持登录的 MacBook 或台式机，上面的应用内设置更简单。

在服务器上安装 Orca 及其捆绑 CLI，然后运行：

> **在 Linux 上请用 orca-ide serve 启动**
> Linux CLI 名为 `orca-ide`，因为 GNOME Orca 的屏幕阅读器已经占用了 `/usr/bin/orca`。打包的 `orca serve` 确实会把一个裸的 `orca` 写进 `~/.local/bin`，但只在它正在启动时，因此那个 shim 永远不能成为启动服务器的命令。当主机是 Linux 时，把本页中的 `orca serve` 读成 `orca-ide serve`。见 [安装 → Linux](/docs/install#linux)。

```bash
orca serve --pairing-address <server-tailscale-ip-or-hostname>
# Linux
orca-ide serve --pairing-address <server-tailscale-ip-or-hostname>
```

用 `--bind <literal-ip>` 选择接受运行时连接的接口。对于通过 SSH 隧道或反向代理到达的服务器，绑定到本地；当客户端应直接连接时，使用 Tailscale 或 LAN IP。`--pairing-address` 仍然只控制嵌入配对链接中的地址。`--mobile-pairing` 需要所有接口，因此不要带 `--bind` 使用它，或配合 `--bind 0.0.0.0`。

```bash
orca-ide serve --bind 127.0.0.1 --pairing-address 127.0.0.1
```

例如：

```bash
orca serve --pairing-address 100.64.1.20
# Linux
orca-ide serve --pairing-address 100.64.1.20
```

该命令：

- 启动 Orca 运行时而不打开桌面窗口；
- 在前台运行，直到你按 `Ctrl-C`；
- 打印绑定的端点和运行时配对 URL；
- `--pairing-address` 仅用于客户端应拨打的地址。

把打印出的配对 URL 粘贴到客户端的 **Settings → Remote Orca Servers → Add Server**。

`orca serve` 接受来自 localhost、LAN 和 Tailscale 地址的客户端，包括落在服务器自身某个网络前缀上的地址（例如同一网络的全局 IPv6 地址）。它拒绝其他公网地址，除非：

- 你传入 `--allow-public`；
- `--pairing-address` 是主机名或公网 IP；
- 已配对的客户端已经从公网地址连接过；或
- 在加入这项检查之前就已配对的客户端仍然处于配对状态。

启动日志会说明适用哪条规则，并且每小时记录第一个被拒绝的公网地址。传入 `--refuse-public` 可在任何情况下都拒绝公网地址，例如在一台较旧的配对原本会继续接受它们的服务器上。

当防火墙、隧道或服务定义需要固定端口时，加上 `--port 6768`：

```bash
orca serve --port 6768 --pairing-address 100.64.1.20
# Linux
orca-ide serve --port 6768 --pairing-address 100.64.1.20
```

同一时间只使用一种主机模式。如果 Orca 桌面应用已经在分享那台计算机，不要为同一套设置再启动第二个 `orca serve` 进程。

`orca serve` 默认跑在 Orca 自己的 Node 服务器（orcad）上。如果 orcad 在这台计算机上无法提供服务，它会改用桌面应用的服务器，并打印一行说明原因。在打包的 macOS 应用上，它使用桌面应用的服务器，这样已配对客户端仍然可以更新它，除非你设置 `ORCA_SERVE_RUNTIME=orcad`（见 [仅通过 SSH 到达的 Mac](#a-mac-reached-only-over-ssh)）。若要始终使用桌面应用的服务器，设置 `ORCA_SERVE_RUNTIME=electron`。

### 只在 Linux 上安装服务器 {#install-only-the-server-on-linux}

每个版本还会单独发布面向 Linux x64 和 arm64 的服务器：orcad、它所运行的 Node 运行时，以及 `orca-ide` CLI。它不需要桌面包（GTK、X11、Xvfb），因此适合你自己的无头 Linux 服务器、虚拟机和容器。下载大约 60 MB，而 `.deb` 约为 190 MB。下载、校验并解包：

```bash
arch=$(uname -m | sed 's/x86_64/x64/; s/aarch64/arm64/')
base=https://github.com/stablyai/orca/releases/latest/download
curl -fsSLO "$base/orca-server-linux-$arch.tar.gz" -O "$base/orca-server-sha256sums.txt"
sha256sum --check --ignore-missing orca-server-sha256sums.txt
sudo mkdir -p /opt/orca-server
sudo tar -xzf "orca-server-linux-$arch.tar.gz" -C /opt/orca-server --strip-components=1
/opt/orca-server/bin/orca-ide serve --pairing-address <server-tailscale-ip-or-hostname>
```

要固定某个版本，把 `latest/download` 替换为 `download/v<version>`，并把该版本的校验和留在脚本里，而不是在归档旁边下载它。服务器需要 glibc 2.28 或更新版本（Ubuntu 20.04、Debian 10、RHEL 8 及更高版本）。

`orca-ide serve` 接受与上面相同的标志，包括服务管理器下的 `--supervise` 以及 `--recipe-json`。要更新，停掉服务器，用更新的版本替换 `/opt/orca-server`，然后再次启动；已配对客户端无法替你更新它。对于 `orca-ide serve service install`，传入 `--command /opt/orca-server/bin/orca-ide`，或把 `/opt/orca-server/bin` 放到 `PATH` 上。仅服务器的安装没有浏览器窗格、口述或已配对的网页客户端，因为那些随桌面应用提供。

### 限制 Linux 服务器上的终端内存 {#limit-terminal-memory-on-a-linux-server}

默认情况下，没有任何上限限制终端进程能用多少内存，因此一个失控任务可能把整台服务器推进内核的 out-of-memory killer。在 Linux 上，你可以在启动 `orca serve` 的环境（或其 service unit）里设置这些变量，为每个终端设上限：

```bash
export ORCA_TERMINAL_MEMORY_MAX=16G      # 每个终端的内存，256M 或更大
export ORCA_TERMINAL_MEMORY_SWAP_MAX=0   # 每个终端的 swap；0 表示无 swap
orca-ide serve --pairing-address 100.64.1.20
```

- 每个终端已经跑在自己的 systemd user scope 里。这些限制会变成该 scope 的 `MemoryMax` 和 `MemorySwapMax`。
- 当终端超出上限时，内核会杀掉它最大的进程。通常是那个任务，shell 继续跑。服务器和每一个其他终端继续跑。
- 限制默认关闭，因为 Orca 无法知道你的工作负载怎样才算合理上限。
- 它们需要带 cgroup v2 的 systemd，以及登出后仍存活的 user manager（`loginctl enable-linger <user>`）。如果主机无法强制执行限制，Orca 会跳过它，在终端宿主日志里记下 `terminal-memory-limits`，并在没有限制的情况下启动终端。
- Orca 只在其终端宿主进程启动时读取它们。该进程在 `orca serve` 重启后仍继续跑，因此终端会保持旧限制，直到它也重启——例如服务器重启之后。
- 它们在 macOS 或 Windows 上无效。

### 在 Linux 服务器上使用 GPU {#use-the-gpu-on-a-linux-server}

在 Linux 上，`orca serve` 默认关闭硬件加速，因为多数无头宿主没有 GPU，失败的 GPU 进程可能阻止服务器启动。浏览器窗格随后以软件方式渲染。若宿主为 Orca 进程提供了 GPU（例如 `/dev/dri/renderD128` 这类 render node），在启动 `orca serve` 的环境（或其服务单元）中设置 `ORCA_SERVE_GPU=1` 以保持硬件加速开启：

```bash
export ORCA_SERVE_GPU=1
orca-ide serve --pairing-address 100.64.1.20
```

这只会阻止 Orca 主动关闭 GPU。Chromium 仍可能在 Orca 自带的、没有 GPU 的 Xvfb 上以软件渲染；可在浏览器窗格打开 `chrome://gpu` 检查，若报告软件渲染，把 `DISPLAY` 指向有 GPU 的 X 服务器。若用 `orca serve service install` 安装了服务器，请自行把该变量加到服务单元。若设置后服务器无法启动或浏览器窗格崩溃，取消该变量以回到软件渲染。

### 机器镜像的副本 {#copies-of-a-machine-image}

机器镜像的副本共享服务器身份：配对密钥、已配对设备，以及 installation id。在一个副本上撤销某台设备后，它在其他副本上仍然可用，桌面应用也会把所有副本当作同一台服务器。在启动 `orca serve` 的环境中为每个实例设置 `ORCA_INSTANCE_ID`（例如 cloud-init instance id），或在每个副本上运行 `orca serve reset-identity`。

- 设置了 `ORCA_INSTANCE_ID` 时，Orca 会将该值与服务器身份一同记录。如果之后某次启动看到不同的值，Orca 会创建新身份，并移除该副本上的全部已配对设备，以便客户端重新与它配对。
- Orca 在现有服务器上看到的第一个值只会被记录，因此稍后设置该变量会保留现有配对。请使用在同一实例的多次重启之间保持不变的值；每次启动都变化的值会每次都强制重新配对。
- 未设置 `ORCA_INSTANCE_ID` 时，Orca 绝不会自行更改身份。
- 如果 Orca 写不进新身份（例如磁盘已满或只读），它会继续原样提供当前身份的服务，记录一条错误，并在下次启动时再试。
- `orca serve reset-identity` 会按需做同样的重置。先在那台机器上停掉 Orca；该命令会要求确认，也可以传入 `--yes`。
- 每次重置都会把被替换的文件移入 Orca 数据目录下 `orca-identity-backups` 中的一个新文件夹（只保留最近五个）。要撤销一次不想要的重置，停掉 Orca，并把该文件夹里的文件复制回数据目录。

### 从无头服务器用于移动端 {#mobile-from-a-headless-server}

对于 Orca 移动应用，请求移动端范围的二维码和链接：

```bash
orca serve --pairing-address 100.64.1.20 --mobile-pairing
# Linux
orca-ide serve --pairing-address 100.64.1.20 --mobile-pairing
```

让手机留在同一个 tailnet 上，打开 Orca Mobile，选择 **Pair**，扫描终端二维码或粘贴打印出的链接。

### 不必重启服务器即可配对 {#pair-without-restarting-the-server}

`orca pair` 向这台机器上已经在运行的 Orca 请求一次新配对，因此你不必停掉服务或重启 `orca serve`。在服务器上、以 Orca 运行所用的用户来运行它：

```bash
orca pair --mobile --address 100.64.1.20   # 给 Orca Mobile 的二维码和链接
orca pair --address 100.64.1.20            # 给另一个 Orca 的访问链接
# Linux
orca-ide pair --mobile --address 100.64.1.20
```

它对桌面应用、前台的 `orca serve`，或 `orca serve service install` 效果相同。只有这台机器自己的用户可以运行它；已配对的客户端和手机不能创建配对。

### 仅通过 SSH 到达的 Mac {#a-mac-reached-only-over-ssh}

在打包的 macOS 应用上，`orca serve` 使用桌面应用的服务器，而该服务器需要桌面登录：从无人登录的 SSH 会话中启动时，它会在启动阶段中止。要为这样一台 Mac 提供服务，请改为请求 Orca 的 Node 服务器。它没有应用内更新器，因此请自行更新应用（例如使用 `brew upgrade --cask stablyai/orca/orca`）并重启服务器：

```bash
ORCA_SERVE_RUNTIME=orcad orca serve --pairing-address 100.64.1.20
```

## 桌面应用还是 `orca serve`？ {#desktop-app-or-orca-serve}

|               | 服务器上的桌面应用                  | `orca serve`                                       |
| ------------- | ----------------------------------- | -------------------------------------------------- |
| 最适合        | 旧笔记本、Mac mini 或台式机         | 无头 Linux 机器、虚拟机或托管服务                  |
| 设置          | Settings 与按钮                     | 终端命令与服务配置                                 |
| 服务器窗口    | 打开                                | 无                                                 |
| 访问链接      | **New Link → Generate Access Link** | 打印在终端里                                       |
| 生命周期      | 桌面应用运行期间                    | 前台进程或服务运行期间                             |

## Remote Orca Server 还是 SSH？ {#remote-orca-server-or-ssh}

当你笔记本上的 Orca 应拥有运行时、另一台机器只用来跑选定的 worktree 和终端时，使用 [SSH worktrees](/docs/ssh)。

当另一台机器应拥有完整的 Orca 运行时，并为桌面、浏览器、移动端或自动化客户端保留共享会话时，使用 Remote Orca Server。

完整对比见 [运行 Orca 的方式](/docs/ways-to-run)。

## 故障排除 {#troubleshooting}

### Tailscale 地址未列出 {#the-tailscale-address-is-not-listed}

在服务器上确认 Tailscale 已连接，然后点击 **Connection address** 旁边的刷新按钮。两台计算机必须登录同一个 tailnet。Tailscale IPv4 地址通常以 `100.` 开头。

### 服务器已断开 {#the-server-is-disconnected}

确认服务器计算机醒着、Orca 仍在运行，并且 Tailscale 显示两台设备在线。如果一台设备无法到达另一台，检查你的 tailnet ACL 或授权。

如果服务器行报告协议版本不兼容，在两台计算机上都更新 Orca。

### 访问链接发给了错误的人 {#the-access-link-was-shared-with-the-wrong-person}

在服务器上打开 **Settings → Remote Orca Servers → Shared Server Access** 并撤销该授权。为打算使用的客户端生成新链接。

### 服务器找不到 Agent CLI {#the-server-cannot-find-an-agent-cli}

在服务器计算机上安装并鉴权该 CLI。远程会话使用服务器的 `PATH`、主目录和凭据——不是客户端的。

### `orca serve` 通告了错误的地址 {#orca-serve-advertises-the-wrong-address}

停掉该命令，用客户端能够到达的地址重新启动：

```bash
orca serve --pairing-address <reachable-tailscale-ip-or-hostname>
```

不要对远程客户端使用通配地址或 `127.0.0.1`。

## 下一步 {#next-steps}

- 在 [运行 Orca 的方式](/docs/ways-to-run) 中对比每一种运行模式。
- 当笔记本应拥有 Orca 运行时时，使用 [SSH worktrees](/docs/ssh)。
- 见 [Orca CLI 参考](/docs/cli/reference) 了解 `orca serve` 标志和自动化命令。
