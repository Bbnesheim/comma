import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

// FAQAccordion
// Simple accordion with up to four Q&A items for the Spørsmål og svar page.

type Item = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  q3: string;
  a3: string;
  q4: string;
  a4: string;
  maxWidth: number;
};

export default function FAQAccordion(props: Props) {
  const items: Item[] = [
    { question: props.q1, answer: props.a1 },
    { question: props.q2, answer: props.a2 },
    { question: props.q3, answer: props.a3 },
    { question: props.q4, answer: props.a4 },
  ].filter((item) => item.question && item.question.trim().length > 0);

  const contentWidth = props.maxWidth && props.maxWidth > 0 ? props.maxWidth : 960;

  // Start with all items collapsed
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div
      style={{
        width: "100%",
        // Let the accordion grow with its content instead of forcing full frame height
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 24,
        boxSizing: "border-box",
        maxWidth: contentWidth,
        margin: "0 auto",
      }}
    >
      {props.title && (
        <h2
          style={{
            margin: 0,
            // Responsive section heading using CSS clamp instead of JS hook.
            fontSize: "clamp(20px, 3vw, 26px)",
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#b6423c",
            fontFamily: "Dolce Gargia, serif",
          }}
        >
          {props.title}
        </h2>
      )}

      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              borderBottom: "1px solid rgba(182, 66, 60, 0.35)",
              padding: "18px 0",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: 0,
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  fontFamily:
                    "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  fontSize: 20,
                  lineHeight: 1,
                  fontFamily:
                    "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  lineHeight: 1.6,
                  opacity: 0.85,
                  maxWidth: "100%",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  fontFamily:
                    "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

addPropertyControls(FAQAccordion, {
  title: {
    type: ControlType.String,
    title: "Overskrift",
    defaultValue: "Spørsmål og svar",
  },
  maxWidth: {
    type: ControlType.Number,
    title: "Maks bredde",
    defaultValue: 960,
    min: 400,
    max: 1400,
    displayStepper: true,
  },
  q1: {
        type: ControlType.String,
        title: "Spørsmål 1",
        defaultValue: "Kan jeg ta med partneren min?",
    },
    a1: {
        type: ControlType.String,
        title: "Svar 1",
        defaultValue:
            "Dessverre setter både lokalet og lommeboken vår en begrensning på antall gjester. Dersom din partner ikke er spesifisert i invitasjonen, er det som utgangspunkt ikke anledning til å ta med følge. Send oss gjerne en melding om du ønsker å ta med partner, da avbud kan føre til at det likevel blir plass.",
    },
    q2: {
        type: ControlType.String,
        title: "Spørsmål 2",
        defaultValue: "Er barn inkludert i invitasjonen?",
    },
    a2: {
        type: ControlType.String,
        title: "Svar 2",
        defaultValue:
            "Vi ønsker at bryllupsdagen skal være en fest for de voksne, og har derfor bestemt oss for barnefritt bryllup. Spedbarn er naturligvis velkomne!",
    },
    q3: {
        type: ControlType.String,
        title: "Spørsmål 3",
        defaultValue: "Kan vi ta bilder under seremonien?",
    },
    a3: {
        type: ControlType.String,
        title: "Svar 3",
        defaultValue:
            "Vi ber om at dere avstår fra å ta bilder under seremonien, da vi har booket en profesjonell bryllupsfotograf, slik at våre gjester kan være til stede i øyeblikket. For resten av bryllupsdagen er dere velkommen til å ta både bilder og videoer!",
    },
    q4: {
        type: ControlType.String,
        title: "Spørsmål 4",
        defaultValue: "Hva med allergier og dietter?",
    },
    a4: {
        type: ControlType.String,
        title: "Svar 4",
        defaultValue:
            "Vi ønsker at alle skal kunne nyte et godt måltid under bryllupet vårt, og ber om at vi får beskjed om eventuelle allergier eller preferanser i god tid, senest 2 måneder før bryllupshelgen. Minner om å bruke mottatt QR-kode for å registrere allergier/preferanser.",
    },
});
