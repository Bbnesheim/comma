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
  hotelTitle: string;
  hotel: string;
}

export default function VenueInfoSection(props: Props) {
  const {
    title,
    intro,
    addressLabel,
    address,
    transportTitle,
    transport,
    hotelTitle,
    hotel,
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
          gap: 14,
          maxWidth: 720,
        }}
      >
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

        <InfoBlock label={addressLabel} text={address} />
        <InfoBlock label={transportTitle} text={transport} />
        <InfoBlock label={hotelTitle} text={hotel} />
      </div>
    </div>
  );
}

function InfoBlock({ label, text }: { label: string; text: string }) {
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
  hotelTitle: {
    type: ControlType.String,
    title: "Hotell label",
    defaultValue: "Hotell",
  },
  hotel: {
    type: ControlType.String,
    title: "Hotelltekst",
    defaultValue:
      "Sent ute med å bestille hotell? Bookingkoden BDAN180726 vil gi følgende fastpris på Scandic Hotel Copenhagen: Standard værelse til 1 person: 1500DKK pr. rom pr. natt inkl. frokost. Standard værelse til 2 personer: 1600DKK pr. rom pr. natt inkl. frokost.",
  },
});
