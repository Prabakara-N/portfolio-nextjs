"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { themes } from "./theme-config";
import { Palette, X, Check } from "lucide-react";

export function ThemePreview() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6" ref={panelRef}>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border shadow-lg"
        style={{
          backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
        }}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <Palette className="h-5 w-5 text-white" />
        )}
      </motion.button>

      {/* Theme Preview Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-md w-56"
          >
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`relative h-12 w-12 rounded-full border-2 shadow-md ${
                      currentTheme.id === t.id
                        ? "border-white"
                        : "border-border/50"
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`,
                    }}
                  >
                    {currentTheme.id === t.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Check className="h-5 w-5 text-white drop-shadow-md" />
                      </motion.div>
                    )}
                  </div>
                  <span
                    className={`text-xs ${
                      currentTheme.id === t.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t.name.split(" ")[0]}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
