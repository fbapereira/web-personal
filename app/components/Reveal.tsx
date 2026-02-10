"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ as: As = "section", children, className }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      // Fallback: just show content without animation
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const mergedClassName = [
    "reveal",
    visible ? "reveal-visible" : "",
    className ?? ""
  ]
    .join(" ")
    .trim();

  // @ts-expect-error dynamic element
  return <As ref={ref} className={mergedClassName}>{children}</As>;
}

