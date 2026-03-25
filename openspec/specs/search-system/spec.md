## ADDED Requirements

### Requirement: Offline Full-text Search
The system MUST index all tutorial Markdown/MDX content during the site build process and provide a global search modal that works purely on the client side.

#### Scenario: Search for specific Java concepts
- **WHEN** the user opens the search modal and inputs a query string
- **THEN** the system displays a list of matching conceptual sections instantly without making remote backend queries
