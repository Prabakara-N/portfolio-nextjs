"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] [mask:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center">
        {/* Animated 404 */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          {/* First 4 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-[8rem] md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-primary to-primary/50 leading-none select-none"
              animate={{
                textShadow: [
                  "0 0 20px var(--primary)",
                  "0 0 60px var(--primary)",
                  "0 0 20px var(--primary)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              4
            </motion.span>
            {/* Glitch layers */}
            <motion.span
              className="absolute inset-0 text-[8rem] md:text-[12rem] font-bold text-primary/30 leading-none select-none"
              animate={{
                x: [-2, 2, -2],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              4
            </motion.span>
          </motion.div>

          {/* Middle 0 with spinning ring */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <motion.span
              className="text-[8rem] md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-secondary to-secondary/50 leading-none select-none"
              animate={{
                textShadow: [
                  "0 0 20px var(--secondary)",
                  "0 0 60px var(--secondary)",
                  "0 0 20px var(--secondary)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              0
            </motion.span>
            {/* Rotating ring around 0 */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-dashed border-primary/30" />
            </motion.div>
          </motion.div>

          {/* Last 4 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="text-[8rem] md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-primary to-primary/50 leading-none select-none"
              animate={{
                textShadow: [
                  "0 0 20px var(--primary)",
                  "0 0 60px var(--primary)",
                  "0 0 20px var(--primary)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              4
            </motion.span>
            {/* Glitch layers */}
            <motion.span
              className="absolute inset-0 text-[8rem] md:text-[12rem] font-bold text-secondary/30 leading-none select-none"
              animate={{
                x: [2, -2, 2],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            >
              4
            </motion.span>
          </motion.div>
        </div>

        {/* Animated text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4 mb-8"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-foreground"
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Page Not Found
          </motion.h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void.
          </p>
        </motion.div>

        {/* Animated buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <motion.button
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Go Home
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
