import * as React from "react";
import { addPropertyControls, ControlType, motion } from "framer";

// RSVPFormSection
// Section for RSVP that only shows explanatory text + a CTA button
// linking to the external Microsoft Forms URL. No embedded form.

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Props = {
  title: string;
  description: string;
  note: string;
  ctaLabel: string;
  ctaUrl: string;
};

export default function RSVPFormSection(props: Props) {
  const { title, description, note } = props;

  // Split description so that the first sentence (ending with '?')
  // can be highlighted in a different display font.
  let questionLine = "";
  let descriptionRemainder = description;

  if (description) {
    const idx = description.indexOf("?");
    if (idx !== -1) {
      questionLine = description.slice(0, idx + 1).trim();
      descriptionRemainder = description.slice(idx + 1).trim();
    }
  }


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
        border: "4px solid #b6423c",
        borderRadius: 8,
        backgroundColor: "#F7F2E7",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, rgba(230,220,210,0.18) 1px, rgba(230,220,210,0.18) 3px)," +
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 0.6px, transparent 0.6px)," +
          "radial-gradient(circle at 3px 3px, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 0.5px, transparent 0.5px)",
        backgroundSize: "auto, 4px 4px, 4px 4px",
        backgroundBlendMode: "soft-light, normal, normal",
        boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
      }}
    >
      {title && (
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: 36,
            letterSpacing: 1,
            textTransform: "none",
            color: "#b6423c",
            fontFamily:
              "'Sverige Script Demo', 'Dolce Gargia', 'Playfair Display', cursive",
            fontWeight: 400,
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
        {questionLine && (
          <p
            style={{
              margin: 0,
              fontSize: 20,
              lineHeight: 1.4,
              color: "#262220",
              fontFamily:
                "'Dolce Gargia', 'Playfair Display', 'Times New Roman', serif",
            }}
          >
            {questionLine}
          </p>
        )}

        {descriptionRemainder && (
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.6,
              color: "#262220",
            }}
          >
            {descriptionRemainder}
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
          <motion.a
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
            whileHover={{
              scale: [1, 1.05, 1],
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
          >
            {props.ctaLabel}
          </motion.a>
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
