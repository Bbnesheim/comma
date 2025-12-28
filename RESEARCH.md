<!-- COMMA.records Research Document
This document collects the latest feedback and requirements for the COMMA.records project. It includes
updates to the colour palette and guidance for refocusing the website around individual artist landing
pages. All information is synthesised from the site and blog as of October 2025 and incorporates the user’s
notes. -->

# COMMA.records Research Notes

## 1. Updated Colour Palette

The primary colours for the project are:

- `#121212` (dark)
- `#FDFDFD` (off‑white)

Guidance:

- Use `#121212` primarily for backgrounds, hero sections, and high-impact content areas.
- Use `#FDFDFD` for text and areas that need visual relief and readability.
- Secondary and accent colours (cool grey, electric blue, violet/purple, soft beige) remain similar to those
  in the original brand guide, but they should always play a supporting role.
- Maintain a minimalist, high-contrast look with plenty of negative space.

## 2. Artist‑Centred Website Structure

The website should place artists at the heart of the experience. Each artist gets a dedicated landing page,
and the homepage should guide visitors toward exploring these artist pages.

### 2.1 Home Page

The homepage should:

- **Hero Section**
  - Full-screen area using the dark colour (`#121212`).
  - Includes a succinct tagline, an engaging visual (video or photo), and a clear call-to-action button.
  - Sets the tone for the site and encourages exploration of artists and releases.

- **Featured Artists Carousel**
  - Display several artists with large thumbnails, names, and short descriptors.
  - Each card links directly to the artist’s page.
  - Visually reinforces that COMMA. is built around its roster.

- **Latest Releases & Events**
  - Summarise new music and upcoming shows using release artwork and event details.
  - Use descriptive, emotive, forward-looking language that matches existing blog tone.

- **Apparel & Products**
  - Show a minimalist grid of key merch items (e.g., caps, blankets, lifestyle products).
  - Emphasise quality, practicality, and the connection to the broader COMMA. aesthetic.

- **Mission Summary & Blog Highlights**
  - Provide a brief explanation of COMMA.’s mission and ethos.
  - Surface recent news or recap posts from the blog, inviting deeper reading.

### 2.2 Artist Landing Pages

Each artist landing page should:

- **Hero Banner**
  - Large banner image or artwork.
  - Artist name overlaid on the visual.

- **Biography**
  - Concise narrative describing the artist’s sound, influences, and role in the COMMA. universe.
  - Tone should be evocative, aligned with existing blog descriptions.

- **Discography**
  - List of releases with artwork, release dates, and links to streaming platforms and/or store products.

- **Upcoming Shows**
  - List upcoming performances with dates and venues.
  - Encourage fans to attend and follow the artist’s activity.

- **Media Gallery**
  - Curated photos and videos (live moments, studio sessions, artwork details).
  - High-contrast black-and-white imagery with selective colour is encouraged.

- **Contact / Booking**
  - Clear path for press, booking, and collaboration enquiries.

## 3. Section Customisation Plan (High Level)

These notes are implementation-agnostic and should guide how existing sections (for example, in a Shopify
Dawn-derived theme) are adapted or replaced. No code should be included here.

- **Custom Hero Section**
  - Build a section that accepts media input (image or video) with overlay text (tagline, heading, CTA).
  - Configure colours using the updated palette (`#121212` / `#FDFDFD` + supporting accents).

- **Artists Carousel**
  - Create a section that loops through artist entries (for example, metaobjects or a collection).
  - Generate clickable cards with image, name, short descriptor, and link to the artist landing page.

- **Dynamic Release / Event Lists**
  - Adapt existing product or blog sections to pull in release and event data.
  - Display artwork, titles, dates, and relevant CTAs.

- **Artist Template**
  - Develop a page template composed of modular sections:
    - Hero, biography, discography, shows, gallery, contact.
  - All content should be manageable via the CMS (no hard-coded artist data).

- **Global Settings**
  - Update theme-level settings to store the new colours and typography choices.
  - Ensure these settings can be reused across home, artist, product, and content pages.

- **Remove / Repurpose Unused Blocks**
  - Identify default blocks or sections (for example, generic testimonials) that do not support the
    artist-centred narrative.
  - Remove or repurpose them so that every section contributes to the core COMMA. story.

## 4. Usage

This document should live as `RESEARCH.md` in the project root. It informs:

- Product requirements (`PRD.md`).
- Wireframe prompts (`PROMPT.md`).
- Design, content, and development decisions across the theme.

For detailed voice, tone, and imagery guidelines, refer to the primary brand guide and audit documents.
