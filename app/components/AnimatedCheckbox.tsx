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
        <motion.div
          className="absolute inset-0 rounded-sm border-2 border-gray-300"
          initial={false}
          animate={{
            opacity: isChecked ? 0 : 1,
            scale: isChecked ? 1.2 : 1,
          }}
          transition={{
            duration: 0.2,
            scale: { type: "spring", stiffness: 300, damping: 25 },
          }}
        />

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
            delay: 0.1,
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
            transition={{ duration: 0.2, delay: 0.2 }}
          />
        </motion.svg>
      </div>

      {/* Label */}
      <motion.span
        className="text-gray-700 text-lg"
        initial={false}
        animate={{
          textDecoration: isChecked ? "line-through" : "none",
          opacity: isChecked ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </div>
  );
}
