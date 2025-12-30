"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  content: React.ReactNode;
}

interface ExpandedProjectModalProps {
  active: Project | null;
  setActive: (project: Project | null) => void;
  layoutId: string;
}

export function ExpandedProjectModal({
  active,
  setActive,
  layoutId,
}: ExpandedProjectModalProps) {
  const ref = useRef<HTMLDivElement>(null);

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
  }, [active, setActive]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 h-full w-full bg-black/50 md:backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-60 grid place-items-center">
            {/* Close button - mobile only */}
            <motion.button
              key={`button-close-${active.id}-${layoutId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-4 top-4 z-70 flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground md:hidden"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${layoutId}`}
              ref={ref}
              className="flex h-full w-full max-w-[550px] flex-col overflow-hidden bg-card md:h-fit md:max-h-[90%] md:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.id}-${layoutId}`}>
                <Image
                  src={active.image}
                  alt={active.title}
                  width={550}
                  height={550}
                  className="h-56 w-full object-cover object-top md:rounded-t-3xl"
                />
              </motion.div>

              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="flex shrink-0 items-start justify-between gap-4 p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}-${layoutId}`}
                      className="font-bold text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <p className="text-muted-foreground">
                      {active.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    {active.githubUrl && (
                      <a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {active.liveUrl && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative flex-1 overflow-auto px-4 pb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ExpandedProjectModal;
