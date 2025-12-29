# PRD: COMMA.records Website Rebuild on Dawn Theme

## 1. Project Overview

**Goal**  
Rebuild the COMMA.records storefront on Shopify’s Dawn theme with a fully custom layout and sections that reflect the COMMA brand, with a strong emphasis on a new hero and navigation, and clean, minimal content sections throughout the homepage.

**Key Points**

- Use Dawn as the technical base (performance, accessibility, Shopify best practices).
- Replace all existing Dawn sections with custom ones designed for COMMA.records.
- Keep and integrate existing product info, newsletter, and blog post experiences.
- Design, build, and test locally; only deploy after full QA.

## 2. Objectives & Success Criteria

**Business Objectives**

1. Increase engagement on landing content (time on page, scroll depth).
2. Improve discoverability and sales of key releases (albums, bundles, merch).
3. Build a recognizable brand presence (visual identity, typography, motion).
4. Express the COMMA. brand through a focused visual system (dark, minimal, high-contrast) and
   artist-centred storytelling.

**Brand & Visual Direction (from research)**

- Primary colours:
  - `#121212` (dark) for backgrounds and hero sections.
  - `#FDFDFD` (off-white) for text and areas requiring visual relief.
- Secondary accent colours (cool grey, electric blue, violet/purple, soft beige) support but never
  overpower the primary palette.
- Overall feel should be clean, minimal, and artwork-led, with strong typography and plenty of
  negative space.

**Success Metrics (post-launch)**

- +X% increase in:
  - Homepage → product page click-through rate.
  - Newsletter sign-up conversion.
  - Clicks on featured/new releases.
- Bounce rate on homepage reduced vs current site.
- Positive qualitative feedback from key artists/partners.

## 3. Scope

### In Scope

1. **Navigation & Header**
   - Completely new navigation section(s).
   - New mobile menu experience.
   - Sticky behavior and UX for logo, cart, account, and search.

2. **Hero / Above-the-Fold**
   - Entirely new hero section (visual + copy + CTAs).
   - Supports featuring a key album/release, collection, or editorial story.

3. **Homepage Sections (wireframes + build)**
   - Custom sections replacing all Dawn defaults (other than:
     - Product info (product page),
     - Newsletter,
     - Blog post / blog index).
   - Focus on: featured releases, catalog overview, editorial/content, events, and brand story.

4. **Integration of Existing Product / Newsletter / Blog**
   - Reuse existing “product info” section on product detail pages.
   - Reuse existing “newsletter” section.
   - Reuse existing blog templates for blog index and posts, but wire homepage into them (teasers, links).

5. **Responsive Design**
   - Fully responsive across mobile, tablet, desktop.
   - Maintain Dawn-level performance (Lighthouse, Core Web Vitals).

6. **CMS / Content Management**
   - All new sections configurable via Shopify theme editor:
     - Images, titles, copy, CTAs, featured products/collections, etc.
   - Minimal hard-coding of content.

### Out of Scope (for this phase)

- Custom apps or backend features (e.g., advanced membership systems, gating logic beyond current setup).
- Checkout customization beyond what Dawn/Shopify standard allows.
- Major changes to existing product page structure beyond styling section-level changes.

## 4. Target Users & Key Use Cases

**User Types**

- Music fans discovering COMMA.records for the first time.
- Returning fans looking for new or specific releases.
- Press/industry visiting to understand label identity and catalog.
- Artists and collaborators referencing the site for branding.

**Core Use Cases**

1. Land on homepage → see latest or highlighted release → click into product → purchase.
2. Browse catalog by format/series (e.g., vinyl, digital, compilations) from nav or homepage.
3. Land on homepage → discover artists via featured carousel/list → click into artist landing page.
4. Discover editorial content / blog posts (e.g., mix series, interviews).
5. Sign up for newsletter for release announcements.
6. Quickly access info like About/Story, Contact, and Social links.

## 5. Functional Requirements

### 5.1 Global Navigation, Hero Integration & Announcement Bar (High Priority)

**Requirements**

1. **Homepage Navigation (within Hero Section)**
   - On the homepage, navigation and hero live in a single full-height "stage" section.
   - The COMMA. logo and primary entry points (for example, “Explore artists”, “Listen to latest release”) are
     expressed as CTAs and minimal controls within the hero, rather than a separate heavy header bar.
   - A small menu or icon control may appear overlaid at the top-right of the hero to open the global overlay
     menu if needed.

2. **Non-Homepage Top Nav / Announcement Bar**
   - On all non-homepage templates (product, artist, releases, journal, etc.), the top-of-page navigation is a
     compact announcement bar.
   - Left: a back arrow (to the previous page or a configurable default, typically the homepage).
   - Center: announcement text (for example, latest release, tour info, shipping note).
   - Right: a small hamburger icon that opens a full-screen or drawer overlay menu with site navigation.

3. **Primary Navigation Structure**
   - The overlay menu contains configurable menu items (for example, “Artists”, “Releases”, “Store”, “Journal”,
     “About”, “Events”).
   - Menu items are managed via Shopify navigation so they can be reused consistently across templates.

4. **Utility Icons**
   - Cart, account/login (if enabled), and search are accessible via the overlay menu and/or compact icons near
     the top edge of the viewport.

5. **Behavior**
   - The announcement bar/top nav is sticky on scroll for non-homepage templates.
   - On the homepage, the hero “stage” occupies the above-the-fold area; any overlaid menu controls remain
     accessible as the user scrolls.

6. **Customization**
   - Theme settings control announcement text, back-link behavior, and overlay menu content.
   - Colors and hover states respect the `#121212` / `#FDFDFD` palette with accents used sparingly.

### 5.2 Hero Section (Homepage)

**Requirements**

1. **Content Elements**
   - Tagline or category label (e.g., “New Release” or “Label / Management / Store”).
   - Main heading (release title or key message, or a brand-level statement like “Progressive sounds from Oslo and beyond”).
   - Sub-copy (1–3 lines).
   - Primary CTA (e.g., “Explore artists”, “Listen / Buy”, “View Release”).
   - Optional secondary CTA (e.g., “View catalog”, “View journal”).
   - Featured cover art / visual (full-bleed image, artwork, or abstract branded visual).
   - Optional small menu or icon control overlaid in the top-right to open the global overlay menu.

2. **Behavior & Layout**
   - Desktop: full-height hero "stage" on `#121212`:
     - Centred or left-aligned text block with eyebrow, headline, and CTAs.
     - Visual can appear as large artwork alongside or behind text (split or full-bleed variant), but the
       overall composition should feel like a single stage rather than separate header + hero.
   - Mobile: stacked layout with visual and text; CTAs become full-width buttons.
   - Support for background colour overlays and image crop ratios.

3. **Dynamic Content**
   - Option to link hero CTAs to:
     - Specific product,
     - Specific collection,
     - Specific artist,
     - Specific blog post/page.
   - Content controlled via theme editor (no code change needed to update hero).

4. **Section Spec: `hero-stage-ticker`**

   This section combines the homepage hero, minimal navigation affordances, and the bottom ticker.

   - **Section name (Shopify admin)**: "Hero + Navigation Stage (COMMA)".
   - **Layout**:
     - Full-viewport height on first load, with vertical centering of main content.
     - Top overlay row (optional) with logo and a compact menu icon to open the overlay navigation.
     - Main content block (eyebrow, headline, subcopy, CTAs).
     - Bottom edge reserved for a ticker bar.
   - **Required settings**:
     - `eyebrow_text` (text): small label above heading.
     - `heading` (text): main hero headline.
     - `subcopy` (rich text): short supporting paragraph.
     - `primary_cta_label` / `primary_cta_link`.
     - `secondary_cta_label` / `secondary_cta_link` (optional).
     - `background_image` (image picker) and/or `background_color` (colour, default `#121212`).
     - `show_logo` (boolean): toggle COMMA. logo in the top overlay row.
     - `show_menu_icon` (boolean): toggle the small menu icon that opens the global overlay menu.
     - `ticker_text` (text or rich text): content for the marquee.
     - `ticker_speed` (range): animation speed preset (slow/medium/fast).
   - **Blocks (optional)**:
     - "Badge" block: small pill labels under the headline (e.g., "New release", "Tour").
     - "Secondary link" block: small text links near CTAs (e.g., “View tracklist”).
   - **Behaviour**:
     - On scroll, the hero collapses naturally into the rest of the homepage sections; any overlay menu
       controls remain positioned at the top edge.
     - Ticker runs continuously and loops its content; on mobile it must remain readable and not too fast.
   - **Brand constraints**:
     - Background must use `#121212` as the base; text defaults to `#FDFDFD`.
     - Accent colours on CTAs and ticker bar are taken from theme settings and used sparingly.

### 5.3 Homepage Content Sections (Wireframes + Build)

Each of these will be built as independent, optional sections that can be reordered.

1. **Featured Release Strip**
   - Compact horizontal section highlighting a single release.
   - Elements: small artwork, title, artist, format badges (vinyl/digital), “View Release” CTA.
   - Layout:
     - Desktop: horizontal strip across width.
     - Mobile: stacked tile.

2. **Releases Grid / Catalog Overview**
   - Configurable to show:
     - A handpicked set of products (manual selection),
     - A collection (e.g., “All Releases”, “Latest”, “Vinyl”).
   - Layout:
     - Desktop: 3–4 columns of album cards.
     - Mobile: 1–2 columns.
   - Card content: artwork, title, artist, price, optional tags (“New”, “Pre-order”).
   - Sorting options via theme settings (newest first, manual, etc.).

3. **Series / Curated Rows**
   - Horizontally scrollable rows (carousel) for:
     - “New Releases”
     - “Classic Catalog”
     - “Merch” etc.
   - Each row: title + optional description + product cards.

4. **Editorial / Blog Teaser**
   - Pulls 2–3 latest blog posts from existing blog.
   - Layout: card grid or vertical list.
   - Card contents: category label, title, short excerpt, date, “Read” link.

5. **About / Label Story Section**
   - Text-focused section explaining COMMA.records (brand story, ethos).
   - Optional image/video on one side.
   - Link to full “About” page.

6. **Events / Shows (Optional)**
   - List or grid of upcoming events / releases / listening sessions.
   - Data source may be manual for v1 (static content in section settings).

7. **Newsletter Section (Existing) – Integration**
   - Reuse existing `newsletter` section.
   - Wireframe: simple centered layout with headline, sub-copy, email field, submit button.

8. **Footer (Rebuilt As Custom Section)**
   - Recreated as a new section (since Dawn footer section was removed):
     - Columns for navigation, contact, social links.
     - Newsletter slot optional (or rely on dedicated newsletter section above).
     - Legal links (Privacy, Terms).

### 5.4 Product Pages (Using Existing Product Info Section)

**Requirements**

- Continue using existing product info section (`main-product`):
  - Title, artist, price, variant options, add-to-cart, media gallery.
- Ensure brand alignment via theme settings and CSS (typography, spacing).
- Optional new supporting sections below product info:
  - “More from this artist/label”, “You may also like” (future scope).

### 5.5 Blog & Article Pages (Editorial Layout)

**Requirements**

- Keep existing `main-blog` and `main-article` sections for basic blog index and article layouts.
- Introduce a new editorial article section (for example, `main-article-comma`) and template (for example,
  `article.editorial`) for high-priority stories.
- Editorial article layout should provide:
  - A strong hero block on `#121212` with category label, large title, subhead/standfirst, meta row (date,
    reading time, tags), and optional hero image.
  - A narrow, readable body column with tuned typography (larger font size, generous line-height).
  - Support for headings, blockquotes (styled as pull quotes), lists, and inline images.
  - Optional inline media/gallery blocks (images or image rows) controlled via section blocks.
  - Optional related-articles row at the end of the story (2–3 cards).
- For posts that feature IDs or new releases, the editorial article layout may render a small inline audio
  player block near the top of the article, using the same styling language as the global label player.
- Ensure the new editorial layout is wrapped with the COMMA-specific header/hero and footer and stays visually
  aligned with the homepage.

### 5.6 Artist Landing Pages

**Requirements**

- Each artist has a dedicated landing page template composed of modular sections:
  - Hero banner with large artwork/image and artist name overlay.
  - Biography section (short-form narrative, aligned with blog tone).
  - Discography section listing releases with artwork, dates, and links to products/streams.
  - Upcoming shows list with dates, venues, and optional CTAs.
  - Media gallery (photos/videos), favouring high-contrast imagery.
  - Contact/booking section for press and collaboration enquiries.
- All content (images, copy, releases, shows) should be configurable via Shopify’s theme editor and/or
  structured content (e.g., metaobjects, collections) rather than hard-coded.
- Layout and styling must stay consistent with the global palette and typography defined in the
  research/brand guide.

### 5.7 Non-Functional Requirements

- **Performance**: Maintain or improve Dawn’s baseline; no heavy third-party scripts by default.
- **Accessibility**:
  - Semantic HTML, proper heading hierarchy.
  - Focus states, keyboard navigation, alt text for key imagery.
- **SEO**:
  - Maintain/manage meta titles, descriptions, and structured headings.
  - Avoid blocking important content behind JS-only loads.
- **Brand Alignment**:
  - Use `#121212` / `#FDFDFD` as the primary light/dark palette, with accent colours applied sparingly.
  - Ensure artist-first content hierarchy on homepage and detail pages.

### 5.8 Global Label Player (IDs & New Releases)

**Requirements**

- Provide a global, minimal music player for COMMA. IDs and new label releases, inspired by compact
  bottom-edge players used on reference sites.
- Implement as a dedicated section (for example, `label-player`) that can be included on the main layout or
  homepage template so it is available site-wide.
- The section should expose a list of tracks via blocks, where each block contains:
  - Title and optional artist label.
  - File reference to an uploaded MP3 (using Shopify Files, under ~20MB) for IDs / new tracks.
  - Optional duration label (purely visual).
  - Optional flags/fields for mixes (e.g., boolean `is_mix` + `soundcloud_url`) so long-form mixes can
    open externally on SoundCloud instead of streaming from Shopify.
- The UI should provide:
  - Collapsed "now playing" bar fixed to the bottom edge or bottom-right on desktop;
  - Basic controls: play/pause, previous/next track, progress/scrub bar;
  - Expandable track list showing all configured tracks.
- Behaviour:
  - Uses a single HTML5 `<audio>` element with `preload="none"` for performance.
  - Plays local MP3s for IDs/new releases; for tracks flagged as mixes, the player opens the configured
    SoundCloud URL in a new tab/window instead of streaming locally.
  - Continues playback while the user browses within the storefront (as far as Shopify’s templating and
    page reload model allow; true SPA persistence is not required for v1).
- Styling and interactions must align with the COMMA brand (dark, minimal, high-contrast) and avoid heavy
  animation or JS payloads beyond what is necessary for playback.

## 6. Wireframe Overview (Textual)

This section captures the current textual wireframes for the core page types. It should guide both design
(Figma) and implementation (Liquid sections/JSON) for the rebuild.

### 6.1 Desktop Homepage (Top to Bottom)

1. **Hero + Navigation Stage (with Ticker)**
   - A single full-viewport "stage" section on `#121212` that combines:
     - Minimal navigation affordances (logo and small menu icon in a top overlay row).
     - Main hero content (eyebrow, large wordmark/headline, 1–2 lines of copy, primary/secondary CTAs).
     - A full-width ticker bar along the bottom edge with horizontally scrolling marquee text (e.g., upcoming
       event / location / time).
   - The section acts as both the visual hero and the entry point to the rest of the site; there is no separate
     heavy header bar on the homepage.

3. **Featured Artists Carousel**
   - Section heading: “Featured artists” + optional “View all artists” link.
   - Horizontal carousel of large artist cards (2–4 visible):
     - Artwork/portrait, artist name, short descriptor.
     - Hover: slight scale/overlay; click → artist landing page.

4. **Latest Releases & Upcoming Events Band**
   - Two-column band on dark background:
     - Left: “Latest releases” with 3–4 square artwork cards (artwork-dominant; overlay on hover with
       title/artist and “View release”).
     - Right: “Upcoming events” vertical list (date, city, venue, short title, optional “Tickets” link).

5. **Merch / Apparel Highlight**
   - Title: “Apparel & objects”.
   - 2–3 products in a minimal grid: product image, name, 1-line description, price.
   - Optional small intro line above (quality/practicality-focused).

6. **COMMA. Story & Journal Teaser**
   - Split layout:
     - Left: “About COMMA.” heading + 1–2 short paragraphs and “Read the full story” link.
     - Right: “From the journal” with 2–3 compact blog cards (title, label, short excerpt, date, “Read” link).

7. **Newsletter Strip**
   - Full-width high-contrast band.
   - Centered heading, 1-line description, and inline email field + submit button.

8. **Footer**
   - Multi-column footer on `#121212`:
     - Logo + short text.
     - Nav column (Releases, Artists, Store, Journal, About, Events).
     - Contact / booking column.
     - Social/playlist column (Instagram, Spotify, YouTube, playlist link).
   - Bottom bar for copyright and legal links.

### 6.2 Mobile Homepage

1. **Hero + Navigation Stage (with Ticker)**
   - The hero acts as the top of the page, with minimal nav folded into it:
     - Compact overlay row with logo and small menu icon that opens the full-screen/drawer overlay menu.
     - Centred headline and short copy.
     - Primary CTA as a full-width button.
     - Narrow ticker bar below, scrolling marquee text horizontally.

3. **Featured Artists**
   - Horizontal scroll of tall cards (1.2–1.5 cards visible), each with image, name, short descriptor.

4. **Latest Releases & Events**
   - Releases: 2-column grid of square artwork cards.
   - Events: stacked list below.

5. **Merch Highlight**
   - 1–2 featured products in 1–2 columns, large tap targets.

6. **Story & Journal**
   - About summary followed by journal cards stacked vertically.

7. **Newsletter**
   - Stacked heading, description, email field, and CTA button.

8. **Footer**
   - Stacked nav groups with social icons in a horizontal row.

### 6.3 Artist Landing Page

**Desktop**

1. **Hero Banner**
   - Full-width banner image (portrait/live shot/artwork) with gradient overlay.
   - Bottom-left text block: artist name (large), short tag line, meta labels (genres, city).

2. **Primary Info Band**
   - Two columns on dark background:
     - Left: “About [Artist]” with 1–3 short paragraphs.
     - Right: “Follow / Listen” links (Spotify, Apple Music, Bandcamp, Instagram) and optional “View releases”
       button that scrolls to Discography.

3. **Discography**
   - Heading: “Releases”.
   - Grid of square artwork (2–3 per row), each card linking to the release detail page; hover overlay with
     title/format.

4. **Upcoming Shows**
   - Heading: “Shows”.
   - Vertical list of dates with city, venue, and optional “Tickets” link.

5. **Media Gallery**
   - Heading: “Gallery”.
   - Mosaic or grid of image/video thumbnails opening a lightbox.

6. **Contact / Booking**
   - Narrow band with clear booking/press email(s) and any relevant labels.

**Mobile**

- Hero image full-width with name/tagline overlaid.
- Bio and “Follow / Listen” stacked.
- Discography in a 2-column square grid.
- Shows as a vertical list.
- Gallery as scrollable grid/rows.
- Contact as simple text + mail links near the bottom.

### 6.4 Releases / Store Overview

**Desktop**

- Top row: title “Releases” on the left, optional filter dropdowns on the right (All / Latest / Vinyl / Digital /
  Merch).
- Below: centred 3–4 column grid of square release artwork cards on `#121212`:
  - Default view: artwork-only tiles.
  - Hover: subtle overlay with title, artist, maybe year.
- Bottom row: slim band with social icons and playlist link.

**Mobile**

- Same title and filters stacked.
- 2-column grid of square artwork cards.
- Social/playlist integrated into footer.

### 6.5 Release (Product) Detail

**Desktop**

- Two-column layout on dark background:
  - Left (text):
    - Label (“Release”), title, artist, meta (format(s), length, year, catalogue number).
    - Tracklist as numbered list with optional durations.
    - Short descriptive paragraph.
    - Price and format selector.
    - Primary accent-colour “Buy” button plus secondary streaming links row.
  - Right (visual): large square artwork, optionally zoomable.

**Mobile**

- Artwork first, full-width.
- Title/artist/meta, then tracklist and description.
- Price + full-width primary “Buy” button.
- Streaming links row below the primary CTA.

## 7. Technical Constraints & Implementation Notes

- Theme base: Dawn.
- Current codebase state:
  - All Dawn `sections` removed except:
    - `main-product.liquid`
    - `main-blog.liquid`
    - `main-article.liquid`
    - `newsletter.liquid`
  - New sections will be created from scratch:
    - `header` replacement.
    - `hero` section.
    - All homepage content sections.
    - New `footer` section.
- All new sections must be JSON-configurable and composable via Shopify theme editor.

## 8. Milestones & Deliverables

1. **Discovery & Finalize PRD (You are here)**
   - Confirm page structure & sections.
   - Confirm priorities (hero/nav first).

2. **Wireframes (Low/Medium Fidelity)**
   - Desktop and mobile wireframes for:
     - Header/Nav
     - Hero
     - All homepage sections listed above
     - Footer
   - Review & iterate with stakeholders.

3. **Section Implementation**
   - Implement new header/nav section.
   - Implement hero section.
   - Implement homepage sections (featured release, grid, curated rows, editorial, about, footer).
   - Integrate existing product/blog/newsletter sections into new layout.

4. **Styling & Theming**
   - Apply final typography, color, spacing.
   - Ensure consistency across homepage, product, and blog templates.

5. **QA & Performance**
   - Cross-browser and device testing.
   - Accessibility checks (keyboard, screen-reader basics).
   - Performance / Lighthouse checks.

6. **Launch**
   - Staging review.
   - Content load (hero, featured releases, copy).
   - Go-live via theme publish.
