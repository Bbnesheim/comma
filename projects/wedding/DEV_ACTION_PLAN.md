# Development Action Plan – Johanne & Daniel Wedding Site

## 1. Setup

1. **Confirm repo branch**
   - Work on the `wedding` git-branch.
2. **Create Framer project**
   - New Framer site named `Johanne & Daniel – Bryllup`.
   - Set default breakpoint to mobile, with desktop as secondary.
3. **Create project files locally**
   - Ensure the following files exist (this doc set):
     - `FRAMER_SECTIONS.md`
     - `WEDDING_SITE_CONTENT.md`
     - `BRAND_GUIDE.md`
     - `DEV_ACTION_PLAN.md`

## 2. Framer structure

1. **Pages**
   - Home
   - Påmelding
   - Program
   - Spørsmål og svar
   - Kleskode
   - Toastmastere
   - Bryllupslokalet
   - Gaver
2. **Navigation component**
   - Create a reusable nav bar component with links to each page.
   - Stick to top on scroll for desktop; simple top bar for mobile.

## 3. Visual system (from BRAND_GUIDE.md)

1. **Colors**
   - Define global color styles in Framer for background, text, and accent.
2. **Text styles**
   - Create H1, H2, H3, and body text styles based on the brand guide.
3. **Components**
   - Section wrapper component (consistent padding/max-width).
   - Primary button component.

## 4. Code components

1. **Countdown component (hero)**
   - Implement `WeddingCountdown` in Framer code (or equivalent).
   - Expose props for target date, title and colors.
   - Place on Home page hero.
2. **Countdown widget (floating)**
   - Implement `WeddingCountdownWidget` as en egen seksjon i `/sections` (kan plasseres hvor som helst på siden).
   - Designet som en kompakt pill som kan brukes som flytende element.
   - I Framer kan du fortsatt aktivere "Fix position when scrolling" og feste den i et hjørne hvis du vil at den skal følge scroll.
3. **Program timeline component**
   - Create a `ProgramTimeline` code component with events (time, title, description, day label).
   - Use property controls to manage up to e.g. 8–10 events.
   - Place on Program page.
4. **Optional: FAQ accordion**
   - If Framer’s built-in components are insufficient, create a `FAQAccordion` component that takes a list of Q&A items.
5. **RSVP form section**
   - Create `RSVPFormSection` as a section-style wrapper.
   - Use a `ComponentInstance` prop (`Skjema`) to slot in a native Framer Form component so Framer handles all submissions and integrations.

## 5. Page-by-page build

1. **Home**
   - Build hero with heading, subheading, hero image/collage, and CTA to Påmelding.
   - Add countdown component.
2. **Påmelding**
   - Add text from content doc.
   - Option A: add primary button linking to Office Forms URL + QR image asset.
   - Option B: use `RSVPFormSection` with a native Framer Form component connected to `Skjema` for an on-site sign-up form.
3. **Program**
   - Configure ProgramTimeline with Friday and Saturday events.
   - Optionally add decorative icons.
4. **Spørsmål og svar**
   - Build Q&A list using either Accordion or FAQ code component.
5. **Kleskode**
   - Simple text layout with Friday/Lørdag sections and placeholder text.
6. **Toastmastere**
   - Create card with description and contact details.
   - Add photo of toastmasters + Johanne (when available).
7. **Bryllupslokalet**
   - Large image of Bellahøjgaard.
   - Text blocks for description, address, transport and hotel info.
   - Optional map embed.
8. **Gaver**
   - Placeholder section with "Informasjon kommer".

## 6. Assets and content

1. **Collect images**
   - Hero/portrait photos of Johanne & Daniel.
   - Venue photos.
   - Toastmaster photo.
2. **Optimize images**
   - Export to web-friendly sizes (e.g. 1600px max width for hero, 800px for others).
   - Compress (JPEG/WebP) before uploading to Framer.
3. **Upload to Framer**
   - Organize assets into logical folders (hero, venue, people).

## 7. Interactions and polish

1. **Scrolling & navigation**
   - Ensure nav links work across pages; consider adding smooth-scroll for in-page anchors.
2. **Hover & focus states**
   - Define consistent button/link hover states.
3. **Responsive tweaks**
   - Adjust layout at mobile and desktop breakpoints.
   - Check long Norwegian words/wrapping.

## 8. Testing

1. **Content review**
   - Verify all text matches `WEDDING_SITE_CONTENT.md`.
2. **Link checks**
   - Test RSVP form link and QR code.
   - Test any mailto: links and external URLs.
3. **Device testing**
   - Preview on mobile, tablet, and desktop.

## 9. Launch

1. **Domain setup**
   - Connect `www.johanneogdaniel.no` to Framer.
   - Configure DNS per Framer’s instructions.
2. **Final publish**
   - Publish from Framer once all pages are approved.
3. **Post-launch tweaks**
   - Adjust copy or details (e.g. program specifics, dress code text, gift info) as plans are finalized.

Use this plan as a checklist while building the site; update it as new requirements appear.