import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// OvernattingSection
// Simple text section for hotel / accommodation information.

interface Props {
  title: string;
  intro: string;
  bookingCode: string;
  bookingUrl: string;
  buttonLabel: string;
}

export default function OvernattingSection(props: Props) {
  const { title, intro, bookingCode, bookingUrl, buttonLabel } = props;

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

      {(bookingCode || (bookingUrl && buttonLabel)) && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 12,
            marginTop: 8,
          }}
        >
          {bookingCode && (
            <div
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                backgroundColor: "#f7ebe9",
                color: "#b6423c",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span style={{ opacity: 0.85, marginRight: 6 }}>Bookingkode:</span>
              <span>{bookingCode}</span>
            </div>
          )}

          {bookingUrl && buttonLabel && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 18px",
                borderRadius: 999,
                backgroundColor: "#b6423c",
                color: "#F8F3ED",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 6px 14px rgba(0, 0, 0, 0.16)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {buttonLabel}
            </a>
          )}
        </div>
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
      "Sent ute med å bestille hotell? Vi har fastpris på Scandic Hotel Copenhagen for 1 eller 2 personer pr. natt inkl. frokost. Klikk på knappen under for å booke rom direkte hos hotellet.",
  },
  bookingCode: {
    type: ControlType.String,
    title: "Bookingkode",
    defaultValue: "BDAN180726",
  },
  buttonLabel: {
    type: ControlType.String,
    title: "Knappetekst",
    defaultValue: "Book rom med rabattkode",
  },
  bookingUrl: {
    type: ControlType.String,
    title: "Bookinglenke",
    defaultValue:
      "https://www.scandichotels.com/en/hotelreservation/select-rate?hotel=749&fromdate=2026-07-17&todate=2026-07-18&bookingCode=BDAN180726&room[0].adults=1&room[0].bookingCode=BDAN180726&room[0].ratecode=BDAN180726&room[0].roomtype=SR&bookingCodeFilter=Discounted",
  },
});
