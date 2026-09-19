"use client";

import {
  SectionWrapper,
  SectionHeader,
} from "@/components/layout/section-wrapper";
import { ExperienceShowcase } from "@/components/sections/experience-parts/experience-showcase";
import { ExperienceTabs } from "@/components/sections/experience-parts/experience-tabs";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-card/30">
      <SectionHeader
        title="Professional Experience"
        subtitle="Building impactful solutions and driving results through code"
      />

      {/* Phones and small screens: stacked product showcase */}
      <div className="md:hidden">
        <ExperienceShowcase />
      </div>

      {/* md and up: tabs */}
      <div className="hidden md:block">
        <ExperienceTabs />
      </div>
    </SectionWrapper>
  );
}
