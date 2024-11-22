import React from "react";

const Glass = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-blue-500 to-purple-700">
      <div className="relative w-80 p-6 bg-white/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Glassmorphism
        </h2>
        <p className="text-white/80 mb-4">
          This card uses a frosted-glass effect achieved with Tailwind CSS.
        </p>
        <button className="px-4 py-2 bg-white/20 text-white rounded-md border border-white/10 hover:bg-white/30 transition">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Glass;
