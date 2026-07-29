"use client";

import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({
  value,
  suffix = "",
  duration = 2,
}: CounterProps) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [motionValue, value, duration]);

  return (
    <span className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}