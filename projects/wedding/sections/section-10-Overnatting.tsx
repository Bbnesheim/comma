import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// OvernattingSection
// Simple text section for hotel / accommodation information.

interface Props {
  title: string;
  intro: string;
}

export default function OvernattingSection(props: Props) {
  const { title, intro } = props;

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
        maxWidth: 960,
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

      {intro && (
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.6,
            color: "#262220",
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

addPropertyControls(OvernattingSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Overnatting / Hotell",
  },
  intro: {
    type: ControlType.String,
    title: "Tekst",
    defaultValue:
      "Sent ute med å bestille hotell? Bookingkoden BDAN180726 vil gi fastpris på Scandic Hotel Copenhagen for 1 eller 2 personer pr. natt inkl. frokost.",
  },
});
