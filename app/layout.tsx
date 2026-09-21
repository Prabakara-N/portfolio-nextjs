import type { Metadata, Viewport } from "next";
import { Gabarito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemePreview } from "@/components/theme/theme-preview";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  buildJsonLd,
  PREFERRED_JOB_LOCATIONS,
} from "@/lib/structured-data";

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
    default: "Prabakaran M — Full Stack Software Engineer (Next.js, React, AI)",
    template: "%s | Prabakaran M",
  },
  description: `Prabakaran M, Full Stack Software Engineer in Coimbatore with 3 years of experience in Next.js, React, TypeScript, Node.js & AI (OpenAI, Gemini). Founder of CrayonSparks AI SaaS; built for LeetCV (150,000+ users) & LeetCampus (2,500+ concurrent students). Open to roles in ${PREFERRED_JOB_LOCATIONS.join(", ")}.`,
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
  authors: [{ name: "Prabakaran M", url: siteUrl }],
  creator: "Prabakaran M",
  publisher: "Prabakaran M",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prabakaran M - Full Stack Software Engineer Portfolio",
    title: "Prabakaran M — Full Stack Software Engineer",
    description:
      "3 years building production web apps with Next.js, React, TypeScript & AI. Founder of CrayonSparks AI SaaS; built for LeetCV (150,000+ users) & LeetCampus (2,500+ concurrent students).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabakaran M — Full Stack Software Engineer",
    description:
      "Next.js, React, TypeScript & AI engineer. Founder of CrayonSparks AI SaaS; built for LeetCV (150,000+ users) & LeetCampus. Open to new roles.",
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

const jsonLd = buildJsonLd(siteUrl);

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
