"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  isStatic?: boolean;
  imageSrc?: string;
};

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  // Handle click for mobile - show preview first
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile && !isOpen) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      open={isOpen}
      onOpenChange={(open) => setOpen(open)}
    >
      <HoverCardPrimitive.Trigger
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className={cn("text-primary", className)}
        asChild
      >
        <Link
          href={isMobile ? "#" : url}
          target={isMobile ? undefined : "_blank"}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="origin-(--radix-hover-card-content-transform-origin) z-50"
        side="top"
        align="center"
        sideOffset={10}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="rounded-xl shadow-xl"
              style={{ x: translateX }}
            >
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-xl border-2 border-transparent bg-card p-1 shadow-2xl hover:border-primary/50"
              >
                <Image
                  src={isStatic ? imageSrc : src}
                  width={width}
                  height={height}
                  quality={quality}
                  className="rounded-lg"
                  alt="preview image"
                  unoptimized
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
