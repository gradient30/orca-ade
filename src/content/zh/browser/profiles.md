# Browser-use 配置档 {#browser-use-profiles}

Browser-use 配置档让你用特定身份运行 Orca 浏览器——已登录用户或特定 cookie jar。适合 Agent 需要登录、复现会话相关缺陷，或模拟多个用户时。

## 创建配置档 {#create-a-profile}

1. 打开 [Settings → Browser → Profiles](/docs/settings)。
1. 点 **Add profile**，给它一个名字。
1. 可选地植入 cookies 和 viewport 尺寸。

## 浏览器身份 {#browser-identity}

浏览器 user agent 是应用级选择，因为文档和 web worker 必须呈现同一套身份。打开 **Settings → Browser → Browser identity**，在清洗后的身份和 Electron 原生身份之间选择。改完后要重启 Orca 才生效。

**Native** 是默认值。它保留 Electron 自己的身份，Cloudflare 的安全检查和 Google 登录都接受这个身份。少数站点会拒绝 Electron，因此 Orca 做了两个例外：Microsoft Teams 收到去掉 Electron 标记的 user agent，Chase 收到清洗后的身份。

**Cleaned** 会从 user agent 里去掉 Orca 和 Electron 标记，留下 Chrome 形态的身份。这并不会让内置浏览器与 Chrome 完全相同，而且 Cloudflare 的整页安全检查在此模式下可能循环。Google 登录宿主仍然看到 Electron 自己的身份，因为 Google 会拒绝自称 Chrome 或其他浏览器的登录。如果你以前选过模式，Orca 会保留你的选择。

## Cookie 导入与 Google 登录 {#cookie-import-and-google-sign-in}

从 Settings 或浏览器工具栏把 Chrome 或 Edge（或 cookie 文件）的 cookies 导入配置档。Orca 只替换导入中包含的域名的已有 cookies，因此同一配置档里不相关站点的登录保持完好。Google cookies 被排除——导入菜单显示 **Google logins aren't imported**，并告诉你 **Sign in to Google directly in Orca.** 跳过 Google cookies 的导入之后，会有一条单独警告点名执行导入的宿主：在 Orca 中于该宿主上用同一配置档打开浏览器，然后登录。

Default 配置档上的 **Clear default cookies** 在你确认后会清掉其中全部 cookie，并使你退出该配置档里的站点。

当站点从 USB 安全密钥请求可发现的 passkey，且该密钥提供多个账户时，Orca 会打开账户选择器，而不是静默取消登录。选择你想要的账户或取消请求。操作系统存储的平台 passkeys 在 Orca 中尚不可用；此流程用于外接 FIDO 安全密钥。

## 使用配置档 {#use-a-profile}

从浏览器工具栏挑选配置档。该窗格中的所有标签都用它，直到你切换。Agent 驱动的浏览器命令会继承活动配置档。

## 隔离 {#isolation}

每个配置档有自己的存储分区——cookies、local storage、cache。配置档不会互相泄漏。
