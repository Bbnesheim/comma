# COMMA.records Brand Guide

This document captures the core visual principles for the COMMA.records Dawn theme. It should be used
alongside `RESEARCH.md` and `PRD.md` when designing or implementing UI.

## 1. Core Palette

Primary colours:

- `#121212` — Dark background, used for:
  - Site background on hero and impact sections.
  - Header, footer, and key content blocks.
- `#FDFDFD` — Off‑white, used for:
  - Primary body text.
  - Relief panels, cards, and surfaces that sit on the dark background.

Accent colours (supporting only):

- Cool grey
- Electric blue
- Violet / purple
- Soft beige

Guidelines:

- Use accents sparingly, primarily for:
  - Links and subtle hover states.
  - Small badges (e.g., “New”, formats) and UI highlights.
- Avoid large surfaces of bright accent colours; the overall feel should remain dark, minimal, and calm.

## 2. Typography

(Exact typefaces may be finalised later; these guidelines focus on hierarchy and feel.)

- **Headlines / Display**
  - Bold, confident, modern sans-serif.
  - Tight but readable line height.
  - Used for hero titles, section headings, artist names.

- **Body Text**
  - Clean sans-serif.
  - Comfortable line height for longer reading on dark backgrounds.

- **Labels / Meta**
  - Smaller caps or uppercase where appropriate (e.g., “New Release”, “Artist”, “Event”).
  - Reduced contrast where secondary, but always accessible.

General rules:

- Limit the number of typefaces (1–2 families, with weights for variation).
- Use size, weight, and spacing—not lots of colours—to express hierarchy.

## 3. Layout & Composition

- **Overall**
  - Clean, grid-based layouts with generous negative space.
  - Artwork (release covers, photography) should be the visual focus.

- **Homepage**
  - Strong, immersive hero at the top.
  - Clear vertical rhythm: hero → featured artists → releases/events → merch → story/blog.
  - Sections should feel distinct but related via consistent padding and type.

- **Artist Pages**
  - Hero banner dominated by imagery.
  - Content structured in digestible blocks (bio, discography, shows, gallery, contact).

- **Responsive Behaviour**
  - On mobile, favour a single-column stack with clear breaks between sections.
  - Ensure tap targets are generous and text remains legible against dark backgrounds.

## 4. Imagery & Media

- **Releases / Artwork**
  - Always display album/EP artwork at high quality.
  - Respect original artwork colours; avoid overlays that distort them.

- **Photography**
  - Preference for high-contrast photography.
  - Black-and-white with occasional colour is encouraged, especially for live and studio imagery.

- **Video / Motion**
  - Use video in the hero or gallery to add energy, not distraction.
  - Motion should be subtle and purposeful (no aggressive animations).

## 5. Components & Patterns

- **Hero Sections**
  - Split layouts (text + artwork) or full-bleed artwork with overlay text.
  - Clear primary CTA; secondary CTA only when necessary.

- **Cards (Artists, Releases, Blog)**
  - Use artwork or photo as the anchor.
  - Minimal text: title, artist name, short descriptor or meta.
  - Simple hover states (slight lift, underline, or subtle border/overlay shift).

- **Carousels / Rows**
  - Horizontal scrolling rows for curated content (e.g., new releases, classic catalog).
  - Keep controls minimal and unobtrusive.

- **Forms (Newsletter, Contact)**
  - High contrast between input fields and backgrounds.
  - Simple labels and error states.

## 6. Do & Don’t

**Do**

- Keep backgrounds predominantly `#121212` with text on `#FDFDFD`.
- Let artist imagery and release artwork provide most of the colour.
- Use consistent spacing, alignment, and hierarchy across pages.

**Don’t**

- Flood large sections with bright accent colours.
- Add heavy visual noise (borders, patterns, drop shadows) that competes with artwork.
- Break the artist-centred structure with generic, off-brand sections (testimonials, generic promos, etc.).

## 7. Relationship to Other Docs

- `RESEARCH.md` captures the broader research, structure, and rationale.
- `PRD.md` translates requirements into sections and functionality.
- This guide focuses on how the brand should *look and feel* in the UI.
