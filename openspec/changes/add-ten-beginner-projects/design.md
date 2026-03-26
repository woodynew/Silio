# Design: 10 Beginner Practical Projects

## 1. Content Architecture
Each project will be structured as an individual MDX file inside `src/content/docs/tutorials/java-basics/`.
Name scheme: `project-01-weather-cli.md` to `project-10-nio-chat.md`.

### 1.1 Tutorial Structure (实战流程规范)
- **Problem Statement (需求场景)**: What are we building and why it's historically hard.
- **Architectural Diagram (架构剖析)**: Use Mermaid.js to vizualize the data flow/threading model.
- **Step-by-Step Code (逐步构建)**:
  - Step 1: Definition of interfaces.
  - Step 2: Implementation of core mechanics.
  - Step 3: Runner code.
- **Interactive Component (交互演练)**: Embed interactive Java sandbox code snippets where possible.
- **Edge Cases & Resilience (韧性与异常边界)**: Focus on OOM, Thread blocked, Network timeout.
- **Post-mortem (避坑指南)**: Common beginner traps in this domain.

## 2. Platform Changes
- Update the Astro Starlight sidebar config in `astro.config.mjs` to map the 10 new project files.
- Apply the dark mode and clean brutalism styling to the embedded code snippets.
