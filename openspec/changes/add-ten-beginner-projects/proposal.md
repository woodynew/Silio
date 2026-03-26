# Proposal: 10 Beginner Practical Projects

## 1. Context (背景)
目前 Silio 的入门级教程内容相对单薄。为了深入贯彻“聚焦实战与底层逻辑 (Logic with Resilience)”的承诺，我们需要为 Java 零基础/初级学习者提供一组高质量、脱离玩具框架的实战前置“脚手架”。

## 2. Goals (目标)
- 补充 10 个专业、精简且全流程的入门实战项目讲解。
- 覆盖 Java SE 核心能力：网络通信、多线程同步、字节与字符 IO 流、并发数据结构及反射机制。
- 每个项目严格遵循：场景痛点 -> 架构图解 -> 逐步编码 -> 异常与边界 -> 事故复盘 的统一极客流程。

## 3. Non-Goals (非目标)
- 此系列中**绝不引入** Spring Boot 等企业级高层框架（放在进阶级）。
- 不是百科全书，不解释基础的 `for/if` 和 JDK 常驻方法的参数全集。

## 4. Proposed Solution (提议方案)
新增十个递进实战项目章节：
1. **Interactive Weather CLI** (交互式天气查询 CLI)
2. **Markdown Parser** (简易 Markdown 到 HTML 转换器)
3. **Concurrent Downloader** (多线程并发大文件下载器)
4. **In-Memory Cache** (高性能本地缓存框架)
5. **Connection Pool** (轻量级数据库连接池)
6. **Mini IoC Container** (手写简易依赖注入容器)
7. **Custom Logger** (定制化高性能日志框架)
8. **Mini LSM-Tree Storage** (简易 KV 数据库引擎)
9. **Mini Web Server** (多线程简易 HTTP 服务器)
10. **NIO Chat Engine** (基于 NIO 的单线程高并发聊天室)
