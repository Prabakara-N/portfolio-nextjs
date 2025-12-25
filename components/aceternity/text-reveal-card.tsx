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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-card p-8",
        className
      )}
    >
      {children}

      <div className="relative flex h-40 items-center overflow-hidden">
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
                  clipPath: "inset(0 100% 0 0)",
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 bg-card will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text py-10 text-2xl font-bold text-transparent sm:text-4xl md:text-5xl"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-40 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent will-change-transform"
        />

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="py-10 text-2xl font-bold text-muted-foreground/50 sm:text-4xl md:text-5xl">
            {text}
          </p>
          <motion.div
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute inset-0 z-10 h-full w-full"
          />
        </div>
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
