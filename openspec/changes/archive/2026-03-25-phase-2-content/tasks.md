# Plan

Implement Phase 2: Content publishing for the "Java 零基础实战" series and interactive MDX components.

## Scope

- In: Interactive code component, MDX tutorial structure, first 3 chapters of the bookkeeping app tutorial.
- Out: User login, backend progress synchronization.

## Action Items

[x] Step 1: Create `/src/content/docs/tutorials/java-basics/` directory and index page
[x] Step 2: Implement `InteractiveCode.astro` component for MDX integration
[x] Step 3: Add code execution capability (or advanced Shiki highlighting) to `InteractiveCode`
[x] Step 4: Draft Chapter 1 (Introduction & Setup) of "开发一个记账本"
[x] Step 5: Draft Chapter 2 (Basic Syntax & Console IO) using the interactive component
[x] Step 6: Verify MDX rendering and interactions locally

## Open Questions

- Should we use WebContainer for actual browser-based Java execution in this phase, or start with enhanced static code blocks?
- Are there specific UI designs for the interactive code runner?
