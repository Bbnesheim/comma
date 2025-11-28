import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// ToastmastersSection
// Card-like section describing toastmasters and contact info.

interface Props {
  title: string;
  intro: string;
  emailLabel: string;
  email: string;
  katrineLabel: string;
  katrinePhone: string;
  sjurLabel: string;
  sjurPhone: string;
}

export default function ToastmastersSection(props: Props) {
  const {
    title,
    intro,
    emailLabel,
    email,
    katrineLabel,
    katrinePhone,
    sjurLabel,
    sjurPhone,
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
            fontSize: "clamp(20px, 3vw, 26px)",
            letterSpacing: 2,
            textTransform: "uppercase",
            // Headline: Dolce Gargia in brand red.
            color: "#b6423c",
            fontFamily: "'Dolce Gargia', 'Playfair Display', serif",
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
          maxWidth: 640,
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: 8,
          }}
        >
          {email && (
            <div>
              <strong>{emailLabel}</strong>{" "}
              <a
                href={`mailto:${email}`}
                style={{ color: "#b6423c", textDecoration: "none" }}
              >
                {email}
              </a>
            </div>
          )}
          {katrinePhone && (
            <div>
              <strong>{katrineLabel}</strong> {katrinePhone}
            </div>
          )}
          {sjurPhone && (
            <div>
              <strong>{sjurLabel}</strong> {sjurPhone}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

addPropertyControls(ToastmastersSection, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Toastmastere",
  },
  intro: {
    type: ControlType.String,
    title: "Intro",
    defaultValue:
      "Katrine Oseberg og Sjur Dyb Berg er kveldens toastmastere. De vil koordinere og holde styr på programmet. Dersom du ønsker å bidra med et innslag eller tale ber vi om at du tar kontakt med dem før fristen 1. juni 2026.",
  },
  emailLabel: {
    type: ControlType.String,
    title: "E-post label",
    defaultValue: "E-post:",
  },
  email: {
    type: ControlType.String,
    title: "E-post",
    defaultValue: "toastmaster@johanneogdaniel.no",
  },
  katrineLabel: {
    type: ControlType.String,
    title: "Katrine label",
    defaultValue: "Katrine – Tlf",
  },
  katrinePhone: {
    type: ControlType.String,
    title: "Katrine tlf",
    defaultValue: "480 65 076",
  },
  sjurLabel: {
    type: ControlType.String,
    title: "Sjur label",
    defaultValue: "Sjur – Tlf",
  },
  sjurPhone: {
    type: ControlType.String,
    title: "Sjur tlf",
    defaultValue: "930 62 853",
  },
});
