import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// VenueInfoSection
// Text section for Bellahøjgaard venue, address, transport and hotel info.

interface Props {
  title: string;
  intro: string;
  addressLabel: string;
  address: string;
  transportTitle: string;
  transport: string;
  // Typography controls
  titleFontSize: number;
  titleFontFamily: string;
  bodyFontSize: number;
  bodyFontFamily: string;
  labelFontSize: number;
}

export default function VenueInfoSection(props: Props) {
  const {
    title,
    intro,
    addressLabel,
    address,
    transportTitle,
    transport,
    titleFontSize,
    titleFontFamily,
    bodyFontSize,
    bodyFontFamily,
    labelFontSize,
  } = props;

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
            // If a custom size is provided, use it; otherwise keep the responsive clamp.
            fontSize:
              typeof titleFontSize === "number" && titleFontSize > 0
                ? titleFontSize
                : "clamp(20px, 3vw, 26px)",
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#b6423c",
            fontFamily:
              titleFontFamily && titleFontFamily.trim().length > 0
                ? titleFontFamily
                : "'Dolce Gargia', 'Playfair Display', serif",
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          maxWidth: 720,
        }}
      >
        {intro && (
          <p
            style={{
              margin: 0,
              fontSize: bodyFontSize || 15,
              lineHeight: 1.6,
              color: "#262220",
              fontFamily:
                bodyFontFamily && bodyFontFamily.trim().length > 0
                  ? bodyFontFamily
                  : "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            {intro}
          </p>
        )}

        <InfoBlock
          label={addressLabel}
          text={address}
          labelFontSize={labelFontSize}
          bodyFontSize={bodyFontSize}
          bodyFontFamily={bodyFontFamily}
        />
        <InfoBlock
          label={transportTitle}
          text={transport}
          labelFontSize={labelFontSize}
          bodyFontSize={bodyFontSize}
          bodyFontFamily={bodyFontFamily}
        />
      </div>
    </div>
  );
}

function InfoBlock({
  label,
  text,
  labelFontSize,
  bodyFontSize,
  bodyFontFamily,
}: {
  label: string;
  text: string;
  labelFontSize?: number;
  bodyFontSize?: number;
  bodyFontFamily?: string;
}) {
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
            fontSize: labelFontSize || 15,
            fontWeight: 600,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: "#262220",
          }}
        >
          {label}
        </div>
      )}
      {text && (
        <div
          style={{
            fontSize: bodyFontSize || 14,
            lineHeight: 1.6,
            color: "#262220",
            opacity: 0.9,
            fontFamily:
              bodyFontFamily && bodyFontFamily.trim().length > 0
                ? bodyFontFamily
                : "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

addPropertyControls(VenueInfoSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Bryllupslokalet – Bellahøjgaard",
  },
  intro: {
    type: ControlType.String,
    title: "Intro",
    defaultValue:
      "Bellahøjgaard ligger like utenfor Københavns sentrumskjerne og er lett tilgjengelig med kollektivtransport. Vielsen vil finne sted i Havesalen og dens tilhørende hage, mens middagen og festen blir i Rænessancesalen.",
  },
  // Typography controls (optional)
  titleFontSize: {
    type: ControlType.Number,
    title: "Tittel str.",
    defaultValue: 26,
    min: 12,
    max: 64,
  },
  titleFontFamily: {
    type: ControlType.String,
    title: "Tittel font",
    defaultValue: "'Dolce Gargia', 'Playfair Display', serif",
  },
  bodyFontSize: {
    type: ControlType.Number,
    title: "Brødtekst str.",
    defaultValue: 15,
    min: 10,
    max: 32,
  },
  bodyFontFamily: {
    type: ControlType.String,
    title: "Brødtekst font",
    defaultValue:
      "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  labelFontSize: {
    type: ControlType.Number,
    title: "Label str.",
    defaultValue: 15,
    min: 10,
    max: 32,
  },
  addressLabel: {
    type: ControlType.String,
    title: "Adresse label",
    defaultValue: "Adresse",
  },
  address: {
    type: ControlType.String,
    title: "Adresse",
    defaultValue: "Bellahøjvej 20, 2700 Brønshøj",
  },
  transportTitle: {
    type: ControlType.String,
    title: "Transport label",
    defaultValue: "Transport",
  },
  transport: {
    type: ControlType.String,
    title: "Transport",
    defaultValue:
      "Buss 5C til Hyrdevangen (Frederikssundsvej). Bussen går fra bla. København Hovedbanegård, Rådhusplassen og Nørreport. Sentrale metrolinjer vil stoppe på enten Hovedbanegården eller Nørreport. Appen DOT er enklest å bruke for kjøp av kollektivbillett.",
  },
});
