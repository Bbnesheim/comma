# BRAND GUIDE – Johanne & Daniel Wedding

Dette dokumentet beskriver en enkel visuell profil for bryllupsnettsiden.

## 1. Overordnet stil

- **Stemning**: Sommerbryllup, varm og romantisk, men enkel og moderne.
- **Referanse**: Inspirasjonsside (Anne Noël / Showit-stil) med collage av bilder, mye luft, delikat typografi.
- **Følelse**: Lys, luftig, tidløs – mer redaksjonell/print-inspirert enn typisk web.

## 2. Farger

_Nøyaktige koder kan justeres i Framer etter bildemateriale, men utgangspunktet:_

- **Bakgrunn (base)**: Lys krem / off-white  
  `#F8F3ED`
- **Primærtekst (mørk)**: Dyp varm grå / nesten svart  
  `#262220`
- **Aksent 1 (heading / detaljer, varm rød)**:  
  `#b6423c`
- **Aksent 2 (dus grønn eller blå, valgfritt)**: brukes svært sparsommelig til ikoner eller små detaljer  
  f.eks. `#4A6A6A` eller `#6A7BA3`.

Hold fargepaletten begrenset – mye hvitt/krem, nesten all tekst mørk, én tydelig aksentfarge.

## 3. Typografi

- **Tittel / display**  
  - Hovedfont: "Dolce Gargia" (custom/importert) for hovedtitler, navn og sentrale overskrifter.  
  - Fallback: "Playfair Display" (eller tilsvarende klassisk serif) dersom Dolce Gargia ikke er tilgjengelig.  
  - Highlights / detaljer: "Sverige Script Demo" brukes sparsommelig til små ord, navnetrekk og dekorative elementer.

- **Brødtekst / description**  
  - Sans-serif for lesbarhet.  
  - Primær: `"Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.  
  - Fallback: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` hvis Manrope ikke er tilgjengelig.

- **Typografihierarki**
  - H1: Store navn / hovedheading på forsiden (display-font som over).  
  - H2: Seksjonstitler (Program, Påmelding, Q&A, Bryllupslokalet …) – kan bruke samme display-font eller Manrope i versaler.  
  - H3: Undertitler (f.eks. "Kvelden før kvelden", "Den store dagen") – kan bruke Manrope eller dekorativ font ved behov.  
  - Body: 16–18px, linjeavstand 1.5–1.7.

## 4. Layout og grid

- **Mye luft** – store margins/padding rundt seksjoner.
- **Kolonner**:  
  - Desktop: 2–3 kolonner for tekst + bilder (f.eks. tekst venstre, bilde høyre).  
  - Mobil: Alt i én kolonne, i logisk leserekkefølge.
- **Collage-følelse** på forsiden:  
  - Flere små bilder i lett overlappende rutenett.  
  - Bruk myke skygger eller subtil overlapping, ikke harde rammer.

## 5. Bildebruk

- Varme, naturlige farger (ikke for mettet).
- Bland portretter, utsnitt og miljøbilder.
- På forsiden:  
  - 1 hero-bilde eller collage som viser paret og/eller København.
- På venuesiden:  
  - Stort bilde av Bellahøjgaard (gjerne luftfoto).

## 6. Ikoner og illustrasjoner

- Enkle, strekbaserte ikoner (håndtegnet følelse) kan brukes i program/timeline.
- Få, konsistente ikoner – ikke for mange ulike stiler.

## 7. Knappestil

- **Primær CTA-knapp** (for viktige handlinger som påmelding):
  - **Maks én primær CTA per seksjon** (fold) for tydelig fokus.  
  - Bakgrunn: aksentfarge (korall/rød), `#b6423c`.  
  - Tekst: alltid lys (hvit/krem), f.eks. `#F8F3ED`.  
  - Lett avrundede hjørner (4–8px).  
  - Hover: litt mørkere variant av aksentfargen **og** en subtil "heartbeat"-animasjon (f.eks. kort skalering opp/ned 1.02–1.05x) som spiller én gang når brukeren holder musen over knappen.

- **Sekundærknapp / lenke**:  
  - Tekstlenke i aksentfarge, ingen eller veldig subtil understrek.  
  - Ingen heartbeat-animasjon – kun enkel farge-/understrekendring ved hover.

## 8. Tone of voice

- Vennlig, inkluderende og tydelig.  
- Personlig, men ikke altfor uformell.  
- Bruk "vi"-form og direkte tiltale ("du/dere").

## 9. Responsivitet

- Design **mobile first** – test alltid på mobilbredde i Framer.
- Sørg for at all tekst er lett lesbar på små skjermer (min. 16px).

Bruk denne guiden som referanse når du velger fonter, farger og layout i Framer-prosjektet.