"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/layout/section-wrapper";
import {
  HeroHighlight,
  Highlight,
} from "@/components/aceternity/hero-highlight";
import { StatefulButton } from "@/components/ui/stateful-button";
import { personalInfo, socialLinks } from "@/constants/portfolio-data";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

const socials = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
];

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formState.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false; // Validation failed - button stays idle
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setFormState({ name: "", email: "", message: "" });
    setErrors({});
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind? Let's work together!"
      />

      {/* Hero Highlight CTA */}
      <div className="mb-12">
        <HeroHighlight containerClassName="rounded-xl border border-border">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl px-4 py-12 text-center text-2xl font-bold text-foreground md:text-4xl"
          >
            I&apos;m always open to discussing new projects,{" "}
            <Highlight>creative ideas</Highlight> or opportunities to be part of
            your vision.
          </motion.h3>
        </HeroHighlight>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-foreground">
            Contact Information
          </h3>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <p className="mb-4 text-sm text-muted-foreground">
              Connect with me on social media
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "rounded-lg p-3",
                    "border border-border bg-card",
                    "text-muted-foreground transition-all",
                    "hover:border-primary hover:text-primary"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Send a Message
            </h3>

            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-muted-foreground"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={cn(
                  "w-full rounded-lg px-4 py-3",
                  "border bg-background",
                  "text-foreground placeholder:text-muted-foreground/50",
                  "transition-colors focus:outline-none focus:ring-1",
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-border focus:border-primary focus:ring-primary"
                )}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-muted-foreground"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={cn(
                  "w-full rounded-lg px-4 py-3",
                  "border bg-background",
                  "text-foreground placeholder:text-muted-foreground/50",
                  "transition-colors focus:outline-none focus:ring-1",
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-border focus:border-primary focus:ring-primary"
                )}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-muted-foreground"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className={cn(
                  "w-full resize-none rounded-lg px-4 py-3",
                  "border bg-background",
                  "text-foreground placeholder:text-muted-foreground/50",
                  "transition-colors focus:outline-none focus:ring-1",
                  errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-border focus:border-primary focus:ring-primary"
                )}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit Button with Stateful Animation */}
            <StatefulButton
              onClick={handleSubmit}
              loadingText="Sending..."
              successText="Message Sent!"
              successDuration={3000}
            >
              <Send className="h-5 w-5" />
              Send Message
            </StatefulButton>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
