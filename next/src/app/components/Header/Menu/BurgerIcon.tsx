import React from "react";

function BurgerIcon({ isClosed }: { isClosed: boolean }) {
  return (
    <div className="*:bg-primary-950 flex size-6 flex-col items-center justify-center gap-1">
      <div
        className={`h-[1.5px] w-6 rounded transition-all duration-300 ${isClosed ? "translate-y-2 rotate-45" : ""}`}
      />
      <div
        className={`h-[1.5px] w-6 rounded transition-all duration-300 ${isClosed ? "opacity-0" : ""}`}
      />
      <div
        className={`h-[1.5px] w-6 rounded transition-all duration-300 ${isClosed ? "mt-[4.5px] -translate-y-2 -rotate-45" : ""}`}
      />
    </div>
  );
}

export default BurgerIcon;
