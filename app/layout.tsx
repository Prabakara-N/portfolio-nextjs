import type { Metadata, Viewport } from "next";
import { Gabarito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemePreview } from "@/components/theme/theme-preview";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prabakarandev.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prabakaran | Full Stack Developer Portfolio",
    template: "%s | Prabakaran",
  },
  description:
    "Prabakaran's Full Stack Developer portfolio. Expert in Next.js, React, Node.js & Firebase. View projects and hire a skilled developer for your team.",
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
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prabakaran - Full Stack Developer Portfolio",
    title: "Prabakaran | Full Stack Developer Portfolio",
    description:
      "Prabakaran's Full Stack Developer portfolio. Expert in Next.js, React, Node.js & Firebase. View projects and hire a skilled developer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabakaran | Full Stack Developer Portfolio",
    description:
      "Prabakaran's portfolio. Expert in Next.js, React, Node.js & Firebase. Hire a skilled Full Stack Developer.",
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
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
    "https://www.instagram.com/swag__55__/",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and Firebase. Building modern web applications.",
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "REST API",
    "tRPC",
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
    "Prabakaran's Full Stack Developer portfolio. Expert in Next.js, React, Node.js & Firebase.",
  author: { "@id": `${siteUrl}/#person` },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  url: siteUrl,
  name: "Prabakaran | Full Stack Developer Portfolio",
  description:
    "Prabakaran's portfolio showcasing Next.js, React, Node.js and Firebase projects. Hire a skilled Full Stack Developer.",
  mainEntity: { "@id": `${siteUrl}/#person` },
  isPartOf: { "@id": `${siteUrl}/#website` },
};

const jsonLd = [personSchema, websiteSchema, profilePageSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/favicons/favicon.ico" sizes="any" />
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
          defaultTheme="cyber-neon"
          enableSystem={false}
          storageKey="portfolio-theme"
          themes={[
            "cyber-neon",
            "midnight-aurora",
            "emerald-gold",
            "ocean-depths",
            "cosmic-purple",
          ]}
        >
          {children}
          <ThemePreview />
        </ThemeProvider>
      </body>
    </html>
  );
}
