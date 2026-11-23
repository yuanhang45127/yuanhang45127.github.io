# personal-site

刘远航的个人网站 —— Astro + GitHub Pages，中英双语，学术简约风格。

设计规格见 `docs/superpowers/specs/2026-11-23-personal-site-design.md`。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物在 dist/
```

## 更新内容（最常用）

所有内容都是 `src/content/` 下的 Markdown 文件，**一个条目一个文件，中英文字段并排**（`title` / `titleEn`、`highlights` / `highlightsEn`）：

- `src/content/research/` — 科研经历（`category: master | undergrad` 控制分组，`order` 控制排序）
- `src/content/experience/` — 工作（`kind: work`）、教育（`kind: education`）、获奖（`kind: award`）、技能（`kind: skill`）
- `src/content/projects/` — 独立项目
- 首页简介、联系方式、申博方向：`src/config.ts`
- 导航、按钮等界面文字：`src/i18n/ui.ts`

改完 `git push`，GitHub Actions 自动构建部署，约 1 分钟上线。

## 首次部署到 GitHub Pages

1. 把 `src/config.ts` 的 `githubUsername` 改成你的 GitHub 用户名；把 `astro.config.mjs` 的 `site` 改成 `https://<用户名>.github.io`。
2. 在 GitHub 新建仓库（如 `personal-site`），push 本仓库代码。
3. 仓库 Settings → Pages → Source 选 **GitHub Actions**。
4. push 一次提交（或手动运行 Actions），部署完成后访问 `https://<用户名>.github.io/`。

## 换视觉风格

样式全部在 `src/styles/global.css`（学术简约主题），内容与样式完全分离——换风格只需替换这一个文件。
