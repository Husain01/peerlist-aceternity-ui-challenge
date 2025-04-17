"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function AnimatedCheckbox({
  label,
  checked: controlledChecked,
  onChange,
  className = "",
}: AnimatedCheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked = controlledChecked ?? internalChecked;

  const handleClick = () => {
    const newValue = !isChecked;
    setInternalChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={`relative flex items-center gap-3 select-none ${className}`}
      onClick={handleClick}
    >
      <div className="relative w-5 h-5">
        {/* Border */}
        <motion.svg
          className="absolute inset-0 w-5 h-5"
          viewBox="0 0 20 20"
          initial={false}
        >
          <motion.path
            d="M 18 10 L 18 18 L 2 18 L 2 2 L 18 2 L 18 10"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{
              pathLength: 1,
              pathOffset: 0,
            }}
            animate={{
              pathLength: isChecked ? 0 : 1,
              pathOffset: isChecked ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Background */}
        <motion.div
          className="absolute inset-0 rounded-sm bg-[#0066ff]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: isChecked ? 1 : 0.5,
            opacity: isChecked ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: 0.35,
            scale: { type: "spring", stiffness: 300, damping: 25 },
            opacity: { duration: 0.2 },
          }}
        />

        {/* Checkmark */}
        <motion.svg
          className="absolute inset-0 w-5 h-5 text-white"
          viewBox="0 0 24 24"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: isChecked ? 1 : 0.5,
            opacity: isChecked ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            scale: { type: "spring", stiffness: 300, damping: 25 },
          }}
        >
          <motion.path
            d="M5 13l4 4L19 7"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isChecked ? 1 : 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      {/* Label with strikethrough */}
      <div className="relative inline-flex items-center">
        <span className="text-gray-700 text-lg">{label}</span>
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={false}
          animate={{
            opacity: isChecked ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-full h-[1px] bg-gray-700 absolute top-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isChecked ? 1 : 0 }}
            style={{ originX: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
