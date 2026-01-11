"use client";

import { motion } from "motion/react";
import { FlipWords } from "@/components/aceternity/flip-words";
import { Spotlight } from "@/components/aceternity/spotlight";
import { roles, personalInfo, socialLinks } from "@/constants/portfolio-data";
import { Github, Linkedin, Instagram, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "Visit my GitHub profile" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "Connect on LinkedIn" },
  { icon: Instagram, href: socialLinks.instagram, label: "Follow on Instagram" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none",
          "bg-grid-pattern opacity-30"
        )}
      />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg text-muted-foreground"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient-primary">{personalInfo.name}</span>
            <span className="sr-only"> - Full Stack Developer Portfolio</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 text-xl text-muted-foreground sm:text-2xl md:text-3xl"
            aria-hidden="true"
          >
            I&apos;m a <FlipWords words={roles} className="text-primary" />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-3",
                "bg-primary text-primary-foreground",
                "font-medium shadow-lg transition-all",
                "glow-primary hover:shadow-xl"
              )}
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-3",
                "border border-border bg-card",
                "font-medium transition-all hover:bg-muted"
              )}
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-4"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "rounded-full p-3",
                  "border border-border bg-card",
                  "text-muted-foreground transition-all",
                  "hover:border-primary hover:text-primary hover:glow-primary"
                )}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Availability Badge */}
          {personalInfo.available && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12 flex items-center justify-center gap-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                Available for new opportunities
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
