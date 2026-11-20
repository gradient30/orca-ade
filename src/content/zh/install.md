# 安装 {#install}

## 下载 {#download}

- **macOS:** [Apple Silicon](https://github.com/stablyai/orca/releases/latest/download/orca-macos-arm64.dmg) · [Intel](https://github.com/stablyai/orca/releases/latest/download/orca-macos-x64.dmg)
- **Windows:** [installer](https://github.com/stablyai/orca/releases/latest/download/orca-windows-setup.exe)
- **Linux:** AppImage [x64](https://github.com/stablyai/orca/releases/latest/download/orca-linux.AppImage) · [arm64](https://github.com/stablyai/orca/releases/latest/download/orca-linux-arm64.AppImage) · [.deb](https://github.com/stablyai/orca/releases) · [.rpm](https://github.com/stablyai/orca/releases) — 选哪个见 [Linux](#linux)
- 旧版本：[GitHub Releases](https://github.com/stablyai/orca/releases)。

### Homebrew (macOS) {#homebrew-macos}

Orca 也以 Homebrew cask 发布，每次稳定版都会自动抬升版本号：

```
brew install --cask stablyai/orca/orca
```

`brew upgrade --cask stablyai/orca/orca` 会拿到新的稳定构建。务必使用完整名称：单独的 `orca` 是无关的 Plotly cask。该 cask 跟踪 stable 通道——RC 构建请用上面的 GitHub Releases 链接，或下文 [更新](#updates) 中描述的应用内 **Check for Updates** 流程。

## 首次启动 {#first-launch}

首次启动时，Orca 会：

- 请求访问你的主目录，以便添加仓库。
- 若存在，则提议导入 `~/.claude`、`~/.codex` 以及 Ghostty 终端设置。
- 把你放到空白落地页，在那里添加第一个仓库。

## 更新 {#updates}

Orca 默认自动更新，跟踪 **stable** 通道。稳定版经过审核；**RC (release candidate)** 构建会先带上新功能，往往每日发布。

在 Linux 上，Orca 能否自行应用更新取决于你安装的是哪种包。选包之前先看 [Linux](#linux)。

应用内没有永久加入 RC 通道的选项。在 **Check for Updates** 上配合修饰键点击（[Settings → General → Updates](/docs/settings)，或应用 / Help 菜单）：

| 修饰键 | 效果 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| **Shift+click** | 包含最新 **RC** 预发布 |
| **Cmd+click**（macOS）/ **Ctrl+click**（Windows/Linux） | 最新带 **perf** 标签的预发布 |
| **Option+click**（仅 macOS） | 挑选通过 Orca 兼容性检查的 **validated local macOS build** |

你仍然可以直接从 [GitHub Releases 页面](https://github.com/stablyai/orca/releases) 下载任意构建。

> **不喜欢这次更新**
> 旧版本始终可以在 [GitHub Releases 页面](https://github.com/stablyai/orca/releases) 找到。如果你回退，Orca 不会强制降级你的 worktree 数据。

## 平台说明 {#platform-notes}

### macOS {#macos}

已签名并公证。首次启动时，macOS 仍可能让你确认——对基于 Electron 的应用来说这是正常的。

### Windows {#windows}

默认 shell 可在 [Settings → Terminal](/docs/settings) 设为 PowerShell 或 CMD。多数用户会选 PowerShell。

### Linux {#linux}

每个发布版本都提供三种 Linux 包——**AppImage**、**`.deb`** 和 **`.rpm`**——x64 与 arm64 都有。它们包含同一款应用。差别在于更新如何到达你，按这个来选。

| 包 | 什么时候选它 | 更新 |
| ------------ | --------------------------------------------------------- | ----------------------------------------------------------------- |
| **AppImage** | 你希望 Orca 像在 macOS 和 Windows 上那样自行更新 | Orca 下载并就地应用更新 |
| **`.deb`** | 你在 Debian 或 Ubuntu 上用 `apt` 管理软件 | Orca 告诉你有新版本，并给你安装命令 |
| **`.rpm`** | 你用 `dnf`、`yum` 或 `zypper` 管理软件 | 与 `.deb` 相同 |

AppImage 每个架构有稳定下载链接——x64 用 [`orca-linux.AppImage`](https://github.com/stablyai/orca/releases/latest/download/orca-linux.AppImage)，arm64 用 [`orca-linux-arm64.AppImage`](https://github.com/stablyai/orca/releases/latest/download/orca-linux-arm64.AppImage)——首次运行前需要 `chmod +x`，因为 GitHub release 资源不带权限位。`.deb` 和 `.rpm` 的文件名带版本和架构，两种格式对架构的拼写也不同（`orca-ide_<version>_amd64.deb` 或 `_arm64.deb`；`orca-ide-<version>.x86_64.rpm` 或 `.aarch64.rpm`），所以请从 [Releases 页面](https://github.com/stablyai/orca/releases) 取，而不是用固定 URL。

#### 更新如何工作 {#how-updating-works}

**AppImage 会自行更新。** 想要自动更新就选它。Orca 检查新版本，你点 **Update**，它就地替换 AppImage——流程与 macOS 和 Windows 相同。

**`.deb` 和 `.rpm` 不会自行更新。** Orca 仍会注意到新版本并下载包，然后给你一个 **Copy Install Command** 按钮。复制它，不要重打：Orca 会把每个程序解析成受信任系统目录下的绝对路径，并用单引号包住包路径，所以你粘贴出来像这样：

```
/usr/bin/sudo /usr/bin/apt -o Binary::file::APT::Sandbox::User=root install -- '/home/you/.cache/orca-updater/pending/orca-ide_1.4.194_amd64.deb'
```

出现哪个包管理器取决于你系统上实际有什么：`.deb` 用 `apt`，否则 `dpkg -i`；`.rpm` 依次是 `zypper`、`dnf`、`yum`，然后 `rpm -Uvh`。下载目录在设置了 `XDG_CACHE_HOME` 时跟它走，未设置则回退到 `~/.cache`。

**运行该命令前先退出 Orca**，安装完成后再打开。你是在替换正在运行的应用的文件，包管理器无法在活动进程底下安全替换它们。Orca 故意永远不会为此提升权限：安装系统包需要 root，`orca serve` 以非特权用户运行，无头机器也没有认证代理来弹窗。VS Code 和 Signal 对 `.deb` 做了同样的选择。

**发行版托管的构建不会被碰。** 如果你跑的是重新打包的 Orca——AUR 构建、Nix derivation——Orca 发现没有它能驱动的包管理器拥有这次安装，就会停止提供一份它永远无法应用的下载。它仍会报告有新版本，这样你可以用平时的方式更新。

> **计划中：签名的 apt/yum 仓库**
> [#18086](https://github.com/stablyai/orca/issues/18086) 跟踪发布签名仓库，让操作系统包管理器像管其他软件一样管 Orca 更新。它目前还不存在——今天，`.deb` 和 `.rpm` 更新就是上面描述的手动步骤。

#### CLI 命令是 `orca-ide` {#the-cli-command-is-orca-ide}

在 Linux 上，[Orca CLI](/docs/cli/reference) 安装为 **`orca-ide`**，而不是 `orca`。GNOME Orca——Ubuntu 及其他 GNOME 桌面默认自带的屏幕阅读器——已经占用 `/usr/bin/orca`，Orca 不会盖掉它。`.deb` 和 `.rpm` 包也因此命名为 `orca-ide`。

- `.deb` 和 `.rpm` 在安装时把 `orca-ide` 放到你的 `PATH` 上，路径是 `/usr/bin/orca-ide`。
- 使用 AppImage 时，从 [Settings → General → Orca CLI](/docs/settings) 注册 CLI。那会安装 `~/.local/bin/orca-ide`。
- 在 Orca 自己的终端里，裸 `orca` 可用。Orca 会在它管理的终端的 `PATH` 上放一个 shim，这样在那里跑的 Agent 和脚本使用与 macOS、Windows 相同的命令。
- 在无头主机上，打包的 `orca serve` 启动时会把裸 `orca` 写入 `~/.local/bin`，除非已有它不拥有的文件占用该名称。它是在启动 _过程中_ 写入的，所以永远不会是启动服务器的那个——首次启动始终是 [`orca-ide serve`](/docs/remote-servers)。

不要用 `command -v orca` 来验证：在 GNOME 桌面上它会成功，并解析到屏幕阅读器。在你自己的 shell 里用 `orca-ide`，在 Orca 里面用 `orca`。如果你想到处都用短名，并且不用屏幕阅读器，自己链一下：

```
ln -s "$(command -v orca-ide)" ~/.local/bin/orca
```
