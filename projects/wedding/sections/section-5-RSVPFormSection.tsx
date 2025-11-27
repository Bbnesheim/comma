import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// RSVPFormSection
// Section for RSVP that only shows explanatory text + a CTA button
// linking to the external Microsoft Forms URL. No embedded form.

type Props = {
  title: string;
  description: string;
  note: string;
  ctaLabel: string;
  ctaUrl: string;
};

export default function RSVPFormSection(props: Props) {
  const { title, description, note } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
            marginBottom: 16,
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
          flexDirection: "column",
          gap: 12,
          maxWidth: 520,
        }}
      >
        {description && (
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.6,
              color: "#262220",
            }}
          >
            {description}
          </p>
        )}

        {note && (
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.6,
              color: "#5b524f",
            }}
          >
            {note}
          </p>
        )}

        {/* CTA button linking directly to the Office form */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href={props.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              borderRadius: 999,
              border: "none",
              background: "#b6423c",
              color: "#F8F3ED",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {props.ctaLabel}
          </a>
        </div>

        {/* Form area intentionally removed – we only use the CTA button for now. */}
      </div>
    </div>
  );
}

addPropertyControls(RSVPFormSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Påmelding",
  },
  description: {
    type: ControlType.String,
    title: "Ingress",
    defaultValue:
      "Har du husket å bekrefte din deltakelse? Minner om at fristen er 31. januar 2026.",
  },
  note: {
    type: ControlType.String,
    title: "Tilleggsnote",
    defaultValue:
      "Klikk på knappen for å gå til påmeldingsskjemaet. Der kan du også legge inn eventuelle allergier og dietpreferanser.",
  },
  ctaLabel: {
    type: ControlType.String,
    title: "CTA-tekst",
    defaultValue: "Gå til påmelding",
  },
  ctaUrl: {
    type: ControlType.String,
    title: "CTA-lenke",
    defaultValue: "https://forms.office.com/e/qaSAFYGXy9",
  },
});
