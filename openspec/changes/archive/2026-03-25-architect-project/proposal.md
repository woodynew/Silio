## Why

市面上现有的 Java 教程往往偏向理论和语法的罗列，初学者和进阶者在面对真实场景时依然缺乏“把技术串联解决实际问题”的能力。本项目旨在搭建一个**“Java 实战学习路线图”**形式的教程网站，通过结构化的真实案例（如手写服务器、图书管理系统、秒杀系统）与“避坑排错”指南，帮助开发者真正建立项目级思维。

## What Changes

建立一个极其轻量、极速响应且具有高级审美的教程纯静态网站（MVP）：
*   **基础框架构建**：使用 Astro 构建静态框架加上 Starlight 文档主题进行快速初始化。
*   **极致视觉体验**：默认包含深色模式，使用集成的高质量高亮功能（Shiki/Prism），并原生支持 Markdown 中的交互式 Mermaid.js 架构图渲染。
*   **轻量化进度追踪**：抛弃服务端注册登录机制，直接使用浏览器 `LocalStorage` 跟踪每个页面的学习完成状态（Checklist打勾）。
*   **全文本检索**：集成极轻量化的纯前端搜索库 Pagefind 实现教程内高效检索。
*   **明确界限**：MVP **不包含**任何后端代码的集成和运行，在线代码编译运行沙箱（WebContainer）被推迟到以后的版本。

## Capabilities

### New Capabilities
- `docs-platform`: 基于 Astro + Starlight 的极速生成静态文档框架与全局主题、样式（包含代码高亮和暗黑模式）。
- `progress-tracking`: 纯前端的阅读打卡体系，基于 LocalStorage 管理页面/小节的学习完成状态。
- `search-system`: 基于纯静态资源索引框架（如 Pagefind）的全站大纲和内容实时搜索。

### Modified Capabilities
- 

## Impact

此次架构将生成该开源仓库的初始骨架（Frontend 侧代码），并约束了我们接下来的技术选型（Astro、纯静态构建部署到 Vercel/GitHub Pages），后续所有的章节文档均将按照此处制定的表现标准进行组织和渲染。
