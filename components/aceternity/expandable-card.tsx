"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface CardData {
  id: string;
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: React.ReactNode;
}

interface ExpandableCardProps {
  cards: CardData[];
  className?: string;
}

export function ExpandableCard({ cards, className }: ExpandableCardProps) {
  const [active, setActive] = useState<CardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 h-full w-full bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[60] grid place-items-center p-4">
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card lg:hidden"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="flex h-full max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-card"
            >
              <motion.div layoutId={`image-${active.id}-${id}`} className="relative">
                <img
                  src={active.src}
                  alt={active.title}
                  className="h-64 w-full object-cover object-top sm:h-80"
                />
              </motion.div>

              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="flex items-start justify-between p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="text-xl font-bold text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-muted-foreground"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.id}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative flex-1 overflow-auto px-4 pb-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
        {cards.map((card) => (
          <motion.li
            layoutId={`card-${card.id}-${id}`}
            key={`card-${card.id}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex flex-col gap-4">
              <motion.div layoutId={`image-${card.id}-${id}`} className="overflow-hidden rounded-lg">
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-48 w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.h3
                  layoutId={`title-${card.id}-${id}`}
                  className="text-lg font-semibold text-foreground"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}-${id}`}
                  className="text-sm text-muted-foreground"
                >
                  {card.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${card.id}-${id}`}
                className="mt-auto w-full rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                View Details
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
