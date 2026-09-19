"use client";

import { motion } from "motion/react";
import { LinkPreview } from "@/components/aceternity/link-preview";
import { experiences } from "@/constants/portfolio-data";
import {
  HighlightList,
  RoleHeader,
  SitePreview,
  TechStack,
} from "./shared";

/** Phone layout: role card, then each product stacked with its live site preview. */
export function ExperienceShowcase() {
  const experience = experiences[0];
  const products = experience.products ?? [];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card/50 p-5">
        <RoleHeader experience={experience} />
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
      </div>

      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 py-4"
        >
          <span className="font-mono text-sm text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <LinkPreview
            url={product.url}
            className="w-fit text-2xl font-bold text-foreground hover:text-primary"
          >
            {product.name} ↗
          </LinkPreview>
          {product.tagline && (
            <p className="text-muted-foreground">{product.tagline}</p>
          )}
          {product.techStack && <TechStack items={product.techStack} />}
          {product.highlights && <HighlightList items={product.highlights} />}
          <SitePreview url={product.url} name={product.name} />
        </motion.div>
      ))}

      {experience.highlights.length > 0 && (
        <div className="rounded-2xl border border-border bg-card/50 p-5">
          <p className="mb-4 font-semibold text-foreground">Key Contributions</p>
          <HighlightList items={experience.highlights} />
        </div>
      )}
    </div>
  );
}
