# Cursor 执行提示词：Umami 事件追踪 + Calendly 预约

## 任务一：Umami 事件追踪

在 Umami 分析中追踪关键用户行为事件，以便后续分析转化率和优化获客渠道。

### 1.1 修改 UmamiAnalytics 组件

文件：`components/analytics/UmamiAnalytics.tsx`

将现有的组件拆分为两个功能：
1. 保留原有的 Umami 脚本加载
2. 新增一个导出的工具函数 `trackUmamiEvent`，供其他组件调用

```tsx
"use client";

import Script from "next/script";

const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = "f57c2081-9e72-4c14-9895-c13ed5d8a381";

// 声明 window 上的 umami 类型
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number>) => void;
    };
  }
}

export function UmamiAnalytics() {
  return (
    <Script
      defer
      data-website-id={UMAMI_WEBSITE_ID}
      src={UMAMI_SCRIPT_URL}
      strategy="lazyOnload"
    />
  );
}

/**
 * 统一的 Umami 事件追踪函数
 * 在组件中调用：trackUmamiEvent("form_submit", { type: "contact" })
 */
export function trackUmamiEvent(
  eventName: string,
  eventData?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, eventData);
  }
}
```

### 1.2 追踪 Contact Form 提交

文件：`components/contact/ContactForm.tsx`

在表单提交成功后（第 30-32 行的 `useEffect` 中），增加事件追踪：

```tsx
useEffect(() => {
  if (state.success) {
    formRef.current?.reset();
    trackUmamiEvent("form_submit", { type: "contact_form" });
  }
}, [state.success]);
```

需要在文件顶部添加 import：
```tsx
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";
```

### 1.3 追踪 Checklist 下载

文件：`components/lead-magnet/ChecklistDownload.tsx`

在下载成功后（第 37-39 行的 `useEffect` 中），增加事件追踪：

```tsx
useEffect(() => {
  if (state.success && state.message) {
    window.open(state.message, "_blank");
    formRef.current?.reset();
    trackUmamiEvent("checklist_download", { source: "contact_page" });
  }
}, [state.success, state.message]);
```

需要在文件顶部添加 import：
```tsx
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";
```

### 1.4 追踪 Newsletter 订阅

文件：`components/blog/NewsletterSubscribe.tsx`

在订阅成功后（第 28-30 行的 `if (state.success)` 分支中），增加事件追踪：

在 `state.success` 分支中返回的 JSX 之前，添加：
```tsx
useEffect(() => {
  if (state.success) {
    trackUmamiEvent("newsletter_subscribe", { source: "blog_sidebar" });
  }
}, [state.success]);
```

需要在文件顶部添加 import：
```tsx
import { useEffect } from "react";
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";
```

### 1.5 追踪 WhatsApp 点击

文件：`components/layout/WhatsAppFloat.tsx`

在两个 WhatsApp 链接的 a 标签上添加点击事件追踪。给 WhatsApp 链接的 a 标签添加 onClick：

找到 WhatsApp 的 a 标签（约第 20-28 行），给每个 a 标签加上 onClick：

```tsx
{siteConfig.contact.whatsapp.map((num, index) => (
  <a
    key={index}
    href={`https://wa.me/${num.replace(/\D/g, "")}`}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackUmamiEvent("whatsapp_click", { 
      location: "floating_button",
      number_index: index 
    })}
    className="block text-xs text-muted hover:text-primary"
  >
    WhatsApp: {num}
  </a>
))}
```

需要在文件顶部添加 import：
```tsx
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";
```

### 1.6 追踪 Get Quote CTA 点击

文件：`components/layout/FloatingQuoteCTA.tsx`

找到 FloatingQuoteCTA 组件中的 a 标签（链接到 `/contact#quote`），添加 onClick：

```tsx
onClick={() => trackUmamiEvent("cta_click", { type: "floating_quote" })}
```

如果 FloatingQuoteCTA 是 Server Component，先加 "use client" 或者在文件顶部可以加。查看它的现有代码决定。

---

## 任务二：Calendly 预约嵌入

在 Contact 页面增加 "Schedule a Call" 区块，让访客可以直接预约时间。

### 2.1 在 Contact 页面增加 Calendly 区块

文件：`app/contact/page.tsx`

在左侧联系信息栏中，找一个合适位置插入 Calendly 预约按钮。建议放在"Quick Contact"区块下方或之后。

先检查 Calendly 链接——用户需要在 Calendly 注册并创建自己的链接。如果还没有，先提供一个占位方案：用 Button 链接到外部 Calendly 链接，或者用 iframe 嵌入。

推荐方案：在 Contact 页面的联系信息栏添加一个"预约"区块，使用 Button 跳转到 Calendly 链接：

```tsx
<div className="rounded-lg border border-border bg-white p-5">
  <h3 className="font-semibold text-primary">Schedule a Call</h3>
  <p className="mt-2 text-xs text-muted leading-relaxed">
    Prefer a live conversation? Book a 15-minute call with our sales team to discuss your requirements.
  </p>
  <Button asChild variant="cta" size="sm" className="mt-4 w-full">
    <a 
      href="https://calendly.com/your-company/15min" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={() => trackUmamiEvent("calendly_click", { source: "contact_page" })}
    >
      Schedule a Call
    </a>
  </Button>
</div>
```

注意：需要替换 `https://calendly.com/your-company/15min` 为实际的 Calendly 链接。

需要在文件顶部添加 import：
```tsx
import { Button } from "@/components/ui/button";
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";
```

### 2.2 替代方案（如果没有 Calendly 账号）

如果还没有 Calendly 账号，可以先用一个简单的静态替代——直接用 mailto 链接或 WhatsApp 链接，文案改为 "Schedule a Call via Email" 或 "Chat with Us on WhatsApp"。

注册 Calendly 只需要 2 分钟，免费版即可。注册后获得链接格式如：`https://calendly.com/yourname/15min`

---

## 验证方式

1. 用 `npm run build` 确保编译无错误
2. 打开浏览器开发者工具，在 Console 中输入 `window.umami` 确认 umami 对象存在
3. 手动触发一个事件（如提交表单），在 Console 中观察是否有报错
4. 打开 Umami 后台（cloud.umami.is），查看事件是否被记录
5. 点击 Calendly 按钮确认链接跳转正确
