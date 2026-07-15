"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  personalInfo,
  skillNodes,
  type SkillCategory,
} from "@/constants/portfolio-data";

/** Smooth-scroll to a skill category card rendered in the grid below. */
function scrollToCategory(category: SkillCategory) {
  document
    .getElementById(`skill-category-${category}`)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
}

const Circle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 border-border bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SkillsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  // Left column (top → bottom).
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  // Right column (top → bottom).
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const [frontend, backend, ai, cloud, database, tools] = skillNodes;

  const node = (
    n: (typeof skillNodes)[number],
    ref: React.RefObject<HTMLDivElement | null>
  ) => (
    <Circle
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`Scroll to ${n.label} skills`}
      title={n.label}
      onClick={() => scrollToCategory(n.categories[0])}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToCategory(n.categories[0]);
        }
      }}
      className="cursor-pointer transition-transform hover:scale-110 hover:border-primary/60"
    >
      <n.icon className={cn("size-6", n.accent)} />
    </Circle>
  );

  return (
    <div
      className="relative flex h-[360px] w-full items-center justify-center p-4"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[260px] max-w-lg flex-col items-stretch justify-between gap-8">
        <div className="flex flex-row items-center justify-between">
          {node(frontend, div1Ref)}
          {node(cloud, div5Ref)}
        </div>
        <div className="flex flex-row items-center justify-between">
          {node(backend, div2Ref)}
          <Circle
            ref={avatarRef}
            className="size-20 border-primary/40 p-0 glow-primary"
          >
            <Image
              src="/assets/avatar.jpg"
              alt={personalInfo.name}
              width={80}
              height={80}
              className="size-full rounded-full object-cover"
            />
          </Circle>
          {node(database, div6Ref)}
        </div>
        <div className="flex flex-row items-center justify-between">
          {node(ai, div3Ref)}
          {node(tools, div7Ref)}
        </div>
      </div>

      {/* Left column beams flow into the avatar */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={avatarRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={avatarRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={avatarRef}
        curvature={75}
        endYOffset={10}
      />

      {/* Right column beams flow out of the avatar */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={avatarRef}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={avatarRef}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={avatarRef}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
