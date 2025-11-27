import * as React from "react";
import { addPropertyControls, ControlType, motion } from "framer";

// WeddingCountdownWidget
// Compact countdown badge that you can place anywhere on the canvas.
// To make it "floating" in Framer, place the component and then enable
// "Fix position when scrolling" and pin it to a corner.

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Props = {
  title: string;
  targetDate: string;
  background: string;
  textColor: string;
  accentColor: string;
  showDetails: boolean;
};

export default function WeddingCountdownWidget(props: Props) {
  const { title, targetDate, background, textColor, accentColor, showDetails } = props;

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(
    getTimeLeft(targetDate)
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const id = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(id);
  }, [targetDate]);

  const safe: TimeLeft =
    timeLeft || ({ days: 0, hours: 0, minutes: 0, seconds: 0 } as TimeLeft);

  const label = timeLeft
    ? `${safe.days} dager igjen`
    : "Datoen er passert eller ugyldig";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        borderRadius: 999,
        background,
        color: textColor,
        boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
        fontFamily:
          "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {title && (
          <div
            style={{
              fontSize: 11,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: accentColor,
            }}
          >
            {title}
          </div>
        )}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {label}
        </div>
      </div>

      {showDetails && (
        <div
          style={{
            display: "flex",
            gap: 8,
            fontSize: 11,
            opacity: 0.85,
          }}
        >
          <Unit label="d" value={safe.days} />
          <Unit label="t" value={safe.hours} />
          <Unit label="m" value={safe.minutes} />
          <Unit label="s" value={safe.seconds} />
        </div>
      )}
    </motion.div>
  );
}

function Unit({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        minWidth: 30,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: 12,
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function getTimeLeft(targetDate: string): TimeLeft | null {
  const target = new Date(targetDate).getTime();
  if (!target || Number.isNaN(target)) return null;

  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

addPropertyControls(WeddingCountdownWidget, {
  title: {
    type: ControlType.String,
    title: "Tittel",
    defaultValue: "Countdown",
  },
  targetDate: {
    type: ControlType.String,
    title: "Dato/tid",
    defaultValue: "2026-07-18T15:00:00",
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
    title: "Accent",
    defaultValue: "#b6423c",
  },
  showDetails: {
    type: ControlType.Boolean,
    title: "Vis detaljer",
    defaultValue: true,
  },
});
