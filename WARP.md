# WARP Guide – COMMA.records Dawn Theme

This file describes how AI (via Warp) should work with this repository.

## 1. Project Purpose

This repo is a custom COMMA.records storefront built on Shopify's Dawn theme, with:

- An **artist-centred** information architecture (dedicated artist landing pages).
- A **dark, minimalist** visual system based on `#121212` and `#FDFDFD`.
- Bespoke homepage and artist-page sections, while reusing core Dawn product/blog sections.

## 2. Key Documents

Always consult these first:

- `PRD.md` – Product requirements and functional scope.
- `RESEARCH.md` – Brand and UX research (palette, artist‑centred structure, content model).
- `PROMPT.md` – Prompt for generating homepage wireframe specs.
- `README.md` – High-level repo overview and development notes.
- `release-notes.md` – Changelog of theme-related milestones.

All new work should stay consistent with these documents. If they drift, update them alongside code changes.

## 3. Theme & Section Structure

High-level constraints:

- Theme base: **Shopify Dawn**.
- Default Dawn homepage sections have mostly been removed.
- Existing core sections that remain (and should generally not be deleted):
  - `main-product.liquid`
  - `main-blog.liquid`
  - `main-article.liquid`
  - `newsletter.liquid`
- New sections are expected for:
  - Header / global navigation
  - Homepage hero
  - Homepage content sections (featured release, releases grid, curated rows, editorial, about, events)
  - Footer
  - Artist landing page layout (template + sections)

All new sections must be JSON-configurable and composable via the Shopify theme editor.

## 4. Brand & UX Principles for Changes

When proposing or applying changes, Warp should:

- Respect the primary palette:
  - `#121212` for backgrounds and hero/impact zones.
  - `#FDFDFD` for body text and relief areas.
- Use accent colours (cool grey, electric blue, violet/purple, soft beige) sparingly.
- Keep layouts **clean, minimal, and artwork-led**, with strong typography and negative space.
- Prioritise **artist-first** flows:
  - Homepage should guide users to artist pages, releases, and events.
  - Artist pages should clearly present hero, bio, discography, shows, media, contact.

## 5. Development Workflow (for AI Suggestions)

When suggesting commands or edits, assume the standard Shopify theme workflow:

- Use Shopify CLI for development (`shopify theme dev`, `shopify theme check`, etc.).
- Keep Liquid, JSON templates, and assets organised according to Dawn conventions.
- Avoid introducing heavy client-side JS unless clearly justified and aligned with performance goals.

## 6. How Warp Should Help

Typical ways Warp can assist in this repo:

- Updating or creating Liquid sections/blocks to match the PRD and research.
- Proposing or refining textual wireframes and prompts for new pages/sections.
- Suggesting CSS/utility changes to align with the brand palette and typography.
- Keeping `PRD.md`, `RESEARCH.md`, `PROMPT.md`, and `release-notes.md` in sync with structural or visual changes.

When in doubt, prioritise:

1. Brand alignment (`RESEARCH.md`).
2. Functional requirements (`PRD.md`).
3. Maintainability and Shopify/Dawn best practices.