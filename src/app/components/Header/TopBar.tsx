import HeaderNav from "./HeaderNav";
import React from "react";

function TopBar() {
  return (
    <header
      aria-label="Header"
      className="justify-between items-baseline customGrid"
    >
      <div className="font-heading text-2xl">pvssy talk</div>
      <HeaderNav />
    </header>
  );
}

export default TopBar;
