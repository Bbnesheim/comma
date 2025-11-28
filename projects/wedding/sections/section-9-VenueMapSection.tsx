import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// VenueMapSection
// On-brand Google Maps section to place below the venue info.
// Paste a Google Maps embed URL ("Kopier HTML" -> src attribute) into the Kart-URL prop.

interface Props {
  title: string;
  description: string;
  url: string;
}

export default function VenueMapSection(props: Props) {
  const { title, description, url } = props;

  const hasMap = Boolean(url && url.trim().length > 0);

  // This section now renders **only** the map inside a bordered card.
  // The heading/description text should be placed using the
  // separate `section-9-1-map-text` component.
  return (
    <div
      style={{
        // Outermost card: acts as the red outline directly around the map
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "0 auto",
        fontFamily:
          "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        border: "4px solid #b6423c",
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#F7F2E7",
        boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
      }}
    >
      {hasMap ? (
        <iframe
          src={url}
          title={title || "Kart  Bellahgaard"}
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 14,
            opacity: 0.7,
            padding: 24,
          }}
        >
          Lim inn et Google Maps-embed-URL i egenskapene til VenueMapSection for å
          vise kartet.
        </div>
      )}
    </div>
  );
}

addPropertyControls(VenueMapSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Kart og veibeskrivelse",
  },
  // Description is kept as a prop so you can still store text in the panel,
  // but it is no longer rendered here. Use the `MapTextSection` component
  // (section-9-1-map-text.tsx) to show the text on the page.
  description: {
    type: ControlType.String,
    title: "(Brukes i tekstseksjon)",
    defaultValue:
      "Se hvor Bellahøjgaard ligger, og få et visuelt overblikk over området rundt bryllupslokalet.",
  },
  url: {
    type: ControlType.String,
    title: "Kart-URL",
    defaultValue:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5638.200590492133!2d12.508338212770003!3d55.70194889579416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652522d06be5be7%3A0x7ff4a1e5fd91c49b!2sBellah%C3%B8jvej%2020%2C%202700%20K%C3%B8benhavn%2C%20Denmark!5e1!3m2!1sen!2sno!4v1763832504439!5m2!1sen!2sno",
  },
});
