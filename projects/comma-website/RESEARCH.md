# RESEARCH

Working document for the commarecords.com rebuild on a fresh Dawn theme. This file synthesises the **COMMA.records Brand Guide** into concrete notes and open questions for design, content and technical implementation.

---

## 1. Project Definition

**Goal**
- Rebuild **commarecords.com** on a fresh Shopify **Dawn** theme.
- Preserve and strengthen COMMA.’s brand (visual, verbal, cultural) while improving clarity, structure and maintainability.

**Brand summary (from guide)**
- COMMA. is a multidisciplinary music and culture project in Oslo: record label, artist‑management collective, apparel brand, event organiser and creative studio.
- Rooted in underground club culture; focuses on progressive house, trance and emotive melodic dance music.
- A comma = a pause, in‑between, transition; “global underground” network of creatives, dancers, designers and listeners.

**Key constraints / principles**
- Keep the experience **minimal, intentional, international**.
- Prioritise readability and calm UI over visual noise.
- Support both **music** (label, artists, events) and **commerce** (merch, products).

Open questions:
- What are the primary business goals of the new site? (e.g. merch sales vs. event promotion vs. label storytelling.)
- Any known pain points with the current site (navigation, performance, checkout, mobile)?

---

## 2. Brand Voice & Content Requirements

### 2.1 Voice & Tone

From the guide:
- Intense, emotive, immersive **yet** calm, confident, deliberate.
- Descriptive and sensory language; narrative arc mirroring a DJ set (build → peak → release).
- Inclusive language: first‑person plural ("we", "our"); sparse second person ("you").
- Short sentences, clear structure; bullet points and sub‑headings.
- British English spelling; spell out numbers one to ten; avoid em dashes; minimal exclamation marks.

Implications for the rebuild:
- Page templates (About, Blog article, Product) should encourage short paragraphs and headings.
- Global components (hero blocks, cards) should support concise copy and optional long‑form narrative.

Open questions:
- Do we need a reusable **“story block”** for long‑form editorial on non‑blog pages (e.g. landing pages)?
- Any additional language constraints (Norwegian versions, bilingual content)?

### 2.2 Content Types to Support

Based on the guide references:
- **About page** – mission, vision, “why a comma matters,” global underground narrative.
- **Blog / Editorial** – event recaps, release notes, project updates.
- **Release pages** – tracks / EPs with context, sonic palette, emotional tone, external links (Bandcamp, Spotify).
- **Artist spotlights** – bios, influences, photography.
- **Events** – announcements and recaps (dates, venues, line‑ups, narrative flow).
- **Products / Merch** – COMMA.cap, COMMA.blanket, COMMA.charge, future items.
- **Gallery / Visual archive** – curated imagery across events, artwork and campaigns.

Open questions:
- Which of these sections stay on launch; which can be phased in later?
- Any new content types we should introduce (e.g. mixes, playlists, embedded video series)?

---

## 3. Visual Direction for the Theme

### 3.1 Colour Palette

From the guide:
- Primary: near‑black `#0A0A0A`, pure white `#FFFFFF`.
- Supporting: cool grey `#9FA3A7` for UI and secondary text.
- Accents: electric blue `#0072FF`, violet/purple `#8A4FFF`, soft beige `#F5F2EE`.
- High‑contrast layouts; gradients blending blue → violet for futuristic feel.

Implications for Dawn:
- Map Dawn colour tokens to this palette (backgrounds, text, accents, borders).
- Use gradients sparingly for hero sections and artist / release highlights.

Open questions:
- Should the store default background be true black or near‑black (#0A0A0A) for accessibility?
- Are there any brand rules for dark vs. light mode (or do we stay dark‑first only)?

### 3.2 Typography

From the guide:
- Headings: geometric sans‑serif, uppercase, strong character shapes (e.g. Montserrat / Eurostile‑style).
- Body: clean sans‑serif (e.g. Inter, Helvetica Neue, Space Grotesk).
- Clear hierarchy; generous line spacing; max two typefaces.

Implications for Dawn:
- Decide on heading and body fonts that are either available in Dawn or embedded via custom fonts.
- Ensure uppercase headings and line‑height are tuned for legibility on mobile.

Open questions:
- Are there existing licensed fonts we must use, or are we free to choose web‑safe / Google Fonts equivalents?
- Any constraints about performance vs. custom font loading?

### 3.3 Imagery & Graphics

From the guide:
- High‑contrast black‑and‑white photography of underground club scenes and emotive moments.
- Occasional saturated colour photography for events/festivals (purples, blues, warm glows).
- Abstract, digital textures, glitch, warped typography used sparingly.
- Merch photography on neutral backgrounds; focus on fabric, texture, minimal styling.

Implications for Dawn:
- Homepage and collection templates should prioritise impactful hero imagery with strong contrast.
- Product templates need space for detailed product photography and close‑ups.
- Consider dedicated **Gallery / Visual Archive** page type.

Open questions:
- Who is responsible for sourcing / editing imagery for launch?
- Do we need specific image ratios or cropping rules (e.g. square vs. 3:4 for products, 16:9 for events)?

---

## 4. Information Architecture (Initial Hypothesis)

Working draft IA derived from the brand guide and existing site references. This will be refined once we audit the current site.

Top‑level navigation (proposal):
- **Home** – overview of COMMA., latest releases, upcoming events, featured merch.
- **Music** – artists, releases, playlists, label info.
- **Events** – upcoming dates, past recap archive.
- **Shop** – collections for caps, blankets, accessories, future apparel.
- **Journal** – blog / editorial.
- **About** – mission, vision, global underground story, team.
- **Gallery** – visual archive.

Open questions:
- Which of these need to be top‑level vs. nested under others?
- Any navigation patterns required by COMMA. (e.g. emphasising Events over Shop at certain times)?

---

## 5. Product Content Requirements

Guidance from the brand guide:
- Focus on **material quality, function, comfort, quiet style**.
- Use short sentences and bullet points.
- Product names in uppercase (e.g. "COMMA.cap", "COMMA.blanket").
- Include materials, sizes, care instructions, usage contexts (home, studio, travel, club).

Implications for Dawn product templates:
- Need rich text blocks for narrative copy plus structured specs (materials, size tables).
- Ensure product cards can show succinct, expressive one‑line descriptions.

Open questions:
- Do we need reusable metafield definitions for materials, care, and use‑cases across all products?
- Any constraints on how product names appear in URLs (handle format vs. visual name)?

---

## 6. Blog & Editorial Structure

From the guide:
- Posts start with context; use sub‑headings; follow chronological flow; end with forward‑looking statements.
- Emphasise achievements and collaborations; add links to external platforms.

Implications for Dawn:
- Assess whether default blog templates are sufficient or whether we need custom article sections (e.g. pull‑quotes, event info blocks, tracklists).

Open questions:
- Do we want dedicated templates for **Event Recap** vs. **Release Note** vs. **General Update**?
- Should blog posts support embedded audio (mixes, tracks) and galleries by default?

---

## 7. Social & Community Touchpoints

Key needs from the guide:
- Event announcements and recaps.
- Release promotions, artist spotlights, behind‑the‑scenes.
- Calls‑to‑action that invite streaming, attendance, or support.

Implications for the site:
- Clear social links in header/footer.
- Shareable pages (OG images, meta descriptions) aligned with brand visuals.
- Possibly a **“Join the underground”** or newsletter sign‑up block with minimal, intentional copy.

Open questions:
- Which platforms are primary right now (Instagram, TikTok, SoundCloud, Bandcamp, others)?
- Is there an email list or community platform we should integrate at launch?

---

## 8. Technical & Shopify‑Specific Notes

High‑level technical considerations for the Dawn rebuild:
- Start from a clean, unmodified Dawn theme to keep upgrade path clear.
- Implement branding primarily via **theme settings**, **sections**, and **CSS overrides**, not heavy template rewrites.
- Use **metafields** for structured content (artists, events, releases) where appropriate.
- Ensure good performance: optimise images, minimise custom JavaScript.

Open questions:
- Which parts of the current COMMA. site are powered by Shopify vs. third‑party services?
- Are there existing data structures (products, collections, blog posts) we must migrate or remap?

---

## 9. Next Research Steps

1. **Current site audit**
   - Map existing pages, templates and content types.
   - Note what works vs. what feels off‑brand or cluttered.
2. **Stakeholder interviews**
   - Clarify primary goals for the rebuild.
   - Confirm priorities for launch scope vs. future phases.
3. **Theme exploration**
   - Document Dawn features that align well with COMMA.’s needs (sections, templates, filters).
4. **Content inventory**
   - List all existing blog posts, releases, products and event pages that must be present at or soon after launch.

This document is a living file. As we learn more from the current site, stakeholders and Dawn’s constraints, we will refine requirements, prioritise features and break work down into implementation tasks.