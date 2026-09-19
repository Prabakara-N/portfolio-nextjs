"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LinkPreview } from "@/components/aceternity/link-preview";
import { experiences } from "@/constants/portfolio-data";
import { cn } from "@/lib/utils";
import { HighlightList, RoleHeader, SitePreview, TechStack } from "./shared";

const OVERVIEW = "Overview";

/**
 * md+ layout: vertical tabs (after brittanychiang.com v4), an overview plus
 * one tab per product. From lg up it widens and uses two columns.
 */
export function ExperienceTabs() {
  const experience = experiences[0];
  const products = experience.products ?? [];
  const tabs = [OVERVIEW, ...products.map((p) => p.name)];
  const [activeTab, setActiveTab] = useState(OVERVIEW);
  const product = products.find((p) => p.name === activeTab);

  return (
    <div className="mx-auto flex max-w-5xl gap-8 lg:max-w-6xl lg:gap-12 xl:max-w-7xl">
      <div
        role="tablist"
        aria-label="Experience"
        className="flex w-48 shrink-0 flex-col self-start border-l border-border"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            id={`exp-tab-${tab}`}
            aria-selected={tab === activeTab}
            aria-controls="exp-tab-panel"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "-ml-px whitespace-nowrap border-l-2 px-5 py-3 text-left font-mono text-sm transition-colors",
              tab === activeTab
                ? "border-primary bg-primary/10 text-primary"
                : "border-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="exp-tab-panel"
        aria-labelledby={`exp-tab-${activeTab}`}
        className="min-h-[420px] min-w-0 flex-1"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
          >
            {product ? (
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="space-y-5">
                  <LinkPreview
                    url={product.url}
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    {product.name} ↗
                  </LinkPreview>
                  {product.tagline && (
                    <p className="text-muted-foreground">{product.tagline}</p>
                  )}
                  {product.techStack && <TechStack items={product.techStack} />}
                  {product.highlights && (
                    <HighlightList items={product.highlights} />
                  )}
                </div>
                <SitePreview url={product.url} name={product.name} />
              </div>
            ) : (
              <div className="space-y-5">
                <RoleHeader experience={experience} />
                <p className="leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
                <HighlightList
                  items={experience.highlights}
                  className="lg:columns-2 lg:gap-10"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
