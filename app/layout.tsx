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
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prabakarandev.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prabakaran | Full Stack Developer",
    template: "%s | Prabakaran",
  },
  description:
    "Results-driven Full Stack Developer specializing in React.js, Next.js, Node.js, and Firebase. Building scalable, user-centric web applications with modern technologies. View my portfolio and projects.",
  keywords: [
    "Prabakaran",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
    "India",
    "Remote Developer",
    "Firebase",
    "MongoDB",
    "Tailwind CSS",
    "REST API",
    "tRPC",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prabakaran - Full Stack Developer",
    title: "Prabakaran | Full Stack Developer",
    description:
      "Results-driven Full Stack Developer specializing in React.js, Next.js, Node.js, and Firebase. Building scalable, user-centric web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prabakaran - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabakaran | Full Stack Developer",
    description:
      "Results-driven Full Stack Developer specializing in React.js, Next.js, Node.js, and Firebase.",
    images: ["/og-image.png"],
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
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prabakaran",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
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
    "Results-driven Full Stack Developer with expertise in React.js, Next.js, Node.js, and Firebase.",
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
  ],
};

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
