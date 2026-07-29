# Henghong RV 网站推广获客执行方案

**版本**: v1.0  
**日期**: 2026-07-29  
**目标**: 通过内容营销 + 转化优化 + 付费增长 + CRM 体系，建立可持续的 B2B 海外获客引擎

---

## 一、现状总结

基于对 henghongrv.com 网站的全面代码审查，当前状态：

| 维度 | 评估 | 关键发现 |
|------|------|----------|
| SEO 技术基础 | 良好 | Sitemap、Metadata、JSON-LD、Robots 均已完备 |
| 内容资产 | 中等 | 17 个产品页 + 9 篇博客 + 3 个 Landing Page |
| 转化路径 | 良好 | 表单、WhatsApp、CTA 按钮链路清晰 |
| 信任建设 | 优秀 | Intertek、CE、ISO 认证、工厂数据展示充分 |
| 分析与追踪 | 中等 | Umami 已接入，但缺关键事件追踪和再营销 |
| 邮件捕获 | 薄弱 | 无 Lead Magnet，Newsletter 订阅未实现 |

**核心短板**: 内容规模不足、缺少流量捕获机制、转化漏斗无追踪。

---

## 二、阶段一：夯实基础（第 1-2 个月）

> 目标：将内容基础翻倍，补齐关键的转化捕获机制。

### 2.1 内容扩充（SEO 长尾流量）

#### 博客文章（新增 12 篇）

按关键词策略分三类：

**选购与对比类（中高搜索量）:**

| # | 标题 | 目标关键词 | 优先级 |
|---|------|-----------|--------|
| 1 | RV Electric Jack vs Hydraulic Leveling: Which Is Better for Your Fleet? | electric vs hydraulic rv leveling | P0 |
| 2 | How Much Weight Can an RV Leveling System Handle? A Complete Spec Guide | rv leveling system weight capacity | P0 |
| 3 | 12V vs 24V RV Leveling Systems: Pros, Cons and How to Choose | 12v vs 24v rv leveling | P0 |
| 4 | Electric Tongue Jack Buying Guide: What Every RV Manufacturer Should Know | electric tongue jack buying guide | P0 |
| 5 | Stabilizer Jacks vs Leveling Systems: What's the Difference? | stabilizer jacks vs leveling system | P0 |

**安装与维护类（问题导向流量）:**

| # | 标题 | 目标关键词 | 优先级 |
|---|------|-----------|--------|
| 6 | How to Install an Automatic RV Leveling System: Step-by-Step Guide | install rv leveling system | P1 |
| 7 | RV Jack Maintenance Checklist: Extend the Life of Your Leveling System | rv jack maintenance | P1 |
| 8 | Why Your RV Leveling System Won't Work: 7 Common Problems & Fixes | rv leveling system problems | P1 |

**行业与采购类（B2B 采购意图）:**

| # | 标题 | 目标关键词 | 优先级 |
|---|------|-----------|--------|
| 9 | How to Choose an RV Parts Supplier in China: A Procurement Guide for Importers | rv parts supplier china | P0 |
| 10 | RV OEM Manufacturing: What to Look for in a Factory Partner | rv oem manufacturer | P0 |
| 11 | Complete Guide to RV Jack Certification: CE, FCC, E-Mark & More | rv jack certification | P1 |
| 12 | RV Leveling System Cost Breakdown: OEM Pricing vs Retail | rv leveling system cost | P1 |

**实施方式**: 每篇文章约 1500-2000 字，包含 2-3 张产品/对比图片，段末自然植入 CTA。

#### SEO Landing Page 优化

| 页面 | 优化动作 |
|------|----------|
| `/oem-manufacturer` | 增加 FAQ 区块并嵌入 FAQPage JSON-LD |
| `/electric-vs-hydraulic` | 增加对比表格，补充 H2/H3 子标题丰富关键词密度 |
| `/how-to-choose-leveling-system` | 添加分步指南结构，增加下载"选型清单"的 CTA |

### 2.2 转化机制搭建

#### Lead Magnet（核心产出）

**内容**: "The Complete RV Leveling System Spec Sheet & OEM Sourcing Checklist"（PDF）

**结构**:
- 恒宏产品系列一览表（含容量、电压、行程等核心参数对比）
- OEM 采购清单模板（设计需求 → 打样 → 验货 → 物流）
- 常见技术术语中英文对照表
- 联系方式和二维码

**实施方式**:
1. 在 Contact 页面增加一个"Download Spec Sheet"的区块
2. 访客填写姓名 + 公司邮箱即可下载
3. 邮件自动发送 PDF 链接（通过 Resend 或 Mailchimp）

#### Newsletter 订阅功能实装

在 Blog 侧边栏的订阅框接入后端：

**推荐方案**: 接入 **Mailchimp**（免费版支持 500 联系人）或 **ConvertKit** 免费版  
**实施步骤**:
- 在 Sidebar 组件中接入 Mailchimp 的嵌入式表单或使用 API
- 每封新博客发布时自动推送给订阅者
- 订阅确认邮件附带 Lead Magnet 下载链接

#### Calendly 预约演示

在 Contact 页面和产品页面增加 "Schedule a Call" 按钮，链接到 Calendly 页面：
- 选项 A: 15-min Quick Chat（初步沟通）
- 选项 B: 30-min Technical Discussion（技术细节对接）
- CRM 自动记录预约信息

### 2.3 分析与追踪夯实

| 追踪项 | 实施方式 | 优先级 |
|--------|----------|--------|
| 表单提交事件 | Umami 自定义事件追踪 | P0 |
| WhatsApp 点击 | 事件追踪 | P0 |
| CTA 按钮点击 | 事件追踪 | P1 |
| Lead Magnet 下载 | 事件追踪 | P0 |
| 页面滚动深度 | 内容效果评估 | P1 |
| 外链点击（邮件/Catalog） | 事件追踪 | P1 |

#### Google Search Console 配置

- 确认 `henghongrv.com` 已在 GSC 中验证
- 提交 Sitemap 并监控索引状态
- 关注核心关键词的展示率与点击率

---

## 三、阶段二：扩大流量（第 3-4 个月）

> 目标：在 SEO 自然流量稳定增长的基础上，启动付费渠道。

### 3.1 SEO 持续优化

#### 内容更新与内链优化

- 每篇新产品发布 → 同步一篇博客
- 博客之间、博客与产品页之间建立内链关系
- 创建"内容集群"（Content Cluster）：
  - **中心页**: `/products`（权威页面）
  - **集群文章**: 各类调平系统介绍、对比、指南
  - **内链策略**: 所有集群文章回链到 `/products` 和相关产品详情页

#### 技术 SEO 审计

- 使用 Screaming Frog 或 Ahrefs 做全站爬取
- 检查是否存在 404、重定向链、重复标题
- 检查 Core Web Vitals（LCP、FID、CLS）
- 优化图片 WebP 格式（当前已配置 AVIF/WebP，确认是否生效）

### 3.2 Google Ads 投放

#### 搜索广告

| 关键词组 | 匹配类型 | 建议预算（月度） |
|----------|----------|------------------|
| rv leveling system manufacturer | Exact/Broad | $500-800 |
| electric jack OEM China | Exact/Broad | $400-600 |
| hydraulic leveling system supplier | Exact/Broad | $400-600 |
| rv parts factory China | Broad | $300-500 |
| custom rv stabilizer manufacturer | Exact | $300-500 |

**月度预算建议**: $2,000-3,000（起步阶段）

**广告素材策略**:
- 标题强调：OEM/ODM | Low MOQ | Intertek Verified | 22+ Years
- 描述包含具体数据：39,000㎡ facility, 21 R&D engineers
- 附加链接：Products | About | Contact
- 致电附加：显示联系电话

#### 再营销广告

- 访客未提交表单 → 展示品牌广告（强调信任信号）
- 访客浏览产品页 → 展示该产品的定向广告
- 设置 30 天/90 天/180 天不同再营销窗口

### 3.3 LinkedIn 精准投放

**目标人群**: RV Manufacturer Procurement Managers、Fleet Operations Directors、Automotive Engineers  
**广告形式**: Sponsored Content + Message Ads

- 内容类型：白皮书下载广告、"Our Factory Tour" 视频广告
- 预算建议：$800-1,200/月

---

## 四、阶段三：系统化运营（第 5-6 个月）

> 目标：建立自动化的获客-培育-转化体系。

### 4.1 CRM 与线索管理

#### 推荐方案

| 方案 | 费用 | 适用阶段 | 推荐度 |
|------|------|----------|--------|
| HubSpot Free | 免费 | 起步期（第 1-2 月） | ⭐⭐⭐⭐⭐ |
| HubSpot Starter ($20/月) | $20/月 | 成长期（第 3 月起） | ⭐⭐⭐⭐ |
| Zoho CRM Free | 免费 | 替代方案 | ⭐⭐⭐ |

#### 线索评分模型

| 行为 | 分值 | 说明 |
|------|------|------|
| 提交 Contact Form | +50 分 | 高意向 |
| 下载 Spec Sheet | +30 分 | 中度意向 |
| 访问 3+ 产品页 | +15 分 | 有采购兴趣 |
| 点击 WhatsApp | +20 分 | 即时沟通意向 |
| 访问 Blog | +5 分 | 信息搜集阶段 |

- **分数 ≥ 50**: 立即跟进（销售团队电话/邮件）
- **分数 20-49**: 加入培育序列（每周一封教育邮件）
- **分数 < 20**: 保持邮件订阅，定期触达

### 4.2 邮件培育序列（Drip Campaign）

| 邮件 | 时机 | 内容 | 目标 |
|------|------|------|------|
| Email 1 | 下载/订阅后立即 | Lead Magnet 下载链接 + 公司简介 | 交付价值 |
| Email 2 | 3 天后 | "Why Intertek Verification Matters for OEM Partners" | 建立信任 |
| Email 3 | 7 天后 | 精选案例：为 X 公司定制调平系统的故事 | 社会证明 |
| Email 4 | 14 天后 | 产品特辑：适合你车型的最佳调平方案 | 教育转化 |
| Email 5 | 21 天后 | 优惠/首次合作支持政策 + 直接 Call to Action | 促成询盘 |
| Email 6 | 30 天后 | 最新博客 + 行业趋势 | 保持联系 |

### 4.3 社交媒体矩阵

| 平台 | 内容策略 | 发布频率 |
|------|----------|----------|
| **LinkedIn** | 工厂实拍、技术参数发布、客户案例、行业观点 | 每周 3-4 条 |
| **Facebook** | 产品展示、客户见证、行业展会 | 每周 2-3 条 |
| **YouTube** | 产品演示视频、工厂参观、安装教程 | 每月 2-4 条 |
| **Alibaba** | 完善产品目录、获取 RFQ | 持续维护 |

---

## 五、关键 KPI 与里程碑

### 5.1 月度 KPI

| 指标 | 第 1 月 | 第 3 月 | 第 6 月 |
|------|---------|---------|---------|
| 自然流量（月） | 1,000 | 3,000 | 8,000+ |
| 博客数量 | 9 → 15 | 21 | 25+ |
| 表单提交（月） | 5-10 | 15-30 | 30-50 |
| Lead Magnet 下载 | 0 | 20+ | 50+ |
| Newsletter 订阅 | 0 | 50+ | 200+ |
| Google Ads 线索 | — | 10+ | 20+ |
| Email 打开率 | — | 25%+ | 30%+ |

### 5.2 季度里程碑

**Q1（第 1-2 个月）**:
- [ ] 完成 12 篇新增博客上线
- [ ] Lead Magnet PDF 制作完成并上线
- [ ] Newsletter 订阅功能正式运行
- [ ] Calendly 对接上线
- [ ] Umami 事件追踪配置完成
- [ ] Google Search Console 验证完毕
- [ ] 所有页面 Alt 文本优化

**Q2（第 3-4 个月）**:
- [ ] Google Ads 搜索广告启动
- [ ] LinkedIn 广告投放启动
- [ ] CRM（HubSpot）上线
- [ ] 技术 SEO 全站审计完成
- [ ] YouTube 频道建立并发布首批视频

**Q3（第 5-6 个月）**:
- [ ] 邮件培育序列全面运行
- [ ] 再营销广告启动
- [ ] 线索评分模型上线
- [ ] 社交媒体矩阵稳定运营

---

## 六、预算概览

| 项目 | 月均费用 | 说明 |
|------|----------|------|
| Google Ads 搜索广告 | $2,000-3,000 | 起步阶段，后期根据 ROI 调整 |
| LinkedIn 广告 | $800-1,200 | B2B 精准投放 |
| HubSpot CRM | $0-20 | 免费起步，成长后升级 |
| Mailchimp/ConvertKit | $0-15 | 免费版够用 |
| Umami 分析 | $0 | 已配置 |
| Calendly | $0-10 | 免费版够用 |
| **合计** | **$2,800-4,245** | 约合人民币 2-3 万/月 |

---

## 七、立即可以执行的事项（第 1 周）

以下事项不需要预算，可以立刻推进：

1. **联系表单收件箱确认** — 确认 RESEND_API_KEY 已配置，表单能正常发送到团队邮箱
2. **[P0] 博客内容规划会** — 确定 12 篇文章的大纲和配图需求
3. **Lead Magnet 框架** — 整理产品参数表，准备 Spec Sheet PDF
4. **Umami 事件追踪** — 在 Contact Form 提交、WhatsApp 点击处增加事件上报
5. **Google Search Console** — 确认站点已验证
6. **Calendly 注册** — 用公司邮箱注册并嵌入 Contact 页面
7. **Newsletter 邮箱服务注册** — Mailchimp 免费版注册

---

## 八、附录：实施方案的时间线

```
第 1 周               第 4 周               第 8 周               第 12 周              第 24 周
│                     │                     │                     │                     │
├─ 确认表单渠道       ├─ 上线 6 篇博客      ├─ 共上线 12 篇博客    ├─ Google Ads 启动     ├─ 社交矩阵稳定运营
├─ Lead Magnet 框架   ├─ Lead Magnet 上线   ├─ Umami 全事件追踪   ├─ LinkedIn 投放启动   ├─ 邮件培育序列持续优化
├─ Umami 事件接入     ├─ Newsletter 上线    ├─ GSC 数据报告       ├─ CRM 系统上线        ├─ 内容集群成型
├─ GSC 配置           ├─ 产品页 Alt 优化   ├─ 内链优化完成       ├─ 技术 SEO 审计       ├─ 再营销启动
├─ Calendly 注册      ├─ FAQ Schema 上线    ├─ 第一批搜索流量     ├─ YouTube 视频发布    ├─ 线索评分模型
└─ 邮箱服务注册       └─ 核心页面 Schema    └─ 转化率基线确定     └─ 第一批付费线索      └─ 进入稳定获客期
```

---

*本方案建议在 6 个月内将 henghongrv.com 建设为可持续的 B2B 海外获客引擎。每阶段结束后应根据实际数据调整策略。*
