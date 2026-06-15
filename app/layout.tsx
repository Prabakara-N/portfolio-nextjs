import type { Metadata, Viewport } from "next";
import { Gabarito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemePreview } from "@/components/theme/theme-preview";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.prabakarandev.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prabakaran | Full Stack Developer Portfolio",
    template: "%s | Prabakaran",
  },
  description:
    "Prabakaran's Full Stack Developer portfolio. 2+ years building production web apps with Next.js, React, TypeScript, tRPC/oRPC & AI integration (OpenAI, Gemini). Founder of CrayonSparks AI SaaS. View projects & hire a skilled engineer.",
  keywords: [
    "developer portfolio",
    "software developer portfolio",
    "software engineer portfolio",
    "web developer portfolio",
    "frontend developer portfolio",
    "react developer portfolio",
    "full stack developer portfolio",
    "best developer portfolio",
    "Prabakaran",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Backend Engineer",
    "SDE",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "AI Developer",
    "AI SaaS Developer",
    "OpenAI Developer",
    "tRPC Developer",
    "oRPC Developer",
    "CrayonSparks",
    "hire web developer",
    "freelance developer India",
  ],
  authors: [{ name: "Prabakaran", url: siteUrl }],
  creator: "Prabakaran",
  publisher: "Prabakaran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prabakaran - Full Stack Developer Portfolio",
    title: "Prabakaran | Full Stack Developer Portfolio",
    description:
      "Full Stack Engineer building production web apps with Next.js, React, TypeScript, tRPC/oRPC & AI (OpenAI, Gemini). Founder of CrayonSparks AI SaaS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabakaran | Full Stack Developer Portfolio",
    description:
      "Full Stack Engineer — Next.js, React, TypeScript, tRPC/oRPC & AI integration. Founder of CrayonSparks AI SaaS. Hire a skilled engineer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1625" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Prabakaran",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  sameAs: [
    "https://github.com/Prabakara-N",
    "https://www.linkedin.com/in/prabakaran0208/",
    "https://www.instagram.com/vibe_coder_28/",
  ],
  jobTitle: "Full Stack Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Darthwares",
    url: "https://www.darthwares.com",
  },
  description:
    "Full Stack Software Engineer with 2+ years of experience building production web apps with Next.js, React, TypeScript and tRPC/oRPC. Founder & sole engineer of CrayonSparks, a live AI SaaS with a multi-provider AI pipeline (OpenAI, Gemini), subscription billing and cloud storage.",
  knowsAbout: [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "tRPC",
    "oRPC",
    "REST API",
    "Server Actions",
    "Firebase",
    "Firestore",
    "MongoDB",
    "Tailwind CSS",
    "OpenAI",
    "Google Gemini",
    "Vercel AI SDK",
    "AI Integration",
    "AI SaaS Development",
    "LemonSqueezy",
    "Cloudflare R2",
    "AWS S3",
    "Playwright",
    "Web Development",
    "Frontend Development",
    "Full Stack Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Prabakaran - Full Stack Developer Portfolio",
  description:
    "Prabakaran's Full Stack Developer portfolio. Building production web apps with Next.js, React, TypeScript, tRPC/oRPC and AI integration (OpenAI, Gemini). Founder of CrayonSparks AI SaaS.",
  author: { "@id": `${siteUrl}/#person` },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  url: siteUrl,
  name: "Prabakaran | Full Stack Developer Portfolio",
  description:
    "Prabakaran's portfolio showcasing Next.js, React, TypeScript, tRPC/oRPC and AI-powered projects including CrayonSparks, LeetCampus and LeetCV. Hire a skilled Full Stack Engineer.",
  mainEntity: { "@id": `${siteUrl}/#person` },
  isPartOf: { "@id": `${siteUrl}/#website` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Prabakaran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prabakaran M is a Full Stack Software Engineer with 2+ years of experience building production web applications with Next.js, React, TypeScript, Node.js and tRPC/oRPC. He is the founder and sole engineer of CrayonSparks, a live AI SaaS.",
      },
    },
    {
      "@type": "Question",
      name: "What does Prabakaran specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He specializes in building type-safe, AI-powered full-stack web applications — type-safe APIs (tRPC/oRPC), role-based access control, and AI integration using OpenAI and Google Gemini via the Vercel AI SDK, with billing (LemonSqueezy) and cloud storage (Cloudflare R2, AWS S3).",
      },
    },
    {
      "@type": "Question",
      name: "What is CrayonSparks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CrayonSparks is a live AI book SaaS that Prabakaran designed, built and deployed end-to-end as sole engineer. It turns prompts into print-ready story, coloring and activity books using a multi-provider AI pipeline (OpenAI + Gemini), with subscription billing and cloud storage. Built with Next.js 16, React 19, oRPC, Firebase, LemonSqueezy and Cloudflare R2.",
      },
    },
    {
      "@type": "Question",
      name: "Is Prabakaran available for hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Prabakaran is open to new full-time Full Stack / Software Engineer opportunities. He can be reached at prabakaran.m0208@gmail.com or via his portfolio at prabakarandev.in.",
      },
    },
  ],
};

const jsonLd = [personSchema, websiteSchema, profilePageSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/assets/favicons/favicon-32x32.png"
          sizes="any"
        />
        <link
          rel="icon"
          href="/assets/favicons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/assets/favicons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${gabarito.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="ocean-depths"
          enableSystem={false}
          storageKey="portfolio-theme"
          themes={[
            "ocean-depths",
            "cyber-neon",
            "navy-mirage",
            "midnight-aurora",
            "cosmic-purple",
            "arctic-frost",
          ]}
        >
          {children}
          <Analytics />
          <SpeedInsights />
          <ThemePreview />
        </ThemeProvider>
      </body>
    </html>
  );
}
