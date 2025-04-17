"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingTabs() {
  const [selectedTab, setSelectedTab] = useState<"free" | "premium">("free");
  const [premiumType, setPremiumType] = useState<"monthly" | "annual">(
    "monthly"
  );

  // Spring animation configuration for smooth transitions
  const springConfig = {
    type: "spring",
    stiffness: 500,
    damping: 40,
    mass: 1,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-white rounded-full p-1 flex overflow-hidden shadow-md">
        {/* Main background indicator */}
        <motion.div
          className="absolute inset-y-0 bg-black rounded-full px-2"
          initial={{ width: "50%", left: 0 }}
          animate={{
            width: "50%",
            left: selectedTab === "free" ? 0 : "50%",
          }}
          transition={springConfig}
        />

        {/* Tabs content - always rendered */}
        <button
          onClick={() => setSelectedTab("free")}
          className={`relative z-10 py-2 text-sm font-medium flex-1 text-center ${
            selectedTab === "free" ? "text-white" : "text-gray-700"
          }`}
        >
          Free
        </button>

        <div className="relative flex-1">
          {selectedTab === "premium" ? (
            <div className="absolute inset-0 rounded-full flex">
              {/* Premium Sub-Tabs: Monthly and Annual */}
              <div className="relative flex-1 flex">
                <button
                  onClick={() => setPremiumType("monthly")}
                  className="z-20 py-2 px-4 text-sm font-medium flex-1 text-center"
                >
                  <span
                    className={
                      premiumType === "monthly" ? "text-black" : "text-white"
                    }
                  >
                    Monthly
                  </span>
                </button>
                <button
                  onClick={() => setPremiumType("annual")}
                  className="z-20 py-2 px-4 text-sm font-medium flex-1 text-center"
                >
                  <span
                    className={
                      premiumType === "annual" ? "text-black" : "text-white"
                    }
                  >
                    Annual
                  </span>
                </button>

                {/* Premium Sub-Tab Indicator */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full "
                  initial={{ x: 0, width: "50%" }}
                  animate={{
                    x: premiumType === "monthly" ? "3%" : "100%",
                    width: "50%",
                  }}
                  transition={springConfig}
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                setSelectedTab("premium");
                setPremiumType("monthly");
              }}
              className="relative z-10 py-2 px-4 text-sm font-medium w-full h-full text-center text-gray-700"
            >
              Premium
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
