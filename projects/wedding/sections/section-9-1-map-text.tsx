import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// MapTextSection (section-9-1-map-text)
// Small text box for the map heading + description.
// Use this directly above the `VenueMapSection` map card in Framer.

type Props = {
  title: string;
  body: string;
  maxWidth: number;
};

export default function MapTextSection(props: Props) {
  const { title, body, maxWidth } = props;
  const contentWidth = maxWidth && maxWidth > 0 ? maxWidth : 960;

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: 24,
        boxSizing: "border-box",
        maxWidth: contentWidth,
        margin: "0 auto",
        fontFamily:
          "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {title && (
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(20px, 3vw, 26px)",
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#b6423c",
            fontFamily: "'Dolce Gargia', 'Playfair Display', serif",
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

addPropertyControls(MapTextSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Kart og veibeskrivelse",
  },
  body: {
    type: ControlType.String,
    title: "Tekst",
    defaultValue:
      "Se hvor Bellahøjgaard ligger, og få et visuelt overblikk over området rundt bryllupslokalet.",
  },
  maxWidth: {
    type: ControlType.Number,
    title: "Maks bredde",
    defaultValue: 960,
    min: 400,
    max: 1400,
    displayStepper: true,
  },
});
