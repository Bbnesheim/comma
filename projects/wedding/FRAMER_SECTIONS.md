# Framer Sections – Implementation Guide

This document maps the content of johanneogdaniel.no to concrete sections in Framer and notes where to use code (components/overrides).

## 1. Overall structure

Pages/sections in the site:
- **Home** (Forside)
- **RSVP / Påmelding**
- **Program** (timeline for Friday & Saturday)
- **Q&A / Spørsmål og svar**
- **Dress code / Kleskode**
- **Toastmasters**
- **Venue information / Bryllupslokalet**
- **Overnatting / Hotell**
- **Gifts / Gaver**

Implementation pattern in Framer:
- Use **one top-level Page per main section**, plus anchors for in-page scroll if needed.
- Create a **shared navigation component** that links to each page/section.
- Use **Code Components** only for things that need logic, e.g. countdown, countdown‑widget og program‑timeline.

## 2. Home (Forside)

**Content**
- Heading: `Bryllupet til Johanne og Daniel, Bellahøjgaard, København, 18. juli 2026.`
- Subheading: `Vi gleder oss til å feire dagen sammen med dere!`
- Hero imagery: 1–3 photos (to be supplied separately).
- Optional countdown: e.g. `254 dager igjen!` (dynamic).

**Framer layout**
- Full-height hero frame with:
  - Logo/monogram (optional) and navigation at top.
  - Centered text block for heading + subheading.
  - Photo collage or single hero image behind/beside text.
- At the bottom, a primary button: `Påmelding` linking to RSVP page.
- **Merk**: Selve hero‑seksjonen (layout, bilder, nav) bygges i Framer UI, ikke som egen kodekomponent i dette repoet.

**Code**
- Use the `WeddingCountdown` code component (or similar) for days-left logic.
- Optionally add a **code override** on the hero button for smooth-scroll to RSVP section if it is on the same page.
- For a small floating countdown, use the `WeddingCountdownWidget` code component from the `widgets` folder and enable "Fix position when scrolling" in Framer to pin it to a corner.

## 3. RSVP / Påmelding

**Content**
- Link to form: `https://forms.office.com/e/qaSAFYGXy9`.
- Reminder text: `Har du husket å bekrefte din deltakelse? Minner om at fristen er 31. januar 2026.`
- QR code graphic (optional) pointing to same URL.

**Framer layout**
- Two-column layout on desktop, stacked on mobile:
  - Left: title + explanatory text.
  - Right: button `Gå til påmelding` and QR image.

**Code**
- Option A (external): simple link button to the Office Forms URL is enough (no custom code necessary).
- Option B (onsite form): use the `RSVPFormSection` code component, and connect a native Framer Form component to the `Skjema` prop so all built-in form logic and integrations are preserved.
- If needed, a small **Code Component** can render the QR from the URL, but a static image is simpler.

## 4. Program (Schedule)

**Content**
- Section `Kvelden før kvelden – Fredag 17. juli`
  - `Ca. 18:00 – Sosial sammenkomst TBA.`
- Section `Den store dagen – Lørdag 18. juli`
  - `Ca. 08:00 – Sightseeing med brudgommen i København. Snør på deg skoene og bli med på en joggetur!`
  - `Ca. 14:00 – Oppmøte (Bellahøjgaard)`
  - `Ca. 14.30 – Vielse på Bellahøjgaard`
  - `Ca. 15:00 – Bilder og reception`
  - `Ca. 17:00 – Middag på Bellahøjgaard`

**Framer layout**
- Use a timeline or schedule layout inspired by the reference images:
  - Vertical or horizontal timeline with time markers.
  - Each item as a card with time, title, and description.

**Code**
- Create a **ProgramTimeline Code Component** that:
  - Accepts an array of events (time, title, description, day).
  - Renders them in a vertical timeline.
- Add property controls so events can be edited from the right panel without touching code.

## 5. Q&A / Spørsmål og svar

**Content blocks** (each becomes an accordion item):
1. _Kan jeg ta med partneren min?_ – answer about plus-ones.
2. _Er barn inkludert i invitasjonen?_ – barnefritt bryllup, with exception for babies.
3. _Kan vi ta bilder under seremonien?_ – no photos during ceremony, yes for the rest.
4. _Hva med mine allergier/dietpreferanser?_ – register allergies/preferences via QR and deadline.

**Framer layout**
- Use an **Accordion** or collapsible FAQ pattern.

**Code**
- Either use a Framer built-in accordion block (if available), or
- Create a **FAQAccordion Code Component** with a list of Q&A items.

## 6. Dress code / Kleskode

**Content**
- Title: `Kleskode`.
- Subsections:
  - `Fredag:` – `Informasjon kommer`.
  - `Lørdag:` – `Herrer: Smoking / mørk dress. Damer: Kjole i valgfri farge, unngå hvit og sort.`

**Framer layout**
- Simple two-column or stacked text section.
- Later you can update text without changing structure.

**Code**
- No custom code needed; static text is fine.

## 7. Toastmasters

**Content**
- Title: `Toastmastere`.
- Names: `Katrine Oseberg og Sjur Dyb Berg er kveldens toastmastere.`
- Description: coordination of speeches/acts, deadline `1. juni 2026`.
- Contact:
  - Email: `toastmaster@johanneogdaniel.no`.
  - Katrine – `Tlf 480 65 076`.
  - Sjur – `Tlf 930 62 853`.
- Photo with Johanne, Sjur, and Katrine (optional).

**Framer layout**
- Card-style section with text on one side and photo on the other.

**Code**
- No special code needed beyond possibly a `mailto:` link on the email address.

## 8. Venue information / Bryllupslokalet

**Content**
- Title: `Bryllupslokalet – Bellahøjgaard`.
- Description of location and spaces (Havesalen + hage, Rænessancesalen).
- Address: `Bellahøjvej 20, 2700 Brønshøj`.
- Recommended transport: bus 5C to Hyrdevangen, info about stops and DOT app.
- Hero image of Bellahøjgaard.

**Framer layout**
- Large venue image, with text block alongside or underneath.
- Optional small map illustration or embed.

**Code**
- Optional: embed a Google Maps iframe via a simple **MapEmbed Code Component**.

## 9. Overnatting / Hotell

**Content**
- Hotellinformasjon for Scandic Hotel Copenhagen, med bookingkode `BDAN180726` og faste priser (1 og 2 personer) som i `WEDDING_SITE_CONTENT.md`.

**Framer layout**
- Egen seksjon under lokalet med tittel `Overnatting` eller `Hotell`.
- Tekstblokk med hotellinformasjon, eventuelt med lite bilde eller ikon.

**Code**
- Kan bruke `VenueInfoSection` eller en enkel tekstseksjon uten ekstra kode.

## 10. Gifts / Gaver

**Content**
- Tekst om at dere ikke forventer gaver, men at det er mulig å gi bidrag til bryllupsreise via bryllupskonto `9053.07.67514`.

**Framer layout**
- Simple section with title and placeholder text.

**Code**
- Static for now. Later you can add registry links or bank details.

## 10. Technical notes

- **Platform**: Framer, mobile-first.
- Focus on:
  - Responsive layout.
  - Fast loading of images (optimized sizes, lazy loading).
  - Simple code surface: only use Code Components where necessary.

Use this file as the implementation reference when building the Framer project and code components.