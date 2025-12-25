"use client";

import { motion } from "motion/react";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/layout/section-wrapper";
import { githubUsername } from "@/constants/portfolio-data";
import { cn } from "@/lib/utils";
import { Github, Star, GitFork, Users, Code2 } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const stats = [
  { label: "Repositories", value: "50+", icon: Code2 },
  { label: "Stars Earned", value: "200+", icon: Star },
  { label: "Forks", value: "100+", icon: GitFork },
  { label: "Followers", value: "13", icon: Users },
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        "flex flex-col items-center gap-2 rounded-xl p-6",
        "border border-border bg-card",
        "transition-all hover:border-primary hover:glow-primary"
      )}
    >
      <stat.icon className="h-8 w-8 text-primary" />
      <span className="text-3xl font-bold text-foreground">{stat.value}</span>
      <span className="text-sm text-muted-foreground">{stat.label}</span>
    </motion.div>
  );
}

// Client-only GitHub Calendar wrapper
function GitHubCalendarWrapper({ username }: { username: string }) {
  return (
    <GitHubCalendar
      username={username}
      blockSize={15}
      blockMargin={5}
      fontSize={16}
    />
  );
}

export function GithubStatsSection() {
  return (
    <SectionWrapper id="github" className="bg-card/30">
      <SectionHeader
        title="GitHub Activity"
        subtitle="My open source contributions and coding activity"
      />

      {/* Stats Grid */}
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "overflow-x-auto rounded-xl p-6",
          "border border-border bg-card"
        )}
      >
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <Github className="h-5 w-5" />
          Contribution Graph
        </h3>
        <div className="flex justify-center">
          <GitHubCalendarWrapper username={githubUsername} />
        </div>
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <motion.a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-6 py-3",
            "border border-border bg-card",
            "font-medium transition-all hover:border-primary hover:glow-primary"
          )}
        >
          <Github className="h-5 w-5" />
          View GitHub Profile
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
