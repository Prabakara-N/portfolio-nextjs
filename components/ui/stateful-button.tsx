"use client";

import { useState } from "react";
import { motion, AnimatePresence, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { Check, Loader2, X } from "lucide-react";

type ButtonState = "idle" | "loading" | "success" | "error";

interface StatefulButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  onClick?: () => Promise<boolean | void> | boolean | void;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  successDuration?: number;
}

export function StatefulButton({
  children,
  onClick,
  loadingText = "Sending...",
  successText = "Sent!",
  errorText = "Failed! Try again",
  successDuration = 2000,
  className,
  disabled,
  type = "button",
  ...props
}: StatefulButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>("idle");

  const handleClick = async () => {
    if (buttonState !== "idle" || disabled) return;

    setButtonState("loading");

    try {
      if (onClick) {
        const result = await onClick();
        // If onClick returns false, validation failed - go back to idle
        if (result === false) {
          setButtonState("idle");
          return;
        }
      }
      setButtonState("success");

      setTimeout(() => {
        setButtonState("idle");
      }, successDuration);
    } catch {
      setButtonState("error");
      setTimeout(() => {
        setButtonState("idle");
      }, successDuration);
    }
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || buttonState !== "idle"}
      onClick={handleClick}
      whileHover={{ scale: buttonState === "idle" ? 1.02 : 1 }}
      whileTap={{ scale: buttonState === "idle" ? 0.98 : 1 }}
      className={cn(
        "relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3",
        "font-medium transition-all duration-300",
        buttonState === "idle" && "bg-primary text-primary-foreground",
        buttonState === "loading" && "bg-primary/80 text-primary-foreground",
        buttonState === "success" && "bg-emerald-500 text-white",
        buttonState === "error" && "bg-red-500 text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <AnimatePresence mode="wait">
        {buttonState === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.span>
        )}

        {buttonState === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            {loadingText}
          </motion.span>
        )}

        {buttonState === "success" && (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Check className="h-5 w-5" />
            </motion.div>
            {successText}
          </motion.span>
        )}

        {buttonState === "error" && (
          <motion.span
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
            {errorText}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Success ripple effect */}
      {buttonState === "success" && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 rounded-lg bg-white"
        />
      )}
    </motion.button>
  );
}
