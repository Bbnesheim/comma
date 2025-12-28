# PROMPT: COMMA.records Dawn Rebuild – Homepage Wireframes

## Goal
Create low-to-medium fidelity wireframes for the COMMA.records storefront homepage (desktop and mobile) built on Shopify's Dawn theme, using the PRD as the source of truth.

## Context
- Theme base: Dawn.
- All default Dawn homepage sections have been removed.
- New custom sections will be created for:
  - Header / global navigation.
  - Hero / above the fold.
  - Homepage content sections (featured release, releases grid, curated rows, editorial, about, events, newsletter integration, footer).
- Existing sections to remain and be integrated:
  - `main-product` (product info pages).
  - `main-blog` and `main-article` (blog index and articles).
  - `newsletter` (newsletter capture).
- Visual direction: clean, minimal, music-label-focused, with strong emphasis on artwork and typography.
- Brand palette: `#121212` for primary dark backgrounds (especially hero) and `#FDFDFD` for primary light
  text/relief areas, with cool grey / electric blue / violet / soft beige used as subtle accents.
- Site structure is artist-centred: the homepage should strongly encourage exploration of individual
  artist landing pages via featured-artist components and clear CTAs.

## Task for the assistant
Using the PRD and context above, propose textual wireframes for the homepage that:
- Clearly list each section from top to bottom.
- Describe layout, key elements, and hierarchy for both desktop and mobile.
- Stay within Dawn’s constraints (no heavy custom apps, use sections/blocks, performant and accessible).

## Required sections (desktop & mobile)
For each of the following, describe the structure, key elements, and approximate layout (e.g., split, stacked, grid, strip, row, etc.):

1. Global Nav / Header
2. Hero (featuring a key release or story)
3. Featured Release Strip
4. Releases Grid / Catalog Overview
5. Series / Curated Rows (e.g., New Releases, Classic Catalog, Merch)
6. Editorial / Blog Teaser
7. About / Label Story
8. Events / Shows (optional, but include a v1 layout)
9. Newsletter (using existing newsletter section)
10. Footer (rebuilt as custom section)

## Output format
Return the wireframes as structured text:

- Use `### Desktop` and `### Mobile` subsections.
- Within each subsection, list sections in order as numbered headings (1., 2., 3., ...).
- For each section, include:
  - A 1–2 sentence description of its purpose.
  - A simple box layout description (e.g., "Left column: ... / Right column: ..." or "Single column stack of ...").
  - Key content fields and controls (titles, copy, images, CTAs, links, product cards, etc.).

## Constraints & principles
- Keep layouts realistic for Shopify sections/blocks (no pixel-perfect Figma detail).
- Favor clarity and hierarchy over visual flourish.
- Ensure good mobile usability (tap targets, readable type, scroll-friendly stacking).
- Keep copy and labels generic/placeholders so they can be changed in the theme editor.

## Deliverable
A single textual wireframe spec that can be used directly to:
- Guide design work (Figma/sketches).
- Guide implementation of Liquid sections and JSON schema for the Dawn-based theme.
