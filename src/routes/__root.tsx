import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Orca 中文使用手册";
const BASE = import.meta.env.BASE_URL || "/";
const IS_PAGES = BASE !== "/";

const THEME_BOOT = `(function(){try{var t=localStorage.getItem("orca-handbook-theme");if(t!=="light"&&t!=="dark"&&t!=="color")t="dark";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Orca 官方文档中文版：按 onorca.dev/docs 目录 1:1 还原的使用手册，含日常快速手册。",
      },
      { name: "theme-color", content: "#0c0e12" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${BASE}favicon.svg` },
      { rel: "stylesheet", href: appCss },
      ...(IS_PAGES
        ? []
        : [
            { rel: "manifest" as const, href: "/__grok/manifest.webmanifest" },
            { rel: "apple-touch-icon" as const, href: "/__grok/icon-180.png" },
          ]),
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        // Latin UI only — CJK falls through to system stack in styles.css (no Noto SC download).
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="zh-CN" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
