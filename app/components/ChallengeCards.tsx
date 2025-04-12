"use client";

import Link from "next/link";

const challenges = [
  {
    day: 1,
    title: "Gooey Filter Menu",
    description:
      "A menu that transforms with natural, liquid-like animations when triggered.",
    path: "/day-1-gooeyMenu",
    status: "completed",
  },
  {
    day: 2,
    title: "Challenge 2",
    description: "Coming soon...",
    path: "#",
    status: "upcoming",
  },
  {
    day: 3,
    title: "Challenge 3",
    description: "Coming soon...",
    path: "#",
    status: "upcoming",
  },
  {
    day: 4,
    title: "Challenge 4",
    description: "Coming soon...",
    path: "#",
    status: "upcoming",
  },
  {
    day: 5,
    title: "Challenge 5",
    description: "Coming soon...",
    path: "#",
    status: "upcoming",
  },
];

export default function ChallengeCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {challenges.map((challenge) => (
        <Link
          href={challenge.path}
          key={challenge.day}
          className={`
            block group rounded-xl overflow-hidden shadow-lg transition-all duration-300 
            hover:shadow-xl hover:-translate-y-1 
            ${
              challenge.status === "upcoming"
                ? "opacity-50 pointer-events-none"
                : ""
            }
          `}
        >
          <div className="bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 font-bold text-sm">
                {challenge.day}
              </span>
              {challenge.status === "completed" ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Completed
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  Upcoming
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {challenge.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {challenge.description}
            </p>

            {challenge.status === "completed" && (
              <div className="flex justify-end">
                <span className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  View Challenge
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
