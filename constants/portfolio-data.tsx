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
  ClaudeIcon,
  OpenAiIcon,
  GeminiIcon,
  VercelAiIcon,
  LemonSqueezyIcon,
  RazorpayIcon,
  CloudflareIcon,
  AwsIcon,
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
  bio: "Full-Stack Software Engineer (2+ yrs) building AI-powered products end-to-end with Next.js, React, TypeScript and Node.js. I shipped CrayonSparks — a live AI SaaS — solo, and contributed to products like LeetCV (150,000+ users). I care about clean architecture, type-safe APIs, and shipping fast.",
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

  // Backend & APIs
  { name: "Node.js", icon: NodeIcon, category: "backend" },
  { name: "Express.js", icon: ExpressIcon, category: "backend" },
  { name: "tRPC", icon: TrpcIcon, category: "backend" },
  { name: "oRPC", icon: OrpcIcon, category: "backend" },
  { name: "REST API", icon: ApiIcon, category: "backend" },
  { name: "Server Actions", icon: ServerActionsIcon, category: "backend" },
  { name: "Firebase Admin", icon: FirebaseIcon, category: "backend" },
  { name: "Webhooks", icon: WebhookIcon, category: "backend" },
  { name: "Sanity CMS", icon: SanityIcon, category: "backend" },

  // AI & Integrations
  { name: "OpenAI", icon: OpenAiIcon, category: "ai" },
  { name: "Google Gemini", icon: GeminiIcon, category: "ai" },
  { name: "Vercel AI SDK", icon: VercelAiIcon, category: "ai" },
  { name: "LemonSqueezy", icon: LemonSqueezyIcon, category: "ai" },
  { name: "Razorpay", icon: RazorpayIcon, category: "ai" },

  // Cloud & Storage
  { name: "Vercel", icon: VercelIcon, category: "cloud" },
  { name: "Netlify", icon: NetlifyIcon, category: "cloud" },
  { name: "Cloudflare R2", icon: CloudflareIcon, category: "cloud" },
  { name: "AWS S3", icon: AwsIcon, category: "cloud" },
  { name: "Cloudinary", icon: CloudinaryIcon, category: "cloud" },

  // Database
  { name: "MongoDB", icon: MongoDbIcon, category: "database" },
  { name: "Firebase / Firestore", icon: FirebaseIcon, category: "database" },

  // Tools
  { name: "VS Code", icon: VsCodeIcon, category: "tools" },
  { name: "Cursor", icon: CursorIcon, category: "tools" },
  { name: "Claude Code", icon: ClaudeIcon, category: "tools" },
  { name: "Postman", icon: PostmanIcon, category: "tools" },
  { name: "Jest", icon: JestIcon, category: "tools" },
  { name: "Playwright", icon: PlaywrightIcon, category: "tools" },
  { name: "Sentry", icon: SentryIcon, category: "tools" },

  // Version Control
  { name: "Git", icon: GitIcon, category: "versionControl" },
  { name: "GitHub", icon: GithubIcon, category: "versionControl" },
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
    title: "Shoekart",
    description:
      "E-commerce store with Firebase Auth - Personal Learning Project",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tech: ["React", "Tailwind CSS", "Firebase", "React Router"],
    liveUrl: "https://prabakaran-shoestore-ecommerce.netlify.app/",
    githubUrl: "https://github.com/Prabakara-N/react-shoe-ecommerce",
    content: {
      description:
        "A fully functional shoe e-commerce website built while learning React. Features complete user authentication, shopping cart, checkout flow, and order history - showcasing core React fundamentals.",
      keyContributions: [
        "Firebase Authentication with protected routes",
        "Shopping cart with add/remove functionality",
        "Checkout flow and order history",
        "User profile management",
        "Responsive design with cross-browser compatibility",
      ],
    },
  },
];

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
    title: "Software Engineer",
    company: "Darthwares",
    companyUrl: "https://www.darthwares.com",
    location: "Coimbatore, India · Remote",
    duration: "Jul 2023 - Present",
    type: "Full-time",
    description:
      "Building high-performance, scalable web applications end-to-end with a modern Next.js / TypeScript stack. Focused on clean architecture, type-safe APIs, role-based access control and AI-powered features across products like LeetCV (150,000+ users), and built backend services for LeetCampus, a placement platform serving 2,500+ concurrent students per placement drive.",
    products: [
      { name: "LeetCampus", url: "https://www.leetcampus.com/" },
      { name: "LeetCV", url: "https://www.leetcv.com/" },
      { name: "Ennuviz", url: "https://www.ennuviz.com/" },
    ],
    highlights: [
      "Contributed to LeetCV, an AI resume builder trusted by 150,000+ users worldwide",
      "Built backend services for LeetCampus, a placement platform serving 2,500+ concurrent students per placement drive",
      "Developed & optimized responsive, scalable apps with Next.js, TypeScript, Tailwind, Firebase & tRPC, improving page load speeds by 40%",
      "Implemented role-based access control, dynamic onboarding forms & real-time features for placement-drive and academic workflows",
      "Built AI-powered modules — resume generation, interactive tutoring & mock placement drives — increasing engagement by 35%",
      "Resolved production issues, improving platform stability by 20% and reducing downtime",
      "Designed reusable UI components & modular frontend architecture, accelerating development by 25%",
      "Refactored legacy code in Agile teams, cutting technical debt & complexity by 30%",
      "Established Jest unit testing for core workflows, improving reliability and reducing regressions",
    ],
  },
];
