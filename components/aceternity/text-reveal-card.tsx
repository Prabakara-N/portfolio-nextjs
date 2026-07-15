"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealCardProps {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}

export function TextRevealCard({
  text,
  revealText,
  children,
  className,
}: TextRevealCardProps) {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function handleMouseEnter() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  // Auto-play: hold each phrase for ~3s with a quick wipe between them.
  // 7s cycle → base held 0–3s, wipe 3–3.5s, reveal held 3.5–6.5s, wipe back 6.5–7s.
  const autoTransition = {
    duration: 7,
    ease: "easeInOut" as const,
    times: [0, 0.43, 0.5, 0.93, 1],
    repeat: Infinity,
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative w-full overflow-hidden", className)}
    >
      {children}

      <div className="relative flex h-40 items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  opacity: 1,
                  clipPath: [
                    "inset(0 100% 0 0)",
                    "inset(0 100% 0 0)",
                    "inset(0 0% 0 0)",
                    "inset(0 0% 0 0)",
                    "inset(0 100% 0 0)",
                  ],
                }
          }
          transition={isMouseOver ? { duration: 0 } : autoTransition}
          className="absolute z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text py-10 text-center text-2xl font-bold text-transparent sm:text-4xl md:text-5xl"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={
            isMouseOver
              ? {
                  left: `${widthPercentage}%`,
                  rotate: `${rotateDeg}deg`,
                  opacity: widthPercentage > 0 ? 1 : 0,
                }
              : {
                  left: ["0%", "0%", "100%", "100%", "0%"],
                  opacity: [0, 0, 1, 0, 0],
                }
          }
          transition={isMouseOver ? { duration: 0 } : autoTransition}
          className="absolute z-50 h-40 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent will-change-transform"
        />

        <motion.div
          animate={
            isMouseOver
              ? { clipPath: `inset(0 0 0 ${widthPercentage}%)` }
              : {
                  clipPath: [
                    "inset(0 0 0 0%)",
                    "inset(0 0 0 0%)",
                    "inset(0 0 0 100%)",
                    "inset(0 0 0 100%)",
                    "inset(0 0 0 0%)",
                  ],
                }
          }
          transition={isMouseOver ? { duration: 0 } : autoTransition}
          className="w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
        >
          <p className="py-10 text-center text-2xl font-bold text-muted-foreground/50 sm:text-4xl md:text-5xl">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function TextRevealCardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mb-2 text-2xl font-bold text-foreground", className)}>
      {children}
    </h2>
  );
}

export function TextRevealCardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}
