"use client";

import { useId, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/layout/section-wrapper";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/constants/portfolio-data";

const ExpandedProjectModal = dynamic(
  () => import("@/components/sections/expanded-project-modal"),
  { ssr: false }
);

interface ProjectWithContent {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  content: React.ReactNode;
}

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
    {children}
  </span>
);

// Transform projects from data to include JSX content
const projectsWithContent: ProjectWithContent[] = projects.map((project) => ({
  ...project,
  content: (
    <div className="space-y-4">
      <p>{project.content.description}</p>
      <p className="font-semibold text-foreground">Key Contributions:</p>
      <ul className="list-inside list-disc space-y-1 text-muted-foreground">
        {project.content.keyContributions.map((contribution, index) => (
          <li key={index}>{contribution}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
    </div>
  ),
}));

function ProjectCard({
  project,
  id,
  onClick,
}: {
  project: ProjectWithContent;
  id: string;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${project.id}-${id}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative row-span-1 cursor-pointer overflow-hidden rounded-xl border-2 border-transparent bg-card shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20",
        project.featured && "md:col-span-2"
      )}
    >
      {/* Image */}
      <motion.div
        layoutId={`image-${project.id}-${id}`}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent" />
      </motion.div>

      {/* Tech Tags - visible by default, hidden on hover */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5"
        animate={{
          y: isHovered ? 8 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="rounded-full bg-muted/80 px-2.5 py-1 text-xs font-medium text-muted-foreground">
            +{project.tech.length - 3}
          </span>
        )}
      </motion.div>

      {/* Title & Description - hidden by default, visible on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4"
        animate={{
          y: isHovered ? 0 : 20,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="rounded-lg bg-card/95 p-3 border border-border/50 backdrop-blur-sm">
          <motion.h3
            layoutId={`title-${project.id}-${id}`}
            className="font-bold text-foreground"
          >
            {project.title}
          </motion.h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectWithContent | null>(null);
  const id = useId();

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        title="Featured Projects"
        subtitle="A showcase of my recent work and side projects"
      />

      {/* Dynamically imported modal */}
      <ExpandedProjectModal
        active={active}
        setActive={setActive}
        layoutId={id}
      />

      {/* Bento Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 auto-rows-[16rem] gap-4 md:auto-rows-[20rem] md:grid-cols-3">
        {projectsWithContent.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            id={id}
            onClick={() => setActive(project)}
          />
        ))}
      </div>

      {/* View More Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/Prabakara-N"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
          View more on GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
