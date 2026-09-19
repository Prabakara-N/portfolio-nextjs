"use client";

import Image from "next/image";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { LinkPreview } from "@/components/aceternity/link-preview";
import type { Experience } from "@/constants/portfolio-data";
import { siteScreenshotUrl } from "@/lib/site-screenshot";
import { cn } from "@/lib/utils";

export function RoleHeader({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-primary/10 p-2">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {experience.type}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-foreground md:text-3xl">
        {experience.title}{" "}
        <LinkPreview
          url={experience.companyUrl}
          className="text-primary hover:underline"
        >
          @ {experience.company}
        </LinkPreview>
      </h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {experience.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          {experience.location}
        </span>
      </div>
    </div>
  );
}

/** Large website screenshot framed like a browser window, linking to the site. */
export function SitePreview({
  url,
  name,
  className,
}: {
  url: string;
  name: string;
  className?: string;
}) {
  const host = new URL(url).hostname.replace(/^www\./, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
      className={cn(
        "group/preview block overflow-hidden rounded-xl border border-border bg-card shadow-lg",
        "transition-colors hover:border-primary/50",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/40 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
          {host}
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-muted/30">
        <Image
          src={siteScreenshotUrl(url)}
          alt={`${name} website preview`}
          width={1280}
          height={800}
          unoptimized
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.02]"
        />
      </div>
    </a>
  );
}

export function HighlightList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item}
          // Bottom margin (not space-y) and no column breaks, so the list can
          // also be laid out in CSS columns.
          className="mb-2 flex break-inside-avoid gap-3 text-sm leading-relaxed text-muted-foreground"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
