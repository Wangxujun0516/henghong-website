# Google Search Console 配置确认

## 目标

确认 henghongrv.com 已在 Google Search Console 中验证，Sitemap 已提交，Google 正常索引网站页面。

## 步骤

### 1. 确认站点验证状态

查看文件 `app/layout.tsx` 第 65 行：
```html
<meta name="google-site-verification" content="gbQPvyC9OT410KdApHlyP0CurQ6BprpHOXblITV7MyA" />
```

这个 meta 标签已存在，说明已通过 HTML meta 标签方式验证了站点。确认 `henghongrv.com` 在 Google Search Console 中显示为 "已验证" 状态。

### 2. 提交 Sitemap

查看 `app/sitemap.ts` — 已确认 Sitemap 动态生成所有页面。

查看 `app/robots.ts` — 确认 Sitemap URL 指向：
```
sitemap: ${siteConfig.url}/sitemap.xml
```

需要在 Google Search Console 中手动提交 Sitemap：
- 登录 https://search.google.com/search-console
- 选择 henghongrv.com 站点
- 左侧菜单 → Sitemaps
- 在 "Add a new sitemap" 输入：`sitemap.xml`
- 点击 Submit

### 3. 确认构建产物中有 Sitemap

运行 `npm run build` 后，检查 `.next` 目录或 `public` 目录是否有 `sitemap.xml` 文件生成。

Next.js 的 app router 会自动在 `/.next/server/app/sitemap.xml/route.js` 生成 Sitemap 路由。

### 4. 检查已有索引状态

在 Google Search Console 中查看：
- Pages → 已索引的页面数量
- 是否有 "Submitted URL not indexed" 的报错
- 是否有 "Soft 404" 等错误

### 5. 验证在线可访问

确认以下 URL 返回 HTTP 200 且可被 Google 正常爬取：
- https://www.henghongrv.com/
- https://www.henghongrv.com/products
- https://www.henghongrv.com/blog
- https://www.henghongrv.com/sitemap.xml
