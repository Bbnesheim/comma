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
3. Discover editorial content / blog posts (e.g., mix series, interviews).
4. Sign up for newsletter for release announcements.
5. Quickly access info like About/Story, Contact, and Social links.

## 5. Functional Requirements

### 5.1 Global Navigation & Header (High Priority)

**Requirements**

1. **Logo & Brand**
   - Left- or center-aligned COMMA.records logo.
   - Logo links to homepage.

2. **Primary Navigation**
   - Configurable menu items (e.g., “Releases”, “Shop”, “About”, “Blog”, “Events”).
   - Support for at least one dropdown / mega-menu for catalog navigation (optional in v1).

3. **Utility Icons**
   - Cart icon with item count.
   - Account / login (if enabled).
   - Direct access to search (icon or explicit “Search” label).

4. **Behavior**
   - Sticky header on scroll (desktop and mobile).
   - Responsive layout:
     - Desktop: full nav visible.
     - Mobile: condensed header with hamburger menu that opens full-screen or drawer menu.

5. **Customization**
   - Background/color scheme toggles (light/dark).
   - Optional announcement bar slot (release announcement, shipping info, etc.).

### 5.2 Hero Section (Homepage)

**Requirements**

1. **Content Elements**
   - Tagline or category label (e.g., “New Release”).
   - Main heading (release title or key message).
   - Sub-copy (1–3 lines).
   - Primary CTA (e.g., “Listen / Buy”, “View Release”).
   - Optional secondary CTA (e.g., “View Catalog”).
   - Featured cover art / visual (full-bleed image or artwork).

2. **Behavior & Layout**
   - Desktop: split layout or full-bleed hero:
     - Option 1: Left = text, Right = large artwork.
     - Option 2: Full-bleed artwork background with text overlay.
   - Mobile: stacked (artwork above text and CTAs).
   - Support for background color overlays and image crop ratios.

3. **Dynamic Content**
   - Option to link hero to:
     - Specific product,
     - Specific collection,
     - Specific blog post/page.
   - Content controlled via theme editor (no code change needed to update hero).

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

### 5.5 Blog & Article Pages (Using Existing Templates)

**Requirements**

- Keep existing `main-blog` and `main-article` sections.
- Ensure new header and footer wrap around these templates.
- Visual alignment (typography/colors) with new homepage styles.

### 5.6 Non-Functional Requirements

- **Performance**: Maintain or improve Dawn’s baseline; no heavy third-party scripts by default.
- **Accessibility**:
  - Semantic HTML, proper heading hierarchy.
  - Focus states, keyboard navigation, alt text for key imagery.
- **SEO**:
  - Maintain/manage meta titles, descriptions, and structured headings.
  - Avoid blocking important content behind JS-only loads.

## 6. Wireframe Overview (Textual)

### 6.1 Desktop Homepage (Top to Bottom)

1. **Global Nav / Header**
   - Full-width bar at top.
   - Left: COMMA.records logo.
   - Center/Right: primary nav links.
   - Far right: search icon, account icon, cart icon with count.

2. **Hero**
   - Left 50%: eyebrow (“New Release”), large headline, sub-copy, primary/secondary CTAs.
   - Right 50%: large album artwork or media visual.
   - Background may be solid color or subtle gradient.

3. **Featured Release Strip**
   - Full-width bar under hero.
   - Small artwork thumbnail + text (“Now shipping: [Release] by [Artist]”) + CTA button.

4. **Releases Grid**
   - Section title (“Catalog” or “Releases”).
   - Optional filter label/subtitle.
   - Grid of product cards (3–4 per row).

5. **Series / Curated Rows**
   - Each row: section heading (e.g., “New & Notable”), horizontal scroll of cards.
   - Visible controls (arrows) or drag/scroll horizontally.

6. **Editorial / Blog Teaser**
   - Section heading (“Journal” / “Stories”).
   - 2–3 cards with post title, category, short excerpt, “Read” link.

7. **About / Story**
   - Left: text block (headline + paragraph copy).
   - Right: image or abstract artwork; or reversed layout.

8. **Newsletter**
   - Centered layout: title, short description, email input, CTA button.
   - Minimal, high-contrast.

9. **Footer**
   - 2–4 columns: Nav, Info, Socials.
   - Bottom bar: copyright, tiny links.

### 6.2 Mobile Homepage

1. **Header**
   - Top bar with logo centered or left, hamburger icon, cart icon.

2. **Hero**
   - Artwork full-width on top.
   - Text + CTAs stacked below.

3. **Featured Release Strip**
   - Single column; artwork thumbnail inline with text & CTA.

4. **Releases Grid**
   - 1–2 cards per row.

5. **Curated Rows**
   - Horizontal scrolling cards with swipe.

6. **Blog Teaser / About / Newsletter / Footer**
   - All stacked vertically; generous spacing for tap targets.

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
