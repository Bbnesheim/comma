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

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
}

export default function VenueMapSection(props: Props) {
  const { title, description, url } = props;

  const hasMap = Boolean(url && url.trim().length > 0);
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 24,
        boxSizing: "border-box",
        fontFamily:
          "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {title && (
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#b6423c",
            fontFamily: "Dolce Gargia, serif",
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 16 : 24,
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
        }}
      >
        {/* Text column on the left */}
        <div
          style={{
            flex: 1,
            maxWidth: isMobile ? "100%" : 420,
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "flex-end",
          }}
        >
          {description && (
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.6,
                color: "#262220",
                textAlign: isMobile ? "left" : "right",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Map card on the right */}
        <div
          style={{
            flex: 1,
            minHeight: 260,
            borderRadius: 24,
            overflow: "hidden",
            background: "#F8F3ED",
            boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
            border: "1px solid rgba(0,0,0,0.06)",
            maxWidth: isMobile ? "100%" : 520,
            marginTop: isMobile ? 16 : 0,
          }}
        >
          {hasMap ? (
            <iframe
              src={url}
              title="Kart – Bellahøjgaard"
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
      </div>
    </div>
  );
}

addPropertyControls(VenueMapSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Kart og veibeskrivelse",
  },
  description: {
    type: ControlType.String,
    title: "Beskrivelse",
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
