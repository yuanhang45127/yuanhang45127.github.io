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

## 部署

一次 `git push`，GitHub Actions 自动部署到**两处**（见 `.github/workflows/deploy.yml`）：

1. **47 服务器（主站）**：`https://me.obsidianlyh.top` —— nginx 静态托管 `/opt/personal-site`（站点配置 `/etc/nginx/sites-available/personal-site`，泛域名证书 `*.obsidianlyh.top`）
2. **GitHub Pages（镜像）**：`https://<用户名>.github.io/` —— 需先在仓库 Settings → Pages → Source 选 **GitHub Actions**

### GitHub 仓库需要的 secrets（Settings → Secrets and variables → Actions）

| Secret | 值 |
|--------|-----|
| `SERVER_HOST` | `47.120.76.240` |
| `SERVER_USER` | `root` |
| `SERVER_PATH` | `/opt/personal-site` |
| `SERVER_SSH_KEY` | 本机 `~/.ssh/github-actions-personal-site` 的完整内容（含首尾两行） |

### DNS

`me.obsidianlyh.top` 需一条 A 记录：`me` → `47.120.76.240`（阿里云 DNS 控制台）。

## 换视觉风格

样式全部在 `src/styles/global.css`（学术简约主题），内容与样式完全分离——换风格只需替换这一个文件。
