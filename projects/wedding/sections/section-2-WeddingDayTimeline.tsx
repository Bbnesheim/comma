import * as React from "react";
import { addPropertyControls, ControlType, motion } from "framer";

// WeddingDayTimeline (Section 2)
// Vertical timeline inspired by the reference image, with a central line
// and alternating left/right time labels.

// We expose up to seven timeline items; empty items are ignored.

type TimelineItem = {
  time: string;
  label: string;
  side: "left" | "right";
};

type Props = {
  title: string;
  background: string;
  textColor: string;
  accentColor: string;
  // Items
  time1: string;
  label1: string;
  time2: string;
  label2: string;
  time3: string;
  label3: string;
  time4: string;
  label4: string;
  time5: string;
  label5: string;
  time6: string;
  label6: string; 
  time7: string;
  label7: string;
};

export default function WeddingDayTimeline(props: Props) {
  const {
    title,
    background,
    textColor,
    accentColor,
    time1,
    label1,
    time2,
    label2,
    time3,
    label3,
    time4,
    label4,
    time5,
    label5,
    time6,
    label6,
    time7,
    label7,
  } = props;

  const rawItems: TimelineItem[] = [
    { time: time1, label: label1, side: "right" },
    { time: time2, label: label2, side: "left" },
    { time: time3, label: label3, side: "right" },
    { time: time4, label: label4, side: "left" },
    { time: time5, label: label5, side: "right" },
    { time: time6, label: label6, side: "left" },
    { time: time7, label: label7, side: "right" },
  ];

  // Show an item as long as either time or label has content.
  // In Framer it's easy to accidentally leave one of the fields empty, and
  // previously that would hide the entire row and make the timeline look empty.
  const items = rawItems.filter((item) => {
    const time = item.time?.trim();
    const label = item.label?.trim();
    return Boolean(time || label);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        color: textColor,
        // Slightly smaller horizontal padding on medium/small screens so the
        // timeline container never overflows the viewport.
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 720,
          height: "100%",
          maxHeight: 900,
          // Responsive inner padding as well, to avoid pushing content past
          // the right edge on medium breakpoints.
          padding: "clamp(24px, 4vw, 40px)",
          margin: "0 auto",
          boxSizing: "border-box",
          // Let the content sit directly on the section background (no card box)
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Title */}
        {title && (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginBottom: 24,
              // Responsive title purely via CSS: large on desktop, smaller on mobile.
              fontSize: "clamp(24px, 4vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: 1,
              // Use wedding project display font – Dolce Gargia – with serif fallbacks.
              fontFamily: "'Dolce Gargia', 'Playfair Display', serif",
              fontWeight: 400,
              color: accentColor,
            }}
          >
            {title}
          </div>
        )}

        {/* Timeline container */}
        <div
          style={{
            position: "relative",
            marginTop: 16,
            marginBottom: 8,
            width: "100%",
            height: "calc(100% - 64px)",
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Central vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "rgba(0,0,0,0.15)",
              transform: "translateX(-50%)",
            }}
          />

          {items.map((item, index) => (
            <TimelineRow
              key={index}
              item={item}
              accentColor={accentColor}
              textColor={textColor}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

type RowProps = {
  item: TimelineItem;
  accentColor: string;
  textColor: string;
};

function TimelineRow({ item, accentColor, textColor }: RowProps) {
  const isLeft = item.side === "left";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 64,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: 48,
        alignItems: "center",
      }}
    >
      {/* Central dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#F8F3ED",
          border: `2px solid ${accentColor}`,
          transform: "translate(-50%, -50%)",
          boxSizing: "border-box",
        }}
      />

      {/* Left column (right-aligned text) */}
      <div
        style={{
          textAlign: "right",
          fontFamily:
            "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          opacity: isLeft ? 1 : 0.4,
          // Add a bit of padding so text never touches the central line.
          paddingRight: 10,
        }}
      >
        {isLeft && (
          <TimelineText
            item={item}
            align="right"
            textColor={textColor}
            accentColor={accentColor}
          />
        )}
      </div>

      {/* Right column (left-aligned text) */}
      <div
        style={{
          textAlign: "left",
          fontFamily:
            "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          opacity: !isLeft ? 1 : 0.4,
          // Mirror padding on the right side as well.
          paddingLeft: 10,
        }}
      >
        {!isLeft && (
          <TimelineText
            item={item}
            align="left"
            textColor={textColor}
            accentColor={accentColor}
          />
        )}
      </div>
    </div>
  );
}

type TextProps = {
  item: TimelineItem;
  align: "left" | "right";
  textColor: string;
  accentColor: string;
};

function TimelineText({ item, align, textColor, accentColor }: TextProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <div
        style={{
          // Slightly smaller on narrow screens, but never too tiny.
          fontSize: "clamp(9px, 1.4vw, 11px)",
          letterSpacing: 2,
          textTransform: "uppercase",
          // Day & time highlighted in accent colour and bold.
          color: accentColor,
          fontWeight: 700,
        }}
      >
        {item.time}
      </div>
      <div
        style={{
          fontSize: "clamp(9px, 1.4vw, 11px)",
          letterSpacing: 2,
          textTransform: "uppercase",
          color: textColor,
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

addPropertyControls(WeddingDayTimeline, {
  title: {
    type: ControlType.String,
    title: "Tittel",
    defaultValue: "Wedding Day Timeline",
  },
  background: {
    type: ControlType.Color,
    title: "Bakgrunn",
    defaultValue: "#F8F3ED",
  },
  textColor: {
    type: ControlType.Color,
    title: "Tekst",
    defaultValue: "#262220",
  },
  accentColor: {
    type: ControlType.Color,
    title: "Aksent",
    defaultValue: "#b6423c",
  },
  // Default timeline content is wired to the latest program table
  // (PDF) for Friday 17. juli and Saturday 18. juli. You can override all of
  // these from the right‑hand panel in Framer.
  time1: {
    type: ControlType.String,
    title: "Tid 1",
    defaultValue: "FREDAG · CA. 18:00",
  },
  label1: {
    type: ControlType.String,
    title: "Tittel 1",
    defaultValue: "SOSIAL SAMMENKOMST (TBA)",
  },
  time2: {
    type: ControlType.String,
    title: "Tid 2",
    defaultValue: "LØRDAG · CA. 08:00",
  },
  label2: {
    type: ControlType.String,
    title: "Tittel 2",
    defaultValue: "SIGHTSEEING / JOGGETUR MED BRUDGOMMEN",
  },
  time3: {
    type: ControlType.String,
    title: "Tid 3",
    defaultValue: "LØRDAG · CA. 14:00",
  },
  label3: {
    type: ControlType.String,
    title: "Tittel 3",
    defaultValue: "OPPMØTE – BELLAHØJGAARD",
  },
  time4: {
    type: ControlType.String,
    title: "Tid 4",
    defaultValue: "LØRDAG · CA. 14:30",
  },
  label4: {
    type: ControlType.String,
    title: "Tittel 4",
    defaultValue: "VIELSE PÅ BELLAHØJGAARD (DETALJER KOMMER)",
  },
  time5: {
    type: ControlType.String,
    title: "Tid 5",
    defaultValue: "LØRDAG · CA. 15:00",
  },
  label5: {
    type: ControlType.String,
    title: "Tittel 5",
    defaultValue: "BILDER OG RECEPTION",
  },
  time6: {
    type: ControlType.String,
    title: "Tid 6",
    defaultValue: "LØRDAG · CA. 17:00",
  },
  label6: {
    type: ControlType.String,
    title: "Tittel 6",
    defaultValue: "MIDDAG PÅ BELLAHØJGAARD",
  },
  time7: {
    type: ControlType.String,
    title: "Tid 7",
    defaultValue: "SENT KVELD",
  },
  label7: {
    type: ControlType.String,
    title: "Tittel 7",
    defaultValue: "MIDDAG & FESTEN FORTSETTER",
  },
});
