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
  };
}

export const projects: Project[] = [
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
      "Jest",
    ],
    liveUrl: "https://www.leetcv.com/",
    content: {
      description:
        " AI-powered resume builder with Leet Link for sharing resumes and portfolios. Built features that improved mobile responsiveness by 30% and reduced re-renders by 40%.",
      keyContributions: [
        "Revamped core UI components for 30% better mobile usability",
        "Built Leet Link for resume & portfolio sharing",
        "Implemented telemetry and analytics dashboards",
        "Refactored legacy code, reducing re-renders by 40%",
        "Added Jest tests for stable UI behavior",
      ],
    },
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
    content: {
      description:
        "Scalable academic platform serving 2500+ students with role-based access. Built AI modules boosting engagement by 35% and automated workflows reducing manual tasks by 80%.",
      keyContributions: [
        "Engineered role-based access for admins, professors & students",
        "Built Leet Tutor (AI slide generator) & Mock Placement Drive",
        "Automated placement workflows with email & SMS triggers",
        "Developed dynamic portfolio & resume builder",
        "Optimized frontend architecture for 40% faster page loads",
      ],
    },
  },
  {
    id: "3",
    title: "Ennuviz",
    description:
      "Enterprise Digital Transformation Website - Client Project at Darthwares",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "SE0"],
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
    id: "4",
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
    id: "5",
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
    content: {
      description:
        "A complete blog platform built while learning React. Features full CRUD operations for blogs, user authentication, commenting system, and all data persisted in Firebase.",
      keyContributions: [
        "Firebase Auth, Database & Storage integration",
        "Create, edit, and delete blog posts",
        "User profiles and commenting system",
        "React Carousel for enhanced UX",
        "Toast notifications with Toastify",
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
