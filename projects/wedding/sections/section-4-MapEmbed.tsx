import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// MapEmbed
// Simple responsive iframe wrapper. Use a Google Maps or similar embed URL.

type Props = {
  url: string;
  title: string;
};

export default function MapEmbed(props: Props) {
  if (!props.url) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize: 14,
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        Lim inn et kart-URL i MapEmbed-komponenten.
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <iframe
        src={props.url}
        title={props.title || "Kart"}
        style={{
          border: 0,
          width: "100%",
          height: "100%",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

addPropertyControls(MapEmbed, {
  url: {
    type: ControlType.String,
    title: "Kart-URL",
    defaultValue: "",
  },
  title: {
    type: ControlType.String,
    title: "Tittel",
    defaultValue: "Bellahøjgaard",
  },
});
