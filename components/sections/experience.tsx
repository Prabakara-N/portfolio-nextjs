"use client";

import { motion } from "motion/react";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/layout/section-wrapper";
import { LinkPreview } from "@/components/aceternity/link-preview";
import { experiences } from "@/constants/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  MapPin,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Box,
} from "lucide-react";

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Main Card */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "border border-border bg-card/50",
          "transition-all duration-300",
          "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        )}
      >
        {/* Gradient Accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary/50" />

        <div className="p-6 pl-8 md:p-8 md:pl-10">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="rounded-lg bg-primary/10 p-2"
                >
                  <Briefcase className="h-5 w-5 text-primary" />
                </motion.div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {experience.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                {experience.title}
              </h3>
              <div className="text-lg font-medium">
                <LinkPreview
                  url={experience.companyUrl}
                  className="text-primary hover:underline"
                >
                  {experience.company}
                </LinkPreview>
              </div>
            </div>

            {/* Duration Badge */}
            <div className="flex flex-col items-start gap-2 text-sm text-muted-foreground md:items-end">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 leading-relaxed text-muted-foreground">
            {experience.description.split(experience.company).map((part, idx, arr) => (
              <span key={idx}>
                {part}
                {idx < arr.length - 1 && (
                  <LinkPreview
                    url={experience.companyUrl}
                    className="font-bold text-primary hover:underline"
                  >
                    {experience.company}
                  </LinkPreview>
                )}
              </span>
            ))}
          </div>

          {/* Products */}
          {experience.products && experience.products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Box className="h-4 w-4 text-primary" />
                <p className="font-semibold text-foreground">Products Built</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {experience.products.map((product, idx) => (
                  <LinkPreview
                    key={idx}
                    url={product.url}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
                      "bg-primary/10 font-medium text-primary",
                      "border border-primary/20 hover:border-primary/50",
                      "transition-all hover:bg-primary/20"
                    )}
                  >
                    {product.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </LinkPreview>
                ))}
              </div>
            </motion.div>
          )}

          {/* Highlights Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="font-semibold text-foreground">Key Contributions</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {experience.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={cn(
                    "flex items-start gap-3 rounded-lg p-3",
                    "bg-muted/30 transition-colors hover:bg-muted/50"
                  )}
                >
                  <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-card/30">
      <SectionHeader
        title="Professional Experience"
        subtitle="Building impactful solutions and driving results through code"
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
