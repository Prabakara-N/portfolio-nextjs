"use client";

import {
  Terminal,
  type TerminalLoader,
} from "@/components/aceternity/terminal";

const COMMANDS = ["discipline.commit()", "consistency.push()"];

const LOADERS: Record<number, TerminalLoader> = {
  0: { text: "Staging changes...", duration: 1400 },
  1: { text: "Writing objects:", duration: 1800, progress: true },
};

const OUTPUTS: Record<number, string[]> = {
  0: ["✔ Staged: daily practice", '✔ Committed: "learn, build, ship"'],
  1: ["✔ Pushed to origin/main", "ℹ Streak: every single day"],
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
