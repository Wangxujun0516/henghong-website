# Cursor 执行提示词：Lead Magnet 下载 + Newsletter 订阅

## 任务概述

在 henghong-website 项目中实现两个获客功能：

1. **Lead Magnet 下载表单** — 在 Contact 页面增加一个区块，访客填公司名+邮箱即可下载 "OEM Sourcing Checklist" PDF
2. **Blog 侧边栏 Newsletter 订阅** — 让订阅按钮真正工作，把邮箱存下来

---

## 第一步：创建 Checklist 文档

创建文件 `public/documents/oem-sourcing-checklist.md`：

这个文件的内容是一份英文的 OEM 采购清单，包含以下 6 个部分（用 Markdown 写，后续可以转为 PDF）：

```
# OEM RV Leveling System Sourcing Checklist

## 1. Platform Requirements
- Vehicle type: Travel Trailer / Fifth Wheel / Motorhome / Specialty
- GVWR (kg or lbs): ________
- Number of support points: 4 / 6 / other
- Target system type: Stabilizer / Electric Leveling / Hydraulic Leveling
- Stroke length requirement (mm): ________
- Voltage: DC12V / DC24V

## 2. Capacity Planning
- Calculate required system capacity: GVWR × 1.5 safety factor
- Confirm per-leg capacity requirement
- Account for asymmetric loading from slide-outs
- Verify dynamic vs static load ratings

## 3. Certification Verification Checklist
- [ ] CE Declaration of Conformity (for EU market)
- [ ] FCC Supplier's Declaration of Conformity (for US market)
- [ ] IC certification (for Canada)
- [ ] ISO 9001:2015 factory certificate
- [ ] Intertek factory audit report (if available)
- [ ] Confirm certificate holder matches contracting entity
- [ ] Check certificate expiration dates

## 4. Supplier Qualification
- [ ] Years in business: ________
- [ ] Export experience (countries served): ________
- [ ] Factory area: ________
- [ ] R&D team size: ________
- [ ] Annual production capacity: ________
- [ ] Third-party factory audit (Intertek / SGS / BV)
- [ ] References from similar OEM clients

## 5. Quality Control Questions to Ask
- What incoming material inspection process is used?
- Are load tests performed on every unit or batch?
- What corrosion protection / salt spray testing is applied?
- What is the warranty policy?
- How are non-conforming products handled?
- Can quality reports be shared before shipment?

## 6. Logistics & Commercial Terms
- Lead time for prototype: ________
- Lead time for mass production: ________
- MOQ (minimum order quantity): ________
- Packaging specification: ________
- Incoterms offered: FOB / CIF / EXW / DDP
- Payment terms: T/T / L/C / other
```

---

## 第二步：实现下载表单功能

### 2.1 创建 Server Action

创建 `app/actions/download-checklist.ts`：

```typescript
"use server";

import { Resend } from "resend";
import { z } from "zod";

const DownloadFormSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export type DownloadFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitDownloadForm(
  prevState: DownloadFormState | null,
  formData: FormData,
): Promise<DownloadFormState> {
  const rawData = {
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
  };

  const validation = DownloadFormSchema.safeParse(rawData);

  if (!validation.success) {
    const errors: Record<string, string> = {};
    validation.error.issues.forEach((issue) => {
      const field = issue.path[0]?.toString() ?? "form";
      errors[field] = issue.message;
    });
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    };
  }

  const data = validation.data;

  // Send notification email to sales team (optional - can use the same Resend setup)
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "wangxujun0516@gmail.com";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Henghong Website <onboarding@resend.dev>",
        to: recipient,
        replyTo: data.email,
        subject: `New OEM Checklist Download: ${data.company}`,
        html: `
          <h2>New Checklist Download</h2>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      });
    } catch (err) {
      console.error("Failed to send notification:", err);
      // Don't block the download if notification fails
    }
  }

  return {
    success: true,
    message: `/documents/oem-sourcing-checklist.pdf`,
  };
}
```

### 2.2 创建下载表单组件

创建 `components/lead-magnet/ChecklistDownload.tsx`：

```tsx
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitDownloadForm, type DownloadFormState } from "@/app/actions/download-checklist";
import { Button } from "@/components/ui/button";

const initialState: DownloadFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="cta" size="lg" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Download OEM Sourcing Checklist"}
    </Button>
  );
}

export function ChecklistDownload() {
  const [state, formAction] = useActionState(submitDownloadForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && state.message) {
      // Open the PDF download
      window.open(state.message, "_blank");
      formRef.current?.reset();
    }
  }, [state.success, state.message]);

  if (state.success) {
    return (
      <div className="rounded-xl border-2 border-accent/30 bg-accent/[0.03] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Download Started!</h3>
        <p className="mt-2 text-sm text-muted">
          Your OEM Sourcing Checklist should open in a new tab. If not,{" "}
          <a href="/documents/oem-sourcing-checklist.pdf" className="text-accent hover:underline">
            click here to download
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dl-company" className="block text-sm font-medium text-primary">
            Company Name *
          </label>
          <input
            id="dl-company"
            name="company"
            type="text"
            required
            placeholder="Your company name"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.company && (
            <p className="mt-1 text-xs text-cta">{state.errors.company}</p>
          )}
        </div>
        <div>
          <label htmlFor="dl-email" className="block text-sm font-medium text-primary">
            Business Email *
          </label>
          <input
            id="dl-email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-cta">{state.errors.email}</p>
          )}
        </div>
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-cta">{state.message}</p>
      )}

      <SubmitButton />
      
      <p className="text-xs text-muted text-center">
        We respect your privacy. Your information will not be shared with third parties.
      </p>
    </form>
  );
}
```

### 2.3 将下载表单添加到 Contact 页面

在 `app/contact/page.tsx` 中，在"Request a Quote"表单下方或侧边栏增加一个下载区块：

在文件的 `div id="quote"` 区块之前或之后，添加一个包含 ChecklistDownload 组件的区块。位置建议放在联系信息栏和报价表单之间，或者报价表单下方作为独立区域。

示例插入位置代码（放在 Trust Signals 区块之后、`</div>` 闭合之前约第 120 行）：

```tsx
{/* Download Section */}
<div className="rounded-lg border-2 border-accent/20 bg-accent/[0.03] p-5">
  <h3 className="font-semibold text-primary">Free OEM Sourcing Checklist</h3>
  <p className="mt-2 text-xs text-muted leading-relaxed">
    A practical 6-step checklist covering capacity calculation, certification verification, supplier qualification, and logistics planning.
  </p>
  <div className="mt-4">
    <ChecklistDownload />
  </div>
</div>
```

需要先在文件顶部 import：
```tsx
import { ChecklistDownload } from "@/components/lead-magnet/ChecklistDownload";
```

---

## 第三步：实现 Newsletter 订阅

### 3.1 创建 Newsletter Server Action

创建 `app/actions/newsletter.ts`：

```typescript
"use server";

import { z } from "zod";

const NewsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function subscribeNewsletter(
  prevState: NewsletterState | null,
  formData: FormData,
): Promise<NewsletterState> {
  const email = formData.get("email")?.toString() ?? "";
  
  const validation = NewsletterSchema.safeParse({ email });

  if (!validation.success) {
    return {
      success: false,
      message: "Please enter a valid email address",
      errors: { email: validation.error.issues[0]?.message ?? "Invalid email" },
    };
  }

  const data = validation.data;

  // Send notification to sales team
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "wangxujun0516@gmail.com";

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Henghong Website <onboarding@resend.dev>",
        to: recipient,
        replyTo: data.email,
        subject: `New Blog Newsletter Subscriber: ${data.email}`,
        html: `<p><strong>New subscriber:</strong> ${data.email}</p><p><strong>Date:</strong> ${new Date().toISOString()}</p>`,
      });
    } catch (err) {
      console.error("Newsletter notification failed:", err);
    }
  }

  return {
    success: true,
    message: "Thank you for subscribing! We'll send you industry insights and product updates.",
  };
}
```

### 3.2 替换 Blog 侧边栏订阅功能

找到 `app/blog/page.tsx` 中的 Newsletter 区块（大约第 91-104 行），将现有的纯展示订阅框替换为可用的表单：

```tsx
"use client";

// 需要把这个区块提取为 Client Component 或使用内联的 useActionState

// 替换原有代码为：
```

因为 blog/page.tsx 是 Server Component，而 useActionState 需要 Client Component，所以创建一个新的组件文件 `components/blog/NewsletterSubscribe.tsx`：

内容要点：
- 使用 `useActionState` + `subscribeNewsletter`
- 一个 email 输入框 + 订阅按钮
- 成功时显示感谢信息
- 保持现有 UI 风格一致

然后在 `app/blog/page.tsx` 中 import 并使用：
```tsx
import { NewsletterSubscribe } from "@/components/blog/NewsletterSubscribe";
```
替换原有的 newsletter 区块。

---

## 第四步：创建 PDF 版本

将 `public/documents/oem-sourcing-checklist.md` 转换为 PDF。

可以用以下任一方式：
1. 在 Next.js build 时生成 (使用 `puppeteer` 或 `html-pdf`)
2. 手动将 Markdown 转换为 HTML 后用浏览器打印为 PDF
3. 使用 pandoc 命令行转换

最简单的方案：创建一个打印样式的 HTML 页面 `/public/documents/oem-sourcing-checklist.html`，用户打开后可以用浏览器 Ctrl+P 保存为 PDF。同时把 .html 文件手动另存为 PDF 放在同目录下。

但最稳妥的方式：用脚本在构建时自动生成 PDF。在 `scripts/generate-checklist-pdf.js` 中：
- 读取 Markdown
- 渲染为 HTML 页面（带上打印样式）
- 用 puppeteer 导出为 PDF

---

## 完整工作流程

1. 创建 Checklist 内容（Markdown + HTML/PDF 版本）
2. 创建 `app/actions/download-checklist.ts` 
3. 创建 `components/lead-magnet/ChecklistDownload.tsx`
4. 修改 `app/contact/page.tsx` 增加下载区块
5. 创建 `app/actions/newsletter.ts`
6. 创建 `components/blog/NewsletterSubscribe.tsx`
7. 修改 `app/blog/page.tsx` 替换 Newsletter 区块
8. 测试完整流程
