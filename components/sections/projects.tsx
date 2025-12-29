"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/layout/section-wrapper";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
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

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          A complete e-commerce platform built with Next.js, featuring product
          management, shopping cart, payment integration with Stripe, and order
          tracking.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Product catalog with search and filters</li>
          <li>User authentication and profiles</li>
          <li>Shopping cart with persistent storage</li>
          <li>Stripe payment integration</li>
          <li>Order history and tracking</li>
          <li>Admin dashboard for inventory management</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>MongoDB</TechTag>
          <TechTag>Stripe</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task manager",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prabakara-N",
    featured: true,
    content: (
      <div className="space-y-4">
        <p>
          A real-time collaborative task management application with
          drag-and-drop interface, team collaboration features, and notification
          system.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Drag-and-drop task organization</li>
          <li>Real-time collaboration with team members</li>
          <li>Push notifications for updates</li>
          <li>Task comments and attachments</li>
          <li>Progress tracking and analytics</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>React</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>Redux</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    title: "AI Chat Application",
    description: "Intelligent chatbot with OpenAI integration",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech: ["Next.js", "OpenAI API", "Vercel AI", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prabakara-N",
    featured: true,
    content: (
      <div className="space-y-4">
        <p>
          An AI-powered chat application using OpenAI GPT API. Features include
          conversation history, context awareness, and multiple AI personas.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Multiple AI personas with different personalities</li>
          <li>Conversation history with search</li>
          <li>Context-aware responses</li>
          <li>Code syntax highlighting</li>
          <li>Export conversations as PDF/Markdown</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>OpenAI API</TechTag>
          <TechTag>Vercel AI SDK</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio with stunning animations",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          A modern portfolio website featuring 5 stunning themes, smooth
          animations, and responsive design. Built with Next.js and Aceternity
          UI.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>5 beautiful dark theme options</li>
          <li>Smooth page transitions and animations</li>
          <li>Bento grid project showcase</li>
          <li>Fully responsive design</li>
          <li>SEO optimized</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>Framer Motion</TechTag>
          <TechTag>Tailwind CSS</TechTag>
          <TechTag>Aceternity UI</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "5",
    title: "Finance Dashboard",
    description: "Analytics dashboard for financial data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["React", "Chart.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          A comprehensive finance dashboard with interactive charts, real-time
          data visualization, and expense tracking features.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Interactive charts and graphs</li>
          <li>Real-time data updates</li>
          <li>Expense categorization</li>
          <li>Budget planning tools</li>
          <li>Export reports as PDF/CSV</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>React</TechTag>
          <TechTag>Chart.js</TechTag>
          <TechTag>Node.js</TechTag>
          <TechTag>MongoDB</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "6",
    title: "Social Media App",
    description: "Modern social platform with real-time features",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tech: ["Next.js", "Firebase", "tRPC", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prabakara-N",
    featured: true,
    content: (
      <div className="space-y-4">
        <p>
          A feature-rich social media application with posts, likes, comments,
          real-time notifications, and direct messaging.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>User profiles and followers</li>
          <li>Posts with images and videos</li>
          <li>Real-time notifications</li>
          <li>Direct messaging</li>
          <li>Hashtags and discover feed</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>tRPC</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
];

function ProjectCard({
  project,
  id,
  onClick,
}: {
  project: Project;
  id: string;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`card-${project.id}-${id}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative row-span-1 cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-lg",
        "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
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
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent" />
      </motion.div>

      {/* Tech Tags - visible by default, hidden on hover */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5"
        animate={{
          y: isHovered ? 20 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-full bg-muted/80 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            +{project.tech.length - 4}
          </span>
        )}
      </motion.div>

      {/* Title & Description - hidden by default, visible on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4"
        animate={{ y: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="rounded-lg bg-card/95 p-3 backdrop-blur-sm border border-border/50">
          <motion.h3
            layoutId={`title-${project.id}-${id}`}
            className="font-bold text-foreground"
          >
            {project.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${project.id}-${id}`}
            className="mt-1 text-sm text-muted-foreground line-clamp-2"
          >
            {project.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        title="Featured Projects"
        subtitle="A showcase of my recent work and side projects"
      />

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 h-full w-full bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-60 grid place-items-center">
            {/* Close button - mobile only, outside card */}
            <motion.button
              key={`button-close-${active.id}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-4 top-4 z-70 flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground md:hidden"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[550px] flex-col overflow-hidden bg-card md:h-fit md:max-h-[90%] md:rounded-3xl md:border md:border-border"
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <img
                  src={active.image}
                  alt={active.title}
                  className="h-56 w-full object-cover object-top md:rounded-t-3xl"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="font-bold text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-muted-foreground"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    {active.githubUrl && (
                      <a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {active.liveUrl && (
                      <motion.a
                        layoutId={`button-${active.id}-${id}`}
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-muted-foreground md:h-fit md:text-sm [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bento Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 auto-rows-[16rem] gap-4 md:auto-rows-[20rem] md:grid-cols-3">
        {projects.map((project) => (
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
