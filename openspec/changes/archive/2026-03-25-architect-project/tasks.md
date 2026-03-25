## 1. Setup and Infrastructure

- [x] 1.1 Initialize the Astro project using the Starlight template in the repository root
- [x] 1.2 Configure global website settings (title, logo, GitHub links) in `astro.config.mjs`
- [x] 1.3 Clean up the default boilerplate content and structure the content directory for Java tutorials

## 2. Docs Platform & Theming

- [x] 2.1 Ensure dark/light mode toggle is functioning properly in the target theme
- [x] 2.2 Configure Shiki syntax highlighting specifically for Java code blocks
- [x] 2.3 Implement Mermaid.js integration to natively render markdown diagrams as SVGs

## 3. Progress Tracking (LocalStorage)

- [x] 3.1 Create an interactive UI component (Island) for a "Mark as Read" checkbox at the bottom of pages
- [x] 3.2 Implement logic to read and write completed page IDs to the browser's `LocalStorage`
- [x] 3.3 Override the default Starlight Sidebar component to display checkmarks next to completed pages based on `LocalStorage` state

## 4. Search System Integration

- [x] 4.1 Install and configure the Pagefind search integration for Astro/Starlight
- [x] 4.2 Verify that the global search modal correctly indexes and retrieves tutorial content purely on the frontend
