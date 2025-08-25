import React from "react";

function StatsAnimation() {
  return (
    <div className="flex gap-4">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="bg-primary-300 flex aspect-square size-8 items-center justify-center rounded-full"
        >
          {i + 1}
        </span>
      ))}
      <span className="dot--glow bg-tertiary-400 flex aspect-square size-8 items-center justify-center rounded-full">
        5
      </span>
    </div>
  );
}

export default StatsAnimation;
