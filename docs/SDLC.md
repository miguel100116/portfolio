# Portfolio development life cycle

## 1. Requirements and analysis

Audience: potential employers and collaborators evaluating an IT student for entry-level opportunities.

Primary tasks: understand Miguel's background, inspect the capstone project, review software and infrastructure skills, understand his approach, and download a shareable profile.

Content source: the biography, education, skills, project summary, and career objective provided by Miguel. Preserve the student-level positioning and working/basic knowledge qualifiers. Do not infer employment history, project technologies, implementation details, or outcomes.

## 2. Design

Information hierarchy: introduction → about → featured work → skills → development process → education → opportunity statement.

Visual language: charcoal backgrounds, pale mint accents, large editorial typography, restrained borders, numbered section labels, an orbital monogram, and a clinic interface illustration. The SVG and CSS artwork stays sharp across screen sizes and requires no image downloads.

Responsive behavior: two-column hero and project presentations become stacked layouts on smaller screens. Skill cards shift from three columns to two and then one at the narrowest breakpoint. Navigation collapses on mobile. Process controls retain access to every phase.

Accessibility provisions: semantic headings and landmarks, keyboard-visible focus, skip navigation, real buttons for state changes, `aria-pressed` filters, a labeled native dialog, keyboard-operable tabs, and `prefers-reduced-motion` support.

## 3. Implementation

React manages menu visibility, active navigation, skill filters, and selected process phase. The browser's native dialog handles modal focus confinement and Escape dismissal. TypeScript checks component props and DOM references. CSS handles layout, artwork, and motion. Blob downloads create a plain-text profile locally; no personal data is submitted to a server.

Use existing project dependencies. Keep project content in `src/App.tsx`, styling in `src/App.css`, global styles in `src/index.css`, and page metadata in `index.html`.

## 4. Verification

Completed on September 10, 2026:

- `npm run build`: passed TypeScript compilation and Vite production bundling.
- `npm run lint`: passed Oxlint.
- Local development server: running; HTTP response verified as 200.
- Source audit: starter content and placeholder `href="#"` links are absent from active source.
- Content review: the clinic mockup is labeled illustrative, supplied education dates are preserved, and unprovided contact links are not fabricated.

Environment limitation: the connected browser reported that no browser was available. Visual inspection and browser interaction tests have not been completed. The following checks remain for a browser-capable environment:

1. Inspect 1440, 1024, 768, 390, and 320 pixel layouts for clipping and horizontal overflow.
2. Open and close the mobile menu, then navigate to every section.
3. Open project details; verify focus confinement, Escape dismissal, close button, and focus return.
4. Select Software (two cards), Infrastructure (three cards), and All skills (five cards).
5. Select all five SDLC tabs; verify arrow keys, Home, End, and panel updates.
6. Download the profile from both buttons; verify filename and content.
7. Verify skip navigation and reduced-motion behavior.

## 5. Release and maintenance

Deployment is not performed. Run `npm run build` and publish `dist/` to the chosen static host when ready. No service subscription is needed to run locally.

Contact email and verified professional links are still needed to enable direct contact. Add authentic ImmaCare+ screenshots, project links, or implementation details only when supplied. Keep education status, profile text, and skills current. Repeat the relevant build and browser checks after changes.
