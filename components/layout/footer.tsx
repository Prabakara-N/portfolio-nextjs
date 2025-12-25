"use client";

import { Github, Linkedin, Instagram, Mail, Heart, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { socialLinks as links, personalInfo } from "@/constants/portfolio-data";

const socialLinks = [
  {
    name: "GitHub",
    href: links.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: links.linkedin,
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: links.instagram,
    icon: Instagram,
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gradient-primary">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with
            <Heart className="h-4 w-4 fill-destructive text-destructive" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
