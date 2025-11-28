# PRD – Johanne & Daniel Wedding Website

_Last updated: 2025‑11‑27_

## 1. Problem statement

Johanne & Daniel need a simple, beautiful wedding website in Norwegian that:

- Shares all practical information about the wedding weekend in Copenhagen (program, venue, dress code, hotel, transport, gifts).
- Makes it easy for guests to RSVP digitally via Microsoft Forms.
- Reflects the couple’s visual style and reference site, while staying fast, mobile‑first, and easy to maintain in Framer.

The site will live at `www.johanneogdaniel.no` and be primarily visited on mobile devices by invited guests.

## 2. Goals & success criteria

### 2.1 Primary goals

1. **Inform guests clearly** about time, place, logistics and expectations.
2. **Collect RSVPs** via a single, reliable form URL.
3. **Set the tone** for the wedding with a light, romantic, editorial visual style.

### 2.2 Success criteria (qualitative/quantitative)

- Guests report that all practical information was easy to find (informal feedback).
- >90% of guests use the digital RSVP flow by the deadline.
- No critical questions ("Where is the venue?", "What is the dress code?", etc.) remain unanswered on the site.
- Site feels fast and works well on recent mobile devices and desktop browsers.

## 3. Audience & usage scenarios

### 3.1 Primary audience

- Invited guests from Norway and Denmark.
- Age range ~25–70+, mixed familiarity with digital tools.

### 3.2 Typical scenarios

1. **Initial invite follow‑up** – Guest opens the site from the invitation to check date, location, and RSVP.
2. **Planning travel & stay** – Guest returns to read venue address, transport recommendations and hotel code.
3. **Checking dress code** – Guest quickly revisits the dress code page shortly before the weekend.
4. **Questions about kids, plus‑ones, photos, allergies** – Guest reads the Q&A section before contacting the couple.

## 4. Scope

### 4.1 In‑scope pages/sections

The site consists of the following top‑level pages/sections (see `FRAMER_SECTIONS.md` for per‑page layout details):

1. **Home / Forside**
   - Hero with main heading and subheading from `WEDDING_SITE_CONTENT.md`.
   - Optional dynamic countdown to the wedding date.
   - Primary CTA to the RSVP page.

2. **Påmelding (RSVP)**
   - Explanatory text about RSVP deadline.
   - Primary button linking to the Microsoft Forms URL.
   - Optionally a QR image pointing to the same form.

3. **Program**
   - Section for Friday "kvelden før kvelden".
   - Section for Saturday "den store dagen" with timeline layout.

4. **Spørsmål og svar (Q&A)**
   - FAQ with 3–4 key questions (plus‑ones, children, photos, allergies/diet preferences).

5. **Kleskode**
   - Simple content block for Friday and Saturday dress code.

6. **Toastmastere**
   - Description of toastmasters, deadline for registering speeches/acts.
   - Contact email and phone numbers.

7. **Bryllupslokalet**
   - Venue description (Bellahøjgaard), address, and transport details.
   - Optional map section directly under the venue info.

8. **Overnatting / Hotell**
   - Hotel information and booking code for recommended hotel.

9. **Gaver**
   - Information about gifts and bryllupskonto.

### 4.2 Out of scope (for this version)

- Guest login or authentication.
- CMS for content editing (content is edited directly in Framer).
- Multi‑language version of the site.

## 5. Platform & implementation

- **Platform**: Framer, using Pages + Code Components.
- **Implementation style**: The site is assembled in Framer by **copy‑pasting section and widget code** into the Framer code editor, then placing the resulting components/sections on pages.
- **Code components** (from `/sections`):
  - `WeddingCountdown` (hero countdown section).
  - `WeddingCountdownWidget` (compact floating countdown badge som kan brukes i seksjoner eller som flytende element).
  - `WeddingDayTimeline` (program timeline for wedding day).
  - `FAQAccordion` (Q&A section with up to four question/answer pairs).
  - `MapEmbed` (simple map iframe for generic usage).
  - `RSVPFormSection` (RSVP explanation + external CTA button).
  - `DressCodeSection` (Friday/Saturday dress code text).
  - `ToastmastersSection` (toastmaster description and contact details).
  - `VenueInfoSection` (Bellahøjgaard info, address, transport).
  - `VenueMapSection` (map card with responsive layout and Google Maps embed).

These components are the building blocks for all core sections and must remain copy‑paste‑ready for Framer’s code environment.

### 5.1 Implementation status (code components, local repo)

_As of 2025‑11‑27:_

- Implemented in `/sections`: `WeddingDayTimeline`, `FAQAccordion`, `MapEmbed`, `RSVPFormSection`, `DressCodeSection`, `ToastmastersSection`, `VenueInfoSection`, `VenueMapSection`, `OvernattingSection`, `GiftsSection`, `WeddingCountdownWidget`.
- Not yet implemented in this repo: a dedicated hero `WeddingCountdown` component as described above; currently only `WeddingCountdownWidget` (compact pill) exists for countdown usage.
- Test coverage: an initial unit test suite for `RSVPFormSection` exists at `sections/__tests__/section-5-RSVPFormSection.test.tsx` (description splitting and styling). No broader automated test setup (Jest/Vitest config or CI) is configured yet in this repo.

## 6. Visual & brand requirements

Visual requirements are detailed in `BRAND_GUIDE.md`. This section summarises key constraints that the implementation must respect.

### 6.1 Overall style

- Summer wedding, warm and romantic, but simple and modern.
- Light, airy, editorial/print‑inspired rather than "typical" web.

### 6.2 Colour system (current baseline)

- Background/base: `#F8F3ED` (light cream/off‑white).
- Primary text: `#262220` (deep warm grey/almost black).
- Accent: `#b6423c` (warm red for headings and key accents).
- Optional secondary accent (green/blue) used very sparingly for small details.

These colours are already wired into the existing sections and widgets via inline styles and property controls.

### 6.3 Typography

- **Title/display headings (H1/H2)**
  - Use an elegant display font that fits the wedding reference style (e.g. "Dolce Gargia", "Sverige Script Demo" eller en klassisk serif som "Playfair Display" / "Cormorant Garamond").
  - Same display style should be used consistently for main headings, but the exact font choice can be adjusted inside the Framer project.

- **Body and UI text**
  - Sans‑serif for readability.
  - Primary stack (already used in code components):
    - `Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

- **Hierarchy**
  - H1: page hero / couple’s names / primary headline.
  - H2: section titles (RSVP, Program, Kleskode, Toastmastere, Bryllupslokalet, Gaver).
  - H3: sub‑headings inside sections if needed.
  - Body text: 16–18px base size, line-height 1.5–1.7.

### 6.4 Layout & imagery

- Generous whitespace, large padding around sections.
- Collage feel on the home hero if multiple photos are used.
- Photo style: warm, natural colours; mix of portraits and environment.

## 7. Functional requirements

Functional requirements (FR‑x) describe what the site must do from the guest’s perspective.

### FR‑1 Navigation

- Global navigation gives access to all main pages/sections listed in §4.1.
- On mobile, the nav can be simplified (e.g. icon or stacked links) but must still link to all key pages.

### FR‑2 Home page

- Displays the main heading and subheading from `WEDDING_SITE_CONTENT.md`.
- Optionally displays a countdown using `WeddingCountdown` or `WeddingCountdownWidget`.
- Includes a clear CTA that takes the user to the RSVP page.

### FR‑3 RSVP flow

- RSVP page shows explanatory text and reminder about deadline.
- Primary CTA button opens the Microsoft Forms URL in a new tab (`https://forms.office.com/e/qaSAFYGXy9`).
- Text explains that the same form is used to submit allergies/diet preferences.

### FR‑4 Program

- Program page presents content for Friday and Saturday from `WEDDING_SITE_CONTENT.md`, inkludert konkrete klokkeslett for fredag kveld og lørdag (joggetur, oppmøte, vielse, bilder/reception, middag).
- Saturday schedule is rendered in a timeline layout, using `WeddingDayTimeline`.
- Empty timeline slots are not shown.

### FR‑5 Q&A

- Q&A page shows at least the four main questions/answers from `WEDDING_SITE_CONTENT.md`.
- Answers are displayed in an accordion pattern so guests can scan questions quickly.
- Implementation uses `FAQAccordion` or an equivalent Framer accordion block.

### FR‑6 Kleskode

- Dress code page displays separate blocks for Friday and Saturday.
- Friday can fortsatt ha midlertidig tekst.
- Saturday must show the specified dress code: herrer – smoking/mørk dress, damer – kjole i valgfri farge (unngå hvit og sort).

### FR‑7 Toastmasters

- Toastmaster page explains the role of the toastmasters and the deadline for signing up to speak.
- Displays the toastmaster contact email and both phone numbers.
- Email is clickable (`mailto:` link).

### FR‑8 Venue & map

- Venue section provides intro, address, and transport information from `WEDDING_SITE_CONTENT.md`.
- A dedicated map section (`VenueMapSection` or `MapEmbed`) shows a Google Maps embed of Bellahøjgaard.

### FR‑9 Overnatting / Hotell

- Overnatting section presents the hotel recommendation and booking code with room prices.

### FR‑10 Gaver

- Gift section explains that no gifts are expected, but that guests kan gi bidrag til bryllupsreise via bryllupskontoen dersom de ønsker.

## 8. Non‑functional requirements

### 8.1 Responsiveness

- Site is **mobile‑first** – all pages must be tested from ~320px width up to large desktop.
- No horizontal scrolling on typical mobile widths.
- Long Norwegian words should wrap gracefully (use `word-break`/`overflow-wrap` where needed – already handled in FAQ and similar sections).
- Timeline, map, and two‑column layouts must stack or adapt appropriately on small screens (see `VenueMapSection` for example pattern).

### 8.2 Performance

- Images must be optimised before uploading to Framer (e.g. 1600px hero, ~800px supporting; JPEG/WebP where appropriate).
- Avoid heavy custom code beyond the minimal logic in existing components.

### 8.3 Accessibility & usability

- Text contrast must be readable against backgrounds (accent colour mainly for headings/links, not large body text blocks on dark backgrounds).
- Buttons and links must have obvious hover/focus states in Framer.
- Clickable elements (buttons, links) should have sufficient tap targets on mobile.

## 9. Content sources & single source of truth

- All long‑form copy lives in `WEDDING_SITE_CONTENT.md`.
- Implementation details for each page/section are in `FRAMER_SECTIONS.md`.
- Visual decisions and tokens live in `BRAND_GUIDE.md`.
- Code components are stored under `/sections` and `/widgets` and copied into the Framer project.

Any future changes to content should first be made in `WEDDING_SITE_CONTENT.md`, then applied in Framer.

## 10. Acceptance checklist (high level)

The site is considered ready when:

1. All pages/sections in §4.1 exist in Framer and match the content in `WEDDING_SITE_CONTENT.md`.
2. RSVP CTA correctly opens the Microsoft Forms URL.
3. Program timeline, Q&A accordion, toastmaster, dress code, venue, overnatting og gaver-seksjoner er implementert ved hjelp av de gitte kodekomponentene eller tilsvarende layouter.
4. Primary headings use a consistent display font that matches the brand guide.
5. Layout works without horizontal scroll and looks correct on mobile and desktop.
6. All copy has been proof‑read by the couple and any last‑minute text changes are reflected both in Framer and in the local markdown docs.

## 11. Current project status (high level)

_As of 2025‑11‑27 (local repo perspective):_

- Documentation: `PRD.md`, `BRAND_GUIDE.md`, `WEDDING_SITE_CONTENT.md`, `FRAMER_SECTIONS.md`, `DEV_ACTION_PLAN.md` and `AGENT_WORKFLOW.md` are present and consistent with each other.
- Code components: All core content sections and widgets listed in §5 are implemented in `/sections`, except the hero-level `WeddingCountdown` (only the floating `WeddingCountdownWidget` exists at this stage).
- Testing: Initial unit tests exist for `RSVPFormSection` as described in §5.1; a broader automated test runner and CI pipeline are not yet configured in this repo.
- Framer project: This PRD assumes that pages, navigation, and layout are built in Framer per `DEV_ACTION_PLAN.md` and `FRAMER_SECTIONS.md`. Actual Framer build status is tracked inside the Framer project rather than this repo.
- Launch: Domain setup, final cross-device QA, and the publish steps described in `DEV_ACTION_PLAN.md` §9 remain to be completed.
