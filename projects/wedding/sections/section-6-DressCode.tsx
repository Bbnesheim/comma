import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// DressCodeSection (Kleskode)
// Simple text section for Friday / Saturday dress code.

interface Props {
  title: string;
  fridayLabel: string;
  fridayText: string;
  saturdayLabel: string;
  saturdayText: string;
}

export default function DressCodeSection(props: Props) {
  const { title, fridayLabel, fridayText, saturdayLabel, saturdayText } = props;

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
        alignItems: "flex-end",
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
            textAlign: "right",
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-end",
        }}
      >
        <DayBlock label={fridayLabel} text={fridayText} />
        <DayBlock label={saturdayLabel} text={saturdayText} />
      </div>
    </div>
  );
}

function DayBlock({ label, text }: { label: string; text: string }) {
  if (!label && !text) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: "#262220",
            textAlign: "right",
          }}
        >
          {label}
        </div>
      )}
      {text && (
        <div
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "#262220",
            opacity: 0.9,
            textAlign: "right",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

addPropertyControls(DressCodeSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Kleskode",
  },
  fridayLabel: {
    type: ControlType.String,
    title: "Fredag label",
    defaultValue: "Fredag",
  },
  fridayText: {
    type: ControlType.String,
    title: "Fredag tekst",
    defaultValue: "Informasjon kommer.",
  },
  saturdayLabel: {
    type: ControlType.String,
    title: "Lørdag label",
    defaultValue: "Lørdag",
  },
  saturdayText: {
    type: ControlType.String,
    title: "Lørdag tekst",
    defaultValue: "Informasjon kommer.",
  },
});
