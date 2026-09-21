import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { AnimatedAccordion } from "@/components/ui/animated-accordion";
import { personalInfo } from "@/constants/portfolio-data";
import { FAQ_ITEMS, buildFaqJsonLd, type FaqItem } from "@/lib/faq";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.prabakarandev.in";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Quick answers about Prabakaran M, Full Stack Software Engineer in Coimbatore: tech stack, work at Darthwares, CrayonSparks, certifications and availability for roles in Bangalore, Chennai, Hyderabad and Kochi.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq" },
};

function FaqAnswer({ item }: { item: FaqItem }) {
  return (
    <div className="space-y-3">
      <p>{item.answer}</p>
      {item.points && (
        <ul className="space-y-2">
          {item.points.map((point) => (
            <li key={point.text} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                {point.label && (
                  <strong className="font-semibold text-foreground">
                    {point.label}
                    {point.href ? " · " : ": "}
                  </strong>
                )}
                {point.href ? (
                  <a
                    href={point.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {point.text}
                  </a>
                ) : (
                  point.text
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
      {item.outro && <p>{item.outro}</p>}
    </div>
  );
}

export default function FaqPage() {
  const faqJsonLd = buildFaqJsonLd(`${siteUrl}/faq`);

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-gradient-primary">
            {personalInfo.name}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </header>

      <section className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h1 className="animate-in fade-in slide-in-from-bottom-4 text-center text-3xl font-bold duration-700 sm:text-4xl md:text-5xl">
          <span className="text-gradient-primary">Frequently Asked Questions</span>
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-4 mt-4 text-center text-lg text-muted-foreground delay-150 duration-700 fill-mode-both">
          Quick answers for recruiters and hiring teams
        </p>

        <AnimatedAccordion
          className="mt-12"
          defaultOpenId="faq-0"
          items={FAQ_ITEMS.map((item, index) => ({
            id: `faq-${index}`,
            title: item.question,
            content: <FaqAnswer item={item} />,
          }))}
        />

        <div className="mt-12 rounded-2xl border border-border bg-card/50 p-6 text-center">
          <p className="font-semibold text-foreground">Have another question?</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
