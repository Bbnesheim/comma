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

  const items = rawItems.filter((item) => item.time && item.label);

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
        padding: 32,
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
          padding: 40,
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
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: 1,
              // Use wedding project display fonts from BRAND_GUIDE (custom/imported in Framer)
              fontFamily: "'Dolce Gargia', 'Sverige Script Demo', 'Playfair Display', serif",
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
        }}
      >
        {isLeft && <TimelineText item={item} align="right" textColor={textColor} />}
      </div>

      {/* Right column (left-aligned text) */}
      <div
        style={{
          textAlign: "left",
          fontFamily:
            "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          opacity: !isLeft ? 1 : 0.4,
        }}
      >
        {!isLeft && <TimelineText item={item} align="left" textColor={textColor} />}
      </div>
    </div>
  );
}

type TextProps = {
  item: TimelineItem;
  align: "left" | "right";
  textColor: string;
};

function TimelineText({ item, align, textColor }: TextProps) {
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
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: textColor,
        }}
      >
        {item.time}
      </div>
      <div
        style={{
          fontSize: 11,
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
  time1: {
    type: ControlType.String,
    title: "Tid 1",
    defaultValue: "FREDAG",
  },
  label1: {
    type: ControlType.String,
    title: "Tittel 1",
    defaultValue: "ANKOMST KØBENHAVN",
  },
  time2: {
    type: ControlType.String,
    title: "Tid 2",
    defaultValue: "KVELD",
  },
  label2: {
    type: ControlType.String,
    title: "Tittel 2",
    defaultValue: "UFORMELL SAMLING",
  },
  time3: {
    type: ControlType.String,
    title: "Tid 3",
    defaultValue: "08:00",
  },
  label3: {
    type: ControlType.String,
    title: "Tittel 3",
    defaultValue: "JOGGETUR MED BRUDGOMMEN",
  },
  time4: {
    type: ControlType.String,
    title: "Tid 4",
    defaultValue: "FORMIDDAG",
  },
  label4: {
    type: ControlType.String,
    title: "Tittel 4",
    defaultValue: "EGEN TID I BYEN",
  },
  time5: {
    type: ControlType.String,
    title: "Tid 5",
    defaultValue: "14:30",
  },
  label5: {
    type: ControlType.String,
    title: "Tittel 5",
    defaultValue: "VIELSE PÅ BELLAHØJGAARD",
  },
  time6: {
    type: ControlType.String,
    title: "Tid 6",
    defaultValue: "ETTERPÅ",
  },
  label6: {
    type: ControlType.String,
    title: "Tittel 6",
    defaultValue: "BOBLER, KAKE & BILDER",
  },
  time7: {
    type: ControlType.String,
    title: "Tid 7",
    defaultValue: "KVELD",
  },
  label7: {
    type: ControlType.String,
    title: "Tittel 7",
    defaultValue: "MIDDAG & FEST",
  },
});
