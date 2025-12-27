"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Home, Code2, FolderKanban, Mail } from "lucide-react";
import { personalInfo } from "@/constants/portfolio-data";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  // { href: "#github", label: "Github", icon: GithubIcon },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(href);
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
              scrollToSection("#home");
            }}
            className="text-xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.name}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium",
                  "transition-colors hover:text-foreground",
                  activeSection === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
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
              scrollToSection("#home");
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
        <div className="flex items-center justify-around px-2 py-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1 rounded-xl w-17 h-14",
                  "transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileTab"
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <link.icon
                  className={cn(
                    "relative z-10 h-5 w-5 transition-transform",
                    isActive && "scale-110"
                  )}
                />

                {/* Label */}
                <span
                  className={cn(
                    "relative z-10 text-[10px] font-medium",
                    isActive && "font-semibold"
                  )}
                >
                  {link.label}
                </span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 h-1 w-1 rounded-full bg-primary"
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
