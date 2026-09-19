import React from "react";
import {
  Cloud,
  Code2,
  Database,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  NextJsIcon,
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReduxIcon,
  RecoilIcon,
  JotaiIcon,
  ZustandIcon,
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
  SqlIcon,
  MySqlIcon,
  PostgreSqlIcon,
  VsCodeIcon,
  CursorIcon,
  PostmanIcon,
  VercelIcon,
  NetlifyIcon,
  JestIcon,
  GitIcon,
  GithubIcon,
  ClaudeIcon,
  OpenAiIcon,
  GeminiIcon,
  VercelAiIcon,
  LemonSqueezyIcon,
  RazorpayIcon,
  CloudflareIcon,
  AwsIcon,
  AwsEc2Icon,
  AwsAmplifyIcon,
  CloudinaryIcon,
  SentryIcon,
  OrpcIcon,
  ServerActionsIcon,
  WebhookIcon,
  PlaywrightIcon,
} from "@/components/icons/skill-icons";

export const personalInfo = {
  name: "Prabakaran",
  title: "Full Stack Developer",
  email: "prabakaran.m0208@gmail.com",
  location: "India",
  bio: "Full-Stack Software Engineer (3 yrs) building AI-powered products end-to-end with Next.js, React, TypeScript and Node.js. I shipped CrayonSparks — a live AI SaaS — solo, scaled LeetCampus's recruitment module to handle 2,600+ concurrent students for smooth campus placement drives, and contributed to products like LeetCV (150,000+ users). I care about clean architecture, type-safe APIs, and shipping fast.",
  resumeUrl: "/assets/Prabakaran_Resume.pdf",
  available: true,
};

export const socialLinks = {
  github: "https://github.com/Prabakara-N",
  linkedin: "https://www.linkedin.com/in/prabakaran0208/",
  instagram: "https://www.instagram.com/vibe_coder_28/",
};

export const roles = [
  "Full Stack Engineer",
  "AI SaaS Builder",
  "Next.js Developer",
  "Founder of CrayonSparks",
];

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  /** Brand color (hex) for the icon; generic skills fall back to the theme color. */
  color?: string;
  category:
  | "frontend"
  | "backend"
  | "ai"
  | "cloud"
  | "database"
  | "tools"
  | "versionControl";
}

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", icon: NextJsIcon, category: "frontend", color: "#000000" },
  { name: "React.js", icon: ReactIcon, category: "frontend", color: "#61DAFB" },
  { name: "JavaScript", icon: JavaScriptIcon, category: "frontend", color: "#F7DF1E" },
  { name: "TypeScript", icon: TypeScriptIcon, category: "frontend", color: "#3178C6" },
  { name: "Redux", icon: ReduxIcon, category: "frontend", color: "#764ABC" },
  { name: "Recoil", icon: RecoilIcon, category: "frontend", color: "#3578E5" },
  { name: "Jotai", icon: JotaiIcon, category: "frontend" },
  { name: "Zustand", icon: ZustandIcon, category: "frontend", color: "#AD9686" },
  { name: "HTML", icon: HtmlIcon, category: "frontend", color: "#E34F26" },
  { name: "CSS", icon: CssIcon, category: "frontend", color: "#1572B6" },
  { name: "Tailwind CSS", icon: TailwindIcon, category: "frontend", color: "#06B6D4" },
  { name: "Bootstrap", icon: BootstrapIcon, category: "frontend", color: "#7952B3" },
  { name: "SEO Optimization", icon: SeoIcon, category: "frontend" },
  { name: "State Management", icon: StateIcon, category: "frontend" },

  // Backend & APIs
  { name: "Node.js", icon: NodeIcon, category: "backend", color: "#5FA04E" },
  { name: "Express.js", icon: ExpressIcon, category: "backend", color: "#0A0A0A" },
  { name: "tRPC", icon: TrpcIcon, category: "backend", color: "#2596BE" },
  { name: "oRPC", icon: OrpcIcon, category: "backend" },
  { name: "REST API", icon: ApiIcon, category: "backend" },
  { name: "Server Actions", icon: ServerActionsIcon, category: "backend" },
  { name: "Firebase Admin", icon: FirebaseIcon, category: "backend", color: "#DD2C00" },
  { name: "Webhooks", icon: WebhookIcon, category: "backend" },
  { name: "Sanity CMS", icon: SanityIcon, category: "backend", color: "#0D0E12" },

  // AI & Integrations
  { name: "OpenAI", icon: OpenAiIcon, category: "ai", color: "#412991" },
  { name: "Google Gemini", icon: GeminiIcon, category: "ai", color: "#8E75B2" },
  { name: "Vercel AI SDK", icon: VercelAiIcon, category: "ai", color: "#000000" },
  { name: "LemonSqueezy", icon: LemonSqueezyIcon, category: "ai", color: "#FFC233" },
  { name: "Razorpay", icon: RazorpayIcon, category: "ai", color: "#0C2451" },

  // Cloud & Storage
  { name: "Vercel", icon: VercelIcon, category: "cloud", color: "#000000" },
  { name: "Netlify", icon: NetlifyIcon, category: "cloud", color: "#00C7B7" },
  { name: "Cloudflare R2", icon: CloudflareIcon, category: "cloud", color: "#F38020" },
  { name: "AWS S3", icon: AwsIcon, category: "cloud", color: "#569A31" },
  { name: "AWS EC2", icon: AwsEc2Icon, category: "cloud", color: "#FF9900" },
  { name: "AWS Amplify", icon: AwsAmplifyIcon, category: "cloud", color: "#FF9900" },
  { name: "Cloudinary", icon: CloudinaryIcon, category: "cloud", color: "#3448C5" },

  // Database
  { name: "Firebase / Firestore", icon: FirebaseIcon, category: "database", color: "#DD2C00" },
  { name: "MongoDB", icon: MongoDbIcon, category: "database", color: "#47A248" },
  { name: "SQL", icon: SqlIcon, category: "database", color: "#EAB308" },
  { name: "MySQL", icon: MySqlIcon, category: "database", color: "#4479A1" },
  { name: "PostgreSQL", icon: PostgreSqlIcon, category: "database", color: "#4169E1" },

  // Tools
  { name: "VS Code", icon: VsCodeIcon, category: "tools", color: "#007ACC" },
  { name: "Cursor", icon: CursorIcon, category: "tools", color: "#000000" },
  { name: "Claude Code", icon: ClaudeIcon, category: "tools", color: "#D97757" },
  { name: "Postman", icon: PostmanIcon, category: "tools", color: "#FF6C37" },
  { name: "Jest", icon: JestIcon, category: "tools", color: "#C21325" },
  { name: "Playwright", icon: PlaywrightIcon, category: "tools", color: "#2EAD33" },
  { name: "Sentry", icon: SentryIcon, category: "tools", color: "#362D59" },

  // Version Control
  { name: "Git", icon: GitIcon, category: "versionControl", color: "#F03C2E" },
  { name: "GitHub", icon: GithubIcon, category: "versionControl", color: "#181717" },
];

export type SkillCategory = Skill["category"];

export interface SkillNode {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Tailwind text-color class for the node's icon. */
  accent: string;
  /** Categories from `skills` that this node represents. */
  categories: SkillCategory[];
}

/**
 * The six nodes of the animated-beam skills graph. Tools and Version Control
 * share a node so the graph stays balanced, while `skills` keeps all seven
 * categories for the grid below it.
 */
export const skillNodes: SkillNode[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    accent: "text-sky-500",
    categories: ["frontend"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    accent: "text-emerald-500",
    categories: ["backend"],
  },
  {
    id: "ai",
    label: "AI",
    icon: Sparkles,
    accent: "text-fuchsia-500",
    categories: ["ai"],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    accent: "text-violet-500",
    categories: ["cloud"],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    accent: "text-amber-500",
    categories: ["database"],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    accent: "text-orange-500",
    categories: ["tools", "versionControl"],
  },
];

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  content: {
    description: string;
    keyContributions: string[];
    publishedBooks?: { name: string; url: string }[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CrayonSparks",
    description: "AI Book SaaS — Founder & Sole Engineer",
    image:
      "https://images.unsplash.com/photo-1716324339623-384495f47373?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBib29rfGVufDB8MHwwfHx8MA%3D%3D",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "oRPC",
      "Firebase",
      "OpenAI & Gemini",
      "LemonSqueezy",
      "Cloudflare R2",
    ],
    liveUrl: "https://www.crayonsparks.com/",
    featured: true,
    content: {
      description:
        "A live, full-stack AI SaaS I designed, built and deployed end-to-end as sole engineer — turning prompts into print-ready story, coloring and activity books. Owns architecture, backend, billing and deployment.",
      keyContributions: [
        "Engineered a multi-provider AI pipeline (OpenAI + Gemini via Vercel AI SDK) with async orchestration & error handling",
        "Built a type-safe backend with oRPC and Firebase Admin / Firestore (auth, security rules, composite-indexed queries)",
        "Integrated subscription billing & credit packs via LemonSqueezy webhooks with a metered credits system",
        "Implemented Cloudflare R2 storage with presigned URLs and PDF generation (pdf-lib) for print-ready KDP exports",
        "Books generated by the platform are published live on Amazon KDP (story, coloring & toddler activity titles) — validating the full prompt-to-print pipeline",
        "Added Sentry + Vercel Analytics observability and Playwright E2E tests",
      ],
      publishedBooks: [
        {
          name: "Penny Penguin Finds Her Shine (picture book)",
          url: "https://www.amazon.com/dp/B0H5WR1Z7Y",
        },
        {
          name: "The Race of Consistency (read-aloud story)",
          url: "https://www.amazon.com/dp/B0H532Q5B8",
        },
        {
          name: "Letter Fun — Letter Tracing (toddler activity)",
          url: "https://www.amazon.co.uk/dp/B0H4Q5398B",
        },
        {
          name: "Cute Wild Animals Coloring Book",
          url: "https://www.amazon.com/dp/B0H1ZVVG4Q",
        },
      ],
    },
  },
  {
    id: "2",
    title: "LeetCV",
    description: "AI Resume Builder · 150,000+ users worldwide - Built at Darthwares",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "tRPC",
      "Recoil",
      "Jest",
    ],
    liveUrl: "https://www.leetcv.com/",
    content: {
      description:
        "AI-powered resume builder trusted by 150,000+ users worldwide, with Leet Link for sharing resumes and portfolios. Improved mobile responsiveness by 30% and reduced re-renders by 40%.",
      keyContributions: [
        "Trusted by 150,000+ users worldwide",
        "Revamped core UI components for 30% better mobile usability",
        "Built Leet Link for resume & portfolio sharing",
        "Implemented telemetry and analytics dashboards",
        "Refactored legacy code, reducing re-renders by 40%",
        "Added Jest tests for stable UI behavior",
      ],
    },
  },
  {
    id: "3",
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
    content: {
      description:
        "Built backend services for LeetCampus, a placement platform serving 2,500+ concurrent students per placement drive. Added QR-code attendance and drive updates via email/SMS notifications, plus AI modules boosting engagement by 35%.",
      keyContributions: [
        "Built backend services for LeetCampus, a placement platform serving 2,500+ concurrent students per placement drive",
        "Built QR-code attendance and drive updates via email/SMS notifications, cutting manual work 80%",
        "Engineered role-based access for admins, professors & students",
        "Built Leet Tutor (AI slide generator) & Mock Placement Drive (+35% engagement)",
        "Optimized frontend architecture for 40% faster page loads",
      ],
    },
  },
  {
    id: "4",
    title: "Ennuviz",
    description:
      "Enterprise Digital Transformation Website - Client Project at Darthwares",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "SEO"],
    liveUrl: "https://www.ennuviz.com/",
    featured: true,
    content: {
      description:
        "Enterprise website for a digital transformation consulting firm specializing in business process automation and AI solutions. Built with CMS-driven architecture for seamless content management.",
      keyContributions: [
        "Developed responsive, brand-aligned pages with 20% better accessibility",
        "Built custom event registration system boosting onboarding by 35%",
        "Integrated spreadsheet automation, reducing manual reporting by 90%",
        "Optimized SEO practices for enhanced organic visibility",
        "Streamlined CMS-driven content workflows with Sanity",
      ],
    },
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Modern portfolio with stunning animations",
    image:
      "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRldmVsb3BtZW50fGVufDB8MHwwfHx8MA%3D%3D",
    tech: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Aceternity UI",
    ],
    liveUrl: "https://www.prabakarandev.in",
    githubUrl: "https://github.com/Prabakara-N/portfolio-nextjs",
    content: {
      description:
        "A modern portfolio website featuring 6 stunning themes, smooth animations, and responsive design. Built with Next.js and Aceternity UI.",
      keyContributions: [
        "6 beautiful dark theme options",
        "Smooth page transitions and animations",
        "Bento grid project showcase",
        "Fully responsive design",
        "SEO optimized",
      ],
    },
  },
  {
    id: "6",
    title: "A&K Clothing Store",
    description:
      "Full-stack Fashion E-commerce with Razorpay & Admin Dashboard - Personal Project",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Razorpay",
      "Zustand",
      "Tailwind CSS",
      "Resend",
    ],
    liveUrl: "https://ak-clothing-store.vercel.app/",
    featured: true,
    content: {
      description:
        "A production-grade fashion e-commerce platform built end-to-end with Next.js 16 and Supabase — featuring a complete storefront, secure Razorpay checkout, and a full admin dashboard for managing products, collections, inventory, orders and returns.",
      keyContributions: [
        "Built a complete storefront with collections, product variants, cart, wishlist and account management",
        "Integrated Razorpay payments with secure webhook-verified order processing",
        "Engineered an admin dashboard for products, collections, inventory, orders and returns",
        "Implemented Supabase auth, Postgres data layer and row-level security",
        "Added transactional emails (order/shipping updates) via Resend + React Email and order tracking webhooks",
        "Type-safe forms and server validation with Zod & React Hook Form, state managed with Zustand",
      ],
    },
  },
];

export interface ExperienceProduct {
  name: string;
  url: string;
  /** One-line summary of what the product is. */
  tagline?: string;
  techStack?: string[];
  /** Contributions specific to this product. */
  highlights?: string[];
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
    title: "Software Engineer",
    company: "Darthwares",
    companyUrl: "https://www.darthwares.com",
    location: "Coimbatore, India · Remote",
    duration: "Jul 2023 - Present",
    type: "Full-time",
    description:
      "Darthwares is an AI product studio. I own features end-to-end across its products — from client requirements and design through deployment.",
    products: [
      {
        name: "LeetCampus",
        url: "https://www.leetcampus.com/",
        tagline: "AI-powered college academic & placement platform",
        techStack: ["Next.js", "TypeScript", "Firebase Admin", "tRPC", "Tailwind CSS", "Jotai"],
        highlights: [
          "Engineered a scalable role-based access system for admins, professors and 2,500+ students, ensuring secure and efficient workflows",
          "Built AI-driven modules including Leet Tutor (AI slide generator) and Mock Placement Drive with automated AI-generated feedback, boosting engagement by 35%",
          "Built backend services and placement-drive workflows — QR-code attendance and drive updates via email/SMS notifications — serving 2,500+ concurrent students per placement drive and cutting manual work by 80%",
          "Implemented dynamic onboarding forms & real-time features for placement-drive and academic workflows",
        ],
      },
      {
        name: "LeetCV",
        url: "https://www.leetcv.com/",
        tagline: "AI-powered resume builder",
        techStack: ["Next.js", "TypeScript", "Firebase Admin", "tRPC", "Tailwind CSS", "Recoil"],
        highlights: [
          "Contributed to LeetCV, an AI-powered resume builder trusted by 150,000+ users worldwide",
          "Built Leet Link, a Linktree-style module enabling users to share resumes, portfolios and social profiles",
          "Refactored legacy code and optimized workflows, reducing component complexity and cutting re-render issues by 40%",
          "Implemented telemetry and analytics dashboards, improving visibility into user activity and enabling data-driven decisions",
        ],
      },
      {
        name: "Ennuviz",
        url: "https://www.ennuviz.com/",
        tagline: "Enterprise digital transformation website",
        techStack: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
        highlights: [
          "Built a custom event registration system for seamless data capture and user management",
          "Integrated spreadsheet automation to export registration data, reducing manual reporting work by 90%",
          "Optimized site structure, metadata and SEO, enhancing organic visibility and performance metrics",
        ],
      },
    ],
    highlights: [
      "Built and shipped three production web applications end-to-end with Next.js, TypeScript, Tailwind CSS, Firebase & tRPC — owning features from design through deployment",
      "Improved page load speeds by 40% and cut re-render issues by 40% by refactoring legacy code and optimizing rendering across production apps",
      "Automated result-report emails to admins with Vercel Cron Jobs, dispatching performance summaries once a mock placement drive or test completes",
      "Designed reusable UI components & modular frontend architecture, accelerating development by 25%",
      "Established Jest unit testing for core workflows, improving reliability and reducing regressions",
      "Resolved production issues, improving platform stability by 20% and reducing downtime",
      "Refactored legacy code in Agile teams, cutting technical debt & complexity by 30%",
      "Worked directly with clients and cross-functional stakeholders to turn requirements into technical specifications, delivering client-facing apps to spec and on schedule",
      "Performed code reviews and ensured smooth deployments across cross-functional releases",
    ],
  },
];
