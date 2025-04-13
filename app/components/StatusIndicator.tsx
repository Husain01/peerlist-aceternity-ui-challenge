"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define status types
type StatusType = "analyzing" | "safe" | "warning";

// Status sequence
const STATUS_SEQUENCE: StatusType[] = [
  "analyzing",
  "safe",
  "analyzing",
  "warning",
];

// Status data with corresponding colors and icons
const statusData = {
  analyzing: {
    text: "Analyzing Transaction",
    textColor: "rgb(59 130 246)", // blue-500
    iconColor: "rgb(59 130 246)", // blue-500
    bgColor: "rgb(239 246 255)", // blue-50
  },
  safe: {
    text: "Transaction Safe",
    textColor: "rgb(34 197 94)", // green-500
    iconColor: "rgb(34 197 94)", // green-500
    bgColor: "rgb(240 253 244)", // green-50
  },
  warning: {
    text: "Transaction Warning",
    textColor: "rgb(239 68 68)", // red-500
    iconColor: "rgb(239 68 68)", // red-500
    bgColor: "rgb(254 242 242)", // red-50
  },
};

const StatusIndicator = () => {
  const [status, setStatus] = useState<StatusType>("analyzing");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Simple cycling through the sequence
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to next index in sequence
      const nextIndex = (index + 1) % STATUS_SEQUENCE.length;
      const nextStatus = STATUS_SEQUENCE[nextIndex];

      // Determine direction based on the transition
      if (
        (status === "analyzing" && nextStatus === "safe") ||
        (status === "analyzing" && nextStatus === "warning")
      ) {
        setDirection("forward");
      } else {
        setDirection("backward");
      }

      // Update state
      setIndex(nextIndex);
      setStatus(nextStatus);
    }, 3000);

    return () => clearInterval(timer);
  }, [index, status]);

  // Animation variants for text only
  const textVariants = {
    hiddenForward: { x: 30, opacity: 0 },
    hiddenBackward: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exitForward: { x: -30, opacity: 0 },
    exitBackward: { x: 30, opacity: 0 },
  };

  // Render the appropriate icon based on status
  const renderIcon = () => {
    switch (status) {
      case "analyzing":
        return (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: 360 }}
              transition={{
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              }}
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke={statusData[status].iconColor}
                strokeWidth="3"
                strokeDasharray="60"
                strokeDashoffset="20"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
        );
      case "safe":
        return (
          <motion.div
            key="check"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill={statusData[status].iconColor}
              />
              <path
                d="M8 12L11 15L16 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        );
      case "warning":
        return (
          <motion.div
            key="warning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill={statusData[status].iconColor}
              />
              <path
                d="M12 8V12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="16" r="1" fill="white" />
            </svg>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="rounded-full py-3 px-6 inline-flex items-center gap-3 mx-auto"
      style={{
        backgroundColor: statusData[status].bgColor,
        width: "max-content",
        minWidth: "280px",
      }}
    >
      {/* Icon container - animations happen inside but container stays fixed */}
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        <AnimatePresence initial={false} mode="wait">
          {renderIcon()}
        </AnimatePresence>
      </div>

      {/* Text container with fixed width to prevent layout shifts */}
      <div className="relative min-w-[180px] h-7 flex items-center overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={status}
            initial={
              direction === "forward" ? "hiddenForward" : "hiddenBackward"
            }
            animate="visible"
            exit={direction === "forward" ? "exitForward" : "exitBackward"}
            variants={textVariants}
            style={{ color: statusData[status].textColor }}
            className="text-lg font-medium whitespace-nowrap absolute"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {statusData[status].text}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StatusIndicator;
