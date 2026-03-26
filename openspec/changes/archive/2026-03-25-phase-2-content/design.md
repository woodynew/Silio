# Design: Interactive MDX & Tutorial Content

## Approach
We will construct an `InteractiveCode` React/Astro component that leverages MDX to allow users to read the lesson and immediately experiment with Java code snippets. We will also initialize the directory structure for the "Java 零基础实战" tutorial series.

## Scope
- **In**: 
  - `InteractiveCode` component using Sandpack/WebContainer or simply an advanced Shiki layout for Phase 2.
  - Setup of `/src/content/docs/tutorials/java-basics/` directory.
  - Initial 2-3 chapters of the "记账本" project.
- **Out**:
  - Full Spring Boot backend implementation (deferred to Phase 4).
  - Advanced CI/CD pipeline (Phase 3).
  - User accounts and progress synchronization to backend.

## Technical Details
- The component will take `code` as props and render an editor (e.g., Monaco or a lightweight textarea with Prism), along with a "Run" button if WebContainer is enabled.
- Alternatively, for Phase 2, we might just enhance the code blocks with a "Copy" button and syntax highlighting if full execution provides too much overhead, scaling up to full execution incrementally.
