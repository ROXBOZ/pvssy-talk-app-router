export const dynamic = "force-static";

import HeaderNav from "./HeaderNav";
import React from "react";

const TopBar = async () => {
  return (
    <header className="customGrid items-baseline justify-between p-4">
      <div className="font-heading text-2xl">
        pvssy&nbsp;talk <sup>v3</sup>
      </div>
      <HeaderNav />
    </header>
  );
};

export default TopBar;
