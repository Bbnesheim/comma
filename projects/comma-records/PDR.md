# COMMA. Web Rebuild – Product Design Requirements (PDR)

## 1. Project Overview
COMMA. is a multidisciplinary music and culture platform based in Oslo, operating as a record label, artist management collective, apparel brand, event organiser and creative studio. The web rebuild aims to transform the current Shopify storefront into a story‑driven, interactive hub that unifies these roles across six key branches:

1. Artist profiling & marketing
2. Webshop (apparel, tech, accessories, music)
3. Record label & distribution
4. Landing page for bookers
5. Blog / editorial tool
6. Gallery / visual archive

Platform: Shopify (Online Store 2.0) using a customised Dawn theme.

## 2. Goals & Success Criteria

### 2.1 Primary Goals
- Elevate COMMA. from a basic webshop to an interactive ecosystem for creators, fans and bookers.
- Strengthen brand storytelling around "MADE FOR CREATORS" and the mission of building a decentralised creative network.
- Improve discovery and conversion for merch and music.
- Provide clear, professional paths for artist booking and collaboration.

### 2.2 Success Criteria
- Increased engagement on key pages (time on site, scroll depth, audio plays, gallery interactions).
- Higher add‑to‑cart and checkout completion rates for priority products.
- Growth in mailing‑list sign‑ups and booking enquiries.
- Clear, navigable information architecture with reduced bounce from landing page.

## 3. Current Site Audit – Key Findings

### 3.1 Brand & Storytelling
**Strengths**
- Strong, coherent minimalist visual identity (dark palettes, monochrome photography, bold type).
- Clear mission language and evocative, narrative‑driven copy across product and artist pages.
- Hero statement and taglines communicate purpose and audience (creators, DJs, digital designers).

**Weaknesses / Opportunities**
- Story is mostly static: no interactive sequences, scrollytelling or branching journeys.
- The hero message does not unfold into a guided path for different audiences (creators vs fans vs bookers).
- Limited use of motion, micro‑interactions and rich media despite strong visual source material.

### 3.2 Navigation & Information Architecture
**Strengths**
- Top‑level navigation already reflects the brand branches (Booking, Collections, Artists, Label, Gallery, About).
- Mobile navigation exists with a slide‑out menu.

**Weaknesses / Opportunities**
- Some sections (Label, Gallery) are under‑developed and feel disconnected from the main journey.
- Product catalogue is flattened into a single “all products” style view with minimal filtering.
- No central hub for discography; label content lives as isolated blog posts.

### 3.3 Webshop & Product Experience
**Strengths**
- Detailed product descriptions merge narrative and technical detail (materials, fit, intended use).
- High‑quality imagery and consistent tone (club culture, travel, everyday city life).
- Ethical and material information present on key garments.
- Multiple modern payment options are available at checkout.

**Weaknesses / Opportunities**
- Collections page is a plain list with limited filtering (no robust tags for type, size, price, material).
- Many items are marked sold out with no waitlist or back‑in‑stock mechanism, creating dead ends.
- No quick‑view or on‑page recommendations; cross‑selling potential is largely unused.
- Product pages follow a generic Shopify layout with minimal interactive media (video, 360°, UGC).

### 3.4 Artist Profiles & Marketing
**Strengths**
- Rich biographical copy for artists (aliases, histories, influences, key releases).
- Clear outbound CTAs to Spotify, Bandcamp, TikTok and other platforms.
- Visual language is consistent with the broader brand.

**Weaknesses / Opportunities**
- Pages are essentially static bios plus links; no embedded audio players, live tracklists or event calendars.
- No dynamic timeline of releases, shows or milestones.
- Booking/contact is handled via generic forms with no artist‑specific information or assets (press kits, riders).
- No newsletter or fan‑club entry points from artist pages.

### 3.5 Label, Blog & Content
**Strengths**
- Blog posts provide narrative depth around releases and events.
- Individual write‑ups for EPs and events are well‑written and aligned with brand voice.

**Weaknesses / Opportunities**
- Content is fragmented into standalone posts with no aggregated discography or archive view.
- No streaming or purchase modules embedded directly into label posts.
- No tagging or categorisation beyond basic chronological listing; no search UX for editorial content.
- Long text blocks often lack supporting media (audio snippets, video, infographics).

### 3.6 Booking & Collaboration
**Strengths**
- Dedicated booking page and basic contact form exist.
- Low‑friction entry point for general enquiries.

**Weaknesses / Opportunities**
- No structured information for promoters (artist roster at a glance, genres, stage formats, technical riders).
- No case studies, references or venue list to validate the brand for new bookers.
- Requests are not pre‑qualified (no fields for date, location, budget, event type).

### 3.7 Gallery / Visual Archive
**Strengths**
- Existing gallery offers a bank of strong visual material (events, artists, apparel in use).

**Weaknesses / Opportunities**
- Flat grid with no filtering by artist, event, year or theme.
- No captions, stories or links from imagery into related products, artists or releases.
- No immersive viewing (lightbox, slideshows, video reels) or curated highlight series.

### 3.8 Technical & Platform Potential (Dawn Theme)
- Dawn provides Online Store 2.0 sections, flexible templates and drag‑and‑drop layout tools.
- Built‑in features: quick view, recommended products, enhanced search and filtering, image galleries, video/hero sections, and performant responsive layout.
- Supports custom templates per page type (artist, label, booking, gallery) and app blocks for embedding external services (Spotify, SoundCloud, Bandcamp, calendars, etc.).

## 4. Requirements by Branch

### 4.1 Artist Profiling & Marketing
**Objectives**
- Turn artist pages into immersive, media‑rich profiles that connect story, sound and booking.
- Drive listening, following and mailing‑list growth directly from the COMMA. site.

**Functional Requirements**
- Custom artist page template with:
  - Full‑screen hero (image or looping video from live/studio context).
  - Embedded audio players (Spotify, SoundCloud, Bandcamp) with play controls in‑page.
  - Event and release timeline component (chronological, filterable by type: release, show, milestone).
  - Outbound CTAs ("Listen", "Buy", "Follow") clearly surfaced above the fold.
- Optional modules per artist:
  - Newsletter sign‑up / fan‑club opt‑in.
  - Featured merchandise carousel bound to that artist.
  - Embedded social feed or selected posts (TikTok, Instagram) via app blocks.
- Booking sub‑section per artist with:
  - Short performance description (format, duration, mood).
  - Downloadable press kit (PDF), technical rider and promo photos.
  - Contact / enquiry form pre‑filled with artist identifier.

**Content Requirements**
- Standardised data model for artists (aliases, genres, origin, key releases, links, assets).
- Curated selection of audio, video and photos per artist optimised for web.

### 4.2 Webshop (Clothing, Tech, Accessories, Music)
**Objectives**
- Make it easy to browse and buy across categories while keeping the brand narrative present.
- Increase average order value via cross‑selling and bundles.

**Functional Requirements**
- Restructured catalogue:
  - Dedicated top‑level collections: Apparel, Accessories, Tech, Music & Digital.
  - Filters for size, colour, fit, price and material, using Dawn’s faceted filtering.
- Product listing pages:
  - Use quick‑view modals with core details (imagery, price, sizes) and add‑to‑cart.
  - Display badges for new, limited, back‑in‑stock and pre‑order.
  - Recommended products / “You might also like” powered by Dawn and/or manual curation.
  - Optional "inventory browser" layout inspired by console / game UIs: desktop view with
    - Collections as top tabs (e.g. Apparel, Accessories, Tech, Music).
    - Left‑hand vertical list of products in the active collection.
    - Central media pane showing the selected product’s images/video.
    - Right‑hand pane with title, price, variants, badges and add‑to‑cart.
- Mobile variant of inventory browser:
  - Use horizontal collection pills at the top of the page.
  - Under each pill, show a scrollable list of products.
  - Tapping a product opens a full‑screen drawer or PDP view with images and details
    (maintaining the same story/spec structure as desktop but stacked vertically).
  - Preserve deep‑linking where possible via query parameters or anchor IDs.
- Product detail pages:
  - Rich media support: multi‑image galleries, video, optional 360° or AR.
  - Story block (narrative context) and spec block (materials, fit, care) as separate, scannable sections.
  - Size guide modal and potential interactive fit helper.
  - Cross‑sell modules for music and accessories tied to the same era/collection.
- Inventory & availability UX:
  - Notify‑me / back‑in‑stock subscription for sold‑out items.
  - Clear messaging for pre‑orders and production timelines.
- Checkout & cart:
  - Use Dawn’s Quick Buy on product cards and sticky cart on desktop/mobile.
  - Cart notes for special instructions (e.g. gifts, tour delivery).

**Content Requirements**
- Consistent product taxonomy (category, collection, tags) for filters and recommendations.
- Updated photography and potential user‑generated content from events.

### 4.3 Record Label & Distribution
**Objectives**
- Present COMMA.’s catalogue as a coherent discography with clear paths to listen and purchase.
- Integrate music commerce (digital and physical) tightly with the Shopify store.

**Functional Requirements**
- Dedicated label/discography hub:
  - Grid or list of releases with cover art, artist, title, year and key tags (EP, single, remix, compilation).
  - Filters for artist, year, format and mood.
- Release detail pages or sections:
  - Embedded audio player with track previews and tracklist.
  - Release notes (similar in tone to existing blog copy).
  - Buy/stream buttons (Spotify, Apple Music, Bandcamp) plus in‑store purchase options.
  - Bundles that pair releases with merchandise (e.g. hoodie + digital EP).
- Integration points:
  - Use digital products in Shopify for downloads where needed.
  - Optional Bandcamp embeds for direct supporter purchases.

**Content Requirements**
- Canonical list of catalogue releases with metadata.
- Artwork assets sized appropriately for discography and detailed views.

### 4.4 Landing Page for Bookers
**Objectives**
- Provide a professional, confidence‑building microsite for promoters and venues.
- Reduce back‑and‑forth by pre‑answering typical booking questions.

**Functional Requirements**
- Booking landing template with sections for:
  - Hero statement aimed at promoters (what COMMA. offers as a roster/agency).
  - At‑a‑glance artist roster with genres, formats (live, DJ, hybrid), origin cities.
  - Case studies: spotlighted events with photos, short write‑ups and quotes from partners.
  - Download centre for press kits and riders (by artist and/or show concept).
  - Structured enquiry form capturing: artist(s) of interest, date(s), venue, city, capacity, budget, event description, contact details.
- Optional calendar integration showing key holds, tours or blackout dates.

**Content Requirements**
- Curated set of booking case studies and testimonials.
- Up‑to‑date technical and hospitality riders.

### 4.5 Blog / Editorial Tool
**Objectives**
- Use editorial content to deepen the narrative and improve organic discovery.
- Make releases, events and behind‑the‑scenes stories easier to explore.

**Functional Requirements**
- Blog structure:
  - Categories such as Releases, Events, Interviews, Behind the Scenes.
  - Tag system (artists, venues, series names) and on‑page filters.
  - Search for posts by keyword.
- Article layout:
  - Support for embedded playlists, audio snippets, video, image galleries and pull‑quotes.
  - Optional interactive modules (e.g. track‑by‑track explorers, timelines, polls/quizzes).
- Engagement hooks:
  - Social share buttons, inline product/release links and newsletter callouts.
  - Optional comments or lightweight feedback (e.g. “Was this helpful?”).

**Content Requirements**
- Editorial calendar aligning posts with release cycles, events and product drops.
- Guidelines for multimedia storytelling (minimum assets per post, recommended structures).

### 4.6 Gallery / Visual Archive
**Objectives**
- Turn the gallery into a living archive of COMMA.’s visual universe.
- Use imagery and video to connect visitors to artists, events and products.

**Functional Requirements**
- Dynamic "projector" hero gallery:
  - Prominent hero frame that cycles through featured images every few seconds.
  - Transition mimics an old film projector: brief dark flicker / frame-jump effect between images (no heavy JS frameworks, keep it performant and epilepsy-safe).
  - Each image can define one or more text callouts (short phrases, locations, dates) that appear in different positions around the frame (top-left, bottom-right, centre, etc.) and animate in/out with each slide.
  - Basic controls to pause/resume the auto-play and move to next/previous image.
- Filterable gallery beneath hero:
  - Filters by artist, event, venue, year and theme.
  - Support for both photos and video thumbnails.
- Viewing experience:
  - Lightbox/slideshow with captions and optional stories per series.
  - Links from images to relevant products, releases or blog posts.
- UGC & social integration:
  - Ingest selected user‑generated content (e.g. hashtag campaigns) with credit lines.
  - Optional submission or upload form, or embedded social feeds.

**Content Requirements**
- Defined tagging scheme for images and clips.
- Baseline curation of highlight sets (e.g. key events, tours, lookbooks).
- For projector hero slides: curated copy snippets for text callouts and rules about where/when they appear.

### 4.7 Homepage Hero & Global Navigation Concept
**Objectives**
- Replace the conventional Dawn header with a more cinematic, COMMA.-specific entry experience.
- Make the hero the primary canvas for story, media and key navigation entry points.

**Functional Requirements**
- Header / navigation:
  - Remove the standard Dawn header on the landing experience; show a hamburger icon in the top-right corner instead.
  - Clicking the hamburger opens an animated overlay menu (full-screen or large panel) listing primary destinations (Shop, Artists, Label, Gallery, Booking, etc.).
  - Overlay includes a clear close affordance and is keyboard- and screenreader-accessible.
- Announcement bar as nav line:
  - The announcement bar doubles as a slim navigation line pinned to the very top of the viewport, keeping primary navigation controls out of the hero canvas.
  - Left side: back arrow that navigates to the homepage (or previous key context when appropriate).
  - Right side: hamburger icon opening the animated overlay menu.
  - Centre (optional): concise announcement or status text (drops, events, shipping info) without additional links, so the hero beneath can focus on brand storytelling.
- Hero block system:
  - Hero built as a configurable block section combining: (1) image/media carousel, (2) text, and (3) media player.
  - Carousel supports multiple slides (stills or short looping video), with manual controls and optional autoplay.
  - Text block supports title, subheading/tagline and 1–2 CTAs.
- Media player block surfaces a featured mix or release via embedded player or custom audio controls, with basic metadata (artist, track/playlist name).
  - Under the hood, use a custom HTML5 `<audio>` element and JavaScript playlist logic (no third-party apps):
    - Maintain a track list as data (title, artist, file URL, optional play count) and generate the UI dynamically.
    - Clicking a track loads its file into the audio element and starts playback.
    - Consider persisting play counts via localStorage for demo and a lightweight backend or metafields for production.
  - Social media accounts are highlighted as a vertical column anchored to the bottom-right of the hero on desktop, listing key platforms (Instagram, TikTok, Spotify, SoundCloud, Bandcamp) as icons/labels.
- Responsive behaviour:
  - On mobile, stack hero content vertically (media → text/CTAs → player) and collapse social links into a horizontal row or under a "Follow COMMA." label at the bottom of the hero.
  - Hamburger and back-arrow controls remain fixed or top-aligned and easily tappable.

## 5. Cross‑Cutting Requirements

### 5.1 UX & Interaction
- Use motion and micro‑interactions sparingly but purposefully (hover states, scroll effects, audio play states).
- Offer clear audience paths from the homepage (e.g. Creator, Fan, Booker) via prominent CTAs.
- Ensure accessibility: sufficient contrast, keyboard navigation, alt text and descriptive labels.

### 5.2 Performance & Technical
- Leverage Dawn’s performance optimisations; avoid heavy custom scripts where possible.
- Optimise media (responsive images, compressed video, lazy loading for galleries and embeds).
- Ensure mobile‑first layouts for all critical templates.

### 5.3 Analytics & Measurement
- Track events for:
  - Audio plays and completion.
  - Add‑to‑cart, checkout start and completion.
  - Newsletter sign‑ups and booking form submissions.
  - Interaction with gallery, timelines and interactive modules.
- Use analytics insights to iterate on layout, content and merchandising.

## 6. Next Steps
- Confirm scope and prioritise branches for MVP vs later phases (e.g. start with homepage, webshop and core artist pages).
- Define information architecture and sitemap based on the requirements above.
- Produce low‑fidelity wireframes for key templates (home, artist, label, booking, blog, gallery, product, collection).
- Translate this PDR into implementation tickets (theme customisations, content tasks, integration work).
