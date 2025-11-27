# PROMPT – Johanne & Daniel Wedding Website

This document defines how agents and contributors should work on the Johanne & Daniel wedding site in Framer, and which constraints and acceptance tests must always be respected.

## 1. System context

- The project is a **wedding information site** for Johanne & Daniel, primarily for invited guests.
- The technical implementation is a **Framer project** built with:
  - Visual layout in the Framer canvas.
  - **Code Components** copied from this repo (`/sections`, `/widgets`) into the Framer code editor.
- Content and implementation reference docs live in this repo:
  - `PRD.md` – product requirements and scope.
  - `BRAND_GUIDE.md` – visual and typographic system.
  - `WEDDING_SITE_CONTENT.md` – all final copy.
  - `FRAMER_SECTIONS.md` – page‑by‑page implementation plan.
  - `DEV_ACTION_PLAN.md` – build checklist.

Agents must treat these markdown files as the **single source of truth**.

## 2. Global instructions (always apply)

1. **Obey `PRD.md`** – Do not invent new functionality or pages beyond the documented scope without an explicit request.
2. **Respect the brand system** – Colours, typography, spacing, and overall tone must follow `BRAND_GUIDE.md`.
3. **Headings typography** – Primary title headings (H1/H2) should use a consistent display font as defined in `BRAND_GUIDE.md` (f.eks. Dolce Gargia / serif/script-pairings), but are not locked to a single specific font.
4. **Copy accuracy** – Long‑form text on the site must match `WEDDING_SITE_CONTENT.md`. Small editorial tweaks are allowed but should be fed back into the markdown file.
5. **Framer‑first** – Implementation must be compatible with Framer’s code environment:
   - Use `import { addPropertyControls, ControlType, motion } from "framer";` as in existing components.
   - Avoid dependencies that are not supported by Framer’s sandbox.
6. **Section‑based assembly** – New logic or layout should be added as reusable sections or widgets, not hard‑wired into a single page, whenever possible.
7. **Mobile‑first** – Always check designs and code at narrow widths (~320–400px) before fine‑tuning desktop.
8. **No breaking changes to working sections** without preserving existing props and expected behaviour, so the Framer project does not break when code is updated.

## 3. Agent roles

See `AGENT_WORKFLOW.md` for full details. In short:

- **Design Agent** – Owns layout, spacing, breakpoints, and visual hierarchy in Framer.
- **Code Agent** – Owns React/Framer code components and responsive behaviour.
- **Content Agent** – Owns copy in `WEDDING_SITE_CONTENT.md` and ensures consistency across pages.
- **QA Agent** – Owns cross‑device testing and acceptance test verification.

## 4. Implementation invariants

Whenever you touch code or layouts for this project, ensure the following invariants hold:

1. **Brand invariants**
   - Background/base colour: `#F8F3ED` or a very close variant.
   - Primary text: `#262220`.
   - Accent colour: `#b6423c` for headings, key accents, and primary buttons.
   - Body font stack includes `Manrope` as primary.
   - Title headings use the agreed display font(s) from `BRAND_GUIDE.md`.

2. **Layout invariants**
   - Generous vertical spacing between sections.
   - Max content width for text sections around 640–960px.
   - For two‑column layouts, columns stack on narrow screens.

3. **Code component invariants**
   - `WeddingCountdown` and `WeddingCountdownWidget` must fail gracefully if the date is missing or in the past (already implemented – do not remove this behaviour).
   - `WeddingDayTimeline` must ignore empty time/label pairs.
   - `FAQAccordion` must wrap long Norwegian text and avoid horizontal overflow.
   - `MapEmbed` and `VenueMapSection` must use `iframe` with 100% width/height inside a responsive container.
   - `RSVPFormSection` must use an external CTA link instead of embedding the form directly (per current approach).

4. **Content invariants**
   - Page structure and copy follow `FRAMER_SECTIONS.md` and `WEDDING_SITE_CONTENT.md`.
   - Email addresses and phone numbers remain exactly as specified.

## 5. Acceptance tests

Use these as a checklist whenever work is done on the project.

### AT‑1 – Documentation completeness

- `PRD.md` is present and describes:
  - Problem statement, scope, pages/sections, and functional/non‑functional requirements.
- `BRAND_GUIDE.md` is present and aligned with the actual visual implementation.
- `AGENT_WORKFLOW.md` is present and describes design/code/content/QA flows.

**Pass condition:** All three docs exist, are internally consistent, and reference the same set of pages and components.

### AT‑2 – Brand & typography compliance

- Primary headings on all pages use a consistent display font that matches `BRAND_GUIDE.md`.
- Accent colour `#b6423c` is used consistently for headings, key labels, and primary CTAs.
- Body text uses the documented sans‑serif stack (Manrope first).

**Pass condition:** Spot‑check at least Home, RSVP, Program, Q&A, Toastmasters, and Venue pages and confirm headings and body fonts/colours follow the brand rules.

### AT‑3 – Content correctness

- All long‑form copy on the site has a corresponding source in `WEDDING_SITE_CONTENT.md`.
- Q&A questions and answers are identical (or trivially edited) to the markdown source.
- Venue address, transport description, and hotel/overnatting information match the markdown exactly.

**Pass condition:** No discrepancies between site copy and markdown after a careful read‑through.

### AT‑4 – Section coverage

- The following conceptual sections are implemented in Framer using the provided code components or equivalent layouts:
  - Countdown (hero or floating widget).
  - RSVP section with button to Microsoft Forms.
  - Program timeline for Friday/Saturday.
  - Q&A accordion.
  - Dress code text section.
  - Toastmasters info.
  - Venue info and map.
  - Overnatting / hotellinfo.
  - Gaver-seksjon.

**Pass condition:** Every section from the list above is visible and functional in a Framer preview of the site.

### AT‑5 – Responsiveness

- No horizontal scroll appears on:
  - Narrow mobile (~320px), typical mobile (~375–414px), tablet, and desktop.
- FAQ, program timeline, and venue/map layouts adapt gracefully on narrow screens.
- Long Norwegian words do not visually break the layout.

**Pass condition:** Manual checks at multiple breakpoints confirm that text wraps, columns stack, and the map/card components fit within the viewport.

### AT‑6 – RSVP & links

- The RSVP button on the Påmelding page opens the correct Microsoft Forms URL in a new tab.
- Email links (`mailto:`) for toastmasters work as expected.
- Any external links (e.g. hotel or maps) open in a new tab and preserve the wedding site tab.

**Pass condition:** All key links are tested in a Framer preview or published preview.

## 6. How agents should work

1. **Start with docs** – Before making changes, read `PRD.md`, `BRAND_GUIDE.md`, `WEDDING_SITE_CONTENT.md`, and `FRAMER_SECTIONS.md`.
2. **Design first, then code** – Iterate on layout and spacing in Framer; only then update or add code components if layout cannot be achieved visually.
3. **Keep code minimal** – Prefer simple props and inline styles over complex logic; anything that works in Framer’s current examples is safe to reuse.
4. **Test on mobile and desktop** – Always preview on a small mobile frame and a desktop frame before considering a task done.
5. **Update markdown if behaviour or content changes** – If you change how a section works or what it says, reflect that in the relevant markdown file so the repo remains the truthful specification.
