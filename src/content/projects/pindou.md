---
title: 拼豆统计 PinDou
titleEn: PinDou — Perler Bead Inventory & Artwork Toolkit
period: 2026.09 – 至今
scope: 独立开发 · 业余项目 · 部署于个人服务器长期运行
scopeEn: Solo side project · running on a personal server
tagline: 拼豆爱好者的色卡库存、作品用色与图纸识别工具（微信小程序 + 网页版）
taglineEn: Inventory, artwork color tracking, and pattern recognition for perler-bead hobbyists (WeChat Mini-Program + web)
stack: ['微信小程序原生', 'Flask', 'SQLite', 'JWT', 'OCR', 'OpenCV', 'Lab 色差匹配']
order: 1
highlights:
  - MARD 221 标准色卡库存、作品用色与扣豆流水管理
  - 淘宝订单截图 OCR 自动入库：连通域定位 + 多阈值变体投票识别
  - 拼豆图纸与成品照片识别统计：图纸网格检测 + Lab 色差逐格匹配最近色卡
  - Flask + SQLite 后端、JWT 鉴权；原生微信小程序前端（微信登录 / 激励广告 / 会员体系）
highlightsEn:
  - Inventory management for the MARD 221 standard color card, artwork color usage, and bead consumption tracking
  - One-shot OCR ingestion of Taobao order screenshots — connected-component localization with multi-threshold variant voting
  - "Pattern & photo recognition: grid detection plus per-cell nearest-color matching in Lab color space"
  - Flask + SQLite backend with JWT auth; native WeChat Mini-Program frontend (WeChat login, rewarded ads, membership)
---
