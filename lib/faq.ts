// Single source for the /faq page and its FAQPage JSON-LD, so the visible
// answers and the structured data can never drift apart.
import {
  CERTIFICATIONS,
  PREFERRED_JOB_LOCATIONS,
  joinList,
} from "@/lib/structured-data";

export interface FaqPoint {
  /** Bold lead-in, e.g. "Frontend". */
  label?: string;
  text: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  /** Opening sentence(s); shown before any bullet points. */
  answer: string;
  points?: FaqPoint[];
  /** Closing sentence shown after the bullet points. */
  outro?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who is Prabakaran M?",
    answer:
      "Prabakaran M is a Full Stack Software Engineer based in Coimbatore, India, with 3 years of experience building production web applications with Next.js, React, TypeScript, Node.js and tRPC/oRPC. He is the founder and sole engineer of CrayonSparks, a live AI SaaS, and works as a Software Engineer at Darthwares.",
  },
  {
    question: "What is Prabakaran M's tech stack?",
    answer: "He works across the full stack:",
    points: [
      { label: "Languages", text: "TypeScript, JavaScript (ES6+), SQL" },
      {
        label: "Frontend",
        text: "Next.js, React, Tailwind CSS, Redux, Zustand, Jotai, Recoil",
      },
      {
        label: "Backend & APIs",
        text: "Node.js, Express, tRPC, oRPC, REST APIs, Server Actions",
      },
      {
        label: "Databases",
        text: "PostgreSQL, MySQL, MongoDB, Firebase / Firestore",
      },
      {
        label: "Cloud",
        text: "Vercel, AWS (EC2, Amplify, S3), Cloudflare R2, Netlify",
      },
      { label: "AI", text: "OpenAI, Google Gemini, Vercel AI SDK" },
      {
        label: "Testing & tooling",
        text: "Jest, Playwright, Postman, Sentry, Git / GitHub",
      },
    ],
  },
  {
    question: "What has Prabakaran M built at Darthwares?",
    answer:
      "Since July 2023 he has built and shipped three production web apps end-to-end:",
    points: [
      {
        label: "LeetCampus",
        text: "backend services, role-based access and placement-drive workflows for 2,500+ concurrent students per placement drive, cutting manual work by 80%",
      },
      {
        label: "LeetCV",
        text: "features for an AI resume builder with 150,000+ users, including Leet Link and analytics dashboards",
      },
      {
        label: "Ennuviz",
        text: "a custom event registration system with spreadsheet automation, reducing manual reporting by 90%",
      },
      {
        label: "Across products",
        text: "40% faster page loads and 40% fewer re-render issues",
      },
    ],
  },
  {
    question: "What is CrayonSparks?",
    answer:
      "CrayonSparks is a live AI book SaaS that Prabakaran M designed, built and deployed end-to-end as sole engineer. It turns prompts into print-ready story, coloring and activity books.",
    points: [
      {
        label: "AI pipeline",
        text: "multi-provider image and text generation with OpenAI + Google Gemini via the Vercel AI SDK",
      },
      {
        label: "Backend",
        text: "type-safe oRPC API with Firebase Admin / Firestore and Cloudflare R2 storage",
      },
      {
        label: "Publishing",
        text: "print-ready PDF exports for Amazon KDP, with titles published live",
      },
      {
        label: "Billing",
        text: "subscriptions and a metered credits system via LemonSqueezy",
      },
    ],
    outro: "Built with Next.js 16, React 19 and TypeScript.",
  },
  {
    question: "What are Prabakaran M's education and certifications?",
    answer:
      "He holds a BE in Metallurgical Engineering from PSG College of Technology (2018–2022). His certifications:",
    points: CERTIFICATIONS.map((cert) => ({
      label: cert.issuer,
      text: cert.name,
      href: cert.url,
    })),
  },
  {
    question: "Is Prabakaran M available for hire?",
    answer:
      "Yes. He is open to new full-time Full Stack / Software Engineer roles in:",
    points: PREFERRED_JOB_LOCATIONS.map((city) => ({ text: city })),
    outro:
      "He is based in Coimbatore and can be reached at prabakaran.m0208@gmail.com.",
  },
];

/** Flattens an answer (intro, bullet points, outro) into one plain-text string. */
export function faqAnswerText({ answer, points, outro }: FaqItem): string {
  const list = points?.map((p) => (p.label ? `${p.label}: ${p.text}` : p.text));
  return [answer, list && `${joinList(list)}.`, outro]
    .filter(Boolean)
    .join(" ");
}

export function buildFaqJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
    })),
  };
}
