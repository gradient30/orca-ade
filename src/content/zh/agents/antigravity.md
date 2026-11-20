# Antigravity CLI 设置 {#antigravity-cli-setup}

Orca 会启动 Google 的 **Antigravity CLI**，其命令是 `agy`。只安装 Antigravity 桌面应用并不会把该命令放到你的机器上，单独的 `gemini` 命令在 Orca 里是另一个 Agent。要保存并在多个 `agy` 登录之间切换，见 [Antigravity 账户](/docs/agents/antigravity-accounts)。

## 先检查 CLI {#check-the-cli-first}

按 [Google 当前的说明](https://antigravity.google/docs/cli-overview) 安装该 CLI，然后打开一个新终端，以便它拾取更新后的 `PATH`。

在 Windows（PowerShell）上：

```powershell
Get-Command agy -All | Select-Object CommandType, Source, Definition
agy --version
```

在 macOS、Linux，或某个 WSL 发行版内：

```sh
command -v agy
agy --version
```

PowerShell 别名或函数并不是 Orca 能启动的可执行文件；请使用实际 CLI 可执行文件的路径。

在项目目录中运行 `agy`，完成 Google 的登录，并发送一条简短提示。找到该二进制文件，或用 `agy models` 列出模型，并不能证明该账户能生成回复。

## 在 Orca 中找到它 {#find-it-in-orca}

打开 **Settings → Agents** 并点击 **Refresh**。这会再次搜索已安装的 Agent；它不会安装 CLI，也不会替你登录。

如果 `agy` 装在 Orca 不会搜索的位置，展开 **Antigravity** 行，在 **Command** 中输入该可执行文件的完整路径：

```text
/opt/agent-tools/agy
```

在 Windows 上，不含空格的路径不需要引号（`C:\Tools\agy.exe`）。包含空格的路径要加引号。PowerShell 是 Orca 默认的 Windows 终端 shell，还需要在加引号的路径前加上它的 `&` 调用运算符；Command Prompt 则不需要：

```text
& "C:\Agent Tools\agy.exe"
```

不要把启动标志放进 **Command**。该字段在你按下 Enter 或离开它时保存，**Reset** 会恢复为 `agy`。一旦该路径上的可执行文件在主机上存在，Orca 就会把 Antigravity 列为已安装：它会出现在 **New Tab** 菜单和新工作区 Agent 选择器中，并且可以成为你的默认 Agent。Orca 找不到的路径会让 Antigravity 仍列为未安装。

## WSL 与远程主机 {#wsl-and-remote-hosts}

在运行该工作区的机器上安装并登录 `agy`：WSL 发行版、[SSH 主机](/docs/ssh)，或 [远程 Orca 服务器](/docs/remote-servers)。笔记本上能用的 CLI，并不会让它在那里可用。

在 Windows 上，**Command** 的值由 Windows 工作区和 WSL 工作区共享。Windows 路径并不指向 Linux 可执行文件，因此 WSL 工作区不会通过它找到 `agy`；即便某个 WSL 工作区能在自己的 `PATH` 上找到 `agy`，它仍然会启动那个 Windows 路径。如果两边都要运行 Antigravity，请把 Windows 安装加到 `PATH`，而不是设置 **Command**。对于 SSH 主机或远程 Orca 服务器，编辑 **Command** 之前，先在 Settings 的主机菜单里选中该主机；该值会存储并在该主机上检查。

## WSL 中的 API key 认证 {#api-key-authentication-in-wsl}

Google 登录是认证 `agy` 的常规方式；并不要求 API key。如果你有意改用 Gemini API key，运行 `agy` 的那台机器上需要两样东西：

1. 环境变量 `GEMINI_API_KEY`。
1. 在 `~/.gemini/antigravity-cli/settings.json` 中选定 API key 提供方。把下面这段合并进现有 JSON，并保留你的其他设置：

   ```json
   {
     "modelProvider": "gemini"
   }
   ```

   没有这项设置时，即使 key 存在，`agy` 仍可能要求 Google 登录。

在 WSL 中，这两者都属于 **发行版内的 Linux 用户**。Windows 环境变量不会自动成为 Linux 环境变量，更改 Windows 变量也不会更新已经在运行的 Orca 实例或终端。

最简单的做法是在该发行版的 shell 启动文件中导出 key（例如 `~/.bashrc`），然后在该工作区打开一个新的 Orca 终端。若要改为转发你作为 Windows 环境变量保存的 key，请在 PowerShell 中运行下面的命令；系统变量请把 `'User'` 换成 `'Machine'`。它会保留你其他的 `WSLENV` 条目：

```powershell
$env:GEMINI_API_KEY = [Environment]::GetEnvironmentVariable('GEMINI_API_KEY', 'User')
$entries = @($env:WSLENV -split ':' | Where-Object { $_ -and ($_ -split '/')[0] -ne 'GEMINI_API_KEY' })
$env:WSLENV = ($entries + 'GEMINI_API_KEY/u') -join ':'
```

这些赋值只影响当前这个 PowerShell 进程以及它启动的程序，因此要让 key 到达 WSL，请退出 Orca，并从这个 PowerShell 窗口启动它。绝不要把 key 放进 **Command** 或 **Arguments** 字段。

在发行版内确认 key 已经到达，但不要打印它，然后请求一条短回复：

```sh
if [ -n "${GEMINI_API_KEY:-}" ]; then echo 'API key present'; else echo 'API key missing'; fi
agy --print 'Reply exactly AGY_AUTH_OK. Do not use tools.' --output-format json --print-timeout 30s
```

key 存在只证明它被转发了；成功的回复才证明 `agy` 能够认证并生成。

## 排查 {#troubleshooting}

| 现象 | 下一步检查 |
| --- | --- |
| Antigravity 桌面应用能打开，但 Orca 没有列出该 Agent | 确认 `agy --version` 可用；Orca 需要的是 CLI 可执行文件。 |
| `agy` 在新终端里可用，但 Orca 没有列出它 | 在 **Settings → Agents** 中点击 **Refresh**，或在 **Command** 中输入可执行文件的完整路径。 |
| 带空格的自定义路径找不到 | 给路径加引号（PowerShell 要在前面加 `&`），指向可执行文件而不是 shell 别名，并且不要把标志放进 **Command**。 |
| 在 Windows 工作区可用，在 WSL 中缺失 | 在发行版内安装 `agy`，并参见上文关于 **Command** 中 Windows 路径的说明。 |
| 请求返回 401 或 `UNAUTHENTICATED` | 在同一主机上、于 Orca 之外运行 `agy` 并完成 Google 登录，或按上文设置 API key 认证。 |
| 模型名称被拒绝 | 在该主机上运行 `agy models`，并选用它列出的模型。 |

报告设置问题时，请附上 Orca 版本、运行该工作区的主机、`agy --version` 以及错误文本。先去掉账户标识、key 和私有路径。
