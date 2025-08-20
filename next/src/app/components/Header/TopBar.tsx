export const dynamic = "force-static";

import HeaderNav from "./HeaderNav";
import React from "react";

interface HeaderNavProps {
  headerMenu?: {
    _type: string;
    title?: string;
    link?: string;
    isAction?: boolean;
    content?: {
      pages?: { title: string; slug: { current: string } }[];
    };
  }[];
}

const TopBar = async () => {
  return (
    <header className="customGrid items-baseline justify-between p-4">
      <div className="font-heading text-2xl">
        pvssy&nbsp;talk <sup>v3</sup>
      </div>
      <HeaderNav />
      {/* <HeaderNav headerMenu={data?.headerMenu} /> */}
    </header>
  );
};

export default TopBar;
