# Cursor 执行提示词：SEO 技术审计

## 任务

对 henghong-website 项目进行一次全面的 SEO 技术审计，发现问题并修复。

## 审计清单

### 1. 检查所有页面 Title 和 Meta Description

打开 `app/sitemap.ts`，确认所有在 Sitemap 中的页面都有对应的 metadata。

检查每个页面的 `generateMetadata` 或 `export const metadata`：
- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/products/page.tsx`
- `app/products/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/oem-manufacturer/page.tsx`
- 其他静态页面

确认每个页面都有：title、description、alternates.canonical、openGraph

### 2. 检查 404 页面

访问以下 URL 确认是否返回自定义 404：
- `/blog/non-existent-page`
- `/products/non-existent-product`
- `/non-existent-page`

`app/not-found.tsx` 已存在，确认它正常生效。

### 3. 检查图片 Alt 文本

在 `app/products/[slug]/page.tsx` 中确认 product.images 渲染时有关键词丰富的 alt 文本。
目前用的是 `alt={product.title}`，建议改进：
```tsx
alt={`${product.title} - ${product.category} - Henghong RV Leveling System`}
```

### 4. 检查 Sitemap 完整性

读取 `app/sitemap.ts`，确认它包含了所有博客和产品页。
确认新增的 3 篇博客会被自动包含（因为是从 contentlayer 动态生成的）。

### 5. 检查 robots.txt

读取 `app/robots.ts`，确认它指向正确的 Sitemap URL。

### 6. 检查加载性能相关

- 确认图片使用了 next/image 组件（已有）
- 确认字体使用了 next/font（已有 — Inter 字体）
- 确认 preload 了关键资源

### 7. 检查内链结构

- 确认导航栏所有链接指向正确
- 确认博客文章之间有链接（如果有 Related Posts）
- 确认产品页之间有链接（Related Products）

## 发现问题后的修复方式

直接在对应文件中修复，不需要创建新文件。修复后列出变更内容。
