"use client";

// Motion-only port of Animate UI's Radix Accordion in "keepRendered" mode
// (animate-ui.com, MIT): height + fade + slide with a top-down mask reveal.
// Closed panels stay in the DOM (crawlable) but are `inert`, so they are
// skipped by keyboard and screen readers until opened.
import { useId, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AnimatedAccordionProps {
  items: AccordionItemData[];
  /** Item open on first render; only one item is open at a time. */
  defaultOpenId?: string;
  className?: string;
}

const PANEL_TRANSITION = { duration: 0.35, ease: "easeInOut" } as const;
const MASK = "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))";

export function AnimatedAccordion({
  items,
  defaultOpenId,
  className,
}: AnimatedAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={cn(
              "rounded-xl border transition-colors duration-300",
              isOpen
                ? "border-primary/40 bg-card/80 shadow-lg shadow-primary/5"
                : "border-border bg-card/50 hover:border-primary/30"
            )}
          >
            <h2>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 rounded-xl p-5 text-left text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:text-lg"
              >
                <span>{item.title}</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors",
                    isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  )}
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
            </h2>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
              initial={false}
              animate={
                isOpen
                  ? { height: "auto", opacity: 1, y: 0, "--mask-stop": "100%" }
                  : { height: 0, opacity: 0, y: 12, "--mask-stop": "0%" }
              }
              transition={reduceMotion ? { duration: 0 } : PANEL_TRANSITION}
              style={{ overflow: "hidden", maskImage: MASK, WebkitMaskImage: MASK }}
            >
              <div className="px-5 pb-5 leading-relaxed text-muted-foreground">
                {item.content}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
