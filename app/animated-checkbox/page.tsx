"use client";

import AnimatedCheckbox from "../components/AnimatedCheckbox";

export default function AnimatedCheckboxDemo() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="w-[400px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-gray-800">lol</h1>
          <AnimatedCheckbox label="Buy groceries" />
          <AnimatedCheckbox label="Contemplate existence" />
          <AnimatedCheckbox label="Learn SwiftUI" />
        </div>
      </div>
    </div>
  );
}
