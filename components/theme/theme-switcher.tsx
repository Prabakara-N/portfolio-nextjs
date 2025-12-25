"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { themes, ThemeInfo } from "./theme-config";
import { Palette, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ThemeOption = ({ themeInfo }: { themeInfo: ThemeInfo }) => (
    <button
      onClick={() => {
        setTheme(themeInfo.id);
        setIsOpen(false);
      }}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
        "hover:bg-muted",
        theme === themeInfo.id && "bg-muted"
      )}
    >
      <div className="flex gap-1">
        <div
          className="h-4 w-4 rounded-full border border-border"
          style={{ backgroundColor: themeInfo.colors.primary }}
        />
        <div
          className="h-4 w-4 rounded-full border border-border"
          style={{ backgroundColor: themeInfo.colors.secondary }}
        />
      </div>
      <div className="flex-1 text-left">
        <div className="text-sm font-medium">{themeInfo.name}</div>
        <div className="text-xs text-muted-foreground">
          {themeInfo.description}
        </div>
      </div>
      {theme === themeInfo.id && <Check className="h-4 w-4 text-primary" />}
    </button>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2",
          "border border-border bg-card",
          "transition-all duration-200 hover:bg-muted"
        )}
        aria-label="Change theme"
      >
        <Palette className="h-5 w-5 text-primary" />
        <span className="hidden text-sm sm:inline">Theme</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-full z-50 mt-2",
            "w-72 rounded-xl p-2",
            "border border-border bg-card shadow-2xl",
            "animate-in fade-in-0 zoom-in-95 duration-200"
          )}
        >
          <div className="mb-2 px-2 py-1">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Choose Theme
            </span>
          </div>
          <div className="space-y-1">
            {themes.map((t) => (
              <ThemeOption key={t.id} themeInfo={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
