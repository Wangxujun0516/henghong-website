# Cursor 执行提示词：在博客和产品页嵌入 Lead Magnet CTA

## 任务概述

在以下位置增加 "Download OEM Sourcing Checklist" 的 CTA，引导访客填邮箱下载：

1. **每篇博客文章底部**（现有 CTA 上方或下方）
2. **每个产品详情页底部**（现有的 "Need a Custom Solution" 区块附近）

---

## 第一步：创建 Lead Magnet CTA 组件

创建 `components/lead-magnet/ChecklistCTA.tsx`：

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ChecklistCTA() {
  return (
    <div className="mt-12 rounded-xl border-2 border-accent/20 bg-accent/[0.03] p-8 text-center sm:p-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <svg
          className="h-7 w-7 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-xl font-bold text-primary sm:text-2xl">
        Free OEM Sourcing Checklist
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
        A practical 6-step checklist covering capacity calculation, certification
        verification, supplier qualification, and logistics planning — designed
        for RV OEM buyers and procurement teams.
      </p>
      <div className="mt-6">
        <Button asChild variant="cta" size="lg">
          <Link href="/contact#checklist">Download Free Checklist</Link>
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">
        No spam. Your information will not be shared with third parties.
      </p>
    </div>
  );
}
```

---

## 第二步：嵌入博客文章详情页

文件：`app/blog/[slug]/page.tsx`

在现有文件的 CTA 区块（"Need Help with Your RV Leveling System?" 区块）**之前或之后**，插入 ChecklistCTA 组件。

具体位置参考：在原有 CTA 的 `</div>` 闭合标签之后、`</aside>` 之前或 `</article>` 之前。建议放在原有 CTA 区块**下方**，作为第二个 CTA。

需要在文件顶部添加 import：
```tsx
import { ChecklistCTA } from "@/components/lead-magnet/ChecklistCTA";
```

插入方式示例（放在原有 CTA 区块之后、`</article>` 之前）：
```tsx
{/* 原有的 CTA 区块 */}
<div className="mt-12 pt-8 border-t border-gray-200">
  <div className="bg-primary/5 rounded-lg p-6">
    ...
  </div>
</div>

{/* 新增的 Lead Magnet CTA */}
<ChecklistCTA />
```

注意：`app/blog/[slug]/page.tsx` 是 Server Component，而 `ChecklistCTA` 组件是纯展示组件（没有 "use client" 依赖），可以直接在 Server Component 中引入使用。

但如果你写的 ChecklistCTA 中用到了 Button 组件，Button 如果是 Client Component 也没关系——Server Component 可以引入 Client Component。

---

## 第三步：嵌入产品详情页

文件：`app/products/[slug]/page.tsx`

在现有的 "Need a Custom Solution for Your RV Platform?" 区块（产品页底部的 OEM CTA）**之后**，插入 ChecklistCTA 组件。

位置参考：在 "Related Products" 区块之前，或 OEM CTA 区块与 Related Products 之间。

需要在文件顶部添加 import：
```tsx
import { ChecklistCTA } from "@/components/lead-magnet/ChecklistCTA";
```

插入方式示例（放在现有 OEM CTA 区块 `</div>` 闭合之后、related products 区块 `{related.length > 0 && (` 之前）：
```tsx
{/* 现有的 OEM CTA 区块 */}
<div className="mt-16 rounded-2xl border ...">
  ...
</div>

{/* 新增的 Lead Magnet CTA */}
<ChecklistCTA />

{/* Related Products 区块 */}
{related.length > 0 && (
  <div className="mt-16">
    ...
  </div>
)}
```

---

## 第四步：在 Contact 页面的 Checklist 区块增加锚点 ID

文件：`app/contact/page.tsx`

目前的 Checklist 下载区块缺少锚点 ID，导致 `/contact#checklist` 链接无法滚动定位到正确位置。

找到 Checklist 下载区块的最外层 div，加上 `id="checklist"`：

```tsx
<div id="checklist" className="rounded-lg border-2 border-accent/20 bg-accent/[0.03] p-5">
```

---

## 最终效果

1. **博客文章底部**：先有 "Need Help?" CTA → 然后是 "Free OEM Sourcing Checklist" CTA → 然后 Related Posts（如果有）
2. **产品详情页底部**：先有 "Need a Custom Solution?" CTA → 然后是 "Free OEM Sourcing Checklist" CTA → 然后 Related Products
3. **Contact 页面**：支持 `/contact#checklist` 锚点定位，点击后自动滚动到下载表单

---

## 验证方式

1. 本地 dev 环境：打开任意博客文章，滚动到底部，确认两个 CTA 都存在且样式正确
2. 打开任意产品详情页，滚动到底部，确认 Checklist CTA 存在
3. 点击 Checklist CTA 按钮，确认跳转到 `/contact#checklist` 并自动滚动到下载表单
4. 运行 `npm run build` 确认没有编译错误
