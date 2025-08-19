export const dynamic = "force-static";

import HomeHero from "./HomeHero";
import React from "react";
import TopBar from "./TopBar";

interface HeaderProps {
  isHome: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  return isHome ? <HomeHero /> : <TopBar />;
};

export default Header;
