import * as React from "react";

// Hook to scale section headings based on viewport width.
// Desktop: 100% size
// Tablet (<= 1024px): 60% of desktop size
// Mobile (<= 768px): 40% of desktop size
export function useHeadingScale() {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const computeScale = () => {
      const width = window.innerWidth;
      if (width <= 768) return 0.4; // mobile
      if (width <= 1024) return 0.6; // tablet
      return 1; // desktop
    };

    const update = () => {
      setScale(computeScale());
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}
