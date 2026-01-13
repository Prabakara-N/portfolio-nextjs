import React from "react";
import {
  NextJsIcon,
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReduxIcon,
  RecoilIcon,
  JotaiIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  BootstrapIcon,
  SeoIcon,
  StateIcon,
  NodeIcon,
  ExpressIcon,
  FirebaseIcon,
  TrpcIcon,
  ApiIcon,
  SanityIcon,
  MongoDbIcon,
  VsCodeIcon,
  CursorIcon,
  PostmanIcon,
  VercelIcon,
  NetlifyIcon,
  JestIcon,
  GitIcon,
  GithubIcon,
} from "@/components/icons/skill-icons";

export const personalInfo = {
  name: "Prabakaran",
  title: "Full Stack Developer",
  email: "prabakaran.m0208@gmail.com",
  location: "India",
  bio: "Results-driven Full Stack Developer with a strong focus on building scalable, user-centric web and mobile applications. Proficient in modern technologies including React.js, Next.js, Node.js, and cloud-based services like Firebase. Demonstrated ability to develop efficient, high-performance solutions in fast-paced, remote and collaborative team environments. Committed to continuous learning and delivering impact through clean, maintainable code.",
  resumeUrl: "/assets/Prabakaran_Resume.pdf",
  available: true,
};

export const socialLinks = {
  github: "https://github.com/Prabakara-N",
  linkedin: "https://www.linkedin.com/in/prabakaran0208/",
  instagram: "https://www.instagram.com/swag__55__/",
};

export const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Next.js Developer",
  "Frontend Engineer",
];

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: "frontend" | "backend" | "database" | "tools" | "versionControl";
}

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", icon: NextJsIcon, category: "frontend" },
  { name: "React.js", icon: ReactIcon, category: "frontend" },
  { name: "JavaScript", icon: JavaScriptIcon, category: "frontend" },
  { name: "TypeScript", icon: TypeScriptIcon, category: "frontend" },
  { name: "Redux", icon: ReduxIcon, category: "frontend" },
  { name: "Recoil", icon: RecoilIcon, category: "frontend" },
  { name: "Jotai", icon: JotaiIcon, category: "frontend" },
  { name: "HTML", icon: HtmlIcon, category: "frontend" },
  { name: "CSS", icon: CssIcon, category: "frontend" },
  { name: "Tailwind CSS", icon: TailwindIcon, category: "frontend" },
  { name: "Bootstrap", icon: BootstrapIcon, category: "frontend" },
  { name: "SEO Optimization", icon: SeoIcon, category: "frontend" },
  { name: "State Management", icon: StateIcon, category: "frontend" },

  // Backend
  { name: "Node.js", icon: NodeIcon, category: "backend" },
  { name: "Express.js", icon: ExpressIcon, category: "backend" },
  { name: "tRPC", icon: TrpcIcon, category: "backend" },
  { name: "REST API", icon: ApiIcon, category: "backend" },
  { name: "Sanity", icon: SanityIcon, category: "backend" },

  // Database
  { name: "MongoDB", icon: MongoDbIcon, category: "database" },
  { name: "Firebase", icon: FirebaseIcon, category: "database" },

  // Tools
  { name: "VS Code", icon: VsCodeIcon, category: "tools" },
  { name: "Cursor", icon: CursorIcon, category: "tools" },
  { name: "Postman", icon: PostmanIcon, category: "tools" },
  { name: "Vercel", icon: VercelIcon, category: "tools" },
  { name: "Netlify", icon: NetlifyIcon, category: "tools" },
  { name: "Jest", icon: JestIcon, category: "tools" },

  // Version Control
  { name: "Git", icon: GitIcon, category: "versionControl" },
  { name: "GitHub", icon: GithubIcon, category: "versionControl" },
];

// Helper component for tech tags
const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
    {children}
  </span>
);

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: React.ReactNode;
}

export const projects: ProjectData[] = [
  {
    id: "1",
    title: "LeetCV",
    description: "AI-powered Resume Builder - Built at Darthwares",
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ctaText: "Visit Site",
    ctaLink: "https://www.leetcv.com/",
    content: (
      <div className="space-y-4">
        <p>
          AI-powered resume builder with Leet Link for sharing resumes and
          portfolios. Revamped UI for 30% better mobile responsiveness, reduced
          re-renders by 40%, and implemented telemetry dashboards for
          data-driven decisions.
        </p>
        <div className="flex flex-wrap gap-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>tRPC</TechTag>
          <TechTag>Firebase</TechTag>
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
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    ctaText: "Visit Site",
    ctaLink: "https://www.leetcampus.com/",
    content: (
      <div className="space-y-4">
        <p>
          Scalable academic platform serving 1,000+ students with role-based
          access. Built AI modules like Leet Tutor and Mock Placement Drive,
          boosting engagement by 35%. Automated workflows reduced manual tasks
          by 80%.
        </p>
        <div className="flex flex-wrap gap-2">
          <TechTag>Next.js</TechTag>
          <TechTag>TypeScript</TechTag>
          <TechTag>tRPC</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>Jotai</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    title: "AI Chat Application",
    description: "Intelligent chatbot with OpenAI integration",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    ctaText: "View Project",
    ctaLink: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          An AI-powered chat application using OpenAI GPT API. Features include
          conversation history, context awareness, and multiple AI personas.
        </p>
        <div className="flex flex-wrap gap-2">
          <TechTag>Next.js</TechTag>
          <TechTag>OpenAI API</TechTag>
          <TechTag>Vercel AI</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio with stunning animations",
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    ctaText: "View Project",
    ctaLink: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          A modern portfolio website featuring 8 stunning themes, smooth
          animations, and responsive design. Built with Next.js and Aceternity
          UI.
        </p>
        <div className="flex flex-wrap gap-2">
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
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ctaText: "View Project",
    ctaLink: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          A comprehensive finance dashboard with interactive charts, real-time
          data visualization, and expense tracking features.
        </p>
        <div className="flex flex-wrap gap-2">
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
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    ctaText: "View Project",
    ctaLink: "https://github.com/Prabakara-N",
    content: (
      <div className="space-y-4">
        <p>
          A feature-rich social media application with posts, likes, comments,
          real-time notifications, and direct messaging.
        </p>
        <div className="flex flex-wrap gap-2">
          <TechTag>Next.js</TechTag>
          <TechTag>Firebase</TechTag>
          <TechTag>tRPC</TechTag>
          <TechTag>Tailwind CSS</TechTag>
        </div>
      </div>
    ),
  },
];

export const githubUsername = "Prabakara-N";

export interface ExperienceProduct {
  name: string;
  url: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  products?: ExperienceProduct[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Junior Software Engineer",
    company: "Darthwares",
    companyUrl: "https://www.darthwares.com",
    location: "Coimbatore, India · Remote",
    duration: "Jul 2023 - Present",
    type: "Full-time",
    description:
      "Driving frontend excellence at Darthwares, specializing in building high-performance web applications with modern tech stack. Passionate about creating seamless user experiences through clean architecture, type-safe APIs, and optimized real-time features.",
    products: [
      { name: "LeetCV", url: "https://www.leetcv.com/" },
      { name: "LeetCampus", url: "https://www.leetcampus.com/" },
    ],
    highlights: [
      "Engineered responsive UIs with Next.js & Tailwind CSS, achieving 40% faster page loads",
      "Implemented end-to-end type safety using tRPC, eliminating runtime API errors",
      "Architected real-time features with Firebase including auth, Firestore & cloud functions",
      "Optimized complex state management using Recoil and Jotai for scalable React apps",
      "Developed AI-powered modules for resume generation & interactive tutoring, boosting engagement by 35%",
      "Reduced production downtime by 20% through proactive debugging & performance monitoring",
      "Built a reusable component library that accelerated feature development by 25%",
      "Established testing standards with Jest, significantly reducing regression bugs",
      "Led code reviews and mentored peers in Agile workflows and best practices",
    ],
  },
];
