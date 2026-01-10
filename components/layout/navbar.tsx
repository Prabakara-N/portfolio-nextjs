"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Code2, FolderKanban, Mail } from "lucide-react";
import { personalInfo } from "@/constants/portfolio-data";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail },
];

const INDICATOR_WIDTH = 24; // Fixed width for desktop indicator
const MOBILE_INDICATOR_SIZE = 60; // Fixed size for mobile indicator (square)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const clickedIndexRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Desktop refs
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  // Mobile refs
  const mobileNavContainerRef = useRef<HTMLDivElement>(null);
  const mobileNavItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [mobileIndicatorLeft, setMobileIndicatorLeft] = useState(0);

  // Calculate desktop indicator position
  const updateIndicatorPosition = useCallback(() => {
    const container = navContainerRef.current;
    const activeItem = navItemsRef.current[activeIndex];

    if (container && activeItem) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const itemCenter =
        itemRect.left - containerRect.left + itemRect.width / 2;
      setIndicatorLeft(itemCenter - INDICATOR_WIDTH / 2);
    }

    // Calculate mobile indicator position
    const mobileContainer = mobileNavContainerRef.current;
    const mobileActiveItem = mobileNavItemsRef.current[activeIndex];

    if (mobileContainer && mobileActiveItem) {
      const containerRect = mobileContainer.getBoundingClientRect();
      const itemRect = mobileActiveItem.getBoundingClientRect();
      const itemCenter =
        itemRect.left - containerRect.left + itemRect.width / 2;
      setMobileIndicatorLeft(itemCenter - MOBILE_INDICATOR_SIZE / 2);
    }
  }, [activeIndex]);

  useEffect(() => {
    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [updateIndicatorPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Don't update if user clicked a nav item recently
      if (clickedIndexRef.current !== null) return;

      // If at the very top, always show Home
      if (window.scrollY < 100) {
        setActiveIndex(0);
        return;
      }

      // Find the current section by checking which section's top has scrolled past
      // Iterate top to bottom, the last section that passes the threshold wins
      const sections = navLinks.map((link) => link.href.substring(1));
      const offset = 150; // Offset from top of viewport

      let activeIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section top has scrolled past the offset point, mark it as active
          if (rect.top <= offset) {
            activeIdx = i;
          }
        }
      }

      setActiveIndex(activeIdx);
    };

    // Run on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string, index: number) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Lock to clicked index immediately
    clickedIndexRef.current = index;
    setActiveIndex(index);

    // Scroll to section
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Re-enable scroll detection after scroll completes
    timeoutRef.current = setTimeout(() => {
      clickedIndexRef.current = null;
    }, 1000);
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 hidden transition-all duration-300 md:block",
          isScrolled
            ? "bg-card border-b border-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home", 0);
            }}
            className="text-xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.name}
          </motion.a>

          {/* Desktop Navigation */}
          <div ref={navContainerRef} className="relative flex items-center">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={(el) => {
                  navItemsRef.current[index] = el;
                }}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href, index);
                }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium",
                  "transition-colors duration-200 hover:text-foreground",
                  activeIndex === index
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            {/* Centered animated indicator */}
            <motion.div
              className="absolute bottom-0 h-0.5 rounded-full bg-primary"
              initial={false}
              animate={{
                left: indicatorLeft,
              }}
              style={{
                width: INDICATOR_WIDTH,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Bar (Logo only) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300 md:hidden",
          isScrolled
            ? "bg-card border-b border-border py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex max-w-7xl justify-between items-center px-4">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home", 0);
            }}
            className="text-lg font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.name}
          </motion.a>
          <Image
            src="/assets/favicons/android-chrome-192x192.png"
            alt="logo"
            width={20}
            height={20}
          />
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 md:hidden",
          "bg-card border-t border-border",
          "safe-area-bottom"
        )}
      >
        <div
          ref={mobileNavContainerRef}
          className="relative flex items-center justify-around px-2 py-2"
        >
          {/* Centered square indicator for mobile */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 rounded-xl bg-primary/10"
            initial={false}
            animate={{
              left: mobileIndicatorLeft,
            }}
            style={{
              width: MOBILE_INDICATOR_SIZE,
              height: MOBILE_INDICATOR_SIZE,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />

          {navLinks.map((link, index) => {
            const isActive = activeIndex === index;
            return (
              <a
                key={link.href}
                ref={(el) => {
                  mobileNavItemsRef.current[index] = el;
                }}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href, index);
                }}
                className={cn(
                  "relative z-10 flex flex-col items-center justify-center gap-1 w-14 h-14",
                  "transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Icon */}
                <link.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    isActive && "scale-110"
                  )}
                />

                {/* Label */}
                <span
                  className={cn(
                    "text-[10px] font-medium transition-all duration-200",
                    isActive && "font-semibold"
                  )}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
