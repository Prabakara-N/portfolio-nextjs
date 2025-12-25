"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

interface HeroHighlightProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HeroHighlight({
  children,
  className,
  containerClassName,
}: HeroHighlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  // All hooks must be called unconditionally at the top
  const background = useMotionTemplate`
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      var(--primary),
      transparent 80%
    )
  `;

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex h-full w-full items-center justify-center bg-background",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-800" />
      {mounted && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 px-1 pb-1",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
