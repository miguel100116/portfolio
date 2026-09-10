# Miguel Joshua A. Bermejo — Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite. A charcoal and mint visual system, custom animated SVG artwork, and an illustrative clinic dashboard frame Miguel's education, skills, and ImmaCare+ capstone.

## Local development

```sh
npm install
npm run dev
```

## Verification and production

```sh
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`. Deploy that directory to a static web host. The site has no backend, database, API keys, or required environment variables.

## Features

- Responsive desktop, tablet, and mobile layouts with a collapsible navigation menu.
- Custom SVG orbital monogram and CSS-drawn desktop/mobile clinic interface.
- ImmaCare+ overview in a native modal dialog, including Escape dismissal and browser-managed focus.
- Technical skill filters: all skills, software, and infrastructure.
- Interactive SDLC phases with arrow-key, Home, and End navigation.
- Downloadable plain-text profile generated from the portfolio content.
- Semantic sections, skip navigation, visible focus, and reduced-motion preferences.
- Page title, description, theme color, and custom favicon.

## Updating content

Edit biography, education, project information, profile text, and contact content in `src/App.tsx`. The `skillGroups` and `phases` arrays drive the interactive sections. Edit the visual design and breakpoints in `src/App.css`, and fonts and shared defaults in `src/index.css`.

Fonts are requested from Google Fonts; browser sans-serif fallbacks keep the site usable if that request fails. All illustrations are rendered locally with SVG and CSS.

The ImmaCare+ interface is clearly labeled as an illustrative concept using sample data. It is not a real capstone screenshot. No unverified technical stack, performance metrics, live demo, repository, or contact address has been invented. The profile download is a `.txt` file, not a PDF resume.

## Before publishing

Add Miguel's preferred contact email and verified professional links, and optionally replace the illustrative interface with authentic project screenshots. Update education dates when appropriate. Review desktop and mobile layouts in a browser before publishing.

See [the SDLC record](docs/SDLC.md) for requirements, implementation decisions, verification status, and maintenance notes.
