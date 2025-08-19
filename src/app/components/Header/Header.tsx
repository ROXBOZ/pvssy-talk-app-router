export const dynamic = "force-static";

import HomeScreen from "./HomeHero";
import React from "react";
import TopBar from "./TopBar";

interface HeaderProps {
  isHome: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  return isHome ? <HomeScreen /> : <TopBar />;
};

export default Header;
