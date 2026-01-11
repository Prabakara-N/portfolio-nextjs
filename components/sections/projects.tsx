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

const ExpandedProjectModal = dynamic(
  () => import("@/components/sections/expanded-project-modal"),
  { ssr: false }
);

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
    title: "LeetCV",
    description: "AI-powered Resume Builder - Built at Darthwares",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "tRPC",
      "Recoil",
    ],
    liveUrl: "https://www.leetcv.com/",
    content: (
      <div className="space-y-4">
        <p>
          AI-powered resume builder with Leet Link for sharing resumes and
          portfolios. Built features that improved mobile responsiveness by 30%
          and reduced re-renders by 40%.
        </p>
        <p className="font-semibold text-foreground">Key Contributions:</p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Revamped core UI components for 30% better mobile usability</li>
          <li>Built Leet Link for resume & portfolio sharing</li>
          <li>Implemented telemetry and analytics dashboards</li>
          <li>Refactored legacy code, reducing re-renders by 40%</li>
          <li>Added Jest tests for stable UI behavior</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>Tailwind CSS</TechTag>
          <TechTag>tRPC</TechTag>
          <TechTag>Recoil</TechTag>
          <TechTag>Jest</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    title: "LeetCampus",
    description:
      "AI-powered College Academic & Placement Platform - Built at Darthwares",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "tRPC",
      "Jotai",
    ],
    liveUrl: "https://www.leetcampus.com/",
    featured: true,
    content: (
      <div className="space-y-4">
        <p>
          Scalable academic platform serving 2500+ students with role-based
          access. Built AI modules boosting engagement by 35% and automated
          workflows reducing manual tasks by 80%.
        </p>
        <p className="font-semibold text-foreground">Key Contributions:</p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            Engineered role-based access for admins, professors & students
          </li>
          <li>Built Leet Tutor (AI slide generator) & Mock Placement Drive</li>
          <li>Automated placement workflows with email & SMS triggers</li>
          <li>Developed dynamic portfolio & resume builder</li>
          <li>Optimized frontend architecture for 40% faster page loads</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>Tailwind CSS</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>tRPC</TechTag>
          <TechTag>Jotai</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    title: "Ennuviz",
    description:
      "Enterprise Digital Transformation Website - Client Project at Darthwares",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    liveUrl: "https://www.ennuviz.com/",
    featured: true,
    content: (
      <div className="space-y-4">
        <p>
          Enterprise website for a digital transformation consulting firm
          specializing in business process automation and AI solutions. Built
          with CMS-driven architecture for seamless content management.
        </p>
        <p className="font-semibold text-foreground">Key Contributions:</p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            Developed responsive, brand-aligned pages with 20% better
            accessibility
          </li>
          <li>
            Built custom event registration system boosting onboarding by 35%
          </li>
          <li>
            Integrated spreadsheet automation, reducing manual reporting by 90%
          </li>
          <li>Optimized SEO practices for enhanced organic visibility</li>
          <li>Streamlined CMS-driven content workflows with Sanity</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>Sanity CMS</TechTag>
          <TechTag>Tailwind CSS</TechTag>
          <TechTag>SEO</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio with stunning animations",
    image:
      "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRldmVsb3BtZW50fGVufDB8MHwwfHx8MA%3D%3D",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Aceternity UI"],
    liveUrl: "https://www.prabakarandev.in",
    githubUrl: "https://github.com/Prabakara-N/portfolio-nextjs",
    content: (
      <div className="space-y-4">
        <p>
          A modern portfolio website featuring 6 stunning themes, smooth
          animations, and responsive design. Built with Next.js and Aceternity
          UI.
        </p>
        <p className="font-semibold text-foreground">Key Features:</p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>6 beautiful dark theme options</li>
          <li>Smooth page transitions and animations</li>
          <li>Bento grid project showcase</li>
          <li>Fully responsive design</li>
          <li>SEO optimized</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>Framer Motion</TechTag>
          <TechTag>Tailwind CSS</TechTag>
          <TechTag>Aceternity UI</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "5",
    title: "Shoekart",
    description:
      "E-commerce store with Firebase Auth - Personal Learning Project",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tech: ["React", "Tailwind CSS", "Firebase", "React Router"],
    liveUrl: "https://prabakaran-shoestore-ecommerce.netlify.app/",
    githubUrl: "https://github.com/Prabakara-N/react-shoe-ecommerce",
    content: (
      <div className="space-y-4">
        <p>
          A fully functional shoe e-commerce website built while learning React.
          Features complete user authentication, shopping cart, checkout flow,
          and order history - showcasing core React fundamentals.
        </p>
        <p className="font-semibold text-foreground">Key Features:</p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Firebase Authentication with protected routes</li>
          <li>Shopping cart with add/remove functionality</li>
          <li>Checkout flow and order history</li>
          <li>User profile management</li>
          <li>Responsive design with cross-browser compatibility</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>React</TechTag>
          <TechTag>Tailwind CSS</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>React Router</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "6",
    title: "React Blog",
    description:
      "Full-featured blog platform with Firebase - Personal Learning Project",
    image:
      "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3VtZXxlbnwwfDB8MHx8fDA%3D",
    tech: ["React", "Firebase", "Bootstrap", "SASS"],
    liveUrl: "https://prabakaran-react-blog.netlify.app/",
    githubUrl: "https://github.com/Prabakara-N/react-blog-app",
    featured: true,
    content: (
      <div className="space-y-4">
        <p>
          A complete blog platform built while learning React. Features full
          CRUD operations for blogs, user authentication, commenting system, and
          all data persisted in Firebase.
        </p>
        <p className="font-semibold text-foreground">Key Features:</p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Firebase Auth, Database & Storage integration</li>
          <li>Create, edit, and delete blog posts</li>
          <li>User profiles and commenting system</li>
          <li>React Carousel for enhanced UX</li>
          <li>Toast notifications with Toastify</li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <TechTag>React</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>Bootstrap</TechTag>
          <TechTag>SASS</TechTag>
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
  const [active, setActive] = useState<Project | null>(null);
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
