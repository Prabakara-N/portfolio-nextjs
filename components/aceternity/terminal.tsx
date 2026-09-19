"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

const KEY_SOUNDS_DOWN: Record<string, [number, number]> = {
  A: [31542, 85],
  B: [40621, 107],
  C: [39632, 95],
  D: [32492, 85],
  E: [23317, 83],
  F: [32973, 87],
  G: [33453, 94],
  H: [33986, 93],
  I: [25795, 91],
  J: [34425, 88],
  K: [34932, 90],
  L: [35410, 95],
  M: [41610, 93],
  N: [41103, 90],
  O: [26309, 84],
  P: [26804, 83],
  Q: [22245, 95],
  R: [23817, 92],
  S: [32031, 88],
  T: [24297, 92],
  U: [25313, 95],
  V: [40136, 94],
  W: [22790, 89],
  X: [39148, 76],
  Y: [24811, 93],
  Z: [38694, 80],
  " ": [51541, 144],
  "-": [42594, 90],
  "@": [23317, 83],
  "/": [42594, 90],
  ".": [42594, 90],
  ":": [42594, 90],
  "0": [26309, 84],
  "1": [25313, 95],
  "2": [23317, 83],
  "3": [23817, 92],
  "4": [24297, 92],
  "5": [24811, 93],
  "6": [25313, 95],
  "7": [25795, 91],
  "8": [26309, 84],
  "9": [26804, 83],
  Enter: [19065, 110],
};

const KEY_SOUNDS_UP: Record<string, [number, number]> = {
  A: [31632, 80],
  B: [40736, 95],
  C: [39732, 85],
  D: [32577, 80],
  E: [23402, 80],
  F: [33063, 80],
  G: [33553, 85],
  H: [34081, 85],
  I: [25890, 85],
  J: [34515, 85],
  K: [35027, 85],
  L: [35510, 85],
  M: [41710, 85],
  N: [41198, 85],
  O: [26394, 80],
  P: [26889, 80],
  Q: [22345, 85],
  R: [23912, 85],
  S: [32121, 80],
  T: [24392, 85],
  U: [25413, 85],
  V: [40236, 85],
  W: [22880, 85],
  X: [39228, 70],
  Y: [24911, 85],
  Z: [38779, 75],
  " ": [51691, 130],
  "-": [42689, 85],
  "@": [23402, 80],
  "/": [42689, 85],
  ".": [42689, 85],
  ":": [42689, 85],
  "0": [26394, 80],
  "1": [25413, 85],
  "2": [23402, 80],
  "3": [23912, 85],
  "4": [24392, 85],
  "5": [24911, 85],
  "6": [25413, 85],
  "7": [25890, 85],
  "8": [26394, 80],
  "9": [26889, 80],
  Enter: [19180, 100],
};

function useAudio(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    readyRef.current = false;
    if (!enabled) return;

    const controller = new AbortController();
    let context: AudioContext | null = null;
    let started = false;

    const removeListeners = () => {
      window.removeEventListener("click", initAudio);
      window.removeEventListener("keydown", initAudio);
    };

    // Keep automatic demos silent until the user clicks, taps, or presses a key.
    async function initAudio() {
      if (started) return;
      started = true;
      removeListeners();

      try {
        context = new AudioContext();
        ctxRef.current = context;
        // Resume during the user gesture, before the download completes.
        void context.resume().catch(() => {});
        const response = await fetch("/sounds/sound.ogg", {
          signal: controller.signal,
        });
        if (!response.ok || controller.signal.aborted) return;
        const bytes = await response.arrayBuffer();
        if (controller.signal.aborted) return;
        const buffer = await context.decodeAudioData(bytes);
        if (controller.signal.aborted) return;
        bufferRef.current = buffer;
        readyRef.current = true;
      } catch {
        // A failed download or an unmounted demo must not stop the animation.
      }
    }

    window.addEventListener("click", initAudio, { once: true });
    window.addEventListener("keydown", initAudio, { once: true });

    return () => {
      removeListeners();
      controller.abort();
      readyRef.current = false;
      bufferRef.current = null;
      ctxRef.current = null;
      if (context) void context.close().catch(() => {});
    };
  }, [enabled]);

  // Stable callbacks (they only read refs) so the typing effect doesn't
  // re-run, and replay a keystroke sound, on every unrelated re-render.
  const playSound = useCallback((sound: [number, number] | undefined) => {
    if (!readyRef.current || !ctxRef.current || !bufferRef.current || !sound)
      return;
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    const src = ctxRef.current.createBufferSource();
    src.buffer = bufferRef.current;
    src.connect(ctxRef.current.destination);
    src.start(0, sound[0] / 1000, sound[1] / 1000);
  }, []);

  const down = useCallback(
    (key: string) =>
      playSound(KEY_SOUNDS_DOWN[key.toUpperCase()] || KEY_SOUNDS_DOWN[key]),
    [playSound],
  );
  const up = useCallback(
    (key: string) =>
      playSound(KEY_SOUNDS_UP[key.toUpperCase()] || KEY_SOUNDS_UP[key]),
    [playSound],
  );

  return { down, up };
}

function useInView(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [inView, setInView] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && triggered.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          setInView(true);
          if (once) {
            triggered.current = true;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once]);

  return inView;
}

type TokenType =
  | "command"
  | "flag"
  | "string"
  | "number"
  | "operator"
  | "path"
  | "variable"
  | "comment"
  | "default";

interface Token {
  type: TokenType;
  value: string;
}

function tokenizeBash(text: string): Token[] {
  const tokens: Token[] = [];
  const words = text.split(/(\s+)/);

  let isFirstWord = true;

  for (const word of words) {
    if (/^\s+$/.test(word)) {
      tokens.push({ type: "default", value: word });
      continue;
    }

    if (word.startsWith("#")) {
      tokens.push({ type: "comment", value: word });
      continue;
    }

    if (word.startsWith("$")) {
      tokens.push({ type: "variable", value: word });
      isFirstWord = false;
      continue;
    }

    if (word.startsWith("--") || word.startsWith("-")) {
      tokens.push({ type: "flag", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^["'].*["']$/.test(word)) {
      tokens.push({ type: "string", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^\d+$/.test(word)) {
      tokens.push({ type: "number", value: word });
      isFirstWord = false;
      continue;
    }

    if (/^[|>&<]+$/.test(word)) {
      tokens.push({ type: "operator", value: word });
      isFirstWord = true;
      continue;
    }

    if (word.includes("/") || word.startsWith(".") || word.startsWith("~")) {
      tokens.push({ type: "path", value: word });
      isFirstWord = false;
      continue;
    }

    if (isFirstWord) {
      tokens.push({ type: "command", value: word });
      isFirstWord = false;
      continue;
    }

    tokens.push({ type: "default", value: word });
  }

  return tokens;
}

const tokenColors: Record<TokenType, string> = {
  command: "text-emerald-400",
  flag: "text-sky-400",
  string: "text-amber-300",
  number: "text-purple-400",
  operator: "text-red-400",
  path: "text-cyan-300",
  variable: "text-pink-400",
  comment: "text-neutral-500",
  default: "text-neutral-300",
};

function SyntaxHighlightedText({ text }: { text: string }) {
  const tokens = tokenizeBash(text);

  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} className={tokenColors[token.type]}>
          {token.value}
        </span>
      ))}
    </>
  );
}

interface TerminalLine {
  type: "command" | "output";
  content: string;
}

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const SPINNER_INTERVAL_MS = 80;
const PROGRESS_BAR_WIDTH = 20;

/** A loading line shown after a command runs, before its outputs appear. */
export interface TerminalLoader {
  text: string;
  /** How long the loader runs, in ms. */
  duration?: number;
  /** Show a filling progress bar (like `git push`) instead of a spinner. */
  progress?: boolean;
}

function progressLine(text: string, ratio: number) {
  const filled = Math.round(ratio * PROGRESS_BAR_WIDTH);
  const bar = "█".repeat(filled) + "░".repeat(PROGRESS_BAR_WIDTH - filled);
  return `${text} [${bar}] ${Math.round(ratio * 100)}%`;
}

export interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  /** Optional loading line per command index, shown before its outputs. */
  loaders?: Record<number, TerminalLoader>;
  username?: string;
  className?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;
  enableSound?: boolean;
  /**
   * Fixed height of the output area in px; it scrolls instead of growing.
   * Leave unset to reserve exactly the space the finished transcript needs at
   * the current width, so the box never grows or scrolls on any screen size.
   */
  height?: number;
}

export function Terminal({
  commands = ["npx shadcn@latest init"],
  outputs = {},
  loaders = {},
  username = "Manus-Macbook",
  className,
  typingSpeed = 50,
  delayBetweenCommands = 800,
  initialDelay = 500,
  enableSound = true,
  height,
}: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const { down, up } = useAudio(enableSound);

  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIdx, setCommandIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [outputIdx, setOutputIdx] = useState(-1);
  const [phase, setPhase] = useState<
    "idle" | "typing" | "loading" | "outputting" | "pausing" | "done"
  >("idle");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [loaderFrame, setLoaderFrame] = useState(0);

  const currentCommand = commands[commandIdx] || "";
  const currentOutputs = useMemo(
    () => outputs[commandIdx] || [],
    [outputs, commandIdx],
  );
  const isLastCommand = commandIdx === commands.length - 1;

  // Everything the terminal shows once finished; rendered invisibly to size it.
  const finalLines = useMemo<TerminalLine[]>(
    () =>
      commands.flatMap((command, i) => {
        const loader = loaders[i];
        return [
          { type: "command" as const, content: command },
          ...(loader?.progress
            ? [{ type: "output" as const, content: progressLine(loader.text, 1) }]
            : []),
          ...(outputs[i] ?? []).map((content) => ({
            type: "output" as const,
            content,
          })),
        ];
      }),
    [commands, loaders, outputs],
  );
  const loaderText = loaders[commandIdx]?.text;
  const loaderDuration = loaders[commandIdx]?.duration ?? 1500;
  const loaderIsProgress = loaders[commandIdx]?.progress ?? false;

  // Moves on once a command (and its loader, if any) has finished running.
  const finishCommand = useCallback(() => {
    if (currentOutputs.length > 0) {
      setOutputIdx(0);
      setPhase("outputting");
    } else if (isLastCommand) {
      setPhase("done");
    } else {
      setPhase("pausing");
    }
  }, [currentOutputs.length, isLastCommand]);

  const replay = () => {
    setLines([]);
    setCurrentText("");
    setCommandIdx(0);
    setCharIdx(0);
    setOutputIdx(-1);
    setLoaderFrame(0);
    setPhase("idle");
  };

  useEffect(() => {
    if (!inView || phase !== "idle") return;
    const t = setTimeout(() => setPhase("typing"), initialDelay);
    return () => clearTimeout(t);
  }, [inView, phase, initialDelay]);

  useEffect(() => {
    if (phase !== "typing") return;

    if (charIdx < currentCommand.length) {
      const char = currentCommand[charIdx];
      down(char);
      const t = setTimeout(
        () => {
          up(char);
          setCurrentText(currentCommand.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        },
        typingSpeed + Math.random() * 30,
      );
      return () => clearTimeout(t);
    } else {
      down("Enter");
      // Execute the command inside the timer callback rather than a separate
      // "executing" effect, so no state is set synchronously in an effect body.
      const t = setTimeout(() => {
        up("Enter");
        setLines((prev) => [
          ...prev,
          { type: "command", content: currentCommand },
        ]);
        setCurrentText("");

        if (loaderText) {
          setLoaderFrame(0);
          setPhase("loading");
        } else {
          finishCommand();
        }
      }, 80);
      return () => clearTimeout(t);
    }
  }, [
    phase,
    charIdx,
    currentCommand,
    loaderText,
    finishCommand,
    typingSpeed,
    down,
    up,
  ]);

  useEffect(() => {
    if (phase !== "loading" || !loaderText) return;
    const spin = setInterval(
      () => setLoaderFrame((f) => f + 1),
      SPINNER_INTERVAL_MS,
    );
    const done = setTimeout(() => {
      // A finished progress bar stays on screen, like git's "100%" line;
      // a spinner just disappears once its outputs take over.
      if (loaderIsProgress) {
        setLines((prev) => [
          ...prev,
          { type: "output", content: progressLine(loaderText, 1) },
        ]);
      }
      finishCommand();
    }, loaderDuration);
    return () => {
      clearInterval(spin);
      clearTimeout(done);
    };
  }, [phase, loaderText, loaderDuration, loaderIsProgress, finishCommand]);

  useEffect(() => {
    if (phase !== "outputting") return;

    if (outputIdx >= 0 && outputIdx < currentOutputs.length) {
      const t = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: "output", content: currentOutputs[outputIdx] },
        ]);
        setOutputIdx((i) => i + 1);
      }, 150);
      return () => clearTimeout(t);
    } else if (outputIdx >= currentOutputs.length) {
      const t = setTimeout(() => {
        if (isLastCommand) {
          setPhase("done");
        } else {
          setPhase("pausing");
        }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [phase, outputIdx, currentOutputs, isLastCommand]);

  useEffect(() => {
    if (phase !== "pausing") return;
    const t = setTimeout(() => {
      setCharIdx(0);
      setOutputIdx(-1);
      setCommandIdx((c) => c + 1);
      setPhase("typing");
    }, delayBetweenCommands);
    return () => clearTimeout(t);
  }, [phase, delayBetweenCommands]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines, phase, loaderFrame]);

  const renderLine = (line: TerminalLine, i: number) => (
    <div key={i} className="leading-relaxed whitespace-pre-wrap">
      {line.type === "command" ? (
        <span>
          {prompt}
          <SyntaxHighlightedText text={line.content} />
        </span>
      ) : (
        <span className="text-neutral-400">{line.content}</span>
      )}
    </div>
  );

  const prompt = (
    <span className="text-neutral-500">
      <span className="text-sky-500">{username}</span>
      <span className="text-emerald-600">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-neutral-500">$</span>{" "}
    </span>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "mx-auto w-full max-w-xl px-4 font-mono text-xs",
        className,
      )}
    >
      <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-2xl">
        {/* Title Bar */}
        <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-600" />
            <div className="h-3 w-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-600" />
            <div className="h-3 w-3 rounded-full bg-green-500 transition-colors hover:bg-green-600" />
          </div>
          <div className="flex-1 text-center">
            <span className="truncate text-xs text-neutral-400">
              {username} — bash
            </span>
          </div>
          {enableSound ? (
            // Browsers only allow audio after a click, so this click both
            // unlocks sound and replays the animation to hear it.
            <button
              type="button"
              onClick={replay}
              aria-label="Replay with sound"
              title="Replay with sound"
              className="flex w-[52px] justify-end text-neutral-400 transition-colors hover:text-neutral-100"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          ) : (
            <div className="w-[52px]" />
          )}
        </div>

        {/* Terminal Content */}
        <div
          // Inline so the height holds even if the stylesheet is stale or slow.
          style={height ? { height } : undefined}
          className={cn(
            "grid p-4 font-mono",
            height && "no-visible-scrollbar overflow-y-auto",
          )}
        >
          {!height && (
            // Invisible full transcript sharing the live content's grid cell,
            // so the box is exactly as tall as the finished output.
            <div aria-hidden="true" className="invisible col-start-1 row-start-1">
              {finalLines.map(renderLine)}
              <div className="leading-relaxed whitespace-pre-wrap">
                {prompt}
                <span className="inline-block h-4 w-2 align-middle" />
              </div>
            </div>
          )}

          <div ref={contentRef} className="col-start-1 row-start-1">
          {lines.map(renderLine)}

          {phase === "typing" && (
            <div className="leading-relaxed whitespace-pre-wrap">
              {prompt}
              <SyntaxHighlightedText text={currentText} />
              <span className="ml-0.5 inline-block h-4 w-2 bg-neutral-300 align-middle" />
            </div>
          )}

          {phase === "loading" && loaderText && (
            <div className="leading-relaxed whitespace-pre-wrap text-neutral-400">
              {loaderIsProgress ? (
                progressLine(
                  loaderText,
                  Math.min(
                    1,
                    (loaderFrame * SPINNER_INTERVAL_MS) / loaderDuration,
                  ),
                )
              ) : (
                <>
                  <span className="text-sky-400">
                    {SPINNER_FRAMES[loaderFrame % SPINNER_FRAMES.length]}
                  </span>{" "}
                  {loaderText}
                </>
              )}
            </div>
          )}

          {(phase === "done" ||
            phase === "pausing" ||
            phase === "outputting") && (
            <div className="leading-relaxed whitespace-pre-wrap">
              {prompt}
              <span
                className={cn(
                  "inline-block h-4 w-2 bg-neutral-300 align-middle transition-opacity duration-100",
                  !cursorVisible && "opacity-0",
                )}
              />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
