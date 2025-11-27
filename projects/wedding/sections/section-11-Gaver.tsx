import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// GiftsSection
// Text section explaining gift wishes / bryllupskonto.

interface Props {
  title: string;
  body: string;
}

export default function GiftsSection(props: Props) {
  const { title, body } = props;

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
        maxWidth: 720,
        margin: "0 auto",
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
            fontFamily:
              "'Dolce Gargia', 'Playfair Display', 'Times New Roman', serif",
          }}
        >
          {title}
        </h2>
      )}

      {body && (
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.6,
            color: "#262220",
          }}
        >
          {body}
        </p>
      )}
    </div>
  );
}

addPropertyControls(GiftsSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Gaver",
  },
  body: {
    type: ControlType.String,
    title: "Tekst",
    defaultValue:
      "Vi vet at dere har brukt penger på å reise til København for å feire oss, og vi forventer derfor ingen gaver. Dersom noen insisterer på å gi, setter vi pris på et lite bidrag til bryllupsreisen vår. Bryllupskonto: 9053.07.67514.",
  },
});
