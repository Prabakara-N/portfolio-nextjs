// JSON-LD structured data for search and answer engines. Every fact here
// should match the resume, the visible page and public/llms.txt. The FAQPage
// schema lives in lib/faq.ts next to the visible /faq content.

export const PREFERRED_JOB_LOCATIONS = [
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kochi",
];

export const CERTIFICATIONS = [
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/2cc52258bee5",
  },
  {
    name: "React (Basic)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/4706b3d3b597",
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/cee5197d9c73",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/prabakaran_55_/front-end-development-libraries",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/prabakaran_55_/javascript-algorithms-and-data-structures",
  },
  {
    name: "AWS Free Course",
    issuer: "Scaler Topics",
    url: "https://shorturl.at/iBmYX",
  },
];

const KNOWS_ABOUT = [
  // Languages
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SQL",
  // Frontend
  "Next.js",
  "React.js",
  "Redux",
  "Recoil",
  "Zustand",
  "Jotai",
  "Tailwind CSS",
  "SEO Optimization",
  // Backend & APIs
  "Node.js",
  "Express.js",
  "tRPC",
  "oRPC",
  "REST API",
  "Server Actions",
  "Firebase Admin",
  "Authentication & RBAC",
  "Webhooks",
  "Sanity CMS",
  "Vercel Cron Jobs",
  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase / Firestore",
  // Cloud, deployment & storage
  "Vercel",
  "Netlify",
  "AWS EC2",
  "AWS Amplify",
  "AWS S3",
  "Cloudflare R2",
  "Cloudinary",
  // AI & integrations
  "OpenAI",
  "Google Gemini",
  "Vercel AI SDK",
  "AI Integration",
  "LemonSqueezy",
  "Razorpay",
  // Testing & tooling
  "Jest",
  "Playwright",
  "Postman",
  "Sentry",
  "Git",
  "GitHub",
  "CI/CD",
  "Full Stack Development",
];

export const joinList = (items: string[]) =>
  `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

export function buildJsonLd(siteUrl: string) {
  const personId = `${siteUrl}/#person`;
  const darthwares = {
    "@type": "Organization",
    "@id": "https://www.darthwares.com/#organization",
    name: "Darthwares",
    url: "https://www.darthwares.com",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Prabakaran M",
    alternateName: "Prabakaran",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image.png`,
    email: "mailto:prabakaran.m0208@gmail.com",
    jobTitle: "Full Stack Software Engineer",
    worksFor: darthwares,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "PSG College of Technology",
    },
    hasCredential: CERTIFICATIONS.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certificate",
      url: cert.url,
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
    sameAs: [
      "https://github.com/Prabakara-N",
      "https://www.linkedin.com/in/prabakaran0208",
      "https://www.instagram.com/the_practical_dev",
    ],
    description:
      "Full Stack Software Engineer with 3 years of experience building production web apps with Next.js, React, TypeScript, Node.js and tRPC/oRPC. Founder & sole engineer of CrayonSparks, a live AI SaaS. Contributed to LeetCV (150,000+ users) and built backend services for LeetCampus (2,500+ concurrent students per placement drive).",
    knowsAbout: KNOWS_ABOUT,
  };

  const projects = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": "https://www.crayonsparks.com/#app",
      name: "CrayonSparks",
      url: "https://www.crayonsparks.com/",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description:
        "AI book SaaS that turns prompts into print-ready story, coloring and activity books, using a multi-provider AI pipeline (OpenAI + Google Gemini), subscription billing and cloud storage.",
      creator: { "@id": personId },
      author: { "@id": personId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": "https://www.leetcampus.com/#app",
      name: "LeetCampus",
      url: "https://www.leetcampus.com/",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "AI-powered college academic & placement platform serving 2,500+ concurrent students per placement drive.",
      producer: darthwares,
      contributor: { "@id": personId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": "https://www.leetcv.com/#app",
      name: "LeetCV",
      url: "https://www.leetcv.com/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI-powered resume builder trusted by 150,000+ users worldwide.",
      producer: darthwares,
      contributor: { "@id": personId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.ennuviz.com/#website",
      name: "Ennuviz",
      url: "https://www.ennuviz.com/",
      description: "Enterprise digital transformation website.",
      producer: darthwares,
      contributor: { "@id": personId },
    },
  ];

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Prabakaran M - Full Stack Software Engineer Portfolio",
    description:
      "Portfolio of Prabakaran M, a Full Stack Software Engineer building production web apps with Next.js, React, TypeScript, tRPC/oRPC and AI integration (OpenAI, Gemini).",
    author: { "@id": personId },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Prabakaran M | Full Stack Software Engineer Portfolio",
    description:
      "Projects and experience of Prabakaran M: CrayonSparks (AI SaaS), LeetCV (150,000+ users), LeetCampus (2,500+ concurrent students) and Ennuviz.",
    mainEntity: { "@id": personId },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  return [person, website, profilePage, ...projects];
}
