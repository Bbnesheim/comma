# AGENT_WORKFLOW – Johanne & Daniel Wedding Website

This document describes how different agents (or roles) collaborate to design, implement, and maintain the Johanne & Daniel wedding site in Framer.

## 1. Overview

- **Platform**: Framer (pages + code components).
- **Repo**: This Git repo with:
  - `PRD.md`, `BRAND_GUIDE.md`, `WEDDING_SITE_CONTENT.md`, `FRAMER_SECTIONS.md`, `DEV_ACTION_PLAN.md`.
- Code components under `/sections`.
- **Goal**: Produce and maintain a simple, beautiful, mobile‑first wedding information site that matches the PRD and brand guide.

The workflow is intentionally lightweight so that small text or layout tweaks before the wedding are easy to make.

## 2. Roles

### 2.1 Design Agent

**Responsibilities**

- Owns page layouts, visual hierarchy, spacing, and breakpoints in Framer.
- Applies colour, typography, and imagery according to `BRAND_GUIDE.md`.
- Ensures primary headings use the `Luckiest Guy` font and that the site feels cohesive with the reference inspiration.

**Inputs**

- `PRD.md` – scope, pages, and requirements.
- `BRAND_GUIDE.md` – colours, typography, layout principles.
- `WEDDING_SITE_CONTENT.md` – final copy.
- `FRAMER_SECTIONS.md` – which sections appear on which page.

**Outputs**

- Updated Framer pages and components (no code changes required for pure layout work).
- Notes for Code Agent when a new code component or prop is needed to achieve a layout.

### 2.2 Code Agent

**Responsibilities**

- Owns React/TypeScript code for Framer code components in `/sections` and `/widgets`.
- Ensures components are responsive, on‑brand, and match content structure from `FRAMER_SECTIONS.md`.
- Keeps components copy‑paste‑ready for Framer’s code editor and avoids unsupported dependencies.

**Inputs**

- Existing components (e.g. `WeddingCountdown`, `WeddingDayTimeline`, `FAQAccordion`, `RSVPFormSection`, `VenueInfoSection`, `VenueMapSection`, `WeddingCountdownWidget`).
- Design requirements from the Design Agent.
- Brand constraints from `BRAND_GUIDE.md`.

**Outputs**

- Updated or new code components in `/sections` and `/widgets`.
- Clear instructions to the Design Agent on how to configure props and use components in Framer.

### 2.3 Content Agent

**Responsibilities**

- Owns and curates all copy in `WEDDING_SITE_CONTENT.md`.
- Ensures that Framer content (text layers and component props) matches the markdown.
- Coordinates small text updates with Johanne & Daniel as plans evolve (program details, dress code, gifts, etc.).

**Inputs**

- Initial content from the couple.
- Feedback and corrections from the couple.

**Outputs**

- Updated `WEDDING_SITE_CONTENT.md` with the latest approved copy.
- A short change log (e.g. in commit messages) when significant sections are edited.

### 2.4 QA Agent

**Responsibilities**

- Verifies that the implementation meets the acceptance tests in `PROMPT.md` and requirements in `PRD.md`.
- Performs manual checks across devices and viewports.
- Confirms all links (RSVP, email, external) work.

**Inputs**

- `PRD.md` and `PROMPT.md`.
- Latest published or previewed Framer build.

**Outputs**

- A short QA report listing:
  - Pages checked.
  - Issues found (if any) with suggested fixes.
  - Confirmation when acceptance tests AT‑1 to AT‑6 are satisfied.

## 3. Workflow by phase

### 3.1 Planning & setup

1. Content Agent and/or PM creates and updates `PRD.md`, `WEDDING_SITE_CONTENT.md`, and `FRAMER_SECTIONS.md`.
2. Design Agent reviews these docs and sketches the page structure directly in Framer using basic frames/text placeholders.
3. Code Agent confirms that existing components cover the needed layouts; if not, they propose new components.

### 3.2 Design & component integration

1. Design Agent refines each page using the section list from `FRAMER_SECTIONS.md`:
   - Home hero + countdown.
   - RSVP section.
   - Program timeline.
   - Q&A.
   - Dress code.
   - Toastmasters.
   - Venue info + map.
   - Gifts.
2. Code Agent ensures components:
   - Have the right props and defaults for Norwegian content.
   - Use the correct colours and typography (including `Luckiest Guy` for headings).
   - Handle responsive behaviour (e.g. stacking, wrapping) as seen in `VenueMapSection` and FAQ.
3. Design Agent places and configures the code components on the canvas, adjusting sizes and alignment.

### 3.3 Content alignment

1. Content Agent verifies that each text block in Framer matches `WEDDING_SITE_CONTENT.md`.
2. If copy changes (e.g. final dress code details, program timings), Content Agent:
   - Updates the markdown file.
   - Notifies Design/Code Agents of any structural implications (longer text, new bullet points, etc.).

### 3.4 QA & polish

1. QA Agent runs through the acceptance tests from `PROMPT.md`:
   - Documentation completeness.
   - Brand & typography compliance.
   - Content correctness.
   - Section coverage.
   - Responsiveness.
   - RSVP and link behaviour.
2. Any issues are logged and assigned:
   - Visual/layout issues → Design Agent.
   - Code/responsiveness issues → Code Agent.
   - Copy mismatches → Content Agent.
3. After fixes, QA Agent re‑checks and confirms when all tests pass.

### 3.5 Pre‑wedding updates

1. As the wedding approaches, Content Agent may receive last‑minute changes (e.g. updated Friday plans or gift info).
2. Changes are first applied to `WEDDING_SITE_CONTENT.md`, then mirrored in Framer by the Design Agent.
3. QA Agent quickly re‑checks affected pages, focusing on content correctness and basic responsiveness.

## 4. Change management

- Any non‑trivial change to layout, components, or copy should:
  - Be described briefly in commit messages.
  - Keep `PRD.md`, `BRAND_GUIDE.md`, and `WEDDING_SITE_CONTENT.md` consistent.
- When a brand or layout decision changes (e.g. a different heading style), update `BRAND_GUIDE.md` so future work follows the new rule.

## 5. Summary

- Use markdown docs in this repo as the **source of truth**.
- Build and iterate primarily in Framer, using the provided code components.
- Keep the site:
  - On‑brand (colours, typography, layout).
  - Accurate (copy matches markdown).
  - Responsive and easy to use on mobile.
- Use the roles and workflow above so that small, late‑stage edits are safe and quick in the weeks leading up to the wedding.
