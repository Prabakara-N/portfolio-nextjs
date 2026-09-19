"use client";

import {
  Terminal,
  type TerminalLoader,
} from "@/components/aceternity/terminal";

const COMMANDS = [
  "discipline.commit()",
  "consistency.push()",
  'curiosity.install("next-big-thing")',
  "career.next()",
];

const LOADERS: Record<number, TerminalLoader> = {
  0: { text: "Staging changes...", duration: 1400 },
  1: { text: "Writing objects:", duration: 1800, progress: true },
  2: { text: "Downloading:", duration: 1800, progress: true },
  3: { text: "Looking for opportunities...", duration: 1400 },
};

const OUTPUTS: Record<number, string[]> = {
  0: ["✔ Staged: daily practice", '✔ Committed: "learn, build, ship"'],
  1: ["✔ Pushed to origin/main", "ℹ Streak: every single day"],
  2: ["✔ Always learning, always shipping"],
  3: ["ℹ Status: available for new roles", "→ Scroll down to see what I work with"],
};

export function TerminalMantraSection() {
  return (
    <section
      id="mantra"
      className="relative border-y border-border bg-card/30 px-4 py-20"
    >
      <Terminal
        commands={COMMANDS}
        outputs={OUTPUTS}
        loaders={LOADERS}
        username="prabakaran"
        typingSpeed={45}
        delayBetweenCommands={1000}
        className="max-w-3xl px-0 text-sm"
      />
    </section>
  );
}
