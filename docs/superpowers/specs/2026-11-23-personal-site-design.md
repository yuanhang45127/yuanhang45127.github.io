# 个人网站设计规格（2026-11-23）

## 背景与目标

为刘远航建立个人网站，基于现有简历（`求职与申博/Resume/通用简历/resume-zh.md` 及英文版）内容，覆盖四类受众与用途：

1. **申博/学术名片**——面向博导与招生委员会，突出科研经历、论文成果、电离层/空间天气方向；
2. **求职名片**——面向雇主，突出工作经历与算法/工程技能；
3. **综合个人主页**——长期个人品牌资产；
4. **独立开发者作品展示**——PinDou、stm32_scan_bot 等项目。

网站中英双语，部署于 GitHub Pages，日常更新成本低（改 Markdown 即上线）。

## 技术方案（已确认：方案一）

**Astro + GitHub Pages**，理由：

- 内容以 Markdown/Frontmatter 管理，构建产物为纯静态 HTML，零 JS 默认输出，加载快；
- 内容源与视觉主题分离：换风格 = 换主题文件，内容零改动（满足"多风格版本、内容一致、方便维护"的长期诉求）；
- GitHub Actions 推送即自动部署，更新链路短。

被否方案：Next.js（对个人站过重，i18n/MD 管线搭建成本高）；VitePress（文档站形态束缚页面自由度）。

## 信息架构

多页结构，中英文同构路由（导航栏语言切换器）：

| 路由 | 页面 | 内容 |
|------|------|------|
| `/` | 首页 | Hero（姓名+一句话定位）、科研/工作/项目三块导览 |
| `/research/` | 科研 | 硕士课题（时空数据挖掘，模型部署中国气象局业务系统）、毕业论文（点云感知，EI 收录）、本科科研项目、申博方向 |
| `/work/` | 工作 | 某研究所研发经历（Java/RAG/Agent，脱密期不具名）、技能栈清单 |
| `/projects/` | 独立项目 | PinDou、stm32_scan_bot 项目卡片与详情 |
| `/cv/` | 简历 | 在线简历全文 + PDF 下载 |
| `/en/...` | 英文版 | 与中文版一一对应 |

## 内容模型（单一内容源，双语并排）

`src/content/` 按类型分集合，**一个条目 = 一个文件**，frontmatter 中英文字段并排（如 `title` / `titleEn`、`summary` / `summaryEn`）：

- `projects/`——独立项目条目（PinDou、stm32_scan_bot）
- `research/`——科研经历条目
- `experience/`——工作、教育、竞赛获奖条目

简历 PDF 复用现成文件：`通用简历/resume-zh.pdf`、`resume-en.pdf`，置于 `public/` 供下载。

初始内容全部取自现有简历与已确认事实（见下"事实来源"），不虚构任何成果。

## 视觉设计（A · 学术简约）

- 白底、宽留白、细线分隔、无多余动效；
- 标题：Noto Serif SC；正文：Noto Sans SC；
- 强调色：藏青 `#1a3a6b`；
- 响应式：移动端单列，桌面端最大内容宽约 960px；
- 中英文排版各自符合语言习惯（标点、字距）。

## 部署与更新流

- 仓库 `personal-site`，GitHub Actions 构建并部署至 `https://<github-username>.github.io/`；
- GitHub 用户名做成配置项（部署时填写），自定义域名留作以后可选扩展；
- 日常更新：编辑 Markdown → push → 自动部署上线。

## 首版明确不做（YAGNI）

- 博客、访客统计、评论系统、深色模式；
- 上述功能日后添加时内容源结构无需改动（深色模式即为独立主题文件的例子）。

## 事实来源

- 简历内容：`C:/Users/liuyuanhang/Projects/1-Projects/求职与申博/Resume/通用简历/resume-zh.md`、`resume-en.md`
- 职业方向（申博方向描述口径）：`C:/Users/liuyuanhang/Projects/1-Projects/求职与申博/Resume/职业方向与规划.md`
- 项目细节：PinDou（简历"项目与科研经历"节）、stm32_scan_bot 仓库
- 照片：`通用简历/photo_id.jpg`（如使用）

## 验收标准

- `astro build` 通过，无类型/内容校验错误；
- 五个中文页面 + 五个英文页面对应关系正确，语言切换器工作正常；
- 视觉符合"学术简约"（白底、衬线标题、藏青强调、细线分隔）；
- 移动端单列布局正常；
- CV 页 PDF 下载链接有效；
- 部署后 `https://<github-username>.github.io/` 可访问。
