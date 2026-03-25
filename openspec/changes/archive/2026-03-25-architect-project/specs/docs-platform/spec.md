## ADDED Requirements

### Requirement: Layout and Readability
The system MUST provide a high-quality reading experience including dark mode toggle capability and syntax highlighting for Java and other languages.

#### Scenario: Toggle dark and light themes
- **WHEN** the user clicks the theme toggle button in the header
- **THEN** the site appearance dynamically switches between dark and light themes

### Requirement: Diagram Rendering
The system MUST natively support the rendering of Mermaid.js block contents into actual SVG diagrams on the client side.

#### Scenario: Display an architecture diagram
- **WHEN** a page contains a Mermaid code block with valid syntax
- **THEN** the system renders it as an SVG diagram in the article body without showing raw text
