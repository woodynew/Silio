## ADDED Requirements

### Requirement: Track Page Completion
The system MUST provide a UI mechanism embedded at the bottom of each tutorial article allowing users to mark the content as read, storing this status in `LocalStorage`.

#### Scenario: Mark article as completed
- **WHEN** the user clicks the "Mark as Read" checkbox on a tutorial page
- **THEN** the system immediately records the current page's unique ID into the browser's LocalStorage

### Requirement: Progress Echo in Sidebar
The system MUST visually indicate which pages have been successfully marked as completed when displaying the navigation sidebar.

#### Scenario: View progress across tutorials
- **WHEN** the user opens the sidebar navigation menu
- **THEN** completed pages display a clear visual checkmark indicator next to their respective links
