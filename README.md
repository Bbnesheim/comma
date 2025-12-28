# COMMA.records Dawn Theme Rebuild

This repository contains the custom COMMA.records storefront built on top of Shopify's Dawn theme.
The project focuses on an artist-centred structure, a dark minimalist visual system, and bespoke
homepage and artist landing page experiences.

- Core product planning: `PRD.md`
- Brand and research notes: `RESEARCH.md`
- Wireframe prompt for the homepage: `PROMPT.md`

## Brand & Experience Overview

The site is designed around two primary colours:

- `#121212` (dark) — used for backgrounds and high-impact sections (especially the hero).
- `#FDFDFD` (off-white) — used for text and areas that need visual relief.

Accent colours (cool grey, electric blue, violet/purple, soft beige) are used sparingly to support
content, not to dominate it. The overall feel should be clean, minimal, and artwork-led, with strong
typography and plenty of negative space.

Key experience principles:

- Artist-first navigation and layout (dedicated artist landing pages).
- Hero and homepage sections that guide visitors toward artists, releases, and events.
- Consistent use of the COMMA. visual language across homepage, product, and content pages.

For more detail, see `RESEARCH.md` and `PRD.md`.

## Development

This theme is based on Shopify's [Dawn](https://github.com/Shopify/dawn) and uses the standard
Shopify theme tooling.

Typical local workflow (high level):

1. Install and authenticate the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli).
2. Connect this theme to a development store.
3. Run the local development server and preview changes in the browser.

Refer to the Dawn repository for in-depth documentation on the CLI, theme check, and CI setup. The
`LICENSE.md` in this repo reflects the Dawn license and continues to apply to this derivative theme.

## Documentation

- **Product requirements:** see `PRD.md`.
- **Research & brand alignment:** see `RESEARCH.md`.
- **Wireframes & prompts:** see `PROMPT.md`.

These documents should be kept in sync as the brand and site architecture evolve.
