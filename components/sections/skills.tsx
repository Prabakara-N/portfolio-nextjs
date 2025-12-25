"use client";

import { motion } from "motion/react";
import { SectionWrapper, SectionHeader } from "@/components/layout/section-wrapper";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "@/components/aceternity/text-reveal-card";
import { skills, Skill } from "@/constants/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Code2,
  Server,
  Wrench,
  Database,
  GitBranch,
} from "lucide-react";

const categoryInfo = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    description: "Building beautiful user interfaces",
  },
  backend: {
    title: "Backend",
    icon: Server,
    description: "Creating robust server solutions",
  },
  database: {
    title: "Database",
    icon: Database,
    description: "Managing data efficiently",
  },
  tools: {
    title: "Tools",
    icon: Wrench,
    description: "Essential development tools",
  },
  versionControl: {
    title: "Version Control",
    icon: GitBranch,
    description: "Code collaboration & versioning",
  },
};

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        "group flex items-center gap-2 rounded-xl px-4 py-2.5",
        "border border-border bg-card",
        "text-sm font-medium text-foreground",
        "transition-all hover:bg-muted hover:border-primary/50"
      )}
    >
      <IconComponent className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
      <span>{skill.name}</span>
    </motion.div>
  );
}

function SkillCategory({ category }: { category: keyof typeof categoryInfo }) {
  const info = categoryInfo[category];
  const categorySkills = skills.filter((s) => s.category === category);

  if (categorySkills.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-border bg-card/50 p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <info.icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{info.title}</h3>
          <p className="text-sm text-muted-foreground">{info.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categorySkills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-card/30">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="The tools and technologies I use to bring ideas to life"
      />

      {/* Text Reveal Card */}
      <div className="mb-12">
        <TextRevealCard
          text="Technologies I use"
          revealText="Mastering the craft"
          className="mx-auto max-w-3xl"
        >
          <TextRevealCardTitle>
            My Tech Stack
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Hover to reveal my passion for technology
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCategory category="frontend" />
        <SkillCategory category="backend" />
        <SkillCategory category="database" />
        <SkillCategory category="tools" />
        <SkillCategory category="versionControl" />
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground">
          Always learning and exploring new technologies to stay at the cutting edge
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
